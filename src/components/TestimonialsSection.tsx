import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { REAL_TESTIMONIALS } from '../data/testimonials';
import { SectionHeader, TechCard } from './TechUI';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[#F4F1EA] py-12 sm:py-16 text-[#12324A] border-b-2 border-[#12324A] bg-paper-grid text-left" id="depoimentos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <SectionHeader
          step="05 / RELATOS TÉCNICOS"
          title="O Que Dizem Nossos Clientes"
          subtitle="Avaliações de serviços executados com agilidade e garantia em Navegantes e cidades vizinhas."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_TESTIMONIALS.map((review) => (
            <TechCard
              key={review.id}
              stamped={true}
              className="bg-white border-2 border-[#12324A] p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Stars Rating */}
                <div className="flex items-center justify-between border-b border-[#12324A]/20 pb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D9682B] text-[#D9682B]" />
                    ))}
                    <span className="font-mono text-xs font-bold text-[#12324A] ml-1.5">5.0</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#D9682B] font-bold uppercase">
                    [{review.service}]
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm font-sans text-[#12324A]/90 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & City Info */}
              <div className="pt-3 border-t border-[#12324A]/20 flex items-center justify-between font-mono text-xs">
                <div>
                  <h3 className="font-bold text-[#12324A] flex items-center gap-1">
                    {review.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a]" />
                  </h3>
                  <p className="text-[10px] text-[#12324A]/60 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#D9682B]" />
                    {review.city}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-[#16a34a]">VERIFICADO</span>
              </div>
            </TechCard>
          ))}
        </div>

      </div>
    </section>
  );
};
