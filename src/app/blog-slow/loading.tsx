export default function BlogSlowLoading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar Skeleton */}
      <div className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              <div className="w-24 h-4 sm:w-32 sm:h-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              <div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            </div>
            <div className="sm:hidden w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Hero Section Loading */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <div className="w-60 sm:w-80 lg:w-96 h-8 sm:h-10 lg:h-12 bg-white/20 rounded-lg mx-auto mb-3 sm:mb-4 animate-pulse"></div>
          <div className="w-72 sm:w-96 lg:w-112 h-4 sm:h-5 lg:h-6 bg-white/20 rounded-lg mx-auto mb-6 sm:mb-8 animate-pulse"></div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <div className="w-24 sm:w-32 h-6 sm:h-8 bg-white/20 rounded-full animate-pulse"></div>
            <div className="w-20 sm:w-24 h-6 sm:h-8 bg-white/20 rounded-full animate-pulse"></div>
            <div className="w-22 sm:w-28 h-6 sm:h-8 bg-white/20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Full Page Loading Indicator */}
        <div className="text-center py-8 sm:py-12 lg:py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 bg-red-100 dark:bg-red-900/30 rounded-full">
            <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-red-600"></div>
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
            Đang tải Blog (Slow SSR)...
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-sm sm:max-w-md mx-auto px-3">
            Server đang fetch dữ liệu với 5s delay. Đây là demo blocking SSR - 
            toàn bộ trang phải chờ server xử lý xong.
          </p>
          
          {/* Progress Bar */}
          <div className="w-64 sm:w-80 mx-auto px-3">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3 mb-3 sm:mb-4">
              <div className="bg-red-600 h-2 sm:h-3 rounded-full animate-pulse" style={{width: '75%'}}></div>
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <span>SSR Processing...</span>
              <span>~5 seconds</span>
            </div>
          </div>

          {/* Loading Info */}
          <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700 max-w-xs sm:max-w-lg mx-auto">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2 text-sm sm:text-base">
              🐌 Blocking SSR Demo
            </h3>
            <ul className="text-xs sm:text-sm text-red-700 dark:text-red-300 space-y-1 text-left">
              <li>• Server phải fetch tất cả dữ liệu trước</li>
              <li>• User không thể tương tác trong lúc chờ</li>
              <li>• Toàn bộ HTML render một lần</li>
              <li>• SEO tốt nhưng UX kém</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
