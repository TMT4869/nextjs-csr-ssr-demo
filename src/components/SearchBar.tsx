'use client'; // CSR Component for interactive search

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Sync with URL search params
  useEffect(() => {
    const urlQuery = searchParams.get('search') || '';
    setQuery(urlQuery);
  }, [searchParams]);

  const handleSearch = (value: string) => {
    setQuery(value);
    
    // Update URL with search parameter
    const params = new URLSearchParams(searchParams);
    if (value.trim()) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearSearch = () => {
    setQuery('');
    const params = new URLSearchParams(searchParams);
    params.delete('search');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center flex-wrap">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="mr-1 sm:mr-2">Tìm kiếm</span>
        <span className="text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
          CSR
        </span>
      </h3>
      
      <div className={`relative transition-all duration-200 ${isFocused ? 'sm:transform sm:scale-105' : ''}`}>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Tìm kiếm bài viết..."
          className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
        />
        
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1"
            aria-label="Xóa tìm kiếm"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        
        <div className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 pointer-events-none transition-opacity duration-200" 
             style={{ opacity: isFocused ? 1 : 0 }} />
      </div>
      
      {query && (
        <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          Đang tìm kiếm: <span className="font-medium text-blue-600 dark:text-blue-400 break-words">&quot;{query}&quot;</span>
        </div>
      )}
    </div>
  );
}
