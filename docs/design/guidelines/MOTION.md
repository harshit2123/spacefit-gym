# Motion & Animation System

## Motion Philosophy

SpaceFit uses purposeful animations to convey **performance, energy, and responsiveness**. Every motion should:
- Communicate state changes
- Guide user attention
- Provide feedback for interactions
- Create delight without distraction
- Enhance, not replace, functionality

---

## Animation Principles

### Principle 1: Performance First
- All animations GPU-accelerated (use transform, opacity only)
- Never animate properties that trigger layout (width, height, position)
- Prefers 60fps; no jank
- Accessible: respect `prefers-reduced-motion`

### Principle 2: Purposeful Movement
- Every animation has a reason:
  - Feedback (user action acknowledgment)
  - Guidance (direct attention)
  - State (communicate change)
- Never purely decorative

### Principle 3: Timing & Easing
- Micro-interactions: 150–200ms (quick feedback)
- Component transitions: 300–400ms (noticeable but snappy)
- Page load reveals: 400–600ms (theatrical but not laggy)
- Easing: Bouncy (cubic-bezier(0.34, 1.56, 0.64, 1)) for delight, linear for progress

### Principle 4: Restraint
- 70% of UI has no animation
- 20% has subtle micro-interactions
- 10% has prominent animations
- Neon glow animations sparingly (max 1–2 per page)

---

## Animation Timing

### Durations

| Duration | Use Case | Effect |
|----------|----------|--------|
| 75–100ms | Very fast feedback | Instant, snappy |
| 150–200ms | Micro-interactions | Quick, responsive |
| 300–400ms | Component transitions | Noticeable, elegant |
| 500–700ms | Page transitions | Smooth, intentional |
| 1000–2000ms | Loading/looping | Background, ambient |

### Easing Functions

#### Linear
```css
transition: opacity 0.3s linear;
/* Constant speed, used for progress bars, loading */
```

#### Ease Out (Default)
```css
transition: opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
/* Fast start, slow end; natural deceleration */
/* Use for most UI transitions */
```

#### Ease In
```css
transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
/* Slow start, fast end; confident movement */
/* Use for exits, dramatic reveals */
```

#### Ease In Out
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
/* Balanced acceleration/deceleration */
/* Use for symmetrical movements */
```

#### Bounce (Custom)
```css
animation: bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
/* Overshoot, playful feel */
/* Use for success states, celebrations */
```

---

## Common Animations

### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

animation: fadeIn 0.4s ease-out forwards;
```

**Use for**: Page load, modal entry, content reveals

### Slide Up
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
```

**Use for**: Content entrance, card reveals, hero section

### Scale
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

animation: scaleIn 0.3s ease-out forwards;
```

**Use for**: Button press feedback, modal entrance, emphasis

### Glow (Neon)
```css
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 255, 46, 0.2);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 255, 46, 0.5);
  }
}

animation: glow 2s ease-in-out infinite;
```

**Use for**: CTA buttons, active states, highlights (sparingly)

### Shimmer (Loading)
```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

background: linear-gradient(
  90deg,
  #1a1a1a 25%,
  #2a2a2a 50%,
  #1a1a1a 75%
);
background-size: 1000px 100%;
animation: shimmer 2s infinite;
```

**Use for**: Loading placeholders (skeleton screens)

### Pulse
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

**Use for**: Loading states, background emphasis (subtle)

---

## Interactive States

### Hover Animations

#### Button Hover
```css
button {
  transition: all 0.2s ease-out;
  
  &:hover {
    background: #00FF66;
    box-shadow: 0 0 20px rgba(0, 255, 46, 0.3);
    transform: scale(1.02);
  }
  
  &:active {
    transform: scale(0.98);
  }
}
```

Duration: 200ms
Transform: scale(1.02)
Shadow: Neon glow
Easing: ease-out

#### Card Hover
```css
.card {
  transition: all 0.3s ease-out;
  
  &:hover {
    border-color: #3a3a3a;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    transform: translateY(-4px);
  }
}
```

Duration: 300ms
Transform: translateY(-4px)
Shadow: Deepens to lg
Easing: ease-out

#### Link Hover
```css
a {
  transition: color 0.2s ease-out;
  color: #a0a0a0;
  
  &:hover {
    color: #ffffff;
  }
}
```

Duration: 200ms (shorter for text)
Easing: ease-out

### Focus States

#### Keyboard Focus (Important for Accessibility)
```css
button:focus-visible,
input:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(0, 255, 46, 0.3);
  border-color: #00FF2E;
  transition: all 0.2s ease-out;
}
```

Visible focus ring (4px offset)
Border color change
Duration: 200ms

---

## Page Load Animations

### Staggered Entrance (Hero Section)
```css
h1 {
  animation: slideUp 0.6s ease-out 0s forwards;
  opacity: 0;
}

p {
  animation: slideUp 0.6s ease-out 0.2s forwards;
  opacity: 0;
}

button {
  animation: slideUp 0.6s ease-out 0.4s forwards;
  opacity: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Stagger: 200ms between elements
Duration: 600ms each
Easing: ease-out

### Card Grid Reveal
```jsx
.card {
  animation: fadeIn 0.4s ease-out forwards;
  opacity: 0;
}

.card:nth-child(1) { animation-delay: 0s; }
.card:nth-child(2) { animation-delay: 0.1s; }
.card:nth-child(3) { animation-delay: 0.2s; }
.card:nth-child(4) { animation-delay: 0.3s; }
```

Stagger: 100ms between each
Total effect: Cascading reveal

---

## Loading & Progress States

### Loading Button
```jsx
<button disabled className="opacity-75 cursor-wait">
  <span className="inline-block animate-spin mr-2">⟳</span>
  Processing...
</button>
```

### Loading Skeleton
```jsx
<div className="
  bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]
  bg-size-[200% 100%]
  animate-shimmer
  h-32 rounded-md mb-4
">
</div>
```

### Progress Bar
```jsx
<div className="bg-[#2a2a2a] h-1 rounded-full overflow-hidden">
  <div className="
    bg-[#00FF2E] h-full
    transition-all duration-500 ease-out
    rounded-full
  " style={{ width: `${progress}%` }}></div>
</div>
```

---

## Success & Error Animations

### Success Confirmation
```css
.success-message {
  animation: slideUp 0.4s ease-out, fadeOut 0.4s ease-out 3s forwards;
}

@keyframes fadeOut {
  to { opacity: 0; }
}
```

Entrance: Slide up
Duration: 4s total (3s visible, 0.4s exit)
Easing: ease-out

### Error Shake
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

.error-input {
  animation: shake 0.4s ease-out;
  border-color: #FF4444;
}
```

Duration: 400ms
Easing: ease-out
Effect: Attention-grabbing but not annoying

---

## Scroll-Triggered Animations

### Intersection Observer Pattern
```jsx
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  });
  
  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
}, []);

// CSS
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Accessibility: `prefers-reduced-motion`

### Respect User Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This removes animations for users who have motion sensitivity.

### Implementation
```jsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Apply animations only if not reduced
const animationClass = prefersReducedMotion ? '' : 'animate-slideUp';
```

---

## Tailwind Animation Configuration

```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        glow: 'glow 2s ease-in-out infinite',
        slideUp: 'slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        fadeIn: 'fadeIn 0.4s ease-out',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 46, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 46, 0.5)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
};
```

---

## Best Practices

1. **Duration**: Shorter (200ms) for micro-interactions, longer (500ms+) for page transitions
2. **Easing**: Use bounce (0.34, 1.56, 0.64, 1) for delight, ease-out for standard
3. **GPU Acceleration**: Animate transform, opacity only
4. **Stagger**: 100–200ms between elements for cascading effects
5. **Restraint**: 70% static, 20% subtle, 10% prominent
6. **Accessibility**: Always respect prefers-reduced-motion
7. **Performance**: Test on low-end devices; target 60fps
8. **Feedback**: Every user action should get immediate visual feedback

---

## Animation Checklist

- [ ] All animations use transform/opacity (GPU-accelerated)
- [ ] No layout-triggering property animations (width, height, position)
- [ ] Micro-interactions ≤ 200ms
- [ ] Page transitions 300–600ms
- [ ] Hover states provide clear feedback
- [ ] Focus states visible (4px ring minimum)
- [ ] Staggered reveals on page load
- [ ] Loading states animated (shimmer, pulse, spinner)
- [ ] Success/error states animated
- [ ] prefers-reduced-motion respected
- [ ] Performance tested (60fps target)
- [ ] Mobile animations work smoothly
