import os
import subprocess

os.makedirs('public/images/services', exist_ok=True)
os.makedirs('public/images/hero', exist_ok=True)

services = [
    {
        'file': 'public/images/hero/refrigeracao-comercial-industrial.webp',
        'title': 'REFRIGERACAO COMERCIAL & INDUSTRIAL',
        'subtitle': 'CENTRAIS FRIGORIFICAS | CAMARAS FRIAS | PMOC',
        'color': '#032B44', 'accent': '#00E5FF', 'badge': 'ENGENHARIA TERMICA'
    },
    {
        'file': 'public/images/services/camara-fria.webp',
        'title': 'CAMARA FRIA & FRIGORIFICA',
        'subtitle': 'CONGELADOS E RESFRIADOS | COMPRESSORES & VALVULAS',
        'color': '#0b3954', 'accent': '#38bdf8', 'badge': 'ISOLAMENTO & CONTROLE'
    },
    {
        'file': 'public/images/services/container-reefer.webp',
        'title': 'CONTENEIR REEFER REFRIGERADO',
        'subtitle': 'UNIDADE FRIGORIFICA | ARMAZENAMENTO ESTATICO & LOGISTICA',
        'color': '#173f5f', 'accent': '#22d3ee', 'badge': 'SISTEMA REEFER'
    },
    {
        'file': 'public/images/services/refrigeracao-comercial.webp',
        'title': 'REFRIGERACAO COMERCIAL',
        'subtitle': 'SUPERMERCADOS | PADARIAS | PEIXARIAS | RESTAURANTES',
        'color': '#1e293b', 'accent': '#34d399', 'badge': 'SETOR ALIMENTAR'
    },
    {
        'file': 'public/images/services/refrigeracao-industrial.webp',
        'title': 'REFRIGERACAO INDUSTRIAL',
        'subtitle': 'SALA DE COMPRESSORES | CHILLERS | PROCESSAMENTO',
        'color': '#111827', 'accent': '#60a5fa', 'badge': 'ALTA CAPACIDADE'
    },
    {
        'file': 'public/images/services/balcao-refrigerado.webp',
        'title': 'BALCAO REFRIGERADO & EXPOSITOR',
        'subtitle': 'BEBIDAS | LATICINIOS | ACOUGUES | VITRINES',
        'color': '#172a45', 'accent': '#38bdf8', 'badge': 'AUTOATENDIMENTO'
    },
    {
        'file': 'public/images/services/chopeira.webp',
        'title': 'CHOPEIRAS COMERCIAIS & NAJAS',
        'subtitle': 'BANCO DE GELO | PRE-RESFRIADORES | SANITIZACAO',
        'color': '#292524', 'accent': '#fbbf24', 'badge': 'BEBIDAS & PUBS'
    },
    {
        'file': 'public/images/services/maquina-gelo.webp',
        'title': 'MAQUINAS DE GELO',
        'subtitle': 'GELO EM CUBO & ESCAMA | DESINCRUSTACAO & REPARO',
        'color': '#0c4a6e', 'accent': '#7dd3fc', 'badge': 'ALTA PRODUCAO'
    },
    {
        'file': 'public/images/services/maquina-sorvete.webp',
        'title': 'MAQUINAS DE SORVETE & ACAI',
        'subtitle': 'CILINDROS FRIGORIFICOS | REGULAGEM TERMICA',
        'color': '#312e81', 'accent': '#c084fc', 'badge': 'SORVETERIAS & SOFT'
    },
    {
        'file': 'public/images/services/adega.webp',
        'title': 'ADEGAS CLIMATIZADAS',
        'subtitle': 'COMPRESSOR & PELTIER | CONTROLE DE TEMPERATURA',
        'color': '#27272a', 'accent': '#f43f5e', 'badge': 'VINHOS FINOS'
    },
    {
        'file': 'public/images/services/sistema-rack.webp',
        'title': 'SISTEMAS EM RACK DE COMPRESSORES',
        'subtitle': 'CENTRAIS FRIGORIFICAS EM PARALELO | QUADROS DIGITAIS',
        'color': '#064e3b', 'accent': '#34d399', 'badge': 'CENTRAL FRIGORIFICA'
    },
    {
        'file': 'public/images/services/ar-condicionado.webp',
        'title': 'CLIMATIZACAO COMERCIAL',
        'subtitle': 'SPLIT | CASSETE | DUTADO | RENOVAÇÃO DE AR',
        'color': '#0284c7', 'accent': '#38bdf8', 'badge': 'CONFORTO TERMICO'
    },
    {
        'file': 'public/images/services/pmoc.webp',
        'title': 'PLANO PMOC & CONFORMIDADE ANVISA',
        'subtitle': 'MANUTENCAO OPERACAO E CONTROLE | LIVRO DE REGISTRO',
        'color': '#164e63', 'accent': '#22c55e', 'badge': 'LEGISLACAO SANITARIA'
    },
    {
        'file': 'public/images/services/manutencao-preventiva.webp',
        'title': 'MANUTENCAO PREVENTIVA FRIGORIFICA',
        'subtitle': 'EFICIENCIA ENERGETICA | MANIFOLD DIGITAL & TESTES',
        'color': '#133e68', 'accent': '#38bdf8', 'badge': 'REDUCAO DE CONSUMO'
    },
    {
        'file': 'public/images/services/higienizacao.webp',
        'title': 'HIGIENIZACAO & SANITIZACAO',
        'subtitle': 'LIMPEZA QUIMICA DE EVAPORADORES & CONDENSADORES',
        'color': '#115e59', 'accent': '#2dd4bf', 'badge': 'DESINFECCAO'
    },
    {
        'file': 'public/images/services/equipamentos-frigorificos.webp',
        'title': 'EQUIPAMENTOS FRIGORIFICOS',
        'subtitle': 'CONDENSADORAS REMOTAS | EVAPORADORES DE AR FORCADO',
        'color': '#1f2937', 'accent': '#93c5fd', 'badge': 'SISTEMAS B2B'
    }
]

for s in services:
    cmd = [
        'convert',
        '-size', '800x450',
        f'xc:{s["color"]}',
        '-stroke', s['accent'], '-strokewidth', '4', '-fill', 'none',
        '-draw', 'roundrectangle 16,16 784,434 20,20',
        '-stroke', 'none', '-fill', 'rgba(0,0,0,0.4)',
        '-draw', 'roundrectangle 40,40 280,80 8,8',
        '-fill', s['accent'], '-pointsize', '15', '-font', 'Helvetica-Bold',
        '-annotate', '+55+65', s['badge'],
        '-fill', '#FFFFFF', '-pointsize', '28', '-font', 'Helvetica-Bold',
        '-annotate', '+40+140', s['title'],
        '-fill', s['accent'], '-pointsize', '16', '-font', 'Helvetica-Bold',
        '-annotate', '+40+180', s['subtitle'],
        '-fill', 'rgba(0,0,0,0.3)',
        '-draw', 'roundrectangle 40,220 760,340 12,12',
        '-fill', '#F8FAFC', '-pointsize', '15', '-font', 'Helvetica',
        '-annotate', '+60+260', '* Diagnostico Tecnico com Instrumentos Digitais Calibrados',
        '-annotate', '+60+290', '* Atendimento em Penha, Navegantes, Itajai, BC e Regiao',
        '-annotate', '+60+320', '* Garantia Formal de 90 Dias com Emissao de Nota e Recibo',
        '-fill', 'rgba(255,255,255,0.7)', '-pointsize', '12', '-font', 'Helvetica',
        '-annotate', '+40+400', 'SANTA CATARINA REFRIGERACAO  -  EQUIPAMENTOS E SISTEMAS FRIGORIFICOS',
        s['file']
    ]
    subprocess.run(cmd, check=True)
    print(f"Generated WebP: {s['file']}")

print("All WebP images created successfully!")
