import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import CTAButton from './ui/CTAButton';
import HeroAnimation from './ui/HeroAnimation';

const words = ['Anticipa', 'Resuelve', 'Planifica', 'Proyecta'];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse-slow"></div>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
                <div className="w-[2000px] h-[1200px] bg-gray-300/30 rounded-full blur-[80px] mix-blend-multiply opacity-50"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">


                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
                        <span className="block h-[1.2em] relative overflow-hidden text-primary">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[index]}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -50, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute inset-0 flex justify-center"
                                >
                                    {words[index]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        la gestión de tu inventario con Norkut
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        Norkut es la plataforma que centraliza la complejidad operativa de tu negocio. Potenciada por una inteligencia que aprende, razona y anticipa decisiones mientras operas.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <CTAButton className="px-6 py-2.5 text-lg">
                            Comienza gratis hoy
                        </CTAButton>
                        <button className="px-8 py-3 bg-white text-zinc-700 text-base font-semibold rounded-full shadow-sm border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all">
                            Solicitar una demo
                        </button>
                    </div>

                    <div className="mt-8 text-sm text-zinc-400 font-medium flex items-center justify-center gap-6">
                        <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Sin tarjeta de crédito</div>
                        <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Configuración en 5 min</div>
                    </div>
                </div>
            </div>

            {/* Animated Loop Section with Video Modal */}
            <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24 relative z-10 overflow-visible">
                <HeroAnimation />
            </div>

        </section>
    );
}
