"use client";

import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Post } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface SSRDemoClientProps {
  posts: Post[];
  loadTime: number;
}

export default function SSRDemoClient({ posts, loadTime }: SSRDemoClientProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-purple-600 dark:bg-purple-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                {t("ssr.title")}
              </h1>
              <p className="text-purple-100 mt-2">{t("ssr.subtitle")}</p>
            </div>
            <Link
              href="/"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              {t("ssr.backButton")}
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Performance Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("ssr.performanceInfo")}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {loadTime}ms
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("ssr.serverProcessingTime")}
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                Excellent
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("ssr.excellentSEO")}
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Fast
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("ssr.fastFCP")}
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <p className="text-sm text-purple-800 dark:text-purple-200">
              {t("ssr.seoNote")}
            </p>
          </div>
        </div>

        {/* SSR Characteristics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("ssr.characteristics")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                {t("ssr.advantages")}
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>{t("ssr.adv1")}</li>
                <li>{t("ssr.adv2")}</li>
                <li>{t("ssr.adv3")}</li>
                <li>{t("ssr.adv4")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                {t("ssr.disadvantages")}
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>{t("ssr.dis1")}</li>
                <li>{t("ssr.dis2")}</li>
                <li>{t("ssr.dis3")}</li>
                <li>{t("ssr.dis4")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Server Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("ssr.serverInfo")}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">{t("ssr.renderTime")}</span>{" "}
              {new Date().toISOString()}
            </div>
            <div>
              <span className="font-semibold">{t("ssr.postsCount")}</span>{" "}
              {posts.length}
            </div>
            <div>
              <span className="font-semibold">{t("ssr.serverLoadTime")}</span>{" "}
              {loadTime}ms
            </div>
            <div>
              <span className="font-semibold">{t("ssr.rendering")}</span>{" "}
              {t("ssr.serverSide")}
            </div>
          </div>
        </div>

        {/* Posts - Already loaded */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {t("ssr.loadingPosts")}
          </h2>

          <div className="grid gap-4">
            {posts.map((post: Post) => (
              <div
                key={post.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {post.content}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>
                    {t("ssr.author")}
                    {post.author}
                  </span>
                  <span>{formatDate(post.createdAt)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("ssr.codeExample")}
          </h2>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`// SSR by default in Next.js App Router
// No 'use client' directive needed

export default async function SSRDemo() {
  // Fetch data on server before rendering
  const data = await fetchData();

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

// This runs on server and data is included in HTML`}</code>
          </pre>
        </div>

        {/* SEO Benefits */}
        <div className="mt-8 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-4">
            {t("ssr.seoBenefits")}
          </h2>
          <p className="text-green-700 dark:text-green-300 mb-4">
            {t("ssr.seoDescription")}
          </p>
          <div className="text-sm text-green-600 dark:text-green-400">
            <strong>{t("ssr.viewSource")}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
