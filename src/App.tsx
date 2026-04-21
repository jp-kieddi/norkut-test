import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MetaPixelTracker from './components/MetaPixelTracker';

// Pages
import Home from './pages/Home';
import Precios from './pages/Precios';
import GestionInteligente from './pages/GestionInteligente';
import Funcionalidades from './pages/Funcionalidades';
import SolicitarPartner from './pages/SolicitarPartner';
import QuieroSerPartner from './pages/QuieroSerPartner';
import Empresa from './pages/Empresa';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-[linear-gradient(180deg,#edf2f7_0px,#edf2f7_400px,#f6f5f5_1000px,#f6f5f5_100%)] dark:bg-none dark:bg-[#110c22]">
      <ScrollToTop />
      <MetaPixelTracker />
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/gestion-inteligente" element={<GestionInteligente />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/solicitar-partner" element={<SolicitarPartner />} />
          <Route path="/quiero-ser-partner" element={<QuieroSerPartner />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
