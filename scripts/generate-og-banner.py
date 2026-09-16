import base64
import os
import subprocess

# 1. Carregar a fotografia do técnico em alta definição
hero_path = 'public/images/hero/refrigeracao-comercial-industrial.webp'
png_path = '/tmp/og_hero.png'

# Converter o webp para png temporário para inserção com 100% de compatibilidade no librsvg
subprocess.run(['ffmpeg', '-i', hero_path, png_path, '-y'], check=True)

with open(png_path, 'rb') as f:
    hero_b64 = base64.b64encode(f.read()).decode('utf-8')

# Dimensões exatas de Open Graph
width = 1200
height = 630

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <defs>
    <!-- Gradiente de fundo do card -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>

    <!-- Gradiente de fusão suave da foto -->
    <linearGradient id="fadeMask" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="18%" stop-color="#ffffff" stop-opacity="0.8"/>
      <stop offset="35%" stop-color="#ffffff" stop-opacity="1"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="1"/>
    </linearGradient>

    <mask id="heroMask">
      <rect x="520" y="0" width="680" height="630" fill="url(#fadeMask)"/>
    </mask>

    <!-- Gradiente do botão WhatsApp -->
    <linearGradient id="waButtonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#16a34a"/>
    </linearGradient>

    <!-- Sombra suave para o botão WhatsApp -->
    <filter id="btnShadow" x="-10%" y="-20%" width="120%" height="150%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#15803d" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- 1. FUNDO GERAL CLARO -->
  <rect width="{width}" height="{height}" fill="url(#bgGrad)"/>

  <!-- 2. FOTOGRAFIA DO TÉCNICO COM EQUIPAMENTO E PORTO DE NAVEGANTES -->
  <!-- A foto cobre o lado direito com transição suave -->
  <g mask="url(#heroMask)">
    <image href="data:image/png;base64,{hero_b64}" x="480" y="0" width="760" height="630" preserveAspectRatio="xMidYMid slice"/>
  </g>

  <!-- 3. TOP RIGHT SLOGAN BOX -->
  <g transform="translate(710, 36)">
    <!-- Barra vertical ciano -->
    <line x1="0" y1="0" x2="0" y2="76" stroke="#0284c7" stroke-width="3.5" stroke-linecap="round"/>
    <text x="14" y="16" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="800" fill="#0f2942" letter-spacing="1">EXPERIÊNCIA</text>
    <text x="14" y="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="800" fill="#0f2942" letter-spacing="1">EM REFRIGERAÇÃO</text>
    <text x="14" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="800" fill="#0f2942" letter-spacing="1">PARA O SEU NEGÓCIO</text>
    <text x="14" y="70" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="800" fill="#0f2942" letter-spacing="1">SEMPRE FUNCIONAR</text>
  </g>

  <!-- 4. LOGOTIPO DA SANTA CATARINA REFRIGERAÇÃO (CANTO SUPERIOR ESQUERDO) -->
  <g transform="translate(48, 38)">
    <!-- Ícone de Floco de Neve Geométrico -->
    <g transform="translate(34, 34) scale(0.9)">
      <!-- 6 Braços Principais -->
      <g stroke="#0284c7" stroke-width="5" stroke-linecap="round">
        <line x1="0" y1="-32" x2="0" y2="32"/>
        <line x1="-27.7" y1="-16" x2="27.7" y2="16"/>
        <line x1="-27.7" y1="16" x2="27.7" y2="-16"/>
      </g>
      <!-- Ramificações em V de cada braço -->
      <g stroke="#0369a1" stroke-width="3.5" stroke-linecap="round" fill="none">
        <!-- Vertical Up -->
        <path d="M-8,-22 L0,-28 L8,-22"/>
        <path d="M-10,-12 L0,-19 L10,-12"/>
        <!-- Vertical Down -->
        <path d="M-8,22 L0,28 L8,22"/>
        <path d="M-10,12 L0,19 L10,12"/>
        <!-- Diagonal Up-Right -->
        <path d="M15,-19 L24,-14 L20,-6"/>
        <!-- Diagonal Down-Right -->
        <path d="M20,6 L24,14 L15,19"/>
        <!-- Diagonal Down-Left -->
        <path d="M-15,19 L-24,14 L-20,6"/>
        <!-- Diagonal Up-Left -->
        <path d="M-20,-6 L-24,-14 L-15,-19"/>
      </g>
      <!-- Diamante central -->
      <polygon points="0,-7 7,0 0,7 -7,0" fill="#0284c7"/>
    </g>

    <!-- Textos do Logo -->
    <text x="82" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="900" fill="#0f2942" letter-spacing="-0.5">Santa Catarina</text>
    <text x="84" y="55" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="900" fill="#0284c7" letter-spacing="4.5">REFRIGERAÇÃO</text>
    <text x="84" y="69" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="10.5" font-weight="600" fill="#64748b" letter-spacing="2">ASSISTÊNCIA TÉCNICA ESPECIALIZADA</text>
  </g>

  <!-- 5. TÍTULO PRINCIPAL (HEADLINE) -->
  <g transform="translate(48, 172)">
    <text x="0" y="36" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="40" font-weight="800" fill="#0f2942" letter-spacing="-0.5">Soluções em</text>
    <text x="0" y="82" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="46" font-weight="900" fill="#0f2942" letter-spacing="-1">Refrigeração Comercial</text>
    <text x="0" y="128" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="46" font-weight="900" fill="#0f2942" letter-spacing="-1">e Industrial em SC</text>
  </g>

  <!-- 6. SUBTÍTULO -->
  <g transform="translate(48, 332)">
    <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="17" font-weight="700" fill="#1e293b" letter-spacing="0.2">
      Manutenção  •  Conserto  •  Instalação  •  Preventiva
    </text>
  </g>

  <!-- 7. GRADE DE 6 ÍCONES DE SERVIÇOS -->
  <g transform="translate(48, 362)">
    <!-- 1. Refrigeração Comercial -->
    <g transform="translate(26, 0)">
      <g stroke="#0f2942" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M-15,-6 L15,-6 L12,-16 L-12,-16 Z"/>
        <path d="M-15,-6 C-13,0 -7,0 -5,-6 C-3,0 3,0 5,-6 C7,0 13,0 15,-6"/>
        <rect x="-13" y="-6" width="26" height="22"/>
        <rect x="-4" y="2" width="8" height="14"/>
      </g>
      <text x="0" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">Refrigeração</text>
      <text x="0" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">Comercial</text>
    </g>

    <!-- 2. Refrigeração Industrial -->
    <g transform="translate(118, 0)">
      <g stroke="#0f2942" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M-16,16 L-16,-10 L-6,0 L-6,-10 L4,0 L4,-10 L16,0 L16,16 Z"/>
        <circle cx="-10" cy="8" r="2" fill="#0f2942"/>
        <circle cx="0" cy="8" r="2" fill="#0f2942"/>
        <circle cx="10" cy="8" r="2" fill="#0f2942"/>
      </g>
      <text x="0" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">Refrigeração</text>
      <text x="0" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">Industrial</text>
    </g>

    <!-- 3. Câmaras Frias -->
    <g transform="translate(208, 0)">
      <g stroke="#0f2942" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <line x1="0" y1="-14" x2="0" y2="14"/>
        <line x1="-12" y1="-7" x2="12" y2="7"/>
        <line x1="-12" y1="7" x2="12" y2="-7"/>
        <path d="M-4,-10 L0,-14 L4,-10"/>
        <path d="M-4,10 L0,14 L4,10"/>
        <path d="M8,-2 L12,-7 L7,-9"/>
        <path d="M-8,2 L-12,7 L-7,9"/>
      </g>
      <text x="0" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">Câmaras</text>
      <text x="0" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">Frias</text>
    </g>

    <!-- 4. Container Reefer -->
    <g transform="translate(298, 0)">
      <g stroke="#0f2942" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <rect x="-16" y="-12" width="32" height="24" rx="2"/>
        <line x1="-10" y1="-8" x2="-10" y2="8"/>
        <line x1="-4" y1="-8" x2="-4" y2="8"/>
        <line x1="2" y1="-8" x2="2" y2="8"/>
        <line x1="8" y1="-8" x2="8" y2="8"/>
      </g>
      <text x="0" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">Container</text>
      <text x="0" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">Reefer</text>
    </g>

    <!-- 5. Máquinas de Gelo -->
    <g transform="translate(388, 0)">
      <g stroke="#0f2942" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <!-- Cubos de gelo hexagonais -->
        <polygon points="0,-14 10,-8 10,4 0,-2" fill="#e0f2fe"/>
        <polygon points="0,-14 -10,-8 -10,4 0,-2" fill="#bae6fd"/>
        <polygon points="0,-2 10,4 0,10 -10,4" fill="#7dd3fc"/>
        <polygon points="12,-4 20,1 20,11 12,6" fill="#e0f2fe"/>
        <polygon points="-12,-4 -20,1 -20,11 -12,6" fill="#bae6fd"/>
      </g>
      <text x="0" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">Máquinas</text>
      <text x="0" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">de Gelo</text>
    </g>

    <!-- 6. Chopeiras e Mais -->
    <g transform="translate(476, 0)">
      <g stroke="#0f2942" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M-8,14 L8,14 L6,2 L-6,2 Z"/>
        <line x1="0" y1="2" x2="0" y2="-12"/>
        <circle cx="0" cy="-14" r="3" fill="#0f2942"/>
        <path d="M0,-8 L8,-5 L8,-2"/>
      </g>
      <text x="0" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">Chopeiras</text>
      <text x="0" y="41" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f2942" text-anchor="middle">e Mais</text>
    </g>
  </g>

  <!-- 8. TRÊS PILARES DE CONFIANÇA (BADGES) -->
  <g transform="translate(48, 478)">
    <!-- 1. Diagnóstico Transparente -->
    <g transform="translate(0, 0)">
      <g stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M12,4 L24,8 L24,18 C24,25 18,31 12,34 C6,31 0,25 0,18 L0,8 Z"/>
        <polyline points="7,18 11,22 17,14"/>
      </g>
      <text x="32" y="17" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="#0f2942">Diagnóstico</text>
      <text x="32" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="#0f2942">Transparente</text>
    </g>

    <!-- 2. Ordem de Serviço com Nota -->
    <g transform="translate(168, 0)">
      <g stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <rect x="0" y="4" width="22" height="28" rx="2"/>
        <line x1="5" y1="12" x2="17" y2="12"/>
        <line x1="5" y1="17" x2="17" y2="17"/>
        <line x1="5" y1="22" x2="12" y2="22"/>
      </g>
      <text x="30" y="17" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="#0f2942">Ordem de Serviço</text>
      <text x="30" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="#0f2942">com Nota</text>
    </g>

    <!-- 3. Garantia Formal de 90 Dias -->
    <g transform="translate(348, 0)">
      <g stroke="#0284c7" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <circle cx="14" cy="18" r="12"/>
        <path d="M14,10 L16,14 L20,15 L17,18 L18,22 L14,20 L10,22 L11,18 L8,15 L12,14 Z" fill="#0284c7"/>
      </g>
      <text x="34" y="17" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="#0f2942">Garantia Formal</text>
      <text x="34" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="#0f2942">de 90 Dias</text>
    </g>
  </g>

  <!-- 9. FAIXA INFERIOR ONDULADA (DARK BLUE FOOTER WAVE) -->
  <!-- Onda orgânica azul marinho escuro que corta de baixo para cima -->
  <path d="M 0,555 C 240,545 420,535 620,550 C 800,565 1000,560 1200,545 L 1200,630 L 0,630 Z" fill="#0b2440"/>

  <!-- CONTEÚDO SOBRE A FAIXA ESCURA -->
  <g transform="translate(48, 564)">
    <!-- Localização com pin -->
    <g transform="translate(0, 16)">
      <path d="M7,-10 C2.5,-10 -1,-6.5 -1,-2 C-1,4 7,12 7,12 C7,12 15,4 15,-2 C15,-6.5 11.5,-10 7,-10 Z" fill="#ffffff"/>
      <circle cx="7" cy="-2" r="2.5" fill="#0b2440"/>
      <text x="24" y="3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13.5" font-weight="700" fill="#ffffff">Navegantes - SC e Região</text>
    </g>

    <!-- Divisória vertical fina -->
    <line x1="228" y1="6" x2="228" y2="30" stroke="#334f70" stroke-width="1.5"/>

    <!-- Atendimento WhatsApp com ícone de chat -->
    <g transform="translate(248, 16)">
      <path d="M2,-8 C-4,-8 -9,-3 -9,3 C-9,5.5 -7.8,7.8 -6,9.5 L-7.5,14 L-3,12.5 C-1.5,13.2 0.2,13.5 2,13.5 C8,13.5 13,8.5 13,3 C13,-3 8,-8 2,-8 Z" fill="none" stroke="#ffffff" stroke-width="1.8"/>
      <path d="M-1,0 C-1,3 1,5 4,5" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round"/>
      <text x="22" y="3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13.5" font-weight="700" fill="#ffffff">Atendimento via WhatsApp</text>
    </g>

    <!-- Botão verde Fale Conosco -->
    <g transform="translate(476, 2)" filter="url(#btnShadow)">
      <rect x="0" y="0" width="194" height="42" rx="21" fill="url(#waButtonGrad)"/>
      <!-- Ícone WhatsApp -->
      <g transform="translate(18, 12)">
        <path d="M9,-1 C4,-1 0,3 0,8 C0,9.8 0.6,11.5 1.6,12.9 L0.5,17 L4.8,15.9 C6.1,16.6 7.5,17 9,17 C14,17 18,13 18,8 C18,3 14,-1 9,-1 Z" fill="#ffffff"/>
        <path d="M6,5 C5.7,4.3 5.4,4.3 5.1,4.3 C4.9,4.3 4.6,4.3 4.4,4.5 C4.1,4.8 3.5,5.4 3.5,6.5 C3.5,7.6 4.3,8.7 4.5,8.9 C4.6,9.1 6.1,11.5 8.4,12.4 C10.2,13.2 10.6,13 11.2,12.9 C11.8,12.9 12.8,12.2 13,11.6 C13.2,11 13.2,10.5 13.1,10.4 C13,10.3 12.8,10.2 12.2,9.9 C11.6,9.6 9,8.3 8.7,8.2 C8.4,8.1 8.2,8 8,8.4 C7.8,8.8 7.3,9.4 7.1,9.6 C6.9,9.8 6.7,9.8 6.2,9.6 C5.6,9.3 4.1,8.6 3.4,7.2 C3.1,6.6 3.6,6.6 4.1,5.6 C4.2,5.4 4.1,5.2 4,5.1 C3.9,5 3.6,4.2 3.4,3.7 Z" fill="#15803d" transform="scale(0.85) translate(1,1)"/>
      </g>
      <text x="50" y="26" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14.5" font-weight="800" fill="#ffffff" letter-spacing="0.2">Fale Conosco  &gt;</text>
    </g>

    <!-- Silhueta de Santa Catarina e slogan -->
    <g transform="translate(850, 6)">
      <!-- Mapa estilizado de Santa Catarina -->
      <path d="M0,8 L14,3 L36,1 L46,9 L42,18 L32,24 L18,22 L8,28 L0,22 Z" fill="none" stroke="#38bdf8" stroke-width="1.6" stroke-linejoin="round"/>
      <text x="56" y="14" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9.5" font-weight="800" fill="#e2e8f0" letter-spacing="2.8">SANTA CATARINA</text>
      <text x="56" y="27" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9.5" font-weight="800" fill="#94a3b8" letter-spacing="2.8">EM MOVIMENTO</text>
    </g>
  </g>
</svg>'''

svg_out_path = '/tmp/santa_catarina_refrigeracao_og.svg'
webp_out_path = 'public/images/og/santa-catarina-refrigeracao-og.webp'

with open(svg_out_path, 'w', encoding='utf-8') as f:
    f.write(svg_content)

# Renderizar com ffmpeg para WebP com qualidade máxima (-q:v 88)
subprocess.run(['ffmpeg', '-i', svg_out_path, '-c:v', 'libwebp', '-q:v', '88', webp_out_path, '-y'], check=True)

print("Gerado com sucesso:", webp_out_path, os.path.getsize(webp_out_path), "bytes")
