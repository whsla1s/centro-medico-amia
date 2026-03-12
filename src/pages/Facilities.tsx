import { motion } from 'motion/react';

export default function Facilities() {
  return (
    <div className="pt-24 md:pt-32 pb-24 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-amia-dark dark:text-white text-xs font-semibold tracking-wide uppercase mb-6 md:mb-8 border border-slate-100 dark:border-slate-700">
          Espaço de Calma
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-amia-dark dark:text-white mb-4 md:mb-6 tracking-tight">Nossa Estrutura</h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-12 md:mb-16 font-light leading-relaxed">
          Um ambiente desenhado para o seu bem-estar. Arquitetura que integra elementos da natureza, iluminação suave e espaços que transmitem tranquilidade e segurança.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3",
              title: "Recepção Acolhedora",
              desc: "Esqueça a sala de espera tradicional. Nosso lounge foi criado para você relaxar antes da sua consulta."
            },
            {
              img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3",
              title: "Consultórios Planejados",
              desc: "Privacidade e conforto em ambientes equipados com o que há de mais moderno."
            },
            {
              img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3",
              title: "Salas de Exame",
              desc: "Tecnologia de ponta em um ambiente preparado para reduzir a ansiedade."
            },
            {
              img: "https://images.unsplash.com/photo-1538108149393-cebb47acdd4e?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3",
              title: "Espaço Kids",
              desc: "Uma área lúdica e segura para os pequenos se sentirem à vontade."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-[2rem] overflow-hidden bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl shadow-slate-200/50 dark:shadow-none transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-amia-dark dark:text-white mb-2 md:mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}