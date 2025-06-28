// Server-side translation utility
// Since server components can't use React context, we need a different approach

const translations = {
  en: {
    // Blog content
    'blog.title1': 'Complete React Hooks Guide for Beginners',
    'blog.title2': 'CSR vs SSR Comparison in Next.js 14',
    'blog.title3': 'Useful TypeScript Tips and Tricks',
    'blog.title4': 'Performance Optimization with React.memo and useCallback',
    'blog.title5': 'CSS Grid Layout: From Basics to Advanced',
    'blog.title6': 'Node.js Best Practices in 2024',
    'blog.title7': 'Database Indexing and Query Optimization',
    'blog.title8': 'Docker and Kubernetes for Developers',
    'blog.title9': 'JWT Authentication in Node.js',
    'blog.title10': 'State Management with Zustand',
    'blog.title11': 'Serverless Functions with Vercel',
    'blog.title12': 'GraphQL vs REST API',
    'blog.title13': 'Testing in React with Jest',
    'blog.title14': 'Responsive Design with Tailwind CSS',
    'blog.title15': 'Microservices Architecture Patterns',
    
    'blog.contentTemplate': 'This is the detailed content of the article "{title}". This article belongs to the {category} category and provides useful knowledge for developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    'blog.excerptTemplate': 'Learn about {category} and essential knowledge for modern developers.',
    
    'blog.tags.tutorial': 'Tutorial',
    'blog.tags.tips': 'Tips',
    'blog.tags.beginner': 'Beginner',
    'blog.tags.advanced': 'Advanced',
  },
  vi: {
    // Blog content
    'blog.title1': 'Hướng dẫn React Hooks chi tiết cho người mới bắt đầu',
    'blog.title2': 'So sánh CSR vs SSR trong Next.js 14',
    'blog.title3': 'TypeScript Tips và Tricks hữu ích',
    'blog.title4': 'Tối ưu performance với React.memo và useCallback',
    'blog.title5': 'CSS Grid Layout: Từ cơ bản đến nâng cao',
    'blog.title6': 'Node.js Best Practices trong 2024',
    'blog.title7': 'Database Indexing và Query Optimization',
    'blog.title8': 'Docker và Kubernetes cho developers',
    'blog.title9': 'JWT Authentication trong Node.js',
    'blog.title10': 'State Management với Zustand',
    'blog.title11': 'Serverless Functions với Vercel',
    'blog.title12': 'GraphQL vs REST API',
    'blog.title13': 'Testing trong React với Jest',
    'blog.title14': 'Responsive Design với Tailwind CSS',
    'blog.title15': 'Microservices Architecture patterns',
    
    'blog.contentTemplate': 'Đây là nội dung chi tiết của bài viết "{title}". Bài viết này thuộc danh mục {category} và cung cấp những kiến thức hữu ích cho developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    'blog.excerptTemplate': 'Tìm hiểu về {category} và những kiến thức cần thiết cho developers hiện đại.',
    
    'blog.tags.tutorial': 'Tutorial',
    'blog.tags.tips': 'Tips', 
    'blog.tags.beginner': 'Beginner',
    'blog.tags.advanced': 'Advanced',
  }
};

export const getServerTranslation = (language: 'vi' | 'en') => {
  return (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
};
