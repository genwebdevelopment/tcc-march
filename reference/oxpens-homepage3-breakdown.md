# Oxpens Homepage 3 - Complete Component Breakdown

**Created:** 2025-11-17
**Source File:** `oxpins-theme/oxpins-main-html/index3.html`

---

## Page Structure Overview

Homepage 3 is a single-page layout with 12 main sections plus header and footer. The page uses a custom cursor, preloader animation, and extensive scroll-triggered animations throughout.

**Total Sections:** 14 (Header + 12 Content Sections + Footer)
**Estimated Page Height:** ~8000-10000px (full scroll)
**Layout:** Full-width, responsive, single column

---

## Component Hierarchy

```
index3.html
├── Custom Cursor (2 divs)
├── Preloader
├── Page Wrapper
│   ├── Header (Main Header Three)
│   │   ├── Top Bar (Volunteers + Phone)
│   │   ├── Logo
│   │   ├── Navigation Menu
│   │   │   └── Mega Menu (Homepage Demos)
│   │   ├── Search Icon
│   │   └── Cart Icon
│   │
│   ├── Main Slider (Hero Section)
│   │   └── 3 Slides (Swiper)
│   │
│   ├── Make Donation (Featured Campaign)
│   │
│   ├── About Three
│   │   ├── Images (2)
│   │   └── Content + Stats
│   │
│   ├── Feature Three
│   │   └── 3 Feature Cards
│   │
│   ├── Causes Three
│   │   └── 4 Donation Causes
│   │
│   ├── Testimonial Three
│   │   └── Testimonial Carousel (Owl)
│   │
│   ├── Brand One
│   │   └── Brand Carousel (Swiper)
│   │
│   ├── Events Two
│   │   └── 2 Event Cards
│   │
│   ├── News One
│   │   └── 3 Blog Posts
│   │
│   ├── Gallery Three
│   │   └── 5 Gallery Images
│   │
│   ├── Become Volunteer (CTA)
│   │
│   └── Site Footer
│       ├── Footer Widgets (4 columns)
│       └── Footer Bottom (Copyright)
│
├── Mobile Nav (Off-canvas)
├── Search Popup (Modal)
└── Scroll To Top Button
```

---

## Detailed Section Breakdown

### 1. Custom Cursor (Lines 57-58)

**HTML:**
```html
<div class="custom-cursor__cursor"></div>
<div class="custom-cursor__cursor-two"></div>
```

**Purpose:** Custom animated cursor that follows mouse movement

**Features:**
- Primary cursor (larger circle)
- Secondary cursor (smaller dot)
- Follows mouse with delay effect
- Changes on hover interactions

**Body Class:** `custom-cursor` (line 55)

**Customization:** Can be disabled by removing body class and these divs

---

### 2. Preloader (Lines 64-66)

**HTML:**
```html
<div class="preloader">
    <div class="preloader__image"></div>
</div>
```

**Purpose:** Loading animation displayed while page loads

**Features:**
- Covers entire viewport
- Animated logo/spinner
- Fades out when page ready
- Controlled by oxpins.js

**Image:** Uses CSS background image (check oxpins.css for `preloader__image`)

---

### 3. Header - Main Header Three (Lines 71-335)

**Structure:**
- Sticky navigation (fixed on scroll)
- Two-level layout: Top bar + Main nav
- Logo on left, nav menu center, actions right

#### Top Bar Elements:

**Volunteers CTA (Lines 84-93):**
- Icon: `assets/images/icon/main-menu-heart-icon-2.png`
- Text: "Become a volunteers"
- Link: `become-volunteer.html`

**Phone Number (Lines 94-102):**
- Icon: Font Awesome phone icon
- Number: `+ 98 (000) - 9630`
- Clickable tel: link

#### Logo (Lines 76-78):
- Image: `assets/images/resources/logo-2.png`
- Link: `index.html`
- Alt text: empty (should add alt text)

#### Navigation Menu (Lines 104-287):

**Main Menu Items:**
1. **Home** - Mega menu with 7 homepage demos
2. **Donation** - Dropdown with 5 donation pages
3. **Events** - Dropdown with 3 event pages
4. **News** - Dropdown with 5 blog/news pages
5. **Pages** - Dropdown with additional pages
6. **About**
7. **Contact**

**Mega Menu Features:**
- Homepage showcase images (7 variants)
- Preview thumbnails for each homepage
- Images: `assets/images/home-showcase/home-1-1.png` through `home-1-7.png`

#### Header Actions (Lines 288-303):

**Search Icon:**
- Opens search popup overlay
- Font Awesome search icon
- Class: `search-toggler`

**Shopping Cart:**
- Cart icon with badge (count: 0)
- Link: `cart.html`
- Font Awesome shopping cart icon

**Mobile Menu Toggle (Lines 305-310):**
- Hamburger icon
- Opens off-canvas mobile menu
- Only visible on mobile/tablet

---

### 4. Main Slider - Hero Section (Lines 337-423)

**Type:** Swiper slider with fade effect
**Slides:** 3 full-width hero slides
**Container:** `.main-slider-three`

#### Slide 1 (Lines 344-365):
- **Background:** `assets/images/backgrounds/main-slider-3-1.jpg`
- **Content:**
  - Subtitle: "Welcome to oxpins charity"
  - Heading: "Lend a Helping Hand to those in Need"
  - Text: "There are many variations of passages of lorem ipsum available the majority."
  - Button 1: "Discover More" (primary button)
  - Button 2: "Learn More" (secondary button)

#### Slide 2 (Lines 367-388):
- **Background:** `assets/images/backgrounds/main-slider-3-2.jpg`
- **Content:** Similar structure to Slide 1
  - Different heading: "Lend a Helping Hand to those in Need"
  - Same CTA buttons

#### Slide 3 (Lines 390-411):
- **Background:** `assets/images/backgrounds/main-slider-3-3.jpg`
- **Content:** Similar structure
  - Different heading variation

#### Slider Controls:
- **Navigation:** Arrows (prev/next)
- **Pagination:** Bullet dots
- **Autoplay:** Yes (configured in oxpins.js)
- **Transition:** Fade effect
- **Loop:** Yes

**Swiper Configuration (in oxpins.js):**
```javascript
// mainSliderOptions configuration
effect: 'fade',
autoplay: { delay: 5000 },
loop: true,
navigation: true,
pagination: true
```

---

### 5. Make Donation - Featured Campaign (Lines 427-478)

**Container:** `.make-donation`
**Layout:** Single featured donation card

#### Components:

**Image (Lines 432-436):**
- File: `assets/images/resources/make-donation-img-1.jpg`
- Alt: "Donation campaign"
- Badge: "MEDICAL" category

**Content (Lines 438-476):**
- **Title:** "Give African Child a Good Education"
- **Text:** Description (1 paragraph)
- **Progress Bar:**
  - Raised: $25,270 (goal: $30,000)
  - Visual progress bar with percentage
  - Shape overlay: `assets/images/shapes/causes-one-progress-shape-1.png`
- **Stats:**
  - Goal: $30,000
  - Raised: $25,270
  - To Go: $4,730
- **Button:** "Discover More"

---

### 6. About Three Section (Lines 481-529)

**Container:** `.about-three`
**Layout:** 2-column (images left, content right)

#### Left Column - Images (Lines 486-500):

**Image 1:**
- File: `assets/images/resources/about-three-img.jpg`
- Main large image

**Image 2:**
- File: `assets/images/resources/about-three-img-2.jpg`
- Overlay image (positioned absolutely)
- Badge: "Since 1950" with heart icon

**Shape Overlay:**
- File: `assets/images/shapes/about-three-help-shape.png`
- Decorative element

#### Right Column - Content (Lines 502-527):

**Text Content:**
- Subtitle: "We are helping people since 1950"
- Heading: "We are helping people from around world"
- Description: 2 paragraphs
- List: 3 checkmark items
- Button: "Discover More"

**Statistics (Animated Counters):**
- Not explicitly shown in this section (may be integrated)

---

### 7. Feature Three - Icon Boxes (Lines 532-574)

**Container:** `.feature-three`
**Layout:** 3 columns (equal width)

#### Feature Card 1 - Partner (Lines 540-548):
- **Image:** `assets/images/resources/feature-3-1.png`
- **Icon:** Heart icon (decorative circle)
- **Title:** "Our Partner"
- **Text:** "There are many variations of passages of lorem ipsum available but the majority."
- **Link:** "Learn More"

#### Feature Card 2 - Our Mission (Lines 551-559):
- **Image:** `assets/images/resources/feature-3-2.png`
- **Title:** "Our Mission"
- **Text:** Similar description
- **Link:** "Learn More"

#### Feature Card 3 - Our Vision (Lines 562-570):
- **Image:** `assets/images/resources/feature-3-3.png`
- **Title:** "Our Vision"
- **Text:** Similar description
- **Link:** "Learn More"

---

### 8. Causes Three - Donation Campaigns (Lines 577-725)

**Container:** `.causes-three`
**Background:** `assets/images/backgrounds/causes-three-bg.jpg`
**Layout:** 4 columns (donation cards)

**Section Header (Lines 581-591):**
- Subtitle: "HELP US NOW"
- Heading: "We are in a Mission to Help the Helpless"
- Button: "All Causes"

#### Cause Card 1 (Lines 601-648):
- **Image:** `assets/images/resources/causes-3-1.jpg`
- **Category:** "EDUCATION" badge
- **Title:** "Give african child a good education"
- **Progress Bar:**
  - Goal: $30,000
  - Raised: $25,270
  - Progress shape overlay
- **Stats:**
  - Goal: $30,000
  - Raised: $25,270
  - Days left: 20 (countdown)
  - Total supporters: 120
- **Button:** "Donation Now"

#### Cause Cards 2-4:
- **Images:** `causes-3-2.jpg`, `causes-3-3.jpg`, `causes-3-4.jpg`
- **Categories:** Various (EDUCATION, MEDICAL, etc.)
- **Same structure** as Card 1 with different values

**Shape Overlay:**
- File: `assets/images/shapes/causes-three-shape-1.png`
- Decorative bottom element

---

### 9. Testimonial Three - Reviews (Lines 728-848)

**Container:** `.testimonial-three`
**Type:** Owl Carousel slider
**Items Visible:** 2 testimonials at once

**Section Header (Lines 732-740):**
- Subtitle: "OUR testimonials"
- Heading: "What they are talking about oxpins"

#### Testimonial Card Structure:

**Each testimonial includes:**
- 5-star rating (Font Awesome stars)
- Quote text
- Client photo
- Client name
- Client title/role

#### Testimonial 1 (Lines 748-768):
- **Image:** `assets/images/testimonial/testimonial-3-1.jpg`
- **Name:** "Kevin martin"
- **Role:** "Volunteer"
- **Quote:** Lorem ipsum text
- **Rating:** 5 stars

#### Testimonials 2-3:
- **Images:** `testimonial-3-2.jpg`, `testimonial-3-3.jpg`
- Same structure, different content

**Shape Overlays:**
- 3 decorative shapes: `assets/images/shapes/testimonial-three-shape-1.png`
- Positioned around the section

**Carousel Config:**
- 2 items visible (desktop)
- 1 item (mobile)
- Loop: Yes
- Autoplay: Yes
- Navigation: Dots

---

### 10. Brand One - Partner Logos (Lines 851-922)

**Container:** `.brand-one`
**Type:** Swiper carousel
**Items:** 6 brand logos

**Logos:**
1. `assets/images/brand/brand-1-1.png`
2. `assets/images/brand/brand-1-2.png`
3. `assets/images/brand/brand-1-3.png`
4. `assets/images/brand/brand-1-4.png`
5. `assets/images/brand/brand-1-5.png`
6. `assets/images/brand/brand-1-6.png`

**Features:**
- Grayscale by default
- Color on hover
- Autoplay loop
- Multiple items visible
- Responsive (different counts per breakpoint)

**Shape Overlay:**
- File: `assets/images/shapes/brand-three-shape-1.png`

**Swiper Config:**
- 6 items (desktop)
- 4 items (tablet)
- 2 items (mobile)
- Autoplay: Yes
- Loop: Yes

---

### 11. Events Two - Upcoming Events (Lines 925-998)

**Container:** `.events-two`
**Background:** `assets/images/backgrounds/events-two-bg.png`
**Layout:** 2 columns (event cards)

**Section Header (Lines 929-937):**
- Subtitle: "Upcoming events"
- Heading: "Join our latest upcoming events"

#### Event Card 1 (Lines 945-968):
- **Image:** `assets/images/events/events-2-1.jpg`
- **Date Badge:** "20 Oct" with calendar icon
- **Title:** "Play for the world with us"
- **Details:**
  - Time: "8:00am - 5:00pm"
  - Location: "Cargo mall, Airport"
- **Button:** "Event Details"

#### Event Card 2 (Lines 970-994):
- **Image:** `assets/images/events/events-2-2.jpg`
- Same structure as Card 1

**Shape Overlays:**
- 2 shapes: `events-two-shape-1.png` and `events-two-shape-2.png`

---

### 12. News One - Blog Posts (Lines 1001-1142)

**Container:** `.news-one`
**Layout:** 3 columns (blog post cards)

**Section Header (Lines 1005-1013):**
- Subtitle: "NEWS & articles"
- Heading: "Directly from the latest news and articles"

#### News Card 1 (Lines 1023-1069):
- **Image:** `assets/images/blog/news-1-1.jpg`
- **Category:** "Education" badge
- **Meta:**
  - Comments: 2
  - Author: "Admin" (with user icon)
- **Title:** "There are many variations of passages of lorem ipsum"
- **Button:** "Read More"

#### News Cards 2-3:
- **Images:** `news-1-2.jpg`, `news-1-3.jpg`
- Same structure, different content

---

### 13. Gallery Three - Photo Gallery (Lines 1145-1203)

**Container:** `.gallery-three`
**Type:** Lightbox gallery (Magnific Popup)
**Layout:** Masonry/Grid (5 images)

**Images:**
1. `assets/images/gallery/gallery-1-1.jpg`
2. `assets/images/gallery/gallery-1-2.jpg`
3. `assets/images/gallery/gallery-1-3.jpg`
4. `assets/images/gallery/gallery-1-4.jpg`
5. `assets/images/gallery/gallery-1-5.jpg`

**Features:**
- Click to open lightbox
- Image zoom
- Gallery navigation
- Responsive grid

**Each Gallery Item Has:**
- Image
- Overlay on hover
- Plus icon (zoom in)

---

### 14. Become Volunteer - CTA (Lines 1206-1222)

**Container:** `.become-volunteer-two`
**Type:** Call-to-action banner

**Content:**
- Icon: Heart icon (oxpins-icons)
- Heading: "Join your hand with us for a better life and beautiful future."
- Button: "Discover More"

**Style:** Full-width banner with centered content

---

### 15. Site Footer (Lines 1225-1317)

**Background:** `assets/images/backgrounds/site-footer-bg.jpg`
**Layout:** 4-column footer + bottom bar

#### Footer Top (Lines 1229-1301):

**Column 1 - About Widget (Lines 1234-1245):**
- Logo: `assets/images/resources/footer-logo.png`
- Description text
- Company tagline

**Column 2 - Explore Widget (Lines 1247-1260):**
- **Title:** "Explore"
- **Links:**
  - About
  - Our Causes
  - New Campaign
  - Site Map
  - Events

**Column 3 - News Widget (Lines 1262-1276):**
- **Title:** "News"
- **Links:**
  - Recent News
  - Our Projects
  - Help & FAQs
  - Donations
  - Contacts

**Column 4 - Contact Widget (Lines 1278-1297):**
- **Title:** "Address"
- **Contact Info:**
  - Address: "66 broklyn street new york"
  - Phone: "+ 98 (000) - 9630"
  - Email: "needhelp@oxpins.com"
- **Social Links:**
  - Twitter
  - Facebook
  - Pinterest
  - Instagram

#### Footer Bottom (Lines 1303-1313):
- Copyright: "© Copyright 2021 by layerdrops.com"
- Terms & Privacy links

---

### 16. Mobile Nav (Lines 1323-1361)

**Container:** `.mobile-nav__wrapper`
**Type:** Off-canvas slide-in menu

**Elements:**
- Close button
- Logo
- Mobile menu (cloned from main nav)
- Contact info
- Social links

**Behavior:**
- Slides in from left
- Overlay background
- Touch-enabled scrolling

---

### 17. Search Popup (Lines 1363-1377)

**Container:** `.search-popup`
**Type:** Full-screen overlay modal

**Elements:**
- Close button
- Search form
- Search input field
- Submit button

**Behavior:**
- Triggered by search icon in header
- Fades in overlay
- Focus on input field
- Close on ESC or click outside

---

### 18. Scroll To Top Button (Line 1379)

**Element:** `.scroll-to-top`

**Features:**
- Fixed position (bottom-right)
- Appears on scroll down
- Smooth scroll to top
- Arrow icon

---

## JavaScript Requirements

**Loaded Scripts (in order):**

1. jQuery 3.6.0
2. Bootstrap Bundle
3. Jarallax
4. AjaxChimp
5. jQuery Appear
6. jQuery Circle Progress
7. Magnific Popup
8. jQuery Validate
9. noUiSlider
10. Odometer
11. Swiper
12. Tiny Slider
13. wNumb
14. WOW.js
15. Isotope
16. Countdown
17. Owl Carousel
18. BX Slider
19. Bootstrap Select
20. Vegas
21. jQuery UI
22. Time Picker
23. CircleType
24. Lettering
25. **oxpins.js** (main initialization script)

---

## Animations & Effects

### WOW.js Animations:
- Used throughout all sections
- Trigger on scroll
- Classes: `wow fadeInUp`, `wow fadeInLeft`, `wow fadeInRight`
- Delays: `data-wow-delay="100ms"` through `data-wow-delay="500ms"`

### Interactive Effects:
- Custom cursor following
- Sticky header on scroll
- Progress bar animations
- Counter animations (Odometer)
- Hover effects on cards
- Image hover overlays
- Parallax backgrounds (Jarallax)

---

## Responsive Breakpoints

Based on Bootstrap 5.x:
- **XS:** < 576px (Mobile portrait)
- **SM:** ≥ 576px (Mobile landscape)
- **MD:** ≥ 768px (Tablet portrait)
- **LG:** ≥ 992px (Tablet landscape / Small desktop)
- **XL:** ≥ 1200px (Desktop)
- **XXL:** ≥ 1400px (Large desktop)

**Mobile-Specific Features:**
- Hamburger menu (< 992px)
- Stacked columns
- Single-item carousels
- Reduced font sizes
- Touch-friendly buttons

---

## Content to Replace

When customizing Homepage 3, replace:

1. **Text Content:**
   - All headings
   - All body text
   - All button text
   - Menu items
   - Contact information

2. **Images (50+ files):**
   - Logo (2 versions)
   - Favicons (4 files)
   - Hero slides (3 backgrounds)
   - About section (2 images)
   - Features (3 images)
   - Donation causes (4 images)
   - Testimonials (3 photos)
   - Events (2 images)
   - Blog posts (3 images)
   - Gallery (5 images)
   - Brand logos (6 images)
   - Background images (6 files)
   - Shape overlays (as needed)

3. **Links:**
   - Navigation URLs
   - Button destinations
   - Social media links
   - External links

4. **Metadata:**
   - Page title
   - Meta description
   - Favicon
   - Open Graph tags (add if needed)

---

## Performance Notes

**Large Assets:**
- Hero background images (likely 300-500KB each)
- Multiple carousel images
- Total page weight: Estimate 3-5MB

**Optimization Needed:**
- Compress all images
- Implement lazy loading
- Minify CSS/JS (production)
- Consider WebP format
- Add CDN for static assets

---

## Quick Reference

**Total Sections:** 14
**Total Images:** ~50 files
**Hero Slider:** 3 slides (Swiper)
**Donation Causes:** 4 cards
**Testimonials:** 3 items (Owl Carousel, 2 visible)
**Blog Posts:** 3 cards
**Events:** 2 cards
**Gallery:** 5 images
**Brand Logos:** 6 items
**Footer Columns:** 4

---

**Last Updated:** 2025-11-17
**File Reference:** `oxpins-theme/oxpins-main-html/index3.html`