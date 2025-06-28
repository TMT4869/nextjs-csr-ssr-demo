"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    "nav.csrDemo": "🔄 CSR Demo",
    "nav.ssrDemo": "⚡ SSR Demo",
    "nav.comparison": "📊 Comparison",
    "nav.blogFast": "📝 Blog (Fast)",
    "nav.blogSlow": "🐌 Blog (Slow)",
    "nav.detailedComparison": "📊 Detailed Comparison",
    "nav.blogOptimized": "Blog (Optimized)",
    "nav.blogSlowSSR": "Blog (Slow SSR)",

    // Hero Section
    "hero.title": "CSR vs SSR",
    "hero.description":
      "Explore the differences between Client-Side Rendering and Server-Side Rendering in Next.js through practical demos",
    "hero.nextjs": "🚀 Next.js 14+",
    "hero.performance": "⚡ Performance Demo",
    "hero.optimization": "🔧 Optimization Techniques",

    // Quick Comparison
    "comparison.title": "Quick CSR vs SSR Comparison",

    // Demo Section
    "demo.title": "Experience the Demos",
    "demo.csr.title": "CSR Demo",
    "demo.csr.description":
      "Client-Side Rendering with loading states and 3s delay",
    "demo.ssr.title": "SSR Demo",
    "demo.ssr.description":
      "Server-Side Rendering with 2s delay to demo performance",
    "demo.comparison.title": "Detailed Comparison",
    "demo.comparison.description":
      "Detailed performance analysis and use cases",
    "demo.blogOptimized.title": "Blog (Optimized)",
    "demo.blogOptimized.description": "Streaming & Suspense for optimized UX",
    "demo.blogSlow.title": "Blog (Slow SSR)",
    "demo.blogSlow.description": "Blocking SSR with 5s delay for comparison",

    // Footer
    "footer.copyright":
      "© 2025 Next.js CSR vs SSR Demo. Built with Next.js 14+ and TypeScript.",

    // Blog Pages
    "blog.title": "TechBlog (Optimized)",
    "blog.description":
      "Optimization demo: Fast page load + Separate data streaming",
    "blog.instantLoad": "⚡ Instant page load",
    "blog.suspenseStreaming": "🔄 Suspense streaming",
    "blog.optimizedUX": "🚀 Optimized UX",
    "blog.strategy": "🔧 Optimized Strategy",
    "blog.pageInstant": "✓ Page: Instant load",
    "blog.statsSSR": "✓ Stats: SSR with Suspense",
    "blog.blogListSSR": "✓ Blog List: SSR with Suspense",
    "blog.searchFilter": "✓ Search/Filter: CSR interactive",

    "blogSlow.title": "TechBlog (Slow SSR)",
    "blogSlow.description":
      "Blocking SSR demo - must wait 5s for page to display",
    "blogSlow.blockingSSR": "❌ Blocking SSR (5s delay)",
    "blogSlow.poorUX": "😴 Poor UX",
    "blogSlow.seoFriendly": "📊 SEO friendly",

    // Search & Filter
    "search.title": "Search",
    "search.placeholder": "Search articles...",
    "search.searching": "Searching: ",
    "filter.title": "Categories",
    "filter.all": "All",
    "filter.filtering": "Filtering by: ",

    // Stats
    "stats.title": "📈 Statistics",
    "stats.totalPosts": "Total posts:",
    "stats.categories": "Categories:",
    "stats.authors": "Authors:",
    "stats.ssrDelay": "SSR Delay:",
    "stats.streamed": "5s (Streamed)",

    // Loading
    "loading.title": "Loading Blog (Slow SSR)...",
    "loading.description":
      "Server is fetching data with 5s delay. This is a blocking SSR demo - the entire page must wait for server processing.",
    "loading.processing": "SSR Processing...",
    "loading.seconds": "~5 seconds",
    "loading.demo.title": "🐌 Blocking SSR Demo",
    "loading.demo.mustFetch": "• Server must fetch all data first",
    "loading.demo.noInteraction": "• User cannot interact while waiting",
    "loading.demo.singleRender": "• Entire HTML rendered at once",
    "loading.demo.seoGood": "• Good SEO but poor UX",

    // Blog List
    "blogList.loadingFromServer": "SSR: Loading blog data from server (5s)...",

    // CSR Demo
    "csr.title": "CSR Demo - Client Side Rendering",
    "csr.subtitle": "Data loaded after component mount (useEffect)",
    "csr.backButton": "← Back",
    "csr.performanceInfo": "📊 Performance Information",
    "csr.clientFetchTime": "Client fetch time (~3s API)",
    "csr.fastInteraction": "Fast interaction after load",
    "csr.poorSEO": "Poor SEO Score",
    "csr.characteristics": "🔍 CSR Characteristics",
    "csr.advantages": "✅ Advantages:",
    "csr.adv1": "• Fast interaction after loading",
    "csr.adv2": "• Reduces server load",
    "csr.adv3": "• SPA-like experience",
    "csr.adv4": "• Suitable for interactive apps",
    "csr.disadvantages": "❌ Disadvantages:",
    "csr.dis1": "• Poor SEO (data loads later)",
    "csr.dis2": "• Blank page during loading",
    "csr.dis3": "• Depends on JavaScript",
    "csr.dis4": "• Larger bundle size",
    "csr.loadingPosts": "📄 Blog List (CSR)",
    "csr.loadingText": "Loading data from client side...",
    "csr.loadingTime": "⏱️ Expected load time: ~3 seconds",
    "csr.loadingNote":
      "💡 Note: Users see a blank page/loading for 3 seconds until API returns data. Then interaction is very smooth!",
    "csr.error": "❌ Error: ",
    "csr.author": "By: ",
    "csr.codeExample": "💻 Code Example",

    // SSR Demo
    "ssr.title": "SSR Demo - Server Side Rendering",
    "ssr.subtitle": "Data loaded on server before sending HTML to client",
    "ssr.backButton": "← Back",
    "ssr.performanceInfo": "📊 Performance Information",
    "ssr.serverProcessingTime": "Server processing time (~2s API)",
    "ssr.excellentSEO": "Excellent SEO Score",
    "ssr.fastFCP": "Fast First Contentful Paint",
    "ssr.characteristics": "🔍 SSR Characteristics",
    "ssr.advantages": "✅ Advantages:",
    "ssr.adv1": "• Good SEO (HTML has data)",
    "ssr.adv2": "• Fast First Contentful Paint",
    "ssr.adv3": "• Works when JS is disabled",
    "ssr.adv4": "• Suitable for news, blogs",
    "ssr.disadvantages": "❌ Disadvantages:",
    "ssr.dis1": "• Higher server load",
    "ssr.dis2": "• Slower Time to Interactive",
    "ssr.dis3": "• Depends on server performance",
    "ssr.dis4": "• Hydration can be slow",
    "ssr.serverInfo": "🖥️ Server Information",
    "ssr.renderTime": "Render Time:",
    "ssr.postsCount": "Posts Count:",
    "ssr.serverLoadTime": "Server Load Time:",
    "ssr.rendering": "Rendering:",
    "ssr.serverSide": "Server Side",
    "ssr.loadingPosts": "📄 Blog List (SSR)",
    "ssr.author": "By: ",
    "ssr.codeExample": "💻 Code Example",
    "ssr.seoNote":
      "💡 Note: Although API takes 2 seconds, users see content immediately because data was pre-rendered on server!",
    "ssr.seoBenefits": "🚀 SEO Benefits",
    "ssr.seoDescription":
      "This page has complete HTML with data when loaded, great for SEO!",
    "ssr.viewSource": "View Page Source to see data is already in HTML",

    // Comparison Page
    "comp.title": "CSR vs SSR Comparison",
    "comp.subtitle":
      "Detailed analysis of advantages and disadvantages of each rendering method",
    "comp.backHome": "← Home",
    "comp.csrDemo": "🖥️ View CSR Demo",
    "comp.csrDemoDesc": "Experience Client Side Rendering in practice",
    "comp.ssrDemo": "🖥️ View SSR Demo",
    "comp.ssrDemoDesc": "Experience Server Side Rendering in practice",
    "comp.performanceComparison": "📊 Detailed Performance Comparison",
    "comp.whenCSR": "🎯 When to use CSR?",
    "comp.whenSSR": "🎯 When to use SSR?",
    "comp.csrUse1": "Interactive applications (dashboard, admin panel)",
    "comp.csrUse2": "Single Page Applications (SPA)",
    "comp.csrUse3": "When SEO is not important",
    "comp.csrUse4": "Frequently changing data",
    "comp.csrUse5": "Want to reduce server load",
    "comp.ssrUse1": "News websites, blogs, e-commerce",
    "comp.ssrUse2": "SEO is top priority",
    "comp.ssrUse3": "Need fast First Contentful Paint",
    "comp.ssrUse4": "Users have slow network",
    "comp.ssrUse5": "Relatively static content",
    "comp.hybridTitle": "🚀 Hybrid Approach",
    "comp.hybridDesc":
      "Next.js 14+ App Router allows you to combine both CSR and SSR in the same application. Use SSR for pages that need SEO and CSR for interactive sections.",
    "comp.serverComponents": "Server Components",
    "comp.serverComponentsDesc": "Default SSR for SEO",
    "comp.clientComponents": "Client Components",
    "comp.clientComponentsDesc": "CSR with 'use client'",
    "comp.staticGeneration": "Static Generation",
    "comp.staticGenerationDesc": "Best for performance",

    // Performance Table
    "perf.title": "📊 Detailed Performance Comparison",
    "perf.subtitle": "Evaluation of important metrics between CSR and SSR",
    "perf.metrics": "Metrics",
    "perf.csr": "CSR (Client Side)",
    "perf.ssr": "SSR (Server Side)",
    "perf.good": "Good",
    "perf.average": "Average",
    "perf.poor": "Poor",

    // Blog List
    "blogList.latestPosts": "Latest Posts",
    "blogList.showing": "Showing {filtered} / {total} posts",
    "blogList.searchFor": 'Search: "{query}"',
    "blogList.category": "Category: {category}",
    "blogList.noResults": "No posts found",
    "blogList.noResultsDesc":
      "Try changing search keywords or different categories",
    "blogList.filteringResults": "Filtering results...",
    "blogList.loadMore": "Load more posts",
    "blogList.loadMoreDesc": "(Will use CSR to fetch more data)",
    "blogList.readTime": "{time} min read",

    // Navbar
    "navbar.home": "Home",
    "navbar.categories": "Categories",
    "navbar.about": "About",
    "navbar.backToDemo": "← Back to Demo",

    // Language
    "language.english": "English",
    "language.vietnamese": "Tiếng Việt",

    // ClientBlogList
    "clientBlog.loading": "CSR: Loading blog data from client...",
    "clientBlog.success":
      "✅ CSR: Blog data loaded successfully ({count} posts)",
    "clientBlog.author": "👤 {author}",
    "clientBlog.date": "📅 {date}",
    "clientBlog.readTime": "⏱️ {time} min read",

    // Loading page
    "loading.blogSlow": "Loading Blog (Slow SSR)...",
    "loading.serverFetching":
      "Server is fetching data with 5s delay. This is a blocking SSR demo - the entire page must wait for server processing.",
    "loading.ssrProcessing": "SSR Processing...",
    "loading.estimatedTime": "~5 seconds",
    "loading.blockingDemo": "🐌 Blocking SSR Demo",
    "loading.serverMustFetch": "• Server must fetch all data first",
    "loading.noInteraction": "• User cannot interact while waiting",
    "loading.singleRender": "• Entire HTML rendered at once",
    "loading.seoGood": "• Good SEO but poor UX",

    // Utils and Mock Data
    "mock.postTitle": "Post {number} - Loaded from {type}",
    "mock.csrContent":
      "This is data fetched from client side after component has mounted.",
    "mock.ssrContent":
      "This is data fetched from server side before sending HTML to client.",
    "mock.author": "Author {number}",
    "mock.content": "Content of post {number}. {description}",

    // Search functionality
    "search.clearLabel": "Clear search",

    // Performance Metrics
    "perf.firstContentfulPaint": "First Contentful Paint",
    "perf.timeToInteractive": "Time to Interactive",
    "perf.seoScore": "SEO Score",
    "perf.serverLoad": "Server Load",
    "perf.initialBundleSize": "Initial Bundle Size",

    "perf.csr.fcp.desc": "Must load JS and fetch data first",
    "perf.csr.tti.desc": "Immediate interaction after loading",
    "perf.csr.seo.desc": "Crawler cannot see dynamic content",
    "perf.csr.server.desc": "Only serves static files",
    "perf.csr.bundle.desc": "Must load entire JS app",

    "perf.ssr.fcp.desc": "HTML has content immediately",
    "perf.ssr.tti.desc": "Needs hydration for interaction",
    "perf.ssr.seo.desc": "HTML has complete content",
    "perf.ssr.server.desc": "Must render HTML for each request",
    "perf.ssr.bundle.desc": "Only needs HTML + minimal JS",

    "perf.slow": "Slow",
    "perf.fast": "Fast",
    "perf.medium": "Medium",
    "perf.low": "Low",
    "perf.high": "High",
    "perf.large": "Large",
    "perf.small": "Small",
    "perf.excellent": "Excellent",

    // Rendering Info
    "render.ssrInitialData": "SSR: Initial Data",
    "render.csrFilterSearch": "CSR: Filter & Search",

    // Blog Content
    "blog.title1": "Complete React Hooks Guide for Beginners",
    "blog.title2": "CSR vs SSR Comparison in Next.js 14",
    "blog.title3": "Useful TypeScript Tips and Tricks",
    "blog.title4": "Performance Optimization with React.memo and useCallback",
    "blog.title5": "CSS Grid Layout: From Basics to Advanced",
    "blog.title6": "Node.js Best Practices in 2024",
    "blog.title7": "Database Indexing and Query Optimization",
    "blog.title8": "Docker and Kubernetes for Developers",
    "blog.title9": "JWT Authentication in Node.js",
    "blog.title10": "State Management with Zustand",
    "blog.title11": "Serverless Functions with Vercel",
    "blog.title12": "GraphQL vs REST API",
    "blog.title13": "Testing in React with Jest",
    "blog.title14": "Responsive Design with Tailwind CSS",
    "blog.title15": "Microservices Architecture Patterns",

    "blog.contentTemplate": "This is the detailed content of the article \"{title}\". This article belongs to the {category} category and provides useful knowledge for developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "blog.excerptTemplate": "Learn about {category} and essential knowledge for modern developers.",

    "blog.tags.tutorial": "Tutorial",
    "blog.tags.tips": "Tips",
    "blog.tags.beginner": "Beginner",
    "blog.tags.advanced": "Advanced",
  },
  vi: {
    // Navigation
    "nav.csrDemo": "🔄 CSR Demo",
    "nav.ssrDemo": "⚡ SSR Demo",
    "nav.comparison": "📊 So sánh",
    "nav.blogFast": "📝 Blog (Nhanh)",
    "nav.blogSlow": "🐌 Blog (Chậm)",
    "nav.detailedComparison": "📊 So sánh chi tiết",
    "nav.blogOptimized": "Blog (Tối ưu)",
    "nav.blogSlowSSR": "Blog (SSR Chậm)",

    // Hero Section
    "hero.title": "CSR vs SSR",
    "hero.description":
      "Khám phá sự khác biệt giữa Client-Side Rendering và Server-Side Rendering trong Next.js thông qua các demo thực tế",
    "hero.nextjs": "🚀 Next.js 14+",
    "hero.performance": "⚡ Performance Demo",
    "hero.optimization": "🔧 Optimization Techniques",

    // Quick Comparison
    "comparison.title": "So sánh nhanh CSR vs SSR",

    // Demo Section
    "demo.title": "Trải nghiệm các Demo",
    "demo.csr.title": "CSR Demo",
    "demo.csr.description":
      "Client-Side Rendering với loading states và 3s delay",
    "demo.ssr.title": "SSR Demo",
    "demo.ssr.description":
      "Server-Side Rendering với 2s delay để demo performance",
    "demo.comparison.title": "So sánh chi tiết",
    "demo.comparison.description":
      "Phân tích chi tiết performance và use cases",
    "demo.blogOptimized.title": "Blog (Tối ưu)",
    "demo.blogOptimized.description": "Streaming & Suspense để tối ưu UX",
    "demo.blogSlow.title": "Blog (SSR Chậm)",
    "demo.blogSlow.description": "Blocking SSR với 5s delay để so sánh",

    // Footer
    "footer.copyright":
      "© 2025 Next.js CSR vs SSR Demo. Được xây dựng với Next.js 14+ và TypeScript.",

    // Blog Pages
    "blog.title": "TechBlog (Tối ưu)",
    "blog.description":
      "Demo tối ưu hóa: Trang load nhanh + Data stream riêng biệt",
    "blog.instantLoad": "⚡ Instant page load",
    "blog.suspenseStreaming": "🔄 Suspense streaming",
    "blog.optimizedUX": "🚀 Optimized UX",
    "blog.strategy": "🔧 Optimized Strategy",
    "blog.pageInstant": "✓ Page: Instant load",
    "blog.statsSSR": "✓ Stats: SSR with Suspense",
    "blog.blogListSSR": "✓ Blog List: SSR with Suspense",
    "blog.searchFilter": "✓ Search/Filter: CSR interactive",

    "blogSlow.title": "TechBlog (SSR Chậm)",
    "blogSlow.description": "Demo blocking SSR - phải chờ 5s để trang hiển thị",
    "blogSlow.blockingSSR": "❌ Blocking SSR (5s delay)",
    "blogSlow.poorUX": "😴 Poor UX",
    "blogSlow.seoFriendly": "📊 SEO friendly",

    // Search & Filter
    "search.title": "Tìm kiếm",
    "search.placeholder": "Tìm kiếm bài viết...",
    "search.searching": "Đang tìm kiếm: ",
    "filter.title": "Danh mục",
    "filter.all": "Tất cả",
    "filter.filtering": "Đang lọc theo: ",

    // Stats
    "stats.title": "📈 Thống kê",
    "stats.totalPosts": "Tổng bài viết:",
    "stats.categories": "Danh mục:",
    "stats.authors": "Tác giả:",
    "stats.ssrDelay": "SSR Delay:",
    "stats.streamed": "5s (Streamed)",

    // Blog List
    "blogList.loadingFromServer":
      "SSR: Đang tải dữ liệu blog từ máy chủ (5 giây)...",

    // CSR Demo
    "csr.title": "CSR Demo - Client Side Rendering",
    "csr.subtitle": "Dữ liệu được tải sau khi component mount (useEffect)",
    "csr.backButton": "← Quay lại",
    "csr.performanceInfo": "📊 Thông tin Performance",
    "csr.clientFetchTime": "Client fetch time (~3s API)",
    "csr.fastInteraction": "Tương tác sau load",
    "csr.poorSEO": "SEO Score",
    "csr.characteristics": "🔍 Đặc điểm của CSR",
    "csr.advantages": "✅ Ưu điểm:",
    "csr.adv1": "• Tương tác nhanh sau khi load xong",
    "csr.adv2": "• Giảm tải cho server",
    "csr.adv3": "• Trải nghiệm như SPA",
    "csr.adv4": "• Phù hợp với ứng dụng tương tác nhiều",
    "csr.disadvantages": "❌ Nhược điểm:",
    "csr.dis1": "• SEO không tốt (dữ liệu load sau)",
    "csr.dis2": "• Trang trắng trong lúc loading",
    "csr.dis3": "• Phụ thuộc vào JavaScript",
    "csr.dis4": "• Bundle size lớn hơn",
    "csr.loadingPosts": "📄 Danh sách bài viết (CSR)",
    "csr.loadingText": "Đang tải dữ liệu từ client side...",
    "csr.loadingTime": "⏱️ Thời gian tải dự kiến: ~3 giây",
    "csr.loadingNote":
      "💡 Lưu ý: Người dùng thấy trang trắng/loading trong 3 giây cho đến khi API trả về dữ liệu. Sau đó tương tác rất mượt mà!",
    "csr.error": "❌ Lỗi: ",
    "csr.author": "Bởi: ",
    "csr.codeExample": "💻 Code Example",

    // SSR Demo
    "ssr.title": "SSR Demo - Server Side Rendering",
    "ssr.subtitle": "Dữ liệu được tải trên server trước khi gửi HTML về client",
    "ssr.backButton": "← Quay lại",
    "ssr.performanceInfo": "📊 Thông tin Performance",
    "ssr.serverProcessingTime": "Server processing time (~2s API)",
    "ssr.excellentSEO": "SEO Score",
    "ssr.fastFCP": "First Contentful Paint",
    "ssr.characteristics": "🔍 Đặc điểm của SSR",
    "ssr.advantages": "✅ Ưu điểm:",
    "ssr.adv1": "• SEO tốt (HTML có sẵn dữ liệu)",
    "ssr.adv2": "• First Contentful Paint nhanh",
    "ssr.adv3": "• Hoạt động tốt khi JS bị tắt",
    "ssr.adv4": "• Phù hợp với trang tin tức, blog",
    "ssr.disadvantages": "❌ Nhược điểm:",
    "ssr.dis1": "• Tải server cao hơn",
    "ssr.dis2": "• Time to Interactive chậm hơn",
    "ssr.dis3": "• Phụ thuộc vào server performance",
    "ssr.dis4": "• Hydration có thể chậm",
    "ssr.serverInfo": "🖥️ Server Information",
    "ssr.renderTime": "Render Time:",
    "ssr.postsCount": "Posts Count:",
    "ssr.serverLoadTime": "Server Load Time:",
    "ssr.rendering": "Rendering:",
    "ssr.serverSide": "Server Side",
    "ssr.loadingPosts": "📄 Danh sách bài viết (SSR)",
    "ssr.author": "Bởi: ",
    "ssr.codeExample": "💻 Code Example",
    "ssr.seoNote":
      "💡 Lưu ý: Mặc dù API mất 2 giây nhưng người dùng thấy nội dung ngay lập tức vì dữ liệu đã được render sẵn trên server!",
    "ssr.seoBenefits": "🚀 SEO Benefits",
    "ssr.seoDescription":
      "Trang này có HTML hoàn chỉnh với dữ liệu khi tải, rất tốt cho SEO!",
    "ssr.viewSource": "View Page Source để thấy dữ liệu đã có trong HTML",

    // Comparison Page
    "comp.title": "So sánh CSR vs SSR",
    "comp.subtitle":
      "Phân tích chi tiết ưu nhược điểm của từng phương pháp rendering",
    "comp.backHome": "← Trang chủ",
    "comp.csrDemo": "🖥️ Xem CSR Demo",
    "comp.csrDemoDesc": "Trải nghiệm Client Side Rendering thực tế",
    "comp.ssrDemo": "🖥️ Xem SSR Demo",
    "comp.ssrDemoDesc": "Trải nghiệm Server Side Rendering thực tế",
    "comp.performanceComparison": "📊 So sánh Performance Chi tiết",
    "comp.whenCSR": "🎯 Khi nào nên dùng CSR?",
    "comp.whenSSR": "🎯 Khi nào nên dùng SSR?",
    "comp.csrUse1": "Ứng dụng tương tác nhiều (dashboard, admin panel)",
    "comp.csrUse2": "Ứng dụng một trang (SPA)",
    "comp.csrUse3": "Khi SEO không quan trọng",
    "comp.csrUse4": "Dữ liệu thay đổi thường xuyên",
    "comp.csrUse5": "Muốn giảm tải server",
    "comp.ssrUse1": "Website tin tức, blog, e-commerce",
    "comp.ssrUse2": "SEO là ưu tiên hàng đầu",
    "comp.ssrUse3": "Cần First Contentful Paint nhanh",
    "comp.ssrUse4": "Người dùng có mạng chậm",
    "comp.ssrUse5": "Nội dung tương đối tĩnh",
    "comp.hybridTitle": "🚀 Phương pháp Hybrid",
    "comp.hybridDesc":
      "Next.js 14+ App Router cho phép bạn kết hợp cả CSR và SSR trong cùng một ứng dụng. Sử dụng SSR cho các trang cần SEO và CSR cho các phần tương tác.",
    "comp.serverComponents": "Server Components",
    "comp.serverComponentsDesc": "Default SSR cho SEO",
    "comp.clientComponents": "Client Components",
    "comp.clientComponentsDesc": "CSR với 'use client'",
    "comp.staticGeneration": "Static Generation",
    "comp.staticGenerationDesc": "Tối ưu nhất cho performance",

    // Performance Table
    "perf.title": "📊 So sánh Performance Chi tiết",
    "perf.subtitle": "Đánh giá các metrics quan trọng giữa CSR và SSR",
    "perf.metrics": "Metrics",
    "perf.csr": "CSR (Client Side)",
    "perf.ssr": "SSR (Server Side)",
    "perf.good": "Tốt",
    "perf.average": "Trung bình",
    "perf.poor": "Kém",

    // Blog List
    "blogList.latestPosts": "Bài viết mới nhất",
    "blogList.showing": "Hiển thị {filtered} / {total} bài viết",
    "blogList.searchFor": 'Tìm kiếm: "{query}"',
    "blogList.category": "Danh mục: {category}",
    "blogList.noResults": "Không tìm thấy bài viết",
    "blogList.noResultsDesc":
      "Thử thay đổi từ khóa tìm kiếm hoặc danh mục khác",
    "blogList.filteringResults": "Đang lọc kết quả...",
    "blogList.loadMore": "Tải thêm bài viết",
    "blogList.loadMoreDesc": "(Sẽ sử dụng CSR để fetch thêm dữ liệu)",
    "blogList.readTime": "{time} phút đọc",

    // Navbar
    "navbar.home": "Trang chủ",
    "navbar.categories": "Danh mục",
    "navbar.about": "Giới thiệu",
    "navbar.backToDemo": "← Về Demo",

    // Language
    "language.english": "English",
    "language.vietnamese": "Tiếng Việt",

    // ClientBlogList
    "clientBlog.loading": "CSR: Đang tải dữ liệu blog từ client...",
    "clientBlog.success":
      "✅ CSR: Dữ liệu blog đã tải thành công ({count} bài viết)",
    "clientBlog.author": "👤 {author}",
    "clientBlog.date": "📅 {date}",
    "clientBlog.readTime": "⏱️ {time} phút đọc",

    // Loading page
    "loading.blogSlow": "Đang tải Blog (Slow SSR)...",
    "loading.serverFetching":
      "Server đang fetch dữ liệu với 5s delay. Đây là demo blocking SSR - toàn bộ trang phải chờ server xử lý xong.",
    "loading.ssrProcessing": "SSR Processing...",
    "loading.estimatedTime": "~5 giây",
    "loading.blockingDemo": "🐌 Blocking SSR Demo",
    "loading.serverMustFetch": "• Server phải fetch tất cả dữ liệu trước",
    "loading.noInteraction": "• User không thể tương tác trong lúc chờ",
    "loading.singleRender": "• Toàn bộ HTML render một lần",
    "loading.seoGood": "• SEO tốt nhưng UX kém",

    // Utils and Mock Data
    "mock.postTitle": "Post {number} - Được tải từ {type}",
    "mock.csrContent":
      "Đây là dữ liệu được fetch từ client side sau khi component đã mount.",
    "mock.ssrContent":
      "Đây là dữ liệu được fetch từ server side trước khi gửi HTML về client.",
    "mock.author": "Tác giả {number}",
    "mock.content": "Nội dung của bài viết {number}. {description}",

    // Search functionality
    "search.clearLabel": "Xóa tìm kiếm",

    // Performance Metrics
    "perf.firstContentfulPaint": "First Contentful Paint",
    "perf.timeToInteractive": "Time to Interactive",
    "perf.seoScore": "SEO Score",
    "perf.serverLoad": "Server Load",
    "perf.initialBundleSize": "Initial Bundle Size",

    "perf.csr.fcp.desc": "Phải tải JS và fetch data trước",
    "perf.csr.tti.desc": "Sau khi load xong thì tương tác ngay",
    "perf.csr.seo.desc": "Crawler không thấy nội dung dynamic",
    "perf.csr.server.desc": "Chỉ serve static files",
    "perf.csr.bundle.desc": "Cần tải toàn bộ JS app",

    "perf.ssr.fcp.desc": "HTML có nội dung ngay lập tức",
    "perf.ssr.tti.desc": "Cần hydration để tương tác",
    "perf.ssr.seo.desc": "HTML có đầy đủ nội dung",
    "perf.ssr.server.desc": "Phải render HTML cho mỗi request",
    "perf.ssr.bundle.desc": "Chỉ cần HTML + minimal JS",

    "perf.slow": "Chậm",
    "perf.fast": "Nhanh",
    "perf.medium": "Trung bình",
    "perf.low": "Thấp",
    "perf.high": "Cao",
    "perf.large": "Lớn",
    "perf.small": "Nhỏ",
    "perf.excellent": "Xuất sắc",

    // Rendering Info
    "render.ssrInitialData": "SSR: Dữ liệu ban đầu",
    "render.csrFilterSearch": "CSR: Lọc & Tìm kiếm",

    // Blog Content
    "blog.title1": "Hướng dẫn React Hooks chi tiết cho người mới bắt đầu",
    "blog.title2": "So sánh CSR vs SSR trong Next.js 14",
    "blog.title3": "TypeScript Tips và Tricks hữu ích",
    "blog.title4": "Tối ưu performance với React.memo và useCallback",
    "blog.title5": "CSS Grid Layout: Từ cơ bản đến nâng cao",
    "blog.title6": "Node.js Best Practices trong 2024",
    "blog.title7": "Database Indexing và Query Optimization",
    "blog.title8": "Docker và Kubernetes cho developers",
    "blog.title9": "JWT Authentication trong Node.js",
    "blog.title10": "State Management với Zustand",
    "blog.title11": "Serverless Functions với Vercel",
    "blog.title12": "GraphQL vs REST API",
    "blog.title13": "Testing trong React với Jest",
    "blog.title14": "Responsive Design với Tailwind CSS",
    "blog.title15": "Microservices Architecture patterns",

    "blog.contentTemplate": "Đây là nội dung chi tiết của bài viết \"{title}\". Bài viết này thuộc danh mục {category} và cung cấp những kiến thức hữu ích cho developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "blog.excerptTemplate": "Tìm hiểu về {category} và những kiến thức cần thiết cho developers hiện đại.",

    "blog.tags.tutorial": "Tutorial",
    "blog.tags.tips": "Tips",
    "blog.tags.beginner": "Beginner",
    "blog.tags.advanced": "Advanced",
  },
};

// Helper function to get cookie value
const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from cookie on mount
  useEffect(() => {
    const savedLanguage = getCookie("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vi")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to cookie when it changes
  useEffect(() => {
    // Set cookie that expires in 1 year
    document.cookie = `language=${language}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
