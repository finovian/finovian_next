import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity';
import { siteConfig } from '@/lib/seo';

interface Post {
  slug: { current: string };
  publishedAt: string;
  categories: { slug: { current: string } }[];
}

interface Category {
  slug: { current: string };
}

const postsQuery = `
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt,
    categories[]->{
      "slug": slug.current
    }
  }
`;

const categoriesQuery = `
  *[_type == "category" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const [posts, categories] = await Promise.all([
      client.fetch<Post[]>(postsQuery),
      client.fetch<Category[]>(categoriesQuery),
    ]);

    const staticRoutes: MetadataRoute.Sitemap = [
      {
        url: siteConfig.url,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${siteConfig.url}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${siteConfig.url}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${siteConfig.url}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${siteConfig.url}/terms`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
    ];

    const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
      url: `${siteConfig.url}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    const postRoutes: MetadataRoute.Sitemap = posts.map((post) => {
      const categorySlug = post.categories?.[0]?.slug || 'general';
      return {
        url: `${siteConfig.url}/category/${categorySlug}/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      };
    });

    return [...staticRoutes, ...categoryRoutes, ...postRoutes];
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error generating sitemap:', error);
    }
    // Return basic sitemap if there's an error
    return [
      {
        url: siteConfig.url,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ];
  }
}
