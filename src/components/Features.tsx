import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BrainCircuit, Grid3x3, Activity, ShoppingCart, Wallet, Megaphone, Store, Network, ArrowRight } from 'lucide-react';
import posMachineImg from '../assets/pos-machine.png';
import IAConnectionAnimation from './ui/IAConnectionAnimation';
const coreFeatures = [
    {
        icon: <ShoppingCart className="w-6 h-6 text-primary" />,
        title: 'Operaciones y Abastecimiento',
        description: 'Control inteligente y flujos que escalan con tu negocio.',
    },
    {
        icon: <Activity className="w-6 h-6 text-primary" />,
        title: 'Venta y POS',
        description: 'Transacciones ágiles, seguras y conectadas en todos los canales.',
    },
    {
        icon: <Wallet className="w-6 h-6 text-primary" />,
        title: 'Finanzas & Administración',
        description: 'Integra ingresos, costos y usuarios en un marco de gobierno claro.',
    },
    {
        icon: <Megaphone className="w-6 h-6 text-primary" />,
        title: 'Marketing & Clientes',
        description: 'Segmentación, activación y medición en un solo flujo.',
    },
    {
        icon: <Store className="w-6 h-6 text-primary" />,
        title: 'Gestión de puntos de venta',
        description: 'Estandarización operativa en una sola plataforma.',
    },
    {
        icon: <Network className="w-6 h-6 text-primary" />,
        title: 'Franquicias & Holdings',
        description: 'Gobierno corporativo y control central para redes multi-tenant.',
    },
];

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
        <section id="features" className="pt-24 md:pt-20 bg-zinc-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* IA Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
                    <FadeIn>
                        <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6">
                            <BrainCircuit className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Una IA que potencia tu operación comercial
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            La inteligencia artificial de Norkut aprende del comportamiento real de tus ventas, inventario y clientes. Anticipa quiebres, sobrestocks y descubre oportunidades de mejora para tomar decisiones estratégicas a tiempo.
                        </p>
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                Anticipate a los hechos
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Decide antes que el resto, automatiza lo repetitivo y haz que cada punto de venta funcione con precisión desde una sola plataforma.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <IAConnectionAnimation />
                    </FadeIn>
                </div>

                {/* Multipoint POS Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 lg:flex-row-reverse">
                    <FadeIn>
                        <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-6">
                            <Grid3x3 className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Puntos de venta: decisiones basadas en hechos reales
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            La IA de Norkut aprende de los movimientos de stock de todos tus puntos de venta para encontrar oportunidades de mejora, detectando stock inmovilizado, productos ganadores y mucho más.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
                            <img
                                src={posMachineImg}
                                alt="Norkut POS Machine"
                                className="w-full h-auto drop-shadow-2xl object-contain scale-110 hover:scale-115 transition-transform duration-500"
                            />
                        </div>
                    </FadeIn>
                </div>

                {/* Modules Grid */}
                <div className="mb-32">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                            Una app, múltiples funcionalidades
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Porque el éxito y la sostenibilidad de tu comercio dependen de tomar las decisiones correctas, todos los días.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreFeatures.map((feature, idx) => {
                            let initialProps = {};
                            if (idx % 3 === 0) initialProps = { opacity: 0, x: -70 };
                            else if (idx % 3 === 1) initialProps = { opacity: 0, scale: 0.8 };
                            else initialProps = { opacity: 0, x: 70 };

                            return (
                                <motion.div
                                    key={idx}
                                    initial={initialProps}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{feature.description}</p>

                                    <div className="mt-auto flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                        Explorar <ArrowRight className="w-4 h-4" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-[#101828] rounded-3xl overflow-hidden relative text-white">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-color-burn"></div>
                    <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>

                    <div className="relative z-10 p-10 md:p-16 lg:p-20 text-center flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6 max-w-2xl">
                            Empieza a usar Norkut sin costo ahora
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                            Únete ahora y descubre cómo nuestra inteligencia artificial puede transformar y organizar  operatividad de tu comercio.
                        </p>
                        <CTAButton>
                            Empezar gratis
                        </CTAButton>
                    </div>
                </div>

            </div>
        </section>
    );
}
