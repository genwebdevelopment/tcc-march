# Oxpens Theme - Complete Dependencies Reference

**Created:** 2025-11-17
**Homepage 3 Base:** `/Users/adam/Desktop/CODING/Tin-Cup-Challenge/tin-cup-design/oxpins-theme/oxpins-main-html/index3.html`

---

## Overview

Homepage 3 uses 48 external files (20 CSS + 28 JS) plus Google Fonts loaded via CDN. This document details every dependency, its purpose, and usage in Homepage 3.

---

## Google Fonts (CDN)

### Font Families

```html
<!-- Nunito (Primary Font) -->
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<!-- Manrope (Secondary Font) -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Caveat (Accent/Handwritten Font) -->
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Usage:**
- **Nunito:** Body text, headings, navigation
- **Manrope:** Alternative text, buttons, special sections
- **Caveat:** Handwritten accents, decorative text

**Loaded Weights:**
- Nunito: 9 weights (200-900, regular + italic)
- Manrope: 7 weights (200-800)
- Caveat: 4 weights (400-700)

---

## CSS Dependencies (20 files)

### 1. Bootstrap Framework

**File:** `assets/vendors/bootstrap/css/bootstrap.min.css`
**Version:** 5.x
**Size:** ~200KB (minified)
**Load Order:** 1st

**Purpose:**
- Responsive grid system (12-column)
- Utility classes (spacing, display, flex, etc.)
- Component styles (buttons, forms, cards, etc.)
- Breakpoint system

**Used For:**
- Layout structure
- Container/row/col grid
- Responsive utilities
- Button styling
- Form components

**Homepage 3 Usage:** ✅ Critical
- Grid layout throughout all sections
- Utility classes for spacing and alignment
- Button components
- Form styling

---

### 2. Animate.css

**File:** `assets/vendors/animate/animate.min.css`
**Version:** Latest
**Size:** ~70KB
**Load Order:** 2nd

**Purpose:**
- CSS3 animation library
- Pre-built animation classes
- Cross-browser animations

**Animation Types:**
- Fade in/out
- Slide in/out
- Zoom in/out
- Bounce effects
- Attention seekers

**Homepage 3 Usage:** ✅ Critical
- Used with WOW.js for scroll animations
- Fade-in effects on sections
- Slide-in animations for content

---

### 3. Custom Animate Extensions

**File:** `assets/vendors/animate/custom-animate.css`
**Size:** Small (~5KB)
**Load Order:** 3rd

**Purpose:**
- Custom animation extensions
- Theme-specific animation tweaks
- Additional animation utilities

**Homepage 3 Usage:** ✅ Required
- Enhances animate.css
- Custom timing and easing
- Theme-specific animations

---

### 4. Font Awesome

**File:** `assets/vendors/fontawesome/css/all.min.css`
**Version:** 5.x
**Size:** ~60KB + webfonts
**Load Order:** 4th

**Purpose:**
- Comprehensive icon library
- 1,500+ icons
- Multiple icon styles (solid, regular, brands)

**Icon Categories:**
- Interface icons
- Social media icons
- Arrow/navigation icons
- Business icons
- Charity/nonprofit icons

**Homepage 3 Usage:** ✅ Critical
- Navigation icons
- Social media icons
- Feature icons
- Button icons
- Footer icons

**Webfonts Required:**
- `webfonts/fa-solid-900.*` (5 files)
- `webfonts/fa-regular-400.*` (5 files)
- `webfonts/fa-brands-400.*` (5 files)

---

### 5. Jarallax

**File:** `assets/vendors/jarallax/jarallax.css`
**Size:** Small (~2KB)
**Load Order:** 5th

**Purpose:**
- Parallax scrolling effects
- Background image animations
- Smooth parallax transitions

**Homepage 3 Usage:** ✅ Used
- Parallax background effects
- Smooth scroll animations
- Background image positioning

---

### 6. Magnific Popup

**File:** `assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css`
**Size:** ~10KB
**Load Order:** 6th

**Purpose:**
- Responsive lightbox
- Image gallery popup
- Video popup
- Modal dialogs

**Features:**
- Responsive design
- Touch gestures
- Gallery navigation
- Zoom animations

**Homepage 3 Usage:** ✅ Critical
- Gallery section lightbox
- Image popup viewer
- Smooth zoom effects

---

### 7. noUiSlider

**Files:**
- `assets/vendors/nouislider/nouislider.min.css`
- `assets/vendors/nouislider/nouislider.pips.css`
**Load Order:** 7th, 8th

**Purpose:**
- Custom range sliders
- Price filters
- Donation amount selectors

**Homepage 3 Usage:** ⚠️ Minimal
- May be used for donation amount selection
- Price filtering (if shop enabled)

---

### 8. Odometer

**File:** `assets/vendors/odometer/odometer.min.css`
**Size:** ~5KB
**Load Order:** 9th

**Purpose:**
- Animated counter effects
- Number transitions
- Statistics animation

**Homepage 3 Usage:** ✅ Used
- Animated statistics counters
- Number incrementing effects
- Visual counting animations

---

### 9. Swiper

**File:** `assets/vendors/swiper/swiper.min.css`
**Version:** Latest
**Size:** ~20KB
**Load Order:** 10th

**Purpose:**
- Modern touch slider
- Mobile-friendly carousels
- Responsive slideshow

**Features:**
- Touch/swipe gestures
- Lazy loading
- Parallax effects
- Multiple slides per view
- Navigation/pagination
- Autoplay

**Homepage 3 Usage:** ✅ Critical
- Hero slider (3 slides)
- Brand logo carousel (6 items)
- Modern, performant sliders

---

### 10. Oxpins Custom Icons

**File:** `assets/vendors/oxpins-icons/style.css`
**Size:** ~15KB + fonts
**Load Order:** 11th

**Purpose:**
- Theme-specific icon font
- Custom charity/nonprofit icons
- Unique brand icons

**Homepage 3 Usage:** ✅ Critical
- Custom icons throughout site
- Theme-specific graphics
- Unique visual elements

**Font Files Required:**
- `fonts/oxpins.eot`
- `fonts/oxpins.svg`
- `fonts/oxpins.ttf`
- `fonts/oxpins.woff`
- `fonts/oxpins.woff2`

---

### 11. Tiny Slider

**File:** `assets/vendors/tiny-slider/tiny-slider.min.css`
**Size:** ~10KB
**Load Order:** 12th

**Purpose:**
- Lightweight slider alternative
- Vanilla JS slider (no jQuery)
- Minimal footprint

**Homepage 3 Usage:** ⚠️ Minimal
- Backup slider option
- Specific carousel implementations

---

### 12. Reey Font

**File:** `assets/vendors/reey-font/stylesheet.css`
**Size:** Small + font files
**Load Order:** 13th

**Purpose:**
- Custom decorative font
- Handwritten style
- Accent text

**Homepage 3 Usage:** ✅ Used
- Decorative headings
- Accent text elements
- Special typography

**Font Files Required:**
- `fonts/reey-regular-webfont.*` (5 files)

---

### 13. Owl Carousel

**Files:**
- `assets/vendors/owl-carousel/owl.carousel.min.css`
- `assets/vendors/owl-carousel/owl.theme.default.min.css`
**Size:** ~10KB combined
**Load Order:** 14th, 15th

**Purpose:**
- jQuery-based carousel
- Touch-enabled slider
- Responsive carousel

**Features:**
- Lazy loading
- Autoplay
- Navigation dots/arrows
- Responsive breakpoints
- Touch/drag support

**Homepage 3 Usage:** ✅ Critical
- Testimonial carousel (2 items visible)
- Responsive testimonial slider
- Smooth transitions

---

### 14. BX Slider

**File:** `assets/vendors/bxslider/jquery.bxslider.css`
**Size:** ~5KB
**Load Order:** 16th

**Purpose:**
- Legacy slider support
- jQuery carousel
- Backup slider option

**Homepage 3 Usage:** ⚠️ Minimal/None
- May not be actively used
- Legacy compatibility

---

### 15. Bootstrap Select

**File:** `assets/vendors/bootstrap-select/css/bootstrap-select.min.css`
**Size:** ~15KB
**Load Order:** 17th

**Purpose:**
- Enhanced dropdown selects
- Custom styled dropdowns
- Search in dropdowns
- Multiple selection

**Homepage 3 Usage:** ⚠️ Minimal
- Form select enhancement
- Donation form dropdowns

---

### 16. Vegas

**File:** `assets/vendors/vegas/vegas.min.css`
**Size:** ~5KB
**Load Order:** 18th

**Purpose:**
- Background slideshow
- Fullscreen backgrounds
- Image transitions

**Homepage 3 Usage:** ⚠️ Minimal/None
- May be used for background effects
- Not critical for main functionality

---

### 17. jQuery UI

**File:** `assets/vendors/jquery-ui/jquery-ui.css`
**Size:** ~30KB
**Load Order:** 19th

**Purpose:**
- jQuery UI components
- Datepicker
- Autocomplete
- Draggable/droppable
- Tabs, accordions

**Homepage 3 Usage:** ⚠️ Minimal
- Form components (datepicker)
- Interactive UI elements

---

### 18. Time Picker

**File:** `assets/vendors/timepicker/timePicker.css`
**Size:** Small (~3KB)
**Load Order:** 20th

**Purpose:**
- Time selection widget
- Form time inputs
- 12/24 hour formats

**Homepage 3 Usage:** ⚠️ Minimal
- Contact/event forms
- Time selection fields

---

### 19. Main Theme Stylesheet

**File:** `assets/css/oxpins.css`
**Size:** Large (~500KB+)
**Load Order:** 21st (LAST)

**Purpose:**
- Main theme styles
- All component styling
- Layout styles
- Custom CSS
- Responsive breakpoints
- Color scheme
- Typography
- Spacing system

**Homepage 3 Usage:** ✅ CRITICAL
- All theme styling
- Component customization
- Layout structure
- Brand colors
- Custom components

**Contains:**
- Global styles
- Header/navigation styles
- Slider styles
- Section styles
- Footer styles
- Responsive media queries
- Utility classes
- Animation styles
- All custom theme CSS

**Alternatives Available:**
- `oxpins-dark.css` (dark mode)
- `oxpins-rtl.css` (right-to-left)
- `oxpins-color-1.css` (color scheme 1)
- `oxpins-color-2.css` (color scheme 2)

---

## JavaScript Dependencies (28 files)

### 1. jQuery

**File:** `assets/vendors/jquery/jquery-3.6.0.min.js`
**Version:** 3.6.0
**Size:** ~85KB (minified)
**Load Order:** 1st (MUST LOAD FIRST)

**Purpose:**
- JavaScript library
- DOM manipulation
- Event handling
- AJAX requests
- Cross-browser compatibility

**Homepage 3 Usage:** ✅ CRITICAL
- Required by most other libraries
- Theme functionality
- Interactive components

**Note:** Must load before all other scripts that depend on it.

---

### 2. Bootstrap JS

**File:** `assets/vendors/bootstrap/js/bootstrap.bundle.min.js`
**Version:** 5.x (includes Popper.js)
**Size:** ~75KB
**Load Order:** 2nd

**Purpose:**
- Bootstrap component interactivity
- Dropdown menus
- Modal windows
- Tooltips
- Collapse/accordion
- Tabs

**Homepage 3 Usage:** ✅ Critical
- Navigation dropdowns
- Mobile menu toggle
- Interactive components

---

### 3. Jarallax

**File:** `assets/vendors/jarallax/jarallax.min.js`
**Size:** ~10KB
**Load Order:** 3rd

**Purpose:**
- Parallax scrolling effects
- Background animations
- Smooth parallax motion

**Homepage 3 Usage:** ✅ Used
- Parallax backgrounds
- Scroll-based animations

---

### 4. AjaxChimp

**File:** `assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js`
**Size:** Small (~3KB)
**Load Order:** 4th

**Purpose:**
- MailChimp newsletter integration
- AJAX form submission
- Email list signup

**Homepage 3 Usage:** ⚠️ Optional
- Newsletter subscription (if enabled)
- Email collection forms

**Configuration:** Requires MailChimp API key and list ID

---

### 5. jQuery Appear

**File:** `assets/vendors/jquery-appear/jquery.appear.min.js`
**Size:** Small (~2KB)
**Load Order:** 5th

**Purpose:**
- Detect element visibility
- Trigger events when elements appear in viewport
- Lazy initialization

**Homepage 3 Usage:** ✅ Used
- Trigger animations on scroll
- Load content when visible
- Initialize counters on appear

---

### 6. jQuery Circle Progress

**File:** `assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js`
**Size:** ~5KB
**Load Order:** 6th

**Purpose:**
- Circular progress bars
- Animated progress circles
- Skill/percentage displays

**Homepage 3 Usage:** ⚠️ Minimal
- May be used for statistics
- Circular progress indicators

---

### 7. Magnific Popup

**File:** `assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js`
**Size:** ~20KB
**Load Order:** 7th

**Purpose:**
- Lightbox functionality
- Image gallery popup
- Video embeds
- Modal dialogs

**Homepage 3 Usage:** ✅ Critical
- Gallery section lightbox
- Image zoom/popup
- Responsive image viewer

---

### 8. jQuery Validate

**File:** `assets/vendors/jquery-validate/jquery.validate.min.js`
**Size:** ~25KB
**Load Order:** 8th

**Purpose:**
- Form validation
- Client-side validation rules
- Error messages
- Custom validation

**Homepage 3 Usage:** ✅ Used
- Contact form validation
- Newsletter form validation
- Donation form validation

---

### 9. noUiSlider

**File:** `assets/vendors/nouislider/nouislider.min.js`
**Size:** ~30KB
**Load Order:** 9th

**Purpose:**
- Range slider functionality
- Touch-enabled sliders
- Price filters
- Amount selectors

**Homepage 3 Usage:** ⚠️ Minimal
- Donation amount selection
- Price range filtering

---

### 10. Odometer

**File:** `assets/vendors/odometer/odometer.min.js`
**Size:** ~10KB
**Load Order:** 10th

**Purpose:**
- Animated number counters
- Smooth number transitions
- Statistics animation

**Homepage 3 Usage:** ✅ Used
- Statistics counters
- Donation amounts
- Number animations

---

### 11. Swiper

**File:** `assets/vendors/swiper/swiper.min.js`
**Version:** Latest
**Size:** ~140KB
**Load Order:** 11th

**Purpose:**
- Modern touch slider
- Mobile carousel
- Responsive slideshow

**Features:**
- Touch/swipe gestures
- Lazy loading
- Parallax
- Navigation
- Pagination
- Autoplay
- Loop
- Multiple slides

**Homepage 3 Usage:** ✅ CRITICAL
- Hero slider (3 slides, fade effect, autoplay)
- Brand carousel (6 items, loop, autoplay)
- Primary slider solution

---

### 12. Tiny Slider

**File:** `assets/vendors/tiny-slider/tiny-slider.min.js`
**Size:** ~20KB
**Load Order:** 12th

**Purpose:**
- Lightweight slider
- Vanilla JS (no jQuery)
- Alternative slider option

**Homepage 3 Usage:** ⚠️ Minimal
- Backup slider implementation
- Alternative to Swiper

---

### 13. wNumb

**File:** `assets/vendors/wnumb/wNumb.min.js`
**Size:** Small (~2KB)
**Load Order:** 13th

**Purpose:**
- Number formatting
- Currency formatting
- Decimal handling
- Used with noUiSlider

**Homepage 3 Usage:** ⚠️ Minimal
- Format donation amounts
- Number display formatting

---

### 14. WOW.js

**File:** `assets/vendors/wow/wow.js`
**Version:** Latest
**Size:** ~5KB
**Load Order:** 14th

**Purpose:**
- Reveal animations on scroll
- Integrate with Animate.css
- Trigger animations when elements appear

**Homepage 3 Usage:** ✅ CRITICAL
- All scroll-triggered animations
- Fade-in effects
- Element reveal animations
- Used extensively throughout page

---

### 15. Isotope

**File:** `assets/vendors/isotope/isotope.js`
**Size:** ~30KB
**Load Order:** 15th

**Purpose:**
- Masonry grid layouts
- Filtering
- Sorting
- Dynamic layouts

**Homepage 3 Usage:** ⚠️ Minimal
- Gallery layout (potentially)
- Grid organization

---

### 16. Countdown

**File:** `assets/vendors/countdown/countdown.min.js`
**Size:** ~5KB
**Load Order:** 16th

**Purpose:**
- Countdown timers
- Event countdowns
- Campaign deadlines

**Homepage 3 Usage:** ✅ Used
- "Days left" counters on donation causes
- Event countdowns

---

### 17. Owl Carousel

**File:** `assets/vendors/owl-carousel/owl.carousel.min.js`
**Version:** 2.x
**Size:** ~45KB
**Load Order:** 17th

**Purpose:**
- jQuery carousel/slider
- Touch-enabled
- Responsive

**Homepage 3 Usage:** ✅ CRITICAL
- Testimonial carousel (2 items visible, loop, autoplay)
- Primary testimonial display

---

### 18. BX Slider

**File:** `assets/vendors/bxslider/jquery.bxslider.min.js`
**Size:** ~20KB
**Load Order:** 18th

**Purpose:**
- Legacy jQuery slider
- Backup slider option

**Homepage 3 Usage:** ⚠️ Minimal/None
- Legacy support
- May not be actively used

---

### 19. Bootstrap Select

**File:** `assets/vendors/bootstrap-select/js/bootstrap-select.min.js`
**Size:** ~40KB
**Load Order:** 19th

**Purpose:**
- Enhanced select dropdowns
- Search functionality
- Custom styling
- Multiple selection

**Homepage 3 Usage:** ⚠️ Minimal
- Form select enhancement
- Better dropdown UX

---

### 20. Vegas

**File:** `assets/vendors/vegas/vegas.min.js`
**Size:** ~15KB
**Load Order:** 20th

**Purpose:**
- Background slideshow
- Fullscreen backgrounds
- Image transitions

**Homepage 3 Usage:** ⚠️ Minimal/None
- Background effects (if used)
- Not critical

---

### 21. jQuery UI

**File:** `assets/vendors/jquery-ui/jquery-ui.js`
**Size:** ~250KB
**Load Order:** 21st

**Purpose:**
- UI widgets
- Datepicker
- Autocomplete
- Draggable/Droppable
- Tabs, Accordion

**Homepage 3 Usage:** ⚠️ Minimal
- Datepicker for forms
- UI enhancements

**Note:** Large file, may want to use custom build with only needed components

---

### 22. Time Picker

**File:** `assets/vendors/timepicker/timePicker.js`
**Size:** ~10KB
**Load Order:** 22nd

**Purpose:**
- Time selection widget
- Form time inputs

**Homepage 3 Usage:** ⚠️ Minimal
- Event/appointment forms
- Time selection

---

### 23. CircleType

**Files:**
- `assets/vendors/circleType/jquery.circleType.js`
- `assets/vendors/circleType/jquery.lettering.min.js`
**Size:** ~10KB combined
**Load Order:** 23rd, 24th

**Purpose:**
- Circular text effects
- Text on curved path
- Creative typography

**Homepage 3 Usage:** ⚠️ Minimal
- Decorative text effects
- Special typography

---

### 24. Main Theme Script

**File:** `assets/js/oxpins.js`
**Size:** Large (~1008 lines)
**Load Order:** 25th (LAST - Must load after all vendors)

**Purpose:**
- Initialize all plugins
- Theme-specific functionality
- Event handlers
- Custom scripts
- Component configuration

**Homepage 3 Usage:** ✅ CRITICAL
- Initializes all components
- Configures sliders
- Sets up animations
- Binds events
- Custom functionality

**Contains:**
- Plugin initialization
- Swiper configuration
- Owl Carousel setup
- WOW.js initialization
- Magnific Popup setup
- Mobile menu logic
- Search popup logic
- Scroll-to-top functionality
- Custom cursor logic
- Counter initialization
- Form handling
- All theme JavaScript

---

## Dependency Priority Levels

### ✅ CRITICAL (Must Have)

**CSS:**
1. Bootstrap CSS
2. Animate.css + Custom Animate
3. Font Awesome
4. Magnific Popup CSS
5. Swiper CSS
6. Oxpins Icons CSS
7. Owl Carousel CSS (both files)
8. **oxpins.css (MAIN STYLESHEET)**

**JavaScript:**
1. jQuery 3.6.0
2. Bootstrap JS
3. WOW.js
4. Swiper JS
5. Owl Carousel JS
6. Magnific Popup JS
7. **oxpins.js (MAIN SCRIPT)**

### ✅ RECOMMENDED (Enhanced Experience)

**CSS:**
- Jarallax CSS
- Odometer CSS
- Reey Font

**JavaScript:**
- Jarallax JS
- Odometer JS
- jQuery Appear
- jQuery Validate
- Countdown

### ⚠️ OPTIONAL (Feature-Dependent)

**CSS:**
- noUiSlider CSS
- Tiny Slider CSS
- Bootstrap Select CSS
- jQuery UI CSS
- Time Picker CSS

**JavaScript:**
- noUiSlider JS
- wNumb JS
- AjaxChimp JS
- Circle Progress JS
- Tiny Slider JS
- BX Slider JS
- Bootstrap Select JS
- Vegas JS
- jQuery UI JS
- Time Picker JS
- CircleType JS
- Lettering JS

### ❌ POTENTIALLY UNUSED

Based on Homepage 3 analysis:
- BX Slider (CSS + JS) - redundant slider
- Vegas (CSS + JS) - background slideshow not actively used
- Tiny Slider - redundant with Swiper and Owl
- CircleType/Lettering - special effects not prominent

**Note:** Before removing, audit actual usage in oxpins.js to ensure they're not initialized

---

## Load Order Summary

### CSS Load Order (Critical Order)

```html
<!-- 1. Framework -->
<link rel="stylesheet" href="assets/vendors/bootstrap/css/bootstrap.min.css" />

<!-- 2-3. Animations -->
<link rel="stylesheet" href="assets/vendors/animate/animate.min.css" />
<link rel="stylesheet" href="assets/vendors/animate/custom-animate.css" />

<!-- 4. Icons -->
<link rel="stylesheet" href="assets/vendors/fontawesome/css/all.min.css" />

<!-- 5-20. Component CSS (order doesn't matter much) -->
...

<!-- 21. MAIN THEME CSS (MUST BE LAST!) -->
<link rel="stylesheet" href="assets/css/oxpins.css" />
```

### JavaScript Load Order (STRICT Order)

```html
<!-- 1. JQUERY FIRST (REQUIRED BY OTHERS) -->
<script src="assets/vendors/jquery/jquery-3.6.0.min.js"></script>

<!-- 2. Bootstrap (depends on jQuery) -->
<script src="assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- 3-24. Vendor Scripts -->
...

<!-- 25. MAIN THEME SCRIPT LAST (depends on all vendors) -->
<script src="assets/js/oxpins.js"></script>
```

---

## External CDN Resources

### Google Fonts

**Loaded via CDN** (no local files needed):
- Nunito (9 weights)
- Manrope (7 weights)
- Caveat (4 weights)

**Benefits:**
- Cached across sites
- Faster loading
- Always up to date
- No local storage needed

**Alternative:** Can download and self-host for offline development or privacy

---

## Performance Optimization Opportunities

### CSS Optimization

1. **Combine CSS files** - Merge all vendor CSS into one file (production)
2. **Remove unused CSS** - Audit and remove unused rules
3. **Minify** - Ensure all CSS is minified
4. **Critical CSS** - Inline critical above-the-fold CSS
5. **Remove unused libraries** - Audit BX Slider, Vegas, etc.

### JavaScript Optimization

1. **Combine JS files** - Merge vendors (production)
2. **Async/Defer** - Load non-critical JS asynchronously
3. **Remove jQuery** - Consider vanilla JS alternatives (long-term)
4. **Remove unused libraries** - Remove redundant sliders
5. **Code splitting** - Load features on demand
6. **Minify** - Ensure all JS is minified

### Font Optimization

1. **Subset Google Fonts** - Load only used weights
2. **Font Display Swap** - Add `&display=swap` to Google Fonts URLs
3. **Preconnect** - Add preconnect hints for Google Fonts
4. **Limit Font Awesome** - Use only needed icons (custom build)

### Image Optimization

1. **Compress all images** - Use tools like TinyPNG
2. **Lazy loading** - Implement for below-fold images
3. **WebP format** - Convert to WebP with fallbacks
4. **Responsive images** - Use srcset for different sizes
5. **CDN** - Serve images from CDN

---

## Debugging Common Issues

### Issue: Sliders Not Working

**Check:**
1. jQuery loaded first?
2. Swiper/Owl JS loaded?
3. oxpins.js loaded last?
4. Check browser console for errors

### Issue: Animations Not Triggering

**Check:**
1. WOW.js loaded?
2. Animate.css loaded?
3. WOW initialized in oxpins.js?
4. Elements have proper animation classes?

### Issue: Icons Not Showing

**Check:**
1. Font Awesome CSS loaded?
2. Oxpins Icons CSS loaded?
3. Font files in correct path?
4. Check network tab for 404 errors

### Issue: Gallery Lightbox Not Working

**Check:**
1. Magnific Popup CSS loaded?
2. Magnific Popup JS loaded?
3. Initialized in oxpins.js?
4. Proper data attributes on images?

---

## Version Compatibility

**Bootstrap 5.x Changes:**
- No jQuery required for Bootstrap (but theme uses jQuery elsewhere)
- Popper.js bundled in bootstrap.bundle.js
- Updated class names (check if using Bootstrap 4 syntax)

**jQuery 3.x Compatibility:**
- Most plugins compatible
- jQuery Migrate may help with older plugins
- Check console for deprecation warnings

---

## Browser Support

**Modern Browsers (Full Support):**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Legacy Support:**
- IE 11 (partial, may need polyfills)
- IE 10 (limited, theme may work but not officially supported)

**Mobile:**
- iOS Safari (latest)
- Chrome Mobile (latest)
- Android Browser (latest)

---

## CDN Alternative

For faster loading, consider using CDN versions of popular libraries:

**jQuery:**
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

**Bootstrap:**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
```

**Font Awesome:**
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
```

**Swiper:**
```html
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
```

**Note:** Using CDNs requires internet connection. For offline development, use local files.

---

## Summary

**Total Dependencies:**
- 48 files (20 CSS + 28 JS)
- 3 Google Font families
- 34 vendor libraries
- ~15 critical dependencies
- ~20 recommended dependencies
- ~13 optional dependencies

**Critical Path:**
1. jQuery → Bootstrap → WOW → Sliders → Theme Script
2. Bootstrap CSS → Animate CSS → Icons → Theme CSS

**Homepage 3 Essentials:**
- Bootstrap 5.x (layout)
- Swiper (hero slider + brand carousel)
- Owl Carousel (testimonials)
- WOW.js + Animate.css (animations)
- Magnific Popup (gallery)
- Font Awesome + Oxpins Icons (icons)
- oxpins.css (all theme styling)
- oxpins.js (initialization)

---

**Last Updated:** 2025-11-17
**Reference:** For Homepage 3 implementation