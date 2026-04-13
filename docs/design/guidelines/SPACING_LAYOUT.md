# Spacing & Layout System

## Spacing Philosophy

SpaceFit uses a **consistent 4px base unit** for all spacing decisions. This creates:
- Visual harmony and predictability
- Responsive scaling across devices
- Precise pixel alignment
- Flexible composition without guesswork

---

## Spacing Scale

All spacing values are multiples of 4px:

```
4px   (1 unit)   – xs  – Small gaps, tight spacing
8px   (2 units)  – sm  – Small component padding
12px  (3 units)  – sm+ – Small spacing
16px  (4 units)  – md  – Standard padding, standard gaps
20px  (5 units)  – md+ – Slightly larger spacing
24px  (6 units)  – lg  – Large padding, section padding
28px  (7 units)  – lg+ – Extra spacing
32px  (8 units)  – xl  – Extra-large spacing
36px  (9 units)  – xl+ – Large section separation
40px  (10 units) – 2xl – Major spacing
48px  (12 units) – 2xl – Large section spacing
64px  (16 units) – 3xl – Page-level spacing
96px  (24 units) – 4xl – Hero section spacing
```

### Practical Spacing Values
```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
3xl: 64px
4xl: 96px
5xl: 128px
6xl: 160px
```

---

## Padding (Internal Spacing)

### Button Padding
```
Small:    8px 24px
Default:  12px 32px
Large:    16px 40px
```

### Card Padding
```
Default:  24px
Compact:  16px
Generous: 32px
```

### Input Padding
```
Height: 44px (including padding)
Padding: 12px 16px
```

### Section Padding
```
Mobile:   16px
Tablet:   24px
Desktop:  32px
```

---

## Margins (External Spacing)

### Component Spacing
```
Between inline elements: 8px (sm) – 16px (md)
Between blocks: 24px (lg) – 32px (xl)
Between sections: 48px (2xl) – 96px (4xl)
```

### Best Practices
1. Use margin-bottom for vertical rhythm
2. Collapse margins (use one direction consistently)
3. Use gap for flexbox/grid (prevents margin collapse issues)
4. Never mix margin and gap in same container

---

## Gap (Grid & Flex)

### Gap Consistency

#### Small Components (Cards, Buttons)
```
gap: 8px (sm)  – Tight groups
gap: 16px (md) – Standard groups
```

#### Large Components (Sections, Layouts)
```
gap: 24px (lg)   – Section content
gap: 32px (xl)   – Major groupings
gap: 48px (2xl)  – Section separation
gap: 64px (3xl)  – Large section gaps
```

### Card Grid Gap
```
Desktop:  24px (lg)
Tablet:   20px
Mobile:   16px (md)
```

---

## Grid System

### Column Grid
- **Columns**: 12-column responsive grid
- **Gutter**: 16px (md) desktop, 8px (sm) mobile
- **Max Width**: 1280px (container width)
- **Margins**: 32px horizontal on desktop, 16px on mobile

### Container Sizes
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px (optional)
```

### Responsive Breakpoints
```
Mobile:  < 640px    (1-column)
Tablet:  640–1024px (2-column)
Desktop: 1024px+    (3-column or more)
```

### HTML/Tailwind
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* Cards */}
</div>
```

---

## Common Layout Patterns

### Hero Section
```
┌────────────────────────────────────┐
│                                    │
│  [Hero Height: min 500px - 100vh] │
│  [Content padding: 48px–96px]      │
│  [Asymmetric composition]          │
│                                    │
└────────────────────────────────────┘
```

**Spacing**:
- Top padding: 48px–96px
- Bottom padding: 48px–96px
- Side padding: 32px (mobile), 48px (desktop)
- Headline to CTA: 24px
- Line height (headline): 1.1

### Section Layout
```
┌────────────────────────────────────┐
│  48px (top)                        │
│  [Section Title]                   │
│                                    │
│  24px (subtitle spacing)           │
│  [Section Subtitle]                │
│                                    │
│  48px (content gap)                │
│  [Content Grid/Cards]              │
│                                    │
│  48px (bottom)                     │
└────────────────────────────────────┘
```

### Card Grid
```
┌──────────────┬──────────────┬──────────────┐
│              │              │              │
│   Card       │   Card       │   Card       │
│              │              │              │
├──────────────┼──────────────┼──────────────┤
│              │              │              │
│   Card       │   Card       │   Card       │
│              │              │              │
└──────────────┴──────────────┴──────────────┘

Gaps: 24px (lg) between cards
Padding: 32px around grid
```

### Two-Column Layout (Image + Text)
```
┌──────────────────────────────────────────┐
│                                          │
│  [Image]      [24px–48px gap]  [Text]   │
│  50% width                     50% width │
│                                          │
└──────────────────────────────────────────┘

Responsive: Stack vertically on mobile
```

### Form Layout
```
[Label]        – 14px
8px (gap)
[Input Field]  – 44px height
12px (gap)
[Help Text]    – 12px
24px (section gap)
[Label]
8px
[Input Field]
```

---

## Responsive Spacing

### Mobile-First Approach

#### Mobile (<640px)
```
Padding: 16px
Margins: 16px
Section gap: 32px
Card gap: 8px
Font sizes: Reduced
```

#### Tablet (640–1024px)
```
Padding: 20px–24px
Margins: 20px–24px
Section gap: 48px
Card gap: 16px–20px
Font sizes: Medium
```

#### Desktop (1024px+)
```
Padding: 32px
Margins: 32px
Section gap: 64px–96px
Card gap: 24px
Font sizes: Full size
```

### Implementation
```jsx
<div className="
  p-4 sm:p-6 lg:p-8
  gap-4 sm:gap-6 lg:gap-8
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  {/* Content */}
</div>
```

---

## Spacing Rules

### Rule 1: Consistent Direction
Use margin-bottom consistently (never margin-top) to avoid double margins.

```jsx
// Good
<div className="mb-6">Header</div>
<div className="mb-6">Content</div>
<div>Last item (no margin)</div>

// Avoid
<div className="mt-6">Header</div>
<div className="my-6">Content</div>
```

### Rule 2: Proportional Spacing
Spacing around elements should feel balanced:
- Space outside element ≈ Space inside element
- Not always equal (asymmetry is fine)

### Rule 3: Section Separation
Major sections separated by large gaps (48px–96px) create breathing room.

### Rule 4: Proximity Groups
Related items grouped closer (8px–16px) than unrelated items (24px–32px).

```jsx
<div className="space-y-2">
  {/* Related items, tight spacing */}
</div>

<div className="space-y-8">
  {/* Unrelated items, loose spacing */}
</div>
```

### Rule 5: Touch Targets
Interactive elements minimum 44px × 44px with 8px minimum spacing between them.

```jsx
<button className="min-h-11 min-w-44 px-4 py-3">
  Click me
</button>
```

---

## Alignment & Positioning

### Horizontal Alignment
```
Left align:    content flex-start (default)
Center align:  content flex-center or mx-auto
Right align:   content flex-end
Space between: justify-between
Even spacing:  space-x-N
```

### Vertical Alignment
```
Top align:     items-start
Center align:  items-center
Bottom align:  items-end
Space between: justify-between
Even spacing:  space-y-N
```

### Z-Index Hierarchy
```
Background: 0
Content:    10
Modals:     40
Tooltips:   50
Notifications: 60
```

---

## Tailwind Spacing Configuration

```javascript
module.exports = {
  theme: {
    spacing: {
      0: '0',
      px: '1px',
      0.5: '2px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      10: '40px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
  },
};
```

---

## Best Practices

1. **4px Grid**: All spacing multiples of 4px
2. **Consistent Direction**: Margin-bottom by default
3. **Visual Hierarchy**: Larger spacing for major sections
4. **Responsive**: Scale spacing with breakpoints
5. **Touch-Friendly**: 44px min for interactive elements
6. **Breathing Room**: Generous negative space around content
7. **Alignment**: Snap all elements to grid
8. **Predictability**: Users should expect consistent spacing patterns

---

## Spacing Checklist

- [ ] All spacing multiples of 4px
- [ ] Section gaps: 48px–96px
- [ ] Card gaps: 16px–24px
- [ ] Padding consistent (24px default)
- [ ] Touch targets minimum 44px
- [ ] Responsive spacing applied (mobile/tablet/desktop)
- [ ] Vertical rhythm maintained (body text line height × 1.5–2)
- [ ] No unnecessary margins
- [ ] Grid alignment verified
