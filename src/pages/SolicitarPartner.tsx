import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { Send } from 'lucide-react';

const pageFaqs = [
    { question: "¿Qué hace un Partner certificado de Norkut?", answer: "Nuestros Partners son expertos en implementación, consultoría de procesos y transformación digital en retail. Te ayudan a configurar Norkut adaptado exactamente a tus flujos operativos y a capacitar a tu equipo." },
    { question: "¿Tiene costo trabajar con un Partner?", answer: "Los servicios de consultoría e implementación varían según cada Partner y el scope del proyecto. Te contactaremos con los más adecuados para que puedan enviarte una propuesta." },
    { question: "¿Cuánto tarda la asignación de un Partner?", answer: "Nuestro equipo evaluará tu solicitud y te presentará a 1-2 partners compatibles en menos de 48 horas hábiles." }
];

export default function SolicitarPartner() {
    return (
        <main className="w-full">
            {/* Header / Hero */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[linear-gradient(180deg,#edf2f7_0px,#edf2f7_400px,#f6f5f5_1000px,#f6f5f5_100%)] dark:bg-none dark:bg-[#110c22] relative overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#e2ecf7] rounded-full blur-[120px] pointer-events-none opacity-20" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl"
                        >
                            <span className="text-[#F97A22] font-semibold text-sm mb-4 uppercase tracking-wider block">
                                Ecosistema Norkut
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-6">
                                Encuentra al <span className="text-primary">Partner</span> ideal para tu negocio
                            </h1>
                            <p className="text-lg text-zinc-600 font-medium leading-relaxed mb-8">
                                Si buscas llevar tu operación volumétrica al siguiente nivel, nuestros distribuidores e integradores oficiales están certificados para guiarte en cada paso. Completa el formulario y te conectaremos con el experto adecuado.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-zinc-50 border border-zinc-200 p-8 rounded-[32px] shadow-sm relative"
                        >
                            <h3 className="text-2xl font-bold text-zinc-900 mb-6">Empieza el proceso</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-zinc-700">Nombre</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Tu nombre" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-zinc-700">Apellido</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Tu apellido" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-zinc-700">Email corporativo</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="nombre@empresa.com" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-zinc-700">Empresa / Comercio</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Nombre completo de la empresa" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-zinc-700">Cantidad de Tiendas / POS</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-zinc-700">
                                        <option>1 - 3 Tiendas</option>
                                        <option>4 - 10 Tiendas</option>
                                        <option>Más de 10 Tiendas</option>
                                        <option>Franquicia nacional</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-zinc-700">¿Qué desafío quieres resolver?</label>
                                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" placeholder="Breve descripción de tus necesidades operativas..." />
                                </div>

                                <button className="w-full bg-primary hover:bg-[#e67319] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary/25">
                                    Solicitar conexión <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FAQ
                title="Dudas sobre nuestros Partners"
                description="Conoce cómo los partners de Norkut potenciarán la integración del sistema en tu ecosistema diario."
                faqs={pageFaqs}
            />

            <CTASection />
        </main>
    );
}
