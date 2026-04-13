# Layout Components & Page Sections

## Overview

SpaceFit pages follow a consistent **vertical section cadence** — alternating between full-bleed dark sections and card-dense content sections. Each section has a defined rhythm: eyebrow label → headline → content → optional CTA.

Reference: All 5 reference images in `/docs/design/references/`.

---

## Section Anatomy (Universal Pattern)

```
┌──────────────────────────────────────────────────┐
│  [72–96px top padding]                           │
│                                                  │
│  01 / SECTION NAME      ← eyebrow (neon, caps)  │
│  SECTION HEADLINE       ← display font          │
│  Supporting subtitle    ← body text, gray       │
│                                                  │
│  [32–48px gap]                                   │
│                                                  │
│  [Content: grid / cards / stats / media]         │
│                                                  │
│  [72–96px bottom padding]                        │
└──────────────────────────────────────────────────┘
```

### Spacing Tokens
- `py-18 md:py-24` = 72px / 96px — major sections
- `py-12 md:py-16` = 48px / 64px — compact sections
- `mb-3` = 12px — eyebrow to headline
- `mb-5` = 20px — headline to subtitle
- `mt-12 md:mt-16` = 48px / 64px — content area gap

---

## Why Choose Us — Feature List Section

### Reference: Image 1–3

```
┌────────────────────────────────────────────────────────────┐
│  [Photo: gym interior, dark]                               │
│                                                            │
│  WHY CHOOSE US                    01 / SERVICES           │
│                                   ┌──────────────────────┐│
│                                   │ State of the Art Eq. ▶││
│                                   ├──────────────────────┤│
│                                   │ Expert Trainers      ▶││
│                                   ├──────────────────────┤│
│                                   │ Wide Range of Classes▶││
│                                   ├──────────────────────┤│
│                                   │ Welcoming Community  ▶││
│                                   └──────────────────────┘│
└────────────────────────────────────────────────────────────┘
```

### Structure
- **Left**: Dark photo (50% width, `object-cover`, min-height 500px)
- **Right**: Headline + numbered feature list (50% width)
- **Gap**: 48px between columns
- **Responsive**: Stack vertically on mobile (photo on top)

### Feature List Item
```tsx
<a
  href="#"
  className="
    flex items-center justify-between
    px-5 py-4
    border border-border-default
    rounded-md
    bg-bg-tertiary/60
    hover:border-neon/40 hover:bg-neon/5
    transition-all duration-200
    group
  "
>
  <span className="font-body text-sm font-medium text-text-primary group-hover:text-neon transition-colors">
    State of the Art Equipment
  </span>
  <ChevronRight size={14} className="text-text-tertiary group-hover:text-neon transition-colors" />
</a>
```

### Implementation
```tsx
<section className="py-18 md:py-24 bg-bg-primary overflow-hidden">
  <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Left: Photo */}
      <div className="relative h-[400px] lg:h-[520px] rounded-lg overflow-hidden">
        <img
          src="/images/gym-interior.jpg"
          alt="SpaceFit gym interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
      </div>

      {/* Right: Content */}
      <div>
        <p className="section-label mb-3">01 / Services</p>
        <h2 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-white mb-8">
          Why Choose Us
        </h2>
        <div className="flex flex-col gap-3">
          {features.map((f) => (
            <FeatureListItem key={f.label} label={f.label} href={f.href} />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Journey & Stats Section

### Reference: Image 3

```
┌──────────────────────────────────────────────────────────┐
│  JOURNEY & STATS            01 / SERVICES                │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │  [Full-width dark gym photo with overlay]        │   │
│  │                                                  │   │
│  │  12+              27K+                           │   │
│  │  GLOBAL HUBS      MEMBERS                        │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
```

### Specifications
- **Stat Block**: Absolute-positioned over photo
- **Photo**: Full-width, 400–500px height, dark-tinted
- **Stats**: Bottom-left, `Barlow Condensed` 800w, 4xl–6xl

```tsx
<section className="py-18 md:py-24 bg-bg-primary">
  <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
    <div className="mb-8 flex items-end justify-between">
      <div>
        <p className="section-label mb-3">01 / Services</p>
        <h2 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight text-white">
          Journey & Stats
        </h2>
      </div>
    </div>

    {/* Stats over image */}
    <div className="relative rounded-xl overflow-hidden h-[360px] md:h-[460px]">
      <img src="/images/gym-wide.jpg" alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/40 to-bg-primary/90" />
      <div className="absolute bottom-8 left-8 flex gap-12">
        {[{ value: '12+', label: 'Global Hubs' }, { value: '27K+', label: 'Members' }].map((stat) => (
          <div key={stat.label}>
            <div className="stat-number text-6xl">{stat.value}</div>
            <p className="font-body text-sm text-text-secondary uppercase tracking-[0.08em] mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

---

## Premium Services — Card Grid Section

### Reference: Image 4

```
┌──────────────────────────────────────────────────────────────────────────┐
│  PREMIUM SERVICES                    01 / SERVICES                       │
│                                                                          │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  │ [img]        │ │ [img]        │ │ [img]        │ │ [img]        │   │
│  │ Strength     │ │ Cardio Deck  │ │ Group        │ │ Recovery     │   │
│  │ Zone         │ │              │ │ Classes      │ │ Lounge       │   │
│  │ ⭐ 5.0       │ │ ⭐ 4.8       │ │ ⭐ 4.9       │ │ ⭐ ★ WEEKEND│   │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘   │
└──────────────────────────────────────────────────────────────────────────┘
```

### Service Card Specifications
- **Width**: `calc(25% - 18px)` desktop, 50% tablet, 100% mobile
- **Height**: `300px` (fixed for consistency)
- **Image**: Full card background, `object-cover`
- **Overlay**: `linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.92) 100%)`
- **Info**: Absolute bottom, 16px padding

```tsx
<div className="relative rounded-lg overflow-hidden h-72 group cursor-pointer">
  <img
    src={service.image}
    alt={service.name}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary/95" />
  <div className="absolute inset-x-0 bottom-0 p-4">
    <h3 className="font-body text-base font-semibold text-white mb-1">{service.name}</h3>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <span className="text-neon text-xs">★</span>
        <span className="font-mono text-xs text-text-secondary">{service.rating}</span>
      </div>
      <span className="font-mono text-xs text-text-tertiary">{service.meta}</span>
    </div>
  </div>
</div>
```

---

## Global Presence — World Map Section

### Reference: Image 5

```
┌─────────────────────────────────────────────────────────────────┐
│  GLOBAL                                                         │
│  PRESENCE         [Dark world map with neon dot markers]        │
│                                                                 │
│  A tech-equipped fitness facility...                            │
└─────────────────────────────────────────────────────────────────┘
```

### Specifications
- **Layout**: 2-column — text left (35%), map right (65%)
- **Map**: Dark SVG world map (`#1a1a1a` continents on `#0a0a0a` ocean)
- **Dots**: `#00FF2E`, 6px circles with `box-shadow: 0 0 8px rgba(0,255,46,0.6)` glow
- **Responsive**: Stack on mobile, map full-width

```tsx
<section className="py-18 md:py-24 bg-bg-primary">
  <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
    <div className="grid lg:grid-cols-[2fr_3fr] gap-16 items-center">
      <div>
        <h2 className="font-display text-6xl font-black uppercase leading-none tracking-tighter text-white mb-6">
          Global<br />Presence
        </h2>
        <p className="font-body text-base text-text-secondary leading-relaxed max-w-xs">
          A tech-equipped fitness facility designed for full-performance living.
        </p>
      </div>
      <div className="relative h-[300px] lg:h-[360px]">
        {/* SVG map component or img */}
        <WorldMap locations={locations} />
      </div>
    </div>
  </div>
</section>
```

---

## Footer Layout

### Structure
```
┌─────────────────────────────────────────────────────────────────┐
│  SPACEFIT                                                        │
│  Tagline about mission                  QUICK LINKS  RESOURCES  │
│                                         About         Training   │
│  [Social icons]                         Contact       Recovery   │
│                                         Pricing       Nutrition  │
│─────────────────────────────────────────────────────────────────│
│  © 2025 SpaceFit          Privacy Policy    Terms of Service    │
└─────────────────────────────────────────────────────────────────┘
```

### Specifications
- **Background**: `#0a0a0a` (matches page, creates seamless merge)
- **Top border**: `1px solid #2a2a2a`
- **Padding**: `64px 40px 32px`
- **Grid**: `1fr 1fr 1fr 1fr` desktop, `2-col` tablet, `1-col` mobile
- **Column gap**: `32–48px`

```tsx
<footer className="border-t border-border-default bg-bg-primary">
  <div className="max-w-[1280px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Brand column */}
      <div className="lg:col-span-1">
        <a href="/" className="font-display text-2xl font-bold uppercase tracking-widest">
          Space<span className="text-neon">Fit</span>
        </a>
        <p className="font-body text-sm text-text-secondary leading-relaxed mt-4 max-w-xs">
          A high-performance fitness facility designed for full-body excellence.
        </p>
        {/* Social icons */}
        <div className="flex gap-3 mt-6">
          {socials.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label}
               className="w-9 h-9 rounded border border-border-default
                          flex items-center justify-center
                          text-text-tertiary hover:text-white hover:border-border-strong
                          transition-colors duration-200">
              <s.Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      {/* Link columns */}
      {footerColumns.map((col) => (
        <div key={col.title}>
          <h4 className="font-body text-xs font-semibold tracking-[0.1em] uppercase text-text-primary mb-4">
            {col.title}
          </h4>
          <ul className="flex flex-col gap-3">
            {col.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}
                   className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors duration-200">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div className="mt-12 pt-6 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-text-tertiary">
        © 2025 SpaceFit. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="/privacy" className="font-body text-xs text-text-tertiary hover:text-text-primary transition-colors">
          Privacy Policy
        </a>
        <a href="/terms" className="font-body text-xs text-text-tertiary hover:text-text-primary transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</footer>
```

---

## Page Composition Order (Full Site)

```
1. Navigation (sticky, 64px)
2. Hero Section (100vh)
3. Why Choose Us (2-col: photo + feature list)
4. Journey & Stats (full-width photo + stat overlay)
5. Premium Services (4-col card grid)
6. Pricing (3-col pricing cards)
7. Global Presence (2-col: headline + map)
8. Footer (4-col + bottom bar)
```

### Background Alternation
All sections use `#0a0a0a`. Depth is created through:
- Card backgrounds at `#1a1a1a`
- Section-level photo panels
- Subtle grid/noise textures
- Edge neon glow accents

---

## Container System

### Max-Width
```tsx
// Standard page container
<div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

// Wide container (for full-bleed with contained content)
<div className="max-w-[1440px] mx-auto px-5 lg:px-12">

// Narrow content (forms, articles)
<div className="max-w-[768px] mx-auto px-5">
```

### Column Grid Patterns
```tsx
// 2 col
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

// 3 col (pricing)
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

// 4 col (service cards)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

// Asymmetric 2/3 + 1/3
<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
```

---

## Responsive Rules

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Container padding | 20px | 32px | 40px |
| Section vertical padding | 48px | 64px | 96px |
| Column grid | 1-col | 2-col | 3–4-col |
| Headline size | 48–56px | 56–72px | 72–96px |
| Card grid gap | 16px | 20px | 24px |
