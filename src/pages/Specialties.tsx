import { motion } from 'motion/react';
import { 
  Heart, Baby, Stethoscope, Activity, Microscope, Brain, 
  UserRound, Construction, Ear, Briefcase, Bone, ShieldAlert,
  Zap, Apple, Users, GraduationCap, Dumbbell
} from 'lucide-react';

// 1. Estrutura de Dados Organizada por Categorias
const medicalSpecialties = [
  { title: "Ginecologia", icon: <Heart className="w-6 h-6" />, desc: "Cuidado integral da saúde da mulher em todas as fases." },
  { title: "Obstetrícia", icon: <Baby className="w-6 h-6" />, desc: "Acompanhamento completo e humanizado da gestação." },
  { title: "Alergista Pediatria", icon: <ShieldAlert className="w-6 h-6" />, desc: "Tratamento especializado em alergias infantis." },
  { title: "Clínico Geral", icon: <UserRound className="w-6 h-6" />, desc: "Atendimento preventivo e diagnóstico geral." },
  { title: "Dermatologia", icon: <Stethoscope className="w-6 h-6" />, desc: "Cuidados com a pele, cabelos e unhas." },
  { title: "Otorrinolaringologia", icon: <Ear className="w-6 h-6" />, desc: "Tratamento de ouvido, nariz e garganta." },
  { title: "Medicina do Trabalho", icon: <Briefcase className="w-6 h-6" />, desc: "Saúde e segurança do trabalhador." },
  { title: "Ortopedia e Traumatologia", icon: <Bone className="w-6 h-6" />, desc: "Cuidado com ossos, músculos e articulações." },
  { title: "Alergista", icon: <ShieldAlert className="w-6 h-6" />, desc: "Diagnóstico e tratamento de processos alérgicos." },
  { title: "Neuropediatra", icon: <Brain className="w-6 h-6" />, desc: "Desenvolvimento neurológico infantil." },
];

const therapySpecialties = [
  { title: "Psicologia", icon: <Brain className="w-6 h-6" />, desc: "Apoio emocional e saúde mental para todas as idades." },
  { title: "Fonoaudiologia", icon: <Zap className="w-6 h-6" />, desc: "Prevenção e terapia da fala, audição e escrita." },
  { title: "Fisioterapia Pélvica", icon: <Activity className="w-6 h-6" />, desc: "Reabilitação especializada da região pélvica." },
  { title: "Fisioterapia", icon: <Dumbbell className="w-6 h-6" />, desc: "Recuperação de movimentos e alívio de dores." },
  { title: "Neuropsicopedagogia", icon: <GraduationCap className="w-6 h-6" />, desc: "Intervenção nos processos de aprendizagem." },
  { title: "Nutrição", icon: <Apple className="w-6 h-6" />, desc: "Alimentação equilibrada e plano alimentar personalizado." },
  { title: "Terapia Ocupacional", icon: <Users className="w-6 h-6" />, desc: "Autonomia e desempenho nas atividades diárias." },
];

export default function Specialties() {
  return (
    <div className="pt-24 md:pt-32 pb-24 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-amia-dark dark:text-white mb-6 tracking-tight">
          Nossas Especialidades
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mb-12 md:mb-16 font-light leading-relaxed">
          Uma rede de profissionais dedicados a entender você por inteiro. Conectamos diferentes áreas da medicina para oferecer um plano de saúde único.
        </p>
        
        {/* Seção Médica */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-amia-teal mb-8 flex items-center gap-3">
            <Stethoscope className="w-6 h-6" /> Corpo Médico
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {medicalSpecialties.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-amia-light/50 dark:bg-slate-700 text-amia-dark dark:text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-amia-pink group-hover:text-white transition-colors">
                  {spec.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-amia-dark dark:text-white mb-3 group-hover:text-amia-pink transition-colors">{spec.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seção de Terapias */}
        <div className="pt-1 md:pt-3">
          <h2 className="text-2xl font-bold text-amia-pink mb-8 flex items-center gap-3">
            <Brain className="w-6 h-6" /> Terapias e Avaliações
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {therapySpecialties.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (idx + medicalSpecialties.length) * 0.05 }}
                className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-700 hover:shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-amia-pink/10 dark:bg-slate-700 text-amia-pink dark:text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-amia-teal group-hover:text-white transition-colors">
                  {spec.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-amia-dark dark:text-white mb-3 group-hover:text-amia-teal transition-colors">{spec.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}