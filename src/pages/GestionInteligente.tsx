import { motion } from 'framer-motion';
import {
    Network, Cpu, Zap, Activity, ShieldCheck, Database, ServerCog, Target
} from 'lucide-react';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import IAConnectionAnimation from '../components/ui/IAConnectionAnimation';

const meleCapabilities = [
    { title: "En el Edge", desc: "Procesa la realidad antes de que suba a la nube, eliminando el ruido y detectando patrones en milisegundos.", icon: Zap },
    { title: "En la Decisión", desc: "Combina señales en vivo con el contexto histórico (RAG) y las políticas comerciales de tu empresa para proponer acciones con sentido.", icon: Network },
    { title: "En la Ejecución", desc: "No solo sugiere; dispara órdenes de compra, ajusta precios y lanza promociones automáticamente.", icon: Cpu }
];

const layers = [
    { num: '01', title: "Inferencia continua", subtitle: "Captura pura", desc: "Generación automática de señales sobre ventas, inventario y comportamiento en tiempo real.", icon: Activity },
    { num: '02', title: "Contexto operativo (RAG)", subtitle: "Relaciones seguras", desc: "Cada decisión se construye sobre contexto actualizado directamente desde la operación.", icon: Network },
    { num: '03', title: "Decisiones accionables", subtitle: "Priorización inteligente", desc: "No solo detecta lo que pasa. Te dice exactamente qué hacer.", icon: Cpu, isMele: true },
    { num: '04', title: "Ejecución integrada", subtitle: "Capacidad de actuar", desc: "Las acciones se ejecutan dentro del flujo: órdenes, reposición y activaciones.", icon: Zap },
    { num: '05', title: "Ejecución integrada", subtitle: "Dinero y control", desc: "La plataforma mejora continuamente a medida que evoluciona tu operación.", icon: Database },
    { num: '06', title: "Evolución Constante", subtitle: "Software que aprende", desc: "El sistema evoluciona según las necesidades de la red. Adaptamos flujos y reglas complejas a velocidad de mercado, reemplazando tus sistemas legacy.", icon: ServerCog }
];

const differentiators = [
    { title: "De Latencia a Tiempo Real", desc: "Deja de analizar lo que pasó ayer. Actúa sobre lo que está pasando ahora.", icon: ShieldCheck },
    { title: "De Datos Brutos a Señales Semánticas", desc: "Menos ruido, menos costos de nube y mayor velocidad de reacción.", icon: FilterIcon },
    { title: "De Recomendaciones a Resultados", desc: "Norkut no es un consultor; es un operador. Si el sistema decide una oferta, la oferta se aplica y se factura.", icon: Target }
];

const kpis = [
    { title: "Tasa de Inferencia → Acción", desc: "Ejecuciones reales sobre detecciones de IA" },
    { title: "Tiempo Medio de Decisión", desc: "Reducción del ciclo desde el evento hasta su resolución" },
    { title: "Eficiencia de Ejecución", desc: "Impacto directo en el revenue operativo" }
];

// Helper Icon for differentiator
function FilterIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    );
}

const pageFaqs = [
    {
        question: "¿Tengo que ingresar datos manuales para que el sistema aprenda?",
        answer: "No. Norkut procesa las señales en tiempo real que se generan automáticamente cada vez que usas el punto de venta, compras o transfieres inventario."
    },
    {
        question: "¿Qué tipo de inferencias se generan automáticamente?",
        answer: "Se detectan patrones como posibles quiebres de inventario, stock inmovilizado, productos de alta demanda y desviaciones en los tiempos logísticos entre áreas."
    },
    {
        question: "¿Cómo interviene el sistema 'mientras está ocurriendo'?",
        answer: "El sistema no espera al cierre mensual para avisarte de un error. Cuando detecta la desviación en el punto de venta o en almacén, empuja de inmediato una alerta de acción para el operario o gerente responsable."
    }
];

export default function GestionInteligente() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[linear-gradient(180deg,#edf2f7_0px,#edf2f7_400px,#f6f5f5_1000px,#f6f5f5_100%)] dark:bg-none dark:bg-[#110c22] relative overflow-hidden">
                <div className="hero-orb absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#e2ecf7] rounded-full blur-[120px] pointer-events-none opacity-80 dark:opacity-30" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-left"
                        >
                            <span className="text-[#F97A22] font-semibold text-sm mb-4 uppercase tracking-wider block">
                                Gestión Inteligente by Melé
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6">
                                Donde la operación se convierte en inteligencia
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-600 dark:text-[#9E9BAE] font-medium leading-relaxed flex flex-col gap-3">
                                <span>Norkut conecta proveedores, tiendas y operación en un solo flujo continuo.</span>
                                <span>Captura lo que ocurre en tiempo real y lo transforma en decisiones automáticas, sin fricción ni latencia.</span>
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex justify-center"
                        >
                            <IAConnectionAnimation />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* El Cerebro: Melé IA */}
            <section className="py-20 bg-white dark:bg-[#110c22] border-b border-zinc-100 dark:border-[#1C1A27]">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-6">
                            El Cerebro: <span className="text-[#F97A22]">Melé IA</span>
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-[#9E9BAE]">
                            No es un "bot", es el tejido conectivo de todas las operaciones.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {meleCapabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-zinc-50 dark:bg-[#1C1A27] border border-zinc-200 dark:border-[#2C293F] rounded-3xl p-8 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 dark:bg-[#F97A22]/5 rounded-bl-[100px] -z-0" />
                                <div className="w-12 h-12 bg-[#F97A22] text-white rounded-xl flex items-center justify-center mb-6 relative z-10 shadow-md shadow-orange-500/20">
                                    <cap.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 relative z-10">{cap.title}</h3>
                                <p className="text-zinc-600 dark:text-[#9E9BAE] text-sm leading-relaxed relative z-10">{cap.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Las 6 Capas de la Inteligencia Norkut */}
            <section className="py-24 bg-zinc-50 dark:bg-[#0e0a1b]">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">
                            Las 6 Capas de Inteligencia
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-[#9E9BAE] max-w-2xl mx-auto">
                            Desde la captura del dato refinado en el Edge, hasta la generación de valor económico bajado a tierra como transacciones ejecutadas.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-zinc-200 dark:border-[#2C293F] ml-6 md:ml-12 pl-8 space-y-16">
                        {layers.map((layer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative bg-white dark:bg-[#1C1A27] border ${layer.isMele ? 'border-[#F97A22]' : 'border-zinc-200 dark:border-[#2C293F]'} rounded-2xl p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start`}
                            >
                                {/* Line Node */}
                                <div className={`absolute -left-[45px] top-8 w-6 h-6 rounded-full border-4 border-zinc-50 dark:border-[#0e0a1b] shadow-sm ${layer.isMele ? 'bg-[#F97A22]' : 'bg-zinc-300 dark:bg-[#4c3185]'}`} />

                                <div className="shrink-0 text-center">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 ${layer.isMele ? 'bg-orange-100 dark:bg-[#F97A22]/20 text-[#F97A22]' : 'bg-zinc-100 dark:bg-[#2C293F] text-zinc-600 dark:text-zinc-300'}`}>
                                        <layer.icon size={32} />
                                    </div>
                                    <span className={`text-sm font-black font-mono tracking-wider ${layer.isMele ? 'text-[#F97A22]' : 'text-zinc-400 dark:text-zinc-500'}`}>CAPA {layer.num}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{layer.title}</h3>
                                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${layer.isMele ? 'bg-orange-500 text-white' : 'bg-zinc-100 dark:bg-black/30 text-zinc-500 dark:text-zinc-400'}`}>
                                            {layer.subtitle}
                                        </span>
                                    </div>
                                    {layer.isMele && <span className="inline-block text-[11px] font-bold text-orange-600 bg-orange-100 dark:bg-[#F97A22]/10 dark:text-orange-400 px-2 py-0.5 rounded-sm uppercase tracking-wider mb-3">Aquí brilla Melé</span>}
                                    <p className="text-zinc-600 dark:text-[#9E9BAE] leading-relaxed">
                                        <strong className="text-zinc-800 dark:text-zinc-200"></strong> {layer.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Diferenciador Estratégico */}
            <section className="py-24 bg-white dark:bg-[#110c22]">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">Diferenciador Estratégico</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {differentiators.map((diff, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-zinc-50 dark:bg-[#1C1A27] rounded-3xl p-8 border border-zinc-200 dark:border-[#2C293F] hover:border-[#F97A22] dark:hover:border-[#F97A22] transition-colors"
                            >
                                <div className="w-12 h-12 bg-white dark:bg-[#110c22] border border-zinc-200 dark:border-[#3D3A50] rounded-xl flex items-center justify-center text-[#F97A22] mb-6 shadow-sm">
                                    <diff.icon size={22} />
                                </div>
                                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{diff.title}</h4>
                                <p className="text-zinc-600 dark:text-[#9E9BAE] text-sm leading-relaxed">{diff.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Closing Banner — Purple / #1C1A27 to match FAQ colors */}
            <section className="py-24 bg-[#110C26] border-y border-[#2C293F]">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
                    >
                        La operación deja de ser reactiva. <br className="hidden md:block" />
                        <span className="text-[#F97A22]">Empieza a ser inteligente.</span>
                    </motion.h2>
                </div>
            </section>
            {/* KPIs de Impacto */}
            <section className="py-20 bg-[#110C26] border-y border-[#2C293F] text-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#3D3A50]">
                        {kpis.map((kpi, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="pt-8 md:pt-0 md:px-8 text-center flex flex-col items-center justify-center"
                            >
                                <h5 className="text-2xl font-black mb-3 text-white">{kpi.title}</h5>
                                <p className="text-[#9E9BAE] font-medium text-sm leading-relaxed">{kpi.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <CTASection />
            {/* Custom FAQ */}
            <FAQ
                title="Preguntas frecuentes"
                description="Entiende en detalle qué sucede debajo del capó comunicacional de Norkut."
                faqs={pageFaqs}
            />


        </main>
    );
}
