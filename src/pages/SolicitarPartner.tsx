import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

const pageFaqs = [
    { question: "¿Qué hace un Partner certificado de Norkut?", answer: "Nuestros Partners son expertos en implementación, consultoría de procesos y transformación digital en retail. Te ayudan a configurar Norkut adaptado exactamente a tus flujos operativos y a capacitar a tu equipo." },
    { question: "¿Tiene costo trabajar con un Partner?", answer: "Los servicios de consultoría e implementación varían según cada Partner y el scope del proyecto. Te contactaremos con los más adecuados para que puedan enviarte una propuesta." },
    { question: "¿Cuánto tarda la asignación de un Partner?", answer: "Nuestro equipo evaluará tu solicitud y te presentará a 1-2 partners compatibles en menos de 48 horas hábiles." }
];

export default function SolicitarPartner() {
    const formContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!formContainerRef.current) return;
        
        // Evitamos doble inyección del script en modo estricto de React
        if (formContainerRef.current.querySelector('script')) return;

        const script = document.createElement('script');
        script.dataset.b24Form = 'inline/13/ytsm9j';
        script.dataset.skipMoving = 'true';
        script.innerHTML = `(function(w,d,u){
var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
var h=d.getElementsByTagName('script')[0];
if(h){h.parentNode.insertBefore(s,h);}else{d.head.appendChild(s);}
})(window,document,'https://cdn.bitrix24.es/b35633555/crm/form/loader_13.js');`;

        formContainerRef.current.appendChild(script);
    }, []);

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
                            {/* Contenedor del Formulario Bitrix24 */}
                            <div ref={formContainerRef} className="w-full min-h-[400px]"></div>
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
