import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import BlogList from '@/components/BlogList';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { generateMockBlogs } from '@/lib/blog-utils';

export const metadata: Metadata = {
  title: 'Blog (Slow SSR) - TechBlog',
  description: 'Blog với SSR blocking - để so sánh performance.',
};

export default async function SlowBlogPage() {
  // SSR: Fetch initial blog posts on server with 5s delay (blocking)
  console.log('🔄 SSR: Starting SLOW blog data fetch on server...');
  const startTime = Date.now();
  const initialBlogs = await generateMockBlogs(12);
  const endTime = Date.now();
  console.log(`✅ SSR: SLOW blog data fetched in ${endTime - startTime}ms`);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
            TechBlog (Slow SSR)
          </h1>
          <p className="text-sm sm:text-xl lg:text-2xl text-red-100 mb-6 sm:mb-8 max-w-xs sm:max-w-3xl mx-auto px-2">
            Demo blocking SSR - phải chờ 5s để trang hiển thị
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm px-2">
            <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
              ❌ Blocking SSR (5s delay)
            </span>
            <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
              😴 Poor UX
            </span>
            <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
              📊 SEO friendly
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
              <SearchBar />
              
              {/* Categories - CSR Component */}
              <CategoryFilter />
              
              {/* Stats - SSR */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  📈 Thống kê
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tổng bài viết:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{initialBlogs.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Danh mục:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tác giả:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">SSR Delay:</span>
                    <span className="font-semibold text-red-600 dark:text-red-400">5s (BLOCKING)</span>
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
