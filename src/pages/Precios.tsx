import { Check, ArrowRight } from 'lucide-react';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

const plans = [
    {
        name: 'Norkut One',
        subtitle: 'Bodegas · Quioscos · Ambulantes',
        price: '15',
        features: [
            '1 POS · 1 usuario',
            '1,000 SKUs',
            '50 señales/mes',
            'POS extra: $10/mes'
        ]
    },
    {
        name: 'Norkut Smart',
        subtitle: 'Tiendas · Comercios · Farmacias',
        price: '35',
        popular: true,
        features: [
            '1 POS · usuarios ilimitados',
            '2,000 SKUs',
            '100 señales/mes',
            'POS extra: $10/mes'
        ]
    },
    {
        name: 'Norkut Network',
        subtitle: 'Cadenas · Franquicias',
        price: '99',
        features: [
            '3 tiendas + corporativo',
            '3 POS + usuarios ilimitados',
            '2,000 SKUs por tienda',
            'Señales custom'
        ]
    },
    {
        name: 'Norkut Enterprise',
        subtitle: 'Corporativos · Fabricantes · Mayoristas',
        price: 'Custom',
        isConsultative: true,
        features: [
            '+3 tiendas · todos los módulos',
            'SKUs ilimitados',
            'Señales ilimitadas',
            'Soporte dedicado'
        ]
    }
];

const pricingFaqs = [
    {
        question: "¿Existen costos de instalación o configuración?",
        answer: "No, nuestros planes no tienen costos ocultos ni cargos por instalación. Solo pagas la suscripción mensual detallada."
    },
    {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos todas las principales tarjetas de crédito y transferencias bancarias para planes Enterprise."
    },
    {
        question: "¿Cuándo debo pasar de Growth a Enterprise?",
        answer: "Automáticamente cuando superes las 10 tiendas operativas o sobrepases el límite de 2,000 SKUs en catálogo activo. Te acompañaremos en el proceso sin interrumpir tu operación."
    },
    {
        question: "¿Ofrecen reembolsos?",
        answer: "Ofrecemos una garantía de devolución durante los primeros 14 días. Si el sistema no se adapta a tu operación, te reembolsamos."
    }
];

export default function Precios() {
    return (
        <section id="pricing" className="hero-section relative pt-32 md:pt-48  overflow-hidden">
            {/* Soft Ambient Orbs Matching Image Background */}
            <div className="hero-orb absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#e2ecf7] rounded-full blur-[120px] pointer-events-none opacity-80" />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Empieza a operar con inteligencia
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Convierte cada venta, movimiento y decisión en una ventaja competitiva en tiempo real. Funciona incluso en entornos con conectividad inestable, para que nunca dejes de vender.

                    </p>
                </div>

                {/* Grid Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 px-0">
                    {plans.map((plan, i) => (
                        <div key={i} className={`relative flex flex-col bg-white border ${plan.popular ? 'border-primary shadow-xl md:-translate-y-2 z-10' : 'border-zinc-200 dark:border-gray-900 shadow-sm'} rounded-3xl p-6 transition-transform duration-300`}>
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                                    El más elegido
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-zinc-900 mb-1">{plan.name}</h3>
                            <p className="text-[13px] font-medium text-zinc-500 mb-5 h-8 italic">{plan.subtitle}</p>
                            <div className="mb-6 pb-6 border-b border-zinc-100  dark:border-gray-700">
                                {plan.isConsultative ? (
                                    <div className="text-3xl font-extrabold text-zinc-900 py-1">Consultivo</div>
                                ) : (
                                    <div className="flex items-end gap-1">
                                        <span className="text-5xl font-extrabold text-zinc-900">${plan.price}</span>
                                        <span className="text-zinc-500 font-medium mb-1.5">/ mes</span>
                                    </div>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="font-medium text-zinc-800">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="https://auth.norkut-cloud.com/sign-up" target="_blank" rel="noopener noreferrer" className={`w-full py-3 rounded-xl font-bold transition-all text-center block ${plan.popular ? 'bg-primary text-white hover:bg-[#e67319] shadow-lg shadow-primary/30' : plan.isConsultative ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}>
                                {plan.isConsultative ? 'Contactar ventas' : 'Comenzar gratis'}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Additional Info Grid */}
                <div className="grid md:grid-cols-3 gap-8 py-16 border-t border-zinc-100 dark:border-gray-700">
                    <div>
                        <div className="w-10 h-10 bg-orange-50 text-primary rounded-xl flex items-center justify-center mb-4">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-zinc-900 mb-2">Token por POS Adicional</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">Cada caja adicional dentro de una misma tienda se activa como un POS independiente.
                            Tu plan incluye un POS base.
                            Puedes escalar agregando nuevas cajas de forma simple, sin cambiar de plan.</p>
                    </div>
                    <div>
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-zinc-900 mb-2">¿Qué es una Señal Operativa?</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">Es un evento inteligente detectado por la IA dentro de tu operación.

                            Puede representar una oportunidad, un riesgo o una acción necesaria.
                            Norkut identifica dónde actuar y cuándo hacerlo para maximizar impacto.</p>
                    </div>
                    <div>
                        <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-zinc-900 mb-2">Límite de SKUs Activos</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">Se contabilizan únicamente los productos activos en operación.

                            Puedes gestionar tu catálogo con flexibilidad y escalar sin fricción a medida que crece tu negocio.</p>
                    </div>
                </div>
            </div>
            <CTASection />
            {/* Reusable FAQ Component */}
            <FAQ
                title="Preguntas frecuentes de facturación"
                description="Aclara tus dudas sobre reglas operativas, tokens extras y nuestros planes."
                faqs={pricingFaqs}
            />
        </section>
    );
}
