import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight, Tag, Search } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { BLOG_POSTS } from '../data/blogPosts';
import { COMPANY_INFO } from '../data/company';

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
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <EnhancedSEO
        title="Blog da Refrigeração: Dicas Técnicas, Cuidados e Manutenção | SC Refrigeração"
        description="Artigos e guias práticos sobre conserto de geladeiras, economia de energia, manutenção preventiva, códigos de erro de lava e seca e refrigeração comercial em SC."
        canonicalUrl="/blog"
        breadcrumbs={[
          { name: "Início", item: "/" },
          { name: "Blog Técnico", item: "/blog" }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-16 px-4 border-b border-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" /> Conhecimento Técnico & Dicas Práticas
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Blog da Santa Catarina Refrigeração
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Dicas de conservação, diagnóstico de falhas, economia de energia e orientações de especialistas para prolongar a vida útil dos seus eletrodomésticos.
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar artigos (ex: geladeira não gela, erro OE, gás)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 text-sm"
            />
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="max-w-5xl mx-auto px-4 py-6 border-b border-slate-200">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-2">
            <Tag className="w-3.5 h-3.5" /> Categorias:
          </span>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 bg-cyan-50 text-cyan-700 rounded-md border border-cyan-100">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors leading-snug mb-3">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-600" /> {post.datePublished}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-bold text-cyan-600 group-hover:text-cyan-700 flex items-center gap-1"
                >
                  Ler Artigo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-sm">Nenhum artigo encontrado com o termo pesquisado.</p>
          </div>
        )}
      </section>
    </main>
  );
};
