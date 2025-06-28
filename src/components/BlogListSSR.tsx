import { generateMockBlogs } from '@/lib/blog-utils';
import { getServerLanguage } from '@/lib/get-server-language';
import { getServerTranslation } from '@/lib/server-translations';
import BlogList from './BlogList';

interface BlogListSSRProps {
  language?: 'vi' | 'en';
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

  return <BlogList initialBlogs={blogs} />;
}
