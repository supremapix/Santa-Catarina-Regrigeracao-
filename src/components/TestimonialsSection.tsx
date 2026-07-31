import React from 'react';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { REAL_TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 text-slate-900 border-b border-slate-200" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-200 font-bold text-xs uppercase tracking-wider">
            Reputação Comprovada 5.0 ★
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            O Que Dizem Nossos Clientes em SC
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Avaliações reais de clientes atendidos com prioridade, respeito e garantia em Penha, Navegantes, Itajaí e cidades vizinhas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 relative flex flex-col justify-between hover:border-cyan-300 shadow-sm transition-all group"
            >
              <div>
                <Quote className="w-8 h-8 text-cyan-500/20 absolute top-6 right-6 pointer-events-none group-hover:text-cyan-600/30 transition-colors" />

                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-600 ml-2">5.0</span>
                </div>

                {/* Comment Text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Service Info */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    {review.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </h3>
                  <p className="text-[11px] text-cyan-800 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-cyan-600" />
                    {review.city}
                  </p>
                </div>

                <span className="text-[10px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-bold">
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
