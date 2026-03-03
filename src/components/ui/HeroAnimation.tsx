import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ShoppingCart, Activity, Wallet, Megaphone, Store, Network } from 'lucide-react';
import appScreenshot from '../../assets/app-dashboard.png';
import IAConnectionAnimation from './IAConnectionAnimation';

const boxes = [
    { title: 'Operaciones y abastecimiento', icon: <ShoppingCart className="w-5 h-5 text-primary" />, position: 'top-[15%] left-[-5%]' },
    { title: 'Ventas y POS', icon: <Activity className="w-5 h-5 text-primary" />, position: 'top-[45%] left-[-10%]' },
    { title: 'Finanzas y Administración', icon: <Wallet className="w-5 h-5 text-primary" />, position: 'top-[75%] left-[-5%]' },
    { title: 'Marketing & Clientes', icon: <Megaphone className="w-5 h-5 text-primary" />, position: 'top-[15%] right-[-5%]' },
    { title: 'Gestión de puntos de venta', icon: <Store className="w-5 h-5 text-primary" />, position: 'top-[45%] right-[-10%]' },
    { title: 'Franquicias & Holding', icon: <Network className="w-5 h-5 text-primary" />, position: 'top-[75%] right-[-5%]' },
];

function AnimatedPhrases() {
    const phrases = [
        'Operaciones y abastecimiento',
        'Ventas y POS',
        'Finanzas y Administración',
        'Marketing & Clientes',
        'Gestión de puntos de venta',
        'Franquicias & Holding'
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => i + 1);
        }, 2000); // changes every 2s
        return () => clearInterval(timer);
    }, []);

    const currentIndex = index % phrases.length;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center text-center px-4"
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight text-foreground max-w-4xl leading-tight">
                    {phrases[currentIndex]}
                </h3>
            </motion.div>
        </AnimatePresence>
    );
}

export default function HeroAnimation() {
    const [step, setStep] = useState(0);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        // Pausar la animación si el video está abierto
        if (isVideoOpen) return;

        let duration = 0;
        if (step === 0) duration = 5000; // Total phase 0 duration
        else if (step === 1) duration = 7000; // Phrase 1
        else if (step === 2) duration = 7000; // IA Component
        else if (step === 3) duration = 12000; // Animated phrases (6 * 2000ms)
        else if (step === 4) duration = 7000; // Final phrase

        const timer = setTimeout(() => {
            setStep((s) => (s + 1) % 5);
        }, duration);

        return () => clearTimeout(timer);
    }, [step, isVideoOpen]);

    const handleOpenVideo = () => {
        setIsVideoOpen(true);
    };

    return (
        <div className="bg-white relative w-full max-w-5xl mx-auto h-[450px] md:h-[600px] flex items-center justify-center cursor-pointer border-1 border-gray-100 hover:border-orange-400 rounded-4xl shadow-md hover:shadow-2xl transition-shadow duration-300" onClick={handleOpenVideo}>
            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="step0"
                        className="relative w-full h-full flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {/* Floating Image */}
                        <motion.img
                            src={appScreenshot}
                            alt="Norkut App"
                            className="absolute object-contain w-[85%] h-auto rounded-xl drop-shadow-2xl"
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Animated Boxes */}
                        {boxes.map((box, idx) => (
                            <motion.div
                                key={idx}
                                className={`absolute ${box.position} px-4 py-3 rounded-2xl shadow-xl border border-zinc-100/50 flex items-center gap-3 w-max max-w-[200px] md:max-w-xs z-10 backdrop-blur-md bg-white/90`}
                                initial={{ opacity: 0, y: 20, scale: 1.3 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}

                                exit={{ opacity: 0, y: 20, scale: 0.3 }}
                            >
                                <div className="p-2 bg-orange-50 rounded-lg shrink-0">
                                    {box.icon}
                                </div>
                                <span className="font-semibold text-md md:text-lg text-zinc-800 leading-tight">
                                    {box.title}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="step1"
                        className="absolute inset-0 flex items-center justify-center text-center px-4"
                        initial={{ opacity: 0, scale: 0.3, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.3, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl leading-tight">
                            La gestión de todo tu inventario <br></br><span className="text-primary">potenciada con IA</span>
                        </h3>
                    </motion.div>

                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={{ opacity: 1, scale: 1.3 }}
                        exit={{ opacity: 0, scale: 2.2 }}
                        transition={{ duration: 1.4 }}
                    >
                        <div className="w-full scale-75 md:scale-100 flex justify-center items-center pointer-events-none">
                            <IAConnectionAnimation />
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <AnimatedPhrases />
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="step4"
                        className="absolute inset-0 flex items-center justify-center text-center px-4"
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, filter: 'blur(10px)' }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl leading-tight">
                            Llevá tu gestión comercial al <span className="text-primary bg-orange-100 rounded-lg px-3 py-1 ml-1 inline-block -rotate-2">próximo nivel</span>
                        </h3>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Button Bottom Right for Steps 1, 2, 3 */}
            <AnimatePresence>
                {step > 0 && (
                    <motion.div
                        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                    >
                        <button className="group relative inline-flex items-center gap-4 rounded-full overflow-hidden bg-linear-to-r from-[#ff801f] to-[#f56e0f] py-2.5 pl-8 pr-2.5 font-semibold text-white shadow-[0_10px_30px_-6px_rgba(255,128,31,0.6)] hover:brightness-105 transition-all">
                            <span className="relative z-10 text-base md:text-lg font-bold tracking-wide">Ver video</span>
                            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#ff801f] shadow-sm">
                                <Play className="h-5 w-5 ml-1" strokeWidth={2.5} />
                            </div>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* YouTube Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-sm cursor-default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsVideoOpen(false);
                        }}
                    >
                        <motion.div
                            className="bg-zinc-900 rounded-2xl w-full max-w-5xl aspect-video relative overflow-hidden shadow-2xl border border-zinc-800"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white backdrop-blur-md"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsVideoOpen(false);
                                }}
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/ZK-rNEhJIDs?autoplay=1"
                                title="Norkut Platform"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
