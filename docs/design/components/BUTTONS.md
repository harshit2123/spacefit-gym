# Button Components

## Overview

SpaceFit buttons follow a strict hierarchy to guide user actions. Three levels of emphasis ensure visual clarity and proper call-to-action prominence.

---

## Button Variants

### Primary Button (Neon CTA)

**Purpose**: Critical actions and primary calls-to-action.

**Specs**:
- **Background**: #00FF2E (neon green)
- **Text**: #0a0a0a (dark)
- **Font Weight**: 600
- **Padding**: 12px 32px
- **Border Radius**: 6px
- **Font Size**: 1rem
- **Border**: None

**States**:

| State | Background | Shadow | Transform |
|-------|-----------|--------|-----------|
| Default | #00FF2E | none | scale(1) |
| Hover | #00FF66 | 0 0 20px rgba(0,255,46,0.3) | scale(1.02) |
| Active | #00cc23 | 0 0 12px rgba(0,255,46,0.2) | scale(0.98) |
| Disabled | #666666 | none | scale(1) |
| Focus | #00FF2E | 0 0 0 4px rgba(0,255,46,0.3) | scale(1) |

**Accessibility**:
- Focus ring: 4px offset with neon glow
- Disabled state: 50% opacity, cursor not-allowed
- Minimum 44px height for touch targets

**Animation**:
```css
transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

&:hover {
  background: #00FF66;
  box-shadow: 0 0 20px rgba(0, 255, 46, 0.3);
  transform: scale(1.02);
}

&:active {
  transform: scale(0.98);
  box-shadow: 0 0 12px rgba(0, 255, 46, 0.2);
}
```

**Usage**:
- "Sign Up Now" hero CTA
- "Get Started" button
- "Purchase Plan" checkout
- Critical form submissions

**HTML/Tailwind**:
```jsx
<button className="
  px-8 py-3 
  bg-[#00FF2E] text-[#0a0a0a] 
  font-semibold rounded-md
  hover:bg-[#00FF66] hover:shadow-[0_0_20px_rgba(0,255,46,0.3)]
  active:scale-95
  transition-all duration-200
  focus:outline-none focus:ring-4 focus:ring-[rgba(0,255,46,0.3)]
  disabled:bg-gray-600 disabled:cursor-not-allowed
">
  Get Started
</button>
```

---

### Secondary Button (Outline)

**Purpose**: Important secondary actions that should support the primary action.

**Specs**:
- **Background**: Transparent
- **Border**: 2px solid #2a2a2a
- **Text**: #ffffff
- **Font Weight**: 600
- **Padding**: 10px 30px (adjusted for border width)
- **Border Radius**: 6px
- **Font Size**: 1rem

**States**:

| State | Border | Background | Text |
|-------|--------|-----------|------|
| Default | #2a2a2a | transparent | #ffffff |
| Hover | #3a3a3a | rgba(255,255,255,0.05) | #ffffff |
| Active | #00FF2E | rgba(0,255,46,0.1) | #00FF2E |
| Disabled | #666666 | transparent | #666666 |
| Focus | #00FF2E | transparent | #ffffff |

**Animation**:
```css
transition: all 0.2s ease-out;

&:hover {
  border-color: #3a3a3a;
  background: rgba(255, 255, 255, 0.05);
}

&:active {
  border-color: #00FF2E;
  color: #00FF2E;
  background: rgba(0, 255, 46, 0.1);
}
```

**Usage**:
- "Learn More" buttons
- "Compare Plans" links
- Secondary navigation
- Form cancel/reset

**HTML/Tailwind**:
```jsx
<button className="
  px-7 py-2.5
  border-2 border-[#2a2a2a] text-white
  font-semibold rounded-md
  hover:border-[#3a3a3a] hover:bg-white/5
  active:border-[#00FF2E] active:text-[#00FF2E] active:bg-[rgba(0,255,46,0.1)]
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-[#00FF2E] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]
  disabled:border-gray-600 disabled:text-gray-600 disabled:cursor-not-allowed
">
  Learn More
</button>
```

---

### Tertiary Button (Ghost)

**Purpose**: Minimal, low-priority actions or supplementary navigation.

**Specs**:
- **Background**: Transparent
- **Border**: None
- **Text**: #a0a0a0
- **Font Weight**: 500
- **Padding**: 8px 16px
- **Border Radius**: 4px
- **Font Size**: 0.875rem

**States**:

| State | Text | Background |
|-------|------|-----------|
| Default | #a0a0a0 | transparent |
| Hover | #ffffff | rgba(255,255,255,0.05) |
| Active | #00FF2E | transparent |
| Disabled | #666666 | transparent |

**Animation**:
```css
transition: all 0.15s ease-out;

&:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

&:active {
  color: #00FF2E;
}
```

**Usage**:
- Breadcrumb navigation
- Inline text links
- Help/support links
- Tertiary form actions

---

## Size Variants

### Large Button
- **Padding**: 16px 40px
- **Font Size**: 1.125rem
- **Min Height**: 52px
- **Use Case**: Hero CTA, primary page-level actions

### Default Button
- **Padding**: 12px 32px
- **Font Size**: 1rem
- **Min Height**: 44px
- **Use Case**: Standard buttons

### Small Button
- **Padding**: 8px 24px
- **Font Size**: 0.875rem
- **Min Height**: 36px
- **Use Case**: Compact UI, data tables, inline actions

### Compact Button
- **Padding**: 6px 16px
- **Font Size**: 0.75rem
- **Min Height**: 32px
- **Use Case**: Tight layouts, tool buttons

---

## Icon Buttons

### Standard Icon Button
```jsx
<button className="
  w-10 h-10
  bg-[#1a1a1a] text-[#a0a0a0]
  border border-[#2a2a2a]
  rounded-md
  hover:text-white hover:border-[#3a3a3a]
  active:text-[#00FF2E]
  transition-colors duration-200
  flex items-center justify-center
">
  <Icon size={20} />
</button>
```

### Icon with Text
```jsx
<button className="
  flex items-center gap-2
  px-6 py-3
  bg-[#00FF2E] text-[#0a0a0a]
  rounded-md font-semibold
  hover:bg-[#00FF66]
  transition-all duration-200
">
  <ArrowRight size={20} />
  Continue
</button>
```

---

## Button Groups

**Usage**: Related actions grouped together.

**Spacing**: 8px (sm) gap between buttons

**Responsive**: Stack vertically on mobile (< 640px)

```jsx
<div className="flex gap-2 flex-col sm:flex-row">
  <button className="flex-1 ...">Cancel</button>
  <button className="flex-1 ...">Confirm</button>
</div>
```

---

## Loading State

```jsx
<button disabled className="opacity-75 cursor-wait">
  <span className="animate-spin">⟳</span>
  Processing...
</button>
```

**Animation**: 2s linear infinite rotation

---

## Disabled State

- **Opacity**: 50% of normal
- **Cursor**: not-allowed
- **No Hover Effects**: Disable transitions
- **Clear Visual Feedback**: Distinguish from enabled buttons

---

## Best Practices

1. **One Primary per Page**: Only one primary button should dominate attention
2. **Clear Labels**: Action-oriented text ("Sign Up" not "Submit")
3. **Adequate Spacing**: 8px+ between buttons
4. **Consistent Sizing**: Use default size unless justified
5. **Hover Feedback**: Always provide clear hover/active states
6. **Accessibility**: Maintain 4.5:1 text contrast, 44px min height for touch

---

## Tailwind Configuration

Add to `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00FF2E',
          light: '#00FF66',
          dark: '#00cc23',
        },
      },
      spacing: {
        button: '12px 32px',
      },
    },
  },
};
```
