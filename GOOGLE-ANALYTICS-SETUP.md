# Google Analytics & Google Ads Setup — TCC March Static Site

## Overview

When the TCC March site goes live at **tincupchallenge.org**, we need to add the Google Analytics (GA4) and Google Ads tracking tags. The original site uses a WordPress plugin called SiteKit, but since this is a static Eleventy site, we'll add the tracking code directly to the HTML.

**Tracking IDs:**
- GA4 Measurement ID: `G-RPLQCMYREV`
- Google Ads ID: `AW-10800163766`

---

## Step 1: Add the Google Tag to the Base Layout

Open the base layout file:

```
src/_layouts/base.njk
```

Add the following snippet inside the `<head>` tag, ideally right before the closing `</head>`:

```html
<!-- Google tag (gtag.js) - GA4 + Google Ads -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RPLQCMYREV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('set', 'linker', {'domains': ['cftetonvalley.org']});
  gtag('config', 'G-RPLQCMYREV');
  gtag('config', 'AW-10800163766');
</script>
```

This is a cleaned-up version of the SiteKit snippet. It includes:
- The gtag.js loader script
- GA4 configuration (`G-RPLQCMYREV`)
- Google Ads configuration (`AW-10800163766`)
- Cross-domain linker to `cftetonvalley.org` (so sessions are tracked across both domains)

---

## Step 2: Verify Placement

The tag should appear on **every page** of the site. Since `base.njk` is the shared layout, adding it there ensures all pages include it.

Your `<head>` section should look something like this:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
    <!-- ... other meta tags, stylesheets ... -->

    <!-- Google tag (gtag.js) - GA4 + Google Ads -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RPLQCMYREV"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('set', 'linker', {'domains': ['cftetonvalley.org']});
      gtag('config', 'G-RPLQCMYREV');
      gtag('config', 'AW-10800163766');
    </script>
</head>
```

---

## Step 3: Test After Launch

1. **Real-time report:** Go to [Google Analytics](https://analytics.google.com/) > Real-time to verify hits are coming in
2. **Google Tag Assistant:** Use the [Tag Assistant Chrome extension](https://tagassistant.google.com/) to verify both the GA4 and Google Ads tags are firing correctly
3. **Check cross-domain linking:** Visit both `tincupchallenge.org` and `cftetonvalley.org` and confirm sessions are linked (look for `_gl` parameter in URLs when navigating between domains)

---

## What Was Removed from the SiteKit Snippet

The original SiteKit snippet included extra code for:
- `developer_id.dZTNiMT` — SiteKit developer tracking (not needed)
- `window._googlesitekit` throttled events — SiteKit-specific event handling (not needed)
- `event_source: "site-kit"` — SiteKit attribution (not needed)

The cleaned-up version above contains only what's needed for GA4 and Google Ads tracking.

---

## Important: Do NOT Add Before Launch

Do **not** add this tracking code until the site is live at its final domain. Adding it while the site is in development or on a staging URL will pollute the analytics data with test traffic.

---

## Reference

- [Google Analytics 4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Google Ads Conversion Tracking](https://support.google.com/google-ads/answer/6095821)
- [Cross-domain Measurement](https://support.google.com/analytics/answer/10071811)
