import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// List of static routes to pre-render
const staticRoutes = [
  'conserto-de-geladeira',
  'conserto-de-side-by-side',
  'conserto-de-frigobar',
  'conserto-de-freezer',
  'conserto-de-camara-fria',
  'conserto-de-balcao-refrigerado',
  'conserto-de-adega',
  'conserto-lava-e-seca-penha',
  'assistencia-lava-e-seca-lg-penha',
  'assistencia-lava-e-seca-samsung-penha',
  'blog/lava-e-seca-penha-guia-completo'
];

// Cities list
const citySlugs = [
  "penha", "balneario-picarras", "barra-velha", "navegantes", "itajai",
  "balneario-camboriu", "camboriu", "itapema", "porto-belo", "bombinhas",
  "ilhota", "luiz-alves", "gaspar", "blumenau", "brusque", "sao-joao-batista",
  "tijucas", "nova-trento", "guabiruba", "indaial", "timbo", "pomerode",
  "jaragua-do-sul", "guaramirim", "schroeder", "massaranduba", "joinville",
  "sao-francisco-do-sul", "araquari", "rio-do-sul", "florianopolis", "sao-jose",
  "palhoca", "biguacu", "rio-negrinho", "sao-bento-do-sul", "mafra", "canoinhas",
  "curitibanos", "lages", "garuva", "itapoa"
];

// Neighborhood slugs
const neighborhoodSlugs = [
  "gravata", "armacao", "praia-grande", "centro", "itajuba", "praia-brava",
  "meia-praia", "pereque", "bombas", "mariscal", "kobrasol", "pedra-branca"
];

function createPage(routePath, title, description) {
  const targetDir = path.join(distDir, routePath);
  fs.mkdirSync(targetDir, { recursive: true });

  let pageContent = baseHtml;

  if (title) {
    pageContent = pageContent.replace(/<title>.*?<\/title>/gi, `<title>${title}</title>`);
  }
  if (description) {
    pageContent = pageContent.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/gi,
      `<meta name="description" content="${description}">`
    );
  }

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, pageContent, 'utf-8');
}

console.log('Generating pre-rendered static route directories...');

// 1. Static service routes
for (const route of staticRoutes) {
  createPage(route, `Santa Catarina Refrigeração - ${route}`, 'Assistência técnica em refrigeração e eletrodomésticos com atendimento 24h em domicílio.');
}

// 2. City routes
for (const slug of citySlugs) {
  const formattedCity = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const title = `Conserto de Geladeira em ${formattedCity}/SC | Assistência Técnica 24h`;
  const desc = `Assistência técnica especializada em conserto de geladeira, freezer, câmara fria e lava e seca em ${formattedCity}/SC. Atendimento domiciliar com garantia 90 dias.`;

  createPage(`conserto-de-geladeira-em-${slug}`, title, desc);
  createPage(`cidades/${slug}`, title, desc);
  createPage(`cidade/${slug}`, title, desc);
}

// 3. Neighborhood routes
for (const slug of neighborhoodSlugs) {
  const formattedBairro = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const title = `Conserto de Geladeira no Bairro ${formattedBairro} | Santa Catarina Refrigeração`;
  const desc = `Atendimento rápido e orçamento sem compromisso no bairro ${formattedBairro}. Conserto de geladeiras, lava e seca e câmaras frias.`;

  createPage(`bairros/${slug}`, title, desc);
  createPage(`bairro/${slug}`, title, desc);
}

console.log('Successfully generated all pre-rendered HTML routes in dist/!');
