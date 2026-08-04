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

  // 1. Base LocalBusiness + HVACBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
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

  // 2. Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${COMPANY_INFO.subdomainUrl}/#organization`,
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone,
      "email": COMPANY_INFO.email,
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": neighborhood ? "AdministrativeArea" : "City",
      "name": neighborhood ? `${neighborhood}, ${city || 'Penha'}` : (city || "Santa Catarina")
    },
    "description": description,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Refrigeração",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conserto de Geladeiras e Refrigeração Domiciliar"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conserto e Manutenção de Lava e Seca"
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
    }
  };

  // 3. BreadcrumbList Schema
  let breadcrumbSchema = null;
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((bc, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": bc.name,
        "item": bc.item.startsWith('http') ? bc.item : `${COMPANY_INFO.subdomainUrl}${bc.item}`
      }))
    };
  }

  // 4. FAQPage Schema
  let faqSchema = null;
  if (faqList && faqList.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqList.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };
  }

  const allSchemas = [localBusinessSchema, serviceSchema, ...schemas];
  if (breadcrumbSchema) allSchemas.push(breadcrumbSchema);
  if (faqSchema) allSchemas.push(faqSchema);

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
      {allSchemas.map((sch, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(sch)}
        </script>
      ))}

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
