# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - 2026-09-16

### Added

- Dropdown sub-menus in the navbar: About, All-in-1 Platform, Branches,
  Dropshipping Packages, and Testimonials each expand into a list of
  sub-items (desktop hover/click dropdown, mobile accordion).
- New `/platform`, `/branches`, and `/dropshipping-packages` pages with
  placeholder anchor sections for each sub-menu item.
- Anchor sections on `/about` (Profile, What We Do, Who We Serve, Mission,
  Vision) and `/testimonials` (Vlogs) for their respective sub-menu items.
- Initial project scaffold with Next.js, React, TypeScript, and Tailwind CSS.

### Changed

- Renamed the "Book a Session" CTA to "Book now".
- Navbar switches to the mobile menu at the `xl` breakpoint instead of `lg`
  to accommodate the wider dropdown menu.
- Sitemap now includes sub-menu page routes (excluding in-page anchors).

### Removed

- "Conference" removed from the primary navigation (the `/conference` page
  itself is unchanged, just no longer linked from the menu).
