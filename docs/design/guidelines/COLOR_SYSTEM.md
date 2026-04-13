# Color System

## Design Philosophy

SpaceFit uses a **high-contrast dark theme** with **electric neon green accents**. This combination creates:
- Maximum visual hierarchy and clarity
- Energy and modernity
- Athletic confidence and precision
- Accessibility through high contrast ratios

The color system is purposefully restrained (3 primary colors) to ensure consistent, recognizable branding across all touchpoints.

---

## Primary Color Palette

### Background Layer (Black)
```
#0a0a0a – Pure Deep Black
  Used for: Page backgrounds, main canvas
  Contrast ratio on white text: 20:1
  Purpose: Maximum depth, athletic feel, energy foundation
```

### Secondary Layer (Dark Gray)
```
#1a1a1a – Card Black
  Used for: Cards, panels, elevated surfaces
  Contrast on white text: 16:1
  Purpose: Create visual hierarchy without breaking dark aesthetic
```

### Tertiary Layer (Medium Gray)
```
#2a2a2a – Border Gray
  Used for: Borders, dividers, subtle separation
  Contrast on white text: 13:1
  Purpose: Define container boundaries without harshness
```

### Accent (Neon Green)
```
#00FF2E – Primary Neon
  Used for: CTA buttons, active states, critical highlights
  Contrast on dark backgrounds: 8.2:1
  Purpose: Unmissable call-to-action, energy signal
  
#00FF66 – Light Neon (Hover)
  Used for: Hover states, secondary accents
  Purpose: Gradual feedback, interactive state indication
  
#00cc23 – Dark Neon (Active)
  Used for: Pressed/active states
  Purpose: Confident action feedback
```

### Text Colors
```
#ffffff – Pure White
  Used for: Primary headlines, body text, high-emphasis content
  Contrast on dark: 20:1
  Purpose: Maximum readability, primary information
  
#a0a0a0 – Light Gray
  Used for: Secondary text, labels, supporting info
  Contrast on dark: 4.5:1 (WCAG AA minimum)
  Purpose: Hierarchy, de-emphasize secondary content
  
#666666 – Medium Gray
  Used for: Placeholder text, disabled states, tertiary info
  Contrast on dark: 2.3:1
  Purpose: Very subtle, for scanning only
```

### Semantic Colors
```
Success – #00FF2E (matches brand neon)
  Alternative: #4ade80 (softer green)
  Used for: Positive confirmations, successful actions
  
Warning – #FFD700 (golden yellow)
  Contrast on dark: 9.5:1
  Used for: Cautions, non-blocking alerts
  
Error – #FF4444 (bright red)
  Contrast on dark: 6.8:1
  Used for: Critical errors, destructive actions
  
Info – #00d4ff (cyan)
  Contrast on dark: 8:1
  Used for: Informational messages, neutral alerts
```

---

## Color Usage Rules

### Rule 1: The 85-8-7 Split
```
85% Dark backgrounds (#0a0a0a, #1a1a1a, #2a2a2a)
 8% Neutral support colors (#a0a0a0, white)
 7% Neon accents (#00FF2E)

This ratio creates visual hierarchy where accents COMMAND attention.
```

### Rule 2: Never Use Neon for Decorative Elements
```
✓ CORRECT:
  - Primary CTA button
  - Active navigation
  - Success confirmation
  - Link hovers on dark backgrounds

✗ INCORRECT:
  - Decorative lines
  - Background gradients
  - Icon fills (unless interactive)
  - Disabled state backgrounds
```

### Rule 3: Text Contrast Hierarchy
```
Maximum Contrast (20:1) – Primary Headlines
  #ffffff on #0a0a0a
  
High Contrast (15:1+) – Body Text
  #ffffff on #1a1a1a or #2a2a2a
  
Standard Contrast (4.5:1) – Secondary Labels
  #a0a0a0 on #0a0a0a
  
Subtle (2-3:1) – Placeholders, Disabled
  #666666 on #0a0a0a
```

### Rule 4: Layering for Depth
```
Layer 0 (Page): #0a0a0a
Layer 1 (Cards): #1a1a1a
Layer 2 (Interactive): #2a2a2a
Layer 3 (Overlay): rgba(0, 0, 0, 0.3–0.8)

Each layer should be visually distinct but harmonious.
```

### Rule 5: Semantic Color Consistency
```
Error always red (#FF4444) across all contexts
Success always neon green (#00FF2E) across all contexts
Warning always yellow (#FFD700) across all contexts
Info always cyan (#00d4ff) across all contexts

DO NOT mix or swap these for any component.
```

---

## Component Color Mapping

### Buttons

#### Primary Button
- **Background**: #00FF2E
- **Text**: #0a0a0a
- **Hover**: #00FF66
- **Active**: #00cc23
- **Disabled**: #666666

#### Secondary Button
- **Border**: #2a2a2a
- **Text**: #ffffff
- **Hover**: #3a3a3a border, white text
- **Active**: #00FF2E text, #00FF2E border
- **Disabled**: #1a1a1a border, #666666 text

#### Ghost Button
- **Text**: #a0a0a0
- **Hover**: #ffffff text
- **Active**: #00FF2E text

### Cards
- **Background**: #1a1a1a
- **Border**: #2a2a2a
- **Border Hover**: #3a3a3a
- **Border Active**: #00FF2E
- **Text**: #ffffff
- **Secondary Text**: #a0a0a0

### Form Inputs
- **Background**: #0a0a0a
- **Border**: #2a2a2a
- **Border Focus**: #00FF2E
- **Text**: #ffffff
- **Placeholder**: #666666

### Navigation
- **Background**: rgba(10, 10, 10, 0.95)
- **Text**: #a0a0a0
- **Text Hover**: #ffffff
- **Active**: #00FF2E

### Badges/Tags
- **Success**: Background #00FF2E, text #0a0a0a
- **Error**: Background #FF4444, text white
- **Warning**: Background #FFD700, text #0a0a0a
- **Info**: Background #00d4ff, text white

---

## Accessibility Compliance

### WCAG AA Standard (4.5:1 minimum)

✓ **Compliant pairs**:
- #ffffff on #0a0a0a (20:1)
- #ffffff on #1a1a1a (16:1)
- #00FF2E on #0a0a0a (8.2:1)
- #FF4444 on #0a0a0a (6.8:1)
- #FFD700 on #0a0a0a (9.5:1)
- #00d4ff on #0a0a0a (8:1)

✗ **Non-compliant**:
- #a0a0a0 on #0a0a0a (4.5:1 – borderline, use for secondary only)
- #666666 on #0a0a0a (2.3:1 – decorative/placeholder only)

### Testing
- Use WebAIM Contrast Checker
- Test with colorblind simulators (Protanopia, Deuteranopia, Tritanopia)
- Ensure meaning isn't conveyed by color alone

---

## Dark Mode Implementation

### CSS Variables
```css
:root {
  /* Backgrounds */
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #1a1a1a;
  --color-bg-tertiary: #2a2a2a;
  
  /* Text */
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0a0;
  --color-text-tertiary: #666666;
  
  /* Accents */
  --color-accent: #00FF2E;
  --color-accent-light: #00FF66;
  --color-accent-dark: #00cc23;
  
  /* Semantic */
  --color-success: #00FF2E;
  --color-warning: #FFD700;
  --color-error: #FF4444;
  --color-info: #00d4ff;
  
  /* Borders */
  --color-border-light: #2a2a2a;
  --color-border-medium: #3a3a3a;
}
```

### Tailwind Configuration
```javascript
module.exports = {
  theme: {
    colors: {
      background: '#0a0a0a',
      surface: '#1a1a1a',
      neon: {
        DEFAULT: '#00FF2E',
        light: '#00FF66',
        dark: '#00cc23',
      },
      semantic: {
        success: '#00FF2E',
        warning: '#FFD700',
        error: '#FF4444',
        info: '#00d4ff',
      },
    },
  },
};
```

---

## Color in Motion

### Transitions
- **Default Duration**: 200ms
- **Easing**: cubic-bezier(0.34, 1.56, 0.64, 1)
- **Triggered By**: Hover, focus, active states

### Examples
```css
/* Button color transition */
transition: background-color 0.2s ease-out, color 0.2s ease-out;

/* Border color change */
transition: border-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

/* Glow effect */
animation: glow 2s ease-in-out infinite;
@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 46, 0.2); }
  50% { box-shadow: 0 0 40px rgba(0, 255, 46, 0.5); }
}
```

---

## Best Practices

1. **Restraint**: Use neon sparingly—it's 7% of the palette, not 50%
2. **Contrast First**: Prioritize readability over aesthetics
3. **Consistency**: Same semantic meaning = same color everywhere
4. **Testing**: Validate all color combinations with contrast tools
5. **Context**: Color meaning should match user expectations (red = error)
6. **Accessibility**: Never rely on color alone to convey information
7. **Performance**: Use hex/rgb, avoid expensive gradients unless necessary

---

## Color Grids

### Background Alternatives (for special cases)
```
#0a0a0a  Pure black
#0f0f0f  Slightly lighter
#1a1a1a  Secondary layer
#2a2a2a  Tertiary layer
#3a3a3a  Interactive layer
```

### Use Cases
- Default layout: #0a0a0a
- Card backgrounds: #1a1a1a
- Input backgrounds: #0a0a0a
- Navigation hover: #3a3a3a
- Overlay modal: rgba(10, 10, 10, 0.8)

---

## Testing Checklist

- [ ] All text passes WCAG AA contrast (4.5:1 minimum)
- [ ] Colors tested in grayscale (simulate colorblindness)
- [ ] Semantic colors consistent across components
- [ ] Neon used only for primary CTAs and active states
- [ ] Color transitions smooth and not jarring
- [ ] Disabled states visually distinct but not jarring
- [ ] Dark backgrounds provide sufficient depth
- [ ] Print-friendly (consider if applicable)
