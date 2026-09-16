# Changelog

All notable changes to this project are documented in this file.

## 2026-09-16

### Changed
- Dropshipping Packages page: card thumbnails now show the portrait package images, while the lightbox (full view) shows the landscape images.
- Lightbox: resized to fit ~80% of the viewport (`80vw` / `80vh`) instead of the previous near-full-screen size.
- Package thumbnail cards: reduced to a smaller, portrait-oriented (`2:3`) card size.
- Lightbox image: constrained by both max-width and max-height (with `width: auto; height: auto`) so wide landscape images scale down correctly on small/mobile screens instead of overflowing.
