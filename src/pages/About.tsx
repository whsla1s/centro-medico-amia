import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-24 md:pt-32 pb-24 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-amia-dark dark:text-white text-xs font-semibold tracking-wide uppercase mb-6 md:mb-8 border border-slate-100 dark:border-slate-700">
              Nossa Essência
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-amia-dark dark:text-white tracking-tight leading-[1.1] md:leading-[1.05] mb-6 md:mb-8">
              Saúde que conecta você <br className="hidden sm:block"/><span className="text-amia-teal">à sua melhor versão.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-light">
              Nascemos do desejo de transformar a relação das pessoas com a própria saúde. Acreditamos que o cuidado verdadeiro acontece quando unimos a precisão da medicina ao tempo necessário para ouvir, entender e acolher cada indivíduo em sua totalidade.
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-light">
              A Amia não é apenas uma clínica, é um espaço de reconexão. Desenhamos cada detalhe da nossa jornada para que você sinta calma desde o momento em que agenda sua consulta até o final do seu atendimento.
            </p>
          </div>
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-amia-dark/5 dark:shadow-black/40 aspect-square md:aspect-[4/5] border-4 md:border-8 border-white dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1498837167922-41c54334522a?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3" 
              alt="Ambiente calmo e natural" 
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16">
          <div className="bg-amia-light/20 dark:bg-slate-800/50 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] hover:bg-amia-light/40 dark:hover:bg-slate-800 transition-colors">
            <h3 className="text-2xl md:text-3xl font-bold text-amia-dark dark:text-white mb-4 md:mb-6">Nossa Missão</h3>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light leading-relaxed">Proporcionar saúde integral com acolhimento, ética e inovação, garantindo que cada paciente se sinta único, respeitado e conectado com o seu próprio bem-estar.</p>
          </div>
          <div className="bg-amia-light/20 dark:bg-slate-800/50 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] hover:bg-amia-light/40 dark:hover:bg-slate-800 transition-colors">
            <h3 className="text-2xl md:text-3xl font-bold text-amia-dark dark:text-white mb-4 md:mb-6">Nossos Valores</h3>
            <ul className="space-y-3 md:space-y-4 text-slate-600 dark:text-slate-300 text-base md:text-lg font-light">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amia-teal shrink-0" /> Tempo para ouvir e acolher</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amia-teal shrink-0" /> Excelência técnica e científica</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amia-teal shrink-0" /> Transparência e ética nas relações</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-amia-teal shrink-0" /> Inovação focada na experiência do paciente</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
