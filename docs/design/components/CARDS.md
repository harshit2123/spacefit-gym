# Card Components

## Overview

Cards are container elements that group related content and actions. SpaceFit uses cards for:
- Feature showcases
- Pricing tiers
- Testimonials
- Statistics displays
- Content previews
- Service offerings

---

## Base Card

### Structure
```
┌─────────────────────────────────┐
│  [Icon/Image]    TITLE          │
│                                 │
│  Description text               │
│  Secondary information          │
│                                 │
│  [CTA Button]                   │
└─────────────────────────────────┘
```

### Specifications
- **Background**: #1a1a1a
- **Border**: 1px solid #2a2a2a
- **Border Radius**: 8px
- **Padding**: 24px
- **Shadow**: 0 4px 12px rgba(0, 0, 0, 0.3)
- **Min Height**: 200px
- **Max Width**: 360px (flexible)

### States
| State | Border | Shadow | Background |
|-------|--------|--------|-----------|
| Default | #2a2a2a | md | #1a1a1a |
| Hover | #3a3a3a | lg | #1a1a1a |
| Active/Selected | #00FF2E | neon-md | #1a1a1a |
| Disabled | #1a1a1a | none | #1a1a1a |

### Animation
```css
transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

&:hover {
  border-color: #3a3a3a;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  transform: translateY(-4px);
}

&:active,
&.active {
  border-color: #00FF2E;
  box-shadow: 0 0 20px rgba(0, 255, 46, 0.3);
}
```

### HTML/Tailwind
```jsx
<div className="
  bg-[#1a1a1a] border border-[#2a2a2a]
  rounded-lg p-6
  shadow-md
  hover:border-[#3a3a3a] hover:shadow-lg hover:-translate-y-1
  transition-all duration-300
  group
">
  <div className="text-3xl mb-4">🏋️</div>
  <h3 className="text-xl font-semibold mb-2">Strength Training</h3>
  <p className="text-gray-400 mb-6">
    Progressive overload protocols for muscle development
  </p>
  <button className="text-[#00FF2E] hover:text-white transition-colors">
    Learn More →
  </button>
</div>
```

---

## Pricing Card

### Purpose
Display service tiers with pricing, features, and CTA.

### Structure
```
┌──────────────────────────────┐
│  PLAN NAME                   │
│  $XX/month                   │
│  ─────────────────────────   │
│  ✓ Feature 1                 │
│  ✓ Feature 2                 │
│  ✓ Feature 3                 │
│  [Get Started] Button        │
└──────────────────────────────┘
```

### Variants

#### Standard Tier
- **Styling**: Default card styling
- **Button**: Secondary (outline)
- **Badge**: None or "Popular"

#### Highlighted Tier (Recommended)
- **Border**: 2px solid #00FF2E
- **Button**: Primary (neon)
- **Badge**: "RECOMMENDED" label with neon background
- **Transform**: Slightly larger scale or different border style

**Specs**:
```jsx
<div className="
  border-2 border-[#00FF2E]
  shadow-[0_0_20px_rgba(0,255,46,0.3)]
  scale-105
  relative
">
  <div className="
    absolute -top-3 left-6
    bg-[#00FF2E] text-[#0a0a0a]
    px-3 py-1 text-xs font-bold rounded
  ">
    RECOMMENDED
  </div>
  {/* Card content */}
</div>
```

### Pricing Card Components

#### Header
```jsx
<div className="mb-6">
  <h3 className="text-2xl font-bold mb-2">Elite</h3>
  <div className="flex items-baseline gap-1">
    <span className="text-4xl font-bold text-[#00FF2E]">$45</span>
    <span className="text-gray-400">/month</span>
  </div>
  <p className="text-sm text-gray-500 mt-2">Perfect for serious athletes</p>
</div>
```

#### Feature List
```jsx
<ul className="space-y-3 mb-8">
  <li className="flex items-start gap-3 text-gray-300">
    <span className="text-[#00FF2E] font-bold mt-0.5">✓</span>
    <span>Unlimited personalized training plans</span>
  </li>
  <li className="flex items-start gap-3 text-gray-300">
    <span className="text-[#00FF2E] font-bold mt-0.5">✓</span>
    <span>Priority 1-on-1 coaching</span>
  </li>
</ul>
```

#### CTA
Primary button for highlighted tier, secondary for standard tiers.

---

## Feature Card (Icon + Text)

### Purpose
Showcase individual features or service highlights.

### Structure
```
┌──────────────────────┐
│   [Large Icon]       │
│                      │
│   Feature Title      │
│   Description        │
└──────────────────────┘
```

### Specifications
- **Size**: 280px × 300px
- **Icon Size**: 64px
- **Icon Color**: #00FF2E (neon green)
- **Text Alignment**: Center
- **Padding**: 32px
- **Gap Between Elements**: 16px

### HTML/Tailwind
```jsx
<div className="
  bg-[#1a1a1a] border border-[#2a2a2a]
  rounded-lg p-8
  flex flex-col items-center text-center
  hover:border-[#3a3a3a] transition-all
">
  <div className="text-[#00FF2E] mb-4">
    <ActivitySquare size={64} strokeWidth={1.5} />
  </div>
  <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
  <p className="text-gray-400 text-sm leading-relaxed">
    Track every workout with detailed metrics and progress insights
  </p>
</div>
```

---

## Stat Card

### Purpose
Display key metrics and achievements.

### Structure
```
┌──────────────┐
│  12+         │
│  Platforms   │
└──────────────┘
```

### Specifications
- **Large Stat**: 3.5rem font, bold
- **Label**: 0.875rem, gray
- **Spacing**: 8px between stat and label
- **Background**: #1a1a1a (optional overlay on images)

### HTML/Tailwind
```jsx
<div className="text-center">
  <div className="text-5xl font-bold text-[#00FF2E] mb-2">12+</div>
  <p className="text-gray-400 text-sm font-medium">Training Platforms</p>
</div>
```

---

## Media Card (Image + Overlay)

### Purpose
Cards with background images, testimonials, case studies.

### Structure
```
┌────────────────────┐
│  [Image BG]        │
│                    │
│  [Dark Overlay]    │
│  Text Content      │
│  [CTA Link]        │
└────────────────────┘
```

### Specifications
- **Image**: Full background, cover mode
- **Overlay**: linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.9) 100%)
- **Content Position**: Absolute bottom, padding 24px
- **Min Height**: 280px

### HTML/Tailwind
```jsx
<div className="
  relative overflow-hidden
  rounded-lg h-80
  group
">
  <img 
    src="athlete.jpg" 
    alt="Athlete"
    className="
      w-full h-full object-cover
      group-hover:scale-105 transition-transform duration-300
    "
  />
  <div className="
    absolute inset-0
    bg-gradient-to-b from-transparent to-black/90
    flex flex-col justify-end p-6
  ">
    <h3 className="text-xl font-bold mb-2">Breaking Limits</h3>
    <p className="text-gray-300 mb-4">Sarah's 90-day transformation</p>
    <a href="#" className="text-[#00FF2E] hover:text-white transition-colors">
      Read Story →
    </a>
  </div>
</div>
```

---

## Empty State Card

### Purpose
Show helpful message when no content is available.

### Specifications
- **Icon**: Larger (80px), muted gray (#666)
- **Title**: Calm, helpful tone
- **Subtitle**: Suggest next action
- **CTA**: Secondary button

### HTML/Tailwind
```jsx
<div className="
  bg-[#1a1a1a] border-2 border-dashed border-[#2a2a2a]
  rounded-lg p-12 text-center
">
  <div className="text-6xl text-gray-600 mb-4">📋</div>
  <h3 className="text-xl font-semibold mb-2">No Workouts Yet</h3>
  <p className="text-gray-400 mb-6">Start your fitness journey today</p>
  <button className="text-[#00FF2E] hover:text-white transition-colors">
    Create First Workout
  </button>
</div>
```

---

## Loading Card (Skeleton)

### Purpose
Placeholder while content loads.

### Specifications
- **Shimmer Animation**: Subtle gradient sweep left-to-right
- **Duration**: 1.5s–2s infinite
- **Elements**: Placeholder bars for image, title, description, button

### HTML/Tailwind
```jsx
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 animate-pulse">
  <div className="h-32 bg-[#2a2a2a] rounded mb-4"></div>
  <div className="h-6 bg-[#2a2a2a] rounded w-3/4 mb-3"></div>
  <div className="h-4 bg-[#2a2a2a] rounded w-full mb-2"></div>
  <div className="h-4 bg-[#2a2a2a] rounded w-5/6"></div>
</div>
```

---

## Card Grid Layout

### Desktop (1280px+)
- **3-column grid**: 360px cards, 24px gaps

### Tablet (768px–1279px)
- **2-column grid**: 340px cards, 20px gaps

### Mobile (<768px)
- **1-column**: Full-width minus padding, 16px gap

### HTML/Tailwind
```jsx
<div className="
  grid 
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-4 sm:gap-5 lg:gap-6
  p-4 sm:p-6 lg:p-8
">
  {/* Cards */}
</div>
```

---

## Best Practices

1. **Consistent Height**: Cards in same grid should have consistent height
2. **Readable Text**: Ensure 4.5:1 contrast ratio on text
3. **Touch Targets**: Interactive elements min 44px height
4. **Spacing**: Consistent 24px padding on all cards
5. **Hover Effects**: Subtle border/shadow change, avoid jarring transforms
6. **Border Clarity**: 1px border provides clear card boundaries
7. **Shadow Hierarchy**: Use md shadow; increase to lg on hover only
