import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import { ShieldCheck, Cpu, Code2 } from 'lucide-react';

const values = [
    { title: "No organizamos. Ejecutamos.", desc: "El software tradicional es reactivo: espera que tú lo mires para que tú decidas. Norkut está diseñado para operar y darte señales de qué hacer antes de que ocurra el quiebre.", icon: Cpu },
    { title: "Escala real, sin latencia", desc: "Arquitectura AWS multi-tenant construida con disciplina Terraform, permitiéndote abrir docenas de puntos de venta sin que la arquitectura transpire.", icon: Code2 },
    { title: "Gobernanza completa", desc: "Ideal para esquemas complejos. Da autonomía a tus locaciones o franquicias manteniendo un control centralizado estricto sobre finanzas, stock de transferencia y marketing.", icon: ShieldCheck }
];


export default function Empresa() {
    return (
        <main className="w-full">
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[linear-gradient(180deg,#edf2f7_0px,#edf2f7_400px,#f6f5f5_1000px,#f6f5f5_100%)] dark:bg-none dark:bg-[#110c22] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-50 to-transparent blur-[120px] opacity-20 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl"
                        >
                            <span className="text-[#F97A22] font-semibold text-sm mb-4 uppercase tracking-wider block">
                                Acerca de Norkut
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-8">
                                Construimos el retail <span className="text-primary italic">autónomo.</span>
                            </h1>
                            <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                                Norkut nace con una premisa simple pero radical: la información ya no debe organizarse, debe convertirse en acción.
                                Reemplazamos los dashboards pasivos por inferencia continua mediante IA. Cuando ocurre una transacción en la caja de
                                tu tienda, nosotros vectorizamos su impacto en todo tu ecosistema.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#110c22] rounded-[32px] p-10 shadow-2xl text-white relative overflow-hidden"
                        >
                            <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-[#4c3185] blur-[100px] rounded-full opacity-50" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-8">Nuestra Tecnología Core</h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="text-[#F97A22] font-black text-2xl mt-1">1.</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Vectorización de 4 Bits</h4>
                                            <p className="text-[#9E9BAE] text-sm">Escalabilidad de inferencia neural en ambientes transaccionales. Mayor velocidad y mínimo footprint.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="text-[#F97A22] font-black text-2xl mt-1">2.</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">POS Híbrido Cero-Caídas</h4>
                                            <p className="text-[#9E9BAE] text-sm">Tolerancia a fallas extremas. Los cajeros facturan offline y la IA sincroniza cuando vuelve la red.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="text-[#F97A22] font-black text-2xl mt-1">3.</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">RAG Contextual Permanente</h4>
                                            <p className="text-[#9E9BAE] text-sm">Cada alerta que recibes de Norkut lleva el contexto en vivo para evitar sobrestocks inmovilizados.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-zinc-50 border-t border-zinc-100 dark:border-gray-900">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">La visión operativa</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white border border-zinc-200 p-8 rounded-3xl"
                            >
                                <div className="w-12 h-12 bg-orange-50 text-primary rounded-xl flex items-center justify-center mb-6">
                                    <v.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3">{v.title}</h3>
                                <p className="text-sm text-zinc-600 leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
