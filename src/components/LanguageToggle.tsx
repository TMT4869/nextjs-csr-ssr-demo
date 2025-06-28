'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      aria-label={`Switch to ${language === 'en' ? 'Vietnamese' : 'English'}`}
    >
      <span className="text-lg">
        {language === 'en' ? '🇺🇸' : '🇻🇳'}
      </span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {language === 'en' ? 'EN' : 'VI'}
      </span>
      <svg 
        className="w-4 h-4 text-gray-500 dark:text-gray-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M7 16l4-4m0 0l4-4m-4 4v12" 
        />
      </svg>
    </button>
  );
}
