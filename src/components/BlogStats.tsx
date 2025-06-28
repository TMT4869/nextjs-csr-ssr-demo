import { generateMockBlogs } from '@/lib/blog-utils';
import { getServerLanguage } from '@/lib/get-server-language';
import { getServerTranslation } from '@/lib/server-translations';
import BlogStatsClient from './BlogStatsClient';

interface BlogStatsProps {
  language?: 'vi' | 'en';
}

export default async function BlogStats({ language }: BlogStatsProps = {}) {
  // SSR: Fetch data with delay but in Suspense boundary
  console.log('🔄 BlogStats: Starting SSR data fetch...');
  const startTime = Date.now();
  
  // Get language from props or detect from server
  const detectedLanguage = language || await getServerLanguage();
  const t = getServerTranslation(detectedLanguage);
  
  const blogs = await generateMockBlogs(12, detectedLanguage, t);
  const endTime = Date.now();
  console.log(`✅ BlogStats: Data fetched in ${endTime - startTime}ms`);
  
  return <BlogStatsClient blogCount={blogs.length} />;
}
