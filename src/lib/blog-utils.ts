import { Post } from '@/types';

export interface BlogPost extends Post {
  category: string;
  tags: string[];
  readTime: number;
  imageUrl: string;
  excerpt: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  color: string;
}

// Mock categories
export const categories: Category[] = [
  { id: 'javascript', name: 'JavaScript', count: 15, color: 'yellow' },
  { id: 'react', name: 'React', count: 12, color: 'blue' },
  { id: 'nextjs', name: 'Next.js', count: 8, color: 'black' },
  { id: 'typescript', name: 'TypeScript', count: 10, color: 'blue' },
  { id: 'css', name: 'CSS', count: 6, color: 'pink' },
  { id: 'nodejs', name: 'Node.js', count: 7, color: 'green' },
  { id: 'database', name: 'Database', count: 5, color: 'purple' },
  { id: 'devops', name: 'DevOps', count: 4, color: 'red' },
];

// Mock authors
const authors = [
  'Nguyễn Văn An',
  'Trần Thị Bình',
  'Lê Hoàng Cường', 
  'Phạm Thị Dung',
  'Võ Minh Khang'
];

// Mock blog titles
const blogTitles = [
  'Hướng dẫn React Hooks chi tiết cho người mới bắt đầu',
  'So sánh CSR vs SSR trong Next.js 14',
  'TypeScript Tips và Tricks hữu ích',
  'Tối ưu performance với React.memo và useCallback',
  'CSS Grid Layout: Từ cơ bản đến nâng cao',
  'Node.js Best Practices trong 2024',
  'Database Indexing và Query Optimization',
  'Docker và Kubernetes cho developers',
  'JWT Authentication trong Node.js',
  'State Management với Zustand',
  'Serverless Functions với Vercel',
  'GraphQL vs REST API',
  'Testing trong React với Jest',
  'Responsive Design với Tailwind CSS',
  'Microservices Architecture patterns'
];

// Generate mock blog posts
export const generateMockBlogs = async (count: number = 12): Promise<BlogPost[]> => {
  // Simulate API delay for SSR (5 seconds to demonstrate SSR vs CSR difference)
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  return Array.from({ length: count }, (_, i) => {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const title = blogTitles[Math.floor(Math.random() * blogTitles.length)];
    
    return {
      id: i + 1,
      title: title,
      content: `Đây là nội dung chi tiết của bài viết "${title}". Bài viết này thuộc danh mục ${category.name} và cung cấp những kiến thức hữu ích cho developers. Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
      excerpt: `Tìm hiểu về ${category.name} và những kiến thức cần thiết cho developers hiện đại.`,
      author: authors[Math.floor(Math.random() * authors.length)],
      category: category.id,
      tags: [
        category.name,
        Math.random() > 0.5 ? 'Tutorial' : 'Tips',
        Math.random() > 0.5 ? 'Beginner' : 'Advanced'
      ],
      readTime: Math.floor(Math.random() * 10) + 3,
      imageUrl: `https://picsum.photos/400/250?random=${i + 1}`,
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
    };
  });
};

// Client-side search function
export const searchBlogs = (blogs: BlogPost[], query: string): BlogPost[] => {
  if (!query.trim()) return blogs;
  
  const lowercaseQuery = query.toLowerCase();
  return blogs.filter(blog => 
    blog.title.toLowerCase().includes(lowercaseQuery) ||
    blog.content.toLowerCase().includes(lowercaseQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    blog.author.toLowerCase().includes(lowercaseQuery)
  );
};

// Client-side filter function
export const filterBlogsByCategory = (blogs: BlogPost[], categoryId: string): BlogPost[] => {
  if (!categoryId || categoryId === 'all') return blogs;
  return blogs.filter(blog => blog.category === categoryId);
};
