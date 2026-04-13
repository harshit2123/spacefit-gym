# SpaceFit Design System

## Overview

SpaceFit is a premium fitness platform with a **bold, high-contrast dark aesthetic** combined with electric neon green accents. The design conveys performance, energy, and elite status through carefully orchestrated visual hierarchy and dynamic interactions.

## Design Philosophy

### Aesthetic Direction: **Neo-Athletic Maximalism**
- **Dominant**: Deep blacks and dark grays for visual gravity
- **Accent**: Electric neon green (#00FF2E) for energy and call-to-action
- **Typography**: Bold, geometric display fonts paired with refined body fonts
- **Motion**: Purposeful animations that convey speed and power
- **Composition**: Asymmetric, grid-breaking layouts with generous negative space

### Core Principles

1. **Performance First** – Visual design reflects athletic excellence and peak performance
2. **Contrast Creates Clarity** – Dark backgrounds make neon accents impossible to ignore
3. **Precision at Every Level** – Geometric consistency, perfectly aligned elements, deliberate spacing
4. **Energy Over Elegance** – Bold color choices, dynamic typography, confident visual statements
5. **Hierarchy Through Scale** – Large, commanding headlines and clear focal points

## Technology Stack

- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Display Font**: Barlow Condensed (600–900w) — athletic condensed headlines
- **Body Font**: DM Sans (300–600w) — clean geometric UI text
- **Mono Font**: Space Mono (400, 700w) — data, stats, metadata
- **Icons**: Lucide React
- **Animations**: CSS animations + Framer Motion for complex interactions

## Key Features

- Fully accessible (WCAG AA)
- Dark mode primary (light mode optional)
- Mobile-first responsive design
- Performance optimized
- Customizable through design tokens
- Extensive component library

## File Structure

```
docs/design/
├── DESIGN_SYSTEM.md        ← This file — overview & quick reference
├── STYLE_GUIDE.md          ← Visual identity, principles, brand voice
├── tokens/
│   ├── colors.json         ← All color values with usage context
│   ├── typography.json     ← Font families, scale, type styles
│   ├── spacing.json        ← Spacing scale, semantic values, grid
│   ├── shadows.json        ← Shadow system (base, neon glow, card)
│   └── tailwind.config.js  ← Production-ready Tailwind v4 config
├── components/
│   ├── BUTTONS.md          ← Primary, secondary, ghost, sizes, states
│   ├── CARDS.md            ← Base, feature, stat, media, skeleton
│   ├── FORMS.md            ← Inputs, labels, validation, layout
│   ├── NAVIGATION.md       ← Desktop nav, mobile drawer, dropdowns
│   ├── HERO.md             ← Full hero anatomy, CTAs, responsive
│   ├── PRICING.md          ← 3-tier cards, comparison table, FAQ
│   └── LAYOUTS.md          ← All page sections, composition order
└── guidelines/
    ├── COLOR_SYSTEM.md     ← Palette, usage rules, semantic colors
    ├── TYPOGRAPHY.md       ← Font strategy, scale, styles, responsive
    ├── SPACING_LAYOUT.md   ← Grid, spacing scale, responsive rules
    ├── MOTION.md           ← Animation principles, keyframes, timing
    └── ACCESSIBILITY.md    ← WCAG AA, keyboard, ARIA, screen reader
```

## Color System at a Glance

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0a0a` | Primary page background |
| Surface | `#1a1a1a` | Cards, panels, elevated surfaces |
| Neon | `#00FF2E` | CTA buttons, active states, highlights |
| Text Primary | `#ffffff` | Headlines, body text |
| Text Secondary | `#a0a0a0` | Supporting text, labels |
| Border | `#2a2a2a` | Subtle borders, dividers |

## Typography at a Glance

| Role | Font | Size | Weight | Usage |
|------|------|------|--------|-------|
| Display Hero | Barlow Condensed | 6rem–8rem | 900 | Hero headlines ("BREAK YOUR BIOLOGICAL CEILING") |
| Display Large | Barlow Condensed | 4rem–6rem | 800 | Section titles ("WHY CHOOSE US") |
| Heading 1 | Barlow Condensed | 3rem–4rem | 700 | Page subtitles, major headings |
| Heading 2 | Barlow Condensed | 2.25rem | 700 | Sub-section headers |
| Heading 3 | DM Sans | 1.5rem | 600 | Card headers, feature titles |
| Body | DM Sans | 1rem | 400 | Paragraph text, descriptions |
| Label | DM Sans | 0.875rem | 500 | Form labels, UI labels |
| Label Caps | DM Sans | 0.75rem | 600 | Section eyebrows ("01 / SERVICES") |
| Stat | Barlow Condensed | 4.5rem–6rem | 800 | Numbers ("27K+", "$45") |
| Caption | Space Mono | 0.75rem | 400 | Metadata, timestamps, tracking IDs |

### Loading Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
```

## Spacing System

Base unit: **4px**

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
```

## Next Steps

1. Review the **STYLE_GUIDE.md** for visual design principles
2. Check **tokens/** for technical implementation details
3. Reference **components/** for specific UI patterns
4. See **guidelines/** for deep dives into color, typography, spacing, and motion
