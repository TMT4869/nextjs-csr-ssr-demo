export default function BlogStatsSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-6">
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4">
        📈 Thống kê
      </h3>
      <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">Tổng bài viết:</span>
          <div className="h-3 w-5 sm:h-3 sm:w-6 lg:h-4 lg:w-8 bg-gray-300 dark:bg-gray-600 rounded animate-pulse flex-shrink-0"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">Danh mục:</span>
          <div className="h-3 w-4 sm:h-3 sm:w-4 lg:h-4 lg:w-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse flex-shrink-0"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">Tác giả:</span>
          <div className="h-3 w-4 sm:h-3 sm:w-4 lg:h-4 lg:w-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse flex-shrink-0"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">SSR Delay:</span>
          <div className="h-3 w-6 sm:h-3 sm:w-8 lg:h-4 lg:w-12 bg-orange-300 dark:bg-orange-600 rounded animate-pulse flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}
