import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Scheduling() {
  return (
    <div className="pt-24 md:pt-32 pb-24 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid lg:grid-cols-2 gap-12 md:gap-16"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-amia-dark dark:text-white text-xs font-semibold tracking-wide uppercase mb-6 md:mb-8 border border-slate-100 dark:border-slate-700">
            Seu Momento
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-amia-dark dark:text-white mb-4 md:mb-6 tracking-tight">Agende sua Consulta</h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 md:mb-12 font-light leading-relaxed">
            Estamos prontos para receber você. Escolha o canal de sua preferência ou preencha o formulário para iniciarmos o seu cuidado.
          </p>
          
          <div className="space-y-6 md:space-y-8 mb-12">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amia-light/50 dark:bg-slate-800 text-amia-dark dark:text-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-amia-dark dark:text-white mb-1 md:mb-2">Telefones</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light">(11) 99999-9999 (WhatsApp)</p>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light">(11) 3333-3333</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amia-light/50 dark:bg-slate-800 text-amia-dark dark:text-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-amia-dark dark:text-white mb-1 md:mb-2">Horário de Atendimento</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light">Segunda a Sexta: 07h às 19h</p>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light">Sábado: 08h às 12h</p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amia-light/50 dark:bg-slate-800 text-amia-dark dark:text-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-amia-dark dark:text-white mb-1 md:mb-2">Localização</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light">Rua das Flores, 123 - Centro</p>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg font-light">Cidade - SP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
          <h2 className="text-2xl md:text-3xl font-bold text-amia-dark dark:text-white mb-6 md:mb-8">Solicitação Online</h2>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 md:mb-2 uppercase tracking-wider">Nome Completo</label>
              <input type="text" className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-amia-dark dark:text-white focus:border-amia-pink focus:ring-2 focus:ring-amia-pink/20 outline-none transition-all text-base md:text-lg font-light" placeholder="Como prefere ser chamado(a)?" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 md:mb-2 uppercase tracking-wider">Telefone</label>
                <input type="tel" className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-amia-dark dark:text-white focus:border-amia-pink focus:ring-2 focus:ring-amia-pink/20 outline-none transition-all text-base md:text-lg font-light" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 md:mb-2 uppercase tracking-wider">E-mail</label>
                <input type="email" className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-amia-dark dark:text-white focus:border-amia-pink focus:ring-2 focus:ring-amia-pink/20 outline-none transition-all text-base md:text-lg font-light" placeholder="seu@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 md:mb-2 uppercase tracking-wider">Especialidade Desejada</label>
              <select className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-amia-dark dark:text-white focus:border-amia-pink focus:ring-2 focus:ring-amia-pink/20 outline-none transition-all text-base md:text-lg font-light appearance-none">
                <option>Selecione a área de cuidado...</option>
                <option>Ginecologia</option>
                <option>Obstetrícia</option>
                <option>Pediatria</option>
                <option>Dermatologia</option>
                <option>Clínica Geral</option>
                <option>Exames</option>
              </select>
            </div>
            <div>
              <label className="block text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5 md:mb-2 uppercase tracking-wider">Mensagem (Opcional)</label>
              <textarea className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-amia-dark dark:text-white focus:border-amia-pink focus:ring-2 focus:ring-amia-pink/20 outline-none transition-all h-24 md:h-32 resize-none text-base md:text-lg font-light" placeholder="Alguma preferência de horário ou dúvida inicial?"></textarea>
            </div>
            <Button size="lg" className="w-full mt-2 md:mt-4 bg-amia-pink hover:bg-amia-pink/90 text-base md:text-lg py-4 md:py-6 rounded-xl md:rounded-2xl">Enviar Solicitação</Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
