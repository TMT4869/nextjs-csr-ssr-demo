// SSR - Server Side Rendering (default in Next.js App Router)

import Link from 'next/link';
import { fetchPostsSSR, formatDate } from '@/lib/utils';
import { Post } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSR Demo - Server Side Rendering | Next.js Demo',
  description: 'Demo trang Server Side Rendering với Next.js. Xem cách dữ liệu được tải trên server trước khi gửi HTML.',
};

export default async function SSRDemo() {
  const startTime = Date.now();
  
  // Fetch data on server before rendering
  const posts = await fetchPostsSSR();
  
  const loadTime = Date.now() - startTime;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-purple-600 dark:bg-purple-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                SSR Demo - Server Side Rendering
              </h1>
              <p className="text-purple-100 mt-2">
                Dữ liệu được tải trên server trước khi gửi HTML về client
              </p>
            </div>
            <Link 
              href="/"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              ← Quay lại
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Performance Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            📊 Thông tin Performance
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {loadTime}ms
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Server processing time (~2s API)
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                Excellent
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                SEO Score
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Fast
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                First Contentful Paint
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <p className="text-sm text-purple-800 dark:text-purple-200">
              💡 <strong>Lưu ý:</strong> Mặc dù API mất 2 giây nhưng người dùng thấy nội dung ngay lập tức vì dữ liệu đã được render sẵn trên server!
            </p>
          </div>
        </div>

        {/* SSR Characteristics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            🔍 Đặc điểm của SSR
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ Ưu điểm:</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• SEO tốt (HTML có sẵn dữ liệu)</li>
                <li>• First Contentful Paint nhanh</li>
                <li>• Hoạt động tốt khi JS bị tắt</li>
                <li>• Phù hợp với trang tin tức, blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ Nhược điểm:</h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Tải server cao hơn</li>
                <li>• Time to Interactive chậm hơn</li>
                <li>• Phụ thuộc vào server performance</li>
                <li>• Hydration có thể chậm</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Server Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            🖥️ Server Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">Render Time:</span> {new Date().toISOString()}
            </div>
            <div>
              <span className="font-semibold">Posts Count:</span> {posts.length}
            </div>
            <div>
              <span className="font-semibold">Server Load Time:</span> {loadTime}ms
            </div>
            <div>
              <span className="font-semibold">Rendering:</span> Server Side
            </div>
          </div>
        </div>

        {/* Posts - Already loaded */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            📄 Danh sách bài viết (SSR)
          </h2>

          <div className="grid gap-4">
            {posts.map((post: Post) => (
              <div 
                key={post.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {post.content}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>Bởi: {post.author}</span>
                  <span>{formatDate(post.createdAt)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            💻 Code Example
          </h2>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`// SSR by default in Next.js App Router
// No 'use client' directive needed

export default async function SSRDemo() {
  // Fetch data on server before rendering
  const data = await fetchData();

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

// This runs on server and data is included in HTML`}</code>
          </pre>
        </div>

        {/* SEO Benefits */}
        <div className="mt-8 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-4">
            🚀 SEO Benefits
          </h2>
          <p className="text-green-700 dark:text-green-300 mb-4">
            Trang này có HTML hoàn chỉnh với dữ liệu khi tải, rất tốt cho SEO!
          </p>
          <div className="text-sm text-green-600 dark:text-green-400">
            <strong>View Page Source</strong> để thấy dữ liệu đã có trong HTML
          </div>
        </div>
      </div>
    </div>
  );
}
