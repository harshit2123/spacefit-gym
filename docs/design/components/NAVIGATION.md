# Navigation Components

## Overview

The SpaceFit navigation is a **sticky, full-width header** that adapts across breakpoints. It uses a dark frosted-glass effect, uppercase nav links, and a neon CTA button. On scroll, a shadow reinforces the sticky state.

---

## Desktop Navigation

### Anatomy
```
┌────────────────────────────────────────────────────────────────────┐
│  [SPACEFIT logo]   Features  Classes  Pricing  App     [Get a Tour]│
└────────────────────────────────────────────────────────────────────┘
```

### Specifications
- **Height**: 64px
- **Background**: `rgba(10, 10, 10, 0.92)` + `backdrop-filter: blur(16px)`
- **Border Bottom**: `1px solid rgba(255, 255, 255, 0.06)` (subtle separator)
- **Max Width**: 1280px (centered with auto margins)
- **Padding**: 0 40px
- **Position**: `sticky top-0 z-30`
- **On Scroll**: `box-shadow: 0 4px 24px rgba(0, 0, 0, 0.8)`

### Logo
- **Font**: `Barlow Condensed`, 700 weight
- **Size**: 1.25rem (20px)
- **Color**: `#ffffff`
- **Letter Spacing**: `0.05em`
- **Transform**: Uppercase
- **Accent**: The "FIT" portion in `#00FF2E` or a neon dot

### Nav Links
- **Font**: DM Sans, 500 weight, 0.875rem
- **Letter Spacing**: `0.04em`
- **Transform**: Uppercase
- **Color Default**: `#b0b0b0`
- **Color Hover**: `#ffffff`
- **Color Active**: `#00FF2E`
- **Transition**: `color 0.2s ease-out`
- **Active indicator**: 2px neon underline or dot below

### CTA Button
- **Style**: Primary (`btn-primary`) — compact variant
- **Padding**: `10px 22px`
- **Font Size**: `0.8125rem` (13px)
- **Text**: "Get a Tour" / "Join Now"

### HTML/Tailwind
```tsx
<header className="
  sticky top-0 z-30
  w-full h-16
  bg-bg-primary/92 backdrop-blur-xl
  border-b border-white/[0.06]
  transition-shadow duration-300
  data-[scrolled=true]:shadow-nav
">
  <nav className="
    max-w-[1280px] mx-auto h-full
    px-6 lg:px-10
    flex items-center justify-between
  ">
    {/* Logo */}
    <a href="/" className="
      font-display text-xl font-bold
      tracking-[0.05em] uppercase
    ">
      Space<span className="text-neon">Fit</span>
    </a>

    {/* Desktop Links */}
    <ul className="
      hidden lg:flex items-center gap-8
    ">
      {['Features', 'Classes', 'Pricing', 'App'].map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className="
              font-body text-sm font-medium
              tracking-wider uppercase
              text-text-secondary
              hover:text-text-primary
              transition-colors duration-200
              relative group
            "
          >
            {item}
            <span className="
              absolute -bottom-1 left-0 w-0 h-0.5
              bg-neon
              transition-all duration-200
              group-hover:w-full
            " />
          </a>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <button className="btn-primary hidden lg:inline-flex !py-2.5 !px-5 !text-xs">
      Get a Tour
    </button>

    {/* Mobile hamburger */}
    <button
      className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
      aria-label="Toggle menu"
    >
      <span className="w-5 h-0.5 bg-white transition-all duration-200" />
      <span className="w-5 h-0.5 bg-white transition-all duration-200" />
      <span className="w-3 h-0.5 bg-white transition-all duration-200" />
    </button>
  </nav>
</header>
```

### Scroll Behavior (React Hook)
```tsx
function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}

// Usage:
// const scrolled = useScrolled();
// <header data-scrolled={scrolled}>
```

---

## Mobile Navigation (Drawer)

### Anatomy
```
┌──────────────────────────────────────┐
│  [SPACEFIT]                    [✕]   │  ← 64px header bar
├──────────────────────────────────────┤
│                                      │
│  FEATURES          →                 │
│  CLASSES           →                 │
│  PRICING           →                 │
│  APP               →                 │
│                                      │
│  ─────────────────                   │
│                                      │
│  [    GET A TOUR    ]                │  ← Full-width CTA
│                                      │
└──────────────────────────────────────┘
```

### Specifications
- **Width**: 100vw
- **Background**: `#0a0a0a`
- **Transition**: Slide down from top — `translateY(-100%)` → `translateY(0)`
- **Duration**: 400ms, `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Links**: Larger size, 1.125rem, 500 weight, 24px padding each
- **Divider**: 1px solid `#2a2a2a`

### HTML/Tailwind
```tsx
<div className={`
  fixed inset-0 z-40
  bg-bg-primary
  flex flex-col
  transform transition-transform duration-400 ease-bounce
  ${isOpen ? 'translate-y-0' : '-translate-y-full'}
  lg:hidden
`}>
  {/* Header row */}
  <div className="h-16 px-6 flex items-center justify-between border-b border-border-default">
    <span className="font-display text-xl font-bold uppercase tracking-widest">
      Space<span className="text-neon">Fit</span>
    </span>
    <button onClick={closeMenu} className="w-10 h-10 flex items-center justify-center">
      <X className="text-text-secondary" size={20} />
    </button>
  </div>

  {/* Links */}
  <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
    {navItems.map((item, i) => (
      <a
        key={item.label}
        href={item.href}
        onClick={closeMenu}
        className="
          flex items-center justify-between
          py-4 border-b border-border-default
          font-body text-lg font-medium
          tracking-wider uppercase
          text-text-secondary hover:text-white
          transition-colors duration-200
          animate-slideDown
        "
        style={{ animationDelay: `${i * 80}ms` }}
      >
        {item.label}
        <ChevronRight size={16} className="text-neon" />
      </a>
    ))}
  </nav>

  {/* CTA */}
  <div className="px-6 pb-10">
    <button className="btn-primary w-full !py-4 !text-base">
      Get a Tour
    </button>
  </div>
</div>
```

---

## Active State Indicator

### Options

**Option A — Underline dot (recommended)**
```css
nav a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #00FF2E;
  box-shadow: 0 0 8px rgba(0, 255, 46, 0.6);
}
```

**Option B — Full underline**
```css
nav a.active {
  color: #00FF2E;
  position: relative;
}
nav a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: #00FF2E;
  box-shadow: 0 0 8px rgba(0, 255, 46, 0.4);
}
```

---

## Dropdown (Sub-navigation)

### Anatomy
```
Features  ▾
           ┌─────────────────────────────┐
           │  Equipment Overview         │
           │  Group Classes              │
           │  Personal Training          │
           │  Nutrition Coaching         │
           └─────────────────────────────┘
```

### Specifications
- **Background**: `#1a1a1a`
- **Border**: `1px solid #2a2a2a`
- **Border Radius**: `8px`
- **Padding**: `8px 0`
- **Shadow**: `0 8px 32px rgba(0, 0, 0, 0.6)`
- **Animation**: `fadeIn + slideDown`, 200ms
- **Min Width**: `220px`

### Dropdown Item
```tsx
<a className="
  block px-4 py-3
  font-body text-sm
  text-text-secondary hover:text-white
  hover:bg-bg-interactive
  transition-colors duration-150
">
  Equipment Overview
</a>
```

---

## Accessibility

- `role="navigation"` on `<nav>` element
- `aria-label="Main navigation"` for the primary nav
- `aria-current="page"` on the active link
- `aria-expanded` / `aria-controls` on mobile toggle
- `aria-label="Close menu"` on close button
- Keyboard: `Tab` through links, `Escape` closes mobile drawer
- Skip link: `<a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>`

### Focus Management
When the mobile menu opens, focus should move to the first nav item. When it closes, focus returns to the hamburger button.

```tsx
useEffect(() => {
  if (isOpen) firstLinkRef.current?.focus();
  else        hamburgerRef.current?.focus();
}, [isOpen]);
```

---

## Best Practices

1. **Sticky not fixed**: Use `position: sticky` to preserve document flow
2. **Blur on scroll**: Backdrop blur creates depth without full opacity
3. **Consistent height**: Always 64px — prevents layout shift
4. **Logo as `<a href="/">`**: Keyboard-accessible home navigation
5. **Touch targets**: Mobile links minimum 44px height
6. **Z-index**: Nav at `z-30`, mobile drawer at `z-40`, modals at `z-50`+
