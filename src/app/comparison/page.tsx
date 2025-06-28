import { Metadata } from 'next';
import Link from 'next/link';
import PerformanceTable from '@/components/PerformanceTable';

export const metadata: Metadata = {
  title: 'So sánh CSR vs SSR | Next.js Demo',
  description: 'So sánh chi tiết giữa Client Side Rendering và Server Side Rendering trong Next.js',
};

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">
                So sánh CSR vs SSR
              </h1>
              <p className="text-blue-100">
                Phân tích chi tiết ưu nhược điểm của từng phương pháp rendering
              </p>
            </div>
            <Link 
              href="/"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              ← Trang chủ
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Navigation */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link 
            href="/csr-demo"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              🖥️ Xem CSR Demo
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Trải nghiệm Client Side Rendering thực tế
            </p>
          </Link>
          
          <Link 
            href="/ssr-demo"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              🖥️ Xem SSR Demo
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Trải nghiệm Server Side Rendering thực tế
            </p>
          </Link>
        </div>

        {/* Performance Comparison */}
        <PerformanceTable className="mb-8" />

        {/* When to Use */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              🎯 Khi nào nên dùng CSR?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Ứng dụng tương tác nhiều (dashboard, admin panel)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Ứng dụng một trang (SPA)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Khi SEO không quan trọng</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Dữ liệu thay đổi thường xuyên</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Muốn giảm tải server</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              🎯 Khi nào nên dùng SSR?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Website tin tức, blog, e-commerce</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">SEO là ưu tiên hàng đầu</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Cần First Contentful Paint nhanh</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Người dùng có mạng chậm</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Nội dung tương đối tĩnh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hybrid Approach */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
            🚀 Phương pháp Hybrid
          </h2>
          <div className="text-center mb-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Next.js 14+ App Router cho phép bạn kết hợp cả CSR và SSR trong cùng một ứng dụng. 
              Sử dụng SSR cho các trang cần SEO và CSR cho các phần tương tác.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Server Components</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Default SSR cho SEO</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Client Components</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">CSR với &apos;use client&apos;</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Static Generation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tối ưu nhất cho performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
