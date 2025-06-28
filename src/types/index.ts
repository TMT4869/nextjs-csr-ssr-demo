export interface PerformanceMetrics {
  label: string;
  csr: {
    value: string;
    status: 'good' | 'warning' | 'poor';
    description: string;
  };
  ssr: {
    value: string;
    status: 'good' | 'warning' | 'poor';
    description: string;
  };
}

// Function to create performance metrics with translation support
export const createPerformanceMetrics = (t: (key: string) => string): PerformanceMetrics[] => [
  {
    label: t('perf.firstContentfulPaint'),
    csr: {
      value: t('perf.slow'),
      status: 'poor',
      description: t('perf.csr.fcp.desc')
    },
    ssr: {
      value: t('perf.fast'),
      status: 'good',
      description: t('perf.ssr.fcp.desc')
    }
  },
  {
    label: t('perf.timeToInteractive'),
    csr: {
      value: t('perf.fast'),
      status: 'good',
      description: t('perf.csr.tti.desc')
    },
    ssr: {
      value: t('perf.medium'),
      status: 'warning',
      description: t('perf.ssr.tti.desc')
    }
  },
  {
    label: t('perf.seoScore'),
    csr: {
      value: t('perf.poor'),
      status: 'poor',
      description: t('perf.csr.seo.desc')
    },
    ssr: {
      value: t('perf.excellent'),
      status: 'good',
      description: t('perf.ssr.seo.desc')
    }
  },
  {
    label: t('perf.serverLoad'),
    csr: {
      value: t('perf.low'),
      status: 'good',
      description: t('perf.csr.server.desc')
    },
    ssr: {
      value: t('perf.high'),
      status: 'poor',
      description: t('perf.ssr.server.desc')
    }
  },
  {
    label: t('perf.initialBundleSize'),
    csr: {
      value: t('perf.large'),
      status: 'poor',
      description: t('perf.csr.bundle.desc')
    },
    ssr: {
      value: t('perf.small'),
      status: 'good',
      description: t('perf.ssr.bundle.desc')
    }
  }
];

// Legacy export for backwards compatibility (will use default Vietnamese)
export const performanceMetrics: PerformanceMetrics[] = [
  {
    label: 'First Contentful Paint',
    csr: {
      value: 'Slow',
      status: 'poor',
      description: 'Phải tải JS và fetch data trước'
    },
    ssr: {
      value: 'Fast',
      status: 'good',
      description: 'HTML có nội dung ngay lập tức'
    }
  },
  {
    label: 'Time to Interactive',
    csr: {
      value: 'Fast',
      status: 'good',
      description: 'Sau khi load xong thì tương tác ngay'
    },
    ssr: {
      value: 'Medium',
      status: 'warning',
      description: 'Cần hydration để tương tác'
    }
  },
  {
    label: 'SEO Score',
    csr: {
      value: 'Poor',
      status: 'poor',
      description: 'Crawler không thấy nội dung dynamic'
    },
    ssr: {
      value: 'Excellent',
      status: 'good',
      description: 'HTML có đầy đủ nội dung'
    }
  },
  {
    label: 'Server Load',
    csr: {
      value: 'Low',
      status: 'good',
      description: 'Chỉ serve static files'
    },
    ssr: {
      value: 'High',
      status: 'poor',
      description: 'Phải render HTML cho mỗi request'
    }
  },
  {
    label: 'Initial Bundle Size',
    csr: {
      value: 'Large',
      status: 'poor',
      description: 'Cần tải toàn bộ JS app'
    },
    ssr: {
      value: 'Small',
      status: 'good',
      description: 'Chỉ cần HTML + minimal JS'
    }
  }
];

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface BlogPost extends Post {
  category: string;
  tags: string[];
  readTime: number;
  imageUrl: string;
  excerpt: string;
}
