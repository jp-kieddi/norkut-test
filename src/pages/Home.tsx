import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import FeatureSlider from '../components/FeatureSlider';
import CTASection from '../components/CTASection';
import IAChat from '../components/IAChat';
import FAQ from '../components/FAQ';

export default function Home() {
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
                <CTASection />
                <FAQ />
            </div>
        </>
    );
}
