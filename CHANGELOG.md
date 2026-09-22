# Changelog

All notable changes to this project are documented in this file.

## 2026-09-22

### Added
- About page: new Profile, What We Do, and Who We Serve sections (`ProfileSection`, `WhatWeDoSection`, `WhoWeServeSection`), replacing the "coming soon" placeholders.
- About page: Mission and Vision sections filled in.
- Platform page: new intro hero (`PlatformIntro`) and full content for all 8 offerings (eCommerce, Dropshipping, Digital Marketing, AI Automation, Insurance, Trading Community, Personality Development, Services).
- Dropshipping Packages page: new intro hero (`PackagesIntro`); each package card now shows price, description, an inclusions checklist, and a closing tagline alongside the existing image showcase.
- Testimonials page: new Vlogs section (`VlogsSection`) with topic list and CTA.
- `AnchorSection` now supports multi-paragraph descriptions (`string | string[]`).

### Changed
- Rebranded site content from the "Bremz Flora" digital marketing persona to iWorth International Corporation — Baguio, Benguet Branch (Bremen Fomaneg-Flora): homepage Hero, About page welcome banner, Contact page, the shared Booking CTA, and the Footer.
- Contact page: info card now shows Contact Number, Contact Person, and Branch instead of Email and Location.
- Gallery moved from its own `/gallery` page into an anchor section (`#gallery`) on the Testimonials page; categories and captions updated to reflect iWorth activities.
- Testimonials content replaced with placeholder "share your story" prompts pending real submissions.
- Footer and nav config updated to point Gallery at `/testimonials#gallery`.
- Package CTAs and the shared Booking CTA relabeled to "Book Now".

### Fixed
- Gallery filtering: switching category filters could leave the filtered image stuck invisible (opacity 0, blurred). The grid's entrance animation only fired once ever (`whileInView` + `viewport: { once: true }`), so items mounted by a later filter change never got animated in. Fixed by keying the grid on the active category so it remounts, and its entrance animation re-triggers, on every filter change.

### Removed
- Standalone `/gallery` page content (route now redirects to `/testimonials#gallery`).

## 2026-09-16

### Changed
- Dropshipping Packages page: card thumbnails now show the portrait package images, while the lightbox (full view) shows the landscape images.
- Lightbox: resized to fit ~80% of the viewport (`80vw` / `80vh`) instead of the previous near-full-screen size.
- Package thumbnail cards: reduced to a smaller, portrait-oriented (`2:3`) card size.
- Lightbox image: constrained by both max-width and max-height (with `width: auto; height: auto`) so wide landscape images scale down correctly on small/mobile screens instead of overflowing.
