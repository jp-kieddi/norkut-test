import { motion } from 'framer-motion';
import {
    DatabaseZap, ScanLine, BrainCircuit, Play, TrendingUp,
    TerminalSquare, Layers, Globe2, Code2,
    PackageSearch, Receipt, Store, Users, Landmark, Building2
} from 'lucide-react';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

// ── POS Animation (imported inline from FeatureSlider) ──────────────────────
const PosAnimation = () => {
    return (
        <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] bg-transparent flex items-center justify-center">
            <div className="relative w-72 h-72 scale-[1.4] md:scale-[1.5] origin-center flex items-center justify-center">
                {["$ 24.50", "$ 115.00", "$ 8.90"].map((amount, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-[5%] top-1/2 -mt-6 bg-white rounded-lg shadow-md border border-emerald-100 px-3 py-2 text-xs font-bold text-emerald-700 flex items-center gap-2 z-0 origin-right"
                        initial={{ x: 140, y: 10, opacity: 0, scale: 0.5 }}
                        animate={{ x: [140, 40, 0, -20], y: [10, -30, -70, -110], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.9] }}
                        transition={{ duration: 4.5, repeat: Infinity, delay: i * 1.5, ease: "easeOut" }}
                    >
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        {amount}
                    </motion.div>
                ))}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-44 bg-white rounded-2xl shadow-xl shadow-orange-900/10 border border-orange-100 flex flex-col items-center pt-3 pb-2 z-10">
                    <div className="h-20 bg-orange-500 rounded-lg flex flex-col items-center justify-center text-center text-white relative overflow-hidden shadow-inner mx-auto px-2 w-[85%]">
                        <div className="absolute top-1 right-1 p-1">
                            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-orange-200" />
                        </div>
                        <span className="text-[7px] text-orange-100 font-medium mb-0.5 tracking-wider">COBRO TARJETA</span>
                        <motion.span className="text-white font-bold text-lg" animate={{ opacity: [1, 1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}>
                            ***
                        </motion.span>
                    </div>
                    <div className="w-full px-4 mt-3 grid grid-cols-3 gap-[4px] opacity-80">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((k) => (
                            <div key={k} className="h-2 w-full bg-zinc-100 rounded-sm" />
                        ))}
                    </div>
                    <div className="mt-3 w-8 h-1 bg-zinc-200 rounded-full" />
                </div>
                <motion.div
                    className="absolute z-20 w-24 h-14 bg-zinc-900 rounded-lg shadow-xl border border-zinc-700 flex flex-col justify-center px-3"
                    initial={{ right: 16, top: '50%', x: 120, y: 10, rotate: 15, opacity: 0 }}
                    animate={{ x: [120, 60, 10, 40, 120], y: [10, -30, -50, -30, 10], rotate: [15, 0, -15, 0, 15], opacity: [0, 1, 1, 0, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-5 h-4 bg-yellow-400/80 rounded-sm mb-1.5 opacity-90" />
                    <div className="flex gap-1 justify-end">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 mix-blend-screen" />
                        <div className="w-3 h-3 rounded-full bg-orange-500/80 -ml-1.5 mix-blend-screen" />
                    </div>
                </motion.div>
                <motion.div
                    className="absolute right-[3.8rem] top-[5.2rem] z-30 w-10 h-10 bg-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center border-2 border-white"
                    animate={{ scale: [0, 0, 1.2, 1, 0, 0], opacity: [0, 0, 1, 1, 0, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.3, 0.4, 0.6, 0.7, 1] }}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

// ── Data ─────────────────────────────────────────────────────────────────────
const coreCards = [
    { title: "Inferencia continua", desc: "Generación automática de señales sobre ventas, inventario y comportamiento.", icon: DatabaseZap },
    { title: "Contexto operativo (RAG)", desc: "Cada decisión se construye sobre contexto actualizado y relevante.", icon: ScanLine },
    { title: "Decisiones accionables", desc: "El sistema no solo detecta, propone qué hacer.", icon: BrainCircuit },
    { title: "Ejecución integrada", desc: "Acciones como órdenes, rutas o activaciones se ejecutan dentro del flujo.", icon: Play },
    { title: "Aprendizaje adaptativo", desc: "El sistema evoluciona a medida que cambian los patrones de operación.", icon: TrendingUp },
];

const technicalSpecs = [
    { num: '01', title: "Inteligencia en el punto de venta", subtitle: "La inteligencia comienza donde ocurre la operación", desc: "Norkut genera señales directamente desde la actividad del POS, eliminando latencia y permitiendo decisiones inmediatas.", icon: TerminalSquare },
    { num: '02', title: "Vectorización optimizada (4 bits)", subtitle: "Más velocidad. Menos costo. Mayor escala", desc: "Procesamiento eficiente diseñado para entornos reales de retail, donde cada milisegundo y cada transacción cuentan.", icon: Layers },
    { num: '03', title: " Inferencia operativa en tiempo real", subtitle: "Detecta lo que está pasando mientras está pasando", desc: "El motor analiza continuamente ventas, inventario, reposición, anomalías y demanda para generar decisiones accionables.", icon: BrainCircuit },
    { num: '04', title: "Infraestructura AWS multi-tenant", subtitle: "Escala sin fricción", desc: "Arquitectura cloud diseñada para operar múltiples empresas, regiones y estructuras organizativas en paralelo, con aislamiento y eficiencia.", icon: Globe2 },
    { num: '05', title: "Infraestructura como código (Terraform)", subtitle: "Control total, sin improvisación", desc: "Toda la infraestructura es reproducible, auditable y escalable, garantizando consistencia operativa en cualquier entorno.", icon: Code2 },
];

const operationalDetails = [
    {
        title: "Operación & Abastecimiento",
        subtitle: "Sincronización total de inventario.",
        icon: PackageSearch,
        items: [
            "Compras inteligentes basadas en demanda real",
            "Transferencias optimizadas entre tiendas",
            "Inventario sincronizado en tiempo real"
        ],
        ia: "Anticipa necesidades: qué comprar, cuándo y dónde mover inventario."
    },
    {
        title: "Ventas & POS",
        subtitle: "Atención ágil y continua.",
        icon: Receipt,
        items: [
            "Punto de venta rápido y estable",
            "Operación híbrida (online/offline)",
            "Múltiples formas de pago integradas",
            "Control total de caja y turnos"
        ]
    },
    {
        title: "Gestión de Tiendas",
        subtitle: "Control centralizado, ejecución distribuida.",
        icon: Store,
        items: [
            "Configuración unificada de tiendas y cajas",
            "Visibilidad operativa en tiempo real",
            "⁠Procesos estandarizados en toda la red"
        ]
    },
    {
        title: "Marketing & Clientes",
        subtitle: "Convierte comportamiento en revenue.",
        icon: Users,
        items: [
            "Campañas basadas en comportamiento real",
            "Segmentación automática de clientes",
            "Personalización sin esfuerzo"
        ],
        ia: "Detecta patrones y activa campañas automáticamente según el comportamiento del cliente."
    },
    {
        title: "Finanzas & Administración",
        subtitle: "Cada número bajo control.",
        icon: Landmark,
        items: [
            "Conciliación automática de operaciones",
            "Trazabilidad completa de movimientos",
            "Control financiero en tiempo real"
        ]
    },
    {
        title: "Franquicias & Holdings",
        subtitle: "Gobierna la red sin perder agilidad.",
        icon: Building2,
        items: [
            "Visión consolidada de toda la operación",
            "Control corporativo con autonomía local",
            "Gestión multi-empresa sin fricción"
        ],
        ia: "Compara desempeño entre unidades y detecta oportunidades de mejora automáticamente."
    }
];

const pageFaqs = [
    { question: "¿Cómo se integra el POS con la infraestructura de IA?", answer: "Norkut opera como un flujo continuo. Cada evento en el POS (ventas, inventario, transacciones) se procesa en tiempo real y alimenta el contexto operativo que impulsa decisiones inteligentes." },
    { question: "¿Necesito conocimientos técnicos para interpretar las inferencias?", answer: "No. El sistema de decisión accionable te traduce la matemática compleja en prompts de negocios simples: 'Transfiere 20 unidades del producto X a la tienda Y'." },
    { question: "¿Se puede operar el POS sin internet?", answer: "Totalmente. El diseño híbrido del POS permite facturar sin conexión y sincroniza los datos al regresar a la red para mantener intacto el entrenamiento de Melé." }
];

export default function Funcionalidades() {
    return (
        <main className="w-full">
            {/* Hero — title left, animation right, cards below */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[linear-gradient(180deg,#edf2f7_0px,#edf2f7_400px,#f6f5f5_1000px,#f6f5f5_100%)] dark:bg-none dark:bg-[#110c22] relative overflow-hidden">
                <div className="hero-orb absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#e2ecf7] rounded-full blur-[120px] pointer-events-none opacity-80 dark:opacity-30" />

                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative z-10">
                            <span className="text-[#F97A22] font-semibold text-sm mb-4 uppercase tracking-wider block">
                                Ecosistema Operacional
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6">
                                No es un software, es un sistema que opera tu negocio
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-600 dark:text-[#9E9BAE] font-medium">
                                Todo lo que ocurre en tu operación, conectado en un solo flujo inteligente.
                            </p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <PosAnimation />
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {coreCards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white dark:bg-[#1C1A27] border border-zinc-200 dark:border-[#2C293F] rounded-2xl p-6 hover:border-[#F97A22] transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/10 text-[#F97A22] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <card.icon size={20} />
                                </div>
                                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-3">{card.title}</h3>
                                <p className="text-sm text-zinc-600 dark:text-[#9E9BAE] leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Deep Dive Operational Grid */}
            <section className="py-24 bg-zinc-50 dark:bg-[#0e0a1b] relative">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Ecosistema Operacional</h2>
                        <p className="text-zinc-600 dark:text-[#9E9BAE]">Explora la profundidad de cada área que gobernarás con Norkut.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {operationalDetails.map((op, index) => (
                            <div key={index} className="bg-white dark:bg-[#1C1A27] border border-zinc-200 dark:border-[#2C293F] rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-500/10 text-[#F97A22]">
                                        <op.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{op.title}</h3>
                                        <p className="text-sm text-zinc-500 dark:text-[#6A6680] font-medium">{op.subtitle}</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    {op.items.map((item, idxx) => (
                                        <li key={idxx} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-[#3D3A50] shrink-0 mt-2" />
                                            <span className="text-[15px]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {op.ia && (
                                    <div className="p-4 bg-orange-50 dark:bg-orange-500/5 border border-orange-100 dark:border-orange-500/20 rounded-xl flex items-start gap-3">
                                        <BrainCircuit className="text-[#F97A22] shrink-0 w-5 h-5 mt-0.5" />
                                        <div>
                                            <span className="text-xs font-bold text-[#F97A22] uppercase tracking-wider block mb-1">IA Inteligente</span>
                                            <p className="text-sm text-orange-900 dark:text-orange-200 leading-relaxed">{op.ia}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Technical Specs Light Section */}
            <section className="py-24 bg-white dark:bg-[#0e0a1b]">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Características Técnicas</h2>
                        <p className="text-zinc-600 dark:text-[#9E9BAE]">Arquitectura diseñada para operar retail real, en escala y en tiempo real.</p>
                    </div>
                    <div className="space-y-8">
                        {technicalSpecs.map((spec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex gap-6 border-b border-zinc-100 dark:border-[#2C293F] pb-8 last:border-0"
                            >
                                <div className="text-[#F97A22] font-black text-3xl tabular-nums shrink-0 w-12">
                                    <spec.icon size={32} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                                        {spec.title}
                                    </h2>

                                    <p className="text-md text-zinc-600 dark:text-[#9E9BAE] leading-relaxed"><span className="font-bold text-zinc-900 dark:text-zinc-100">{spec.subtitle}</span>: {spec.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Closing Banner — purple matching FAQ block 
            <section className="py-24 bg-[#110C26] border-y border-[#2C293F]">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
                    >
                        No es software que usas. <br className="hidden md:block" />
                        <span className="text-[#F97A22]">Es un sistema que opera.</span>
                    </motion.h2>
                </div>
            </section>*/}
            <CTASection />
            {/* FAQ — dark background (same as home) */}
            <FAQ
                title="Preguntas frecuentes"
                description="Conoce más sobre la adaptabilidad y el poder técnico detrás de cada módulo."
                faqs={pageFaqs}
            />


        </main>
    );
}
