# Typography System

## Font Strategy

SpaceFit uses **three purposefully chosen Google Fonts** — each selected for a specific role in the design:

| Role | Font | Why |
|------|------|-----|
| Display | **Barlow Condensed** | Condensed proportions create maximum athletic impact at large scale — the visual language of performance |
| Body | **DM Sans** | Geometric humanist with excellent legibility on dark backgrounds and clear hierarchy at small sizes |
| Mono | **Space Mono** | Futuristic fixed-width that reinforces the space/tech brand identity in data and metadata contexts |

### Loading (HTML `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Space+Mono:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

### CSS Variables
```css
:root {
  --font-display: 'Barlow Condensed', 'Oswald', sans-serif;
  --font-body:    'DM Sans', 'Inter', sans-serif;
  --font-mono:    'Space Mono', 'JetBrains Mono', monospace;
}
```

---

## Font Stack

### Display Font — Barlow Condensed
```css
font-family: 'Barlow Condensed', 'Oswald', sans-serif;
/* Weights: 600, 700, 800, 900 */
```

**Used for**: Hero headlines, section titles, stat numbers, CTA labels, pricing figures

**Characteristics**:
- Condensed proportions pack more characters into less space — great for 3-word punchy headlines
- High x-height ensures readability at all sizes
- Wide weight range (600–900) supports bold-to-black typographic hierarchy
- Optimal at `font-size ≥ 24px`
- Use `text-transform: uppercase` at display sizes for athletic authority

### Body Font — DM Sans
```css
font-family: 'DM Sans', 'Inter', sans-serif;
/* Weights: 300, 400, 500, 600 */
```

**Used for**: Paragraphs, labels, navigation links, form elements, card descriptions, button text

**Characteristics**:
- Geometric humanist design — clean, modern, approachable
- Exceptional legibility on dark backgrounds at `14–18px`
- `opsz` (optical size) axis allows automatic size-based refinement
- `font-weight: 400` for body, `500` for labels, `600` for CTAs/headings

### Monospace Font — Space Mono
```css
font-family: 'Space Mono', 'JetBrains Mono', monospace;
/* Weights: 400, 700 */
```

**Used for**: Stat counters, timestamps, metadata, tracking IDs, code snippets, data values

**Characteristics**:
- Futuristic geometric design fits the space/tech brand perfectly
- Fixed-width ensures numeric alignment in tables and stat blocks
- Distinctive enough to signal "data" without being distracting
- Optical weight heavier than most mono fonts — legible at `12px`

---

## Type Scale

Based on a **1.125 modular scale** (4/3 ratio) for harmonious progression:

| Size | Pixels | Rem | Usage |
|------|--------|-----|-------|
| xs | 12px | 0.75rem | Captions, timestamps |
| sm | 14px | 0.875rem | Labels, small text |
| base | 16px | 1rem | Body text, standard |
| lg | 18px | 1.125rem | Large body, emphasis |
| xl | 20px | 1.25rem | Small headings |
| 2xl | 24px | 1.5rem | Subsection headers |
| 3xl | 30px | 1.875rem | Section headers |
| 4xl | 36px | 2.25rem | Page subtitles |
| 5xl | 48px | 3rem | Large headlines |
| 6xl | 60px | 3.75rem | Major headlines |
| 7xl | 72px | 4.5rem | Hero headers |
| 8xl | 96px | 6rem | Display hero |

---

## Font Weights

### Weight Scale
```
100 – Thin (not used)
200 – Extra Light (not used)
300 – Light (rarely)
400 – Normal (body text)
500 – Medium (labels, emphasis)
600 – Semi Bold (headings, strong emphasis)
700 – Bold (headlines, strong headings)
800 – Extra Bold (display, hero text)
900 – Black (not recommended)
```

### Weight Rules
1. **Body text**: Always 400 (normal weight)
2. **Headings**: 600–800 only
3. **Labels**: 500
4. **Display**: 700–800
5. **Never use** 900 (too heavy), 200 (too light)

---

## Line Height (Leading)

### By Content Type

#### Display/Headlines (large text)
```
Line Height: 1.1
Example: 72px headline × 1.1 = 79.2px line spacing
Purpose: Tight leading creates visual impact and premium feel
```

#### Headings (medium text)
```
Line Height: 1.2–1.3
Example: 30px heading × 1.25 = 37.5px
Purpose: Readable but still compact
```

#### Body Text
```
Line Height: 1.6
Example: 16px text × 1.6 = 25.6px
Purpose: Optimal readability, especially on dark backgrounds
```

#### Small Text
```
Line Height: 1.4–1.5
Example: 14px label × 1.5 = 21px
Purpose: Compact but readable
```

### Best Practices
- Body text NEVER below 1.5 line height
- Decrease line height as size increases (inverse relationship)
- Dark backgrounds need generous line height (min 1.5)

---

## Letter Spacing (Tracking)

### Guidelines

#### Tight (Headlines)
```
Letter Spacing: -0.02em to -0.01em
Usage: Display text 48px+
Effect: Creates visual tightness, premium feel
```

#### Normal (Body)
```
Letter Spacing: 0em
Usage: All body text, default headings
Effect: Natural, unforced spacing
```

#### Wide (Labels)
```
Letter Spacing: 0.01em to 0.02em
Usage: Form labels, captions, small text
Effect: Clarity at small sizes
```

#### Extra Wide (Rare)
```
Letter Spacing: 0.05em
Usage: Special cases only (badges, tags)
Effect: Emphasis through expanded spacing
```

---

## Type Styles (Pre-configured)

### Display Hero
```css
font-size: 5rem (80px);
font-weight: 800;
line-height: 1.1;
letter-spacing: -0.02em;
font-family: display;

Example: "BREAK YOUR BIOLOGICAL CEILING"
```

### Display Large
```css
font-size: 3.5rem (56px);
font-weight: 700;
line-height: 1.1;
letter-spacing: -0.01em;
font-family: display;

Example: Large hero subtitle
```

### Heading 1
```css
font-size: 2.5rem (40px);
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.01em;
font-family: display;

Example: "WHY CHOOSE US"
```

### Heading 2
```css
font-size: 1.875rem (30px);
font-weight: 600;
line-height: 1.3;
letter-spacing: 0em;
font-family: display;

Example: Section subtitles, card headers
```

### Heading 3
```css
font-size: 1.5rem (24px);
font-weight: 600;
line-height: 1.4;
letter-spacing: 0em;
font-family: display;

Example: Feature titles, panel headers
```

### Body
```css
font-size: 1rem (16px);
font-weight: 400;
line-height: 1.6;
letter-spacing: 0em;
font-family: body;

Example: Main paragraph text
```

### Body Small
```css
font-size: 0.875rem (14px);
font-weight: 400;
line-height: 1.5;
letter-spacing: 0em;
font-family: body;

Example: Supporting text, subtext
```

### Label
```css
font-size: 0.875rem (14px);
font-weight: 500;
line-height: 1.5;
letter-spacing: 0.01em;
font-family: body;

Example: Form labels, UI labels
```

### Caption
```css
font-size: 0.75rem (12px);
font-weight: 400;
line-height: 1.4;
letter-spacing: 0.02em;
font-family: mono;

Example: Metadata, timestamps, tags
```

---

## Typography in Use

### Headlines (Hero Section)
```jsx
<h1 className="text-[5rem] font-black leading-tight -tracking-wider text-white">
  BREAK YOUR BIOLOGICAL CEILING
</h1>
```

### Subheading
```jsx
<h2 className="text-[1.875rem] font-semibold leading-snug text-white">
  Premium Services
</h2>
```

### Body Text
```jsx
<p className="text-base font-normal leading-relaxed text-gray-300">
  Experience advanced coaching with personalized training plans tailored to your goals.
</p>
```

### Label
```jsx
<label className="text-sm font-medium text-white">
  Email Address
</label>
```

### Caption
```jsx
<p className="text-xs font-mono leading-tight text-gray-500">
  Last updated: 2024-04-05
</p>
```

---

## Responsive Typography

### Mobile-First Approach

#### Mobile (<640px)
```css
Display Hero: 3.5rem → reduced from 5rem
Heading 1: 2rem → reduced from 2.5rem
Heading 2: 1.5rem → reduced from 1.875rem
Body: 1rem (no change)
```

#### Tablet (640px–1024px)
```css
Display Hero: 4.5rem
Heading 1: 2.25rem
Heading 2: 1.75rem
Body: 1rem
```

#### Desktop (1024px+)
```css
Display Hero: 5rem (full size)
Heading 1: 2.5rem
Heading 2: 1.875rem
Body: 1rem
```

### Implementation
```jsx
<h1 className="
  text-3xl sm:text-4xl md:text-5xl
  font-bold sm:font-extrabold
  leading-tight
">
  Responsive Headline
</h1>
```

---

## Tailwind Configuration

Add to `tailwind.config.js` (see `/docs/design/tokens/tailwind.config.js` for complete config):

```javascript
module.exports = {
  theme: {
    fontFamily: {
      display: ["'Barlow Condensed'", "'Oswald'", 'sans-serif'],
      body:    ["'DM Sans'", "'Inter'", 'sans-serif'],
      sans:    ["'DM Sans'", "'Inter'", 'sans-serif'],  // Tailwind default
      mono:    ["'Space Mono'", "'JetBrains Mono'", 'monospace'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.4' }],
      sm: ['0.875rem', { lineHeight: '1.5' }],
      base: ['1rem', { lineHeight: '1.6' }],
      lg: ['1.125rem', { lineHeight: '1.6' }],
      xl: ['1.25rem', { lineHeight: '1.5' }],
      '2xl': ['1.5rem', { lineHeight: '1.3' }],
      '3xl': ['1.875rem', { lineHeight: '1.3' }],
      '4xl': ['2.25rem', { lineHeight: '1.2' }],
      '5xl': ['3rem', { lineHeight: '1.2' }],
      '6xl': ['3.75rem', { lineHeight: '1.1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1.1' }],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    letterSpacing: {
      tighter: '-0.02em',
      tight: '-0.01em',
      normal: '0em',
      wide: '0.01em',
      wider: '0.02em',
      widest: '0.05em',
    },
  },
};
```

---

## Best Practices

### Hierarchy
1. Size is primary hierarchy tool (not color)
2. Headlines much larger than body (min 1.5× scale)
3. Weight supports size (heavier = larger impact)

### Readability
1. Body text never below 16px on screens
2. Line height min 1.5 for dark backgrounds
3. Line length max 80 characters for body text
4. Sufficient contrast (4.5:1 WCAG AA minimum)

### Performance
1. Use system fonts (zero loading time)
2. Limit weights used (400, 500, 600, 700 only)
3. No web font delays
4. Optimal rendering across devices

### Accessibility
1. Use semantic HTML (`<h1>`, `<h2>`, `<p>`)
2. Headings follow logical hierarchy
3. Never skip heading levels
4. Sufficient color contrast for all text
5. Text remains readable when zoomed 200%

### Responsive
1. Scale headings down on mobile
2. Maintain minimum font sizes
3. Line height adapts with size
4. Use ems for relative sizing when appropriate

---

## Typography Testing Checklist

- [ ] All body text min 16px
- [ ] Headings follow logical hierarchy
- [ ] Line height min 1.5 for dark backgrounds
- [ ] Contrast ratio min 4.5:1 (WCAG AA)
- [ ] No font files loaded (system fonts only)
- [ ] Responsive sizes tested on mobile/tablet/desktop
- [ ] Zoom test (150%, 200%) legible
- [ ] Screen reader test (semantic HTML)
- [ ] Print test (if applicable)
