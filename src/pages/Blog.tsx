import { motion } from 'motion/react';

const posts = [
  {
    title: "A importância do Pré-Natal no primeiro trimestre",
    category: "Gestação",
    date: "12 Mar 2024",
    image: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3"
  },
  {
    title: "Cuidados com a pele no inverno: Dicas da Dermatologia",
    category: "Dermatologia",
    date: "08 Mar 2024",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3"
  },
  {
    title: "Vacinação infantil: O que mudou no calendário?",
    category: "Pediatria",
    date: "01 Mar 2024",
    image: "https://images.unsplash.com/photo-1632053001719-7557879b699e?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3"
  }
];

export default function Blog() {
  return (
    <div className="pt-24 md:pt-32 pb-24 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-amia-dark dark:text-white text-xs font-semibold tracking-wide uppercase mb-6 md:mb-8 border border-slate-100 dark:border-slate-700">
          Conhecimento e Cuidado
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-amia-dark dark:text-white mb-4 md:mb-6 tracking-tight">Conteúdo para o seu bem-estar</h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-12 md:mb-16 font-light leading-relaxed">
          Informação confiável e acolhedora para você cuidar melhor da sua saúde, da sua mente e da sua família.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer bg-white dark:bg-slate-800 p-4 md:p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-4 md:mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold text-amia-pink uppercase tracking-widest mb-2 md:mb-3">
                <span>{post.category}</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-slate-400 dark:text-slate-500">{post.date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-amia-dark dark:text-white group-hover:text-amia-teal transition-colors leading-tight">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
