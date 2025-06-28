'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface BlogStatsClientProps {
  blogCount: number;
}

export default function BlogStatsClient({ blogCount }: BlogStatsClientProps) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-6">
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 lg:mb-4">
        {t('stats.title')}
      </h3>
      <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">{t('stats.totalPosts')}</span>
          <span className="font-semibold text-gray-900 dark:text-white flex-shrink-0">{blogCount}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">{t('stats.categories')}</span>
          <span className="font-semibold text-gray-900 dark:text-white flex-shrink-0">8</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">{t('stats.authors')}</span>
          <span className="font-semibold text-gray-900 dark:text-white flex-shrink-0">5</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 truncate mr-2">{t('stats.ssrDelay')}</span>
          <span className="font-semibold text-green-600 dark:text-green-400 flex-shrink-0">{t('stats.streamed')}</span>
        </div>
      </div>
    </div>
  );
}
