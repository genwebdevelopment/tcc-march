# Oxpens Homepage 3 - Customization Guide

**Created:** 2025-11-17
**Purpose:** Step-by-step guide to customize Homepage 3 for your project

---

## Overview

This guide walks through common customization tasks for Homepage 3, from simple text changes to advanced styling modifications.

**Difficulty Levels:**
- 🟢 **Easy:** No coding required, simple text/image replacement
- 🟡 **Medium:** Basic HTML/CSS knowledge needed
- 🔴 **Advanced:** Requires understanding of JavaScript and frameworks

---

## Quick Start Checklist

After initial setup, customize in this order:

1. ✅ Replace all logos
2. ✅ Update favicons
3. ✅ Change site title and meta tags
4. ✅ Replace hero slider images and text
5. ✅ Update navigation menu
6. ✅ Replace all content images
7. ✅ Update text content throughout
8. ✅ Change contact information
9. ✅ Update social media links
10. ✅ Customize colors (optional)
11. ✅ Adjust fonts (optional)

---

## 1. Branding & Identity

### 1.1 Replace Logos 🟢

**Files to Replace:**

**Header Logo:**
- Location: `assets/images/resources/logo-2.png`
- Used in: Header navigation (line 77 in index.html)
- Recommended size: 200x60px (transparent PNG)
- Format: PNG with transparency

**Footer Logo:**
- Location: `assets/images/resources/footer-logo.png`
- Used in: Footer widget (line 1237)
- Recommended size: 200x60px (transparent PNG)
- Can be white/light color for dark footer background

**Update HTML:**
```html
<!-- Header logo (line ~77) -->
<a href="index.html"><img src="assets/images/resources/logo-2.png" alt="Your Company Name"></a>

<!-- Footer logo (line ~1237) -->
<a href="index.html"><img src="assets/images/resources/footer-logo.png" alt="Your Company Name"></a>
```

**Important:** Always add descriptive `alt` text for accessibility!

---

### 1.2 Update Favicons 🟢

**Files to Replace:**

1. `assets/images/favicons/apple-touch-icon.png` (180x180px)
2. `assets/images/favicons/favicon-32x32.png` (32x32px)
3. `assets/images/favicons/favicon-16x16.png` (16x16px)

**Generate Favicons:**
- Use tools like https://realfavicongenerator.net/
- Upload your logo
- Download generated favicon package
- Replace all files in `assets/images/favicons/`

**Update site.webmanifest:**
```json
{
  "name": "Your Site Name",
  "short_name": "Your Name",
  "icons": [
    {
      "src": "/assets/images/favicons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

---

### 1.3 Update Site Title & Meta Tags 🟢

**Location:** `index.html` (lines 7-13)

```html
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Update these -->
    <title>Your Site Title | Your Tagline</title>
    <meta name="description" content="Your site description for SEO (150-160 characters max)" />

    <!-- Add Open Graph tags for social sharing -->
    <meta property="og:title" content="Your Site Title" />
    <meta property="og:description" content="Your description" />
    <meta property="og:image" content="https://yoursite.com/assets/images/og-image.jpg" />
    <meta property="og:url" content="https://yoursite.com" />

    <!-- Add Twitter Card tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Your Site Title" />
    <meta name="twitter:description" content="Your description" />
    <meta name="twitter:image" content="https://yoursite.com/assets/images/twitter-card.jpg" />
</head>
```

---

## 2. Header Customization

### 2.1 Update Phone Number 🟢

**Location:** Lines 94-102

```html
<div class="main-menu-three__call">
    <div class="main-menu-three__icon">
        <i class="fas fa-phone"></i>
    </div>
    <div class="main-menu-three__number">
        <a href="tel:+12345678900">+ 1 (234) 567-8900</a>
    </div>
</div>
```

**Note:** Use `tel:` format with country code (no spaces or dashes)

---

### 2.2 Update "Become a Volunteer" CTA 🟢

**Location:** Lines 84-93

```html
<div class="main-menu-three__volunteers">
    <div class="main-menu-three__volunteers-icon">
        <img src="assets/images/icon/main-menu-heart-icon-2.png" alt="Heart Icon">
    </div>
    <div class="main-menu-three__volunteers-text-box">
        <p class="main-menu-three__volunteers-text">
            <a href="your-page.html">Your Call to Action <span>Text</span></a>
        </p>
    </div>
</div>
```

**Options:**
- Change text: "Get Involved", "Support Us", "Donate Now"
- Change icon: Replace heart icon with your own
- Change link: Point to your signup/donation page

---

### 2.3 Customize Navigation Menu 🟡

**Location:** Lines 104-287

#### Simple Menu Updates:

**Change menu item text and links:**
```html
<ul class="main-menu__list">
    <li class="dropdown"><a href="#">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="contact.html">Contact</a></li>
</ul>
```

#### Remove Mega Menu (Homepage Demos):

**Find and delete** the entire mega menu section (lines ~120-245):
```html
<!-- DELETE THIS ENTIRE SECTION -->
<ul>
    <li>
        <div class="main-menu__home-showcase">
            <!-- All homepage demo images -->
        </div>
    </li>
</ul>
```

**Keep only:**
```html
<li><a href="index.html">Home</a></li>
```

#### Simplify Dropdowns:

**Before (with dropdown):**
```html
<li class="dropdown">
    <a href="#">Pages</a>
    <ul>
        <li><a href="page1.html">Page 1</a></li>
        <li><a href="page2.html">Page 2</a></li>
    </ul>
</li>
```

**After (single link):**
```html
<li><a href="page.html">Page</a></li>
```

---

### 2.4 Remove Shopping Cart 🟡

**Location:** Lines 297-303

**To remove cart icon completely:**
```html
<!-- DELETE these lines -->
<div class="main-menu-three__cart">
    <a href="cart.html"><i class="fas fa-shopping-cart"></i><span>0</span></a>
</div>
```

---

## 3. Hero Slider Customization

### 3.1 Replace Hero Images 🟢

**Images to Replace:**
1. `assets/images/backgrounds/main-slider-3-1.jpg`
2. `assets/images/backgrounds/main-slider-3-2.jpg`
3. `assets/images/backgrounds/main-slider-3-3.jpg`

**Recommended Specs:**
- **Size:** 1920x1080px or 1920x800px
- **Format:** JPG (optimized)
- **File size:** < 300KB each (compress with TinyJPG)
- **Content:** High-quality photos relevant to your mission

---

### 3.2 Update Hero Text 🟢

**Location:** Lines 344-411 (3 slides)

**Slide 1 Example (lines 344-365):**
```html
<div class="swiper-slide">
    <div class="image-layer" style="background-image: url(assets/images/backgrounds/main-slider-3-1.jpg);"></div>
    <div class="main-slider-three__shape-1"></div>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="main-slider-three__content">
                    <p class="main-slider-three__sub-title">
                        Your Subtitle Here
                    </p>
                    <h2 class="main-slider-three__title">
                        Your Main Headline<br> Goes Here
                    </h2>
                    <p class="main-slider-three__text">
                        Your description text goes here. Keep it concise and impactful.
                    </p>
                    <div class="main-slider-three__btn-box">
                        <a href="your-page.html" class="thm-btn main-slider-three__btn">
                            Your CTA Button
                        </a>
                        <a href="another-page.html" class="thm-btn main-slider-three__btn-2">
                            Secondary Button
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Tips:**
- Keep headlines short (5-10 words)
- Use line breaks (`<br>`) for dramatic effect
- Make CTAs action-oriented: "Get Started", "Learn More", "Join Us"

---

### 3.3 Remove Slides (Keep Only 1 Slide) 🟡

**To use a single hero image instead of slider:**

1. **Delete Slide 2 and 3** (lines ~367-411)
2. **Remove Swiper navigation/pagination** (lines ~413-423)
3. **Update oxpins.js** to disable Swiper (see Advanced section)

**Or simply hide extra slides:**
```html
<!-- Add style="display:none;" to slides 2 and 3 -->
<div class="swiper-slide" style="display:none;">
    <!-- Slide content -->
</div>
```

---

## 4. Content Section Customization

### 4.1 About Section - Replace Images 🟢

**Images to replace:**
1. `assets/images/resources/about-three-img.jpg` (main large image)
2. `assets/images/resources/about-three-img-2.jpg` (overlay image)

**Update text (lines 502-527):**
```html
<div class="about-three__right">
    <div class="section-title text-left">
        <span class="section-title__tagline">Your Subtitle</span>
        <h2 class="section-title__title">Your About Heading</h2>
    </div>
    <p class="about-three__text-1">Your first paragraph...</p>
    <p class="about-three__text-2">Your second paragraph...</p>
    <ul class="list-unstyled about-three__points">
        <li>
            <div class="icon"><i class="fa fa-check"></i></div>
            <div class="text"><p>Your bullet point 1</p></div>
        </li>
        <li>
            <div class="icon"><i class="fa fa-check"></i></div>
            <div class="text"><p>Your bullet point 2</p></div>
        </li>
    </ul>
</div>
```

---

### 4.2 Feature Cards - Update Content 🟢

**Location:** Lines 532-574 (3 feature cards)

**Card 1 Example:**
```html
<div class="col-xl-4 col-lg-4 col-md-4">
    <div class="feature-three__single">
        <div class="feature-three__img">
            <img src="assets/images/resources/feature-3-1.png" alt="Your Feature">
            <div class="feature-three__icon">
                <span class="icon-solidarity"></span>
            </div>
        </div>
        <div class="feature-three__content">
            <h3 class="feature-three__title">
                <a href="your-page.html">Your Feature Title</a>
            </h3>
            <p class="feature-three__text">Your feature description goes here.</p>
            <a href="your-page.html" class="feature-three__arrow">
                <span class="icon-right-arrow"></span>Learn More
            </a>
        </div>
    </div>
</div>
```

**Repeat for cards 2 and 3**, updating images and content.

---

### 4.3 Donation Causes - Update Campaigns 🟡

**Location:** Lines 577-725 (4 donation cards)

**Important Elements to Update:**

1. **Category Badge:** Change "EDUCATION" to your category
2. **Title:** Your cause/campaign name
3. **Images:** Replace `causes-3-X.jpg`
4. **Goal Amount:** Update `$30,000` to your goal
5. **Raised Amount:** Update `$25,270` to current amount
6. **Progress Percentage:** Update style width (`data-percent="70"`)
7. **Days Left:** Update countdown number
8. **Supporters Count:** Update number

**Example:**
```html
<div class="causes-three__single">
    <div class="causes-three__img">
        <img src="assets/images/resources/causes-3-1.jpg" alt="Your Cause">
        <div class="causes-three__cat">
            <p>YOUR CATEGORY</p>
        </div>
    </div>
    <div class="causes-three__content">
        <h3 class="causes-three__title">
            <a href="cause-details.html">Your Cause Title</a>
        </h3>
        <div class="causes-three__progress">
            <div class="causes-three__progress-shape"></div>
            <div class="bar">
                <div class="bar-inner count-bar" data-percent="75%">
                    <div class="count-text">75%</div>
                </div>
            </div>
            <div class="causes-three__goals">
                <p><span>$5,000</span> Raised</p>
                <p><span>$20,000</span> Goal</p>
            </div>
        </div>
        <div class="causes-three__bottom">
            <ul class="list-unstyled causes-three__list">
                <li>
                    <div class="icon"><span class="icon-target"></span></div>
                    <div class="text"><p>Goal : <span>$20,000</span></p></div>
                </li>
                <li>
                    <div class="icon"><span class="icon-solidarity"></span></div>
                    <div class="text"><p>Raised : <span>$5,000</span></p></div>
                </li>
            </ul>
            <div class="causes-three__btn-box">
                <a href="donate.html" class="thm-btn causes-three__btn">Donate Now</a>
            </div>
        </div>
    </div>
</div>
```

---

### 4.4 Testimonials - Update Reviews 🟢

**Location:** Lines 728-848

**For each testimonial:**
1. Replace photo: `testimonial-3-X.jpg`
2. Update quote text
3. Change client name
4. Update client title/role

**Example:**
```html
<div class="testimonial-three__single">
    <div class="testimonial-three__rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
    </div>
    <p class="testimonial-three__text">
        "Your testimonial quote goes here. Keep it authentic and specific."
    </p>
    <div class="testimonial-three__client-info">
        <div class="testimonial-three__client-img">
            <img src="assets/images/testimonial/testimonial-3-1.jpg" alt="Client Name">
        </div>
        <div class="testimonial-three__client-details">
            <h4 class="testimonial-three__client-name">Client Name</h4>
            <p class="testimonial-three__client-sub-title">Client Title</p>
        </div>
    </div>
</div>
```

---

### 4.5 Blog/News Posts 🟢

**Location:** Lines 1001-1142

**Update each blog card:**
1. Replace image: `news-1-X.jpg`
2. Change category badge
3. Update title
4. Change link destination
5. Update comment count
6. Change author name

---

### 4.6 Gallery Images 🟢

**Location:** Lines 1145-1203

**Simply replace these images:**
1. `gallery-1-1.jpg`
2. `gallery-1-2.jpg`
3. `gallery-1-3.jpg`
4. `gallery-1-4.jpg`
5. `gallery-1-5.jpg`

**Format:** JPG, optimized, various sizes (500-800px width)

---

## 5. Footer Customization

### 5.1 Update Footer Content 🟢

**Location:** Lines 1225-1317

**Company Info (Column 1):**
```html
<div class="footer-widget__about-text-box">
    <p class="footer-widget__about-text">
        Your company description or mission statement goes here.
    </p>
</div>
```

**Update Links (Columns 2-3):**
- Replace link text and URLs
- Add/remove links as needed
- Keep structure consistent

**Contact Info (Column 4):**
```html
<div class="footer-widget__contact">
    <ul class="footer-widget__contact-list list-unstyled">
        <li>
            <div class="icon"><span class="icon-location"></span></div>
            <div class="text"><p>Your Address Here</p></div>
        </li>
        <li>
            <div class="icon"><span class="icon-email"></span></div>
            <div class="text"><p><a href="mailto:your@email.com">your@email.com</a></p></div>
        </li>
        <li>
            <div class="icon"><span class="icon-phone-call"></span></div>
            <div class="text"><p><a href="tel:+12345678900">+ 1 (234) 567-8900</a></p></div>
        </li>
    </ul>
</div>
```

---

### 5.2 Update Social Media Links 🟢

**Location:** Lines 1288-1296

```html
<div class="footer-widget__social">
    <a href="https://twitter.com/yourhandle"><i class="fab fa-twitter"></i></a>
    <a href="https://facebook.com/yourpage"><i class="fab fa-facebook"></i></a>
    <a href="https://pinterest.com/yourprofile"><i class="fab fa-pinterest-p"></i></a>
    <a href="https://instagram.com/youraccount"><i class="fab fa-instagram"></i></a>
    <!-- Add more as needed -->
    <a href="https://linkedin.com/company/yourcompany"><i class="fab fa-linkedin"></i></a>
    <a href="https://youtube.com/yourchannel"><i class="fab fa-youtube"></i></a>
</div>
```

---

### 5.3 Update Copyright 🟢

**Location:** Lines 1308-1310

```html
<div class="site-footer__bottom-left">
    <p class="site-footer__bottom-text">
        © Copyright 2025 by <a href="#">YourCompany.com</a>
    </p>
</div>
```

---

## 6. Color Customization

### 6.1 Primary Color Change 🔴

**Location:** `assets/css/oxpins.css`

The primary brand color is used throughout the theme. To change it:

**Option 1: Find and Replace (Easy but Manual)**
1. Open `oxpins.css`
2. Find the primary color hex (likely `#fc5528` or similar)
3. Replace all instances with your brand color

**Option 2: CSS Variables (Recommended)**

Add this to the top of `oxpins.css`:
```css
:root {
  --primary-color: #YOUR_COLOR_HEX;
  --primary-hover: #YOUR_DARKER_COLOR;
  --secondary-color: #YOUR_SECONDARY_COLOR;
}
```

Then update theme colors to use variables:
```css
.thm-btn {
  background-color: var(--primary-color);
}
.thm-btn:hover {
  background-color: var(--primary-hover);
}
```

---

### 6.2 Common Color Classes 🟡

**Primary Buttons:**
```css
.thm-btn {
  background-color: #YOUR_COLOR;
}
```

**Links:**
```css
a {
  color: #YOUR_COLOR;
}
a:hover {
  color: #YOUR_HOVER_COLOR;
}
```

**Section Titles:**
```css
.section-title__tagline {
  color: #YOUR_COLOR;
}
```

---

## 7. Typography Customization

### 7.1 Change Google Fonts 🟡

**Location:** `index.html` (lines 20-27)

**Current fonts:**
- Nunito (primary)
- Manrope (secondary)
- Caveat (accent)

**To change:**

1. **Choose new fonts** from Google Fonts
2. **Replace font links:**
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap" rel="stylesheet">
```

3. **Update CSS** in `oxpins.css`:

Find and replace:
```css
/* Find */
font-family: 'Nunito', sans-serif;

/* Replace with */
font-family: 'Your Font', sans-serif;
```

---

### 7.2 Adjust Font Sizes 🟡

**Global Size Adjustments:**

Add to top of `oxpins.css`:
```css
html {
  font-size: 16px; /* Default, adjust up or down */
}

body {
  font-size: 1rem; /* Uses html font-size as base */
}

h1 { font-size: 3rem; }
h2 { font-size: 2.5rem; }
h3 { font-size: 2rem; }
/* etc. */
```

---

## 8. Advanced Customizations

### 8.1 Disable Custom Cursor 🟡

**In index.html:**
1. Remove `custom-cursor` class from `<body>` tag (line 55)
2. Delete cursor divs (lines 57-58)

**Or hide with CSS:**
```css
.custom-cursor__cursor,
.custom-cursor__cursor-two {
  display: none !important;
}
```

---

### 8.2 Disable Preloader 🟡

**Option 1: Remove from HTML**
Delete lines 64-66

**Option 2: Hide with CSS:**
```css
.preloader {
  display: none !important;
}
```

---

### 8.3 Adjust Slider Settings 🔴

**Location:** `assets/js/oxpins.js`

Find the Swiper initialization (search for "mainSliderOptions"):

```javascript
var mainSliderOptions = {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000, // Change delay (milliseconds)
  },
  speed: 1000, // Transition speed
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
};
```

**Common changes:**
- `delay: 3000` - Faster autoplay (3 seconds)
- `loop: false` - Disable looping
- `autoplay: false` - Disable autoplay
- `effect: 'slide'` - Change to slide effect

---

### 8.4 Configure WOW.js Animations 🟡

**Location:** `assets/js/oxpins.js`

Find WOW initialization:
```javascript
new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 100, // Distance to trigger (pixels from viewport)
  mobile: true, // Animations on mobile
  live: true
}).init();
```

**To disable animations:**
```javascript
// Comment out or remove WOW initialization
// new WOW().init();
```

**Or remove `wow` classes** from HTML elements

---

## 9. Mobile Optimization

### 9.1 Mobile-Specific Adjustments 🟡

Add to `oxpins.css`:

```css
/* Mobile-only styles */
@media (max-width: 767px) {
  /* Increase touch target sizes */
  .thm-btn {
    padding: 15px 30px;
    font-size: 16px;
  }

  /* Reduce hero text size */
  .main-slider-three__title {
    font-size: 32px;
  }

  /* Stack elements */
  .feature-three__single {
    margin-bottom: 30px;
  }
}
```

---

## 10. Performance Optimization

### 10.1 Image Optimization 🟢

**Required for all images:**

1. **Compress images** - Use TinyJPG or ImageOptim
2. **Target file sizes:**
   - Hero images: < 300KB each
   - Content images: < 150KB each
   - Thumbnails: < 50KB each

3. **Convert to WebP** (optional):
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

---

### 10.2 Lazy Loading 🟡

Add `loading="lazy"` to images below the fold:

```html
<img src="assets/images/resources/about-three-img.jpg"
     alt="About Us"
     loading="lazy">
```

---

## 11. SEO Optimization

### 11.1 Add Structured Data 🟡

Add to `<head>` section:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Organization",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/assets/images/resources/logo-2.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-234-567-8900",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://facebook.com/yourpage",
    "https://twitter.com/yourhandle",
    "https://instagram.com/youraccount"
  ]
}
</script>
```

---

### 11.2 Add Alt Text to All Images 🟢

**Current (bad):**
```html
<img src="assets/images/resources/logo-2.png" alt="">
```

**Fixed (good):**
```html
<img src="assets/images/resources/logo-2.png" alt="Your Company Logo">
```

**Do this for ALL images on the page!**

---

## 12. Contact Form Setup

### 12.1 Configure PHP Mailer 🔴

**Location:** `assets/inc/sendemail.php`

**Update these settings:**
```php
// SMTP Configuration
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_SECURE', 'tls');
define('SMTP_USERNAME', 'your-email@gmail.com');
define('SMTP_PASSWORD', 'your-app-password'); // Use App Password, not regular password
define('SMTP_FROM', 'your-email@gmail.com');
define('SMTP_FROM_NAME', 'Your Website');
define('RECIPIENT_EMAIL', 'recipient@yourdomain.com');
```

**Gmail App Password Setup:**
1. Go to Google Account settings
2. Security → 2-Step Verification
3. App passwords → Generate
4. Use generated password in PHP file

---

## Common Issues & Solutions

### Issue: Icons Not Showing

**Solution:**
- Check Font Awesome CSS loaded
- Check Oxpins Icons CSS loaded
- Verify font files in correct paths
- Check browser console for 404 errors

### Issue: Sliders Not Working

**Solution:**
- Ensure jQuery loads first
- Check Swiper/Owl JS loaded
- Verify oxpins.js loads last
- Check browser console for JS errors

### Issue: Animations Not Triggering

**Solution:**
- Verify WOW.js loaded
- Check Animate.css loaded
- Ensure elements have `wow` class
- Test by removing `wow` class temporarily

### Issue: Mobile Menu Not Opening

**Solution:**
- Check Bootstrap JS loaded
- Verify mobile nav HTML present
- Test hamburger icon click event
- Check for JavaScript errors

---

## Quick Reference

**Most Common Edits:**
1. Logo: line 77, 1237
2. Phone: line 99
3. Hero text: lines 344-411
4. Navigation: lines 104-287
5. Footer: lines 1225-1317
6. Copyright: line 1308

**Key CSS Classes:**
- `.thm-btn` - Primary button
- `.section-title` - Section headings
- `.main-slider-three` - Hero slider
- `.causes-three` - Donation cards
- `.testimonial-three` - Reviews

**Important Files:**
- `index.html` - Main HTML
- `assets/css/oxpins.css` - Main styles
- `assets/js/oxpins.js` - Main JavaScript

---

**Last Updated:** 2025-11-17
**Difficulty:** 🟢 Easy | 🟡 Medium | 🔴 Advanced