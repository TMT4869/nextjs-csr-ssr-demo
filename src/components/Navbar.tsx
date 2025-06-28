import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/blog" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              TechBlog
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/blog"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Trang chủ
            </Link>
            <Link 
              href="/blog/categories"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Danh mục
            </Link>
            <Link 
              href="/blog/about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Giới thiệu
            </Link>
          </div>

          {/* Demo Links */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              ← Về Demo
            </Link>
            <div className="hidden sm:flex items-center space-x-2 text-xs">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
                SSR
              </span>
              <span className="text-gray-400">+</span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                CSR
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
