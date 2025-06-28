"use client";

import { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import BlogList from "@/components/BlogList";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import { BlogPost } from "@/lib/blog-utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Loading components
function SearchBarLoading() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="animate-pulse">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-20"></div>
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}

function CategoryFilterLoading() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="animate-pulse">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-24"></div>
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface BlogSlowClientProps {
  initialBlogs: BlogPost[];
}

export default function BlogSlowClient({ initialBlogs }: BlogSlowClientProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
            {t("blogSlow.title")}
          </h1>
          <p className="text-sm sm:text-xl lg:text-2xl text-red-100 mb-6 sm:mb-8 max-w-xs sm:max-w-3xl mx-auto px-2">
            {t("blogSlow.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm px-2">
            <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
              {t("blogSlow.blockingSSR")}
            </span>
            <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
              {t("blogSlow.poorUX")}
            </span>
            <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
              {t("blogSlow.seoFriendly")}
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="grid lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Search - CSR Component */}
              <Suspense fallback={<SearchBarLoading />}>
                <SearchBar />
              </Suspense>

              {/* Categories - CSR Component */}
              <Suspense fallback={<CategoryFilterLoading />}>
                <CategoryFilter />
              </Suspense>

              {/* Stats - SSR */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {t("stats.title")}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("stats.totalPosts")}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {initialBlogs.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("stats.categories")}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      8
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("stats.authors")}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      5
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("stats.ssrDelay")}
                    </span>
                    <span className="font-semibold text-red-600 dark:text-red-400">
                      5s (BLOCKING)
                    </span>
                  </div>
                </div>
              </div>

              {/* Rendering Info */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-red-200 dark:border-red-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ❌ Blocking Strategy
                </h4>
                <ul className="text-sm space-y-1">
                  <li className="text-red-700 dark:text-red-300">
                    ❌ Entire page: 5s delay
                  </li>
                  <li className="text-red-700 dark:text-red-300">
                    ❌ User waits for everything
                  </li>
                  <li className="text-orange-700 dark:text-orange-300">
                    ⚠️ Poor UX but good SEO
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Blog List - Blocking SSR */}
            <BlogList initialBlogs={initialBlogs} />
          </main>
        </div>
      </div>
    </div>
  );
}
