import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const homeFaqs = [
    {
        question: "¿Qué es exactamente Norkut?",
        answer: "Norkut es una plataforma que centraliza la complejidad operativa de tu negocio, utilizando una inteligencia artificial diseñada para aprender, razonar y anticipar decisiones mientras operas."
    },
    {
        question: "¿Cómo ayuda la IA a gestionar mi inventario?",
        answer: "La inteligencia artificial aprende del comportamiento real de tus ventas e inventario para anticipar quiebres de stock, detectar sobrestocks y descubrir oportunidades de mejora."
    },
    {
        question: "¿Funciona para negocios con múltiples sucursales?",
        answer: "Sí, está diseñada para gestionar múltiples puntos de venta, analizando los movimientos de stock en todas tus locaciones para identificar stock inmovilizado y productos ganadores."
    },
    {
        question: "¿Qué áreas puedo administrar en Norkut?",
        answer: "Puedes integrar diversas áreas críticas en una sola plataforma: Operaciones y Abastecimiento, Venta y POS, Finanzas y Administración, Marketing y Clientes, Gestión de puntos de venta, y Franquicias y Holdings."
    },
    {
        question: "¿Es útil para una red de franquicias?",
        answer: "Definitivamente, la plataforma cuenta con un módulo específico de Franquicias & Holdings que ofrece gobierno corporativo y control central para redes multi-tenant."
    },
    {
        question: "¿Cómo me ayuda Norkut a mejorar la toma de decisiones?",
        answer: "La plataforma te permite decidir antes que el resto al automatizar lo repetitivo y facilitarte la anticipación a los hechos, logrando que cada punto de venta funcione con precisión."
    },
    {
        question: "¿Es Norkut una solución escalable?",
        answer: "Sí, ofrece un control inteligente y flujos operativos en el área de Operaciones y Abastecimiento que están diseñados para escalar junto con el crecimiento de tu negocio."
    }
];

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    title?: string;
    description?: string;
    faqs?: FAQItem[];
    className?: string; // To allow custom top padding if needed
}

export default function FAQ({ 
    title = "Preguntas frecuentes", 
    description = "Todo lo que necesitas saber sobre cómo Norkut transforma tu operación comercial.", 
    faqs = homeFaqs,
    className = "py-20 lg:py-32 bg-[#110c22] relative"
}: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={className}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#1C1A27] border border-[#2C293F] rounded-[32px] p-8 lg:p-16">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Header Left */}
                        <div className="lg:col-span-5 flex flex-col justify-start text-left pt-2">
                            <span className="text-[#F97A22] font-semibold text-sm mb-4">¿Aún tienes dudas?</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                                {title}
                            </h2>
                            <p className="text-[#9E9BAE] text-base md:text-lg leading-relaxed max-w-sm">
                                {description}
                            </p>
                        </div>

                        {/* Accordion Right */}
                        <div className="lg:col-span-7 space-y-3">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-[#F97A22] bg-transparent' : 'border-[#2C293F] bg-transparent hover:border-[#3D3A50]'}`}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
                                        >
                                            <span className={`text-sm md:text-base font-semibold pr-8 ${isOpen ? 'text-[#F97A22]' : 'text-[#D4D2DF]'}`}>
                                                {faq.question}
                                            </span>
                                            
                                            {isOpen ? (
                                                <div className="shrink-0 w-7 h-7 rounded-full bg-[#F97A22] text-white flex items-center justify-center">
                                                    <ChevronDown className="w-4 h-4 rotate-180" />
                                                </div>
                                            ) : (
                                                <div className="shrink-0 text-[#6A6680] flex items-center justify-center">
                                                    <ChevronDown className="w-5 h-5" />
                                                </div>
                                            )}
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                >
                                                    <div className="px-6 pb-5 text-sm md:text-base text-[#9E9BAE] leading-relaxed pr-12">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
