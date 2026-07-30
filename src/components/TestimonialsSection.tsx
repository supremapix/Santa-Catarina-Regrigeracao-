import React from 'react';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { REAL_TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-slate-900 py-16 lg:py-24 text-white border-b border-slate-800" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-950 text-cyan-400 border border-blue-800 font-bold text-xs uppercase tracking-wider">
            Reputação Comprovada
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            O Que Dizem Nossos Clientes na Região
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Avaliações reais de moradores, pousadas e comércios atendidos em Penha, Piçarras, Itajaí, Balneário Camboriú e cidades vizinhas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-950 border border-slate-800/90 rounded-3xl p-6 relative flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:bg-slate-950/80 group"
            >
              <div>
                <Quote className="w-8 h-8 text-cyan-500/20 absolute top-6 right-6 pointer-events-none group-hover:text-cyan-500/40 transition-colors" />

                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-2">5.0</span>
                </div>

                {/* Comment Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Service Info */}
              <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm flex items-center gap-1.5">
                    {review.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h3>
                  <p className="text-[11px] text-cyan-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {review.city}
                  </p>
                </div>

                <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                  {review.service}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
