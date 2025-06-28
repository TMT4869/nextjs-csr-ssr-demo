'use client';

import { Suspense } from 'react';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { useLanguage } from '@/contexts/LanguageContext';

// Loading component for SearchBar
function SearchBarLoading() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-6">
      <div className="animate-pulse">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-20"></div>
        <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}

// Loading component for CategoryFilter
function CategoryFilterLoading() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-6">
      <div className="animate-pulse">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-24"></div>
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogPageSidebar() {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Search - CSR Component */}
      <Suspense fallback={<SearchBarLoading />}>
        <SearchBar />
      </Suspense>
      
      {/* Categories - CSR Component */}
      <Suspense fallback={<CategoryFilterLoading />}>
        <CategoryFilter />
      </Suspense>
      
      {/* Rendering Info */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-3 sm:p-4 border border-green-200 dark:border-green-700">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
          {t('blog.strategy')}
        </h4>
        <ul className="text-xs sm:text-sm space-y-1">
          <li className="text-green-700 dark:text-green-300">
            {t('blog.pageInstant')}
          </li>
          <li className="text-blue-700 dark:text-blue-300">
            {t('blog.statsSSR')}
          </li>
          <li className="text-purple-700 dark:text-purple-300">
            {t('blog.blogListSSR')}
          </li>
          <li className="text-orange-700 dark:text-orange-300">
            {t('blog.searchFilter')}
          </li>
        </ul>
      </div>
    </>
  );
}
