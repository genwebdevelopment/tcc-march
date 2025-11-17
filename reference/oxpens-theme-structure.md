# Oxpens Theme - Complete Structure Reference

**Created:** 2025-11-17
**Source:** `/Users/adam/Desktop/CODING/Tin-Cup-Challenge/tin-cup-design/oxpins-theme/`

---

## Overview

The Oxpens theme is a professional non-profit charity HTML5 template built on Bootstrap 5.x. It includes 44 HTML pages, 322 image assets, 34 vendor libraries, and comprehensive documentation.

---

## Complete Directory Structure

```
oxpins-theme/
│
├── oxpins-html-documentations/          # Theme Documentation
│   ├── css/                             # Documentation styles
│   ├── fonts/                           # Documentation fonts
│   ├── images/                          # Documentation images
│   ├── js/                              # Documentation scripts
│   └── index.html                       # Documentation homepage
│
├── oxpins-icons/                        # Icon Font Package
│   ├── fonts/                           # Icon font files
│   ├── style.css                        # Icon CSS
│   └── (additional icon files)
│
├── oxpins-icons-two/                    # Alternative Icon Set
│   ├── fonts/                           # Alternative icon fonts
│   └── Read Me.txt                      # Instructions
│
└── oxpins-main-html/                    # Main Theme Files ⭐
    │
    ├── index.html                       # Homepage Variant 1
    ├── index2.html                      # Homepage Variant 2
    ├── index3.html                      # Homepage Variant 3 ⭐ (OUR BASE)
    ├── index4.html                      # Homepage Variant 4
    ├── index5.html                      # Homepage Variant 5
    ├── index-boxed.html                 # Boxed Layout
    ├── index-dark.html                  # Dark Mode Homepage 1
    ├── index2-dark.html                 # Dark Mode Homepage 2
    ├── index3-dark.html                 # Dark Mode Homepage 3
    ├── index4-dark.html                 # Dark Mode Homepage 4
    ├── index5-dark.html                 # Dark Mode Homepage 5
    ├── index-rtl.html                   # RTL Homepage 1
    ├── index-one-page.html              # One-Page Homepage 1
    ├── index2-one-page.html             # One-Page Homepage 2
    ├── index3-one-page.html             # One-Page Homepage 3
    ├── index4-one-page.html             # One-Page Homepage 4
    ├── index5-one-page.html             # One-Page Homepage 5
    │
    ├── about.html                       # About Page
    │
    ├── volunteer.html                   # Volunteer Listing
    ├── become-volunteer.html            # Volunteer Signup
    ├── volunteer-carousel.html          # Volunteer Carousel
    │
    ├── gallery.html                     # Gallery Grid
    ├── gallery-carousel.html            # Gallery Slider
    │
    ├── faq.html                         # FAQ Page
    ├── 404.html                         # 404 Error Page
    │
    ├── donation.html                    # Donations Grid
    ├── donations-list.html              # Donations List
    ├── donation-carousel.html           # Donations Carousel
    ├── donation-details.html            # Single Donation
    ├── donate-now.html                  # Donation Form
    │
    ├── events.html                      # Events Grid
    ├── events-carousel.html             # Events Carousel
    ├── event-details.html               # Single Event
    │
    ├── news.html                        # News/Blog Grid
    ├── news-carousel.html               # News Carousel
    ├── news-sidebar.html                # News with Right Sidebar
    ├── news-sidebar-left.html           # News with Left Sidebar
    ├── news-details.html                # Single Post
    │
    ├── products.html                    # Shop/Products
    ├── product-details.html             # Single Product
    ├── cart.html                        # Shopping Cart
    ├── checkout.html                    # Checkout Page
    │
    ├── contact.html                     # Contact Page
    │
    └── assets/                          # All Theme Assets ⭐⭐⭐
        │
        ├── css/                         # Stylesheets
        │   ├── oxpins.css               # Main Stylesheet (primary)
        │   ├── oxpins.css.map           # Source Map
        │   ├── oxpins-dark.css          # Dark Mode Styles
        │   ├── oxpins-rtl.css           # RTL (Right-to-Left) Styles
        │   ├── oxpins-rtl-custom.css    # Custom RTL Additions
        │   ├── oxpins-color-1.css       # Color Scheme 1
        │   ├── oxpins-color-2.css       # Color Scheme 2
        │   ├── oxpins-update.css        # Update/Patch Styles
        │   └── (additional variants)
        │
        ├── js/                          # JavaScript Files
        │   └── oxpins.js                # Main Template Script (1008 lines)
        │
        ├── inc/                         # Server-side Includes
        │   └── sendemail.php            # Contact Form PHP Handler
        │
        ├── vendors/                     # Third-Party Libraries (34 packages)
        │   │
        │   ├── jquery/                  # jQuery 3.6.0
        │   │   └── jquery-3.6.0.min.js
        │   │
        │   ├── bootstrap/               # Bootstrap 5.x
        │   │   ├── css/
        │   │   │   └── bootstrap.min.css
        │   │   └── js/
        │   │       └── bootstrap.bundle.min.js
        │   │
        │   ├── fontawesome/             # Font Awesome Icons
        │   │   ├── css/
        │   │   │   └── all.min.css
        │   │   └── webfonts/            # Icon font files
        │   │       ├── fa-brands-400.eot
        │   │       ├── fa-brands-400.svg
        │   │       ├── fa-brands-400.ttf
        │   │       ├── fa-brands-400.woff
        │   │       ├── fa-brands-400.woff2
        │   │       ├── fa-regular-400.*  # (5 files)
        │   │       └── fa-solid-900.*    # (5 files)
        │   │
        │   ├── animate/                 # CSS3 Animations
        │   │   ├── animate.min.css
        │   │   └── custom-animate.css
        │   │
        │   ├── swiper/                  # Swiper Slider (Modern)
        │   │   ├── swiper.min.css
        │   │   └── swiper.min.js
        │   │
        │   ├── owl-carousel/            # Owl Carousel (Legacy)
        │   │   ├── owl.carousel.min.css
        │   │   ├── owl.theme.default.min.css
        │   │   └── owl.carousel.min.js
        │   │
        │   ├── jarallax/                # Parallax Scrolling
        │   │   ├── jarallax.css
        │   │   └── jarallax.min.js
        │   │
        │   ├── jquery-magnific-popup/   # Lightbox/Popup
        │   │   ├── jquery.magnific-popup.css
        │   │   └── jquery.magnific-popup.min.js
        │   │
        │   ├── jquery-validate/         # Form Validation
        │   │   └── jquery.validate.min.js
        │   │
        │   ├── nouislider/              # Range Sliders
        │   │   ├── nouislider.min.css
        │   │   ├── nouislider.pips.css
        │   │   └── nouislider.min.js
        │   │
        │   ├── odometer/                # Animated Counters
        │   │   ├── odometer.min.css
        │   │   └── odometer.min.js
        │   │
        │   ├── wow/                     # WOW.js Scroll Animations
        │   │   └── wow.js
        │   │
        │   ├── isotope/                 # Grid Layout/Filtering
        │   │   └── isotope.js
        │   │
        │   ├── countdown/               # Countdown Timer
        │   │   └── countdown.min.js
        │   │
        │   ├── bxslider/                # BX Slider
        │   │   ├── jquery.bxslider.css
        │   │   └── jquery.bxslider.min.js
        │   │
        │   ├── bootstrap-select/        # Enhanced Dropdowns
        │   │   ├── css/
        │   │   │   └── bootstrap-select.min.css
        │   │   └── js/
        │   │       └── bootstrap-select.min.js
        │   │
        │   ├── vegas/                   # Background Slideshow
        │   │   ├── vegas.min.css
        │   │   └── vegas.min.js
        │   │
        │   ├── jquery-ui/               # jQuery UI Components
        │   │   ├── jquery-ui.css
        │   │   └── jquery-ui.js
        │   │
        │   ├── timepicker/              # Time Picker Widget
        │   │   ├── timePicker.css
        │   │   └── timePicker.js
        │   │
        │   ├── circleType/              # Circular Text Effects
        │   │   ├── jquery.circleType.js
        │   │   └── jquery.lettering.min.js
        │   │
        │   ├── tiny-slider/             # Tiny Slider
        │   │   ├── tiny-slider.min.css
        │   │   └── tiny-slider.min.js
        │   │
        │   ├── jquery-appear/           # Scroll-triggered Events
        │   │   └── jquery.appear.min.js
        │   │
        │   ├── jquery-circle-progress/  # Circular Progress Bars
        │   │   └── jquery.circle-progress.min.js
        │   │
        │   ├── jquery-ajaxchimp/        # MailChimp Integration
        │   │   └── jquery.ajaxchimp.min.js
        │   │
        │   ├── jquery-migrate/          # jQuery Compatibility
        │   │   └── jquery-migrate.min.js
        │   │
        │   ├── oxpins-icons/            # Custom Icon Font ⭐
        │   │   ├── fonts/               # Icon font files
        │   │   │   ├── oxpins.eot
        │   │   │   ├── oxpins.svg
        │   │   │   ├── oxpins.ttf
        │   │   │   ├── oxpins.woff
        │   │   │   └── oxpins.woff2
        │   │   └── style.css            # Icon styles
        │   │
        │   ├── oxpins-icons-two/        # Alternative Icons
        │   │   └── (similar structure)
        │   │
        │   ├── reey-font/               # Reey Custom Font ⭐
        │   │   ├── fonts/
        │   │   │   ├── reey-regular-webfont.eot
        │   │   │   ├── reey-regular-webfont.svg
        │   │   │   ├── reey-regular-webfont.ttf
        │   │   │   ├── reey-regular-webfont.woff
        │   │   │   └── reey-regular-webfont.woff2
        │   │   └── stylesheet.css
        │   │
        │   ├── the-sayinistic-font/     # Sayinistic Font
        │   │   └── (similar structure)
        │   │
        │   ├── typed-2.0.11/            # Typing Animation
        │   │   └── typed-2.0.11.js
        │   │
        │   ├── nice-select/             # Custom Select Dropdowns
        │   │   └── (files)
        │   │
        │   ├── slick/                   # Slick Slider
        │   │   └── (files)
        │   │
        │   ├── wnumb/                   # Number Formatting
        │   │   └── wNumb.min.js
        │   │
        │   └── layerdrops-toolbar/      # Demo Toolbar
        │       └── (files)
        │
        └── images/                      # Images (322 total files) ⭐⭐⭐
            │
            ├── loader.png               # Preloader Animation
            │
            ├── favicons/                # Favicon Files
            │   ├── apple-touch-icon.png
            │   ├── favicon-32x32.png
            │   ├── favicon-16x16.png
            │   └── site.webmanifest
            │
            ├── icon/                    # Icon Images
            │   ├── main-menu-heart-icon-1.png
            │   ├── main-menu-heart-icon-2.png
            │   └── (other icon images)
            │
            ├── backgrounds/             # Background Images (25 files)
            │   ├── main-slider-1-1.jpg  # Hero slides for index.html
            │   ├── main-slider-1-2.jpg
            │   ├── main-slider-1-3.jpg
            │   ├── main-slider-2-1.jpg  # Hero slides for index2.html
            │   ├── main-slider-2-2.jpg
            │   ├── main-slider-2-3.jpg
            │   ├── main-slider-3-1.jpg  # Hero slides for index3.html ⭐
            │   ├── main-slider-3-2.jpg  # ⭐
            │   ├── main-slider-3-3.jpg  # ⭐
            │   ├── causes-three-bg.jpg  # ⭐
            │   ├── events-two-bg.png    # ⭐
            │   ├── site-footer-bg.jpg   # ⭐
            │   └── (other background images)
            │
            ├── resources/               # Content Images (largest collection)
            │   ├── logo-1.png           # Logo variant 1
            │   ├── logo-2.png           # Logo variant 2 ⭐
            │   ├── logo-3.png           # Logo variant 3
            │   ├── footer-logo.png      # Footer logo ⭐
            │   ├── make-donation-img-1.jpg  # ⭐
            │   ├── about-three-img.jpg      # ⭐
            │   ├── about-three-img-2.jpg    # ⭐
            │   ├── feature-3-1.png          # ⭐
            │   ├── feature-3-2.png          # ⭐
            │   ├── feature-3-3.png          # ⭐
            │   ├── causes-3-1.jpg           # ⭐
            │   ├── causes-3-2.jpg           # ⭐
            │   ├── causes-3-3.jpg           # ⭐
            │   ├── causes-3-4.jpg           # ⭐
            │   └── (many more resource images)
            │
            ├── shapes/                  # Decorative Shapes/Overlays
            │   ├── about-three-help-shape.png       # ⭐
            │   ├── causes-three-shape-1.png         # ⭐
            │   ├── causes-one-progress-shape-1.png  # ⭐
            │   ├── testimonial-three-shape-1.png    # ⭐
            │   ├── brand-three-shape-1.png          # ⭐
            │   ├── events-two-shape-1.png           # ⭐
            │   ├── events-two-shape-2.png           # ⭐
            │   └── (many other shape files)
            │
            ├── testimonial/             # Testimonial Photos
            │   ├── testimonial-1-1.jpg
            │   ├── testimonial-1-2.jpg
            │   ├── testimonial-1-3.jpg
            │   ├── testimonial-3-1.jpg  # ⭐
            │   ├── testimonial-3-2.jpg  # ⭐
            │   ├── testimonial-3-3.jpg  # ⭐
            │   └── (other testimonial images)
            │
            ├── events/                  # Event Images
            │   ├── events-1-1.jpg
            │   ├── events-1-2.jpg
            │   ├── events-2-1.jpg       # ⭐
            │   ├── events-2-2.jpg       # ⭐
            │   └── (other event images)
            │
            ├── blog/                    # Blog Post Images
            │   ├── news-1-1.jpg         # ⭐
            │   ├── news-1-2.jpg         # ⭐
            │   ├── news-1-3.jpg         # ⭐
            │   └── (other blog images)
            │
            ├── gallery/                 # Gallery Images
            │   ├── gallery-1-1.jpg      # ⭐
            │   ├── gallery-1-2.jpg      # ⭐
            │   ├── gallery-1-3.jpg      # ⭐
            │   ├── gallery-1-4.jpg      # ⭐
            │   ├── gallery-1-5.jpg      # ⭐
            │   └── (other gallery images)
            │
            ├── brand/                   # Partner/Sponsor Logos
            │   ├── brand-1-1.png        # ⭐
            │   ├── brand-1-2.png        # ⭐
            │   ├── brand-1-3.png        # ⭐
            │   ├── brand-1-4.png        # ⭐
            │   ├── brand-1-5.png        # ⭐
            │   ├── brand-1-6.png        # ⭐
            │   └── (other brand logos)
            │
            ├── home-showcase/           # Demo/Megamenu Previews
            │   ├── home-1-1.png         # Screenshot of index.html
            │   ├── home-1-2.png         # Screenshot of index2.html
            │   ├── home-1-3.png         # Screenshot of index3.html
            │   ├── home-1-4.png         # Screenshot of index4.html
            │   ├── home-1-5.png         # Screenshot of index5.html
            │   ├── home-1-6.png         # Screenshot of index-dark.html
            │   └── home-1-7.png         # Screenshot of index-rtl.html
            │
            ├── team/                    # Team Member Photos
            │   ├── team-1-1.jpg
            │   ├── team-1-2.jpg
            │   └── (other team photos)
            │
            └── shop/                    # Product Images
                ├── product-1-1.jpg
                ├── product-1-2.jpg
                └── (other product images)
```

---

## File Count Summary

| Category | Count | Notes |
|----------|-------|-------|
| HTML Pages | 44 | All page templates |
| CSS Files | 14 | Including variants (dark, RTL, colors) |
| JavaScript Files | 2 | Main script + vendor libraries |
| Vendor Packages | 34 | Complete libraries with dependencies |
| Total Images | 322 | Across all categories |
| Icon Font Packages | 2 | Oxpins Icons + Oxpins Icons Two |
| Custom Web Fonts | 2 | Reey + The Sayinistic |

---

## Key Directories for Homepage 3

⭐ = Required for Homepage 3 implementation

### Critical Paths

**HTML:**
- `oxpins-main-html/index3.html`

**CSS:**
- `assets/css/oxpins.css`
- `assets/vendors/*/css/*.css` (19 vendor CSS files)

**JavaScript:**
- `assets/js/oxpins.js`
- `assets/vendors/*/js/*.js` (27 vendor JS files)

**Images:**
- `assets/images/backgrounds/` (6 files marked ⭐)
- `assets/images/resources/` (13+ files marked ⭐)
- `assets/images/shapes/` (12 files marked ⭐)
- `assets/images/testimonial/` (3 files marked ⭐)
- `assets/images/events/` (2 files marked ⭐)
- `assets/images/blog/` (3 files marked ⭐)
- `assets/images/gallery/` (5 files marked ⭐)
- `assets/images/brand/` (6 files marked ⭐)
- `assets/images/favicons/` (4 files)
- `assets/images/icon/` (1 file marked ⭐)

**Fonts:**
- `assets/vendors/oxpins-icons/` (entire directory)
- `assets/vendors/reey-font/` (entire directory)
- `assets/vendors/fontawesome/` (entire directory with webfonts)

---

## Asset Path Reference

All paths in the HTML are relative to the `oxpins-main-html/` directory:

**Example CSS Path:**
```html
<link rel="stylesheet" href="assets/css/oxpins.css" />
```

**Example JS Path:**
```html
<script src="assets/vendors/jquery/jquery-3.6.0.min.js"></script>
```

**Example Image Path:**
```html
<img src="assets/images/resources/logo-2.png" alt="Logo" />
```

When copying to new project root, these paths remain the same as long as you maintain the `assets/` directory structure.

---

## Files NOT Needed for Homepage 3

The following can be excluded from the initial setup:

**HTML Files (43 pages):**
- All other HTML pages except `index3.html`

**CSS Variants (optional):**
- `oxpins-dark.css` (unless dark mode needed)
- `oxpins-rtl.css` (unless RTL support needed)
- `oxpins-color-1.css` and `oxpins-color-2.css` (alternative color schemes)

**Images:**
- ~270+ images used by other pages (not index3.html)
- Can be added later if other pages are implemented

**Vendor Libraries (potentially unused):**
- Some slider libraries may be redundant
- Audit usage before removing

---

## Documentation Location

**Original Theme Docs:**
- Path: `oxpins-theme/oxpins-html-documentations/index.html`
- Open in browser for complete theme documentation

**Includes:**
- Installation instructions
- HTML structure guide
- CSS organization
- JavaScript functionality
- Contact form setup (PHP)
- MailChimp integration
- Google Maps setup
- Customization tutorial
- Credits & sources
- Support information

---

## Version & License Info

**Theme:** Oxpins - Nonprofit Charity HTML5 Template
**Framework:** Bootstrap 5.x
**jQuery:** 3.6.0
**Browser Support:** Modern browsers + IE10+
**Responsive:** Mobile-first design

---

## Quick Reference for Copying

### Essential Files for Homepage 3 (~50-70 files total)

1. **1 HTML file** - index3.html
2. **20 CSS files** - main + vendor CSS
3. **28 JS files** - main + vendor JS
4. **~50 image files** - marked with ⭐ above
5. **3 font directories** - oxpins-icons, reey-font, fontawesome (with subdirectories)
6. **1 PHP file** - sendemail.php (optional)

### Directory Structure to Maintain

```
assets/
├── css/
├── js/
├── vendors/
│   ├── [vendor-name]/
│   │   ├── css/ (if applicable)
│   │   ├── js/ (if applicable)
│   │   ├── fonts/ (if applicable)
│   │   └── webfonts/ (if applicable)
└── images/
    ├── backgrounds/
    ├── resources/
    ├── shapes/
    ├── testimonial/
    ├── events/
    ├── blog/
    ├── gallery/
    ├── brand/
    ├── favicons/
    └── icon/
```

---

## Notes

- Maintain exact directory structure to avoid path issues
- Some vendor directories contain subdirectories (fonts, webfonts, images)
- Copy entire vendor directories to preserve internal paths
- Google Fonts loaded via CDN (no local files)
- All ⭐ marked files are required for Homepage 3
- File paths are relative to project root
- Keep consistent naming conventions

---

**Last Updated:** 2025-11-17
**Reference:** `/Users/adam/Desktop/CODING/Tin-Cup-Challenge/tin-cup-design/oxpins-theme/`