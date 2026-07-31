import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CITIES_DATA, getAllNeighborhoods } from '../src/data/cities.ts';
import { COMPANY_INFO } from '../src/data/company.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

function formatMetaHead({ title, description, canonicalUrl, schemas = [], breadcrumbs = [], city = 'Penha', neighborhood = '' }) {
  const fullCanonical = canonicalUrl.startsWith('http') ? canonicalUrl : `${COMPANY_INFO.subdomainUrl}${canonicalUrl}`;
  const ogImage = COMPANY_INFO.assets.socialPreview;

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
      "addressLocality": city,
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
      "telephone": COMPANY_INFO.phone
    },
    "areaServed": {
      "@type": neighborhood ? "AdministrativeArea" : "City",
      "name": neighborhood ? `${neighborhood}, ${city}` : city
    },
    "description": description
  };

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

  const allSchemas = [localBusinessSchema, serviceSchema, ...schemas];
  if (breadcrumbSchema) allSchemas.push(breadcrumbSchema);

  const jsonLdTags = allSchemas.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n  ');

  const headInject = `
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="keywords" content="conserto de geladeira, assistência técnica geladeira, conserto lava e seca, manutenção câmara fria, conserto freezer, ${city.toLowerCase()}, santa catarina" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="google-site-verification" content="eC0TaTVOSOzvkOgV8LKInsPwwJyXu_dO7rzRXm2Y8Z4" />
  <meta name="msvalidate.01" content="274D1FA5C55C0D2283EAE94551589DFC" />
  <link rel="canonical" href="${fullCanonical}" />
  <meta name="language" content="Portuguese" />
  <meta name="geo.region" content="BR-SC" />
  <meta name="geo.placename" content="${city}" />
  <meta name="geo.position" content="${COMPANY_INFO.geo.latitude};${COMPANY_INFO.geo.longitude}" />
  <meta name="ICBM" content="${COMPANY_INFO.geo.latitude}, ${COMPANY_INFO.geo.longitude}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="dns-prefetch" href="https://img.supremasite.com.br" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:url" content="${fullCanonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:site_name" content="${COMPANY_INFO.name}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${ogImage}" />
  ${jsonLdTags}
  <script type="text/javascript">
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').catch(function(err) {});
      });
    }
  </script>`;

  let pageContent = baseHtml;
  if (pageContent.includes('<title>')) {
    pageContent = pageContent.replace(/<title>.*?<\/title>/gi, '');
  }
  pageContent = pageContent.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/gi, '');

  pageContent = pageContent.replace('</head>', `${headInject}\n</head>`);
  return pageContent;
}

function createPageFile(routePath, pageHtml) {
  const targetDir = path.join(distDir, routePath);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, pageHtml, 'utf-8');
}

console.log('Generating pre-rendered static HTML routes and sitemap...');

const allSitemapUrls = [
  { loc: COMPANY_INFO.subdomainUrl, priority: '1.0', changefreq: 'daily' }
];

// 1. Static service & landing routes
const staticServices = [
  { slug: 'conserto-de-geladeira', name: 'Conserto de Geladeiras' },
  { slug: 'conserto-de-side-by-side', name: 'Conserto de Side by Side' },
  { slug: 'conserto-de-frigobar', name: 'Conserto de Frigobar' },
  { slug: 'conserto-de-freezer', name: 'Conserto de Freezer' },
  { slug: 'conserto-de-camara-fria', name: 'Conserto de Câmara Fria' },
  { slug: 'conserto-de-balcao-refrigerado', name: 'Conserto de Balcão Refrigerado' },
  { slug: 'conserto-de-adega', name: 'Conserto de Adegas Climatizadas' },
  { slug: 'conserto-lava-e-seca-penha', name: 'Conserto de Lava e Seca Penha' },
  { slug: 'assistencia-lava-e-seca-lg-penha', name: 'Assistência Lava e Seca LG Penha' },
  { slug: 'assistencia-lava-e-seca-samsung-penha', name: 'Assistência Lava e Seca Samsung Penha' },
  { slug: 'blog/lava-e-seca-penha-guia-completo', name: 'Guia Completo Lava e Seca Penha' }
];

for (const s of staticServices) {
  const url = `/${s.slug}`;
  const title = `Assistência Técnica em ${s.name} | Santa Catarina Refrigeração`;
  const description = `Especialista em ${s.name}. Atendimento emergencial em domicílio com garantia formal de 90 dias e peças originais.`;
  const html = formatMetaHead({ title, description, canonicalUrl: url });
  createPageFile(s.slug, html);
  allSitemapUrls.push({ loc: `${COMPANY_INFO.subdomainUrl}${url}`, priority: '0.9', changefreq: 'weekly' });
}

// 2. City & Region routes
for (const city of CITIES_DATA) {
  const title = `Conserto de Geladeira em ${city.name}/SC | Assistência Técnica 24h`;
  const description = `Assistência técnica especializada em conserto de geladeira, freezer, câmara fria e lava e seca em ${city.name}/${city.state}. Atendimento domiciliar nos bairros ${city.neighborhoods.slice(0, 4).join(', ')}. Garantia 90 dias.`;
  const canonicalUrl = `/conserto-de-geladeira-em-${city.slug}`;

  const breadcrumbs = [
    { name: "Início", item: "/" },
    { name: "Cidades", item: "/#cobertura" },
    { name: city.name, item: canonicalUrl }
  ];

  const html = formatMetaHead({ title, description, canonicalUrl, city: city.name, breadcrumbs });

  createPageFile(`conserto-de-geladeira-em-${city.slug}`, html);
  createPageFile(`cidades/${city.slug}`, html);
  createPageFile(`cidade/${city.slug}`, html);
  createPageFile(`regioes/${city.slug}`, html);
  createPageFile(`regiao/${city.slug}`, html);

  allSitemapUrls.push({ loc: `${COMPANY_INFO.subdomainUrl}${canonicalUrl}`, priority: '0.85', changefreq: 'weekly' });
}

// 3. Neighborhood routes
const neighborhoods = getAllNeighborhoods();
for (const nb of neighborhoods) {
  const title = `Conserto de Geladeira no Bairro ${nb.name} (${nb.cityName}/SC) | Assistência 24h`;
  const description = `Atendimento técnico de emergência e orçamento sem compromisso no bairro ${nb.name} em ${nb.cityName}/SC. Conserto de geladeiras, lava e seca, freezers e câmaras frias.`;
  const canonicalUrl = `/bairros/${nb.slug}`;

  const breadcrumbs = [
    { name: "Início", item: "/" },
    { name: "Cidades", item: "/#cobertura" },
    { name: nb.cityName, item: `/conserto-de-geladeira-em-${nb.citySlug}` },
    { name: `Bairro ${nb.name}`, item: canonicalUrl }
  ];

  const html = formatMetaHead({
    title,
    description,
    canonicalUrl,
    city: nb.cityName,
    neighborhood: nb.name,
    breadcrumbs
  });

  createPageFile(`bairros/${nb.slug}`, html);
  createPageFile(`bairro/${nb.slug}`, html);

  allSitemapUrls.push({ loc: `${COMPANY_INFO.subdomainUrl}${canonicalUrl}`, priority: '0.80', changefreq: 'weekly' });
}

// 3.5 Base overview routes for regioes, cidades, bairros
const baseRoutes = ['regioes', 'regiao', 'cidades', 'cidade', 'bairros', 'bairro'];
for (const baseRoute of baseRoutes) {
  const title = `Regiões e Cidades Atendidas | Assistência Técnica Santa Catarina`;
  const description = `Confira todas as cidades e regiões de Santa Catarina atendidas com assistência técnica de geladeiras, lava e seca, freezers e câmaras frias.`;
  const html = formatMetaHead({ title, description, canonicalUrl: `/${baseRoute}` });
  createPageFile(baseRoute, html);
  allSitemapUrls.push({ loc: `${COMPANY_INFO.subdomainUrl}/${baseRoute}`, priority: '0.8', changefreq: 'weekly' });
}
const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allSitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
const publicSitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(publicSitemapPath, sitemapXml, 'utf-8');

console.log(`Successfully generated ${allSitemapUrls.length} pre-rendered static HTML routes and updated sitemap.xml!`);
