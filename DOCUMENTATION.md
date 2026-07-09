# LiveFusion — Project Documentation

**Version:** 1.1.0  
**Package:** `livefusion-website`  
**Last updated:** July 4, 2026  
**Live URL (planned):** https://livefusion.app

---

## Table of Contents

1. [Overview](#1-overview)
2. [Product Vision](#2-product-vision)
3. [Development Progress](#3-development-progress)
4. [Current Website Features](#4-current-website-features)
5. [Tech Stack](#5-tech-stack)
6. [Project Structure](#6-project-structure)
7. [Components Reference](#7-components-reference)
8. [Hero Studio (Interactive Demo)](#8-hero-studio-interactive-demo)
9. [API Documentation](#9-api-documentation)
10. [Design System](#10-design-system)
11. [Animations & Motion](#11-animations--motion)
12. [Build & Deployment](#12-build--deployment)
13. [Environment & Configuration](#13-environment--configuration)
14. [Known Limitations](#14-known-limitations)
15. [Roadmap / Next Steps](#15-roadmap--next-steps)

---

## 1. Overview

**LiveFusion** is a marketing and pre-launch website for a multi-platform live streaming companion app. The product unifies **Twitch**, **Kick**, **YouTube**, and **TikTok** into one workspace — chat, go-live, analytics, and notifications in a single app.

This repository is the **public landing site** (not the mobile app itself). It includes:

- Product showcase with scroll animations
- Interactive **Live Studio** demo mockup
- **Wishlist** email capture with backend API
- Pricing and download CTAs
- Production-ready **standalone** build for deployment

### Origin

The project started as **Second Chat** (`second-chat-website`). It was fully rebranded to **LiveFusion** with new copy, UI, wishlist flow, and an expanded hero studio demo.

---

## 2. Product Vision

| Pillar | Description |
|--------|-------------|
| **Unified Chat** | All platform chats in one real-time feed |
| **Multi-Go-Live** | Broadcast to multiple platforms with one tap (RTMP) |
| **Analytics** | Viewers, followers, engagement across all platforms |
| **Edge Alerts** | Screen-edge glow notifications for raids, subs, gifts |
| **Multi-Preview** | Watch Twitch, Kick, YouTube side by side |
| **Secure OAuth** | Platform logins via industry-standard OAuth 2.0 |

**Target platforms:** iOS & Android  
**Target users:** Live streamers and content creators

---

## 3. Development Progress

### Phase 1 — Initial Setup & Bug Fix
| Date | Task | Status |
|------|------|--------|
| Jul 3, 2026 | Project cloned/setup, `npm install`, dev server | ✅ Done |
| Jul 3, 2026 | Fixed JSX syntax error in `Features.jsx` (`<features[0].icon />` invalid) | ✅ Done |
| Jul 3, 2026 | Build verified (`npm run build` passes) | ✅ Done |

### Phase 2 — Rebrand & Content Overhaul
| Date | Task | Status |
|------|------|--------|
| Jul 3, 2026 | Rebranded **Second Chat** → **LiveFusion** (navbar, footer, metadata, copy) | ✅ Done |
| Jul 3, 2026 | Removed **Streaks** section and `Streaks.jsx` | ✅ Done |
| Jul 3, 2026 | Removed **Sign in** from navbar (desktop + mobile) | ✅ Done |
| Jul 3, 2026 | Shortened copy across all sections | ✅ Done |
| Jul 3, 2026 | Added **Wishlist** section with email form | ✅ Done |
| Jul 3, 2026 | Navbar CTA changed to **Join Wishlist** | ✅ Done |

### Phase 3 — UI Polish & Icons
| Date | Task | Status |
|------|------|--------|
| Jul 3, 2026 | Added **GlowBackground** (animated mesh + orbs) | ✅ Done |
| Jul 3, 2026 | Official platform icons via **react-icons** (SiTwitch, SiKick, SiYoutube, SiTiktok) | ✅ Done |
| Jul 3, 2026 | Custom **BrandLogo** SVG component | ✅ Done |
| Jul 3, 2026 | Removed generic Lucide icons from feature cards | ✅ Done |
| Jul 3, 2026 | Compact wishlist card (`max-w-md`) | ✅ Done |

### Phase 4 — White Screen & Performance Fix
| Date | Task | Status |
|------|------|--------|
| Jul 3, 2026 | Fixed white screen on refresh (Framer Motion hiding content at `opacity: 0`) | ✅ Done |
| Jul 3, 2026 | Inline dark background on `html`/`body` for instant paint | ✅ Done |
| Jul 3, 2026 | Split hero parallax: headline fades, mockup stays sharp | ✅ Done |
| Jul 3, 2026 | Replaced glass blur on mockup with solid dark panels | ✅ Done |

### Phase 5 — Animations Restored
| Date | Task | Status |
|------|------|--------|
| Jul 3, 2026 | Restored Framer Motion scroll-reveal animations | ✅ Done |
| Jul 3, 2026 | Created shared motion presets in `lib/motion.js` | ✅ Done |
| Jul 3, 2026 | Scroll-triggered animations on Platforms, Features, GoLive, Analytics, Pricing, Download, Wishlist | ✅ Done |
| Jul 3, 2026 | Navbar mount animation (no initial hide flash) | ✅ Done |

### Phase 6 — Hero Studio Upgrade
| Date | Task | Status |
|------|------|--------|
| Jul 3, 2026 | Created **HeroStudio** component with real stream image (Unsplash) | ✅ Done |
| Jul 3, 2026 | Widened mockup to `max-w-[1400px]` | ✅ Done |
| Jul 3, 2026 | Added sidebar: Dashboard, Go Live, Analytics, Chat | ✅ Done |
| Jul 3, 2026 | **Working tab navigation** with animated view transitions | ✅ Done |
| Jul 3, 2026 | Dashboard: stream preview, platform stats, activity, chat | ✅ Done |
| Jul 3, 2026 | Go Live: platform toggles, Go Live button, quality settings | ✅ Done |
| Jul 3, 2026 | Analytics: metrics, animated chart, platform breakdown | ✅ Done |
| Jul 3, 2026 | Chat: full-width chat with platform filters | ✅ Done |
| Jul 3, 2026 | Mobile horizontal tab bar for small screens | ✅ Done |

### Phase 7 — Backend & Production Build
| Date | Task | Status |
|------|------|--------|
| Jul 3, 2026 | Wishlist API: `POST /api/wishlist` saves to `data/wishlist.json` | ✅ Done |
| Jul 4, 2026 | Standalone production build (`output: 'standalone'`) | ✅ Done |
| Jul 4, 2026 | Build scripts: `build:standalone`, `start:standalone` | ✅ Done |
| Jul 4, 2026 | Asset copy script for standalone deploy | ✅ Done |
| Jul 4, 2026 | Installed **sharp** for production image optimization | ✅ Done |
| Jul 4, 2026 | Package renamed to `livefusion-website` v1.1.0 | ✅ Done |

### Overall Completion (Website)

| Area | Progress |
|------|----------|
| Landing page UI | ████████████████████ 100% |
| Interactive demo | ████████████████████ 100% |
| Wishlist API | ████████████████░░░░ 80% (local file only, no email service) |
| Mobile app | ░░░░░░░░░░░░░░░░░░░░ 0% (separate product) |
| Production deploy | ████████████████░░░░ 80% (build ready, hosting TBD) |

---

## 4. Current Website Features

### Page Sections (top to bottom)

| Section | ID | Description |
|---------|-----|-------------|
| **Navbar** | — | Fixed nav, scroll glass effect, Join Wishlist CTA |
| **Hero** | `#hero` | Headline, platform badges, stats, interactive Live Studio |
| **Platforms** | `#platforms` | Twitch, Kick, YouTube, TikTok cards with brand icons |
| **Features** | `#features` | 8 feature cards + unified chat preview |
| **Go Live** | `#golive` | Steps + phone mockup with live toggle |
| **Analytics** | `#analytics` | Dashboard mockup + feature list |
| **Wishlist** | `#wishlist` | Email signup, API-backed |
| **Pricing** | `#pricing` | Free & Premium plans |
| **Download** | `#download` | App Store / Google Play CTAs |
| **Footer** | — | Links, platform icons, contact |

### Removed Features
- Streaks section (daily streaming streaks UI)
- Sign in button
- Second Chat branding

---

## 5. Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 14.2.5 |
| UI Library | React | 18 |
| Styling | Tailwind CSS | 3.4.6 |
| Animations | Framer Motion | 11.3.24 |
| Icons | react-icons (Simple Icons) | 5.7.0 |
| Images | next/image + sharp | 0.35.3 |
| Language | JavaScript (JSX) | — |
| Font | Inter (Google Fonts) | — |

---

## 6. Project Structure

```
LiveFusion/
├── app/
│   ├── api/
│   │   └── wishlist/
│   │       └── route.js          # POST wishlist email API
│   ├── globals.css               # Global styles, glow effects, utilities
│   ├── layout.js                 # Root layout, SEO metadata
│   └── page.js                   # Home page (all sections)
├── components/
│   ├── Analytics.jsx             # Analytics section
│   ├── BrandLogo.jsx             # LiveFusion logo SVG
│   ├── Download.jsx              # Download / coming soon CTA
│   ├── Features.jsx              # Features grid
│   ├── Footer.jsx                # Site footer
│   ├── GlowBackground.jsx        # Animated background orbs
│   ├── GoLive.jsx                # Go Live section + phone mockup
│   ├── Hero.jsx                  # Hero headline + studio wrapper
│   ├── HeroStudio.jsx            # Interactive Live Studio demo
│   ├── Navbar.jsx                # Navigation bar
│   ├── PlatformIcons.jsx         # Twitch/Kick/YouTube/TikTok icons
│   ├── Platforms.jsx             # Platform cards section
│   ├── Pricing.jsx               # Pricing plans
│   └── Wishlist.jsx              # Email wishlist form
├── data/
│   └── wishlist.json             # Stored wishlist emails (gitignored)
├── lib/
│   └── motion.js                 # Shared Framer Motion variants
├── scripts/
│   ├── build-standalone.ps1      # Windows standalone build script
│   └── copy-standalone-assets.js # Copies static assets for deploy
├── .gitignore
├── DOCUMENTATION.md              # This file
├── jsconfig.json                 # Path alias @/*
├── next.config.js                # Next.js config (standalone, images)
├── package.json
├── postcss.config.js
└── tailwind.config.js            # Design tokens, animations
```

---

## 7. Components Reference

### `Hero.jsx`
- Parallax scroll on headline (fades out)
- Mockup stays sharp (no opacity fade)
- Staggered entrance animations
- Embeds `HeroStudio`

### `HeroStudio.jsx`
- Full interactive app demo (see Section 8)
- macOS-style window chrome
- Sidebar + mobile tabs

### `PlatformIcons.jsx`
- Exports: `TwitchIcon`, `KickIcon`, `YouTubeIcon`, `TikTokIcon`
- Exports: `platformList` array with colors and brand styling

### `Wishlist.jsx`
- Client form → `POST /api/wishlist`
- States: idle, loading, success, error
- Compact card UI

### `GlowBackground.jsx`
- Fixed full-screen animated gradient orbs
- CSS mesh + grid overlay
- Does not block pointer events

### `Navbar.jsx`
- Scroll-aware glass effect
- Mobile slide-down menu
- Links: Features, Platforms, Go Live, Wishlist, Pricing

---

## 8. Hero Studio (Interactive Demo)

The hero includes a **clickable Live Studio mockup** that simulates the real app.

### Tabs

| Tab | Features |
|-----|----------|
| **Dashboard** | Live stream image, viewer count, per-platform stats, activity feed, unified chat sidebar |
| **Go Live** | Stream preview, title field, platform toggles (clickable), 1080p/60fps/RTMP settings, Go Live / End Stream button |
| **Analytics** | 4 metric cards, animated bar chart, platform breakdown with progress bars |
| **Chat** | Full chat panel, platform filter tabs (All, Twitch, Kick, etc.), message input |

### Technical Details
- Stream image: Unsplash gaming photo via `next/image`
- Tab transitions: `AnimatePresence` with fade + slide
- Platform toggles: spring animation on Go Live tab
- Width: `max-w-[1400px]` container
- Responsive: sidebar hidden on mobile, horizontal tab bar shown

---

## 9. API Documentation

### `POST /api/wishlist`

Saves user email to local JSON file for launch notifications.

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Success (201):**
```json
{
  "message": "You are on the list. We will notify you first.",
  "success": true
}
```

**Already joined:**
```json
{
  "message": "You are already on the wishlist.",
  "alreadyJoined": true
}
```

**Validation error (400):**
```json
{
  "error": "Please enter a valid email."
}
```

**Storage:** `data/wishlist.json`
```json
[
  {
    "email": "user@example.com",
    "joinedAt": "2026-07-03T17:14:48.961Z"
  }
]
```

> **Note:** For production, connect to Mailchimp, Resend, SendGrid, or a database. The current file-based storage is suitable for development and small deployments.

---

## 10. Design System

### Colors (Nebula Violet theme)

| Token | Hex | Usage |
|-------|-----|-------|
| `bg` | `#0B0C0E` | Page background |
| `surface` | `#15171A` | Cards, panels |
| `surface-elevated` | `#1E2126` | Elevated UI |
| `accent` | `#8B7CFF` | Primary brand purple |
| `accent-partner` | `#C56BFF` | Secondary purple |
| `text-primary` | `#F3F5F7` | Headings, body |
| `text-secondary` | `#A2A9B2` | Subtext |
| `live` | `#FF4444` | Live indicators |
| `success` | `#3FD43A` | Positive metrics |
| `gold` | `#E7C66B` | Premium tier |

### Platform Brand Colors

| Platform | Color |
|----------|-------|
| Twitch | `#9146FF` |
| Kick | `#53FC18` |
| YouTube | `#FF0000` |
| TikTok | `#EE1D52` |

### Typography
- **Font:** Inter (weights 300–900)
- **Headings:** `font-black`, tight tracking
- **Gradient text:** `.text-gradient` (purple → pink)

### UI Patterns
- **Glass:** `backdrop-blur` + semi-transparent backgrounds
- **Glow cards:** Purple shadow ring on key cards
- **Hairline borders:** `rgba(255,255,255,0.06–0.13)`
- **Live dot:** Pulsing red indicator

---

## 11. Animations & Motion

Shared presets in `lib/motion.js`:

| Preset | Effect |
|--------|--------|
| `fadeUp` | Opacity 0→1, translateY 36→0 |
| `fadeUpSoft` | Lighter fade up |
| `fadeIn` | Opacity only |
| `scaleIn` | Scale 0.92→1 |
| `slideLeft` | Enter from left |
| `slideRight` | Enter from right |
| `stagger` | Stagger children 0.1s |
| `ease` | `[0.32, 0.72, 0, 1]` cubic bezier |

### Scroll Behavior
- Sections use `useInView` with `once: true`
- Hero headline parallax via `useScroll` + `useTransform`
- Chart bars and platform bars animate on scroll into view

---

## 12. Build & Deployment

### Development
```bash
npm install
npm run dev
# → http://localhost:3000
```

### Production Build
```bash
npm run build              # Standard Next.js build → .next/
npm run build:standalone   # Standalone deploy package
npm run start              # Run standard build
npm run start:standalone   # Run standalone server
```

### Standalone Deploy
After `npm run build:standalone`:

```
.next/standalone/
├── server.js          # Node.js server
├── .next/             # Compiled app + static
├── node_modules/      # Runtime dependencies
├── data/              # Wishlist storage
└── package.json
```

**Run on server:**
```bash
cd .next/standalone
PORT=3000 node server.js
```

**Windows PowerShell:**
```powershell
.\scripts\build-standalone.ps1
cd .next\standalone
$env:PORT=3000; node server.js
```

### Build Output (last successful)

| Route | Type | Size |
|-------|------|------|
| `/` | Static | ~59.8 kB |
| `/_not-found` | Static | 871 B |
| `/api/wishlist` | Dynamic | Server-rendered |

---

## 13. Environment & Configuration

### `next.config.js`
- `output: 'standalone'` — portable deploy build
- `images.remotePatterns` — allows `images.unsplash.com`

### `jsconfig.json`
- Path alias: `@/*` → project root

### `.gitignore`
- `node_modules/`, `.next/`, `data/wishlist.json`

### No `.env` required
Current setup has no external API keys. Add when integrating email service:

```env
# Future
RESEND_API_KEY=
MAILCHIMP_API_KEY=
```

---

## 14. Known Limitations

| Item | Detail |
|------|--------|
| Wishlist storage | File-based JSON, not scalable for high traffic |
| No email sending | API saves emails only; no notification emails sent yet |
| App Store links | Placeholder `#` links, app not published |
| Next.js version | 14.2.5 has known security advisory — upgrade recommended |
| npm audit | 8 vulnerabilities reported at install time |
| Hero image | External Unsplash URL — consider self-hosting for production |
| Mobile app | Website only; iOS/Android app is separate development |

---

## 15. Roadmap / Next Steps

### Website (short term)
- [ ] Connect wishlist to Resend / Mailchimp for real email capture
- [ ] Add privacy policy and terms pages
- [ ] Self-host hero stream images in `/public`
- [ ] Upgrade Next.js to latest patched version
- [ ] Add Open Graph preview image
- [ ] Deploy to Vercel, Railway, or VPS

### Product (long term)
- [ ] iOS & Android app development
- [ ] OAuth integration (Twitch, Kick, YouTube, TikTok)
- [ ] RTMP multi-broadcast engine
- [ ] Real unified chat backend
- [ ] Push notifications and edge glow alerts
- [ ] Premium subscription billing

---

## Quick Commands Cheat Sheet

```bash
# Install
npm install

# Dev server
npm run dev

# Lint
npm run lint

# Production build
npm run build:standalone

# Run production locally
cd .next/standalone && PORT=3000 node server.js

# Test wishlist API
curl -X POST http://localhost:3000/api/wishlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

---

## Contact

- **Product:** LiveFusion  
- **Email:** hello@livefusion.app  
- **Domain:** livefusion.app (planned)

---

*This document reflects the state of the LiveFusion marketing website as of July 4, 2026.*
