import { generateMockBlogs } from '@/lib/blog-utils';
import BlogStatsClient from './BlogStatsClient';

interface BlogStatsProps {
  language?: 'vi' | 'en';
}

export default async function BlogStats({ language = 'vi' }: BlogStatsProps = {}) {
  // SSR: Fetch data with delay but in Suspense boundary
  console.log('🔄 BlogStats: Starting SSR data fetch...');
  const startTime = Date.now();
  const blogs = await generateMockBlogs(12, language);
  const endTime = Date.now();
  console.log(`✅ BlogStats: Data fetched in ${endTime - startTime}ms`);
  
  return <BlogStatsClient blogCount={blogs.length} />;
}
