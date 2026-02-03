# Hidden Sections Tracker

This document tracks all temporarily hidden sections on the Tin Cup Challenge website. When ready to re-enable a section, remove the corresponding CSS rule from `src/assets/css/tin-cup-custom.css`.

---

## Currently Hidden

### 1. Hero Section Buttons
- **Location:** Homepage hero/main slider
- **Elements:** "Give Now" and "How It Works" buttons
- **CSS Selector:** `.main-slider__btn-box`
- **File:** `src/index.njk` (lines 25-28)
- **Reason:** Temporarily hidden
- **To restore:** Remove the `.main-slider__btn-box { display: none !important; }` rule

### 2. Countdown to Event Day Section
- **Location:** Homepage, below Give Now section
- **Elements:** Entire countdown section with timer, image, and buttons
- **CSS Selector:** `.event-countdown`
- **File:** `src/index.njk` (lines 58-106)
- **Reason:** Temporarily hidden
- **To restore:** Remove the `.event-countdown { display: none !important; }` rule

### 3. Get Involved Section
- **Location:** Homepage, below Community Energy section
- **Elements:** Three card layout with "Give", "Register to Run", and "Become a Challenger" cards
- **CSS Selector:** `.feature-three`
- **File:** `src/index.njk` (lines 345-396)
- **Reason:** Temporarily hidden
- **To restore:** Remove the `.feature-three { display: none !important; }` rule

### 4. Nonprofit Category Filter Buttons
- **Location:** Nonprofits page, above the nonprofit grid
- **Elements:** Category filter buttons (All, Animal Rescue, Arts & Culture, etc.)
- **CSS Selector:** `.nonprofit-filter`
- **File:** `src/nonprofits.njk`
- **Reason:** Replaced with search bar and dropdown filters
- **To restore:** Remove the `.nonprofit-filter { display: none !important; }` rule and hide/remove the new `.nonprofit-search-filter` section

---

## CSS Location

All hidden section styles are grouped together at the end of `src/assets/css/tin-cup-custom.css` under the comment:

```css
/* ==========================================================================
   TEMPORARILY HIDDEN SECTIONS
   See /src/HIDDEN-SECTIONS.md for full documentation
   ========================================================================== */
```

---

## Previously Hidden (Now Restored)

*None yet*
