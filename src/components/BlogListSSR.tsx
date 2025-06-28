import { Suspense } from 'react';
import { generateMockBlogs } from '@/lib/blog-utils';
import { getServerLanguage } from '@/lib/get-server-language';
import { getServerTranslation } from '@/lib/server-translations';
import BlogList from './BlogList';
import BlogListSkeleton from './BlogListSkeleton';

interface BlogListSSRProps {
  language?: 'vi' | 'en';
  searchParams?: Promise<{ search?: string; category?: string }>;
}

export default async function BlogListSSR({ language, searchParams }: BlogListSSRProps = {}) {
  console.log('🔄 BlogListSSR: Starting SSR...');
  
  // Get language from props or detect from server
  const detectedLanguage = language || await getServerLanguage();
  const t = getServerTranslation(detectedLanguage);
  
  // Extract search and filter params - await searchParams
  const params = await searchParams;
  const searchQuery = params?.search || '';
  const categoryFilter = params?.category || 'all';
  
  // Generate blogs with realistic API simulation
  const blogs = await generateMockBlogs(12, detectedLanguage, t, categoryFilter, searchQuery);

  return (
    <Suspense fallback={<BlogListSkeleton />}>
      <BlogList initialBlogs={blogs} />
    </Suspense>
  );
}
