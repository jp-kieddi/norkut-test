import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
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

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-zinc-50 relative">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-5 flex flex-col justify-center text-left">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                            Preguntas frecuentes
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Todo lo que necesitas saber sobre cómo Norkut transforma tu operación comercial.
                        </p>
                    </div>

                    <div className="lg:col-span-7 space-y-2">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-primary/50 bg-orange-50/50' : 'border-zinc-200 bg-white hover:border-zinc-300'}`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between px-6 py-2 text-left focus:outline-none"
                                    >
                                        <span className="text-base md:text-md font-semibold text-zinc-900 pr-8">
                                            {faq.question}
                                        </span>
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronDown className="w-5 h-5" />
                                            </motion.div>
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            >
                                                <div className="px-6 pb-4 text-sm md:text-base text-zinc-600 leading-relaxed">
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
        </section>
    );
}
