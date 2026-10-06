import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, Search } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { BLOG_POSTS } from '../data/blogPosts';
import { PageHero, SectionHeader, TechCard } from '../components/TechUI';

export const BlogIndexView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['Todas', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = selectedCategory === 'Todas' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12324A] pb-16 text-left">
      <EnhancedSEO
        title="Blog da Refrigeração: Dicas Técnicas, Cuidados e Manutenção | SC Refrigeração"
        description="Artigos e guias práticos sobre conserto de geladeiras, economia de energia, manutenção preventiva, códigos de erro de lava e seca e refrigeração comercial em SC."
        canonicalUrl="/blog"
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Blog Técnico", item: "/blog" }
        ]}
      />

      {/* Page Hero */}
      <PageHero
        badge="01 / GUIA TÉCNICO & ARTIGOS"
        title="Blog do Refrigerista e Dicas Práticas"
        subtitle="Guias práticos sobre manutenção preventiva, diagnóstico de defeitos, códigos de erro e economia de energia para seus aparelhos."
        breadcrumbs={[{ label: "Blog Técnico", path: "/blog" }]}
        equipmentType="geladeira"
      />

      {/* Search & Categories Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 border-2 border-[#12324A] rounded-[4px] shadow-stamped">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#12324A]/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar artigos (ex: geladeira não gela, erro OE)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#F4F1EA] border border-[#12324A] text-xs font-mono text-[#12324A] focus:outline-none placeholder-[#12324A]/50"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 font-mono text-xs">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 border border-[#12324A] font-bold text-xs shrink-0 transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#12324A] text-white'
                    : 'bg-white text-[#12324A] hover:bg-[#BFE3F2]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-6">
        <SectionHeader
          step="02 / ÍNDICE DE ARTIGOS"
          title="Publicações técnicas e orientações"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <TechCard
              key={idx}
              stamped={true}
              hoverable={true}
              className="flex flex-col justify-between space-y-4 bg-white border-2 border-[#12324A]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#12324A]/20 pb-2">
                  <span className="font-mono text-[10px] font-bold text-[#D9682B] uppercase">
                    [{post.category}]
                  </span>
                  <span className="font-mono text-[10px] text-[#12324A]/70 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#12324A]/50" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-[#12324A] font-display hover:text-[#D9682B] transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs text-[#12324A]/80 font-sans leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-[#12324A]/20 flex items-center justify-between font-mono text-xs">
                <span className="text-[#12324A]/60 flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3 h-3" /> {post.datePublished}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-bold text-[#12324A] hover:text-[#D9682B] flex items-center gap-1"
                >
                  <span>Ler artigo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9682B]" />
                </Link>
              </div>
            </TechCard>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 border-2 border-dashed border-[#12324A]/30 p-8">
            <p className="font-mono text-xs text-[#12324A]/70">Nenhum artigo encontrado com o termo pesquisado.</p>
          </div>
        )}
      </section>
    </main>
  );
};

