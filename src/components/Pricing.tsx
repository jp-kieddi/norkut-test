import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronDown } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        monthly: 49,
        annual: 39,
        description: 'Ideal para comercios pequeños o que recién comienzan.',
        features: [
            '1 Punto de venta',
            'Gestión de inventario básica',
            'Reportes mensuales',
            'Soporte por email',
            '1 Usuario incluido'
        ]
    },
    {
        name: 'Pro',
        monthly: 99,
        annual: 79,
        popular: true,
        description: 'Perfecto para negocios en crecimiento con más necesidades.',
        features: [
            'Hasta 5 Puntos de venta',
            'Gestión de inventario avanzada',
            'IA para detección de quiebres',
            'Reportes en tiempo real',
            'Soporte prioritario 24/7'
        ]
    },
    {
        name: 'Business',
        monthly: 249,
        annual: 199,
        description: 'La solución completa para controlar todo tu holding.',
        features: [
            'Puntos de venta ilimitados',
            'Módulo de Franquicias & Holdings',
            'IA y automatizaciones totales',
            'API de integración personalizada',
            'Gerente de cuenta dedicado'
        ]
    }
];

const pricingFaqs = [
    {
        question: "¿Puedo cambiar de plan en cualquier momento?",
        answer: "Sí, puedes actualizar o reducir tu plan en cualquier momento. Si actualizas, se te cobrará el valor prorrateado correspondiente al nuevo plan."
    },
    {
        question: "¿Existen costos de instalación o configuración?",
        answer: "No, nuestros planes no tienen costos ocultos ni cargos por instalación. Solo pagas la suscripción mensual o anual."
    },
    {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos todas las principales tarjetas de crédito (Visa, Mastercard, American Express) y transferencias bancarias para planes anuales Business."
    },
    {
        question: "¿Qué sucede si supero el límite de mi plan?",
        answer: "Te notificaremos cuando estés cerca de alcanzar tus límites. Los servicios seguirán funcionando, pero te pediremos que actualices a un plan adecuado para tu volumen."
    },
    {
        question: "¿Ofrecen reembolsos?",
        answer: "Ofrecemos una garantía de devolución de dinero de 14 días para todos nuestros planes de suscripción. Si no estás satisfecho, te reembolsaremos el pago completo."
    }
];

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);
    const [showTable, setShowTable] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section id="pricing" className="pt-32 pb-24 md:pt-48 md:pb-32 bg-white relative">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Precios claros desde el principio
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        Diseñamos planes que crecen al mismo ritmo que tu comercio. Cancela o cambia de plan en cualquier momento.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-zinc-900' : 'text-zinc-500'}`}>Mensual</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-16 h-8 rounded-full bg-zinc-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                            style={{ backgroundColor: isAnnual ? '#ff801f' : '#e4e4e7' }}
                        >
                            <motion.div
                                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                                animate={{ x: isAnnual ? 32 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`text-sm font-semibold flex items-center gap-2 transition-colors ${isAnnual ? 'text-zinc-900' : 'text-zinc-500'}`}>
                            Anual <span className="text-[10px] uppercase font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Ahorra 20%</span>
                        </span>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 px-4 md:px-0">
                    {plans.map((plan, i) => (
                        <div key={i} className={`relative flex flex-col bg-white border ${plan.popular ? 'border-primary shadow-xl md:scale-105 z-10' : 'border-zinc-200 shadow-sm'} rounded-3xl p-8`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                                    Más popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                            <p className="text-sm text-zinc-500 mb-6 min-h-[40px]">{plan.description}</p>
                            <div className="mb-6">
                                <span className="text-4xl font-extrabold text-zinc-900">${isAnnual ? plan.annual : plan.monthly}</span>
                                <span className="text-zinc-500"> / mes</span>
                                {isAnnual && <div className="text-sm text-zinc-400 mt-1">Facturado anualmente</div>}
                                {!isAnnual && <div className="text-sm text-zinc-400 mt-1">Facturado mes a mes</div>}
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm text-zinc-700">
                                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary text-white hover:bg-[#e67319] shadow-lg shadow-primary/30' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}>
                                Comenzar gratis
                            </button>
                        </div>
                    ))}
                </div>

                {/* Table Toggle */}
                <div className="text-center mb-16">
                    <button
                        onClick={() => setShowTable(!showTable)}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-[#e67319] transition-colors"
                    >
                        {showTable ? 'Ocultar comparación completa' : 'Ver comparación de planes completa'}
                        <motion.div animate={{ rotate: showTable ? 180 : 0 }}>
                            <ChevronDown className="w-5 h-5" />
                        </motion.div>
                    </button>
                </div>

                {/* Expanded Table */}
                <AnimatePresence>
                    {showTable && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mb-24"
                        >
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr>
                                            <th className="py-4 px-6 border-b border-zinc-200 bg-zinc-50 font-semibold text-zinc-900 w-1/4">Funcionalidad</th>
                                            <th className="py-4 px-6 border-b border-zinc-200 bg-zinc-50 font-semibold text-zinc-900 text-center w-1/4">Starter</th>
                                            <th className="py-4 px-6 border-b border-zinc-200 bg-zinc-50 font-semibold text-zinc-900 text-center w-1/4">Pro</th>
                                            <th className="py-4 px-6 border-b border-zinc-200 bg-zinc-50 font-semibold text-zinc-900 text-center w-1/4">Business</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr>
                                            <td className="py-4 px-6 border-b border-zinc-100 font-medium text-zinc-800">IA de predicción</td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center"><X className="w-5 h-5 text-zinc-300 mx-auto" /></td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 border-b border-zinc-100 font-medium text-zinc-800">Alertas de stock</td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center">Básicas</td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center">Avanzadas</td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center">Tiempo Real + IA</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 border-b border-zinc-100 font-medium text-zinc-800">Módulo de Franquicias</td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center"><X className="w-5 h-5 text-zinc-300 mx-auto" /></td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center"><X className="w-5 h-5 text-zinc-300 mx-auto" /></td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 border-b border-zinc-100 font-medium text-zinc-800">Integración API</td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center"><X className="w-5 h-5 text-zinc-300 mx-auto" /></td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center">Estándar</td>
                                            <td className="py-4 px-6 border-b border-zinc-100 text-center">Full/Custom</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pricing FAQ */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 pt-16 border-t border-zinc-100">
                    <div className="lg:col-span-5 flex flex-col justify-center text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                            Preguntas frecuentes de facturación
                        </h2>
                        <p className="text-md text-muted-foreground">
                            Aclara tus dudas sobre cómo manejamos tus suscripciones, pagos y cambios en el servicio.
                        </p>
                    </div>

                    <div className="lg:col-span-7 space-y-2">
                        {pricingFaqs.map((faq, index) => {
                            const isOpen = openFaqIndex === index;
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
                                        onClick={() => toggleFaq(index)}
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
