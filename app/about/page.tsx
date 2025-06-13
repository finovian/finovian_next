import AboutPage from '@/imports/about/pages/AboutPage';
import { generateMetadata } from '@/lib/seo';
import React from 'react';

export const metadata = generateMetadata({
  title: 'About Us - Expert Financial Analysis Team',
  description: 'Learn about Finovian\'s team of financial experts, our mission to provide accurate market analysis, and our commitment to helping investors make informed decisions.',
  canonical: '/about',
});

const page = () => {
  return <AboutPage />;
};

export default page;
