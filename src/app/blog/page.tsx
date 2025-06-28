import { Metadata } from "next";
import { Suspense } from "react";
import BlogPageHeader from "./BlogPageHeader";
import BlogPageSidebar from "./BlogPageSidebar";
import BlogListSSR from "@/components/BlogListSSR";
import BlogListSkeleton from "@/components/BlogListSkeleton";
import BlogStats from "@/components/BlogStats";
import BlogStatsSkeleton from "@/components/BlogStatsSkeleton";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "TechBlog - Sharing technology knowledge",
  description:
    "Blog about technology, programming, and web development. Combining SSR and CSR for optimal performance.",
};

export default async function BlogHomePage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>;
}) {
  const params = await searchParams;
  console.log("🔄 Page: Loading blog page instantly...", params);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section - Client Component for translations */}
      <BlogPageHeader />

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="grid lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Sidebar - Client Component for search/filter + Server Component for stats */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
              {/* Search & Categories - Client Components */}
              <BlogPageSidebar />

              {/* Stats - Server Component with Suspense */}
              <Suspense fallback={<BlogStatsSkeleton />}>
                <BlogStats searchParams={searchParams} />
              </Suspense>
            </div>
          </aside>

          {/* Main Content - Server Component */}
          <main className="lg:col-span-3">
            {/* Blog List - SSR with Suspense */}
            <Suspense fallback={<BlogListSkeleton />}>
              <BlogListSSR searchParams={searchParams} />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
