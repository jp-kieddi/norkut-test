import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FAQ />
    </>
  );
}

function PricingPage() {
  return (
    <>
      <Pricing />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/precios" element={<PricingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
