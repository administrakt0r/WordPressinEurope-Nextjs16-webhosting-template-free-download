# WPinEU - Free WordPress Hosting Platform

<div align="center">

![WPinEU Logo](public/wpineulogo.png)

**Premium Free WordPress Hosting in Europe**

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Live Demo](https://wpineu.com) • [Documentation](#documentation) • [Features](#features) • [Getting Started](#getting-started)

</div>

---

## 🌟 About WPinEU.com

**[WPinEU.com](https://wpineu.com)** is a premium free WordPress hosting service based in Europe, offering enterprise-grade hosting features at absolutely no cost. We believe everyone deserves access to professional hosting tools, which is why we provide:

### 🎁 Free Hosting Services

- **[Free SSD Hosting](https://wpineu.com/free-ssd-hosting)** - Lightning-fast NVMe SSD storage (1GB)
- **[Free Redis Hosting](https://wpineu.com/free-redis-hosting)** - Object caching for 10x faster WordPress
- **[Free LiteSpeed Hosting](https://wpineu.com/free-litespeed-hosting)** - Up to 84x faster than Apache
- **[Free WordPress Hosting](https://wpineu.com/free-wordpress-hosting)** - 1-click install with cPanel
- **[Free cPanel Hosting](https://wpineu.com/free-cpanel-hosting)** - Industry-standard control panel

### 🚀 Quick Links

- 🌐 **Website**: [wpineu.com](https://wpineu.com)
- 👤 **Client Area**: [clients.wpineu.com](https://clients.wpineu.com)
- 📝 **Blog**: [wp.wpineu.com](https://wp.wpineu.com)
- 📊 **Uptime Monitor**: [uptime.wpineu.com](https://uptime.wpineu.com)
- 💬 **Support**: [wpineu.com/support](https://wpineu.com/support)

---

## 💻 About This Project

This repository contains the **source code** for the WPinEU.com website - a modern, high-performance web application built with cutting-edge technologies. The project showcases enterprise-grade web development practices, optimized for speed, SEO, and exceptional user experience.

### 🎯 Technical Highlights

- ⚡ **Blazing Fast** - Optimized with Next.js 16, LazyMotion, and dynamic imports
- 🎨 **Beautiful UI** - Modern dark theme with glassmorphism and smooth animations
- ♿ **Accessible** - WCAG 2.1 AA compliant with full keyboard navigation
- 🔍 **SEO Optimized** - Comprehensive metadata, JSON-LD, and sitemap
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🚀 **Production Ready** - Deployed on Vercel with optimal performance

---

## ✨ Features

### 🎨 Design & UX
- **Dark Mode Theme** - Sleek, modern interface with blue and yellow accents
- **Glassmorphism Effects** - Premium visual design with backdrop blur
- **Smooth Animations** - Framer Motion with LazyMotion for reduced bundle size
- **Responsive Layout** - Mobile-first approach with Tailwind CSS

### ⚡ Performance
- **Server-Side Rendering (SSR)** - Fast initial page loads
- **Code Splitting** - Dynamic imports for below-the-fold components
- **Image Optimization** - WebP/AVIF support with lazy loading
- **Font Optimization** - Google Fonts with `display: swap`
- **Aggressive Caching** - 1-year cache for static assets

### 🔍 SEO & Analytics
- **Comprehensive Metadata** - OpenGraph, Twitter Cards, and meta tags
- **JSON-LD Structured Data** - Organization and Service schemas
- **Dynamic Sitemap** - Auto-generated XML sitemap
- **Robots.txt** - Optimized for search engine crawling
- **Canonical URLs** - Proper URL canonicalization

### ♿ Accessibility
- **ARIA Labels** - Proper labeling for screen readers
- **Keyboard Navigation** - Full keyboard support with skip links
- **Focus Indicators** - Visible focus states for all interactive elements
- **Semantic HTML** - Proper use of HTML5 landmarks

### 🛠️ Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (LazyMotion)
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Deployment**: Vercel

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/administrakt0r/wpineu.git
   cd wpineu
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📁 Project Structure

```
wpineu/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── support/                 # Support page
│   ├── free-ssd-hosting/        # SSD hosting page
│   ├── free-redis-hosting/      # Redis hosting page
│   ├── free-litespeed-hosting/  # LiteSpeed hosting page
│   ├── free-wordpress-hosting/  # WordPress hosting page
│   ├── free-cpanel-hosting/     # cPanel hosting page
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── robots.ts               # Robots.txt
│   └── icon.png                # Favicon
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx          # Navigation bar
│   │   └── Footer.tsx          # Footer
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx            # Hero section
│   │   ├── HeroClient.tsx      # Hero animations (client)
│   │   ├── Features.tsx        # Features section
│   │   ├── FeatureCard.tsx     # Feature card (client)
│   │   ├── Pricing.tsx         # Pricing section
│   │   ├── PricingCard.tsx     # Pricing card (client)
│   │   ├── About.tsx           # About section
│   │   ├── FAQ.tsx             # FAQ section
│   │   ├── FAQAccordion.tsx    # FAQ accordion (client)
│   │   ├── Support.tsx         # Support section
│   │   └── ServiceDescription.tsx # Service descriptions
│   ├── templates/               # Page templates
│   │   ├── HostingLanding.tsx  # Hosting page template
│   │   └── HostingHero.tsx     # Hosting hero (client)
│   └── ui/                      # UI components
│       └── AnimatedSection.tsx  # Reusable animations
├── public/                      # Static assets
│   ├── wpineulogo.png          # Logo
│   ├── og-image.png            # OpenGraph image
│   ├── wordpress-logo.svg      # WordPress logo
│   ├── cPanel.svg              # cPanel logo
│   ├── litespeed.svg           # LiteSpeed logo
│   ├── cloudlinux.svg          # CloudLinux logo
│   └── Softaculous.svg         # Softaculous logo
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

---

## 🎨 Pages & Features

### Homepage (`/`)
- Hero section with animated elements
- Technology showcase with logos
- Feature cards highlighting benefits
- Pricing information
- About section
- FAQ accordion
- Support contact information

### Service Pages
Each service page includes:
- **Dedicated hero section** with service-specific messaging
- **Comprehensive description** (300+ words) explaining the technology
- **4 feature cards** highlighting key benefits
- **Technology logos** relevant to the service
- **SEO optimization** with metadata and JSON-LD

Available service pages:
- `/free-ssd-hosting` - NVMe SSD storage benefits
- `/free-redis-hosting` - Redis object caching
- `/free-litespeed-hosting` - LiteSpeed web server
- `/free-wordpress-hosting` - Complete WordPress solution
- `/free-cpanel-hosting` - cPanel control panel

### Support Page (`/support`)
- Email support contact
- Client area link
- Response time information
- Common FAQ
- CTA to get started

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file (optional):

```env
NEXT_PUBLIC_SITE_URL=https://wpineu.com
```

### Next.js Config

Key optimizations in `next.config.js`:
- Compression enabled
- Image optimization (WebP, AVIF)
- Package import optimization
- Aggressive caching headers
- Security headers
- Blog redirects to `wp.wpineu.com`

---

## 🎯 Performance Optimizations

### Bundle Size Reduction
- ✅ LazyMotion instead of full Framer Motion (~30KB savings per component)
- ✅ Dynamic imports for below-the-fold components
- ✅ Optimized package imports (Lucide React, Framer Motion)
- ✅ Tree-shaking enabled

### Loading Performance
- ✅ Font preloading with `display: swap`
- ✅ Third-party scripts with `lazyOnload` strategy
- ✅ Image lazy loading
- ✅ Code splitting by route

### Caching Strategy
- ✅ Static assets: 1 year cache
- ✅ Images: Immutable cache
- ✅ Next.js static files: Immutable cache

---

## 🔒 Security

- **Security Headers**: X-Frame-Options, X-Content-Type-Options, XSS Protection
- **Referrer Policy**: Strict origin when cross-origin
- **DNS Prefetch Control**: Enabled
- **Content Security**: Proper CSP headers

---

## 📊 SEO Features

### Metadata
- Comprehensive title and description for each page
- OpenGraph tags for social sharing
- Twitter Card configuration
- Canonical URLs
- Keywords optimization

### Structured Data
- Organization schema
- Service schemas for each hosting type
- Proper JSON-LD implementation

### Sitemap & Robots
- Dynamic XML sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Proper indexing directives

---

## 🧪 Testing

### Recommended Tools
- **Lighthouse**: Performance, SEO, Accessibility audits
- **PageSpeed Insights**: Core Web Vitals
- **axe DevTools**: Accessibility testing
- **WAVE**: Web accessibility evaluation

### Expected Scores
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Deploy

### Manual Deployment

```bash
pnpm build
pnpm start
```

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Private use

---

## 🙏 Credits

**Developed by**: [administraktor.com](https://administraktor.com)

**Powered by**: [wpineu.com](https://wpineu.com) - Premium Free WordPress Hosting in Europe

### Technologies Used
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vercel](https://vercel.com/) - Deployment platform

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact & Support

- **Website**: [wpineu.com](https://wpineu.com)
- **Email**: support@wpineu.com
- **Client Area**: [clients.wpineu.com](https://clients.wpineu.com)
- **Blog**: [wp.wpineu.com](https://wp.wpineu.com)
- **Uptime**: [uptime.wpineu.com](https://uptime.wpineu.com)

---

## 🌟 Show Your Support

If you find this project useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with others

---

## 🌐 More from the Developer

Check out our other innovative projects:

### 🤖 [bornAI.app](https://bornai.app)
**Free Generative AI Platform**
A powerful AI platform for bloggers, content creators, and developers. Generate text, images, and code completely free.
- ✍️ AI Blog Writing
- 🎨 Image Generation
- 💻 Code Assistant

### 📰 [aiNewsFuse.com](https://ainewsfuse.com)
**Latest AI News & Trends**
Stay updated with the fast-paced world of Artificial Intelligence. Curated news, trends, and breakthroughs in AI technology.

### 👨‍� [administraktor.com](https://administraktor.com)
**Main Homepage**
The central hub for all our projects, services, and development portfolio.

---

<div align="center">

**Made with ❤️ by [administraktor.com](https://administraktor.com)**

**Hosted on [wpineu.com](https://wpineu.com) - Free WordPress Hosting in Europe**

</div>
