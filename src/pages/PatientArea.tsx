import { motion } from 'motion/react';
import { FileText, Calendar, Activity, Bell, ChevronRight, User } from 'lucide-react';

export default function PatientArea() {
  return (
    <div className="pt-24 md:pt-32 pb-24 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between gap-4 mb-8 md:mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-amia-dark dark:text-white mb-1 md:mb-2 tracking-tight">Olá, Mariana</h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-light">Bem-vinda à sua área de saúde integrada.</p>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-center text-slate-400 dark:text-slate-300 hover:text-amia-teal dark:hover:text-amia-teal transition-colors relative">
              <Bell className="w-4 h-4 md:w-5 md:h-5" />
              <span className="absolute top-2.5 right-2.5 md:top-3 md:right-3 w-2 h-2 bg-amia-pink rounded-full"></span>
            </button>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amia-light/50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-center text-amia-dark dark:text-white">
              <User className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Next Appointment */}
            <div className="bg-amia-pink text-white p-6 md:p-8 rounded-[2rem] shadow-lg shadow-amia-pink/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <h3 className="text-base md:text-lg font-medium mb-4 md:mb-6 opacity-90">Próxima Consulta</h3>
              <div className="flex items-center gap-4 md:gap-6 relative z-10">
                <div className="bg-white/20 p-3 md:p-4 rounded-2xl backdrop-blur-sm text-center min-w-[70px] md:min-w-[80px]">
                  <span className="block text-xs md:text-sm font-medium uppercase tracking-wider mb-1">Out</span>
                  <span className="block text-2xl md:text-3xl font-bold">15</span>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-1">Ginecologia Preventiva</h4>
                  <p className="text-sm md:text-base opacity-90 font-light">Dra. Ana Beatriz • 14:30</p>
                </div>
              </div>
            </div>

            {/* Recent Exams */}
            <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-amia-dark dark:text-white">Resultados de Exames</h3>
                <button className="text-amia-teal font-medium text-sm hover:underline">Ver todos</button>
              </div>
              <div className="space-y-3 md:space-y-4">
                {[
                  { name: "Hemograma Completo", date: "10 Out 2024", status: "Disponível", icon: <Activity className="w-5 h-5" /> },
                  { name: "Ultrassonografia Pélvica", date: "05 Out 2024", status: "Disponível", icon: <FileText className="w-5 h-5" /> },
                  { name: "Perfil Hormonal", date: "15 Set 2024", status: "Visualizado", icon: <Activity className="w-5 h-5" /> }
                ].map((exam, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-600 cursor-pointer group gap-4 sm:gap-0">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 ${exam.status === 'Disponível' ? 'bg-amia-teal/10 text-amia-teal' : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-300'}`}>
                        {exam.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-amia-dark dark:text-white mb-0.5 md:mb-1 text-sm md:text-base">{exam.name}</h4>
                        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">{exam.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pl-14 sm:pl-0">
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${exam.status === 'Disponível' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300'}`}>
                        {exam.status}
                      </span>
                      <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-500 group-hover:text-amia-teal dark:group-hover:text-amia-teal transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-amia-dark dark:text-white mb-6">Ações Rápidas</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 rounded-2xl bg-amia-light/30 dark:bg-slate-700/50 hover:bg-amia-light/50 dark:hover:bg-slate-700 transition-colors text-center group">
                  <div className="w-10 h-10 mx-auto bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-amia-dark dark:text-white mb-3 shadow-sm group-hover:scale-110 transition-transform">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-amia-dark dark:text-white">Agendar</span>
                </button>
                <button className="p-4 rounded-2xl bg-amia-light/30 dark:bg-slate-700/50 hover:bg-amia-light/50 dark:hover:bg-slate-700 transition-colors text-center group">
                  <div className="w-10 h-10 mx-auto bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-amia-dark dark:text-white mb-3 shadow-sm group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-amia-dark dark:text-white">Receitas</span>
                </button>
              </div>
            </div>

            {/* Health Summary */}
            <div className="bg-amia-dark text-white p-8 rounded-[2rem] shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
              <h3 className="text-xl font-bold mb-6">Resumo de Saúde</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="font-light opacity-80">Tipo Sanguíneo</span>
                  <span className="font-bold">O+</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="font-light opacity-80">Alergias</span>
                  <span className="font-bold">Nenhuma</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-light opacity-80">Peso/Altura</span>
                  <span className="font-bold">65kg / 1.68m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
