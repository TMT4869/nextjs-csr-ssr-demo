"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 backdrop-blur-sm"
      aria-label={`Switch to ${language === "en" ? "Vietnamese" : "English"}`}
    >
      {/* Flag */}
      <div className="relative w-6 h-5 rounded-md overflow-hidden border border-gray-200 dark:border-gray-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
        <Image
          src={language === "en" ? "/us.svg" : "/vn.svg"}
          alt={language === "en" ? "US Flag" : "Vietnam Flag"}
          width={24}
          height={20}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Language Code with Background */}
      <div className="relative">
        <span className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {language === "en" ? "EN" : "VI"}
        </span>
        <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-md opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 scale-150"></div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </button>
  );
}
