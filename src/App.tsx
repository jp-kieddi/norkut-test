import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import FeatureBlocks from './components/FeatureBlocks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-zinc-50 shadow-[0_-20px_50px_-5px_rgba(0,0,0,0.05)]">
        <VideoSection />
        <FeatureBlocks />
        <Features />
        <FAQ />
      </div>
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
      <main className="grow">
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
