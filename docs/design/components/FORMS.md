# Form Components

## Overview

Forms are critical for user engagement in SpaceFit. They must be accessible, visually consistent, and provide clear feedback. All form elements follow the design system's dark theme with neon green accents.

---

## Input Field

### Standard Text Input

**Specifications**:
- **Background**: #0a0a0a
- **Border**: 1px solid #2a2a2a
- **Border Radius**: 6px
- **Padding**: 12px 16px
- **Font Size**: 1rem
- **Height**: 44px (including padding)
- **Text Color**: #ffffff
- **Placeholder**: #666666

**States**:

| State | Border | Background | Shadow |
|-------|--------|-----------|--------|
| Default | #2a2a2a | #0a0a0a | none |
| Hover | #3a3a3a | #0a0a0a | none |
| Focus | #00FF2E | #0a0a0a | 0 0 12px rgba(0,255,46,0.2) |
| Filled | #2a2a2a | #0a0a0a | none |
| Error | #FF4444 | #0a0a0a | 0 0 12px rgba(255,68,68,0.2) |
| Disabled | #1a1a1a | #0a0a0a | none |

### Animation
```css
transition: all 0.2s ease-out;

&:focus {
  border-color: #00FF2E;
  box-shadow: 0 0 12px rgba(0, 255, 46, 0.2);
  outline: none;
}

&:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### HTML/Tailwind
```jsx
<input 
  type="text"
  placeholder="Enter your email"
  className="
    w-full h-11
    bg-[#0a0a0a] text-white
    border border-[#2a2a2a]
    rounded-md px-4 py-3
    placeholder:text-gray-600
    hover:border-[#3a3a3a]
    focus:border-[#00FF2E] focus:shadow-[0_0_12px_rgba(0,255,46,0.2)] focus:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-200
  "
/>
```

---

## Text Area

### Specifications
- **Background**: #0a0a0a
- **Border**: 1px solid #2a2a2a
- **Border Radius**: 6px
- **Padding**: 12px 16px
- **Font Size**: 1rem
- **Min Height**: 120px
- **Font Family**: Body font
- **Resize**: Vertical only

### HTML/Tailwind
```jsx
<textarea
  placeholder="Enter your message"
  rows={6}
  className="
    w-full
    bg-[#0a0a0a] text-white
    border border-[#2a2a2a]
    rounded-md px-4 py-3
    placeholder:text-gray-600
    focus:border-[#00FF2E] focus:shadow-[0_0_12px_rgba(0,255,46,0.2)] focus:outline-none
    resize-y
    transition-all duration-200
  "
/>
```

---

## Form Label

### Specifications
- **Font Size**: 0.875rem (14px)
- **Font Weight**: 500
- **Color**: #ffffff
- **Margin Bottom**: 8px
- **Display**: Block

### Required Indicator
- **Character**: "*" (asterisk)
- **Color**: #FF4444 (error red)
- **Placement**: After label text
- **Spacing**: 4px margin-left

### HTML/Tailwind
```jsx
<label className="block text-sm font-medium text-white mb-2">
  Email Address
  <span className="text-red-500 ml-1">*</span>
</label>
<input type="email" className="w-full ..." />
```

---

## Checkbox

### Specifications
- **Size**: 18px × 18px
- **Border**: 2px solid #2a2a2a
- **Border Radius**: 4px
- **Background**: Transparent (unchecked), #00FF2E (checked)
- **Check Mark**: White, 2px stroke

**States**:

| State | Border | Background | Check Mark |
|-------|--------|-----------|-----------|
| Unchecked | #2a2a2a | transparent | hidden |
| Hover | #3a3a3a | transparent | hidden |
| Checked | #00FF2E | #00FF2E | white |
| Focus | #00FF2E | transparent | hidden |
| Disabled | #1a1a1a | transparent | gray |

### HTML/Tailwind
```jsx
<div className="flex items-center gap-3">
  <input
    type="checkbox"
    id="terms"
    className="
      w-[18px] h-[18px]
      border-2 border-[#2a2a2a]
      rounded
      bg-transparent
      checked:bg-[#00FF2E] checked:border-[#00FF2E]
      cursor-pointer
      transition-colors duration-200
      accent-[#00FF2E]
    "
  />
  <label htmlFor="terms" className="text-sm text-gray-300 cursor-pointer">
    I agree to the Terms of Service
  </label>
</div>
```

---

## Radio Button

### Specifications
- **Size**: 18px × 18px (outer circle)
- **Inner Circle**: 8px diameter, appears when selected
- **Border**: 2px solid #2a2a2a
- **Background**: Transparent
- **Inner Circle Color**: #00FF2E

**States**: Same as checkbox

### HTML/Tailwind
```jsx
<div className="space-y-3">
  <div className="flex items-center gap-3">
    <input
      type="radio"
      id="option1"
      name="tier"
      value="basic"
      className="w-[18px] h-[18px] accent-[#00FF2E] cursor-pointer"
    />
    <label htmlFor="option1" className="text-sm text-gray-300 cursor-pointer">
      Basic Plan
    </label>
  </div>
</div>
```

---

## Select Dropdown

### Specifications
- **Background**: #0a0a0a
- **Border**: 1px solid #2a2a2a
- **Border Radius**: 6px
- **Padding**: 12px 16px
- **Text Color**: #ffffff
- **Height**: 44px
- **Arrow Icon**: #a0a0a0

### HTML/Tailwind
```jsx
<select className="
  w-full h-11
  bg-[#0a0a0a] text-white
  border border-[#2a2a2a]
  rounded-md px-4 py-3
  focus:border-[#00FF2E] focus:outline-none
  cursor-pointer
  appearance-none
  bg-right bg-no-repeat
  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'...%3E\")
  transition-all duration-200
">
  <option value="">Select an option</option>
  <option value="1">Option 1</option>
</select>
```

---

## Form Group (Label + Input + Help Text)

### Structure
```
┌─────────────────────────┐
│ Label              [*]  │
│                         │
│ [Input field]           │
│                         │
│ ✓ Help text             │
│ ✗ Error message         │
└─────────────────────────┘
```

### HTML/Tailwind
```jsx
<div className="mb-6">
  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
    Email Address
    <span className="text-red-500 ml-1">*</span>
  </label>
  
  <input
    id="email"
    type="email"
    className="w-full ..."
    aria-describedby="email-help"
  />
  
  <p id="email-help" className="text-xs text-gray-400 mt-1">
    We'll never share your email
  </p>
</div>
```

---

## Error Handling

### Error State
- **Border Color**: #FF4444
- **Shadow**: 0 0 12px rgba(255, 68, 68, 0.2)
- **Error Icon**: Red X, positioned right of field
- **Error Message**: Below field, 0.875rem, gray-400 → red for error text

### Error Message
```jsx
<div className="mt-2 flex items-center gap-2 text-red-500">
  <AlertCircle size={16} />
  <span className="text-xs">Password must be at least 8 characters</span>
</div>
```

### Success State
- **Border Color**: #00FF2E
- **Icon**: Green checkmark
- **Message**: Confirmation text

---

## Form Layout

### Single Column
```jsx
<form className="max-w-md space-y-6">
  {/* Form groups */}
</form>
```

### Two Column (Desktop)
```jsx
<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label>First Name</label>
    <input type="text" />
  </div>
  <div>
    <label>Last Name</label>
    <input type="text" />
  </div>
</form>
```

### Responsive
- **Mobile**: Single column, full-width
- **Tablet**: 2 columns max
- **Desktop**: 2-3 columns based on layout

---

## Form Validation

### Inline Validation
Validate as user types (except password strength, validate on blur).

```jsx
const [email, setEmail] = useState('');
const [error, setError] = useState('');

const handleChange = (e) => {
  const value = e.target.value;
  setEmail(value);
  
  if (value && !isValidEmail(value)) {
    setError('Please enter a valid email');
  } else {
    setError('');
  }
};
```

### Submit-time Validation
Display all errors at once on form submission.

---

## Loading & Disabled States

### Loading Form
- **Opacity**: 60%
- **Pointer Events**: None
- **Cursor**: Wait
- **Submit Button**: Loading state with spinner

### Disabled Input
- **Opacity**: 50%
- **Background**: #0a0a0a (no change)
- **Cursor**: not-allowed
- **Border**: #1a1a1a

---

## Accessibility

### ARIA Labels
- All inputs must have associated `<label>` tags
- Use `aria-describedby` for help text
- Use `aria-invalid="true"` and `aria-required="true"` appropriately

### Keyboard Navigation
- Tab order must be logical (top-to-bottom, left-to-right)
- All form controls must be keyboard accessible
- Focus indicators must be visible (handled by focus styles)

### Screen Readers
- Error messages announced to screen readers
- Required fields marked with `*` and `aria-required`
- Use `aria-label` for icon-only inputs

### HTML Example
```jsx
<form>
  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2">
      Email
      <span aria-label="required">*</span>
    </label>
    <input
      id="email"
      type="email"
      required
      aria-required="true"
      aria-describedby="email-error"
      className="w-full ..."
    />
    <p id="email-error" role="alert" className="text-red-500 mt-1">
      {errors.email}
    </p>
  </div>
</form>
```

---

## Form Best Practices

1. **Clear Labels**: Always present, never use placeholder as label
2. **Helpful Hints**: Add context for complex fields
3. **Immediate Feedback**: Show validation errors clearly
4. **Logical Flow**: Group related fields together
5. **One Action**: One primary submit button per form
6. **Mobile-Friendly**: Touch targets min 44px
7. **Progressive Disclosure**: Hide advanced options, show only when needed
8. **Default Values**: Pre-fill when possible (e.g., user's location)
