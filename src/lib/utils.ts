import { Post } from "@/types";

// Simulate API delay
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Mock data generators
export const generateMockPosts = (
  count: number = 10,
  type: "CSR" | "SSR" = "CSR",
  t?: (key: string) => string
): Post[] => {
  return Array.from({ length: count }, (_, i) => {
    const title = t ? 
      t('mock.postTitle').replace('{number}', (i + 1).toString()).replace('{type}', type) :
      `Post ${i + 1} - Loaded from ${type}`;
    
    const csrContent = t ? t('mock.csrContent') : "This is data fetched from client side after component has mounted.";
    const ssrContent = t ? t('mock.ssrContent') : "This is data fetched from server side before sending HTML to client.";
    const authorText = t ? t('mock.author').replace('{number}', (i + 1).toString()) : `Author ${i + 1}`;
    const description = type === "CSR" ? csrContent : ssrContent;
    const content = t ? 
      t('mock.content').replace('{number}', (i + 1).toString()).replace('{description}', description) :
      `Content of post ${i + 1}. ${description}`;

    return {
      id: i + 1,
      title: title,
      content: content,
      author: authorText,
      createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    };
  });
};

// Mock API functions
export const fetchPostsCSR = async (t?: (key: string) => string): Promise<Post[]> => {
  await delay(3000);
  return generateMockPosts(10, "CSR", t);
};

export const fetchPostsSSR = async (t?: (key: string) => string): Promise<Post[]> => {
  await delay(2000);
  return generateMockPosts(10, "SSR", t);
};

// Format date utility
export const formatDate = (dateString: string, language: 'vi' | 'en' = "en"): string => {
  const locale = language === 'vi' ? 'vi-VN' : 'en-US';
  return new Date(dateString).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Performance measurement
export const measurePerformance = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;

    return {
      domContentLoaded: Math.round(
        navigation.domContentLoadedEventEnd - navigation.fetchStart
      ),
      loadComplete: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      firstPaint: Math.round(navigation.responseStart - navigation.fetchStart),
    };
  }

  return null;
};
