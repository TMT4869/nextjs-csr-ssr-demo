import { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import BlogStats from '@/components/BlogStats';
import BlogStatsSkeleton from '@/components/BlogStatsSkeleton';
import BlogListSSR from '@/components/BlogListSSR';
import BlogListSkeleton from '@/components/BlogListSkeleton';

export const metadata: Metadata = {
  title: 'TechBlog - Chia sẻ kiến thức công nghệ',
  description: 'Blog về công nghệ, lập trình, và phát triển web. Kết hợp SSR và CSR để tối ưu performance.',
};

export default function BlogHomePage() {
  // Không cần SSR data fetch ở đây nữa - trang sẽ load nhanh
  console.log('🔄 Page: Loading blog page instantly...');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
            TechBlog (Optimized)
          </h1>
          <p className="text-sm sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-xs sm:max-w-3xl mx-auto px-2">
            Demo tối ưu hóa: Trang load nhanh + Data stream riêng biệt
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm px-2">
            <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
              ⚡ Instant page load
            </span>
            <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
              🔄 Suspense streaming
            </span>
            <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
              🚀 Optimized UX
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="grid lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
              {/* Search - CSR Component */}
              <SearchBar />
              
              {/* Categories - CSR Component */}
              <CategoryFilter />
              
              {/* Stats - SSR with Suspense */}
              <Suspense fallback={<BlogStatsSkeleton />}>
                <BlogStats />
              </Suspense>
              
              {/* Rendering Info */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-3 sm:p-4 border border-green-200 dark:border-green-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                  🔧 Optimized Strategy
                </h4>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li className="text-green-700 dark:text-green-300">
                    ✓ Page: Instant load
                  </li>
                  <li className="text-blue-700 dark:text-blue-300">
                    ✓ Stats: SSR with Suspense
                  </li>
                  <li className="text-purple-700 dark:text-purple-300">
                    ✓ Blog List: SSR with Suspense
                  </li>
                  <li className="text-orange-700 dark:text-orange-300">
                    ✓ Search/Filter: CSR interactive
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Blog List - SSR with Suspense */}
            <Suspense fallback={<BlogListSkeleton />}>
              <BlogListSSR />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
