import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemas?: any[];
  breadcrumbs?: { name: string; item: string }[];
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = COMPANY_INFO.assets.socialPreview,
  schemas = [],
  breadcrumbs = [],
}) => {
  const fullCanonical = canonicalUrl || `${COMPANY_INFO.subdomainUrl}${window.location.pathname}`;

  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Helper function to update or add meta tag
    const updateMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Basic Meta Tags
    updateMetaTag('meta[name="description"]', 'name', 'description', description);
    
    // Open Graph
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', fullCanonical);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    updateMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'pt_BR');
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', COMPANY_INFO.name);

    // Twitter
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // Clean up old dynamic schemas
    const existingDynamicSchemas = document.querySelectorAll('script[data-dynamic-schema="true"]');
    existingDynamicSchemas.forEach((el) => el.remove());

    // Inject Base LocalBusiness + HVACBusiness Schema
    const baseLocalBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HVACBusiness"],
      "@id": `${COMPANY_INFO.subdomainUrl}/#localbusiness`,
      "name": COMPANY_INFO.name,
      "legalName": COMPANY_INFO.legalName,
      "url": COMPANY_INFO.subdomainUrl,
      "logo": COMPANY_INFO.assets.logo,
      "image": COMPANY_INFO.assets.socialPreview,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.number}`,
        "addressLocality": COMPANY_INFO.address.city,
        "addressRegion": COMPANY_INFO.address.state,
        "postalCode": COMPANY_INFO.address.zipCode,
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": COMPANY_INFO.geo.latitude,
        "longitude": COMPANY_INFO.geo.longitude
      },
      "openingHoursSpecification": COMPANY_INFO.businessHours.openingHoursSpecification,
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": COMPANY_INFO.geo.latitude,
          "longitude": COMPANY_INFO.geo.longitude
        },
        "geoRadius": 200000
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "184",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        COMPANY_INFO.whatsappUrl,
        `mailto:${COMPANY_INFO.email}`
      ]
    };

    // BreadcrumbList schema if provided
    let breadcrumbSchema = null;
    if (breadcrumbs.length > 0) {
      breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((bc, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": bc.name,
          "item": bc.item
        }))
      };
    }

    const allSchemas = [baseLocalBusinessSchema, ...schemas];
    if (breadcrumbSchema) {
      allSchemas.push(breadcrumbSchema);
    }

    allSchemas.forEach((schemaObj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-dynamic-schema', 'true');
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });

  }, [title, description, fullCanonical, ogImage, JSON.stringify(schemas), JSON.stringify(breadcrumbs)]);

  return null;
};
