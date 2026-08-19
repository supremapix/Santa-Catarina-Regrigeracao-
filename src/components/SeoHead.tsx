import React from 'react';
import { EnhancedSEO, BreadcrumbItem } from './EnhancedSEO';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemas?: any[];
  breadcrumbs?: BreadcrumbItem[];
  city?: string;
  neighborhood?: string;
  faqList?: { question: string; answer: string }[];
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  schemas = [],
  breadcrumbs = [],
  city,
  neighborhood,
  faqList = [],
}) => {
  return (
    <EnhancedSEO
      title={title}
      description={description}
      canonicalUrl={canonicalUrl}
      ogImage={ogImage}
      schemas={schemas}
      breadcrumbs={breadcrumbs}
      city={city}
      neighborhood={neighborhood}
      faqList={faqList}
    />
  );
};
