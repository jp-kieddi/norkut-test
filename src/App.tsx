import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import FeatureSlider from './components/FeatureSlider';
import Features from './components/Features';
import IAChat from './components/IAChat';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10">
        {/* Sticky wrapper for VideoSection to allow IAChat to pass over it */}
        <div className="relative">
          <div className="sticky top-0 md:top-10 z-0">
            <VideoSection />
          </div>
          <IAChat />
        </div>
        <FeatureSlider />
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
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-[linear-gradient(180deg,#edf2f7_0px,#edf2f7_400px,#f6f5f5_1000px,#f6f5f5_100%)] dark:bg-none dark:bg-[#110c22]">
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
