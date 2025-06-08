import { Metadata } from 'next';
import { getImageUrl } from './sanity';
import type { Image } from '@sanity/types';

// Site configuration
export const siteConfig = {
  name: 'Finovian',
  description:
    'Expert financial insights, stock analysis, and investment strategies. Stay ahead with our comprehensive market analysis and AI-driven financial content.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://finovian.com',
  ogImage: '/og-image.jpg',
  creator: 'Finovian Team',
  keywords: [
    'finance',
    'stocks',
    'investment',
    'trading',
    'market analysis',
    'financial news',
    'AI trading',
    'portfolio management',
    'wealth building',
    'financial planning',
  ],
  authors: [
    {
      name: 'Finovian Team',
      url: 'https://finovian.com/about',
    },
  ],
  social: {
    twitter: '@finovian',
    linkedin: 'company/finovian',
  },
};

export interface SEOProps {
  title?: string;
  description?: string;
  image?: Image | string;
  canonical?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  category?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description = siteConfig.description,
  image,
  canonical,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  tags,
  category,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description;
  const imageUrl = image
    ? typeof image === 'string'
      ? image
      : getImageUrl.hero(image)
    : `${siteConfig.url}${siteConfig.ogImage}`;
  const canonicalUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;

  const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords.concat(tags || []).join(', '),
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: type as 'website' | 'article',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors || [siteConfig.creator],
        section: category,
        tags: tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      site: siteConfig.social.twitter,
      creator: siteConfig.social.twitter,
      images: [imageUrl],
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_ID,
      yandex: process.env.YANDEX_VERIFICATION_ID,
      yahoo: process.env.YAHOO_VERIFICATION_ID,
    },
  };

  return metadata;
}

// Structured data generators
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${siteConfig.url}/contact`,
    },
    sameAs: [
      `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
      `https://linkedin.com/${siteConfig.social.linkedin}`,
    ],
  };
}

export function generateArticleSchema({
  title,
  description,
  image,
  publishedTime,
  modifiedTime,
  author,
  category,
  tags,
  url,
}: {
  title: string;
  description: string;
  image?: Image;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  category: string;
  tags?: string[];
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image ? getImageUrl.hero(image) : `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    articleSection: category,
    keywords: tags?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
