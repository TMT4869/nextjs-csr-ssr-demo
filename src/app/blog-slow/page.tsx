import { Metadata } from "next";
import { generateMockBlogs } from "@/lib/blog-utils";
import { getServerLanguage } from "@/lib/get-server-language";
import { getServerTranslation } from "@/lib/server-translations";
import BlogSlowClient from "./BlogSlowClient";

export const metadata: Metadata = {
  title: "Blog (Slow SSR) - TechBlog",
  description: "Blog with SSR blocking - to compare performance.",
};

export default async function SlowBlogPage() {
  // SSR: Fetch initial blog posts on server with 5s delay (blocking)
  console.log("🔄 SSR: Starting SLOW blog data fetch on server...");
  const startTime = Date.now();
  
  // Get language and translation function for server
  const language = await getServerLanguage();
  const t = getServerTranslation(language);
  
  const initialBlogs = await generateMockBlogs(12, language, t);
  const endTime = Date.now();
  console.log(`✅ SSR: SLOW blog data fetched in ${endTime - startTime}ms`);

  return <BlogSlowClient initialBlogs={initialBlogs} />;
}
