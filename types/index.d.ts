export interface Post {
  _id: string;
  title: string;
  seoTitle?: string;
  slug: { current: string };
  seoDescription?: string;
  excerpt?: string;
  mainImage: any;
  body: any;
  author?: { name?: string };
  publishedAt: string;
  categories?: Array<{ title: string; slug: { current: string } }>;
  isFeatured?: boolean;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
}

export interface Author {
  _id: string;
  name: string;
  image?: any;
  bio?: string;
}

// Type declarations for optional dependencies
declare module 'webpack-bundle-analyzer' {
  export class BundleAnalyzerPlugin {
    constructor(options?: any);
  }
}

// Global type extensions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
