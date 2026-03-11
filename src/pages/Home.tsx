import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Heart, Activity, Baby, Stethoscope, Microscope, Play, MapPin, Phone, Mail, Brain, Music, Speech, HandHeart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center pt-32 pb-16 md:pt-20 md:pb-0 bg-amia-light/30 dark:bg-slate-900">
        <div className="absolute top-0 right-0 w-full md:w-1/3 h-[60%] md:h-full bg-amia-teal/5 dark:bg-amia-teal/10 -z-10 rounded-bl-[80px] md:rounded-bl-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl pt-8 md:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-amia-dark dark:text-white text-xs font-semibold tracking-wide uppercase mb-6 md:mb-8 border border-slate-100 dark:border-slate-700">
              <span className="w-2 h-2 rounded-full bg-amia-pink animate-pulse" />
              Saúde única e personalizada
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-amia-dark dark:text-white tracking-tight leading-[1.1] md:leading-[1.05] mb-6">
              Sua saúde, <br/><span className="text-amia-teal">no seu tempo.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-lg font-light">
              Conecte-se com você mesmo. Oferecemos uma medicina que respeita sua individualidade, trazendo calma e precisão para o seu cuidado.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link to="/agendamento" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group text-base md:text-lg px-8">
                  Começar agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-amia-light overflow-hidden shadow-sm">
                    <img 
                      src={`https://picsum.photos/seed/wellness${i}/100/100`} 
                      alt="Paciente" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amia-teal mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />)}
                </div>
                <p className="text-xs md:text-sm text-slate-600 font-medium">
                  Mais de 5.000 vidas transformadas
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-amia-dark/5 dark:shadow-black/40 aspect-[3/4] border-8 border-white dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3" 
                alt="Pessoa em momento de calma e wellness" 
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50 dark:border-slate-700/50">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-amia-pink/10 text-amia-pink rounded-2xl">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-amia-dark dark:text-white text-lg">Cuidado Integral</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Olhamos para você por inteiro, conectando corpo, mente e natureza.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Saúde Preventiva",
                desc: "Focamos em manter você saudável, não apenas em tratar doenças."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Time de Saúde",
                desc: "Profissionais que conhecem sua história e acompanham sua jornada."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Espaço de Calma",
                desc: "Ambientes desenhados para reduzir o estresse e promover o bem-estar."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-start p-10 rounded-[2rem] bg-amia-light/20 dark:bg-slate-800/50 hover:bg-amia-light/40 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="text-amia-teal mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-amia-dark dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-24 md:py-32 bg-amia-light/30 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-amia-dark dark:text-white mb-6 tracking-tight">Tudo o que você precisa</h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light">
              Uma rede de cuidado completa, pronta para atender você de forma personalizada e integrada.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Saúde da Mulher", icon: <Heart className="w-6 h-6" />, desc: "Acolhimento e precisão em todas as fases da sua vida." },
              { title: "Maternidade", icon: <Baby className="w-6 h-6" />, desc: "Acompanhamento humanizado da gestação ao parto." },
              { title: "Pediatria", icon: <Baby className="w-6 h-6" />, desc: "Cuidado especial para o desenvolvimento dos pequenos." },
              { title: "Terapias Integradas", icon: <Brain className="w-6 h-6" />, desc: "Psicologia, fonoaudiologia, musicoterapia e terapia ocupacional." },
              { title: "Clínica Geral", icon: <Activity className="w-6 h-6" />, desc: "A visão do todo para o seu bem-estar contínuo." },
              { title: "Diagnósticos", icon: <Microscope className="w-6 h-6" />, desc: "Tecnologia a favor da sua tranquilidade." },
            ].map((spec, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-sm hover:shadow-xl shadow-slate-200/50 dark:shadow-none transition-all border border-slate-50 dark:border-slate-700 group cursor-pointer hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-amia-light/50 dark:bg-slate-700 text-amia-dark dark:text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amia-pink group-hover:text-white transition-colors">
                  {spec.icon}
                </div>
                <h3 className="text-2xl font-bold text-amia-dark dark:text-white mb-4">{spec.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8">{spec.desc}</p>
                <span className="text-amia-pink font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wide">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <Link to="/especialidades">
              <Button variant="outline" size="lg" className="px-8 text-lg rounded-full">Ver todas as especialidades</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Women's Health Highlight */}
      <section className="py-24 md:py-32 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-amia-dark dark:bg-slate-800 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-amia-teal/20 dark:bg-amia-teal/10 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="text-white">
                <div className="inline-block px-4 py-2 rounded-full bg-amia-pink text-white text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-lg shadow-amia-pink/20">
                  Núcleo Especializado
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight">
                  Saúde da Mulher:<br/>
                  <span className="text-amia-pink">Nossa Prioridade.</span>
                </h2>
                <p className="text-slate-200 text-lg md:text-xl mb-8 md:mb-10 leading-relaxed max-w-md font-light">
                  Um espaço desenhado para acolher, ouvir e cuidar. Da prevenção ao tratamento, oferecemos tecnologia e empatia para todas as fases da sua vida.
                </p>
                <Link to="/saude-mulher" className="block w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-white !text-amia-dark hover:bg-amia-light font-bold border-none text-base md:text-lg px-8 py-4 md:py-6 h-auto rounded-full shadow-xl">
                    Conhecer o Núcleo
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-4 border-white/10 bg-slate-800/50 backdrop-blur-sm">
                   <img 
                    src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3" 
                    alt="Cuidado materno" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl max-w-[240px] hidden md:block border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-amia-pink" />
                    <span className="text-sm font-bold text-amia-dark dark:text-white uppercase tracking-wide">Pré-Natal</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Acompanhamento completo e humanizado para uma gestação tranquila.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="py-24 bg-amia-light/20 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-amia-dark/10 dark:shadow-black/40 group cursor-pointer"
            >
              <div className="aspect-video relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3" 
                  alt="Tour pela Clínica" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-amia-dark/20 dark:bg-slate-900/40 group-hover:bg-amia-dark/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-amia-teal ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-amia-dark dark:text-white text-xs font-semibold tracking-wide uppercase mb-6 border border-slate-100 dark:border-slate-700">
                Nossa Estrutura
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-amia-dark dark:text-white mb-6 tracking-tight">
                Um ambiente pensado para o seu bem-estar
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 font-light leading-relaxed">
                Faça um tour pela Amia e descubra um espaço onde a arquitetura e a natureza se encontram para criar uma experiência de saúde mais calma, acolhedora e humana.
              </p>
              <Link to="/estrutura">
                <Button variant="outline" className="rounded-full px-8 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800">
                  Conhecer em detalhes
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hermes Pardini Partnership */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">Parceria de Excelência em Diagnósticos</p>
          <div className="flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            {/* Placeholder for Hermes Pardini Logo */}
            <div className="flex items-center gap-3 text-2xl font-bold text-slate-800 dark:text-slate-200">
              <Microscope className="w-8 h-8 text-amia-dark dark:text-amia-teal" />
              Hermes Pardini
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Location & Contact Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amia-light/50 dark:bg-slate-800 text-amia-dark dark:text-white text-xs font-semibold tracking-wide uppercase mb-6">
                Como Chegar
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-amia-dark dark:text-white mb-6 tracking-tight">
                Estamos perto de você
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 font-light leading-relaxed">
                Nossa clínica está localizada em uma região de fácil acesso, com estacionamento no local e estrutura completa para receber você com todo o conforto.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amia-light/50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-amia-teal shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amia-dark dark:text-white text-lg mb-1">Endereço</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light">Tv. Benjamin Constant, 1189 - Centro<br/>Santa Izabel do Pará - PA</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amia-light/50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-amia-teal shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amia-dark dark:text-white text-lg mb-1">Contato</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light">+55 91 99222-6459 (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amia-light/50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-amia-teal shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amia-dark dark:text-white text-lg mb-1">E-mail</h4>
                    <p className="text-slate-600 dark:text-slate-400 font-light">contato@amia.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.667664539169!2d-48.09348982414234!3d-1.376081498610996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a5c37021e1029b%3A0x6a0f6a29e925c48b!2sTv.%20Benjamin%20Constant%2C%201189%20-%20Centro%2C%20Santa%20Izabel%20do%20Par%C3%A1%20-%20PA%2C%2068790-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-90 dark:opacity-70 dark:invert dark:hue-rotate-180 transition-all duration-500 hover:grayscale-0 hover:opacity-100 dark:hover:invert-0 dark:hover:hue-rotate-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* TO-DO: Reativar CTA Section quando a página de agendamento estiver pronta */}
      {/* <section className="py-32 bg-amia-light/30 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-amia-dark dark:text-white mb-8 tracking-tight">
            Pronto para cuidar de você?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 font-light">
            Agende sua consulta de forma rápida e prática. Nossa equipe está pronta para receber você e sua família em um ambiente de calma e cuidado.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/agendamento" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-lg px-10 rounded-full">Agendar via WhatsApp</Button>
            </Link>
            <Link to="/contato" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full bg-white dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 text-lg px-10 rounded-full">Ver Convênios</Button>
            </Link>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
