# Section Behavior Documentation

This document describes how different sections on the Tin Cup Challenge website behave during different periods (Giving Period vs. Non-Giving Period).

---

## Homepage Sections

### TCC Stats Section
- **During Giving Period:** HIDDEN
- **Outside Giving Period:** VISIBLE - Replaces the Give Now yellow bar
- **Purpose:** Display Tin Cup Challenge statistics and impact metrics when donations are not actively being collected

### Give Now Yellow Bar
- **During Giving Period:** VISIBLE - Primary call-to-action for donations
- **Outside Giving Period:** HIDDEN - Replaced by TCC Stats section
- **Purpose:** Encourage donations during the active giving window

### Powered by Challengers
- **Content Rules:** Only displays businesses contributing $5,000 or more
- **Exclusions:** No in-kind donors - monetary contributions only
- **Purpose:** Recognize major business sponsors who provide matching funds

---

## Implementation Notes

To toggle between Giving Period and Non-Giving Period, update the visibility CSS classes or use a date-based toggle system.

*Last updated: February 2026*
