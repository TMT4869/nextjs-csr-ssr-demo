# 🚀 Next.js CSR vs SSR Demo

A comprehensive demonstration comparing **Client Side Rendering (CSR)**, **Server Side Rendering (SSR)**, and **Hybrid Rendering** in Next.js 15.

## 🌐 Live Demo

**🔗 [View Live Demo](https://nextjs-csr-ssr-demo.vercel.app/)**

## 📋 Overview

- **🔥 CSR Demo** - Client rendering with interactive UI
- **⚡ SSR Optimized** - Server rendering with Suspense streaming
- **🐌 SSR Blocking** - Traditional blocking SSR comparison
- **🎯 Hybrid Blog** - Optimized SSR + CSR combination

## ✨ Key Features

- **📱 Responsive Design** - Mobile-first, 320px → desktop
- **🌍 Internationalization** - English/Vietnamese toggle
- **🔍 Real-time Search** - Client-side filtering
- ** Skeleton Loading** - Smooth loading states
- **⚡ Suspense Streaming** - Progressive loading

## �️ Tech Stack

- **Next.js 15.3.4** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Server/Client Components**
- **Cookie-based i18n**

## 🚀 Quick Start

```bash
# Clone & install
git clone https://github.com/[your-username]/nextjs-csr-ssr-demo.git
cd nextjs-csr-ssr-demo
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📖 Demo Pages

### 🏠 Homepage (`/`)

CSR demo with responsive navigation and language toggle

### ⚡ Blog Optimized (`/blog`)

**Hybrid Strategy:**

- ✅ Instant page load (SSR)
- ✅ Interactive search/filter (CSR)
- ✅ Suspense streaming data
- ✅ Full i18n support

### 🐌 Blog Slow (`/blog-slow`)

**Blocking SSR:**

- ❌ 5s delay demo
- ❌ Poor UX experience
- ✅ SEO friendly

## 📊 Performance Comparison

| Strategy             | First Paint | Interactive | SEO      | UX Score    |
| -------------------- | ----------- | ----------- | -------- | ----------- |
| **Pure CSR**         | ⚡ Fast     | 🐌 Slow     | ❌ Poor  | 6/10        |
| **Blocking SSR**     | 🐌 Slow     | ⚡ Fast     | ✅ Great | 7/10        |
| **Hybrid Optimized** | ⚡ Fast     | ⚡ Fast     | ✅ Great | 🎯 **9/10** |

## � Key Techniques

```tsx
// SSR with Suspense Streaming
<Suspense fallback={<Loading />}>
  <BlogListSSR />
</Suspense>;

// Client-side Interactivity
("use client");
export default function SearchBar() {
  // Interactive logic
}

// i18n Support
const { t, language } = useLanguage();
const t = getServerTranslation(language);
```

## 🚀 Deployment

**Live on Vercel**: [https://nextjs-csr-ssr-demo.vercel.app/](https://nextjs-csr-ssr-demo.vercel.app/)

```bash
npm i -g vercel
vercel --prod
```

## 📝 License

MIT License

---

**Built with ❤️ using Next.js 15 + React 19 + TypeScript + Tailwind CSS 4**
