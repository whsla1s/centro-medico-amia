import { motion } from 'motion/react';

export default function Exams() {
  return (
    <div className="pt-24 md:pt-32 pb-24 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-amia-dark dark:text-white text-xs font-semibold tracking-wide uppercase mb-6 md:mb-8 border border-slate-100 dark:border-slate-700">
          Precisão e Cuidado
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-amia-dark dark:text-white mb-4 md:mb-6 tracking-tight">Exames e Diagnósticos</h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-12 md:mb-16 font-light leading-relaxed">
          Tecnologia a favor da sua tranquilidade. Realize seus exames em um ambiente calmo, seguro e com resultados rápidos para o seu médico.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl shadow-slate-200/50 dark:shadow-none transition-shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-amia-dark dark:text-white mb-3 md:mb-4">Ultrassonografia</h3>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">
              Equipamentos de última geração para acompanhamento gestacional, exames pélvicos, abdominais e muito mais, com imagens de alta definição.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Obstétrica com Doppler', 'Morfológica', 'Transvaginal', 'Abdômen Total', 'Mamas e Tireoide'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-light text-base md:text-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-amia-teal shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl shadow-slate-200/50 dark:shadow-none transition-shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-amia-dark dark:text-white mb-3 md:mb-4">Análises Clínicas</h3>
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">
              Parceria com laboratórios de referência para garantir a precisão dos seus resultados. Coleta no local em um ambiente preparado para o seu conforto.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Exames de Sangue', 'Check-up Completo', 'Testes Genéticos', 'Exames Hormonais', 'Sexagem Fetal'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-light text-base md:text-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-amia-teal shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
