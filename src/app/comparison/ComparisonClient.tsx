'use client';

import Link from 'next/link';
import PerformanceTable from '@/components/PerformanceTable';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ComparisonClient() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">
                {t('comp.title')}
              </h1>
              <p className="text-blue-100">
                {t('comp.subtitle')}
              </p>
            </div>
            <Link 
              href="/"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {t('comp.backHome')}
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Navigation */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link 
            href="/csr-demo"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('comp.csrDemo')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('comp.csrDemoDesc')}
            </p>
          </Link>
          
          <Link 
            href="/ssr-demo"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('comp.ssrDemo')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('comp.ssrDemoDesc')}
            </p>
          </Link>
        </div>

        {/* Performance Comparison */}
        <PerformanceTable className="mb-8" />

        {/* When to Use */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {t('comp.whenCSR')}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('comp.csrUse1')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('comp.csrUse2')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('comp.csrUse3')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('comp.csrUse4')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('comp.csrUse5')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              {t('comp.whenSSR')}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('comp.ssrUse1')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('comp.ssrUse2')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('comp.ssrUse3')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('comp.ssrUse4')}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">{t('comp.ssrUse5')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hybrid Approach */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
            {t('comp.hybridTitle')}
          </h2>
          <div className="text-center mb-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('comp.hybridDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('comp.serverComponents')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('comp.serverComponentsDesc')}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('comp.clientComponents')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('comp.clientComponentsDesc')}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('comp.staticGeneration')}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('comp.staticGenerationDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
