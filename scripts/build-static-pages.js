import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CITIES_DATA, getAllNeighborhoods, HIGH_VOLUME_NEIGHBORHOODS } from '../src/data/cities.ts';
import { COMPANY_INFO } from '../src/data/company.ts';
import { PILLAR_SERVICES } from '../src/data/services.ts';
import { SEARCH_INTENTS } from '../src/data/searchIntents.ts';
import { BRAND_DETAILS } from '../src/data/brands.ts';
import { BLOG_POSTS } from '../src/data/blogPosts.ts';
import { COMMERCIAL_SERVICES } from '../src/data/commercial.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderHeaderHtml() {
  return `
    <header class="bg-white border-b border-slate-200 text-slate-900 sticky top-0 z-40">
      <div class="bg-slate-900 text-slate-200 text-xs py-2 px-4">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
          <span>Santa Catarina Refrigeração • Atendimento Domiciliar e Comercial em SC</span>
          <span>Plantão: <a href="tel:${COMPANY_INFO.phoneClean}" class="text-cyan-300 font-bold">${COMPANY_INFO.phone}</a></span>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2 font-black text-lg text-slate-900">
          <span class="text-cyan-700 font-extrabold">SANTA CATARINA</span> REFRIGERAÇÃO
        </a>
        <nav class="hidden md:flex items-center gap-5 text-sm font-bold text-slate-700">
          <a href="/" class="hover:text-cyan-700">Início</a>
          <a href="/conserto-de-geladeira" class="hover:text-cyan-700">Serviços</a>
          <a href="/precos" class="hover:text-cyan-700">Preços</a>
          <a href="/refrigeracao-comercial" class="hover:text-cyan-700">Comercial</a>
          <a href="/regioes-atendidas" class="hover:text-cyan-700">Regiões</a>
          <a href="/blog" class="hover:text-cyan-700">Blog</a>
        </nav>
        <a href="${COMPANY_INFO.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow">
          WhatsApp: ${COMPANY_INFO.phone}
        </a>
      </div>
    </header>
  `;
}

function renderFooterHtml() {
  return `
    <footer class="bg-slate-100 text-slate-700 border-t border-slate-200 text-sm pt-12 pb-8 mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 class="font-black text-slate-900 uppercase text-xs tracking-wider mb-3">Serviços Especializados</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="/conserto-de-geladeira" class="hover:text-cyan-700">Conserto de Geladeira Frost Free</a></li>
              <li><a href="/conserto-de-side-by-side" class="hover:text-cyan-700">Side by Side & French Door</a></li>
              <li><a href="/conserto-lava-e-seca-penha" class="hover:text-cyan-700">Conserto de Lava e Seca</a></li>
              <li><a href="/conserto-de-freezer" class="hover:text-cyan-700">Freezers Verticais e Horizontais</a></li>
              <li><a href="/refrigeracao-comercial" class="hover:text-cyan-700">Refrigeração Comercial & PMOC</a></li>
              <li><a href="/conserto-de-camara-fria" class="hover:text-cyan-700">Câmaras Frias & Balcões</a></li>
              <li><a href="/precos" class="hover:text-cyan-700 font-bold text-cyan-800">Tabela de Preços & Prazos</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-black text-slate-900 uppercase text-xs tracking-wider mb-3">Cidades & Bairros</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="/conserto-de-geladeira-navegantes" class="hover:text-cyan-700">Navegantes - SC</a></li>
              <li><a href="/conserto-de-geladeira-gravata" class="hover:text-cyan-700">Gravatá (Navegantes)</a></li>
              <li><a href="/conserto-de-geladeira-penha" class="hover:text-cyan-700">Penha & Beto Carrero</a></li>
              <li><a href="/conserto-de-geladeira-itajai" class="hover:text-cyan-700">Itajaí - SC</a></li>
              <li><a href="/conserto-de-geladeira-praia-brava" class="hover:text-cyan-700">Praia Brava (Itajaí)</a></li>
              <li><a href="/conserto-de-geladeira-balneario-camboriu" class="hover:text-cyan-700">Balneário Camboriú</a></li>
              <li><a href="/conserto-de-geladeira-balneario-picarras" class="hover:text-cyan-700">Balneário Piçarras</a></li>
              <li><a href="/regioes-atendidas" class="hover:text-cyan-700 font-bold text-cyan-800">Ver todas as 40+ Cidades →</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-black text-slate-900 uppercase text-xs tracking-wider mb-3">Marcas & Blog</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="/assistencia-tecnica-geladeira-brastemp" class="hover:text-cyan-700">Assistência Brastemp</a></li>
              <li><a href="/assistencia-tecnica-geladeira-electrolux" class="hover:text-cyan-700">Assistência Electrolux</a></li>
              <li><a href="/assistencia-tecnica-geladeira-consul" class="hover:text-cyan-700">Assistência Consul</a></li>
              <li><a href="/assistencia-tecnica-geladeira-samsung" class="hover:text-cyan-700">Assistência Samsung</a></li>
              <li><a href="/assistencia-tecnica-geladeira-lg" class="hover:text-cyan-700">Assistência LG Inverter</a></li>
              <li><a href="/assistencia-tecnica-geladeira-panasonic" class="hover:text-cyan-700">Assistência Panasonic</a></li>
              <li><a href="/blog" class="hover:text-cyan-700 font-bold text-cyan-800">Blog Técnico & Dicas →</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-black text-slate-900 uppercase text-xs tracking-wider mb-3">Empresa & Contato</h4>
            <p class="text-xs text-slate-600 mb-2">${COMPANY_INFO.address.full}</p>
            <p class="text-xs text-slate-800 font-bold mb-1">Telefone: <a href="tel:${COMPANY_INFO.phoneClean}" class="text-emerald-700">${COMPANY_INFO.phone}</a></p>
            <p class="text-xs text-slate-600 mb-3">Garantia formal de 90 dias por escrito.</p>
            <a href="${COMPANY_INFO.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold text-xs shadow">
              Atendimento no WhatsApp
            </a>
          </div>
        </div>
        <div class="pt-6 border-t border-slate-300 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© ${new Date().getFullYear()} ${COMPANY_INFO.name}. Todos os direitos reservados. Penha & Navegantes - SC.</p>
          <div class="flex gap-4">
            <a href="/mapa-do-site" class="hover:text-slate-900 font-bold">Mapa do Site</a>
            <a href="/sitemap.xml" target="_blank" class="hover:text-slate-900">Sitemap XML</a>
            <a href="/robots.txt" target="_blank" class="hover:text-slate-900">robots.txt</a>
            <a href="/llms.txt" target="_blank" class="hover:text-slate-900">llms.txt</a>
          </div>
        </div>
        <div class="pt-4 border-t border-slate-200 flex justify-center items-center text-xs text-slate-600">
          <span>Desenvolvido com carinho por <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" class="text-yellow-600 hover:text-yellow-700 font-bold underline">Suprema Sites Express / Suprema Mídia</a></span>
        </div>
      </div>
    </footer>
  `;
}

function buildFullHtml({ title, description, canonicalUrl, schemas = [], breadcrumbs = [], bodyHtml = '' }) {
  const fullCanonical = canonicalUrl.startsWith('http') ? canonicalUrl : `${COMPANY_INFO.subdomainUrl}${canonicalUrl}`;
  const ogImage = COMPANY_INFO.assets.socialPreview;

  const defaultLocalBusinessSchema = {
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
      "addressLocality": "Penha",
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
    }
  };

  const allSchemas = [defaultLocalBusinessSchema, ...schemas];

  if (breadcrumbs && breadcrumbs.length > 0) {
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((bc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": bc.name,
        "item": bc.item.startsWith("http") ? bc.item : `${COMPANY_INFO.subdomainUrl}${bc.item}`
      }))
    });
  }

  const jsonLdScripts = allSchemas.map(s => `    <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n    </script>`).join('\n');

  const headInject = `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${fullCanonical}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${fullCanonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${ogImage}" />
${jsonLdScripts}
  `;

  let pageContent = baseHtml;
  pageContent = pageContent.replace(/<title>.*?<\/title>/gi, '');
  pageContent = pageContent.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/gi, '');
  pageContent = pageContent.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/gi, '');
  pageContent = pageContent.replace('</head>', `${headInject}\n</head>`);

  const fullAppBody = `
    <div id="root">
      ${renderHeaderHtml()}
      <main>
        ${bodyHtml}
      </main>
      ${renderFooterHtml()}
    </div>
  `;

  pageContent = pageContent.replace(/<div id="root"><\/div>/i, fullAppBody);
  return pageContent;
}

function createPageFile(routePath, pageHtml) {
  const cleanRoute = routePath.replace(/^\/+|\/+$/g, '');
  const targetDir = path.join(distDir, cleanRoute);
  fs.mkdirSync(targetDir, { recursive: true });
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, pageHtml, 'utf-8');
}

console.log('Generating pre-rendered static HTML routes (True SSG) and sitemap...');

const allSitemapUrls = [];
const today = new Date().toISOString().split('T')[0];

function addSitemapUrl(urlPath, priority = '0.8', changefreq = 'weekly') {
  const clean = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;
  const loc = `${COMPANY_INFO.subdomainUrl}${clean === '/' ? '' : clean}`;
  if (!allSitemapUrls.some(u => u.loc === loc)) {
    allSitemapUrls.push({ loc, priority, changefreq });
  }
}

// 1. Homepage
addSitemapUrl('/', '1.0', 'daily');

// 2. Pricing Page (/precos)
{
  const title = "Tabela de Preços e Prazos de Conserto de Geladeiras | SC Refrigeração";
  const description = "Consulte valores transparentes para conserto de geladeiras, troca de compressor, recarga de gás e lava e seca em SC. Parcelamento em até 12x e garantia de 90 dias.";
  const bodyHtml = `
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">Tabela de Preços e Prazos de Conserto</h1>
      <p class="text-slate-600 text-base max-w-3xl">Orçamentos no local com diagnóstico preciso. Aceitamos PIX, cartões de crédito em até 12x e dinheiro, com emissão de nota fiscal e garantia de 90 dias.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 bg-slate-50 border rounded-2xl">
          <h2 class="text-xl font-bold text-slate-900">Visita Técnica & Diagnóstico</h2>
          <p class="text-2xl font-black text-emerald-700 mt-2">R$ 50 - 90</p>
          <p class="text-xs text-slate-500 mt-1">Abatida integralmente do valor caso o serviço seja aprovado.</p>
        </div>
        <div class="p-6 bg-slate-50 border rounded-2xl">
          <h2 class="text-xl font-bold text-slate-900">Troca de Sensor / Kit Degelo</h2>
          <p class="text-2xl font-black text-emerald-700 mt-2">R$ 220 - 450</p>
          <p class="text-xs text-slate-500 mt-1">Peça original genuína com garantia formal por escrito de 90 dias.</p>
        </div>
        <div class="p-6 bg-slate-50 border rounded-2xl">
          <h2 class="text-xl font-bold text-slate-900">Troca de Motor Compressor</h2>
          <p class="text-2xl font-black text-emerald-700 mt-2">R$ 680 - 1.450</p>
          <p class="text-xs text-slate-500 mt-1">Compressores Embraco com nova carga de gás R134a/R600a e filtro secador.</p>
        </div>
      </div>
      <div class="mt-8 text-center">
        <a href="${COMPANY_INFO.whatsappUrl}" class="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-lg inline-block">Pedir Orçamento Exato no WhatsApp</a>
      </div>
    </div>
  `;
  const html = buildFullHtml({ title, description, canonicalUrl: '/precos', bodyHtml });
  createPageFile('precos', html);
  addSitemapUrl('/precos', '0.9', 'weekly');
}

// 3. Commercial Hub (/refrigeracao-comercial)
{
  const title = "Refrigeração Comercial, Câmaras Frias e Contratos PMOC em SC";
  const description = "Assistência técnica de refrigeração para restaurantes, peixarias, supermercados e hotéis em Navegantes, Penha, Itajaí e Balneário Camboriú. Atendimento 24h.";
  const bodyHtml = `
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">Refrigeração Comercial e Manutenção PMOC</h1>
      <p class="text-slate-600 text-base max-w-3xl">Atendimento emergencial 24 horas para comércios que não podem perder mercadoria perecível.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${COMMERCIAL_SERVICES.map(cp => `
          <div class="p-6 bg-slate-50 border rounded-2xl space-y-3">
            <h2 class="text-xl font-bold text-slate-900">${escapeHtml(cp.title)}</h2>
            <p class="text-xs text-slate-600">${escapeHtml(cp.description)}</p>
            <ul class="text-xs space-y-1 text-slate-700">
              ${cp.benefits.map(b => `<li>• ${escapeHtml(b)}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  const html = buildFullHtml({ title, description, canonicalUrl: '/refrigeracao-comercial', bodyHtml });
  createPageFile('refrigeracao-comercial', html);
  addSitemapUrl('/refrigeracao-comercial', '0.9', 'weekly');
}

// 4. Regions Hub (/regioes-atendidas)
{
  const title = "Regiões Atendidas: Conserto de Geladeiras no Litoral e Vale do Itajaí";
  const description = "Cobertura técnica completa em Penha, Navegantes, Itajaí, Balneário Camboriú, Piçarras, Barra Velha, Camboriú, Itapema e Vale do Itajaí. Oficinas móveis diárias.";
  const bodyHtml = `
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">Regiões Atendidas em Santa Catarina</h1>
      <p class="text-slate-600 text-base max-w-3xl">Técnicos com vans de oficina móvel circulando diariamente por todo o Litoral Norte e Vale do Itajaí.</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        ${CITIES_DATA.map(c => `
          <a href="/conserto-de-geladeira-${c.slug}" class="p-4 bg-slate-50 border hover:border-cyan-600 rounded-xl block">
            <strong class="text-sm text-slate-900 block">${escapeHtml(c.name)}</strong>
            <span class="text-xs text-slate-500">${c.distanceKm === 0 ? 'Sede' : `~${c.distanceKm} km`} • ${c.estimatedMinutes} min</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
  const html = buildFullHtml({ title, description, canonicalUrl: '/regioes-atendidas', bodyHtml });
  createPageFile('regioes-atendidas', html);
  addSitemapUrl('/regioes-atendidas', '0.9', 'weekly');
}

// 5. Pillar Services
for (const pillar of PILLAR_SERVICES) {
  const title = `Assistência Técnica em ${pillar.name} | Santa Catarina Refrigeração`;
  const description = `Conserto especializado em ${pillar.name} com atendimento em domicílio em SC. Peças originais, técnicos certificados e garantia formal de 90 dias.`;
  const canonicalUrl = `/${pillar.slug}`;
  const bodyHtml = `
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">${escapeHtml(pillar.name)}</h1>
      <p class="text-slate-600 text-base max-w-3xl">${escapeHtml(pillar.shortDescription || pillar.description)}</p>
      <div class="p-6 bg-slate-50 border rounded-2xl space-y-4">
        <h2 class="text-xl font-bold text-slate-900">Como Funciona o Conserto no Local:</h2>
        <ul class="space-y-2 text-sm text-slate-700">
          ${(pillar.features || []).map(f => `<li>✓ ${escapeHtml(f)}</li>`).join('')}
        </ul>
      </div>
      <div class="text-center pt-4">
        <a href="${COMPANY_INFO.whatsappUrl}" class="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-lg inline-block">Chamar Técnico no WhatsApp</a>
      </div>
    </div>
  `;
  const html = buildFullHtml({ title, description, canonicalUrl, bodyHtml });
  createPageFile(pillar.slug, html);
  addSitemapUrl(canonicalUrl, '0.9', 'weekly');
}

// 6. 22 Search Intents (Symptoms & Pain Points)
for (const intent of SEARCH_INTENTS) {
  const title = intent.metaTitle;
  const description = intent.metaDescription;
  const canonicalUrl = `/${intent.slug}`;
  const bodyHtml = `
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <span class="px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-900 font-bold text-xs uppercase">${escapeHtml(intent.badge)}</span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">${escapeHtml(intent.h1)}</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-red-50 border border-red-200 rounded-xl">
          <strong class="text-red-800 text-xs uppercase block">Sintoma Comum:</strong>
          <p class="text-slate-800 text-sm mt-1">${escapeHtml(intent.pain)}</p>
        </div>
        <div class="p-4 bg-cyan-50 border border-cyan-200 rounded-xl">
          <strong class="text-cyan-800 text-xs uppercase block">Causa Técnica:</strong>
          <p class="text-slate-800 text-sm mt-1">${escapeHtml(intent.rootCause)}</p>
        </div>
        <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
          <strong class="text-emerald-800 text-xs uppercase block">Solução Técnica:</strong>
          <p class="text-slate-800 text-sm mt-1">${escapeHtml(intent.effectiveSolution)}</p>
        </div>
      </div>

      ${intent.urgencyWarning ? `
        <div class="p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-900 text-sm">
          <strong>Aviso de Urgência:</strong> ${escapeHtml(intent.urgencyWarning)}
        </div>
      ` : ''}

      <div class="p-6 bg-slate-50 border rounded-2xl space-y-4">
        <h2 class="text-xl font-bold text-slate-900">Como Nossos Técnicos Resolvem no Local:</h2>
        <ul class="space-y-2 text-sm text-slate-700">
          ${intent.stepsToSolve.map((st, i) => `<li><strong>Passo ${i+1}:</strong> ${escapeHtml(st)}</li>`).join('')}
        </ul>
      </div>

      ${intent.faqs && intent.faqs.length > 0 ? `
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-slate-900">Perguntas Frequentes sobre este Problema</h2>
          ${intent.faqs.map(f => `
            <details class="p-4 bg-white border rounded-xl">
              <summary class="font-bold text-slate-900 cursor-pointer">${escapeHtml(f.question)}</summary>
              <p class="text-sm text-slate-600 mt-2">${escapeHtml(f.answer)}</p>
            </details>
          `).join('')}
        </div>
      ` : ''}

      <div class="text-center pt-4">
        <a href="${COMPANY_INFO.whatsappUrl}" class="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-lg inline-block">Pedir Orçamento no WhatsApp</a>
      </div>
    </div>
  `;
  const html = buildFullHtml({ title, description, canonicalUrl, bodyHtml });
  createPageFile(intent.slug, html);
  addSitemapUrl(canonicalUrl, '0.85', 'weekly');
}

// 7. Brand Detail Pages
for (const brand of BRAND_DETAILS) {
  const title = brand.metaTitle;
  const description = brand.metaDescription;
  const canonicalUrl = `/${brand.slug}`;
  const bodyHtml = `
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <span class="px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-900 font-bold text-xs uppercase">${escapeHtml(brand.badge)}</span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">${escapeHtml(brand.h1)}</h1>
      <p class="text-slate-600 text-base max-w-3xl leading-relaxed">${escapeHtml(brand.description)}</p>
      
      <div class="p-6 bg-slate-50 border rounded-2xl space-y-4">
        <h2 class="text-xl font-bold text-slate-900">Modelos ${escapeHtml(brand.brandName)} Atendidos:</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
          ${brand.commonModels.map(m => `<li>• ${escapeHtml(m)}</li>`).join('')}
        </ul>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-bold text-slate-900">Problemas e Códigos de Erro Frequentes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${brand.errorCodes.map(err => `
            <div class="p-4 bg-slate-50 border rounded-xl">
              <strong class="text-cyan-800 text-sm block">${escapeHtml(err.code)}: ${escapeHtml(err.meaning)}</strong>
              <p class="text-xs text-slate-600 mt-1">Solução: ${escapeHtml(err.solution)}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="text-center pt-4">
        <a href="${COMPANY_INFO.whatsappUrl}" class="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-lg inline-block">Conserto ${escapeHtml(brand.brandName)} no WhatsApp</a>
      </div>
    </div>
  `;
  const html = buildFullHtml({ title, description, canonicalUrl, bodyHtml });
  createPageFile(brand.slug, html);
  addSitemapUrl(canonicalUrl, '0.85', 'weekly');
}

// 8. Blog Index & Blog Articles
{
  const title = "Blog Técnico da Refrigeração | Dicas, Sintomas e Manutenção";
  const description = "Artigos práticos de engenharia e assistência técnica sobre geladeiras, lava e seca, câmaras frias e compressores em Santa Catarina.";
  const bodyHtml = `
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">Blog Técnico da Refrigeração</h1>
      <p class="text-slate-600 text-base max-w-3xl">Informações técnicas confiáveis escritas por técnicos de campo.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${BLOG_POSTS.map(bp => `
          <a href="/blog/${bp.slug}" class="p-6 bg-slate-50 border hover:border-cyan-600 rounded-2xl block space-y-3">
            <span class="text-xs text-cyan-800 font-bold uppercase">${escapeHtml(bp.category)} • ${bp.readTime}</span>
            <h2 class="text-xl font-bold text-slate-900">${escapeHtml(bp.title)}</h2>
            <p class="text-xs text-slate-600 line-clamp-3">${escapeHtml(bp.excerpt)}</p>
          </a>
        `).join('')}
      </div>
    </div>
  `;
  const html = buildFullHtml({ title, description, canonicalUrl: '/blog', bodyHtml });
  createPageFile('blog', html);
  addSitemapUrl('/blog', '0.85', 'weekly');
}

for (const post of BLOG_POSTS) {
  const title = `${post.title} | Blog SC Refrigeração`;
  const description = post.excerpt;
  const canonicalUrl = `/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.datePublished,
    "dateModified": post.dateModified || post.datePublished,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": COMPANY_INFO.assets.logo
      }
    }
  };
  const bodyHtml = `
    <article class="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <span class="text-xs text-cyan-800 font-bold uppercase">${escapeHtml(post.category)} • ${escapeHtml(post.datePublished)} • ${escapeHtml(post.readTime)}</span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">${escapeHtml(post.title)}</h1>
      <p class="text-base text-slate-700 leading-relaxed font-medium">${escapeHtml(post.excerpt)}</p>
      
      ${post.takeaways && post.takeaways.length > 0 ? `
        <div class="p-6 bg-cyan-50 border border-cyan-200 rounded-2xl space-y-2">
          <h2 class="text-base font-black text-cyan-950 uppercase">Pontos Principais:</h2>
          <ul class="space-y-1.5 text-xs text-cyan-900">
            ${post.takeaways.map(t => `<li>• ${escapeHtml(t)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <div class="prose max-w-none space-y-6 text-slate-800 text-sm leading-relaxed">
        ${post.contentHtml || ''}
      </div>

      ${post.faqs && post.faqs.length > 0 ? `
        <div class="space-y-4 pt-4 border-t">
          <h2 class="text-xl font-bold text-slate-900">Perguntas Frequentes sobre este Artigo</h2>
          ${post.faqs.map(f => `
            <details class="p-4 bg-white border rounded-xl">
              <summary class="font-bold text-slate-900 cursor-pointer">${escapeHtml(f.question)}</summary>
              <p class="text-sm text-slate-600 mt-2">${escapeHtml(f.answer)}</p>
            </details>
          `).join('')}
        </div>
      ` : ''}

      <div class="p-6 bg-slate-50 border rounded-2xl text-center space-y-3">
        <h3 class="text-xl font-bold text-slate-900">Precisa de assistência técnica para seu eletrodoméstico?</h3>
        <p class="text-xs text-slate-600">Nossa equipe atende no local em Penha, Navegantes, Itajaí, BC e região.</p>
        <a href="${COMPANY_INFO.whatsappUrl}" class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm inline-block">Falar no WhatsApp: ${COMPANY_INFO.phone}</a>
      </div>
    </article>
  `;
  const html = buildFullHtml({ title, description, canonicalUrl, schemas: [articleSchema], bodyHtml });
  createPageFile(`blog/${post.slug}`, html);
  addSitemapUrl(canonicalUrl, '0.8', 'monthly');
}

// 9. City Pages & High-Volume Neighborhoods
for (const city of CITIES_DATA) {
  const title = `Conserto de Geladeira em ${city.name}/SC | Assistência Técnica em Domicílio`;
  const description = `Assistência técnica de geladeiras, freezers, lava e seca e câmaras frias em ${city.name}/SC. Atendimento domiciliar nos bairros ${city.neighborhoods.slice(0, 4).join(', ')}. Garantia 90 dias.`;
  const canonicalUrl = `/conserto-de-geladeira-${city.slug}`;

  const bodyHtml = `
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 rounded-full font-bold text-xs">${city.name} - SC • Chegada em ~${city.estimatedMinutes} min</span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">Conserto de Geladeira em ${escapeHtml(city.name)}/SC</h1>
      <p class="text-slate-700 text-base max-w-3xl leading-relaxed">${escapeHtml(city.longDescription || city.customSnippet)}</p>
      
      <div class="p-6 bg-slate-50 border rounded-2xl space-y-4">
        <h2 class="text-xl font-bold text-slate-900">Bairros Atendidos em ${escapeHtml(city.name)}:</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs text-slate-700 font-medium">
          ${city.neighborhoods.map(b => `<span class="p-2 bg-white border rounded-lg">✓ ${escapeHtml(b)}</span>`).join('')}
        </div>
      </div>

      <div class="text-center pt-4">
        <a href="${COMPANY_INFO.whatsappUrl}" class="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-lg inline-block">Solicitar Técnico em ${escapeHtml(city.name)}</a>
      </div>
    </div>
  `;

  const html = buildFullHtml({ title, description, canonicalUrl, bodyHtml });
  createPageFile(`conserto-de-geladeira-${city.slug}`, html);
  // Also create legacy prefix /conserto-de-geladeira-em-${city.slug}
  createPageFile(`conserto-de-geladeira-em-${city.slug}`, html);
  createPageFile(`cidades/${city.slug}`, html);

  addSitemapUrl(canonicalUrl, '0.8', 'weekly');
}

// 10. High-Volume Neighborhoods
for (const nb of HIGH_VOLUME_NEIGHBORHOODS) {
  const title = `Conserto de Geladeira no Bairro ${nb.name} (${nb.cityName}/SC) | Assistência 24h`;
  const description = `Atendimento domiciliar rápido no bairro ${nb.name} em ${nb.cityName}/SC. Conserto de geladeiras, lava e seca, freezers e câmaras frias com peças originais e garantia 90 dias.`;
  const canonicalUrl = `/conserto-de-geladeira-${nb.slug}`;
  const bodyHtml = `
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 rounded-full font-bold text-xs">Bairro ${escapeHtml(nb.name)} (${escapeHtml(nb.cityName)}/SC)</span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">Conserto de Geladeira no Bairro ${escapeHtml(nb.name)}</h1>
      <p class="text-slate-700 text-base max-w-3xl leading-relaxed">${escapeHtml(nb.longDescription || nb.snippet)}</p>
      
      <div class="text-center pt-4">
        <a href="${COMPANY_INFO.whatsappUrl}" class="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-lg inline-block">Chamar Técnico no Bairro ${escapeHtml(nb.name)}</a>
      </div>
    </div>
  `;
  const html = buildFullHtml({ title, description, canonicalUrl, bodyHtml });
  createPageFile(`conserto-de-geladeira-${nb.slug}`, html);
  createPageFile(`bairros/${nb.slug}`, html);
  addSitemapUrl(canonicalUrl, '0.75', 'weekly');
}

// 11. Sitemap View Page (/mapa-do-site)
{
  const title = "Mapa do Site Completo | Santa Catarina Refrigeração";
  const description = "Lista completa de todas as páginas de serviços, cidades, marcas, sintomas e artigos de blog da Santa Catarina Refrigeração.";
  const bodyHtml = `
    <div class="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900">Mapa do Site Completo</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 class="font-bold text-slate-900 text-lg mb-3">Serviços Principais</h2>
          <ul class="space-y-1.5 text-xs text-cyan-800">
            ${PILLAR_SERVICES.map(p => `<li><a href="/${p.slug}" class="hover:underline">${escapeHtml(p.name)}</a></li>`).join('')}
            <li><a href="/precos" class="hover:underline">Tabela de Preços</a></li>
            <li><a href="/refrigeracao-comercial" class="hover:underline">Refrigeração Comercial</a></li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-slate-900 text-lg mb-3">Marcas</h2>
          <ul class="space-y-1.5 text-xs text-cyan-800">
            ${BRAND_DETAILS.map(b => `<li><a href="/${b.slug}" class="hover:underline">Assistência ${escapeHtml(b.brandName)}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-slate-900 text-lg mb-3">Cidades</h2>
          <ul class="space-y-1.5 text-xs text-cyan-800">
            ${CITIES_DATA.map(c => `<li><a href="/conserto-de-geladeira-${c.slug}" class="hover:underline">${escapeHtml(c.name)}/SC</a></li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
  const html = buildFullHtml({ title, description, canonicalUrl: '/mapa-do-site', bodyHtml });
  createPageFile('mapa-do-site', html);
  addSitemapUrl('/mapa-do-site', '0.7', 'monthly');
}

// 12. Write Sitemap.xml
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

// 13. Ensure robots.txt in dist/
const robotsTxt = `# robots.txt - Santa Catarina Refrigeração
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Allow: /llms.txt
Allow: /llms-full.txt
Allow: /sitemap.xml

Sitemap: https://www.refrigeracaosc.com.br/sitemap.xml
`;
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');

console.log(`Successfully generated ${allSitemapUrls.length} pre-rendered static HTML routes (True SSG) and written valid sitemap.xml & robots.txt!`);
