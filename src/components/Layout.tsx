import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, ArrowRight, User, Home as HomeIcon, Heart, FileText, Mail, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors" aria-label="Alternar tema">
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Especialidades', path: '/especialidades' },
    { name: 'Saúde da Mulher', path: '/saude-mulher' },
    { name: 'Exames', path: '/exames' },
    { name: 'Estrutura', path: '/estrutura' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-slate-800/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-amia-teal rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amia-teal/20 group-hover:scale-105 transition-transform">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-amia-dark dark:text-white leading-none font-primary">AMIA</span>
            <span className="text-[10px] font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase leading-none mt-1">O jeito Amia de cuidar</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-amia-teal dark:hover:text-amia-teal ${
                location.pathname === link.path ? 'text-amia-teal dark:text-amia-teal' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          
          {/* TO-DO: Reativar quando o backend de pacientes e agendamento estiver pronto */}
          {/* <Link
            to="/area-paciente"
            className="px-5 py-2.5 text-amia-dark dark:text-white text-sm font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 border border-slate-200 dark:border-slate-700"
          >
            <User className="w-4 h-4" />
            Área do Paciente
          </Link>
          <Link
            to="/agendamento"
            className="px-6 py-2.5 bg-amia-pink text-white text-sm font-medium rounded-full hover:bg-amia-pink/90 transition-colors shadow-lg shadow-amia-pink/20 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Agendar
          </Link>
          */}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-slate-900/50 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* TO-DO: Reativar links mobile do paciente */}
              {/*
              <div className="h-px bg-slate-100 dark:bg-slate-800 my-4" />
              <Link
                to="/area-paciente"
                className="w-full py-4 px-4 flex items-center justify-center gap-2 text-amia-dark dark:text-white font-medium rounded-xl border-2 border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <User className="w-5 h-5" />
                Área do Paciente
              </Link>
              <Link
                to="/agendamento"
                className="mt-2 w-full py-4 px-4 bg-amia-pink text-white flex items-center justify-center gap-2 font-medium rounded-xl shadow-lg shadow-amia-pink/20"
              >
                <Calendar className="w-5 h-5" />
                Agendar Consulta
              </Link>
              */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-slate-900/50 z-50 pb-safe">
        <div className="flex items-center justify-around px-2 py-3">
          <Link to="/" className={`flex flex-col items-center gap-1 p-2 ${location.pathname === '/' ? 'text-amia-teal dark:text-amia-teal' : 'text-slate-400 dark:text-slate-500'}`}>
            <HomeIcon className="w-6 h-6" />
            <span className="text-[10px] font-medium">Início</span>
          </Link>
          <Link to="/especialidades" className={`flex flex-col items-center gap-1 p-2 ${location.pathname === '/especialidades' ? 'text-amia-teal dark:text-amia-teal' : 'text-slate-400 dark:text-slate-500'}`}>
            <Heart className="w-6 h-6" />
            <span className="text-[10px] font-medium">Especialidades</span>
          </Link>
          
          {/* TO-DO: Reativar ícone central de Agendamento */}
          {/*
          <Link to="/agendamento" className="flex flex-col items-center gap-1 p-2 -mt-6">
            <div className="w-14 h-14 bg-amia-pink rounded-full flex items-center justify-center text-white shadow-lg shadow-amia-pink/30 border-4 border-white dark:border-slate-900">
              <Calendar className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-medium text-amia-pink mt-1">Agendar</span>
          </Link>
          */}
          
          <Link to="/exames" className={`flex flex-col items-center gap-1 p-2 ${location.pathname === '/exames' ? 'text-amia-teal dark:text-amia-teal' : 'text-slate-400 dark:text-slate-500'}`}>
            <FileText className="w-6 h-6" />
            <span className="text-[10px] font-medium">Exames</span>
          </Link>
          
          {/* TO-DO: Reativar ícone de Perfil */}
          {/*
          <Link to="/area-paciente" className={`flex flex-col items-center gap-1 p-2 ${location.pathname === '/area-paciente' ? 'text-amia-teal dark:text-amia-teal' : 'text-slate-400 dark:text-slate-500'}`}>
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">Perfil</span>
          </Link>
          */}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-20 pb-24 lg:pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-amia-dark dark:bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <span className="text-lg font-bold text-amia-dark dark:text-white font-primary">AMIA</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
            Conheça o jeito Amia de cuidar.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-amia-pink hover:text-white text-slate-400 dark:text-slate-500 transition-all flex items-center justify-center shadow-sm">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://wa.me/5591992226459" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-amia-teal hover:text-white text-slate-400 dark:text-slate-500 transition-all flex items-center justify-center shadow-sm">
              <span className="sr-only">WhatsApp</span>
              <Phone className="w-5 h-5" />
            </a>
            <a href="mailto:contato@amia.com.br" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-amia-teal hover:text-white text-slate-400 dark:text-slate-500 transition-all flex items-center justify-center shadow-sm">
              <span className="sr-only">E-mail</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-amia-dark dark:text-white mb-6">Clínica</h4>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li><Link to="/sobre" className="hover:text-amia-teal dark:hover:text-amia-teal transition-colors">Sobre Nós</Link></li>
            <li><Link to="/estrutura" className="hover:text-amia-teal dark:hover:text-amia-teal transition-colors">Nossa Estrutura</Link></li>
            <li><Link to="/blog" className="hover:text-amia-teal dark:hover:text-amia-teal transition-colors">Blog & Notícias</Link></li>
            <li><Link to="/agendamento" className="hover:text-amia-teal dark:hover:text-amia-teal transition-colors">Trabalhe Conosco</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-amia-dark dark:text-white mb-6">Especialidades</h4>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li><Link to="/saude-mulher" className="hover:text-amia-teal dark:hover:text-amia-teal transition-colors">Saúde da Mulher</Link></li>
            <li><Link to="/especialidades" className="hover:text-amia-teal dark:hover:text-amia-teal transition-colors">Pediatria</Link></li>
            <li><Link to="/especialidades" className="hover:text-amia-teal dark:hover:text-amia-teal transition-colors">Dermatologia</Link></li>
            <li><Link to="/exames" className="hover:text-amia-teal dark:hover:text-amia-teal transition-colors">Ultrassonografia</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-amia-dark dark:text-white mb-6">Contato</h4>
          <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-0.5 text-amia-teal shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="https://wa.me/5591992226459" className="hover:text-amia-teal dark:hover:text-amia-teal transition-colors">+55 91 99222-6459 (WhatsApp)</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 text-amia-teal shrink-0 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <a href="mailto:contato@amia.com.br" className="hover:text-amia-teal dark:hover:text-amia-teal transition-colors">contato@amia.com.br</a>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 text-amia-teal shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <span>Tv. Benjamin Constant, 1189 - Centro<br/>Santa Izabel do Pará - PA</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-slate-400 dark:text-slate-500 text-center md:text-left">
          <p className="font-medium text-slate-500 dark:text-slate-400 mb-1">Centro Médico Amia LTDA</p>
          <p>CNPJ: 49.488.403/0001-10</p>
          <p className="mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-6 text-xs text-slate-400 dark:text-slate-500">
          <Link to="#" className="hover:text-slate-600 dark:hover:text-slate-300">Privacidade</Link>
          <Link to="#" className="hover:text-slate-600 dark:hover:text-slate-300">Termos</Link>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };