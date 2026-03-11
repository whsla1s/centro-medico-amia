import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WomensHealth() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-amia-light/30 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-amia-pink text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 border border-slate-100 dark:border-slate-700">
              Núcleo Especializado
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-amia-dark dark:text-white tracking-tight leading-[1.1] md:leading-[1.05] mb-6 md:mb-8">
              Saúde da Mulher
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 md:mb-10 font-light">
              Um espaço desenhado para acolher, ouvir e cuidar. Da prevenção ao tratamento, oferecemos um ambiente de calma e tecnologia para todas as fases da sua vida.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {[
                "Ginecologia Preventiva e Integrativa",
                "Acompanhamento Pré-Natal Humanizado",
                "Menopausa e Climatério",
                "Planejamento Familiar Consciente"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 md:gap-4 text-slate-700 dark:text-slate-300 text-base md:text-lg font-light">
                  <CheckCircle2 className="text-amia-pink w-5 h-5 md:w-6 md:h-6 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-amia-dark/5 dark:shadow-black/40 border-4 md:border-8 border-white dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3" 
              alt="Saúde da Mulher" 
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
