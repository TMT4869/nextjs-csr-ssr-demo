"use client"; // CSR - Client Side Rendering

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchPostsCSR, formatDate } from "@/lib/utils";
import { Post } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CSRDemo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadTime, setLoadTime] = useState<number>(0);
  const { t } = useLanguage();

  useEffect(() => {
    const startTime = Date.now();

    fetchPostsCSR(t)
      .then((data) => {
        setPosts(data);
        setLoadTime(Date.now() - startTime);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [t]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-blue-600 dark:bg-blue-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                {t("csr.title")}
              </h1>
              <p className="text-blue-100 mt-2">{t("csr.subtitle")}</p>
            </div>
            <Link
              href="/"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {t("csr.backButton")}
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Performance Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("csr.performanceInfo")}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {loading ? "..." : `${loadTime}ms`}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("csr.clientFetchTime")}
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                Fast
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("csr.fastInteraction")}
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                Poor
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t("csr.poorSEO")}
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {t("csr.loadingNote")}
            </p>
          </div>
        </div>

        {/* CSR Characteristics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("csr.characteristics")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                {t("csr.advantages")}
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>{t("csr.adv1")}</li>
                <li>{t("csr.adv2")}</li>
                <li>{t("csr.adv3")}</li>
                <li>{t("csr.adv4")}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                {t("csr.disadvantages")}
              </h3>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>{t("csr.dis1")}</li>
                <li>{t("csr.dis2")}</li>
                <li>{t("csr.dis3")}</li>
                <li>{t("csr.dis4")}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {t("csr.loadingPosts")}
          </h2>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                {t("csr.loadingText")}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {t("csr.loadingTime")}
              </p>
              <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2 max-w-xs mx-auto">
                <div
                  className="bg-blue-600 h-2 rounded-full animate-pulse"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="text-red-600 dark:text-red-400">
                {t("csr.error")}
                {error}
              </div>
            </div>
          )}

          {!loading && !error && (
            <div className="grid gap-4">
              {posts.map((post) => (
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
                      {t("csr.author")}
                      {post.author}
                    </span>
                    <span>{formatDate(post.createdAt)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("csr.codeExample")}
          </h2>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{`'use client'; // CSR directive

import { useState, useEffect } from 'react';

export default function CSRDemo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data after component mounts
    fetchData()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
