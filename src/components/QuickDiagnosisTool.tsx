import React, { useState } from 'react';
import { Wrench, CheckCircle, ArrowRight, MessageCircle, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const QuickDiagnosisTool: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState('Geladeira / Refrigerador');
  const [selectedSymptom, setSelectedSymptom] = useState('Gela em cima (freezer), mas não gela a parte de baixo');

  const equipmentOptions = [
    { name: 'Geladeira / Refrigerador', icon: '❄️' },
    { name: 'Lava e Seca', icon: '🧺' },
    { name: 'Freezer Vertical/Horizontal', icon: '🧊' },
    { name: 'Câmara Fria Comercial', icon: '🏬' },
    { name: 'Balcão / Cervejeira', icon: '🍺' },
    { name: 'Adega Climatizada', icon: '🍷' },
    { name: 'Frigobar', icon: '🏨' },
  ];

  const symptomsByEquipment: Record<string, { symptom: string; probableCause: string; recommendation: string }[]> = {
    'Geladeira / Refrigerador': [
      {
        symptom: 'Gela em cima (freezer), mas não gela a parte de baixo',
        probableCause: 'Falha no sistema de degelo automático Frost Free (sensor de degelo NTC descalibrado, resistência queimada, fusível aberto ou dreno obstruído).',
        recommendation: 'Necessário teste multímetro do circuito de degelo e desobstrução da calha evaporadora.'
      },
      {
        symptom: 'Compressor (motor) faz estalo e desliga ou não liga',
        probableCause: 'Relé de partida PTC queimado, protetor térmico desarmando ou capacitor de marcha esgotado. Em Inverter, falha no módulo de potência.',
        recommendation: 'Troca imediata do kit de partida com teste de amperagem e tensão do compressor.'
      },
      {
        symptom: 'Vazamento de água saindo por baixo da geladeira',
        probableCause: 'Calha de escoamento do dreno entupida com sujeira/gelo ou reservatório traseiro trincado.',
        recommendation: 'Higienização e desobstrução técnica do dreno com verificação do recipiente evaporação.'
      },
      {
        symptom: 'Barulho muito alto ou vibração no motor',
        probableCause: 'Amortecedores de borracha do motor ressecados ou desgaste mecânico interno do compressor.',
        recommendation: 'Revisão das coxins de fixação ou troca do compressor com nova carga de gás.'
      }
    ],
    'Lava e Seca': [
      {
        symptom: 'Não escoa a água / dá erro OE ou 5E',
        probableCause: 'Bomba de drenagem travada com moedas/grampos ou enrolamento do motor da bomba queimado.',
        recommendation: 'Limpeza de filtro de resíduos e substituição da bomba de drenagem blindada.'
      },
      {
        symptom: 'Barulho de turbina / pancadas fortes na centrifugação',
        probableCause: 'Rolamentos blindados gastos com entrada de água por falha no retentor do eixo da cruzeta.',
        recommendation: 'Substituição do kit completo de rolamentos 6205/6206, retentor e triângulo cruzeta.'
      },
      {
        symptom: 'Não enche de água / dá erro IE ou 4E',
        probableCause: 'Eletroválvula de entrada d\'água queimada ou filtro de malha entupido.',
        recommendation: 'Verificação da pressão da água e substituição da válvula solenóide dupla/tripla.'
      },
      {
        symptom: 'Não seca as roupas / solta ar frio',
        probableCause: 'Resistência de secagem queimada, termostato de segurança aberto ou duto obstruído por fiapos.',
        recommendation: 'Limpeza do duto de alumínio da ventoinha e substituição de sensores/resistência.'
      }
    ],
    'Freezer Vertical/Horizontal': [
      {
        symptom: 'Freezer descongelando e luz de alarme acesa',
        probableCause: 'Vazamento de gás refrigerante R134a/R600a ou falha no compressor/termostato.',
        recommendation: 'Teste de pressurização com nitrogênio, eliminação do vazamento e recarga de gás.'
      }
    ],
    'Câmara Fria Comercial': [
      {
        symptom: 'Perda de temperatura / evaporador virando um bloco de gelo',
        probableCause: 'Falha na resistência de degelo forçado ou desconfiguração do controlador Full Gauge/Carel.',
        recommendation: 'Atendimento emergencial 24h para parametrização do controlador e degelo forçado.'
      }
    ],
    'Balcão / Cervejeira': [
      {
        symptom: 'Cerveja não atinge -4°C ou bebidas ficam quentes',
        probableCause: 'Micro-motor do condensador travado ou condensador coberto de poeira e gordura.',
        recommendation: 'Limpeza do condensador com ar comprimido e troca do micro-ventilador.'
      }
    ],
    'Adega Climatizada': [
      {
        symptom: 'Adega esquentando e alterando temperatura dos vinhos',
        probableCause: 'Pastilha Peltier de refrigeração queimada ou placa de fonte alimentadora danificada.',
        recommendation: 'Troca da pastilha thermoelétrica e pasta térmica de alta condutividade.'
      }
    ],
    'Frigobar': [
      {
        symptom: 'Frigobar faturado no congelador ao tirar gelo com faca',
        probableCause: 'Perfuração de alumínio do congelador com vazamento total do gás refrigerante.',
        recommendation: 'Solda fria/alumínio do furo, vácuo de alta precisão e nova recarga de gás R600a.'
      }
    ]
  };

  const currentSymptoms = symptomsByEquipment[selectedEquipment] || symptomsByEquipment['Geladeira / Refrigerador'];
  const activeSymptomObj = currentSymptoms.find(s => s.symptom === selectedSymptom) || currentSymptoms[0];

  const whatsappMessage = `${COMPANY_INFO.whatsappUrl}%20-%20Fiz%20o%20Diagn%C3%B3stico%20R%C3%A1pido%20no%20site:%0A-%20Equipamento:%20${encodeURIComponent(selectedEquipment)}%0A-%20Defeito:%20${encodeURIComponent(activeSymptomObj.symptom)}%0AQueria%20agendar%20o%20conserto%20em%20meu%20endere%C3%A7o.`;

  return (
    <section className="bg-slate-950 py-16 lg:py-24 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold text-xs uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" /> Diagnóstico Rápido de Defeitos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
              Identifique o Problema do Seu Equipamento em 2 Clicks
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Selecione seu aparelho e o sintoma observado para entender a causa provável e falar direto com um técnico.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step 1: Equipment Selection */}
            <div className="lg:col-span-5 space-y-4">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                1. Selecione o Equipamento:
              </label>
              <div className="grid grid-cols-1 gap-2">
                {equipmentOptions.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setSelectedEquipment(item.name);
                      const newSymptoms = symptomsByEquipment[item.name] || symptomsByEquipment['Geladeira / Refrigerador'];
                      setSelectedSymptom(newSymptoms[0].symptom);
                    }}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all text-left ${
                      selectedEquipment === item.name
                        ? 'bg-cyan-500 text-slate-950 shadow-md scale-[1.01]'
                        : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Symptom Selection & Result */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  2. Qual o Sintoma Observado?
                </label>
                <div className="space-y-2">
                  {currentSymptoms.map((symObj, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSymptom(symObj.symptom)}
                      className={`w-full text-left p-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                        selectedSymptom === symObj.symptom
                          ? 'bg-slate-800 border-cyan-400 text-cyan-300 shadow-md'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {symObj.symptom}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Box */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Wrench className="w-4 h-4" />
                  <span>Causa Provável e Diagnóstico:</span>
                </div>
                <p className="text-white text-xs sm:text-sm font-medium leading-relaxed">
                  {activeSymptomObj.probableCause}
                </p>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Recomendação Técnica:</strong> {activeSymptomObj.recommendation}</span>
                </div>

                <a
                  href={whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg transition-all pt-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chamar Técnico no WhatsApp com este Diagnóstico</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
