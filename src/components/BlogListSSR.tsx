import { generateMockBlogs } from '@/lib/blog-utils';
import BlogList from './BlogList';

export default async function BlogListSSR() {
  // SSR: Fetch data với delay nhưng trong Suspense boundary
  console.log('🔄 BlogListSSR: Starting SSR data fetch...');
  const startTime = Date.now();
  const blogs = await generateMockBlogs(12);
  const endTime = Date.now();
  console.log(`✅ BlogListSSR: Data fetched in ${endTime - startTime}ms`);

  return <BlogList initialBlogs={blogs} />;
}
