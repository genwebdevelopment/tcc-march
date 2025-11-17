# Oxpens Homepage 3 - Complete Assets Inventory

**Created:** 2025-11-17
**Purpose:** Checklist of all required files for Homepage 3 implementation

---

## Overview

This document lists every file needed to implement Homepage 3, organized by category with source and destination paths.

**Total Files Estimate:**
- CSS: 20 files
- JavaScript: 28 files
- Images: ~60 files (including megamenu demos)
- Fonts: 3 complete font directories
- HTML: 1 file
- PHP: 1 file (optional)

**Total Size Estimate:** 15-25 MB

---

## HTML Files (1 file)

| File | Source Path | Destination | Required |
|------|-------------|-------------|----------|
| index3.html | `oxpins-theme/oxpins-main-html/index3.html` | `index.html` | ✅ CRITICAL |

**Note:** Will need path updates after copying

---

## CSS Files (20 files)

### Main Stylesheet (1 file)

| File | Source Path | Destination | Size | Required |
|------|-------------|-------------|------|----------|
| oxpins.css | `oxpins-theme/oxpins-main-html/assets/css/oxpins.css` | `assets/css/oxpins.css` | ~500KB | ✅ CRITICAL |

### Vendor CSS (19 files)

| # | File | Source Path | Destination | Required |
|---|------|-------------|-------------|----------|
| 1 | bootstrap.min.css | `assets/vendors/bootstrap/css/bootstrap.min.css` | Same | ✅ CRITICAL |
| 2 | animate.min.css | `assets/vendors/animate/animate.min.css` | Same | ✅ CRITICAL |
| 3 | custom-animate.css | `assets/vendors/animate/custom-animate.css` | Same | ✅ CRITICAL |
| 4 | all.min.css | `assets/vendors/fontawesome/css/all.min.css` | Same | ✅ CRITICAL |
| 5 | jarallax.css | `assets/vendors/jarallax/jarallax.css` | Same | ✅ Used |
| 6 | jquery.magnific-popup.css | `assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css` | Same | ✅ CRITICAL |
| 7 | nouislider.min.css | `assets/vendors/nouislider/nouislider.min.css` | Same | ⚠️ Optional |
| 8 | nouislider.pips.css | `assets/vendors/nouislider/nouislider.pips.css` | Same | ⚠️ Optional |
| 9 | odometer.min.css | `assets/vendors/odometer/odometer.min.css` | Same | ✅ Used |
| 10 | swiper.min.css | `assets/vendors/swiper/swiper.min.css` | Same | ✅ CRITICAL |
| 11 | style.css | `assets/vendors/oxpins-icons/style.css` | Same | ✅ CRITICAL |
| 12 | tiny-slider.min.css | `assets/vendors/tiny-slider/tiny-slider.min.css` | Same | ⚠️ Optional |
| 13 | stylesheet.css | `assets/vendors/reey-font/stylesheet.css` | Same | ✅ Used |
| 14 | owl.carousel.min.css | `assets/vendors/owl-carousel/owl.carousel.min.css` | Same | ✅ CRITICAL |
| 15 | owl.theme.default.min.css | `assets/vendors/owl-carousel/owl.theme.default.min.css` | Same | ✅ CRITICAL |
| 16 | jquery.bxslider.css | `assets/vendors/bxslider/jquery.bxslider.css` | Same | ⚠️ Minimal |
| 17 | bootstrap-select.min.css | `assets/vendors/bootstrap-select/css/bootstrap-select.min.css` | Same | ⚠️ Optional |
| 18 | vegas.min.css | `assets/vendors/vegas/vegas.min.css` | Same | ⚠️ Minimal |
| 19 | jquery-ui.css | `assets/vendors/jquery-ui/jquery-ui.css` | Same | ⚠️ Optional |
| 20 | timePicker.css | `assets/vendors/timepicker/timePicker.css` | Same | ⚠️ Optional |

---

## JavaScript Files (28 files)

### Main Script (1 file)

| File | Source Path | Destination | Size | Required |
|------|-------------|-------------|------|----------|
| oxpins.js | `oxpins-theme/oxpins-main-html/assets/js/oxpins.js` | `assets/js/oxpins.js` | ~50KB | ✅ CRITICAL |

### Vendor JavaScript (27 files)

| # | File | Source Path | Destination | Size | Required |
|---|------|-------------|-------------|------|----------|
| 1 | jquery-3.6.0.min.js | `assets/vendors/jquery/jquery-3.6.0.min.js` | Same | 85KB | ✅ CRITICAL |
| 2 | bootstrap.bundle.min.js | `assets/vendors/bootstrap/js/bootstrap.bundle.min.js` | Same | 75KB | ✅ CRITICAL |
| 3 | jarallax.min.js | `assets/vendors/jarallax/jarallax.min.js` | Same | 10KB | ✅ Used |
| 4 | jquery.ajaxchimp.min.js | `assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js` | Same | 3KB | ⚠️ Optional |
| 5 | jquery.appear.min.js | `assets/vendors/jquery-appear/jquery.appear.min.js` | Same | 2KB | ✅ Used |
| 6 | jquery.circle-progress.min.js | `assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js` | Same | 5KB | ⚠️ Minimal |
| 7 | jquery.magnific-popup.min.js | `assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js` | Same | 20KB | ✅ CRITICAL |
| 8 | jquery.validate.min.js | `assets/vendors/jquery-validate/jquery.validate.min.js` | Same | 25KB | ✅ Used |
| 9 | nouislider.min.js | `assets/vendors/nouislider/nouislider.min.js` | Same | 30KB | ⚠️ Optional |
| 10 | odometer.min.js | `assets/vendors/odometer/odometer.min.js` | Same | 10KB | ✅ Used |
| 11 | swiper.min.js | `assets/vendors/swiper/swiper.min.js` | Same | 140KB | ✅ CRITICAL |
| 12 | tiny-slider.min.js | `assets/vendors/tiny-slider/tiny-slider.min.js` | Same | 20KB | ⚠️ Optional |
| 13 | wNumb.min.js | `assets/vendors/wnumb/wNumb.min.js` | Same | 2KB | ⚠️ Optional |
| 14 | wow.js | `assets/vendors/wow/wow.js` | Same | 5KB | ✅ CRITICAL |
| 15 | isotope.js | `assets/vendors/isotope/isotope.js` | Same | 30KB | ⚠️ Minimal |
| 16 | countdown.min.js | `assets/vendors/countdown/countdown.min.js` | Same | 5KB | ✅ Used |
| 17 | owl.carousel.min.js | `assets/vendors/owl-carousel/owl.carousel.min.js` | Same | 45KB | ✅ CRITICAL |
| 18 | jquery.bxslider.min.js | `assets/vendors/bxslider/jquery.bxslider.min.js` | Same | 20KB | ⚠️ Minimal |
| 19 | bootstrap-select.min.js | `assets/vendors/bootstrap-select/js/bootstrap-select.min.js` | Same | 40KB | ⚠️ Optional |
| 20 | vegas.min.js | `assets/vendors/vegas/vegas.min.js` | Same | 15KB | ⚠️ Minimal |
| 21 | jquery-ui.js | `assets/vendors/jquery-ui/jquery-ui.js` | Same | 250KB | ⚠️ Optional |
| 22 | timePicker.js | `assets/vendors/timepicker/timePicker.js` | Same | 10KB | ⚠️ Optional |
| 23 | jquery.circleType.js | `assets/vendors/circleType/jquery.circleType.js` | Same | 5KB | ⚠️ Minimal |
| 24 | jquery.lettering.min.js | `assets/vendors/circleType/jquery.lettering.min.js` | Same | 5KB | ⚠️ Minimal |

---

## Image Assets (~60 files)

### Favicons (4 files)

| File | Source Path | Destination | Required |
|------|-------------|-------------|----------|
| apple-touch-icon.png | `assets/images/favicons/apple-touch-icon.png` | Same | ✅ CRITICAL |
| favicon-32x32.png | `assets/images/favicons/favicon-32x32.png` | Same | ✅ CRITICAL |
| favicon-16x16.png | `assets/images/favicons/favicon-16x16.png` | Same | ✅ CRITICAL |
| site.webmanifest | `assets/images/favicons/site.webmanifest` | Same | ✅ CRITICAL |

### Logos (2 files)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| logo-2.png | `assets/images/resources/logo-2.png` | Same | Header logo | ✅ CRITICAL |
| footer-logo.png | `assets/images/resources/footer-logo.png` | Same | Footer logo | ✅ CRITICAL |

### Icons (1 file)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| main-menu-heart-icon-2.png | `assets/images/icon/main-menu-heart-icon-2.png` | Same | Header CTA | ✅ Used |

### Backgrounds (6 files)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| main-slider-3-1.jpg | `assets/images/backgrounds/main-slider-3-1.jpg` | Same | Hero slide 1 | ✅ CRITICAL |
| main-slider-3-2.jpg | `assets/images/backgrounds/main-slider-3-2.jpg` | Same | Hero slide 2 | ✅ CRITICAL |
| main-slider-3-3.jpg | `assets/images/backgrounds/main-slider-3-3.jpg` | Same | Hero slide 3 | ✅ CRITICAL |
| causes-three-bg.jpg | `assets/images/backgrounds/causes-three-bg.jpg` | Same | Causes section BG | ✅ Used |
| events-two-bg.png | `assets/images/backgrounds/events-two-bg.png` | Same | Events section BG | ✅ Used |
| site-footer-bg.jpg | `assets/images/backgrounds/site-footer-bg.jpg` | Same | Footer BG | ✅ Used |

### Resources - Content Images (13 files)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| make-donation-img-1.jpg | `assets/images/resources/make-donation-img-1.jpg` | Same | Featured donation | ✅ Used |
| about-three-img.jpg | `assets/images/resources/about-three-img.jpg` | Same | About section main | ✅ Used |
| about-three-img-2.jpg | `assets/images/resources/about-three-img-2.jpg` | Same | About section overlay | ✅ Used |
| feature-3-1.png | `assets/images/resources/feature-3-1.png` | Same | Feature card 1 | ✅ Used |
| feature-3-2.png | `assets/images/resources/feature-3-2.png` | Same | Feature card 2 | ✅ Used |
| feature-3-3.png | `assets/images/resources/feature-3-3.png` | Same | Feature card 3 | ✅ Used |
| causes-3-1.jpg | `assets/images/resources/causes-3-1.jpg` | Same | Cause 1 | ✅ Used |
| causes-3-2.jpg | `assets/images/resources/causes-3-2.jpg` | Same | Cause 2 | ✅ Used |
| causes-3-3.jpg | `assets/images/resources/causes-3-3.jpg` | Same | Cause 3 | ✅ Used |
| causes-3-4.jpg | `assets/images/resources/causes-3-4.jpg` | Same | Cause 4 | ✅ Used |

### Shapes - Decorative Overlays (7 unique files, some used multiple times)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| about-three-help-shape.png | `assets/images/shapes/about-three-help-shape.png` | Same | About section | ✅ Used |
| causes-three-shape-1.png | `assets/images/shapes/causes-three-shape-1.png` | Same | Causes section | ✅ Used |
| causes-one-progress-shape-1.png | `assets/images/shapes/causes-one-progress-shape-1.png` | Same | Progress bars | ✅ Used |
| testimonial-three-shape-1.png | `assets/images/shapes/testimonial-three-shape-1.png` | Same | Testimonial section | ✅ Used |
| brand-three-shape-1.png | `assets/images/shapes/brand-three-shape-1.png` | Same | Brand section | ✅ Used |
| events-two-shape-1.png | `assets/images/shapes/events-two-shape-1.png` | Same | Events section | ✅ Used |
| events-two-shape-2.png | `assets/images/shapes/events-two-shape-2.png` | Same | Events section | ✅ Used |

### Testimonials (3 files)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| testimonial-3-1.jpg | `assets/images/testimonial/testimonial-3-1.jpg` | Same | Client 1 photo | ✅ Used |
| testimonial-3-2.jpg | `assets/images/testimonial/testimonial-3-2.jpg` | Same | Client 2 photo | ✅ Used |
| testimonial-3-3.jpg | `assets/images/testimonial/testimonial-3-3.jpg` | Same | Client 3 photo | ✅ Used |

### Events (2 files)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| events-2-1.jpg | `assets/images/events/events-2-1.jpg` | Same | Event 1 image | ✅ Used |
| events-2-2.jpg | `assets/images/events/events-2-2.jpg` | Same | Event 2 image | ✅ Used |

### Blog/News (3 files)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| news-1-1.jpg | `assets/images/blog/news-1-1.jpg` | Same | Blog post 1 | ✅ Used |
| news-1-2.jpg | `assets/images/blog/news-1-2.jpg` | Same | Blog post 2 | ✅ Used |
| news-1-3.jpg | `assets/images/blog/news-1-3.jpg` | Same | Blog post 3 | ✅ Used |

### Gallery (5 files)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| gallery-1-1.jpg | `assets/images/gallery/gallery-1-1.jpg` | Same | Gallery image 1 | ✅ Used |
| gallery-1-2.jpg | `assets/images/gallery/gallery-1-2.jpg` | Same | Gallery image 2 | ✅ Used |
| gallery-1-3.jpg | `assets/images/gallery/gallery-1-3.jpg` | Same | Gallery image 3 | ✅ Used |
| gallery-1-4.jpg | `assets/images/gallery/gallery-1-4.jpg` | Same | Gallery image 4 | ✅ Used |
| gallery-1-5.jpg | `assets/images/gallery/gallery-1-5.jpg` | Same | Gallery image 5 | ✅ Used |

### Brands/Logos (6 files)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| brand-1-1.png | `assets/images/brand/brand-1-1.png` | Same | Partner logo 1 | ✅ Used |
| brand-1-2.png | `assets/images/brand/brand-1-2.png` | Same | Partner logo 2 | ✅ Used |
| brand-1-3.png | `assets/images/brand/brand-1-3.png` | Same | Partner logo 3 | ✅ Used |
| brand-1-4.png | `assets/images/brand/brand-1-4.png` | Same | Partner logo 4 | ✅ Used |
| brand-1-5.png | `assets/images/brand/brand-1-5.png` | Same | Partner logo 5 | ✅ Used |
| brand-1-6.png | `assets/images/brand/brand-1-6.png` | Same | Partner logo 6 | ✅ Used |

### Home Showcase - Megamenu Demos (7 files)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| home-1-1.png | `assets/images/home-showcase/home-1-1.png` | Same | Megamenu demo 1 | ✅ Used |
| home-1-2.png | `assets/images/home-showcase/home-1-2.png` | Same | Megamenu demo 2 | ✅ Used |
| home-1-3.png | `assets/images/home-showcase/home-1-3.png` | Same | Megamenu demo 3 | ✅ Used |
| home-1-4.png | `assets/images/home-showcase/home-1-4.png` | Same | Megamenu demo 4 | ✅ Used |
| home-1-5.png | `assets/images/home-showcase/home-1-5.png` | Same | Megamenu demo 5 | ✅ Used |
| home-1-6.png | `assets/images/home-showcase/home-1-6.png` | Same | Megamenu demo 6 | ✅ Used |
| home-1-7.png | `assets/images/home-showcase/home-1-7.png` | Same | Megamenu demo 7 | ✅ Used |

### Loader (1 file)

| File | Source Path | Destination | Usage | Required |
|------|-------------|-------------|-------|----------|
| loader.png | `assets/images/loader.png` | Same | Preloader | ✅ Used |

---

## Font Files (3 complete directories)

### 1. Font Awesome Webfonts (15 files)

**Directory:** `assets/vendors/fontawesome/webfonts/`

| File | Format | Required |
|------|--------|----------|
| fa-brands-400.eot | EOT | ✅ Yes |
| fa-brands-400.svg | SVG | ✅ Yes |
| fa-brands-400.ttf | TTF | ✅ Yes |
| fa-brands-400.woff | WOFF | ✅ Yes |
| fa-brands-400.woff2 | WOFF2 | ✅ Yes |
| fa-regular-400.eot | EOT | ✅ Yes |
| fa-regular-400.svg | SVG | ✅ Yes |
| fa-regular-400.ttf | TTF | ✅ Yes |
| fa-regular-400.woff | WOFF | ✅ Yes |
| fa-regular-400.woff2 | WOFF2 | ✅ Yes |
| fa-solid-900.eot | EOT | ✅ Yes |
| fa-solid-900.svg | SVG | ✅ Yes |
| fa-solid-900.ttf | TTF | ✅ Yes |
| fa-solid-900.woff | WOFF | ✅ Yes |
| fa-solid-900.woff2 | WOFF2 | ✅ Yes |

**Note:** Copy entire `webfonts/` directory

### 2. Oxpins Custom Icons (5 files)

**Directory:** `assets/vendors/oxpins-icons/fonts/`

| File | Format | Required |
|------|--------|----------|
| oxpins.eot | EOT | ✅ Yes |
| oxpins.svg | SVG | ✅ Yes |
| oxpins.ttf | TTF | ✅ Yes |
| oxpins.woff | WOFF | ✅ Yes |
| oxpins.woff2 | WOFF2 | ✅ Yes |

**Additional Files:**
- `style.css` (already listed in CSS section)

**Note:** Copy entire `oxpins-icons/` directory

### 3. Reey Custom Font (5 files)

**Directory:** `assets/vendors/reey-font/fonts/`

| File | Format | Required |
|------|--------|----------|
| reey-regular-webfont.eot | EOT | ✅ Yes |
| reey-regular-webfont.svg | SVG | ✅ Yes |
| reey-regular-webfont.ttf | TTF | ✅ Yes |
| reey-regular-webfont.woff | WOFF | ✅ Yes |
| reey-regular-webfont.woff2 | WOFF2 | ✅ Yes |

**Additional Files:**
- `stylesheet.css` (already listed in CSS section)

**Note:** Copy entire `reey-font/` directory

---

## PHP Files (1 file - Optional)

| File | Source Path | Destination | Purpose | Required |
|------|-------------|-------------|---------|----------|
| sendemail.php | `assets/inc/sendemail.php` | Same | Contact form handler | ⚠️ Optional |

**Note:** Requires SMTP configuration if using contact form

---

## Copy Strategy

### Phase 1: Create Directory Structure

```bash
mkdir -p assets/css
mkdir -p assets/js
mkdir -p assets/inc
mkdir -p assets/images/{backgrounds,resources,shapes,testimonial,events,blog,gallery,brand,home-showcase,icon,favicons}
mkdir -p assets/vendors/{jquery,bootstrap,fontawesome,animate,swiper,owl-carousel,jarallax,jquery-magnific-popup,jquery-validate,odometer,wow,countdown,oxpins-icons,reey-font}
```

### Phase 2: Copy Files by Category

**Order of Operations:**
1. HTML file (index3.html → index.html)
2. CSS files (main + vendors)
3. JavaScript files (main + vendors)
4. Font files (complete directories)
5. Image files (organized by subdirectory)
6. PHP file (if using contact form)

### Phase 3: Verification

After copying, verify:
- [ ] All CSS files load (check browser DevTools)
- [ ] All JS files load (check console)
- [ ] All images display (check for 404s)
- [ ] Fonts render correctly
- [ ] No broken links

---

## Batch Copy Commands

### Copy All CSS

```bash
# From oxpins-theme/oxpins-main-html/ directory
cp -r assets/css/* [destination]/assets/css/
cp -r assets/vendors/bootstrap/css/* [destination]/assets/vendors/bootstrap/css/
cp -r assets/vendors/animate/* [destination]/assets/vendors/animate/
# ... (continue for each vendor)
```

### Copy All JavaScript

```bash
cp -r assets/js/* [destination]/assets/js/
cp -r assets/vendors/jquery/* [destination]/assets/vendors/jquery/
cp -r assets/vendors/bootstrap/js/* [destination]/assets/vendors/bootstrap/js/
# ... (continue for each vendor)
```

### Copy All Images

```bash
cp -r assets/images/backgrounds/* [destination]/assets/images/backgrounds/
cp -r assets/images/resources/* [destination]/assets/images/resources/
# ... (continue for each image subdirectory)
```

**Note:** Adjust paths based on your actual directory structure

---

## Size Estimates

| Category | File Count | Size Estimate |
|----------|-----------|---------------|
| CSS | 20 | ~1-2 MB |
| JavaScript | 28 | ~2-3 MB |
| Images | 60 | ~10-15 MB |
| Fonts | 25 | ~1-2 MB |
| **Total** | **~133 files** | **~15-20 MB** |

**Note:** Actual sizes may vary based on optimization

---

## Optional Files (Can Skip Initially)

### Optional Vendor Libraries:

**CSS:**
- nouislider (2 files)
- tiny-slider
- bxslider
- bootstrap-select
- vegas
- jquery-ui
- timepicker

**JavaScript:**
- jquery.ajaxchimp
- jquery.circle-progress
- nouislider
- wNumb
- tiny-slider
- bxslider
- bootstrap-select
- vegas
- jquery-ui
- timePicker
- circleType
- lettering

**Total Savings:** ~10 files (CSS + JS), ~500KB-1MB

**Note:** Test page functionality before removing. Some may be initialized in oxpins.js.

---

## Priority Checklist

### ✅ Phase 1 - Must Have (Core Functionality)

- [ ] index3.html
- [ ] oxpins.css
- [ ] oxpins.js
- [ ] jQuery
- [ ] Bootstrap (CSS + JS)
- [ ] Swiper (CSS + JS)
- [ ] Owl Carousel (CSS + JS)
- [ ] WOW.js
- [ ] Animate.css
- [ ] Font Awesome (CSS + webfonts)
- [ ] Oxpins Icons (CSS + fonts)
- [ ] Magnific Popup (CSS + JS)
- [ ] All images (60 files)

### ✅ Phase 2 - Enhanced Experience

- [ ] Jarallax (CSS + JS)
- [ ] Odometer (CSS + JS)
- [ ] Reey Font
- [ ] jQuery Appear
- [ ] jQuery Validate
- [ ] Countdown
- [ ] Shapes/decorative images

### ⚠️ Phase 3 - Optional (Feature-Dependent)

- [ ] noUiSlider
- [ ] Bootstrap Select
- [ ] jQuery UI
- [ ] Time Picker
- [ ] AjaxChimp
- [ ] Other optional vendors

---

## File Integrity Check

After copying, run these checks:

### 1. CSS Loaded?
Open browser DevTools → Network → Filter: CSS
- Should show 20 CSS files loaded (200 status)

### 2. JS Loaded?
Open browser DevTools → Network → Filter: JS
- Should show 28 JS files loaded (200 status)

### 3. Images Loaded?
Open browser DevTools → Network → Filter: Img
- Should show ~60 images loaded (200 status)
- No 404 errors

### 4. Fonts Loaded?
Open browser DevTools → Network → Filter: Font
- Should show font files loading
- Check if icons display correctly

### 5. Console Errors?
Open browser DevTools → Console
- Should have no JavaScript errors
- Warnings are okay (deprecations, etc.)

---

## Next Steps After Copy

1. **Test Page Load** - Open index.html in browser
2. **Check All Sections** - Scroll through entire page
3. **Test Interactions** - Click buttons, test sliders, open lightbox
4. **Mobile Test** - Check responsive design
5. **Performance Audit** - Run Lighthouse
6. **Start Customization** - Replace content with actual content

---

**Last Updated:** 2025-11-17
**Total Required Files:** ~133 files (minimum)
**Estimated Total Size:** 15-20 MB