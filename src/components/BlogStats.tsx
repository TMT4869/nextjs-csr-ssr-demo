import { generateMockBlogs } from '@/lib/blog-utils';

export default async function BlogStats() {
  // SSR: Fetch data with delay but in Suspense boundary
  console.log('🔄 BlogStats: Starting SSR data fetch...');
  const startTime = Date.now();
  const blogs = await generateMockBlogs(12);
  const endTime = Date.now();
  console.log(`✅ BlogStats: Data fetched in ${endTime - startTime}ms`);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-6">
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4">
        📈 Thống kê
      </h3>
      <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">Tổng bài viết:</span>
          <span className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm lg:text-base flex-shrink-0">{blogs.length}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">Danh mục:</span>
          <span className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm lg:text-base flex-shrink-0">8</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">Tác giả:</span>
          <span className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm lg:text-base flex-shrink-0">5</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">SSR Delay:</span>
          <span className="font-semibold text-green-600 dark:text-green-400 text-xs sm:text-sm lg:text-base flex-shrink-0">5s (Streamed)</span>
        </div>
      </div>
    </div>
  );
}
