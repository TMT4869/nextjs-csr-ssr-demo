import { generateMockBlogs } from '@/lib/blog-utils';
import BlogList from './BlogList';

interface BlogListSSRProps {
  language?: 'vi' | 'en';
}

export default async function BlogListSSR({ language = 'vi' }: BlogListSSRProps = {}) {
  console.log('🔄 BlogListSSR: Starting SSR data fetch...');
  const startTime = Date.now();
  const blogs = await generateMockBlogs(12, language);
  const endTime = Date.now();
  console.log(`✅ BlogListSSR: Data fetched in ${endTime - startTime}ms`);

  return <BlogList initialBlogs={blogs} />;
}
