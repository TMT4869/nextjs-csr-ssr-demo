import { Post } from '@/types';

// Simulate API delay
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data generators
export const generateMockPosts = (count: number = 10, type: 'CSR' | 'SSR' = 'CSR'): Post[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Post ${i + 1} - Được tải từ ${type}`,
    content: `Nội dung của bài viết ${i + 1}. ${type === 'CSR' ? 'Đây là dữ liệu được fetch từ client side sau khi component đã mount.' : 'Đây là dữ liệu được fetch từ server side trước khi gửi HTML về client.'}`,
    author: `Tác giả ${i + 1}`,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  }));
};

// Mock API functions
export const fetchPostsCSR = async (): Promise<Post[]> => {
  await delay(3000); // Tăng thời gian delay để thấy rõ loading state
  return generateMockPosts(10, 'CSR');
};

export const fetchPostsSSR = async (): Promise<Post[]> => {
  await delay(2000); // Tăng delay cho SSR nhưng ít hơn CSR
  return generateMockPosts(10, 'SSR');
};

// Format date utility
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Performance measurement
export const measurePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    return {
      domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
      loadComplete: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      firstPaint: Math.round(navigation.responseStart - navigation.fetchStart),
    };
  }
  
  return null;
};
