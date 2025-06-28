import { Suspense } from 'react';
import { generateMockBlogs } from '@/lib/blog-utils';
import { getServerLanguage } from '@/lib/get-server-language';
import { getServerTranslation } from '@/lib/server-translations';
import BlogList from './BlogList';

interface BlogListSSRProps {
  language?: 'vi' | 'en';
}

// Loading component for Suspense fallback
function BlogListLoading() {
  return (
    <div className="space-y-6">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function BlogListSSR({ language }: BlogListSSRProps = {}) {
  console.log('🔄 BlogListSSR: Starting SSR data fetch...');
  const startTime = Date.now();
  
  // Get language from props or detect from server
  const detectedLanguage = language || await getServerLanguage();
  const t = getServerTranslation(detectedLanguage);
  
  const blogs = await generateMockBlogs(12, detectedLanguage, t);
  const endTime = Date.now();
  console.log(`✅ BlogListSSR: Data fetched in ${endTime - startTime}ms`);

  return (
    <Suspense fallback={<BlogListLoading />}>
      <BlogList initialBlogs={blogs} />
    </Suspense>
  );
}
