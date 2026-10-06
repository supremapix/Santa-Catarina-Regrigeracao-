import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { getBlogPostBySlug, BLOG_POSTS } from '../data/blogPosts';
import { COMPANY_INFO } from '../data/company';
import { PageHero, SectionHeader, TechCard, TechFAQ, TechButton } from '../components/TechUI';

interface BlogArticleViewProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const BlogArticleView: React.FC<BlogArticleViewProps> = ({ onOpenBookingModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3);

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
    <main className="min-h-screen bg-[#F4F1EA] text-[#12324A] pb-16 text-left">
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

      {/* Page Hero */}
      <PageHero
        badge={`01 / CATEGORIA: ${post.category.toUpperCase()}`}
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: "Blog", path: "/blog" },
          { label: post.title, path: `/blog/${post.slug}` }
        ]}
        equipmentType="geladeira"
      />

      {/* Main Content & Sidebar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column (8 cols) */}
          <article className="lg:col-span-8 space-y-8">
            
            {/* Takeaways Box */}
            <TechCard stamped={true} className="bg-white border-2 border-[#12324A]">
              <span className="font-mono text-xs font-bold text-[#D9682B] uppercase tracking-wider block mb-2">
                RESUMO TÉCNICO // DESTAQUES:
              </span>
              <ul className="space-y-2">
                {post.takeaways.map((takeaway, i) => (
                  <li key={i} className="font-sans text-xs sm:text-sm text-[#12324A] flex items-start gap-2">
                    <span className="text-[#16a34a] font-mono font-bold">✓</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </TechCard>

            {/* Html Content */}
            <div
              className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-[#12324A] prose-headings:font-display prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:text-[#12324A]/90 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base prose-ul:text-sm sm:prose-ul:text-base prose-li:text-[#12324A]/90 font-sans"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="space-y-4 pt-6 border-t-2 border-[#12324A]/20">
                <SectionHeader
                  step="02 / PERGUNTAS FREQUENTES"
                  title="Dúvidas Frequentes sobre o Tema"
                />
                <TechFAQ items={post.faqs} />
              </div>
            )}

            {/* Article Footer CTA */}
            <div className="bg-[#12324A] text-white p-6 sm:p-8 border-2 border-[#12324A] shadow-stamped rounded-[4px] space-y-3 text-center sm:text-left">
              <span className="font-mono text-xs text-[#BFE3F2] font-bold uppercase">SUPORTE TÉCNICO DIRETO</span>
              <h3 className="text-xl font-bold font-display text-white">Precisa de avaliação profissional no seu aparelho?</h3>
              <p className="text-xs sm:text-sm text-[#BFE3F2] font-sans">
                Atendemos Navegantes, Penha, Piçarras e todo o Litoral Norte SC com visita técnica no local.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <TechButton
                  variant="whatsapp"
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  location="article_cta_whatsapp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CHAMAR TÉCNICO NO WHATSAPP</span>
                </TechButton>
                <TechButton
                  variant="phone"
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  location="article_cta_phone"
                >
                  <Phone className="w-4 h-4" />
                  <span>LIGAR: {COMPANY_INFO.phone}</span>
                </TechButton>
              </div>
            </div>

          </article>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <TechCard stamped={true} className="bg-white border-2 border-[#12324A] sticky top-24">
              <span className="font-mono text-xs font-bold text-[#D9682B] uppercase block mb-3">
                ARTIGOS RELACIONADOS
              </span>
              <div className="space-y-4 divide-y divide-[#12324A]/20">
                {relatedPosts.map((rel, i) => (
                  <div key={i} className={i > 0 ? "pt-3" : ""}>
                    <span className="font-mono text-[10px] text-[#12324A]/60 block mb-1">[{rel.category}]</span>
                    <Link
                      to={`/blog/${rel.slug}`}
                      className="font-bold text-xs sm:text-sm text-[#12324A] hover:text-[#D9682B] transition-colors leading-snug block font-display"
                    >
                      {rel.title}
                    </Link>
                  </div>
                ))}
              </div>
            </TechCard>
          </aside>

        </div>
      </section>
    </main>
  );
};
