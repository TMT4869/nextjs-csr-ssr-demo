export default function BlogListSkeleton() {
  return (
    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-2.5 sm:p-3 lg:p-4">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-blue-600 flex-shrink-0"></div>
          <span className="text-blue-700 dark:text-blue-300 text-xs sm:text-sm lg:text-base">
            SSR: Đang tải dữ liệu blog từ server (5s)...
          </span>
        </div>
      </div>
      
      {/* Skeleton cards */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 lg:p-6 animate-pulse">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="w-full h-24 sm:w-24 sm:h-20 lg:w-32 lg:h-24 bg-gray-300 dark:bg-gray-600 rounded-lg flex-shrink-0"></div>
            <div className="flex-1 space-y-1.5 sm:space-y-2 lg:space-y-3 min-w-0">
              <div className="h-4 sm:h-5 lg:h-6 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
              <div className="h-3 sm:h-3 lg:h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
              <div className="h-3 sm:h-3 lg:h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
              <div className="h-3 sm:h-3 lg:h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
              <div className="flex gap-1 sm:gap-2 flex-wrap">
                <div className="h-4 w-10 sm:h-5 sm:w-12 lg:h-6 lg:w-16 bg-gray-300 dark:bg-gray-600 rounded-full flex-shrink-0"></div>
                <div className="h-4 w-14 sm:h-5 sm:w-16 lg:h-6 lg:w-20 bg-gray-300 dark:bg-gray-600 rounded-full flex-shrink-0"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
