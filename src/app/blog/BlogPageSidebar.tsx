'use client';

import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogPageSidebar() {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Search - CSR Component */}
      <SearchBar />
      
      {/* Categories - CSR Component */}
      <CategoryFilter />
      
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
