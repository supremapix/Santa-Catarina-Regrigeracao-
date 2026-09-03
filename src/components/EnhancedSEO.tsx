import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/company';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
  type?: string;
  schemas?: Record<string, any>[];
  breadcrumbs?: BreadcrumbItem[];
  city?: string;
  neighborhood?: string;
  faqList?: { question: string; answer: string }[];
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = COMPANY_INFO.assets.socialPreview,
  keywords = "conserto de geladeira, assistência técnica geladeira, conserto lava e seca, manutenção câmara fria, conserto freezer, penha sc, itajaí, balneário camboriú, navegantes",
  type = "website",
  schemas = [],
  breadcrumbs = [],
  city,
  neighborhood,
  faqList = [],
}) => {
  const fullCanonical = canonicalUrl || `${COMPANY_INFO.subdomainUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`;

  // Build Connected @graph JSON-LD
  const graphEntities: any[] = [
    // 1. Organization / LocalBusiness Entity
    {
      "@type": ["LocalBusiness", "HVACBusiness"],
      "@id": `${COMPANY_INFO.subdomainUrl}/#organization`,
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
        "addressLocality": city || COMPANY_INFO.address.city,
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Assistência Técnica e Refrigeração",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Assistência Técnica e Conserto de Geladeiras"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Refrigeração Comercial e Manutenção PMOC"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Instalação e Manutenção de Câmaras Frias"
            }
          }
        ]
      },
      "sameAs": [
        COMPANY_INFO.whatsappUrl,
        `mailto:${COMPANY_INFO.email}`
      ]
    },
    // 2. WebSite Entity
    {
      "@type": "WebSite",
      "@id": `${COMPANY_INFO.subdomainUrl}/#website`,
      "url": COMPANY_INFO.subdomainUrl,
      "name": COMPANY_INFO.name,
      "publisher": {
        "@id": `${COMPANY_INFO.subdomainUrl}/#organization`
      },
      "inLanguage": "pt-BR"
    },
    // 3. WebPage Entity
    {
      "@type": "WebPage",
      "@id": `${fullCanonical}#webpage`,
      "url": fullCanonical,
      "name": title,
      "description": description,
      "isPartOf": {
        "@id": `${COMPANY_INFO.subdomainUrl}/#website`
      },
      "about": {
        "@id": `${COMPANY_INFO.subdomainUrl}/#organization`
      },
      "inLanguage": "pt-BR"
    },
    // 4. Service Entity
    {
      "@type": "Service",
      "@id": `${fullCanonical}#service`,
      "name": title,
      "description": description,
      "provider": {
        "@id": `${COMPANY_INFO.subdomainUrl}/#organization`
      },
      "areaServed": {
        "@type": neighborhood ? "AdministrativeArea" : "City",
        "name": neighborhood ? `${neighborhood}, ${city || 'Penha'}` : (city || "Santa Catarina")
      }
    }
  ];

  // 5. BreadcrumbList
  if (breadcrumbs && breadcrumbs.length > 0) {
    graphEntities.push({
      "@type": "BreadcrumbList",
      "@id": `${fullCanonical}#breadcrumb`,
      "itemListElement": breadcrumbs.map((bc, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": bc.name,
        "item": bc.item.startsWith('http') ? bc.item : `${COMPANY_INFO.subdomainUrl}${bc.item}`
      }))
    });
  }

  // 6. FAQPage if eligible
  if (faqList && faqList.length > 0) {
    graphEntities.push({
      "@type": "FAQPage",
      "@id": `${fullCanonical}#faq`,
      "mainEntity": faqList.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  // Custom additional schemas provided as props
  if (schemas && schemas.length > 0) {
    graphEntities.push(...schemas);
  }

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": graphEntities
  };

  return (
    <Helmet>
      {/* Basic Title & Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="google-site-verification" content="eC0TaTVOSOzvkOgV8LKInsPwwJyXu_dO7rzRXm2Y8Z4" />
      <meta name="msvalidate.01" content="274D1FA5C55C0D2283EAE94551589DFC" />
      <link rel="canonical" href={fullCanonical} />

      {/* Language & Geo Tags */}
      <meta name="language" content="Portuguese" />
      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content={city || "Penha"} />
      <meta name="geo.position" content={`${COMPANY_INFO.geo.latitude};${COMPANY_INFO.geo.longitude}`} />
      <meta name="ICBM" content={`${COMPANY_INFO.geo.latitude}, ${COMPANY_INFO.geo.longitude}`} />

      {/* Resource Hints for Ultra Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://img.supremasite.com.br" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={COMPANY_INFO.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdGraph)}
      </script>

      {/* Service Worker Registration script */}
      <script type="text/javascript">
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js').catch(function(err) {
                console.log('SW registration failed: ', err);
              });
            });
          }
        `}
      </script>
    </Helmet>
  );
};
