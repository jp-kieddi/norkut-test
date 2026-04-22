import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import { Network, Server, Cpu, Cloud, Database, BrainCircuit, Blocks, Code2, Zap } from 'lucide-react';

const techInnovations = [
    { title: "Vectorización en el edge", icon: Zap },
    { title: "Modelos optimizados con cuantización a 4 bits", icon: Cpu },
    { title: "Arquitectura multi-tenant sobre AWS", icon: Cloud },
    { title: "Bases de datos distribuidas (MongoDB)", icon: Database },
    { title: "Infraestructura automatizada con Terraform", icon: Server }
];

const visionItems = [
    { title: "Generación automática de lógica", icon: BrainCircuit },
    { title: "Desarrollo asistido por AI (Cursor / agentes)", icon: Code2 },
    { title: "Pipelines de código integrados (GitHub)", icon: Network },
    { title: "Creación continua de nuevas capacidades", icon: Blocks }
];

export default function Empresa() {
    return (
        <main className="w-full">
            {/* HERO SECTION */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[linear-gradient(180deg,#edf2f7_0px,#edf2f7_400px,#f6f5f5_1000px,#f6f5f5_100%)] dark:bg-none dark:bg-[#110c22] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-50 to-transparent blur-[120px] opacity-20 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[#F97A22] font-semibold text-sm mb-6 uppercase tracking-wider block">
                            Sobre Nosotros
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-8">
                            Construyendo la inteligencia operativa del retail
                        </h1>
                        <div className="text-lg md:text-xl text-zinc-600 dark:text-[#9E9BAE] font-medium leading-relaxed space-y-4">
                            <p>
                                <strong className="text-zinc-900 dark:text-white">Norkut nace de una historia real de operación, no de teoría.</strong>
                            </p>
                            <p>
                                Nuestra base viene de Sigo, una organización con más de 50 años en el retail venezolano, donde durante más de dos décadas se desarrolló uno de los ERPs más sólidos del país, diseñado y liderado por Orlando De León, CTO de Sigo Enterprises.
                            </p>
                            <p>
                                Ese sistema no fue construido para vender software.<br />
                                Fue construido para operar una red real de tiendas, con complejidad, volumen y exigencia diaria.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* EVOLUCIÓN & TRANSFORMACIÓN */}
            <section className="py-24 bg-white dark:bg-[#110c22] border-t border-zinc-100 dark:border-[#1C1A27]">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Evolución */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="w-12 h-12 bg-orange-50 dark:bg-[#F97A22]/10 rounded-xl flex items-center justify-center text-[#F97A22] mb-6">
                                <Network size={24} />
                            </div>
                            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-6">Evolución</h2>
                            <div className="text-zinc-600 dark:text-[#9E9BAE] space-y-4 leading-relaxed">
                                <p>Con la crisis venezolana, decidimos separar la tecnología del negocio operativo y convertirla en una empresa independiente.</p>
                                <p>Así nace Norkut.</p>
                                <p>Durante años, evolucionamos nuestras soluciones hasta entender algo clave:</p>
                                <p className="font-bold text-[#F97A22] text-xl border-l-4 border-[#F97A22] pl-4 py-2 bg-orange-50 dark:bg-[#F97A22]/10 rounded-r-lg">el software tradicional ya no era suficiente</p>
                                <p>El siguiente paso fue crear una plataforma cloud diseñada específicamente para retail. Así nace Melé ERP.</p>
                                <p>Hoy, Melé cuenta con más de 12.000 usuarios activos y está presente en algunas de las cadenas más importantes de Venezuela en sectores como: supermercados, electrodomésticos, farmacias, cosméticos y retail especializado.</p>
                            </div>
                        </motion.div>

                        {/* Transformación */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <BrainCircuit size={24} />
                            </div>
                            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-6">Transformación</h2>
                            <div className="text-zinc-600 dark:text-[#9E9BAE] space-y-4 leading-relaxed">
                                <p>Con la llegada de la inteligencia artificial, entendimos que el problema ya no era solo gestionar la operación.</p>
                                <p className="font-bold text-blue-600 text-xl border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 dark:bg-blue-500/10 rounded-r-lg">Era ejecutarla mejor que los humanos.</p>
                                <p>Por eso comenzamos la construcción de Norkut como una nueva plataforma:</p>
                                <ul className="space-y-3 mt-4">
                                    {['más ágil', 'completamente cloud', 'diseñada para escalar a múltiples geografías', 'enfocada en automatizar decisiones, no solo registrar datos'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INNOVACIÓN & VISIÓN */}
            <section className="py-24 bg-[#110c22] text-white overflow-hidden relative">
                <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-[#4c3185] blur-[150px] rounded-full opacity-30 pointer-events-none" />
                <div className="absolute bottom-[-50%] left-[-50%] w-full h-full bg-[#F97A22] blur-[150px] rounded-full opacity-20 pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Innovación Tecnológica */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-extrabold mb-8">Innovación Tecnológica</h2>
                            <p className="text-[#9E9BAE] mb-8 leading-relaxed">
                                Nuestros primeros avances incluyeron:
                            </p>
                            <div className="space-y-4">
                                {techInnovations.map((item, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                        <div className="bg-[#F97A22]/20 text-[#F97A22] p-2 rounded-lg">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="font-medium text-white">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[#9E9BAE] mt-8 leading-relaxed italic">
                                Esto nos permitió reducir latencia, costos y mejorar la calidad de la inferencia desde el origen de la operación.
                            </p>
                        </motion.div>

                        {/* Visión Actual */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-extrabold mb-8">Visión Actual</h2>
                            <p className="text-[#9E9BAE] mb-6 leading-relaxed">
                                Hoy, Norkut está evolucionando hacia algo más grande:
                            </p>
                            <div className="bg-gradient-to-r from-[#F97A22] to-orange-500 rounded-2xl p-6 mb-8 shadow-xl shadow-orange-900/20">
                                <p className="font-bold text-2xl text-white">una fábrica de software impulsada por inteligencia</p>
                            </div>
                            <p className="text-[#9E9BAE] mb-6">Estamos integrando:</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {visionItems.map((item, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/10 transition-colors">
                                        <item.icon size={24} className="text-orange-400" />
                                        <span className="font-medium text-sm text-white">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CIERRE */}
            <section className="py-24 bg-[#0e0a1b] text-center border-y border-gray-800">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
                            Norkut no es solo una plataforma.
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 font-medium">
                            Es la evolución de décadas de operación real, llevada a una <span className="text-[#F97A22] font-bold">nueva generación de software.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
