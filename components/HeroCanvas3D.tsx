"use client";

import { useEffect, useRef } from "react";
import type * as ThreeTypes from "three";

export default function HeroCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let animFrameId: number;
    let cleanup: (() => void) | undefined;

    // Dynamically import to avoid SSR issues
    Promise.all([
      import("three"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([THREE, { gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const canvas = canvasRef.current;
      if (!canvas) return;

      // ── Renderer ────────────────────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      // ── Scene / Camera ───────────────────────────────────────────────────
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 5);

      // ── Materials ────────────────────────────────────────────────────────
      const neonMat = new THREE.MeshStandardMaterial({
        color: 0x00ff2e,
        emissive: 0x00ff2e,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.7,
        wireframe: false,
      });
      const dimMat = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        emissive: 0x003300,
        emissiveIntensity: 0.1,
        roughness: 0.6,
        metalness: 0.5,
        transparent: true,
        opacity: 0.5,
      });
      const wireMat = new THREE.MeshStandardMaterial({
        color: 0x00ff2e,
        emissive: 0x00cc22,
        emissiveIntensity: 0.3,
        roughness: 0.1,
        metalness: 0.9,
        transparent: true,
        opacity: 0.15,
        wireframe: true,
      });

      // ── Lights ───────────────────────────────────────────────────────────
      const ambient = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambient);

      const neonPoint = new THREE.PointLight(0x00ff2e, 8, 20);
      neonPoint.position.set(2, 3, 4);
      scene.add(neonPoint);

      const rimLight = new THREE.PointLight(0x00ff2e, 3, 15);
      rimLight.position.set(-4, -2, -2);
      scene.add(rimLight);

      const whiteKey = new THREE.DirectionalLight(0xffffff, 1.2);
      whiteKey.position.set(3, 5, 5);
      scene.add(whiteKey);

      // ── Meshes ───────────────────────────────────────────────────────────
      // Main hero torus (top right quadrant)
      const torusGeo = new THREE.TorusGeometry(1.6, 0.4, 32, 80);
      const torus = new THREE.Mesh(torusGeo, neonMat);
      torus.position.set(3.5, 0.5, -1);
      torus.rotation.set(0.4, 0.2, 0.3);
      scene.add(torus);

      // Wire torus (larger, behind)
      const wireTorus = new THREE.Mesh(
        new THREE.TorusGeometry(2.4, 0.12, 16, 100),
        wireMat
      );
      wireTorus.position.set(3.2, 0.2, -2.5);
      wireTorus.rotation.set(0.6, 0.4, 0.1);
      scene.add(wireTorus);

      // Icosahedron (left side, mid)
      const icoGeo = new THREE.IcosahedronGeometry(0.9, 1);
      const ico = new THREE.Mesh(icoGeo, dimMat);
      ico.position.set(-3.5, -1.5, -1);
      scene.add(ico);

      // Small floating spheres
      const spherePositions: [number, number, number][] = [
        [1.2, 2.8, -0.5],
        [-1.8, 1.4, -1.2],
        [2.8, -2.2, -0.8],
        [-0.5, -3.0, -0.5],
        [4.2, 2.0, -2.0],
        [-3.2, 2.5, -1.5],
      ];
      const floatMeshes: ThreeTypes.Mesh[] = [];
      spherePositions.forEach(([x, y, z], i) => {
        const radius = [0.12, 0.08, 0.15, 0.1, 0.09, 0.11][i];
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(radius, 16, 16),
          new THREE.MeshStandardMaterial({
            color: 0x00ff2e,
            emissive: 0x00ff2e,
            emissiveIntensity: 1.0,
            transparent: true,
            opacity: 0.9,
          })
        );
        mesh.position.set(x, y, z);
        scene.add(mesh);
        floatMeshes.push(mesh);
      });

      // Octahedron accent
      const octGeo = new THREE.OctahedronGeometry(0.5, 0);
      const oct = new THREE.Mesh(octGeo, new THREE.MeshStandardMaterial({
        color: 0x00ff2e,
        emissive: 0x00aa22,
        emissiveIntensity: 0.5,
        roughness: 0.1,
        metalness: 1.0,
        transparent: true,
        opacity: 0.6,
      }));
      oct.position.set(-2.2, 2.8, -0.8);
      scene.add(oct);

      // ── Scroll State ─────────────────────────────────────────────────────
      let scrollProgress = 0;
      const onScroll = () => {
        scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      };
      window.addEventListener("scroll", onScroll, { passive: true });

      // ── Mouse Parallax ───────────────────────────────────────────────────
      const mouse = { x: 0, y: 0 };
      const onMouse = (e: MouseEvent) => {
        mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouse, { passive: true });

      // ── GSAP scroll-driven camera + scene ────────────────────────────────
      const gsapCtx = gsap.context(() => {
        // Torus spins deeper on scroll
        gsap.to(torus.rotation, {
          x: Math.PI * 2,
          y: Math.PI,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "80% bottom",
            scrub: 2,
          },
        });
        gsap.to(wireTorus.rotation, {
          x: -Math.PI,
          y: Math.PI * 1.5,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "80% bottom",
            scrub: 3,
          },
        });
        // Camera drifts on scroll
        gsap.to(camera.position, {
          x: -1.5,
          y: -1.0,
          z: 6.5,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "80% bottom",
            scrub: 1.5,
          },
        });
        // Ico rotates
        gsap.to(ico.rotation, {
          x: Math.PI * 1.5,
          y: Math.PI,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "80% bottom",
            scrub: 2.5,
          },
        });
        // Oct spins
        gsap.to(oct.rotation, {
          y: Math.PI * 3,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "80% bottom",
            scrub: 2,
          },
        });
      });

      // ── Resize ───────────────────────────────────────────────────────────
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      // ── Render Loop ──────────────────────────────────────────────────────
      const clock = new THREE.Clock();
      const render = () => {
        animFrameId = requestAnimationFrame(render);
        const t = clock.getElapsedTime();

        // Continuous idle rotation
        torus.rotation.z += 0.003;
        wireTorus.rotation.z -= 0.001;
        ico.rotation.y += 0.005;
        oct.rotation.x += 0.008;
        oct.rotation.y += 0.004;

        // Float spheres
        floatMeshes.forEach((m, i) => {
          m.position.y += Math.sin(t * 0.8 + i * 1.2) * 0.002;
          m.position.x += Math.cos(t * 0.6 + i * 0.8) * 0.001;
        });

        // Mouse parallax on scene
        scene.rotation.y = THREE.MathUtils.lerp(scene.rotation.y, mouse.x * 0.05, 0.02);
        scene.rotation.x = THREE.MathUtils.lerp(scene.rotation.x, mouse.y * 0.03, 0.02);

        // Neon pulse
        neonPoint.intensity = 6 + Math.sin(t * 2.0) * 2;

        renderer.render(scene, camera);
      };
      render();

      // ── Cleanup ──────────────────────────────────────────────────────────
      cleanup = () => {
        cancelAnimationFrame(animFrameId);
        gsapCtx.revert();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("mousemove", onMouse);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        torusGeo.dispose();
        icoGeo.dispose();
        octGeo.dispose();
        neonMat.dispose();
        dimMat.dispose();
        wireMat.dispose();
      };
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        0,
        opacity:       0.65,
      }}
      aria-hidden="true"
    />
  );
}
