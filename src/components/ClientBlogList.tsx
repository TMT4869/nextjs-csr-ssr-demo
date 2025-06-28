'use client';

import { useState, useEffect } from 'react';
import { BlogPost } from '@/lib/blog-utils';
import { generateMockBlogs } from '@/lib/blog-utils';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function ClientBlogList() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchBlogs = async () => {
      console.log('🔄 CSR: Starting blog data fetch on client...');
      const startTime = Date.now();
      const data = await generateMockBlogs(12, language, t);
      const endTime = Date.now();
      console.log(`✅ CSR: Blog data fetched in ${endTime - startTime}ms`);
      setBlogs(data);
      setLoading(false);
    };

    fetchBlogs();
  }, [language, t]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="text-blue-700 dark:text-blue-300 text-sm">
              {t('clientBlog.loading')}
            </span>
          </div>
        </div>
        
        {/* Skeleton cards */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
        <span className="text-green-700 dark:text-green-300 text-sm">
          {t('clientBlog.success').replace('{count}', blogs.length.toString())}
        </span>
      </div>

      {blogs.map((blog) => (
        <article key={blog.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex gap-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                  {blog.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span>{t('clientBlog.author').replace('{author}', blog.author)}</span>
                  <span>{t('clientBlog.date').replace('{date}', new Date(blog.createdAt).toLocaleDateString('vi-VN'))}</span>
                  <span>{t('clientBlog.readTime').replace('{time}', blog.readTime.toString())}</span>
                  <span className={`px-2 py-1 rounded-full bg-${blog.category === 'javascript' ? 'yellow' : blog.category === 'react' ? 'blue' : 'gray'}-100 text-${blog.category === 'javascript' ? 'yellow' : blog.category === 'react' ? 'blue' : 'gray'}-700`}>
                    {blog.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
