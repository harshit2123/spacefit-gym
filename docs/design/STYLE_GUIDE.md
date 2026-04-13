# SpaceFit Style Guide

## Visual Identity

### The SpaceFit Aesthetic

SpaceFit embodies **"Neo-Athletic Maximalism"** – the meeting point of high performance and bold visual confidence. Every design choice reflects the brand's core message: push boundaries, break limits, achieve excellence.

#### Key Characteristics
- **Dark + Neon Contrast**: Maximum visual impact through polarity
- **Geometric Precision**: Clean lines, perfect alignment, intentional spacing
- **Dynamic Energy**: Motion conveys power and momentum
- **Premium Refinement**: Despite boldness, every detail is crafted with care
- **Athletic Confidence**: Bold typography, decisive color choices, uncompromising design

---

## Color Palette

### Primary Palette

#### Background & Neutrals
```
Deep Black (#0a0a0a)     – Primary page background
Card Black (#1a1a1a)      – Elevated surfaces, cards, modals
Dark Gray (#2a2a2a)       – Borders, subtle dividers
Medium Gray (#3a3a3a)     – Disabled states, secondary surfaces
Light Gray (#a0a0a0)      – Secondary text, muted labels
Off White (#e8e8e8)       – Primary text, high contrast
White (#ffffff)           – Emphasis, accents, highlights
```

#### Accent Colors
```
Neon Green (#00FF2E)      – Primary CTA, active states, highlight
Neon Light (#00FF66)      – Hover states, secondary accents
Dark Green (#004d00)      – Success, positive feedback
Cyan (#00d4ff)            – Secondary accent (sparingly)
```

#### Semantic Colors
```
Success (#00FF2E)         – Confirmation, positive actions
Warning (#FFD700)         – Caution, non-blocking alerts
Error (#FF4444)           – Critical errors, destructive actions
Info (#00d4ff)            – Informational alerts
```

### Usage Guidelines

#### Rule 1: Dark Canvas, Neon Pop
- 85–90% of layout is dark (#0a0a0a, #1a1a1a)
- 8–12% is neutral gray for structure
- 2–5% is neon green for highest priority actions
- This ratio creates visual dominance for CTAs without overwhelming

#### Rule 2: Text Contrast
- Neon green text is **never** used on light backgrounds
- White text on #0a0a0a, #1a1a1a, and #2a2a2a
- Gray text (#a0a0a0) for secondary information
- Maintain WCAG AA minimum 4.5:1 contrast ratio

#### Rule 3: Accent Restraint
- Use neon green ONLY for:
  - Primary call-to-action buttons
  - Active navigation states
  - Success confirmations
  - Critical highlights
- Never use for decorative elements or backgrounds

#### Rule 4: Layering & Depth
```
Layer 0: #0a0a0a (page background)
Layer 1: #1a1a1a (cards, panels)
Layer 2: #2a2a2a (borders, dividers, interactive elements)
Layer 3: #3a3a3a (hover states, secondary surfaces)
Layer 4+: Transparent overlays with rgba(0, 0, 0, 0.5–0.8)
```

---

## Typography

### Font Stack
```css
/* Google Fonts — load in <head> (see DESIGN_SYSTEM.md for <link> tag) */
--font-display: 'Barlow Condensed', 'Oswald', sans-serif;   /* Athletic condensed headlines */
--font-body:    'DM Sans', 'Inter', sans-serif;             /* Clean UI & paragraph text  */
--font-mono:    'Space Mono', 'JetBrains Mono', monospace;  /* Data, stats, code          */
```

| Font | Role | Character |
|------|------|-----------|
| **Barlow Condensed** (600–900w) | Headlines, stats, display | Compressed boldness — communicates force and athleticism |
| **DM Sans** (300–600w) | Body, labels, buttons, nav | Geometric clarity — readable, modern, no visual noise |
| **Space Mono** (400, 700w) | Numbers, metadata, tags | Futuristic precision — reinforces the space/tech brand |

### Scale & Usage

#### Display (Hero Headlines)
- **Size**: 3.5rem–5rem (56px–80px)
- **Weight**: 700–800
- **Line Height**: 1.1
- **Letter Spacing**: -0.02em
- **Usage**: Page titles, hero section, major announcements
- **Character**: Bold, commanding, athletic confidence

Example: "BREAK YOUR BIOLOGICAL CEILING"

#### Heading Level 1 (Section Headers)
- **Size**: 2.5rem (40px)
- **Weight**: 700
- **Line Height**: 1.2
- **Letter Spacing**: -0.01em
- **Usage**: Section titles, page sections
- **Character**: Authoritative, clear hierarchy

Example: "WHY CHOOSE US"

#### Heading Level 2 (Subsection Headers)
- **Size**: 1.875rem (30px)
- **Weight**: 600
- **Line Height**: 1.3
- **Letter Spacing**: 0
- **Usage**: Card headers, feature titles
- **Character**: Supporting major sections

Example: "Premium Services"

#### Body Text
- **Size**: 1rem (16px)
- **Weight**: 400
- **Line Height**: 1.6
- **Letter Spacing**: 0
- **Usage**: Paragraphs, descriptions, general content
- **Character**: Readable, refined, secondary to headings

#### Small (Labels, Metadata)
- **Size**: 0.875rem (14px)
- **Weight**: 500
- **Line Height**: 1.5
- **Letter Spacing**: 0.01em
- **Usage**: Form labels, captions, metadata
- **Character**: Clear, structured, supporting

#### Micro (Timestamps, Tags)
- **Size**: 0.75rem (12px)
- **Weight**: 400
- **Line Height**: 1.4
- **Letter Spacing**: 0.02em
- **Usage**: Timestamps, tags, secondary labels
- **Character**: Compact, informational

### Typography Rules

1. **Hierarchy Through Scale**: Don't use color to create hierarchy; use size and weight
2. **Generous Line Height**: Body text min 1.6, ensures readability on dark backgrounds
3. **Tight Display**: Headlines use compressed line height (1.1–1.2) for impact
4. **Weight Restraint**: Body text is 400; headings are 600–800. Nothing bolder than 800
5. **Letter Spacing**: Negative spacing on large headlines creates visual tightness

---

## Spacing & Layout

### Spacing Scale
```
4px   (xs)   – Small gaps between elements
8px   (sm)   – Small component padding
16px  (md)   – Standard padding and margins
24px  (lg)   – Large section spacing
32px  (xl)   – Extra-large section gaps
48px  (2xl)  – Major section separation
64px  (3xl)  – Page-level spacing
96px  (4xl)  – Hero section gaps
```

### Grid System
- **Base Grid**: 4px
- **Column Grid**: 12-column responsive grid
- **Gutters**: 16px (md) on desktop, 8px (sm) on mobile
- **Container Width**: Max 1280px (80rem)

### Layout Patterns

#### Hero Section
- Full viewport height or min 500px
- Headline top-aligned, positioned ≤100px from top
- CTA button positioned 24px below headline
- Background image with overlay gradient (rgba(0,0,0,0.6))
- Asymmetric composition with negative space on right

#### Card Layout
- Padding: 24px (lg) outer, 16px (md) inner
- Border: 1px solid #2a2a2a
- Border radius: 8px
- Box shadow: 0 4px 12px rgba(0,0,0,0.3)
- Hover effect: Border color changes to #3a3a3a, shadow deepens

#### Section Spacing
- Between major sections: 64px–96px (3xl–4xl)
- Top section padding: 48px
- Bottom section padding: 48px
- Asymmetric padding acceptable for dramatic effect

---

## Components & Patterns

### Buttons

#### Primary Button (Neon CTA)
- **Background**: #00FF2E
- **Text**: #0a0a0a
- **Padding**: 12px 32px
- **Border Radius**: 6px
- **Font Weight**: 600
- **Hover**: Background #00FF66, shadow 0 0 20px rgba(0,255,46,0.3)
- **Active**: Background #00cc23, scale 0.98

#### Secondary Button (Outline)
- **Background**: Transparent
- **Border**: 2px solid #2a2a2a
- **Text**: #ffffff
- **Hover**: Border #3a3a3a, background rgba(255,255,255,0.05)

#### Tertiary Button (Ghost)
- **Background**: Transparent
- **Text**: #a0a0a0
- **Hover**: Text #ffffff, background rgba(255,255,255,0.05)

### Cards
- **Background**: #1a1a1a
- **Border**: 1px solid #2a2a2a
- **Padding**: 24px
- **Border Radius**: 8px
- **Elevation**: Shadow 0 4px 12px rgba(0,0,0,0.3)
- **Hover**: Border #3a3a3a, shadow deepens

### Input Fields
- **Background**: #0a0a0a
- **Border**: 1px solid #2a2a2a
- **Text**: #ffffff
- **Placeholder**: #666666
- **Focus**: Border #00FF2E, shadow 0 0 12px rgba(0,255,46,0.2)

### Navigation
- **Background**: rgba(10,10,10,0.95) with backdrop blur
- **Text**: #ffffff
- **Active State**: #00FF2E
- **Hover**: Opacity 1, color transition 0.2s

---

## Motion & Interactions

### Animation Philosophy
Motion should convey **energy and performance**. Use animations for:
- Page load reveals (staggered entrance)
- Interactive feedback (hover, click, focus)
- State transitions (loading, success, error)
- Scroll-triggered reveals (performant, subtle)

### Common Animations

#### Fade In
```css
animation: fadeIn 0.4s ease-out;
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

#### Slide Up
```css
animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

#### Glow (Neon Accent)
```css
animation: glow 2s ease-in-out infinite;
@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(0,255,46,0.2); }
  50% { box-shadow: 0 0 40px rgba(0,255,46,0.5); }
}
```

#### Hover Scale
```css
transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
&:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(0,255,46,0.3);
}
```

### Timing Standards
- **Micro-interactions** (hover, focus): 150–200ms
- **Component transitions**: 300–400ms
- **Page load reveals**: 400–600ms
- **Looping animations**: 2–4 seconds

---

## Accessibility

### Color Contrast
- All text must meet WCAG AA (4.5:1) minimum
- Critical: #00FF2E (#0a0a0a/#1a1a1a) = 8.2:1 ✓
- Body text: #ffffff on dark = 20:1 ✓
- Secondary: #a0a0a0 on dark = 4.5:1 ✓

### Inclusive Design
- Never rely on color alone to convey meaning
- Use icons + text together
- Ensure sufficient spacing for touch targets (min 44px)
- Maintain keyboard navigation compatibility
- Provide focus indicators (ring-offset, outline)

### Dark Mode Considerations
- This is dark mode first; light mode is secondary
- Ensure sufficient contrast in light mode too
- Test colors in both modes

---

## Implementation Checklist

- [ ] Tailwind config set up with custom color tokens
- [ ] Font stack implemented and optimized
- [ ] Spacing scale applied globally
- [ ] Component library established (buttons, cards, forms, etc.)
- [ ] Motion/animation defaults configured
- [ ] Accessibility audit completed
- [ ] Dark/light theme toggle tested
- [ ] Mobile responsiveness verified
- [ ] Performance optimized (LCP, CLS, etc.)

---

## Brand Voice in Design

Every visual choice reinforces SpaceFit's brand:
- **Confident**: No hedging, no apologizing, bold choices
- **Athletic**: Performance-oriented, driven, energetic
- **Premium**: Refined details, precision, quality
- **Innovative**: Tech-forward, modern, unafraid of contrast
- **Accessible**: Inclusive design that welcomes all athletes

The design should make users feel like they're joining an elite, performance-focused community.
