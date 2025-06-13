import TermsAndConditions from '@/imports/terms/pages/TermsPage';
import { generateMetadata } from '@/lib/seo';
import React from 'react';

export const metadata = generateMetadata({
  title: 'Terms and Conditions - Service Agreement',
  description: 'Read Finovian\'s terms and conditions, including user agreements, service limitations, and legal terms for using our financial content and services.',
  canonical: '/terms',
});

const page = () => {
  return <TermsAndConditions />;
};

export default page;
