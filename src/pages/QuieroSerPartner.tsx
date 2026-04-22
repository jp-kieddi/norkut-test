import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import CTASection from '../components/CTASection';
import { ShieldCheck, Network, Zap, Target, Wrench, Handshake, MonitorSmartphone, TrendingUp, LayoutDashboard, BarChart3, ArrowRight } from 'lucide-react';

export default function QuieroSerPartner() {
    const formContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!formContainerRef.current) return;
        if (formContainerRef.current.querySelector('script')) return;

        const script = document.createElement('script');
        script.dataset.b24Form = 'inline/11/cpxs2l';
        script.dataset.skipMoving = 'true';
        script.innerHTML = `(function(w,d,u){
var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
var h=d.getElementsByTagName('script')[0];
if(h){h.parentNode.insertBefore(s,h);}else{d.head.appendChild(s);}
})(window,document,'https://cdn.bitrix24.es/b35633555/crm/form/loader_11.js');`;

        formContainerRef.current.appendChild(script);
    }, []);

    const scrollToForm = () => {
        const formElement = document.getElementById('partner-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="w-full">
            {/* HERO SECTION */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-[linear-gradient(180deg,#edf2f7_0px,#edf2f7_400px,#f6f5f5_1000px,#f6f5f5_100%)] dark:bg-none dark:bg-[#110c22] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-50 to-transparent blur-[120px] opacity-20 pointer-events-none" />
                <div className="hero-orb absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#e2ecf7] rounded-full blur-[120px] pointer-events-none opacity-80 dark:opacity-20" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center pt-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >


                            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.05] mb-8">
                                Construye con nosotros el <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97A22] to-orange-400">ecosistema del retail</span>
                            </h1>

                            <div className="text-xl md:text-2xl text-zinc-600 dark:text-[#9E9BAE] font-medium leading-relaxed max-w-3xl mx-auto space-y-6 mb-12">
                                <p className="text-zinc-900 dark:text-white font-bold">
                                    Norkut no es solo una plataforma. <br className="hidden md:block" />
                                    Es una infraestructura donde los partners pueden operar, escalar y generar ingresos recurrentes en el tiempo.
                                </p>
                                <p className="text-lg">
                                    Estamos construyendo un ecosistema donde integradores y aliados comerciales crecen sobre una base tecnológica sólida, diseñada para operar en entornos reales.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={scrollToForm}
                                    className="w-full sm:w-auto bg-[#F97A22] text-white hover:bg-orange-600 hover:scale-105 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 group"
                                >
                                    Aplicar como partner
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PORTAL DE PARTNERS */}
            <section className="py-24 md:py-32 bg-white dark:bg-[#110c22] border-t border-zinc-100 dark:border-[#1C1A27]">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-[1.1]">
                                Portal de Partners Norkut
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-600 dark:text-[#9E9BAE] mb-10 leading-relaxed">
                                Cada partner tiene acceso a un portal diseñado para operar y crecer dentro del ecosistema:
                            </p>

                            <ul className="space-y-6 mb-10">
                                {[
                                    { text: "Visualización de clientes activos dentro de la plataforma", icon: MonitorSmartphone },
                                    { text: "Seguimiento de ingresos recurrentes generados", icon: TrendingUp },
                                    { text: "Control de cuentas, tiendas y operación asociada", icon: LayoutDashboard },
                                    { text: "Métricas clave de desempeño comercial", icon: BarChart3 }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-[#1C1A27] border border-orange-100 dark:border-white/5 text-[#F97A22] flex items-center justify-center shrink-0 shadow-sm">
                                            <item.icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <span className="text-lg text-zinc-700 dark:text-zinc-300 font-medium pt-2.5 leading-tight">{item.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="inline-block bg-zinc-50 dark:bg-[#1C1A27] border border-zinc-200 dark:border-white/10 rounded-2xl p-5 shadow-sm">
                                <p className="text-zinc-900 dark:text-white font-bold flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                                    Todo en un solo lugar, con visibilidad total de tu negocio.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="order-1 lg:order-2 relative w-full aspect-square md:aspect-auto md:h-[600px] bg-gradient-to-br from-zinc-50 to-white dark:from-[#1C1A27] dark:to-[#110c22] border border-zinc-200 dark:border-white/10 rounded-[3rem] p-8 flex items-center justify-center overflow-hidden shadow-2xl"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#F97A22]/10 dark:bg-[#F97A22]/20 blur-[80px] rounded-full" />

                            {/* Abstract Mock Dashboard */}
                            <div className="relative z-10 w-full max-w-[340px] bg-white/80 dark:bg-[#2C293F]/60 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-8 shadow-2xl shadow-black/5">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-[#F97A22]/20 flex items-center justify-center shadow-inner">
                                        <TrendingUp className="w-6 h-6 text-[#F97A22]" />
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[11px] font-black text-zinc-400 uppercase tracking-wider mb-1">ARR Generado</p>
                                        <p className="text-2xl font-black text-zinc-900 dark:text-white">$ 12,450</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-full h-14 bg-white dark:bg-[#110c22] rounded-2xl border border-zinc-100 dark:border-white/5 flex items-center px-4 gap-4 shadow-sm">
                                            <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                            <div className="flex-1 h-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-emerald-400"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${Math.random() * 40 + 40}%` }}
                                                    transition={{ duration: 1, delay: i * 0.2 }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-16 right-8 lg:-right-8 bg-white dark:bg-[#2C293F]/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-zinc-100 dark:border-white/10 flex items-center gap-4 z-20"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 flex items-center justify-center">
                                    <MonitorSmartphone size={20} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-black text-zinc-400 uppercase tracking-wider">Cuentas Activas</p>
                                    <p className="text-xl font-black text-zinc-900 dark:text-white">24</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROPUESTA DE VALOR */}
            <section className="py-24 md:py-32 bg-zinc-50 dark:bg-[#0e0a1b] border-t border-zinc-100 dark:border-[#1C1A27] relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">
                            Propuesta de Valor
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-[#9E9BAE]">
                            Nuestro enfoque es claro: mientras más valor generas con tus clientes, más crece tu negocio dentro del ecosistema.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Crecimiento real, no teórico", desc: "Trabajas sobre una base de clientes activos en retail real.", icon: Zap },
                            { title: "Ingresos recurrentes visibles", desc: "Monitorea cuánto generan tus clientes directamente desde el portal.", icon: Target },
                            { title: "Control total de tu operación", desc: "Administra tus cuentas, tiendas y crecimiento desde una sola vista.", icon: ShieldCheck },
                            { title: "Ecosistema en expansión", desc: "Una red que crece contigo a medida que sumas clientes y operación.", icon: Network }
                        ].map((prop, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative bg-white dark:bg-[#1C1A27] border border-zinc-200 dark:border-white/5 p-8 rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 dark:bg-[#F97A22]/5 rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-125" />
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-zinc-50 dark:bg-[#110c22] border border-zinc-100 dark:border-white/5 text-[#F97A22] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#F97A22] group-hover:text-white transition-all duration-300">
                                        <prop.icon size={26} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white mb-3 leading-tight">{prop.title}</h3>
                                    <p className="text-sm text-zinc-600 dark:text-[#9E9BAE] leading-relaxed">{prop.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIPOS DE PARTNERS */}
            <section className="py-24 md:py-32 bg-[#110c22] text-white relative overflow-hidden">
                <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[80%] bg-[#4c3185] rounded-full blur-[150px] pointer-events-none opacity-40" />

                <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Tipos de Partners</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Integradores */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative overflow-hidden rounded-[2.5rem] bg-[#1C1A27]/80 backdrop-blur-xl border border-white/10 p-10 group hover:border-[#F97A22]/50 transition-colors duration-300"
                        >
                            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-[#F97A22]/10 blur-[60px] rounded-full group-hover:bg-[#F97A22]/30 transition-colors duration-500" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/5 text-[#F97A22] border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                                    <Wrench size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-extrabold text-white mb-4">Integradores</h3>
                                <p className="text-[#9E9BAE] text-lg leading-relaxed">
                                    Implementan Norkut y acompañan la operación en clientes.
                                </p>
                            </div>
                        </motion.div>

                        {/* Aliados Comerciales */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative overflow-hidden rounded-[2.5rem] bg-[#1C1A27]/80 backdrop-blur-xl border border-white/10 p-10 group hover:border-blue-500/50 transition-colors duration-300"
                        >
                            <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-500" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/5 text-blue-400 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                                    <Handshake size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-extrabold text-white mb-4">Aliados comerciales</h3>
                                <p className="text-[#9E9BAE] text-lg leading-relaxed">
                                    Expanden la plataforma en nuevos mercados y segmentos.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VISIÓN & CTA PRE-FORM */}
            <section className="py-24 md:py-32 bg-white dark:bg-[#0e0a1b] text-center border-t border-zinc-100 dark:border-[#1C1A27] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#F97A22]/5 to-purple-600/5 dark:from-[#F97A22]/10 dark:to-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-8">
                            Un ecosistema diseñado para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97A22] to-orange-400">crecer en el tiempo</span>
                        </h2>
                        <div className="text-xl text-zinc-600 dark:text-[#9E9BAE] font-medium leading-relaxed space-y-6 mb-12">
                            <p>
                                <strong className="text-zinc-900 dark:text-white text-2xl">Norkut es la base operativa.</strong> <br />
                                Los partners son quienes impulsan su crecimiento.
                            </p>
                            <p>
                                Hoy puedes operar, gestionar clientes y generar ingresos recurrentes.<br />
                                Mañana, el ecosistema seguirá expandiendo sus capacidades.
                            </p>
                            <p className="text-[#F97A22] font-bold text-2xl pt-4">
                                Estamos construyendo una plataforma donde cada partner participa directamente en el valor generado.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FORMULARIO BITRIX */}
            <section id="partner-form" className="py-24 md:py-32 bg-zinc-50 dark:bg-[#110c22] border-t border-zinc-100 dark:border-[#1C1A27]">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight">
                            Accede al Portal de Partners y empieza a crecer.
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-[#1C1A27] border border-zinc-200 dark:border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative glow inside form container */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97A22]/5 blur-[60px] rounded-full pointer-events-none" />
                        <div className="relative z-10">
                            <div ref={formContainerRef} className="w-full min-h-[400px]"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
