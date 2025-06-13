import React from 'react';
import ContactPage from '@/imports/contact/pages/ContactPage';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Contact Us - Get in Touch with Financial Experts',
  description: 'Contact Finovian for financial inquiries, partnership opportunities, or expert investment advice. Our team is here to help with your financial questions.',
  canonical: '/contact',
});

const page = () => {
  return <ContactPage />;
};

export default page;
