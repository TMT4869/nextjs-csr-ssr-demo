"use client"; // Hybrid Component: SSR initial data + CSR interactivity

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  BlogPost,
  searchBlogs,
  filterBlogsByCategory,
  categories,
} from "@/lib/blog-utils";
import { formatDate } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogListProps {
  initialBlogs: BlogPost[];
}

export default function BlogList({ initialBlogs }: BlogListProps) {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const { t } = useLanguage();

  // Get current search and filter parameters
  const searchQuery = searchParams.get("search") || "";
  const categoryFilter = searchParams.get("category") || "all";

  // Memoized filtered blogs for performance
  const filteredBlogs = useMemo(() => {
    let blogs = initialBlogs;

    // Apply category filter first
    blogs = filterBlogsByCategory(blogs, categoryFilter);

    // Apply search filter
    blogs = searchBlogs(blogs, searchQuery);

    return blogs;
  }, [initialBlogs, searchQuery, categoryFilter]);

  // Simulate loading when filters change
  useEffect(() => {
    if (searchQuery || categoryFilter !== "all") {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [searchQuery, categoryFilter]);

  const getCategoryInfo = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId);
  };

  const getCategoryColor = (color: string) => {
    const colorMap = {
      yellow: "bg-yellow-100 text-yellow-700",
      blue: "bg-blue-100 text-blue-700",
      black: "bg-gray-100 text-gray-700",
      pink: "bg-pink-100 text-pink-700",
      green: "bg-green-100 text-green-700",
      purple: "bg-purple-100 text-purple-700",
      red: "bg-red-100 text-red-700",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="text-gray-600 dark:text-gray-400">
              {t("blogList.filteringResults")}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results Info */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t("blogList.latestPosts")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {t("blogList.showing")
              .replace("{filtered}", filteredBlogs.length.toString())
              .replace("{total}", initialBlogs.length.toString())}
            {searchQuery && (
              <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">
                {t("blogList.searchFor").replace("{query}", searchQuery)}
              </span>
            )}
            {categoryFilter !== "all" && (
              <span className="ml-2 px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">
                {t("blogList.category").replace(
                  "{category}",
                  getCategoryInfo(categoryFilter)?.name || categoryFilter
                )}
              </span>
            )}
          </p>
        </div>

        {/* Rendering Info */}
        <div className="hidden md:flex items-center space-x-2 text-xs">
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
            SSR: Initial Data
          </span>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
            CSR: Filter & Search
          </span>
        </div>
      </div>

      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {t("blogList.noResults")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("blogList.noResultsDesc")}
          </p>
        </div>
      )}

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => {
          const categoryInfo = getCategoryInfo(blog.category);

          return (
            <article
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {categoryInfo && (
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(
                        categoryInfo.color
                      )}`}
                    >
                      {categoryInfo.name}
                    </span>
                  )}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>
                      {t("blogList.readTime").replace(
                        "{time}",
                        blog.readTime.toString()
                      )}
                    </span>
                  </div>
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Load More Button (for demo) */}
      {filteredBlogs.length > 0 && (
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            {t("blogList.loadMore")}
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {t("blogList.loadMoreDesc")}
          </p>
        </div>
      )}
    </div>
  );
}
