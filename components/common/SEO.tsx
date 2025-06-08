'use client';

import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  structuredData?: object;
  canonical?: string;
  noIndex?: boolean;
  preloadFonts?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  structuredData,
  canonical,
  noIndex = false,
  preloadFonts = [],
}) => {
  useEffect(() => {
    // Dynamically update document title if needed
    if (title && typeof document !== 'undefined') {
      document.title = title;
    }

    // Update meta description
    if (description && typeof document !== 'undefined') {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Add canonical link
    if (canonical && typeof document !== 'undefined') {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Handle noIndex meta tag
    if (typeof document !== 'undefined') {
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (noIndex) {
        if (!robotsMeta) {
          robotsMeta = document.createElement('meta');
          robotsMeta.setAttribute('name', 'robots');
          document.head.appendChild(robotsMeta);
        }
        robotsMeta.setAttribute('content', 'noindex, nofollow');
      } else if (robotsMeta) {
        robotsMeta.remove();
      }
    }

    // Add structured data
    if (structuredData && typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [title, description, structuredData, canonical, noIndex]);

  useEffect(() => {
    // Preload critical fonts
    preloadFonts.forEach((fontUrl) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = fontUrl;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [preloadFonts]);

  return null;
};

export default SEO;
