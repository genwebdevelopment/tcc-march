# Changes to Apply to Full TCC Website

This document tracks changes made in the `tcc-march` project that need to be replicated on the full TCC website (`tin-cup-challenge-design`).

**Note:** The CSS file (`tin-cup-custom.css`) has already been synced to the design project. The changes below are for any additional updates discussed after that sync.

---

## Completed Changes (Already Synced)

These were applied via CSS sync on 2026-03-25:

### Footer
- Logo: added `object-fit: contain` to prevent stretching
- Social icons: added spacing (60px top / 30px bottom on tablet, 40px/30px on mobile)

### Homepage Hero
- Tablet (768-991px): constrained text column to 48%, sub-title 48px, title 18px
- Desktop: reduced hero top padding from 200px to 120px

### Homepage - Join Us on Event Day Section
- Tablet: hidden teal background box, full-width buttons, full-width event card image
- Event card image: overrode base theme `max-width: 239px` to `100%`

### Challengers Page
- "Accept the Challenge" heading: increased to 36px on mobile
- Images (Lead the Way, Support Your Community): centered on tablet with `max-width: 100%`

### Event Day Page
- Feature cards (Run with Purpose, etc.): 3-column layout on tablet with smaller icons (30px), tighter padding
- Icon container: `min-width: 70px` for consistent text alignment
- Spirit Awards blue box: reduced padding on mobile
- Dawn Banks blue box: separate padding rule on mobile
- Award cards: matched width to video section on mobile

---

## Pending Changes

### Mobile Header
- "Become a Challenger" button: align to the right on mobile
  - Changed `margin-right: auto` to `margin-left: auto; margin-right: 15px` on `.main-menu__volunteers` (in the `max-width: 1024px` media query near line 7411)
  - Changed `justify-content: center` to `flex-end` on `.main-menu__top-buttons` (in the `max-width: 1024px` media query near line 4718)

### Mobile Nav
- "Give" button link: update `href` in `mobile-nav.njk` from `/donate-now/` to match the desktop header Give button external donation URL

### Footer (`footer.njk`)
- Removed the tax-exempt notice paragraph ("The Community Foundation of Teton Valley is a 501(c)(3)...")
- Added EIN (39-3669347) as a new list item below the phone number in the Contact section

### Homepage - Powered by Challengers (`index.njk`)
- Wrapped challenger logos with links to their websites:
  - Tributary → https://tributaryidaho.com/
  - Engel & Volkers → https://annefish.evrealestate.com/
  - CityPASS → https://www.citypass.com/
  - GTRLT → https://www.grandtarghee.com/
  - Fisher Creative → https://fishercreative.com/
  - Grand Associates → https://grandassociatesrealestate.com/
  - Landganics → https://www.landganics.com/
  - Wells Fargo → https://www.wellsfargo.com/locator/bank/185__S__MAIN__ST_DRIGGS_ID_83422/
  - With The Grain → https://www.buildwiththegrain.com/
- **Still need links for:** Pirate Ship, Teton Aviation Center, Harmony Design Engineering, Teton Valley Foundation, Teton Ridge Ranch Foundation

### How to Give Page (`how-to-give.njk`)
- Replaced text under "Why Both Matter" boxes with: "These two ways of giving work together to strengthen our nonprofit community with more funds, more confidence, and greater stability. Keep the momentum growing and Teton Valley thriving - give today!"
- Kept the second paragraph ("Give online, by check, wire, or stock...")

### Why It Works Page (`how-it-works.njk`)
- Replaced subheading from "One gift. Greater impact for the nonprofits you love." to "When we give together, every gift is multiplied for lasting community impact."
- FAQ "What if I want to give by check?" — updated answer to: "Mail a check made payable to 'Community Foundation of Teton Valley' along with a Donor Form outlining your distributions." (Donor Form link TBD)
- FAQ "How does the match work?" — updated answer to: "Through the Challenger Fund, the Community Foundation of Teton Valley partially matches the first $25,000 each nonprofit raises during the Giving Period, helping strengthen organizations across every sector."
- FAQ "When do nonprofits receive funds?" — updated answer to: "Nonprofits receive 100% of direct donations and a Match Grant at the Tin Cup Awards Party at the end of August."

### Challengers Page (`challengers.njk`)
- Updated hero text: "Please get in touch with us with any questions." → "Please reach out to Donor Services at donorservices@cftetonvalley.org with any questions." (mailto link)
- Swapped section order: "How the Match Works" now comes before "Lead the Way as a Tin Cup Challenger"
- Changed "2025 Tin Cup Challengers" heading to "2026 Tin Cup Challengers"
- Sorted challenger names alphabetically by last name within each tier (Anonymous entries first, businesses at end)
- Linked all challenger logos to their websites across all tiers
- **Logos still needing links:** Teton Ridge Ranch Foundation, Pirate Ship, Teton Aviation Center, Harmony Design Engineering, Teton Valley Foundation, CISCO Group, Jonnie Natco Holmes, Jackson Hole Sotheby's, Talbotts Electric

### Event Day Page (`event-day.njk`)
- Updated hero text to: "Event Day features timed 10K and 5K races, an untimed Fun Run/Walk, and a highly competitive Diaper Derby. Winners of each race receive prize money to donate to their favorite nonprofits."
- Updated Event Day card text with new copy about Giving Period (June 12 - July 24, 2026) and Event Day description
- Fixed event date badge from "19 Jul, 2025" to "18 Jul, 2026"

### Global CSS (`tin-cup-custom.css`)
- Links in burgundy hero `.page-intro` sections across all subpages: white with slight transparency (`rgba(255,255,255,0.85)`), underlined, brightens to full white on hover. This overrides the default blue link color in `.nonprofit-info-box a`.

