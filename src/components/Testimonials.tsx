import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Gestante",
    text: "O acompanhamento pré-natal na Amia foi transformador. Me senti segura e acolhida em cada consulta. A equipe é extraordinária.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    name: "Carlos Mendes",
    role: "Pai de primeira viagem",
    text: "A pediatria é fantástica. O Dr. Roberto explicou tudo com tanta paciência que saímos de lá muito mais tranquilos.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  },
  {
    name: "Fernanda Oliveira",
    role: "Paciente Ginecologia",
    text: "Nunca vi uma clínica tão organizada e bonita. O atendimento é pontual e muito humano. Recomendo para todas as minhas amigas.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-amia-light/30 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-amia-dark dark:text-white text-xs font-semibold tracking-wide uppercase mb-4 md:mb-6 border border-slate-100 dark:border-slate-700">
            Histórias Reais
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amia-dark dark:text-white mb-4 md:mb-6 tracking-tight">O que dizem nossos pacientes</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Acreditamos que o melhor indicador da nossa qualidade é a tranquilidade e a confiança de quem escolhe a Amia para cuidar da sua saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700 relative hover:shadow-xl shadow-slate-200/50 dark:shadow-none transition-shadow"
            >
              <Quote className="absolute top-6 right-6 md:top-10 md:right-10 text-amia-light/50 dark:text-slate-700 w-12 h-12 md:w-16 md:h-16 rotate-180" />
              <div className="flex gap-1 text-amia-pink mb-6 md:mb-8">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-amia-dark dark:text-white text-sm md:text-base">{t.name}</h4>
                  <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
