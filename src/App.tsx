/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navbar, Footer } from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Specialties = lazy(() => import('./pages/Specialties'));
const WomensHealth = lazy(() => import('./pages/WomensHealth'));
const Exams = lazy(() => import('./pages/Exams'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Blog = lazy(() => import('./pages/Blog'));
const Scheduling = lazy(() => import('./pages/Scheduling'));
const PatientArea = lazy(() => import('./pages/PatientArea'));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-amia-light border-t-amia-teal rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-slate-50/50">
        <Navbar />
        <main className="flex-grow pb-20 lg:pb-0">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/especialidades" element={<Specialties />} />
              <Route path="/saude-mulher" element={<WomensHealth />} />
              <Route path="/exames" element={<Exams />} />
              <Route path="/estrutura" element={<Facilities />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/agendamento" element={<Scheduling />} />
              <Route path="/contato" element={<Scheduling />} />
              <Route path="/area-paciente" element={<PatientArea />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
