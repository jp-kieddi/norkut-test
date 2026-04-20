import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { Briefcase } from 'lucide-react';

const pageFaqs = [
    { question: "¿Cuáles son los requisitos fundamentales para ser Partner?", answer: "Buscamos agencias de transformación digital, consultoras de TI o distribuidores de ERP con experiencia comprobable en el sector retail o logístico, y que cuenten con un equipo de implementación y mesa de ayuda propia." },
    { question: "¿Qué comisiones o revenue share ofrece Norkut?", answer: "Nuestros integradores Gold y Platinum acceden a un modelo de ingresos recurrentes sobre ARR (anual recurring revenue) además de cobrar el 100% de los fees de implementación y capacitación." },
    { question: "¿Me brindan capacitaciones técnicas para mi equipo?", answer: "Absolutamente. Existe un programa de certificación (Norkut Certified Implementer) dictado por nuestros ingenieros para que tus consultores dominen la IA, vectorización y despliegues." }
];

export default function QuieroSerPartner() {
    return (
        <main className="w-full">
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[#110c22] text-white relative overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#4c3185] rounded-full blur-[150px] pointer-events-none opacity-40" />
                
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl"
                        >
                            <span className="text-[#F97A22] font-semibold text-sm mb-4 uppercase tracking-wider block">
                                Programa de Partners
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                                Crece implementando la herramienta del futuro del <span className="text-primary">retail</span>
                            </h1>
                            <p className="text-lg text-[#9E9BAE] font-medium leading-relaxed mb-8">
                                Únete a la red global de consultoras y distribuidores Norkut. Lleva inteligencia artificial transaccional a tus clientes, genera nuevos ingresos y lidera la innovación B2B.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#1C1A27] border border-[#2C293F] p-8 rounded-[32px] shadow-2xl relative"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">Aplica al programa</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-[#D4D2DF]">Nombre de tu Empresa / Consultora</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#3D3A50] bg-[#110c22] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="Ej. TechRetail Solutions" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-[#D4D2DF]">Tu nombre</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#3D3A50] bg-[#110c22] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="Nombre" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-[#D4D2DF]">Email corporativo</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-[#3D3A50] bg-[#110c22] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="email@tucorreo.com" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-[#D4D2DF]">País de operación principal</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#3D3A50] bg-[#110c22] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="Ej. México" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-[#D4D2DF]">Tamaño de tu portafolio de clientes (aprox)</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-[#3D3A50] bg-[#110c22] text-[#D4D2DF] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none">
                                        <option>Menos de 20 clientes</option>
                                        <option>Entre 20 y 100 clientes</option>
                                        <option>Más de 100 clientes activos</option>
                                    </select>
                                </div>
                                
                                <button className="w-full bg-primary hover:bg-[#e67319] text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-primary/25">
                                    Enviar solicitud comercial <Briefcase size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FAQ 
                title="Dudas sobre el Partnership"
                description="Todo lo relativo a modelos de ingresos, capacitaciones y la relación B2B que construiremos juntos."
                faqs={pageFaqs}
            />
            
            <CTASection />
        </main>
    );
}
