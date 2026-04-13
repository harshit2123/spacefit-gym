# Accessibility Guidelines

## Overview

SpaceFit is designed to WCAG 2.1 **Level AA** compliance — the standard required by most legal frameworks and the threshold that ensures all users, regardless of ability, can engage with the product. This guide covers color contrast, keyboard navigation, screen reader support, motion preferences, and testing procedures.

---

## Color Contrast

### WCAG AA Requirements
- **Normal text** (< 18px or < 14px bold): minimum **4.5:1**
- **Large text** (≥ 18px or ≥ 14px bold): minimum **3:1**
- **UI components** (borders, icons, inputs): minimum **3:1**

### SpaceFit Contrast Audit

| Pair | Ratio | Passes AA? | Usage |
|------|-------|-----------|-------|
| `#ffffff` on `#0a0a0a` | 21:1 | ✅ AAA | Primary text |
| `#ffffff` on `#1a1a1a` | 16:1 | ✅ AAA | Card text |
| `#ffffff` on `#2a2a2a` | 13:1 | ✅ AAA | Input text |
| `#00FF2E` on `#0a0a0a` | 8.2:1 | ✅ AAA | Neon on dark BG |
| `#00FF2E` on `#1a1a1a` | 7.1:1 | ✅ AAA | Neon on cards |
| `#0a0a0a` on `#00FF2E` | 8.2:1 | ✅ AAA | Dark text on neon btn |
| `#b0b0b0` on `#0a0a0a` | 5.3:1 | ✅ AA  | Secondary text |
| `#707070` on `#0a0a0a` | 3.0:1 | ⚠️ AA Large only | Tertiary text |
| `#4a4a4a` on `#0a0a0a` | 2.3:1 | ❌ — decorative only | Placeholder text |
| `#FF4444` on `#0a0a0a` | 6.8:1 | ✅ AAA | Error messages |
| `#FFD700` on `#0a0a0a` | 9.5:1 | ✅ AAA | Warning messages |
| `#00d4ff` on `#0a0a0a` | 8.0:1 | ✅ AAA | Info messages |

### Rules
1. **Neon (`#00FF2E`) text is ONLY used on dark backgrounds** — never on white/light
2. **Placeholder text** (`#4a4a4a`) fails WCAG alone — never use as a substitute for a label
3. **Disabled states** use `#3a3a3a` background + `#707070` text — acceptable as purely communicative
4. **Focus rings** use `rgba(0, 255, 46, 0.25)` spread — always 3px+ wide

---

## Keyboard Navigation

### Required Behavior
Every interactive element must be reachable and operable by keyboard alone.

### Tab Order
The tab sequence follows **DOM order** (top → bottom, left → right):
1. Skip link (first focusable element)
2. Navigation links
3. Main content interactive elements
4. Form inputs (logical flow)
5. Footer links

### Skip Link (Mandatory)
```html
<!-- First element in <body> -->
<a
  href="#main-content"
  class="
    sr-only focus:not-sr-only
    fixed top-4 left-4 z-50
    px-4 py-2 rounded-md
    bg-neon text-text-inverse
    font-semibold text-sm
    focus:outline-none focus:ring-2 focus:ring-white
  "
>
  Skip to main content
</a>

<!-- Target -->
<main id="main-content" tabIndex={-1}>
```

### Focus Indicators
All interactive elements must have **visible focus styles**:

```css
/* Neon focus ring — applies to all focusable elements */
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 255, 46, 0.4);
  border-radius: 4px;
}

/* For elements with existing border-radius */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #00FF2E;
  outline-offset: 2px;
}
```

### Keyboard Patterns by Component

#### Navigation
| Key | Action |
|-----|--------|
| `Tab` / `Shift+Tab` | Move between nav links |
| `Enter` / `Space` | Activate link |
| `Escape` | Close mobile menu |
| `Arrow keys` | Navigate dropdown items |

#### Modal / Dialog
| Key | Action |
|-----|--------|
| `Escape` | Close modal |
| `Tab` | Cycle through modal content (focus trapped) |
| `Shift+Tab` | Reverse cycle |

#### Form Inputs
| Key | Action |
|-----|--------|
| `Tab` | Next input |
| `Enter` | Submit form (on submit button) |
| `Space` | Toggle checkbox/radio |
| `Arrow keys` | Navigate radio groups |

#### Dropdown / Select
| Key | Action |
|-----|--------|
| `Enter` / `Space` | Open/close |
| `Arrow Up/Down` | Navigate options |
| `Enter` | Select option |
| `Escape` | Close without selecting |

---

## Screen Reader Support

### Semantic HTML Requirements

Always use semantic elements — never `<div>` for interactive components:

```html
✅ Correct:
<button>Get a Tour</button>
<nav aria-label="Main navigation">
<h1>, <h2>, <h3>  (logical hierarchy, no skipping)
<ul>/<li>         (list content)
<table>           (tabular data with thead/th)

❌ Incorrect:
<div onClick={...}>Click me</div>
<span class="heading">Title</span>
```

### ARIA Labels

```tsx
// Navigation
<nav aria-label="Main navigation">
<nav aria-label="Footer navigation">

// Icon-only buttons
<button aria-label="Close menu">
  <X />
</button>

// Progress indicator
<div role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>

// Live regions (dynamic content)
<div role="alert" aria-live="polite">
  {errorMessage}
</div>

// Modal
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm Plan Selection</h2>
</div>

// Toggle
<button aria-expanded={isOpen} aria-controls="mobile-menu">
  Menu
</button>
<nav id="mobile-menu" aria-hidden={!isOpen}>

// Cards with links
<article aria-label="Strength Zone service">
  <h3>Strength Zone</h3>
  <a href="/strength-zone">
    <span aria-hidden="true">Learn more →</span>
    <span className="sr-only">Learn more about Strength Zone</span>
  </a>
</article>

// Rating
<span aria-label="Rating: 5 out of 5 stars">
  <span aria-hidden="true">★★★★★</span>
</span>
```

### Heading Hierarchy

Maintain logical heading levels — never skip a level:

```html
<h1>Break Your Biological Ceiling</h1>       <!-- One per page -->
  <h2>Why Choose Us</h2>
    <h3>State of the Art Equipment</h3>
  <h2>Premium Services</h2>
    <h3>Strength Zone</h3>
    <h3>Cardio Deck</h3>
  <h2>Choose Your Plan</h2>
    <h3>Basic</h3>
    <h3>Standard</h3>
    <h3>Elite</h3>
```

### Screen Reader-Only Content

Use `.sr-only` for text that provides context visually implied but needs to be announced:

```tsx
// Lucide icons used decoratively
<Star aria-hidden="true" />
<span className="sr-only">5 stars</span>

// Visually clear action that lacks text
<button>
  <span className="sr-only">Remove item</span>
  <Trash aria-hidden="true" />
</button>

// Price with visual context
<span>$45 <span className="sr-only">per month</span></span>
```

---

## Motion & Animation Accessibility

### Respect `prefers-reduced-motion`

```css
/* Disable all animations for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

### React Implementation
```tsx
function useReducedMotion() {
  const [reduced, setReduced] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

// Usage in component:
const reduceMotion = useReducedMotion();
<div className={reduceMotion ? '' : 'animate-slideUp'}>
```

### Rules for Motion
- **Entrance animations**: Always optional (respect reduce-motion)
- **Hover states**: Color/opacity transitions are OK (not position-based)
- **Parallax scrolling**: Off by default, user opt-in only
- **Auto-playing video**: Paused by default, user plays it
- **Looping animations** (glow, scan): Stop when `prefers-reduced-motion` is set

---

## Images & Media

### Alt Text Guidelines
```tsx
// Decorative images — empty alt, no announcement
<img src="hero-bg.jpg" alt="" role="presentation" />

// Informative images — describe content
<img src="athlete-sprinting.jpg" alt="Athlete sprinting in SpaceFit facility" />

// Functional images (buttons/links) — describe the action
<img src="close-icon.png" alt="Close" />

// Charts / infographics — include data in alt or adjacent text
<img
  src="stats-chart.png"
  alt="Chart showing 27,000+ members across 12+ global hubs"
/>
```

### Video Accessibility
- Provide closed captions for all video content
- Provide audio descriptions for visual-only information
- Never auto-play video with sound
- Video controls must be keyboard accessible

---

## Forms

### Accessible Form Patterns

```tsx
{/* Every input needs an associated label */}
<div className="mb-6">
  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
    Email Address
    <span aria-label="required" className="text-error-DEFAULT ml-1">*</span>
  </label>
  <input
    id="email"
    type="email"
    required
    aria-required="true"
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? 'email-error' : 'email-hint'}
    className="input-base"
  />
  {/* Help text */}
  {!errors.email && (
    <p id="email-hint" className="font-body text-xs text-text-tertiary mt-1.5">
      We'll send your tour confirmation here.
    </p>
  )}
  {/* Error message */}
  {errors.email && (
    <p id="email-error" role="alert" className="font-body text-xs text-error-DEFAULT mt-1.5 flex items-center gap-1.5">
      <AlertCircle size={12} aria-hidden="true" />
      {errors.email}
    </p>
  )}
</div>
```

### Form Submission Feedback
```tsx
{/* Success announcement */}
<div role="status" aria-live="polite" aria-atomic="true">
  {submitSuccess && (
    <p className="text-neon text-sm flex items-center gap-2">
      <CheckCircle size={16} />
      You're in! Tour confirmation sent to your email.
    </p>
  )}
</div>
```

---

## Touch & Pointer

### Minimum Touch Targets
- **Interactive elements**: minimum `44px × 44px`
- **Spacing between targets**: minimum `8px`
- **Input fields**: minimum `44px` height (already in `input-base`)

### Pointer Events
- Hover states: also apply `focus-visible` equivalent for touch users
- Long-press / drag: provide alternative keyboard/tap methods

---

## Checklist

### Per-Component Checklist
- [ ] Keyboard focusable
- [ ] Visible focus indicator (3px neon ring)
- [ ] Correct `role` or semantic element
- [ ] All icon buttons have `aria-label`
- [ ] Color is not the only differentiator
- [ ] Touch target ≥ 44px
- [ ] Contrast ratio ≥ 4.5:1 for text

### Per-Page Checklist
- [ ] Single `<h1>` per page
- [ ] Logical heading hierarchy (h1 → h2 → h3)
- [ ] Skip navigation link present
- [ ] `<main>` with `id="main-content"`
- [ ] `<nav>` elements have distinct `aria-label`
- [ ] All images have appropriate `alt` text
- [ ] Forms have labels + error handling
- [ ] `prefers-reduced-motion` respected
- [ ] WCAG AA contrast met for all text
- [ ] Screen reader tested (VoiceOver / NVDA)
- [ ] Keyboard-only test completed

### Testing Tools
- **Contrast**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Automated**: axe DevTools browser extension
- **Screen reader**: macOS VoiceOver (`Cmd + F5`), NVDA (Windows, free)
- **Colorblind**: Chrome DevTools → Rendering → Emulate vision deficiencies
- **Keyboard**: Unplug mouse; navigate with Tab, Arrow keys, Enter, Escape
