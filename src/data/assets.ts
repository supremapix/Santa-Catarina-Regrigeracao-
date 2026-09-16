/**
 * Mapa Central de Assets Semânticos e Fotografias de Serviços
 * Santa Catarina Refrigeração
 *
 * Diretriz: Cada serviço possui mapeamento semântico centralizado.
 * Imagens sem foto definitiva da CDN possuem fallbacks estruturados
 * e estão catalogadas para substituição imediata.
 */

import { COMPANY_INFO } from './company';

export interface ServiceAsset {
  id: string;
  name: string;
  category: 'residencial' | 'comercial' | 'industrial' | 'climatizacao';
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: string;
  isPendingProvider: boolean;
}

export const CENTRAL_SERVICE_ASSETS: Record<string, ServiceAsset> = {
  geladeira: {
    id: 'geladeira',
    name: 'Geladeiras e Refrigeradores Frost Free',
    category: 'residencial',
    src: COMPANY_INFO.assets.serviceGeladeira,
    fallbackSrc: '/images/services/geladeira.webp',
    alt: 'Conserto de geladeiras Frost Free, Duplex e Inverse - Santa Catarina Refrigeração',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: false
  },
  sideBySide: {
    id: 'sideBySide',
    name: 'Refrigeradores Side by Side e French Door',
    category: 'residencial',
    src: COMPANY_INFO.assets.serviceSideBySide,
    fallbackSrc: '/images/services/side-by-side.webp',
    alt: 'Assistência especializada em refrigeradores Side by Side e French Door',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: false
  },
  frigobar: {
    id: 'frigobar',
    name: 'Frigobares para Hotéis e Residências',
    category: 'residencial',
    src: COMPANY_INFO.assets.serviceFrigobar,
    fallbackSrc: '/images/services/frigobar.webp',
    alt: 'Conserto e recarga de gás em frigobares de hotéis, pousadas e residências',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: false
  },
  cervejeira: {
    id: 'cervejeira',
    name: 'Cervejeiras Comerciais e Residenciais',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceCervejeira,
    fallbackSrc: '/images/services/cervejeira.webp',
    alt: 'Técnico consertando cervejeira comercial em Navegantes e região - Santa Catarina Refrigeração',
    width: 800,
    height: 533,
    aspectRatio: '16/9',
    isPendingProvider: false
  },
  freezer: {
    id: 'freezer',
    name: 'Freezers Verticais e Horizontais',
    category: 'residencial',
    src: COMPANY_INFO.assets.serviceFreezer,
    fallbackSrc: '/images/services/freezer.webp',
    alt: 'Manutenção de freezer horizontal e vertical de congelados',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: false
  },
  camaraFria: {
    id: 'camaraFria',
    name: 'Câmaras Frias e Frigoríficas',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceCamaraFria,
    fallbackSrc: '/images/services/camara-fria.webp',
    alt: 'Câmara fria frigorífica comercial para conservação e congelamento',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  balcaoRefrigerado: {
    id: 'balcaoRefrigerado',
    name: 'Balcões Refrigerados e Expositores',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceBalcao,
    fallbackSrc: '/images/services/balcao-refrigerado.webp',
    alt: 'Balcão expositor refrigerado de bebidas, padarias e conveniências',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  adega: {
    id: 'adega',
    name: 'Adegas Climatizadas de Vinhos',
    category: 'residencial',
    src: COMPANY_INFO.assets.serviceAdega,
    fallbackSrc: '/images/services/adega.webp',
    alt: 'Adega climatizada para preservação e controle térmico de vinhos',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  lavaSeca: {
    id: 'lavaSeca',
    name: 'Máquinas Lava e Seca e Lavadoras',
    category: 'residencial',
    src: COMPANY_INFO.assets.serviceLavaESeca,
    fallbackSrc: '/images/services/lava-e-seca.webp',
    alt: 'Manutenção e troca de componentes eletrônicos em máquina Lava e Seca',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: false
  },
  chopeira: {
    id: 'chopeira',
    name: 'Chopeiras Comerciais e Torres Naja',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceChopeira,
    fallbackSrc: '/images/services/chopeira.webp',
    alt: 'Chopeira elétrica com banco de gelo e pré-resfriador para bares e pubs',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  maquinaGelo: {
    id: 'maquinaGelo',
    name: 'Máquinas de Gelo em Cubo e Escama',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceMaquinaGelo,
    fallbackSrc: '/images/services/maquina-gelo.webp',
    alt: 'Máquina comercial de fabricação de gelo cristalino em cubos e escamas',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  maquinaSorvete: {
    id: 'maquinaSorvete',
    name: 'Máquinas de Sorvete Expresso e Soft',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceMaquinaSorvete,
    fallbackSrc: '/images/services/maquina-sorvete.webp',
    alt: 'Máquina de sorvete expresso e açaí com cilindro frigorífico',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  refrigeracaoComercial: {
    id: 'refrigeracaoComercial',
    name: 'Refrigeração Comercial Especializada',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceRefrigeracaoComercial,
    fallbackSrc: '/images/services/refrigeracao-comercial.webp',
    alt: 'Sistemas de refrigeração comercial para supermercados, padarias e restaurantes',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  refrigeracaoIndustrial: {
    id: 'refrigeracaoIndustrial',
    name: 'Refrigeração Industrial e Sala de Compressores',
    category: 'industrial',
    src: COMPANY_INFO.assets.serviceRefrigeracaoIndustrial,
    fallbackSrc: '/images/services/refrigeracao-industrial.webp',
    alt: 'Central de refrigeração industrial com compressores e tubulações frigoríficas',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  equipamentosFrigorificos: {
    id: 'equipamentosFrigorificos',
    name: 'Equipamentos Frigoríficos Profissionais',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceEquipamentosFrigorificos,
    fallbackSrc: '/images/services/equipamentos-frigorificos.webp',
    alt: 'Equipamentos frigoríficos e unidades condensadoras remotas de refrigeração',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  sistemaRack: {
    id: 'sistemaRack',
    name: 'Sistemas em Rack de Compressores',
    category: 'industrial',
    src: COMPANY_INFO.assets.serviceSistemaRack,
    fallbackSrc: '/images/services/sistema-rack.webp',
    alt: 'Rack de compressores frigoríficos de média e baixa temperatura para distribuição comercial',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  arCondicionado: {
    id: 'arCondicionado',
    name: 'Climatização e Ar-Condicionado Comercial',
    category: 'climatizacao',
    src: COMPANY_INFO.assets.serviceArCondicionado,
    fallbackSrc: '/images/services/ar-condicionado.webp',
    alt: 'Sistemas de ar-condicionado e climatização de ambientes comerciais',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  higienizacao: {
    id: 'higienizacao',
    name: 'Higienização e Desinfecção Frigorífica',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceHigienizacao,
    fallbackSrc: '/images/services/higienizacao.webp',
    alt: 'Higienização técnica química e bactericida em evaporadores e dutos de ar',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  pmoc: {
    id: 'pmoc',
    name: 'Plano de Manutenção Operação e Controle (PMOC)',
    category: 'comercial',
    src: COMPANY_INFO.assets.servicePmoc,
    fallbackSrc: '/images/services/pmoc.webp',
    alt: 'Execução de laudos técnicos e rotinas preventivas de PMOC',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  manutencaoPreventiva: {
    id: 'manutencaoPreventiva',
    name: 'Manutenção Preventiva Frigorífica',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceManutencaoPreventiva,
    fallbackSrc: '/images/services/manutencao-preventiva.webp',
    alt: 'Inspeção preventiva com manifold digital e verificação de pressões de refrigeração',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  },
  containerReefer: {
    id: 'containerReefer',
    name: 'Manutenção de Contêiner Reefer Refrigerado',
    category: 'comercial',
    src: COMPANY_INFO.assets.serviceContainerReefer,
    fallbackSrc: '/images/services/container-reefer.webp',
    alt: 'Unidade frigorífica de contêiner reefer refrigerado para armazenamento estático e logística',
    width: 800,
    height: 450,
    aspectRatio: '16/9',
    isPendingProvider: true
  }
};

/**
 * Retorna lista de imagens pendentes de fornecimento definitivo
 */
export function getPendingAssetsList(): ServiceAsset[] {
  return Object.values(CENTRAL_SERVICE_ASSETS).filter(a => a.isPendingProvider);
}
