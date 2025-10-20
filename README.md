# 🌐 Gale Media Platform

A premium, Apple-inspired marketing platform for rapid campaign deployment and management.

## ✨ Features

- **Apple-style Design**: Minimal, premium aesthetics with smooth animations
- **Modular Campaigns**: JSON-driven campaign pages that deploy instantly
- **Admin Dashboard**: Secure authentication with MongoDB user management
- **Theme System**: Auto-detect system theme with manual override
- **Performance Optimized**: Vercel Analytics, lazy loading, fluid typography
- **WhatsApp Integration**: Direct lead capture and redirect
- **Responsive Design**: Mobile-first with touch-friendly interactions

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create `.env.local`:
   ```bash
   MONGODB_URI=your-mongodb-connection-string
   NEXTAUTH_SECRET=your-long-random-secret
   NEXTAUTH_URL=http://localhost:3000
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain (optional)
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Next.js pages and API routes
│   ├── api/            # API endpoints
│   ├── auth/           # Authentication pages
│   ├── campaigns/      # Campaign pages
│   └── admin/          # Admin dashboard
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # Global styles

public/
├── campaigns.json      # Campaign configuration
└── uploads/            # Uploaded assets
```

## 🎨 Design System

- **Typography**: Inter Variable (Apple-inspired)
- **Colors**: Auto-switching light/dark theme
- **Animations**: Framer Motion with scroll reveals
- **Layout**: Mobile-first responsive grid

## 🔧 Admin Features

- **User Management**: Register, verify, forgot password
- **Campaign Management**: Create, edit, archive campaigns
- **File Uploads**: Secure image upload for campaigns
- **Analytics**: Performance tracking with Vercel Analytics

## 📱 Campaign Management

Campaigns are managed via `public/campaigns.json`:

```json
{
  "slug": "client-name",
  "clientName": "Client Name",
  "template": "standard",
  "headline": "Compelling Headline",
  "description": "Campaign description",
  "themeColor": "#0071E3",
  "image": "/uploads/image.jpg",
  "ctaText": "Call to Action",
  "ctaLink": "/contact",
  "active": true
}
```

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Vercel
1. Import project from GitHub
2. Environment variables are automatically detected
3. Deploy with zero configuration

## 📊 Performance

- **Lighthouse Score**: 95+
- **Time to Interactive**: < 1.5s
- **Bundle Size**: < 250KB
- **Image Optimization**: Next.js Image with WebP/AVIF

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **Analytics**: Vercel Analytics + Plausible
- **Deployment**: Netlify/Vercel

## 📄 License

Built by [Gale Industries](https://galeindustries.netlify.app) © 2025
