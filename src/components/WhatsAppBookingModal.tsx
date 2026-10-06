import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle2, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { trackContactClick } from '../utils/analytics';
import { TechButton } from './TechUI';

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
  const [cityName, setCityName] = useState('Navegantes');
  const [neighborhood, setNeighborhood] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    trackContactClick({
      channel: 'whatsapp',
      location: 'booking_modal_submit',
      label: `Booking Form (${equipment} - ${cityName})`
    });

    const formattedMessage = `*AGENDAMENTO TÉCNICO - SC REFRIGERAÇÃO*%0A%0A` +
      `*Cliente:* ${encodeURIComponent(clientName)}%0A` +
      `*Telefone:* ${encodeURIComponent(clientPhone)}%0A` +
      `*Equipamento:* ${encodeURIComponent(equipment)} (${encodeURIComponent(brand)})%0A` +
      `*Defeito:* ${encodeURIComponent(issue || 'Não especificado')}%0A` +
      `*Cidade/Bairro:* ${encodeURIComponent(cityName)} - ${encodeURIComponent(neighborhood || 'Centro')}%0A` +
      `*Data Preferencial:* ${encodeURIComponent(preferredDate || 'Mais rápido possível')}%0A` +
      `*Turno:* ${encodeURIComponent(preferredShift)}%0A%0A` +
      `Olá! Fiz o agendamento pelo site e aguardo a confirmação do horário do técnico.`;

    const targetUrl = `https://wa.me/5547992245172?text=${formattedMessage}`;

    setTimeout(() => {
      window.open(targetUrl, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12324A]/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#F4F1EA] border-2 border-[#12324A] rounded-[4px] w-full max-w-lg overflow-hidden shadow-stamped relative text-[#12324A] my-8 text-left bg-paper-grid">
        
        {/* Modal Header */}
        <div className="bg-white p-5 border-b-2 border-[#12324A] flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] text-[#D9682B] font-bold uppercase tracking-wider block">
              FORMULÁRIO DE ATENDIMENTO
            </span>
            <h3 className="font-extrabold text-lg text-[#12324A] font-display">Agendar Visita Técnica</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar janela"
            className="p-1.5 bg-[#F4F1EA] text-[#12324A] hover:bg-[#D9682B] hover:text-white border-2 border-[#12324A] transition-colors rounded-[2px]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Confirmation State */}
        {!isSubmitted ? (
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-5">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between font-mono text-xs border-b border-[#12324A]/20 pb-3">
              <span className={step === 1 ? 'text-[#D9682B] font-bold' : 'text-[#12324A]/60'}>01 // APARELHO</span>
              <span className={step === 2 ? 'text-[#D9682B] font-bold' : 'text-[#12324A]/60'}>02 // HORÁRIO</span>
              <span className={step === 3 ? 'text-[#D9682B] font-bold' : 'text-[#12324A]/60'}>03 // ENDEREÇO</span>
            </div>

            {/* STEP 1: Equipment & Brand */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-xs font-bold text-[#12324A] uppercase mb-1">
                    Equipamento para Reparo:
                  </label>
                  <select
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border-2 border-[#12324A] rounded-[2px] font-sans text-xs font-bold text-[#12324A] focus:outline-none"
                  >
                    <option value="Geladeira / Refrigerador">Geladeira / Refrigerador Frost Free</option>
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
                  <label className="block font-mono text-xs font-bold text-[#12324A] uppercase mb-1">
                    Marca do Aparelho:
                  </label>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border-2 border-[#12324A] rounded-[2px] font-sans text-xs font-bold text-[#12324A] focus:outline-none"
                  >
                    <option value="Brastemp">Brastemp</option>
                    <option value="Electrolux">Electrolux</option>
                    <option value="Consul">Consul</option>
                    <option value="LG">LG</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Midea">Midea</option>
                    <option value="Panasonic">Panasonic</option>
                    <option value="Metalfrio / Gelopar">Metalfrio / Gelopar / Fricon</option>
                    <option value="Outra Marca">Outra Marca</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-[#12324A] uppercase mb-1">
                    Sintoma ou Defeito (Opcional):
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Parou de gelar embaixo, motor estalando, erro no painel..."
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    className="w-full px-3 py-2 bg-white border-2 border-[#12324A] rounded-[2px] text-xs font-sans text-[#12324A] placeholder-[#12324A]/40 focus:outline-none"
                  />
                </div>

                <TechButton
                  variant="neutral"
                  onClick={() => setStep(2)}
                  className="w-full justify-center"
                >
                  CONTINUAR PARA HORÁRIO →
                </TechButton>
              </div>
            )}

            {/* STEP 2: Preferred Date & Shift */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-xs font-bold text-[#12324A] uppercase mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D9682B]" /> Data Preferencial:
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border-2 border-[#12324A] rounded-[2px] text-xs font-mono font-bold text-[#12324A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-[#12324A] uppercase mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D9682B]" /> Turno Desejado:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Manhã (08h às 12h)', 'Tarde (13h às 18h)', 'Mais rápido possível'].map((shiftOption) => (
                      <button
                        key={shiftOption}
                        type="button"
                        onClick={() => setPreferredShift(shiftOption)}
                        className={`p-2.5 border-2 border-[#12324A] rounded-[2px] font-mono text-xs font-bold transition-all ${
                          preferredShift === shiftOption
                            ? 'bg-[#12324A] text-white'
                            : 'bg-white text-[#12324A] hover:bg-[#BFE3F2]/30'
                        }`}
                      >
                        {shiftOption}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <TechButton
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="w-1/3 justify-center"
                  >
                    ← VOLTAR
                  </TechButton>
                  <TechButton
                    variant="neutral"
                    onClick={() => setStep(3)}
                    className="w-2/3 justify-center"
                  >
                    CONTINUAR PARA ENDEREÇO →
                  </TechButton>
                </div>
              </div>
            )}

            {/* STEP 3: Contact & Location */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-mono text-xs font-bold text-[#12324A] uppercase mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D9682B]" /> Cidade:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Navegantes, Penha..."
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border-2 border-[#12324A] rounded-[2px] text-xs font-sans font-bold text-[#12324A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold text-[#12324A] uppercase mb-1">
                      Bairro:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Centro, Gravatá..."
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      className="w-full px-3 py-2 bg-white border-2 border-[#12324A] rounded-[2px] text-xs font-sans font-bold text-[#12324A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-[#12324A] uppercase mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#D9682B]" /> Seu Nome:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Digite seu nome completo"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border-2 border-[#12324A] rounded-[2px] text-xs font-sans font-bold text-[#12324A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold text-[#12324A] uppercase mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#D9682B]" /> WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(47) 9____-____"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border-2 border-[#12324A] rounded-[2px] text-xs font-sans font-bold text-[#12324A] focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <TechButton
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="w-1/3 justify-center"
                  >
                    ← VOLTAR
                  </TechButton>
                  <TechButton
                    variant="whatsapp"
                    onClick={() => {}}
                    className="w-2/3 justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>CONFIRMAR NO WHATSAPP</span>
                  </TechButton>
                </div>
              </div>
            )}

          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-white border-2 border-[#12324A] text-[#16a34a] rounded-[2px] flex items-center justify-center mx-auto shadow-stamped">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-display text-[#12324A]">Agendamento Enviado com Sucesso!</h4>
            <p className="text-xs sm:text-sm text-[#12324A]/80 font-sans max-w-sm mx-auto leading-relaxed">
              Sua solicitação para <strong className="font-bold text-[#12324A]">{equipment}</strong> em <strong className="font-bold text-[#12324A]">{cityName}</strong> foi repassada ao técnico responsável no WhatsApp.
            </p>
            <div className="pt-2">
              <TechButton
                variant="neutral"
                onClick={onClose}
                className="justify-center mx-auto"
              >
                FECHAR JANELA
              </TechButton>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
