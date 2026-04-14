import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import IAConnectionAnimation from './ui/IAConnectionAnimation';
import CTAButton from './ui/CTAButton';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

export default function Features() {
    return (
        <>


            {/* Seamless CTA Section joining FAQ */}
            <section className="bg-[#110c22] relative overflow-hidden text-white pt-32 pb-0 md:pt-48 min-h-[400px] md:min-h-[600px] lg:min-h-[600px] flex flex-col justify-center">
                {/* Highly Refined Animated Glowing Bars Background */}
                <div className="absolute inset-0 pointer-events-none">
                    {[
                        { left: '8%', maxH: '50%', w: '45px', duration: 12, delay: 6 },
                        { left: '15%', maxH: '60%', w: '40px', duration: 8, delay: 0 },
                        { left: '26%', maxH: '65%', w: '30px', duration: 10, delay: 2 },
                        { left: '40%', maxH: '45%', w: '30px', duration: 11, delay: 3 },
                        { left: '56%', maxH: '58%', w: '35px', duration: 9, delay: 7 },
                        { left: '68%', maxH: '70%', w: '50px', duration: 9, delay: 1.5 },
                        { left: '80%', maxH: '48%', w: '40px', duration: 13, delay: 8 },
                        { left: '88%', maxH: '55%', w: '35px', duration: 10, delay: 4.5 },
                    ].map((bar, i) => (
                        <motion.div
                            key={i}
                            className="absolute bottom-0 flex justify-center"
                            style={{ left: bar.left, width: bar.w }}
                            animate={{
                                height: ['0%', bar.maxH, bar.maxH],
                            }}
                            transition={{
                                duration: bar.duration,
                                times: [0, 0.4, 1],
                                ease: ["easeOut", "linear"],
                                repeat: Infinity,
                                delay: bar.delay
                            }}
                        >
                            {/* Fading Pillar (Trail) */}
                            <motion.div
                                className="absolute inset-x-0 bottom-0 top-0 bg-linear-to-t from-transparent via-[#2b1b54]/50 to-[#4c3185]/70 rounded-t-full"
                                animate={{ opacity: [0, 1, 1, 0, 0] }}
                                transition={{
                                    duration: bar.duration,
                                    times: [0, 0.05, 0.5, 0.7, 1],
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    delay: bar.delay
                                }}
                            />

                            {/* Soft Glowing Orb (Inside the top of trail) */}
                            <motion.div
                                className="absolute top-0 flex items-center justify-center w-full aspect-square"
                                animate={{ opacity: [0, 1, 1, 0, 0] }}
                                transition={{
                                    duration: bar.duration,
                                    times: [0, 0.05, 0.4, 0.55, 1],
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    delay: bar.delay
                                }}
                            >
                                <div className="absolute w-full aspect-square bg-[#3b3066] rounded-full blur-md shrink-0 pointer-events-none opacity-80" />
                                <div className="absolute w-[80%] aspect-square bg-[#5a4ba6] rounded-full blur-[2px] shrink-0 pointer-events-none" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom gradient mask so it blends perfectly with FAQ */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#110c22] to-transparent pointer-events-none" />

                {/* CTA Content */}
                <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center pb-32 md:pb-28 mt-auto mb-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl text-white">
                        Empieza a usar Norkut ahora
                    </h2>
                    <p className="text-[#9E9BAE] text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
                        Únete a más de 1000 negocios que ya confían en Norkut para gestionar su inventario. Sin tarjeta de crédito requerida.
                    </p>
                    <CTAButton>
                        Empieza gratis hoy
                    </CTAButton>
                </div>
            </section>
        </>
    );
}
