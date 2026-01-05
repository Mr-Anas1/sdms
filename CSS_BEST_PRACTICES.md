# CSS Development Best Practices Guide

## File Structure

```
src/
├── styles/
│   ├── globals.css       (Tailwind imports + shared.css import)
│   ├── shared.css        (All common variables, fonts, animations)
│   └── page.module.css   (Page-specific styles)
│
└── app/
    ├── page.module.css
    ├── Components/
    │   ├── Component/
    │   │   └── Component.css  (Component-specific styles)
    │   └── ...
    └── ...
```

## Import Guidelines

### ✅ DO: Always import shared.css in component CSS files

```css
/* At the top of your component CSS file */
@import '../../styles/shared.css';

/* Then add component-specific styles */
.myComponent {
  background-color: var(--background-light);
  font-family: 'Syne', serif;
  animation: riseUp 1s;
}
```

### ❌ DON'T: Don't repeat shared styles

```css
/* ❌ BAD - Don't duplicate variables */
:root {
  --background-light: #ffffff;
}

/* ❌ BAD - Don't import fonts again */
@font-face {
  font-family: 'Syne';
  src: url('/fonts/Syne.ttf') format('truetype');
}

/* ❌ BAD - Don't redefine animations */
@keyframes riseUp {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

## Using Shared Variables

All these variables are available in your component CSS:

### Color Variables
```css
.element {
  background-color: var(--background-light);
  color: var(--foreground-light);
  border-color: var(--highlight-color);
}
```

### Hover State Variables
```css
.button:hover {
  background-color: var(--hover-bg);
  color: var(--hover-text);
}
```

### Scroll Variables
```css
/* Used automatically in scrollbars */
--scroll-thumb: rgba(128, 128, 128, 0.545);
--scroll-thumb-hover: rgba(62, 62, 62, 0.762);
--scroll-track: #ffffff;
```

## Using Shared Animations

Available animations (no need to redefine):

```css
.element {
  animation: riseUp 1s;        /* Fade in + move up */
  animation: slideLeft 0.5s;   /* Slide from left */
  animation: slideRight 0.5s;  /* Slide from right */
  animation: slideInLeft 1s;   /* Slide + rotate from left */
  animation: slideInRight 1s;  /* Slide + rotate from right */
  animation: glow-effect 2s infinite;  /* Text glow effect */
  animation: fade-in 0.5s;     /* Simple fade */
  animation: zoom-in 0.5s;     /* Scale up */
  animation: rotate360 2s;     /* Full rotation */
  animation: scrollLeft 20s linear infinite;  /* Horizontal scroll */
  animation: scrollRight 20s linear infinite; /* Horizontal scroll right */
  animation: spin 3s linear infinite;  /* Continuous spin */
}
```

## Using Shared Fonts

All fonts are pre-imported and ready to use:

```css
.element {
  font-family: 'Dirtyline36Daysoftype2022', sans-serif;
  font-family: 'Syne', serif;
  font-family: 'Charrington', serif;
  font-family: 'Inconsolata', monospace;
}
```

## Dark Mode Support

The app automatically supports dark mode. Use CSS variables instead of hardcoding colors:

```css
/* ✅ GOOD - Works in both light and dark modes */
.element {
  background-color: var(--background-light);
  color: var(--foreground-light);
}

/* ❌ BAD - Hardcoded colors don't adapt to dark mode */
.element {
  background-color: #ffffff;
  color: #171717;
}
```

## Component-Specific Styles Only

Your component CSS file should ONLY contain:

1. **Component-specific classes** that don't exist elsewhere
2. **Component-specific animations** (if needed)
3. **Responsive breakpoints** for your component
4. **Hover/focus states** specific to your component

## Adding New Shared Styles

If you need a new shared style that multiple components will use:

1. **Add it to `src/styles/shared.css`**
2. **Make sure it's documented** in this file
3. **Update the summary** if it's a new feature
4. **Test across all components** to ensure consistency

## Responsive Design

Use existing responsive patterns:

```css
@media (max-width: 768px) {
  .element {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .element {
    font-size: 1rem;
  }
}
```

## Common Breakpoints

- **1200px and below:** Tablets
- **992px and below:** Small tablets
- **768px and below:** Mobile devices
- **480px and below:** Small phones

## CSS Organization

Within your component CSS file, organize in this order:

```css
/* 1. Import shared styles */
@import '../../styles/shared.css';

/* 2. Component container/main class */
.myComponent {
  /* ... */
}

/* 3. Component sub-elements */
.myComponent-header {
  /* ... */
}

.myComponent-body {
  /* ... */
}

/* 4. Hover/active states */
.myComponent:hover {
  /* ... */
}

/* 5. Dark mode overrides (if needed) */
.dark-mode .myComponent {
  /* ... */
}

/* 6. Responsive breakpoints */
@media (max-width: 768px) {
  .myComponent {
    /* ... */
  }
}
```

## Performance Tips

✅ **Use CSS variables** for colors - easier to update globally
✅ **Reuse animations** from shared.css - don't recreate them
✅ **Minimize component-specific CSS** - rely on shared styles
✅ **Group related styles** - keep selector organization clean
✅ **Use shorthand properties** - `margin` instead of `margin-top`, `margin-right`, etc.

## Quick Reference

| What | Where | How |
|------|-------|-----|
| Colors | `shared.css` | `var(--background-light)` |
| Fonts | `shared.css` | `font-family: 'Syne', serif` |
| Animations | `shared.css` | `animation: riseUp 1s` |
| Dark Mode | `shared.css` | `.dark-mode` class |
| Component Styles | Component CSS | `@import '../../styles/shared.css'` |

---

**Remember:** Keep shared styles in `shared.css`, component-specific styles in component CSS files. This keeps the codebase clean, maintainable, and DRY! 🎯
