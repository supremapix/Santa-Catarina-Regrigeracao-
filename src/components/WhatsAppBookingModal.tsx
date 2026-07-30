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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative text-white my-8">
        
        {/* Modal Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Agendamento Online 24h</h3>
              <p className="text-xs text-slate-400">Atendimento em Domicílio com Garantia</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Confirmation State */}
        {!isSubmitted ? (
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-800 pb-3">
              <span className={step === 1 ? 'text-cyan-400' : ''}>1. Equipamento</span>
              <span className={step === 2 ? 'text-cyan-400' : ''}>2. Horário</span>
              <span className={step === 3 ? 'text-cyan-400' : ''}>3. Endereço</span>
            </div>

            {/* STEP 1: Equipment & Brand */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Equipamento para Reparo:
                  </label>
                  <select
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
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
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Marca do Aparelho:
                  </label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
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
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Sintoma ou Defeito Observado (Opcional):
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Não está gelando a parte de baixo, barulho no motor, dando erro OE..."
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm transition-all"
                >
                  Continuar para Horário →
                </button>
              </div>
            )}

            {/* STEP 2: Preferred Date & Shift */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" /> Data Preferencial para a Visita:
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> Turno de Preferência:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Manhã (08h às 12h)', 'Tarde (13h às 18h)', 'Plantão Emergencial'].map((shiftOption) => (
                      <button
                        key={shiftOption}
                        type="button"
                        onClick={() => setPreferredShift(shiftOption)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                          preferredShift === shiftOption
                            ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
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
                    className="w-1/3 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-bold text-xs"
                  >
                    ← Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-2/3 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm"
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
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" /> Cidade:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Penha, Piçarras, Itajaí..."
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                      Bairro:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Centro, Gravatá, Praia Brava..."
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1 flex items-center gap-1">
                    <User className="w-3 h-3 text-cyan-400" /> Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Digite seu nome"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-cyan-400" /> WhatsApp / Telefone:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(47) 99999-9999"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-1/3 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 font-bold text-xs"
                  >
                    ← Voltar
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirmar no WhatsApp</span>
                  </button>
                </div>
              </div>
            )}

          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-white">Agendamento Solicitado com Sucesso!</h4>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              Sua solicitação para <strong className="text-cyan-400">{equipment}</strong> em <strong className="text-white">{cityName}</strong> foi enviada diretamente para o nosso WhatsApp. O técnico confirmará seu horário em breve.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
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
