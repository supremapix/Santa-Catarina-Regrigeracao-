import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle2, MessageSquare, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface WhatsAppBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const WhatsAppBookingModal: React.FC<WhatsAppBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Geladeira / Refrigerador',
}) => {
  const [step, setStep] = useState(1);
  const [equipment, setEquipment] = useState(preselectedService);
  const [brand, setBrand] = useState('Brastemp');
  const [issue, setIssue] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredShift, setPreferredShift] = useState('Manhã (08h às 12h)');
  const [cityName, setCityName] = useState('Penha');
  const [neighborhood, setNeighborhood] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formattedMessage = `*AGENDAMENTO ONLINE - SANTA CATARINA REFRIGERAÇÃO*%0A%0A` +
      `*Cliente:* ${encodeURIComponent(clientName)}%0A` +
      `*Telefone:* ${encodeURIComponent(clientPhone)}%0A` +
      `*Equipamento:* ${encodeURIComponent(equipment)} (${encodeURIComponent(brand)})%0A` +
      `*Defeito Relatado:* ${encodeURIComponent(issue || 'Não especificado')}%0A` +
      `*Cidade/Bairro:* ${encodeURIComponent(cityName)} - ${encodeURIComponent(neighborhood || 'Centro')}%0A` +
      `*Data Preferencial:* ${encodeURIComponent(preferredDate || 'Mais rápido possível')}%0A` +
      `*Turno:* ${encodeURIComponent(preferredShift)}%0A%0A` +
      `Olá! Fiz o agendamento pelo site e aguardo a confirmação do horário do técnico.`;

    const targetUrl = `https://wa.me/5547992245172?text=${formattedMessage}`;

    setTimeout(() => {
      window.open(targetUrl, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative text-slate-900 my-8">
        
        {/* Modal Header */}
        <div className="bg-slate-100 p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-100 text-cyan-900 border border-cyan-200">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900">Agendamento Online 24h</h3>
              <p className="text-xs text-slate-600 font-medium">Atendimento em Domicílio com Garantia</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar janela"
            className="p-3 rounded-xl bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-300 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form or Confirmation State */}
        {!isSubmitted ? (
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 border-b border-slate-200 pb-3">
              <span className={step === 1 ? 'text-cyan-800 text-sm font-black' : ''}>1. Equipamento</span>
              <span className={step === 2 ? 'text-cyan-800 text-sm font-black' : ''}>2. Horário</span>
              <span className={step === 3 ? 'text-cyan-800 text-sm font-black' : ''}>3. Endereço</span>
            </div>

            {/* STEP 1: Equipment & Brand */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Equipamento para Reparo:
                  </label>
                  <select
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-cyan-600 min-h-[48px]"
                  >
                    <option value="Geladeira / Refrigerador">Geladeira / Refrigerador</option>
                    <option value="Geladeira Side by Side">Geladeira Side by Side / French Door</option>
                    <option value="Lava e Seca / Lavadora">Lava e Seca / Lavadora</option>
                    <option value="Freezer Vertical ou Horizontal">Freezer Vertical ou Horizontal</option>
                    <option value="Câmara Fria Comercial">Câmara Fria Comercial</option>
                    <option value="Balcão Refrigerado / Cervejeira">Balcão Refrigerado / Cervejeira</option>
                    <option value="Adega Climatizada">Adega Climatizada</option>
                    <option value="Frigobar">Frigobar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Marca do Aparelho:
                  </label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-cyan-600 min-h-[48px]"
                  >
                    <option value="Brastemp">Brastemp</option>
                    <option value="Electrolux">Electrolux</option>
                    <option value="Consul">Consul</option>
                    <option value="LG">LG</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Midea">Midea</option>
                    <option value="Metalfrio / Gelopar">Metalfrio / Gelopar / Fricon</option>
                    <option value="Outra Marca">Outra Marca</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Sintoma ou Defeito Observado (Opcional):
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Não está gelando a parte de baixo, barulho no motor, dando erro OE..."
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-4 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-black text-base shadow-md transition-all min-h-[48px]"
                >
                  Continuar para Horário →
                </button>
              </div>
            )}

            {/* STEP 2: Preferred Date & Shift */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-cyan-700" /> Data Preferencial para a Visita:
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-cyan-600 min-h-[48px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-cyan-700" /> Turno de Preferência:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Manhã (08h às 12h)', 'Tarde (13h às 18h)', 'Plantão Emergencial'].map((shiftOption) => (
                      <button
                        key={shiftOption}
                        type="button"
                        onClick={() => setPreferredShift(shiftOption)}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all min-h-[48px] ${
                          preferredShift === shiftOption
                            ? 'bg-cyan-700 text-white border-cyan-800 shadow-sm'
                            : 'bg-slate-50 text-slate-800 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {shiftOption}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 font-bold text-sm min-h-[48px]"
                  >
                    ← Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-2/3 py-3.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-black text-base shadow-md min-h-[48px]"
                  >
                    Ir para Endereço →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact & Location */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-700" /> Cidade:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Penha, Piçarras, Itajaí..."
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      className="w-full px-3 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-cyan-600 min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Bairro:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Centro, Gravatá..."
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full px-3 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-cyan-600 min-h-[48px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-cyan-700" /> Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Digite seu nome"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-cyan-600 min-h-[48px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-cyan-700" /> WhatsApp / Telefone:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(47) 99999-9999"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-cyan-600 min-h-[48px]"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 py-3.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 font-bold text-sm min-h-[48px]"
                  >
                    ← Voltar
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base shadow-md flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Confirmar no WhatsApp</span>
                  </button>
                </div>
              </div>
            )}

          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-slate-900">Agendamento Solicitado com Sucesso!</h4>
            <p className="text-slate-700 text-base max-w-sm mx-auto">
              Sua solicitação para <strong className="text-cyan-900">{equipment}</strong> em <strong className="text-slate-900">{cityName}</strong> foi enviada diretamente para o nosso WhatsApp. O técnico confirmará seu horário em breve.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm min-h-[48px]"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
