# Pricing Components

## Overview

The pricing section is a critical revenue driver for SpaceFit. The design emphasizes:
- **Clear tier differentiation** (visual hierarchy)
- **Highlighted "recommended" tier** to guide conversion
- **Transparent pricing** without surprises
- **Trust-building** through feature comparisons

---

## Pricing Card Specifications

### Standard Pricing Card

#### Visual Structure
```
┌──────────────────────────┐
│  PLAN NAME               │
│  $XX/month               │
│  ─────────────────────── │
│  ✓ Feature 1             │
│  ✓ Feature 2             │
│  ✓ Feature 3             │
│  ─────────────────────── │
│  [Get Started]           │
└──────────────────────────┘
```

#### Specifications
- **Width**: 360px (responsive)
- **Background**: #1a1a1a
- **Border**: 1px solid #2a2a2a
- **Border Radius**: 8px
- **Padding**: 32px
- **Shadow**: 0 4px 12px rgba(0, 0, 0, 0.3)

#### Sections

**Header**:
```jsx
<div className="mb-6">
  <h3 className="text-2xl font-bold text-white mb-2">Elite</h3>
  <div className="flex items-baseline gap-2 mb-2">
    <span className="text-5xl font-extrabold text-[#00FF2E]">$45</span>
    <span className="text-gray-400 font-medium">/month</span>
  </div>
  <p className="text-sm text-gray-400">Perfect for serious athletes</p>
</div>
```

**Feature List**:
```jsx
<ul className="space-y-3 mb-8 pb-8 border-b border-[#2a2a2a]">
  <li className="flex items-start gap-3 text-gray-300">
    <span className="text-[#00FF2E] font-bold flex-shrink-0">✓</span>
    <span className="text-sm">Unlimited personalized training plans</span>
  </li>
  <li className="flex items-start gap-3 text-gray-300">
    <span className="text-[#00FF2E] font-bold flex-shrink-0">✓</span>
    <span className="text-sm">Priority 1-on-1 coaching</span>
  </li>
  <li className="flex items-start gap-3 text-gray-300">
    <span className="text-[#00FF2E] font-bold flex-shrink-0">✓</span>
    <span className="text-sm">Advanced progress analytics</span>
  </li>
</ul>
```

**CTA Button**:
```jsx
<button className="
  w-full
  px-6 py-3
  bg-[#00FF2E] text-[#0a0a0a]
  font-semibold rounded-md
  hover:bg-[#00FF66] hover:shadow-[0_0_20px_rgba(0,255,46,0.3)]
  active:scale-95
  transition-all duration-200
">
  Get Started
</button>
```

#### States

| State | Border | Shadow | Button | Background |
|-------|--------|--------|--------|-----------|
| Default | #2a2a2a | md | Secondary | #1a1a1a |
| Hover | #3a3a3a | lg | Secondary | #1a1a1a |
| Active | #00FF2E | neon-md | Primary | #1a1a1a |

---

## Highlighted "Recommended" Tier

### Purpose
Emphasize the most popular/recommended plan to guide conversion. Typically the middle tier for 3-tier pricing.

### Visual Enhancements

#### Border & Shadow
```jsx
<div className="
  border-2 border-[#00FF2E]
  shadow-[0_0_20px_rgba(0,255,46,0.3)]
">
```

#### Badge
```jsx
<div className="relative mb-6">
  <div className="
    absolute -top-4 -left-6
    bg-[#00FF2E] text-[#0a0a0a]
    px-4 py-1
    text-xs font-bold rounded-full
    uppercase tracking-wide
  ">
    Recommended
  </div>
  {/* Card content */}
</div>
```

#### Scale Adjustment
```jsx
<div className="
  border-2 border-[#00FF2E]
  scale-105  // Slightly larger
  -my-6      // Compensate for extra height
">
```

### Complete Recommended Card Example
```jsx
<div className="relative">
  <div className="
    bg-[#1a1a1a] border-2 border-[#00FF2E]
    rounded-lg p-8
    shadow-[0_0_20px_rgba(0,255,46,0.3)]
    scale-105 -my-6
  ">
    <div className="
      absolute -top-4 left-8
      bg-[#00FF2E] text-[#0a0a0a]
      px-4 py-1
      text-xs font-bold rounded-full
    ">
      RECOMMENDED
    </div>
    
    <div className="pt-2">
      <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-5xl font-extrabold text-[#00FF2E]">$35</span>
        <span className="text-gray-400">/month</span>
      </div>
      <p className="text-sm text-gray-400 mb-6">Most popular choice</p>
      
      {/* Feature list */}
      
      <button className="
        w-full
        px-6 py-3
        bg-[#00FF2E] text-[#0a0a0a]
        font-semibold rounded-md
      ">
        Get Started
      </button>
    </div>
  </div>
</div>
```

---

## Pricing Card Grid

### Three Tier Layout

#### Desktop (1024px+)
```
┌────────────┐  ┌────────────┐  ┌────────────┐
│   Basic    │  │ STANDARD   │  │   Elite    │
│   (small)  │  │  (largest) │  │   (small)  │
└────────────┘  └────────────┘  └────────────┘
       24px           24px           24px
```

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
  {/* Basic Tier */}
  <PricingCard {...basicProps} />
  
  {/* Standard Tier (Recommended) */}
  <div className="relative">
    <PricingCard {...standardProps} isRecommended className="scale-110 -my-8" />
  </div>
  
  {/* Elite Tier */}
  <PricingCard {...eliteProps} />
</div>
```

#### Tablet (768–1023px)
```
┌──────────────┐  ┌──────────────┐
│    Basic     │  │   Standard   │
└──────────────┘  └──────────────┘
        20px

┌──────────────┐
│    Elite     │
└──────────────┘
```

2-column top, 1 centered below

#### Mobile (<768px)
```
┌────────────┐
│   Basic    │
└────────────┘
      16px
┌────────────┐
│  Standard  │
└────────────┘
      16px
┌────────────┐
│   Elite    │
└────────────┘
```

1-column stack (all same width)

### Implementation
```jsx
<div className="
  grid 
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-4 sm:gap-6 lg:gap-8
  items-center lg:items-stretch
">
  {pricingTiers.map((tier, index) => (
    <div 
      key={tier.id}
      className={tier.recommended ? 'lg:scale-110 -my-8' : ''}
    >
      <PricingCard tier={tier} />
    </div>
  ))}
</div>
```

---

## Feature Comparison Table

### Purpose
Allow detailed comparison of all tiers in one view.

### Structure
```
┌────────────────────────────────────────┐
│ Feature        │ Basic  │ Standard │ Elite │
├────────────────────────────────────────┤
│ Workouts       │   5    │   20    │  ∞   │
│ Coaching       │    ✗   │   ✓     │  ✓✓  │
│ Analytics      │   ✓    │   ✓✓    │  ✓✓✓ │
└────────────────────────────────────────┘
```

### Specifications
- **Header Row**: Background #2a2a2a, bold text
- **Data Rows**: Alternating #1a1a1a / transparent backgrounds
- **Checkmarks**: Neon green (#00FF2E)
- **Borders**: 1px solid #2a2a2a

### HTML/Tailwind
```jsx
<table className="w-full">
  <thead>
    <tr className="bg-[#2a2a2a]">
      <th className="px-6 py-4 text-left text-sm font-semibold text-white">
        Feature
      </th>
      <th className="px-6 py-4 text-center text-sm font-semibold text-white">
        Basic
      </th>
      <th className="px-6 py-4 text-center text-sm font-semibold text-white">
        Standard
      </th>
      <th className="px-6 py-4 text-center text-sm font-semibold text-white">
        Elite
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-t border-[#2a2a2a]">
      <td className="px-6 py-4 text-sm text-gray-300">Unlimited Workouts</td>
      <td className="px-6 py-4 text-center">
        <Check className="mx-auto text-[#00FF2E]" size={20} />
      </td>
      <td className="px-6 py-4 text-center">
        <Check className="mx-auto text-[#00FF2E]" size={20} />
      </td>
      <td className="px-6 py-4 text-center">
        <Check className="mx-auto text-[#00FF2E]" size={20} />
      </td>
    </tr>
  </tbody>
</table>
```

---

## FAQ Section

### Purpose
Answer common pricing questions and reduce friction.

### Structure
```
Q: Can I change plans anytime?
A: Yes, upgrade or downgrade your plan at any time. Changes take effect 
   on your next billing cycle.
```

### Specifications
- **Question**: Bold, clickable
- **Answer**: Gray text, collapse/expand on mobile
- **Spacing**: 16px between Q&A pairs, 8px internal

### Implementation
```jsx
<details className="mb-4 border border-[#2a2a2a] rounded-md p-4">
  <summary className="cursor-pointer font-semibold text-white">
    Can I change plans anytime?
  </summary>
  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
    Yes, upgrade or downgrade at any time. Changes take effect on your 
    next billing cycle.
  </p>
</details>
```

---

## Pricing Section Layout

### Full Page Layout
```
┌─────────────────────────────────────────┐
│                                         │
│  PRICING SECTION (Full viewport)        │
│  [Top padding: 64px]                    │
│                                         │
│  "Choose Your Plan"      [Headline]     │
│  "Select the perfect..." [Description] │
│                                         │
│  [48px gap]                             │
│                                         │
│  [Pricing Cards Grid]                   │
│                                         │
│  [64px gap]                             │
│                                         │
│  "Compare All Features" [Table]         │
│                                         │
│  [64px gap]                             │
│                                         │
│  "Frequently Asked Questions" [FAQ]     │
│                                         │
│  [Bottom padding: 64px]                 │
│                                         │
└─────────────────────────────────────────┘
```

### Implementation
```jsx
<section className="py-16 lg:py-24 px-4 lg:px-8 bg-[#0a0a0a]">
  <div className="max-w-6xl mx-auto">
    {/* Headline */}
    <div className="text-center mb-12">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
        Choose Your Plan
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Select the perfect plan for your fitness journey
      </p>
    </div>
    
    {/* Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {/* Cards */}
    </div>
    
    {/* Feature Table */}
    <div className="mb-16">
      {/* Table */}
    </div>
    
    {/* FAQ */}
    <div>
      {/* FAQ Items */}
    </div>
  </div>
</section>
```

---

## Best Practices

1. **Clear Hierarchy**: One recommended tier stands out
2. **Simple Pricing**: Avoid complex calculations (display $/month clearly)
3. **Feature Clarity**: Use checkmarks/icons consistently
4. **Trust Signals**: Add "30-day money back guarantee" if applicable
5. **Responsive**: Cards scale gracefully on mobile
6. **Loading States**: Show skeleton while pricing loads
7. **Billing Toggle**: Annual/monthly toggle with savings badge
8. **CTA Consistency**: All CTAs use primary button style

---

## Pricing Variations

### Annual Discount Badge
```jsx
<div className="
  absolute -top-3 -right-3
  bg-[#FF4444] text-white
  px-3 py-1
  text-xs font-bold rounded-full
">
  Save 20%
</div>
```

### "Most Popular" Badge Alternative
```jsx
// If recommended badge feels too promotional:
<div className="text-xs text-[#00FF2E] font-semibold tracking-wide">
  MOST POPULAR
</div>
```

### Free Trial Callout
```jsx
<div className="text-xs text-[#00FF2E] mt-3">
  ✓ 14-day free trial • Cancel anytime
</div>
```

---

## Accessibility

- Pricing clearly displayed (not hidden behind toggles)
- Feature list readable and scannable
- Color not sole differentiator (use badge + border)
- Touch targets min 44px
- Keyboard navigable comparison table
- Screen reader support for all content
