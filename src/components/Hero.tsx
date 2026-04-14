import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import heroLight from '../assets/hero-light.svg';
import heroDark from '../assets/hero-dark.svg';

const words = ['Anticipa', 'Resuelve', 'Planifica', 'Proyecta'];



export default function Hero() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const headlineTimer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);

        return () => {
            clearInterval(headlineTimer);
        };
    }, []);

    return (
        <section className="hero-section relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            {/* Soft Ambient Orbs Matching Image Background */}
            <div className="hero-orb absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#e2ecf7] rounded-full blur-[120px] pointer-events-none opacity-80" />
            {/* Transition to next section base color gracefully handled by next component */}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    <div className="flex flex-col items-start">
                        <h1 className="text-5xl md:text-3xl lg:text-[45px] font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">

                            Convierte la operación de tu retail en decisiones inteligentes
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-10 max-w-lg">
                            Norkut convierte tus datos en decisiones que impulsan ventas, margen y control.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <CTAButton>
                                Comienza gratis hoy
                            </CTAButton>
                            <button className="px-8 h-[48px] bg-transparent border border-zinc-200/80 text-zinc-700 text-[15.5px] font-medium rounded-full hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all outline-none flex items-center justify-center shrink-0">
                                Solicitar una demo
                            </button>
                        </div>

                        <div className="mt-5 text-[14px] text-zinc-500 font-medium flex items-center gap-5">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-[16px] h-[16px] text-[#F97A22]" strokeWidth={1.5} />
                                Sin tarjetas
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-[16px] h-[16px] text-[#F97A22]" strokeWidth={1.5} />
                                Sin instalaciones
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Dashboard SVG Animated ── */}
                    <div className="hero-dashboard relative hidden lg:block h-full">
                        <div className="relative left-0 w-[160%] max-w-none">
                            <motion.div
                                className="relative w-full rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] border border-black/5 dark:border-white/10 transition-shadow duration-500"
                                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 1, type: "spring", bounce: 0.15 }}
                            >
                                {/* Shimmer Sweep Laser Animation */}
                                <motion.div
                                    className="absolute top-0 bottom-0 w-[120%] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)] dark:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] skew-x-[-25deg] z-20 pointer-events-none"
                                    animate={{ left: ["-100%", "200%", "200%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                />

                                {/* Light Mode SVG */}
                                <img
                                    src={heroLight}
                                    alt="Norkut Dashboard Preview"
                                    className="w-full h-auto object-cover opacity-100 dark:hidden"
                                    draggable={false}
                                />

                                {/* Dark Mode SVG */}
                                <img
                                    src={heroDark}
                                    alt="Norkut Dashboard Dark Preview"
                                    className="w-full h-auto object-cover opacity-100 hidden dark:block"
                                    draggable={false}
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
