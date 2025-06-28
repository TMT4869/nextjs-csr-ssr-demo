'use client'; // CSR Component for interactive filtering

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { categories } from '@/lib/blog-utils';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();

  // Sync with URL search params
  useEffect(() => {
    const urlCategory = searchParams.get('category') || 'all';
    setSelectedCategory(urlCategory);
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    
    // Update URL with category parameter
    const params = new URLSearchParams(searchParams);
    if (categoryId !== 'all') {
      params.set('category', categoryId);
    } else {
      params.delete('category');
    }
    
    router.push(`${pathname}?${params.toString()}`);
  };

  const getCategoryColor = (color: string) => {
    const colorMap = {
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      black: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-700',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center flex-wrap">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
        <span className="mr-1 sm:mr-2">{t('filter.title')}</span>
        <span className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
          CSR
        </span>
      </h3>
      
      <div className="space-y-1.5 sm:space-y-2">
        {/* All Categories Option */}
        <button
          onClick={() => handleCategoryChange('all')}
          className={`w-full text-left px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm sm:text-base rounded-lg transition-all duration-200 border ${
            selectedCategory === 'all'
              ? 'bg-blue-500 text-white border-blue-500 shadow-md sm:transform sm:scale-105'
              : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium truncate mr-2">{t('filter.all')}</span>
            <span className={`text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded flex-shrink-0 ${
              selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
            }`}>
              {categories.reduce((sum, cat) => sum + cat.count, 0)}
            </span>
          </div>
        </button>

        {/* Category Options */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`w-full text-left px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm sm:text-base rounded-lg transition-all duration-200 border ${
              selectedCategory === category.id
                ? 'bg-blue-500 text-white border-blue-500 shadow-md sm:transform sm:scale-105'
                : `${getCategoryColor(category.color)} hover:shadow-md sm:hover:scale-102`
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium truncate mr-2">{category.name}</span>
              <span className={`text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded flex-shrink-0 ${
                selectedCategory === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/50 dark:bg-black/20'
              }`}>
                {category.count}
              </span>
            </div>
          </button>
        ))}
      </div>
      
      {selectedCategory !== 'all' && (
        <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">
            {t('filter.filtering')} <span className="font-medium break-words">
              {categories.find(cat => cat.id === selectedCategory)?.name}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
