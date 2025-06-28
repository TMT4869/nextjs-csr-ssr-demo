'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogPageHeader() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-3 sm:px-4 text-center">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2">
          {t('blog.title')}
        </h1>
        <p className="text-sm sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-xs sm:max-w-3xl mx-auto px-2">
          {t('blog.description')}
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm px-2">
          <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
            {t('blog.instantLoad')}
          </span>
          <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
            {t('blog.suspenseStreaming')}
          </span>
          <span className="px-2 py-1 sm:px-3 bg-white/20 rounded-full">
            {t('blog.optimizedUX')}
          </span>
        </div>
      </div>
    </section>
  );
}
