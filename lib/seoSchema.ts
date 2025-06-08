import { siteConfig } from './seo';
import type { Image } from '@sanity/types';
import { getImageUrl } from './sanity';

// Enhanced Article Schema with FAQ and Review support
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
  readingTime,
  wordCount,
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
  readingTime?: number;
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: image ? getImageUrl.hero(image) : `${siteConfig.url}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
      url: `${siteConfig.url}/author`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
        width: 200,
        height: 60,
      },
    },
    articleSection: category,
    keywords: tags?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(readingTime && {
      timeRequired: `PT${readingTime}M`,
    }),
    ...(wordCount && {
      wordCount,
    }),
  };
}

// FAQ Schema for better search visibility
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Financial Service Schema for finance-related content
export function generateFinancialServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    serviceType: 'Financial Information and Analysis',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Financial Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Stock Analysis',
          description: 'In-depth stock market analysis and insights',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Investment Strategies',
          description: 'Expert investment strategies and portfolio management',
        },
        {
          '@type': 'OfferCatalog',
          name: 'Market Research',
          description: 'Comprehensive market research and analysis',
        },
      ],
    },
  };
}

// News Article Schema for timely financial news
export function generateNewsArticleSchema({
  title,
  description,
  image,
  publishedTime,
  author,
  category,
  url,
}: {
  title: string;
  description: string;
  image?: Image;
  publishedTime: string;
  author: string;
  category: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: image ? getImageUrl.hero(image) : `${siteConfig.url}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

// How-to Schema for educational content
export function generateHowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
}: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; image?: string }>;
  totalTime?: string;
  estimatedCost?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && { estimatedCost }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image,
        },
      }),
    })),
  };
}

// Local Business Schema (if applicable)
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    serviceType: 'Financial Advisory Services',
    areaServed: 'Worldwide',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${siteConfig.url}/contact`,
      availableLanguage: 'English',
    },
    sameAs: [
      `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
      `https://linkedin.com/${siteConfig.social.linkedin}`,
    ],
  };
}

// Review Schema for testimonials
export function generateReviewSchema(reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  };
}
