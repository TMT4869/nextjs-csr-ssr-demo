import { generateMockBlogs } from '@/lib/blog-utils';
import { getServerLanguage } from '@/lib/get-server-language';
import { getServerTranslation } from '@/lib/server-translations';
import BlogStatsClient from './BlogStatsClient';

interface BlogStatsProps {
  searchParams?: Promise<{ search?: string; category?: string }>;
}

export default async function BlogStats({ searchParams }: BlogStatsProps = {}) {
  // Check if there are any search params
  const params = await searchParams;
  const hasSearchParams = params?.search || (params?.category && params?.category !== 'all');
  
  let blogCount = 12; // Default count
  
  if (hasSearchParams) {
    // When filtering/searching - load instantly without delay
    console.log('⚡ BlogStats: Loading stats instantly (search/filter active)');
    blogCount = 12; // Just use static count, no delay
  } else {
    // When on main page - use generateMockBlogs with delay
    console.log('🔄 BlogStats: Starting stats calculation with delay...');
    const startTime = Date.now();
    
    const detectedLanguage = await getServerLanguage();
    const t = getServerTranslation(detectedLanguage);
    
    const blogs = await generateMockBlogs(12, detectedLanguage, t, 'all', '');
    blogCount = blogs.length;
    
    const endTime = Date.now();
    console.log(`✅ BlogStats: Stats calculated in ${endTime - startTime}ms`);
  }
  
  return <BlogStatsClient blogCount={blogCount} />;
}
