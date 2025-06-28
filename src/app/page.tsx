'use client';

import Link from "next/link";
import PerformanceTable from "@/components/PerformanceTable";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-2xl">⚡</span>
            <span className="hidden sm:inline">CSR vs SSR Demo</span>
            <span className="sm:hidden">Demo</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/csr-demo"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium transition-colors"
            >
              {t('nav.csrDemo')}
            </Link>
            <Link
              href="/ssr-demo"
              className="text-green-600 hover:text-green-800 dark:text-green-400 font-medium transition-colors"
            >
              {t('nav.ssrDemo')}
            </Link>
            <Link
              href="/comparison"
              className="text-purple-600 hover:text-purple-800 dark:text-purple-400 font-medium transition-colors"
            >
              {t('nav.comparison')}
            </Link>
            <Link
              href="/blog"
              className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 font-medium transition-colors"
            >
              {t('nav.blogFast')}
            </Link>
            <Link
              href="/blog-slow"
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg font-medium transition-colors"
            >
              {t('nav.blogSlow')}
            </Link>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href="/csr-demo"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-4 py-3 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-800 dark:hover:text-blue-400 rounded-lg transition-colors"
            >
              🔄 <span className="ml-2">{t('nav.csrDemo').replace('🔄 ', '')}</span>
            </Link>
            <Link 
              href="/ssr-demo"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-4 py-3 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-800 dark:hover:text-green-400 rounded-lg transition-colors"
            >
              ⚡ <span className="ml-2">{t('nav.ssrDemo').replace('⚡ ', '')}</span>
            </Link>
            <Link 
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-4 py-3 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-800 dark:hover:text-indigo-400 rounded-lg transition-colors"
            >
              📝 <span className="ml-2">{t('nav.blogOptimized').replace('📝 ', '')}</span>
            </Link>
            <Link 
              href="/blog-slow"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-800 dark:hover:text-red-400 rounded-lg transition-colors"
            >
              🐌 <span className="ml-2">{t('nav.blogSlowSSR').replace('🐌 ', '')}</span>
            </Link>
            <Link 
              href="/comparison"
              onClick={() => setIsMenuOpen(false)}
              className="block mx-4 mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-colors text-center"
            >
              {t('nav.detailedComparison')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ResponsiveNavbar />
      {/* Hero Section */}{" "}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        {" "}
        <div className="container mx-auto px-4 text-center">
          {" "}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {" "}
            {t('hero.title')}{" "}
          </h1>{" "}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            {" "}
            {t('hero.description')}{" "}
          </p>{" "}
          <div className="flex flex-wrap justify-center gap-4">
            {" "}
            <span className="px-4 py-2 bg-white/20 rounded-full text-lg">
              {" "}
              {t('hero.nextjs')}{" "}
            </span>{" "}
            <span className="px-4 py-2 bg-white/20 rounded-full text-lg">
              {" "}
              {t('hero.performance')}{" "}
            </span>{" "}
            <span className="px-4 py-2 bg-white/20 rounded-full text-lg">
              {" "}
              {t('hero.optimization')}{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Quick Comparison */}{" "}
      <section className="py-16">
        {" "}
        <div className="container mx-auto px-4">
          {" "}
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {" "}
            {t('comparison.title')}{" "}
          </h2>{" "}
          <PerformanceTable />{" "}
        </div>{" "}
      </section>{" "}
      {/* Demo Links */}{" "}
      <section className="py-16 bg-white dark:bg-gray-800">
        {" "}
        <div className="container mx-auto px-4 text-center">
          {" "}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            {" "}
            {t('demo.title')}{" "}
          </h2>{" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {" "}
            {/* CSR Demo */}{" "}
            <Link
              href="/csr-demo"
              className="group block p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200"
            >
              {" "}
              <div className="text-4xl mb-4">⚡</div>{" "}
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                {" "}
                {t('demo.csr.title')}{" "}
              </h3>{" "}
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                {" "}
                {t('demo.csr.description')}{" "}
              </p>{" "}
            </Link>{" "}
            {/* SSR Demo */}{" "}
            <Link
              href="/ssr-demo"
              className="group block p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-200"
            >
              {" "}
              <div className="text-4xl mb-4">🚀</div>{" "}
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
                {" "}
                {t('demo.ssr.title')}{" "}
              </h3>{" "}
              <p className="text-green-700 dark:text-green-300 text-sm">
                {" "}
                {t('demo.ssr.description')}{" "}
              </p>{" "}
            </Link>{" "}
            {/* Comparison */}{" "}
            <Link
              href="/comparison"
              className="group block p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-200"
            >
              {" "}
              <div className="text-4xl mb-4">📊</div>{" "}
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-2">
                {" "}
                {t('demo.comparison.title')}{" "}
              </h3>{" "}
              <p className="text-purple-700 dark:text-purple-300 text-sm">
                {" "}
                {t('demo.comparison.description')}{" "}
              </p>{" "}
            </Link>{" "}
            {/* Blog Optimized */}{" "}
            <Link
              href="/blog"
              className="group block p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all duration-200"
            >
              {" "}
              <div className="text-4xl mb-4">✨</div>{" "}
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                {" "}
                {t('demo.blogOptimized.title')}{" "}
              </h3>{" "}
              <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                {" "}
                {t('demo.blogOptimized.description')}{" "}
              </p>{" "}
            </Link>{" "}
            {/* Blog Slow */}{" "}
            <Link
              href="/blog-slow"
              className="group block p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-700 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-200"
            >
              {" "}
              <div className="text-4xl mb-4">😴</div>{" "}
              <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-2">
                {" "}
                {t('demo.blogSlow.title')}{" "}
              </h3>{" "}
              <p className="text-red-700 dark:text-red-300 text-sm">
                {" "}
                {t('demo.blogSlow.description')}{" "}
              </p>{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Footer */}{" "}
      <footer className="bg-gray-900 text-white py-8">
        {" "}
        <div className="container mx-auto px-4 text-center">
          {" "}
          <p className="text-gray-400">
            {" "}
            {t('footer.copyright')}{" "}
          </p>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
