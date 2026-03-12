import { motion } from 'motion/react';
import { ArrowRight, Clock, Calendar, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

// 1. Banco de Dados do Blog (Estrutura Real de Artigos)
const blogPosts = [
  {
    id: 1,
    title: "A importância do Pré-Natal no primeiro trimestre: Guia completo",
    category: "Saúde da Mulher",
    date: "12 Mar 2024",
    readTime: "5 min de leitura",
    author: "Dra. Ana Silva",
    excerpt: "O primeiro trimestre é a fase mais delicada e fundamental para a formação do bebê. Descubra quais são os exames essenciais e os cuidados diários que toda futura mamãe precisa ter.",
    image: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3",
    featured: true
  },
  {
    id: 2,
    title: "Cuidados com a pele no inverno: Dicas práticas da nossa equipe",
    category: "Dermatologia",
    date: "08 Mar 2024",
    readTime: "3 min de leitura",
    author: "Dra. Carla Mendes",
    excerpt: "Com a queda das temperaturas, nossa pele exige hidratação redobrada. Veja como adaptar sua rotina de skincare para evitar o ressecamento.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3",
    featured: false
  },
  {
    id: 3,
    title: "Vacinação infantil: O que mudou no calendário oficial deste ano?",
    category: "Pediatria",
    date: "01 Mar 2024",
    readTime: "4 min de leitura",
    author: "Dr. Roberto Costa",
    excerpt: "Fique por dentro das atualizações do Ministério da Saúde e garanta que a caderneta do seu filho esteja em dia. Proteção é um ato de amor.",
    image: "https://images.unsplash.com/photo-1632053001719-7557879b699e?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3",
    featured: false
  },
  {
    id: 4,
    title: "Saúde Mental importa: Quando é o momento de procurar a Psicologia?",
    category: "Saúde Mental",
    date: "26 Fev 2024",
    readTime: "6 min de leitura",
    author: "Dra. Beatriz Lima",
    excerpt: "Identificar os sinais de esgotamento emocional pode ser o primeiro passo para uma vida mais leve. Saiba como a terapia pode ajudar no seu dia a dia.",
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3",
    featured: false
  }
];

// Pegando o post principal e os demais separadamente
const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
const regularPosts = blogPosts.filter(post => !post.featured);

const categories = ["Todos", "Saúde da Mulher", "Pediatria", "Dermatologia", "Saúde Mental", "Nutrição"];

export default function Blog() {
  return (
    <div className="pt-24 md:pt-32 pb-24 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* CABEÇALHO DO BLOG (Apenas o texto) */}
        <div className="mb-12 md:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amia-light/50 dark:bg-slate-800 shadow-sm text-amia-dark dark:text-white text-xs font-semibold tracking-wide uppercase mb-6 md:mb-8 border border-slate-100 dark:border-slate-700">
              Conteúdo Especializado
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-amia-dark dark:text-white mb-6 tracking-tight leading-tight">
              Informação que <br/><span className="text-amia-teal">cuida de você.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Artigos, dicas e informações confiáveis escritas pelos nossos especialistas para ajudar você a cuidar melhor da sua saúde e da sua família.
            </p>
          </div>
        </div>

        {/* BARRA DE FERRAMENTAS: CATEGORIAS E PESQUISA JUNTAS */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          
          {/* 1. Filtro de Categorias (Na esquerda) */}
          <div className="flex overflow-x-auto pb-2 lg:pb-0 hide-scrollbar gap-3 md:gap-4 w-full">
            {categories.map((category, idx) => (
              <button 
                key={idx}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-colors border ${
                  idx === 0 
                  ? 'bg-amia-dark text-white border-amia-dark dark:bg-white dark:text-amia-dark dark:border-white' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amia-teal dark:hover:border-amia-teal'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* 2. Barra de Pesquisa (Alinhada na direita) */}
          <div className="w-full lg:w-80 relative shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar artigos..." 
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:border-amia-teal transition-colors shadow-sm"
            />
          </div>
          
        </div>

        {/* ARTIGO EM DESTAQUE */}
        <Link 
          to={`/blog/${featuredPost.id}`}
          className="group block mb-16 md:mb-24 bg-white dark:bg-slate-800 rounded-[2rem] md:rounded-[3rem] border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-2xl shadow-slate-200/50 dark:shadow-none transition-all duration-500 hover:-translate-y-1"
        >
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <div className="aspect-video lg:aspect-auto lg:h-[500px] overflow-hidden shrink-0 relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 bg-amia-pink text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                Destaque
              </div>
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full">
              <div className="flex items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
                <span className="text-amia-teal">{featuredPost.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {featuredPost.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amia-dark dark:text-white mb-6 leading-tight group-hover:text-amia-teal transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                  <Clock className="w-4 h-4" /> {featuredPost.readTime}
                </div>
                <div className="inline-flex items-center gap-2 font-bold text-amia-pink uppercase tracking-wide text-sm group-hover:gap-4 transition-all">
                  Ler Artigo <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* LISTA DE ARTIGOS (GRID CLASSICO DE BLOG) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="group flex flex-col bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:-translate-y-1 overflow-hidden h-full"
            >
              {/* Proporção Aspect-Video (16:9) Padrão de Blog */}
              <div className="aspect-video overflow-hidden shrink-0 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-amia-dark dark:text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5"/> {post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-amia-dark dark:text-white group-hover:text-amia-teal transition-colors leading-snug mb-4 line-clamp-3">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 line-clamp-2 mb-6 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Por {post.author}
                  </span>
                  <span className="text-amia-teal font-semibold text-sm flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                    Ler <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTÃO CARREGAR MAIS */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-slate-50 dark:bg-slate-800 text-amia-dark dark:text-white font-bold rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            Carregar artigos anteriores
          </button>
        </div>

      </motion.div>
    </div>
  );
}