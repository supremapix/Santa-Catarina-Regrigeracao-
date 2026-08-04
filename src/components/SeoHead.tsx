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
        "ratingCount": "184",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "name": "Conserto de Geladeira Brastemp",
          "reviewBody": "Excelente atendimento! Minha geladeira Brastemp Inverse estava com problema no compressor e a equipe da Santa Catarina Refrigeração resolveu rapidamente no mesmo dia. Técnicos muito competentes, educados e preço justo.",
          "datePublished": "2026-07-15",
          "author": {
            "@type": "Person",
            "name": "Ana Maria S."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "name": "Manutenção de Freezer & Frigobares",
          "reviewBody": "Meu freezer horizontal e dois frigobares das suítes pararam de funcionar na véspera do feriado. Pensei que teria que comprar novos. A equipe veio com agilidade e consertou com peças originais e garantia formal de 90 dias!",
          "datePublished": "2026-06-20",
          "author": {
            "@type": "Person",
            "name": "Roberto C."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "name": "Manutenção de Balcão Refrigerado e Cervejeira",
          "reviewBody": "Atendimento via WhatsApp muito prático! O técnico veio à nossa loja em Itajaí no mesmo dia e resolveu o problema do balcão refrigerado e da cervejeira. Manteve todas as bebidas trincando. Super recomendo!",
          "datePublished": "2026-07-10",
          "author": {
            "@type": "Person",
            "name": "Juliana L."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "name": "Assistência Técnica em Câmara Fria Comercial",
          "reviewBody": "A câmara fria de congelados do restaurante em BC apresentou ruído e perda de temperatura. O plantão 24h nos atendeu de madrugada e salvou todo o estoque de frutos do mar. Profissionalismo exemplar!",
          "datePublished": "2026-05-18",
          "author": {
            "@type": "Person",
            "name": "Marcos P."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "name": "Conserto de Lava e Seca LG",
          "reviewBody": "Minha lava e seca LG apresentou o erro OE e travou com água dentro. Chamei pelo WhatsApp e o orçamento foi sem complicação. Trocaram a bomba de drenagem rapidamente. Nota 10!",
          "datePublished": "2026-07-05",
          "author": {
            "@type": "Person",
            "name": "Cláudia F."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "name": "Conserto de Adega Climatizada",
          "reviewBody": "Minha adega climatizada de 48 garrafas parou de refrigerar. Fizeram a troca da placa do painel e do sensor de precisão. O vinho voltou à temperatura ideal sem ruído.",
          "datePublished": "2026-04-12",
          "author": {
            "@type": "Person",
            "name": "Luciana M."
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          }
        }
      ],
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
