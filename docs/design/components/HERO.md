# Hero Section Component

## Overview

The SpaceFit hero section is the **most impactful visual element** on the page. It combines a full-viewport dark background, a dramatic athlete photograph, a commanding headline, and a dual-CTA layout. The composition is intentionally asymmetric — headline left-anchored, athlete positioned right — creating dynamic negative space.

Reference: Image 1–2 in `/docs/design/references/`.

---

## Visual Anatomy

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [NAV — 64px]                                                            │
│─────────────────────────────────────────────────────────────────────────│
│                                                                          │
│  BREAK YOUR                           [Athlete silhouette               │
│  BIOLOGICAL                            sprinting, neon-tinted,          │
│  CEILING                               positioned right 40–60%]        │
│                                                                          │
│  Experience a fitness space designed around you.                         │
│  Cutting-edge technology, elite coaching.                               │
│                                                                          │
│  [GET A TOUR ▶]    [▶ WATCH VIDEO]                                      │
│                                                                          │
│─────────────────────────────────────────────────────────────────────────│
│  [Section indicator bar]   Features   Gym   Shop   Pricing              │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Specifications

### Section
- **Min Height**: `100vh` (full viewport)
- **Background**: `#0a0a0a`
- **Overflow**: `hidden` (contain athlete image bleed)
- **Position**: `relative`

### Background Treatment
```css
/* Option A: Dark overlay on photo */
background: linear-gradient(
  105deg,
  rgba(0, 0, 0, 0.97) 0%,
  rgba(0, 0, 0, 0.85) 45%,
  rgba(0, 0, 0, 0.4) 70%,
  rgba(0, 0, 0, 0.1) 100%
);

/* Option B: Neon green atmospheric tint (bottom-left) */
background: radial-gradient(
  ellipse 60% 50% at -10% 120%,
  rgba(0, 255, 46, 0.12) 0%,
  transparent 70%
);
```

### Athlete Image
- **Position**: Absolute, right `0`, height `100%`
- **Width**: `55–60%` of viewport
- **Object Fit**: `cover`, `object-position: center top`
- **z-index**: `0`
- **Blend Mode**: `luminosity` or `normal` with overlay gradient

### Content Container
- **Max Width**: 1280px, `mx-auto`
- **Padding**: `0 40px` desktop, `0 20px` mobile
- **Vertical Alignment**: `flex items-center` (center vertically)
- **Content Width**: `max-w-lg` (prevents overlap with athlete)
- **z-index**: `10` (above image)

---

## Typography

### Eyebrow Label
- **Text**: e.g. "MEMBER OF CHALLENGE" or tagline marker
- **Style**: `section-label` (DM Sans, 0.75rem, 600w, `0.1em` tracking, uppercase)
- **Color**: `#00FF2E`
- **Margin Bottom**: 16px

### Headline
- **Font**: `Barlow Condensed`, 900 weight
- **Size**: `6rem` (96px) desktop → `3.5rem` (56px) mobile
- **Line Height**: `0.95`
- **Letter Spacing**: `-0.03em`
- **Transform**: `uppercase`
- **Color**: `#ffffff`
- **Max Width**: `8 words / 3 lines`

#### Neon Accent Word
One word in the headline uses neon color or a subtle neon underline:
```tsx
BIOLOGICAL <span className="text-neon">CEILING</span>
// or
BREAK YOUR <span className="relative inline-block">
  BIOLOGICAL
  <span className="absolute inset-x-0 bottom-0 h-[3px] bg-neon" />
</span>
```

### Subheadline
- **Font**: DM Sans, 400 weight
- **Size**: `1.125rem` (18px) → `1rem` mobile
- **Line Height**: `1.65`
- **Color**: `#b0b0b0`
- **Max Width**: `480px`
- **Margin Top**: `20px`

---

## CTA Buttons

### Primary CTA — "Get a Tour"
```tsx
<button className="btn-primary !py-3.5 !px-8 !text-base">
  <ArrowRight size={16} />
  Get a Tour
</button>
```

### Secondary CTA — "Watch Video"
```tsx
<button className="
  flex items-center gap-3
  text-text-secondary hover:text-white
  transition-colors duration-200
  group
">
  <span className="
    w-11 h-11
    rounded-full
    border-2 border-white/20
    flex items-center justify-center
    bg-white/5
    group-hover:border-neon/60 group-hover:bg-neon/10
    transition-all duration-300
  ">
    <Play size={14} className="ml-0.5" fill="currentColor" />
  </span>
  <span className="font-body text-sm font-medium tracking-wider uppercase">
    Watch Video
  </span>
</button>
```

### Button Group Layout
```tsx
<div className="flex flex-wrap items-center gap-4 mt-10">
  <button className="btn-primary ...">Get a Tour</button>
  <button className="...">Watch Video</button>
</div>
```

---

## Scroll Indicator (Optional)

Located at the bottom center or bottom-left:
```tsx
<div className="
  absolute bottom-8 left-1/2 -translate-x-1/2
  flex flex-col items-center gap-2
  text-text-tertiary
  animate-bounce
">
  <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
  <ArrowDown size={14} />
</div>
```

---

## Secondary Nav Bar (Below Hero)

In reference image 1, a secondary navigation row appears below the hero area:

```
Features  •  Gym  •  Shop  •  Pricing
```

### Specifications
- **Height**: `48px`
- **Background**: `#141414` or `#1a1a1a`
- **Border Top**: `1px solid #2a2a2a`
- **Links**: DM Sans, 0.8125rem, `0.08em` spacing, uppercase, `#707070` → `#fff` hover

```tsx
<div className="bg-bg-secondary border-t border-border-default">
  <div className="max-w-[1280px] mx-auto px-10 h-12 flex items-center gap-8">
    {['Features', 'Gym', 'Shop', 'Pricing'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="font-body text-xs font-medium tracking-[0.08em] uppercase text-text-tertiary hover:text-text-primary transition-colors duration-200"
      >
        {item}
      </a>
    ))}
  </div>
</div>
```

---

## Full Hero Implementation

```tsx
export function HeroSection() {
  return (
    <section className="
      relative min-h-screen overflow-hidden
      bg-bg-primary
      flex flex-col
    ">
      {/* Background: neon atmospheric glow */}
      <div className="
        absolute inset-0 pointer-events-none
        bg-[radial-gradient(ellipse_60%_50%_at_-10%_120%,rgba(0,255,46,0.10)_0%,transparent_70%)]
      " />

      {/* Athlete image */}
      <div className="absolute inset-y-0 right-0 w-[55%] lg:w-[60%]">
        <img
          src="/images/hero-athlete.jpg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay gradient — image fades into dark left side */}
        <div className="
          absolute inset-0
          bg-gradient-to-r from-bg-primary via-bg-primary/60 to-transparent
        " />
      </div>

      {/* Content */}
      <div className="
        relative z-10 flex-1 flex items-center
        max-w-[1280px] mx-auto w-full
        px-5 sm:px-8 lg:px-10
        py-20 lg:py-32
      ">
        <div className="max-w-xl">

          {/* Eyebrow */}
          <p className="section-label mb-4">
            Member of Challenge
          </p>

          {/* Headline */}
          <h1 className="
            font-display font-black uppercase
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            leading-none tracking-tighter
            text-white
            animate-slideUp
          ">
            Break Your<br />
            Biological<br />
            <span className="text-neon">Ceiling</span>
          </h1>

          {/* Subheadline */}
          <p className="
            font-body text-base lg:text-lg
            text-text-secondary leading-relaxed
            max-w-[420px] mt-5
            animate-slideUp delay-200
          ">
            Experience a fitness space designed around you.
            Cutting-edge technology, elite coaching, and a
            community built for high-performance living.
          </p>

          {/* CTAs */}
          <div className="
            flex flex-wrap items-center gap-4 mt-10
            animate-slideUp delay-400
          ">
            <button className="btn-primary !py-3.5 !px-8 !text-base">
              <ArrowRight size={16} />
              Get a Tour
            </button>

            <button className="
              flex items-center gap-3
              text-text-secondary hover:text-white
              transition-colors duration-200 group
            ">
              <span className="
                w-11 h-11 rounded-full
                border border-white/20 bg-white/5
                flex items-center justify-center
                group-hover:border-neon/60 group-hover:bg-neon/10
                transition-all duration-300
              ">
                <Play size={14} className="ml-0.5" fill="currentColor" />
              </span>
              <span className="font-body text-sm font-medium tracking-wider uppercase">
                Watch Video
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Secondary bar */}
      <div className="
        relative z-10 border-t border-border-default
        bg-bg-secondary/80 backdrop-blur-sm
      ">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10 h-12 flex items-center gap-8 overflow-x-auto">
          {['Features', 'Gym', 'Shop', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                font-body text-xs font-medium
                tracking-[0.08em] uppercase whitespace-nowrap
                text-text-tertiary hover:text-text-primary
                transition-colors duration-200
              "
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Responsive Behavior

| Breakpoint | Headline | Layout | Athlete |
|-----------|----------|--------|---------|
| Mobile (<640px) | `text-5xl` (48px) | Stacked, no athlete | Hidden or small overlay |
| Tablet (640–1024px) | `text-6xl` (60px) | Side-by-side, 50/50 | 50% width |
| Desktop (1024px+) | `text-7xl–8xl` | Asymmetric, 40/60 | 60% width |

### Mobile Treatment
On mobile, the athlete image becomes a subtle background:
```css
.hero-athlete {
  @apply absolute inset-0 w-full h-full object-cover opacity-20 lg:opacity-100;
}
```

---

## Animation Sequence

Staggered entrance on page load:
```
0ms   — Headline slides up (600ms)
200ms — Subheadline slides up (500ms)
400ms — CTA buttons slide up + fade in (400ms)
600ms — Background neon glow fades in (800ms)
```

Implement with `animation-delay` utilities:
```tsx
<h1 className="animate-slideUp" />                   {/* 0ms */}
<p  className="animate-slideUp delay-200" />          {/* 200ms */}
<div className="animate-slideUp delay-400" />         {/* CTAs: 400ms */}
```

---

## Best Practices

1. **Athlete is decorative** — use `role="presentation"` or `alt=""`, not redundant text
2. **Contrast first** — ensure 7:1+ contrast between headline and background
3. **LCP optimization** — preload hero image with `<link rel="preload" as="image">`
4. **No layout shift** — fix min-height to prevent CLS while image loads
5. **Reduce motion** — skip entrance animations if `prefers-reduced-motion: reduce`
6. **Mobile first** — hero must look great even without athlete image
