import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, PhoneCall, Share2, HelpCircle } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { getBlogPostBySlug, BLOG_POSTS } from '../data/blogPosts';
import { COMPANY_INFO } from '../data/company';

interface BlogArticleViewProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const BlogArticleView: React.FC<BlogArticleViewProps> = ({ onOpenBookingModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts (same category or next posts)
  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": COMPANY_INFO.subdomainUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": COMPANY_INFO.assets.logo
      }
    },
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${COMPANY_INFO.subdomainUrl}/blog/${post.slug}`
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <EnhancedSEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalUrl={`/blog/${post.slug}`}
        type="article"
        schemas={[articleSchema]}
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: post.title, item: `/blog/${post.slug}` }
        ]}
      />

      {/* Article Header */}
      <header className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-14 px-4 border-b border-cyan-900/30">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para todos os artigos
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold px-3 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Publicado em {post.datePublished} (Atualizado: {post.dateModified})
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
            Escrito por: <strong className="text-slate-200">{post.author}</strong>
          </div>
        </div>
      </header>

      {/* Main Content & Sidebar */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Body */}
          <article className="lg:col-span-2 space-y-8">
            {/* Key Takeaways Box */}
            <div className="bg-cyan-50/70 border-l-4 border-cyan-500 p-5 rounded-r-xl">
              <h2 className="text-sm font-bold text-cyan-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-700" /> Principais Conclusões em 1 Minuto:
              </h2>
              <ul className="space-y-1.5">
                {post.takeaways.map((takeaway, i) => (
                  <li key={i} className="text-xs sm:text-sm text-cyan-900 flex items-start gap-2">
                    <span className="text-cyan-700 font-black">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Html Content */}
            <div
              className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base prose-ul:text-sm sm:prose-ul:text-base prose-li:text-slate-700"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* FAQs with details / summary */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-10 pt-8 border-t border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-600" /> Perguntas Frequentes sobre o Tema
                </h2>
                <div className="space-y-3">
                  {post.faqs.map((faq, i) => (
                    <details key={i} className="bg-white p-4 rounded-xl border border-slate-200 group">
                      <summary className="font-bold text-slate-900 cursor-pointer flex items-center justify-between list-none text-sm">
                        <span>{faq.question}</span>
                        <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Article Footer CTA */}
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-cyan-800/40 mt-8">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Identificou algum destes sintomas em seu aparelho?</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Não tente forçar o compressor. Nossos técnicos atendem em domicílio com oficina móvel completa em Penha, Navegantes, Piçarras, Itajaí, BC e região.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenBookingModal('Diagnóstico Técnico Especializado')}
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Solicitar Visita Técnica
                </button>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5"
                >
                  WhatsApp: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Assistência Técnica Móvel</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Atendimento rápido em residências, condomínios, restaurantes e comércios no Litoral de Santa Catarina.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Garantia de 90 dias por escrito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Peças 100% originais</span>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Artigos Recomendados</h3>
              <div className="space-y-3">
                {relatedPosts.map((rp, i) => (
                  <Link
                    key={i}
                    to={`/blog/${rp.slug}`}
                    className="block group p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1">
                      {rp.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-800 group-hover:text-cyan-600 leading-snug">
                      {rp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};
