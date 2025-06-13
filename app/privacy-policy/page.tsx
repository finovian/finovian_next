import PrivacyPolicyPage from '@/imports/privacy-policy/pages/PrivacyPolicyPage';
import { generateMetadata } from '@/lib/seo';
import React from 'react';

export const metadata = generateMetadata({
  title: 'Privacy Policy - How We Protect Your Data',
  description: 'Learn about Finovian\'s privacy policy, how we collect, use, and protect your personal information, and your rights regarding data privacy.',
  canonical: '/privacy-policy',
});

const page = () => {
  return <PrivacyPolicyPage />;
};

export default page;
