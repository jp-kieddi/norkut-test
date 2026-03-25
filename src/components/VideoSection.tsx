import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowRight } from 'lucide-react';
import LogoISO from './LogoISO';
import videoNorkut from '../assets/video-norkut.jpg';

export default function VideoSection() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="video-section pt-20 pb-20 md:pt-16 md:pb-28 px-4 md:px-6 flex flex-col justify-center relative overflow-hidden bg-linear-to-b from-zinc-100 to-zinc-50">

            <div className="container mx-auto relative z-10">
                {/* Intro Title */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 text-[#F97A22] text-sm font-bold tracking-wide mb-6 border border-orange-200/50">
                        <Play className="w-3.5 h-3.5 fill-current" /> Ver demostración
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.15]">
                        Toda la gestión de tu negocio <br></br>en una sola app
                    </h2>
                </div>

                {/* Cinematic Glass Player */}
                <div className="relative max-w-6xl mx-auto px-2 md:px-4">
                    {/* Immersive Ambient Glow Behind Player */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-linear-to-r from-orange-500/20 to-purple-500/20 blur-[120px] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />

                    {/* Outer Bezel (Sleek hardware/software frame) */}
                    <div
                        className="group relative rounded-4xl md:rounded-[2.5rem] p-2 md:p-3 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(249,122,34,0.15)] hover:-translate-y-1"
                        onClick={() => setIsVideoOpen(true)}
                    >
                        {/* Inner Screen */}
                        <div className="relative rounded-3xl md:rounded-3xl overflow-hidden aspect-video md:aspect-21/9 bg-zinc-900 ring-1 ring-black/5">
                            {/* Video Snapshot */}
                            <img
                                src={videoNorkut}
                                alt="Video Thumbnail"
                                className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-1000 group-hover:scale-105"
                            />

                            {/* Gradients to pop UI */}
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />

                            {/* Massive Center Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:bg-[#F97A22] group-hover:border-[#F97A22] transition-all duration-500 transform group-hover:scale-110">
                                    <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-white ml-2 drop-shadow-md transition-transform duration-500" />
                                </div>
                            </div>

                            {/* Bottom Dark-Glass HUD (Heads-up Display) */}
                            <div className="absolute bottom-0 inset-x-0 p-5 md:p-8 flex items-end justify-between gap-6 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                {/* Sleek Question Pill */}
                                <div className="bg-black/30 backdrop-blur-2xl px-5 py-3 md:px-7 md:py-4 rounded-2xl flex items-center gap-4 md:gap-5 border border-white/10 shadow-2xl overflow-hidden w-full md:w-auto">
                                    {/* Shimmer sweep inside glass */}
                                    <motion.div
                                        className="absolute top-0 bottom-0 -left-full w-[80%] bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] z-0"
                                        animate={{ left: ["-100%", "200%", "200%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    />

                                    <LogoISO className="h-6 md:h-8 w-auto relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                                    <div className="h-6 md:h-9 w-px bg-white/20 relative z-10 shrink-0" />
                                    <span className="text-white font-medium text-sm md:text-xl tracking-tight relative z-10">
                                        ¿Qué parte de tu negocio optimizamos hoy?
                                    </span>
                                </div>

                                {/* Right Action Hint */}
                                <div className="hidden md:flex items-center gap-2 text-white/70 font-medium text-lg drop-shadow-md group-hover:text-white transition-colors">
                                    Ver demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal Popup */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            onClick={() => setIsVideoOpen(false)}
                        >
                            <X className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", bounce: 0.3 }}
                            className="w-full max-w-6xl aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/ZK-rNEhJIDs?autoplay=1"
                                title="Norkut Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
