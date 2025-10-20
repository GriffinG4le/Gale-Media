# 🌐 Gale Media Website & App Roadmap  
*A high-level product and design roadmap for the Gale Media site and campaign management app.*

---

## 🎯 Objective  
Build an **Apple-style**, high-performance, multi-client campaign site that:  
- Feels minimal, premium, and intuitive  
- Loads instantly and adapts to system light/dark mode  
- Allows quick deployment of multiple campaign pages (StyleUp, iPhoneCentre, etc.)  
- Serves as both **public face** (marketing) and **internal engine** (campaign manager)

---

## 🧱 Core Principles  
1. **Simplicity is luxury.** Use whitespace, large typography, and subtle gradients.  
2. **Speed = trust.** Every millisecond saved adds credibility.  
3. **Adaptive design.** Auto-detect user color scheme and adjust dynamically.  
4. **Scalability.** Modular campaign pages generated from a single JSON or CMS config.  
5. **No visual clutter.** Every element serves purpose or emotion.  

---

## 🖥️ Tech Stack Overview  

| Layer | Tool / Framework | Reason |
|--------|------------------|--------|
| **Frontend Framework** | **Next.js (React 19)** | File-based routing, static export, blazing performance |
| **Styling** | **Tailwind CSS** + **Framer Motion** | Apple-like responsiveness, adaptive themes, smooth transitions |
| **Font System** | **SF Pro / Inter Variable** | Apple’s system typeface aesthetic (fall back: Helvetica Neue) |
| **Theme Handling** | **`prefers-color-scheme` media query** + Tailwind dark mode | Matches user device theme instantly |
| **Deployment** | **Vercel or Netlify** | Auto-deploy from main branch, global CDN |
| **Form Handling** | **Formspree / Netlify Forms / Supabase** | Serverless, zero-backend submissions |
| **Data Layer** | **JSON Config / Notion API / Airtable API (phase 2)** | Dynamic campaign creation & management |
| **Analytics** | **Plausible / Vercel Analytics** | Privacy-friendly insights |
| **Automation (Later)** | **Zapier / Make / WhatsApp Cloud API** | Auto-notify clients & log leads |

---

## 🎨 Design Language (Apple-Inspired)

### Typography
- **Primary font:** `SF Pro Display` (Inter if not available)  
- **Weights:** 300, 400, 600 — minimal contrast  
- **Hierarchy:**  
  - H1: 4xl, light weight  
  - H2: 2xl, semi-bold  
  - Body: base / leading-relaxed  
  - Caption: xs / gray-500  

### Color System  
Auto-switching palette using `prefers-color-scheme`:  

| Element | Light Mode | Dark Mode |
|----------|-------------|------------|
| Background | `#FFFFFF` | `#000000` |
| Text | `#000000` | `#FFFFFF` |
| Accent | `#0071E3` (Apple Blue) | `#2997FF` |
| Muted | `#F5F5F7` | `#1C1C1E` |
| Border | `#E5E5E5` | `#2C2C2E` |

Transitions should fade smoothly between themes with 200-300ms easing.

---

## 🧭 Site Structure

```
/ (Home)
├── /about                → Vision & team philosophy
├── /campaigns
│     ├── /styleup        → Driving school campaign
│     ├── /iphonecentre   → Refurb iPhone campaign
│     └── /[client].tsx   → Dynamic campaign route (template)
├── /contact              → Lead capture form + WhatsApp redirect
└── /dashboard (private)  → Internal campaign manager (phase 2)
```

---

## 🧩 Functional Modules

### 1. Landing Page (Public)
- Hero: massive typography, gradient CTA buttons, clean Apple feel  
- Scroll animation: soft parallax & blur reveals  
- Sectioned storytelling: *Problem → Offer → Proof → CTA*  
- Footer: “Built by Gale Media © 2025” + social icons  

### 2. Campaign Pages
- Dynamic from config (`campaigns.json`)  
- Fields: clientName, headline, CTA, WhatsApp link, image, themeColor  
- Auto-redirect after form → WhatsApp Business chat  
- Each page inherits Apple-style animations and adaptive theme  

### 3. Dashboard (Phase 2)
- Admin login (NextAuth or Clerk)  
- CRUD interface for campaigns (create / edit / archive)  
- Lead list per campaign (from Formspree / Supabase)  
- Export to CSV or Google Sheets  

### 4. Theming System
- `useTheme()` hook listens to `prefers-color-scheme`  
- Tailwind dark mode classes auto-apply via class strategy  
- Smooth fade animation when switching  

---

## 📱 Responsive Design Rules  
- **Mobile-first grid.**  
  - 1 column under 768px, 12-column flex grid above.  
- **Touch-friendly buttons.** 44px min height.  
- **Adaptive typography.** `clamp()` for fluid scaling.  
- **Lazy-loaded images.** Blur-up effect like apple.com  

---

## 🚀 Performance Targets  
| Metric | Goal |
|--------|------|
| Lighthouse Performance | ≥ 95 |
| Time to Interactive | < 1.5s |
| CLS | < 0.05 |
| Total bundle size | < 250KB |
| Image format | AVIF / WebP |

---

## 🧮 Development Phases  

### **Phase 1: MVP (1–2 Weeks)**
- Static Next.js site (Home + StyleUp page)
- Responsive layout + light/dark detection  
- Minimal animations (Framer Motion fade-in)  
- Form → WhatsApp redirect  
- Deployed on Netlify/Vercel  

### **Phase 2: Modular Expansion**
- Add JSON-driven campaign generator  
- Add Notion/Airtable API integration  
- Add dashboard for campaign management  
- Light analytics tracking  

### **Phase 3: Automation & Polish**
- Integrate WhatsApp Cloud API  
- Add real-time lead tracking  
- Enhance motion (parallax, scroll reveals)  
- Add blog section (lessons, case studies)  

---

## 🧠 Inspirations
- [apple.com](https://apple.com) — aesthetic & typography rhythm  
- [linear.app](https://linear.app) — minimalist structure  
- [framer.com](https://framer.com) — modern motion + spacing  
- [vercel.com](https://vercel.com) — clean developer brand tone  

---

## 🏁 Outcome
A **fast, adaptive, modular marketing platform** that feels premium, functions effortlessly, and positions Gale Media as a serious player.  
The site itself becomes a **case study** — a live demonstration of your execution philosophy.

---

*Document last updated: October 2025*  
*Author: Sir Gale (Griffin) — Vision Architect, Gale Media*
