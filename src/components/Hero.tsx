import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { CheckCircle2, DollarSign, Users, Receipt, ClipboardCheck } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import graficoLimpio from '../assets/grafico-limpio.png';

const words = ['Anticipa', 'Resuelve', 'Planifica', 'Proyecta'];

function AnimatedCounter({ value, prefix = "", suffix = "", decimals = 2, active = false }: { value: number, prefix?: string, suffix?: string, decimals?: number, active: boolean }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => prefix + latest.toFixed(decimals) + suffix);
    useEffect(() => {
        if (active) {
            const controls = animate(count, value, { duration: 2, ease: "easeOut", delay: 0.1 });
            return controls.stop;
        }
    }, [value, count, active]);
    return <motion.span>{rounded}</motion.span>;
}

const kpis = [
    { prefix: "USD ", value: 93.42, suffix: " K", subtitle: "Ventas totales", change: "53,08%", icon: DollarSign, decimals: 2 },
    { prefix: "", value: 6.62, suffix: " K", subtitle: "Clientes activos de 22.84 K", change: "24,15%", icon: Users, decimals: 2 },
    { prefix: "USD ", value: 1.43, suffix: "", subtitle: "Ticket promedio", change: "53,08%", icon: Receipt, decimals: 2 },
    { prefix: "", value: 35.15, suffix: " %", subtitle: "Precisión del Inventario", change: "18,40%", icon: ClipboardCheck, decimals: 2 },
];

const tooltipPoints = [
    { left: '11.5%', top: '50%', val: '$ 9.431' },
    { left: '28%', top: '75%', val: '$ 5.341' },
    { left: '44.7%', top: '65%', val: '$ 7.341' },
    { left: '61.4%', top: '20%', val: '$ 15.341' },
    { left: '77.9%', top: '35%', val: '$ 12.819' },
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [step, setStep] = useState(-1);
    const [activePoint, setActivePoint] = useState(0);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    // Headline rotation and animation sequence
    useEffect(() => {
        const headlineTimer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);

        const sequence = async () => {
            setStep(0); // Show Top KPI Cards
            await new Promise((r) => setTimeout(r, 600));
            setStep(1); // Show Line Chart
            await new Promise((r) => setTimeout(r, 800));
            setStep(2); // Show Pie Chart
            await new Promise((r) => setTimeout(r, 1200));
            setStep(3); // Show Tooltip
        };
        sequence();

        return () => {
            clearInterval(headlineTimer);
        };
    }, []);

    // Tooltip loop: Appear, stay 1s, disappear, wait 0.5s, next point
    useEffect(() => {
        if (step >= 3) {
            let mounted = true;
            const loop = async () => {
                while (mounted) {
                    setIsTooltipVisible(true);
                    await new Promise(r => setTimeout(r, 5000)); // Stay visible 5 seconds
                    if (!mounted) break;
                    setIsTooltipVisible(false);
                    await new Promise(r => setTimeout(r, 3000)); // Gap before next appear (3 seconds)
                    if (mounted) {
                        setActivePoint((prev) => (prev + 1) % tooltipPoints.length);
                    }
                }
            };
            loop();
            return () => { mounted = false; };
        }
    }, [step]);

    return (
        <section className="hero-section relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-linear-to-b from-[#f0f4f8] via-white to-zinc-50">
            {/* Soft Ambient Orbs Matching Image Background */}
            <div className="hero-orb absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#e2ecf7] rounded-full blur-[120px] pointer-events-none opacity-80" />
            {/* Transition to next section base color gracefully handled by next component */}

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    <div className="flex flex-col items-start">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.15] mb-6">
                            <span className="block h-[1.2em] relative overflow-hidden text-primary" style={{ perspective: "1000px" }}>
                                <AnimatePresence>
                                    <motion.span
                                        key={words[index]}
                                        initial={{ rotateX: 90, y: "-80%", opacity: 0 }}
                                        animate={{ rotateX: 0, y: "0%", opacity: 1 }}
                                        exit={{ rotateX: -90, y: "80%", opacity: 0 }}
                                        transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
                                        className="absolute inset-x-0 top-0 flex transform-gpu"
                                        style={{ transformOrigin: "center center" }}
                                    >
                                        {words[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                            tu inventario con Norkut
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-10 max-w-lg">
                            Norkut es la plataforma con IA que necesitas para centralizar la gestión operativa de tu negocio.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <CTAButton>
                                Comienza gratis hoy
                            </CTAButton>
                            <button className="px-8 h-[48px] bg-transparent border border-zinc-200/80 text-zinc-700 text-[15.5px] font-medium rounded-full hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all outline-none flex items-center justify-center shrink-0">
                                Solicitar una demo
                            </button>
                        </div>

                        <div className="mt-5 text-[14px] text-zinc-500 font-medium flex items-center gap-5">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-[16px] h-[16px] text-[#F97A22]" strokeWidth={1.5} />
                                Sin tarjetas
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-[16px] h-[16px] text-[#F97A22]" strokeWidth={1.5} />
                                Sin instalaciones
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Dashboard UI ── */}
                    <div className="hero-dashboard relative hidden lg:block h-full">
                        <div className="relative left-0 w-[160%] max-w-none">
                            <div
                                className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-100 bg-[#f4f4f5] transition-shadow duration-500"
                            >
                                {/* Imagen de fondo limpia */}
                                <img
                                    src={graficoLimpio}
                                    alt="Norkut Dashboard Clean"
                                    className="w-full h-auto object-cover opacity-90"
                                    draggable={false}
                                />

                                {/* Overlay Container Exacto donde van las cajas */}
                                <div className="absolute top-[18.5%] left-[17.5%] w-[81%] h-[78%] flex flex-col gap-[2%] p-[0.5%] pointer-events-none translate-y-[15px]">

                                    {/* ── Top Row: 4 KPIs ── */}
                                    <div className="h-[20%] grid grid-cols-4 gap-[2%] -mt-6 xl:-mt-8">
                                        {kpis.map((kpi, i) => (
                                            <motion.div
                                                key={i}
                                                className="bg-white rounded-xl shadow-sm border border-zinc-100 p-3 xl:p-4 flex flex-col justify-between"
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={step >= 0 ? { opacity: 1, y: 0 } : {}}
                                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="text-sm xl:text-lg font-bold text-zinc-900 leading-tight whitespace-nowrap">
                                                            <AnimatedCounter value={kpi.value} prefix={kpi.prefix} suffix={kpi.suffix} decimals={kpi.decimals} active={step >= 0} />
                                                        </h3>
                                                        <p className="text-[9px] xl:text-[11px] text-zinc-500 leading-tight mt-0.5 truncate max-w-[100px] xl:max-w-[120px]">{kpi.subtitle}</p>
                                                    </div>
                                                    <div className="w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                                                        <kpi.icon size={14} className="xl:w-4 xl:h-4" />
                                                    </div>
                                                </div>
                                                <div className="mt-2 flex items-center gap-1.5 xl:gap-2">
                                                    <div className="flex items-center gap-0.5 xl:gap-1 bg-emerald-100/60 text-emerald-600 rounded px-1 xl:px-1.5 py-0.5">
                                                        <span className="text-[8px] xl:text-[10px] font-bold">{kpi.change}</span>
                                                        <svg className="w-2 h-2 xl:w-2.5 xl:h-2.5 translate-y-[0.5px]" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 4l-8 8h16l-8-8z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[8px] xl:text-[10px] font-medium text-zinc-500">Aumentó</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* ── Bottom Row: Charts ── */}
                                    <div className="h-[78%] flex gap-[2%] mt-[20px]">

                                        {/* Chart 1: Line Chart Area */}
                                        <motion.div
                                            className="flex-65 bg-white rounded-xl shadow-sm border border-zinc-100 p-4 relative"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={step >= 1 ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                                        >
                                            <h3 className="text-[13px] font-bold text-zinc-900 mb-4">Ventas por tienda</h3>

                                            {/* Y-Axis */}
                                            <div className="absolute left-4 top-14 bottom-14 flex flex-col justify-between text-[8px] xl:text-[9px] text-zinc-400">
                                                <span>USD 8 K</span><span>USD 6 K</span><span>USD 4 K</span><span>USD 2 K</span><span>USD 0</span>
                                            </div>
                                            {/* X-Axis */}
                                            <div className="absolute bottom-10 left-16 right-6 flex justify-between text-[8px] xl:text-[9px] text-zinc-400">
                                                <span>18/02</span><span>22/02</span><span>26/02</span><span>02/03</span><span>06/03</span><span>09/03</span>
                                            </div>
                                            {/* Legends */}
                                            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-4 text-[8px] xl:text-[9px] text-zinc-600 font-medium">
                                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Sigo+4 Boca del Rio</div>
                                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Bodegon PCA</div>
                                                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500"></span>Bodegon La Vela</div>
                                            </div>

                                            {/* Animated SVG Bar Chart */}
                                            <div className="absolute top-12 bottom-16 left-16 right-6">
                                                <svg viewBox="0 0 600 200" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                                                    {/* Bar Groups */}
                                                    {[
                                                        { px: 50, pTop: 160, oTop: 140, gTop: 100 },
                                                        { px: 150, pTop: 150, oTop: 120, gTop: 150 },
                                                        { px: 250, pTop: 170, oTop: 160, gTop: 130 },
                                                        { px: 350, pTop: 160, oTop: 80, gTop: 40 },
                                                        { px: 450, pTop: 160, oTop: 110, gTop: 70 },
                                                        { px: 550, pTop: 180, oTop: 130, gTop: 110 }
                                                    ].map((col, i) => (
                                                        <g key={i}>
                                                            {/* Purple Bar */}
                                                            {step >= 1 && (
                                                                <motion.rect
                                                                    className={`transition-opacity duration-300 ${isTooltipVisible ? 'opacity-40' : 'opacity-100'}`}
                                                                    initial={{ height: 0, y: 200 }}
                                                                    animate={{
                                                                        height: isTooltipVisible ? 0 : 200 - col.pTop,
                                                                        y: isTooltipVisible ? 200 : col.pTop
                                                                    }}
                                                                    transition={{ duration: 0.8, delay: isTooltipVisible ? (i * 0.05) : (0.2 + i * 0.1), type: "spring" }}
                                                                    x={col.px - 28} width="18" fill="#c084fc" rx="3"
                                                                />
                                                            )}
                                                            {/* Orange Bar */}
                                                            {step >= 1 && (
                                                                <motion.rect
                                                                    className={`transition-opacity duration-300 ${isTooltipVisible ? 'opacity-40' : 'opacity-100'}`}
                                                                    initial={{ height: 0, y: 200 }}
                                                                    animate={{
                                                                        height: isTooltipVisible ? 0 : 200 - col.oTop,
                                                                        y: isTooltipVisible ? 200 : col.oTop
                                                                    }}
                                                                    transition={{ duration: 0.8, delay: isTooltipVisible ? (0.1 + i * 0.05) : (0.4 + i * 0.1), type: "spring" }}
                                                                    x={col.px - 9} width="18" fill="#f59e0b" rx="3"
                                                                />
                                                            )}
                                                            {/* Green Bar */}
                                                            {step >= 1 && (
                                                                <motion.rect
                                                                    initial={{ height: 0, y: 200 }}
                                                                    animate={{ height: 200 - col.gTop, y: col.gTop }}
                                                                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1, type: "spring" }}
                                                                    x={col.px + 10} width="18" fill="#22c55e" rx="3"
                                                                />
                                                            )}
                                                        </g>
                                                    ))}
                                                </svg>

                                                {/* Tracking Tooltip Modal */}
                                                <AnimatePresence>
                                                    {step >= 3 && isTooltipVisible && (
                                                        <motion.div
                                                            className="absolute z-30 pointer-events-none"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1.2 }}
                                                            exit={{ opacity: 0, scale: 0.8 }}
                                                            transition={{ duration: 0.8, type: "spring", bounce: 0.7 }}
                                                            style={{
                                                                left: tooltipPoints[activePoint].left,
                                                                top: tooltipPoints[activePoint].top,
                                                            }}
                                                        >
                                                            <div className="relative -ml-[5px] -mt-[5px]">
                                                                {/* Tracking dot */}
                                                                <div className="absolute top-0 flex items-center justify-center">
                                                                    <div className="w-[10px] h-[10px] bg-white border-2 border-emerald-500 rounded-full shadow-sm" />
                                                                    <div className="animate-ping absolute w-full h-full bg-emerald-400 rounded-full opacity-50" />
                                                                </div>

                                                                {/* Tooltip Box */}
                                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white text-black px-4 py-2 rounded  border-gray-200 shadow-lg whitespace-nowrap hidden md:block" style={{ transformOrigin: 'bottom center' }}>
                                                                    <p className="text-[7px] font-medium leading-none mb-[2px]">TOTAL VENDIDO</p>
                                                                    <p className="text-xs font-bold leading-none text-center text-green-600">{tooltipPoints[activePoint].val}</p>
                                                                    {/* Triangle */}
                                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-white"></div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>

                                        {/* Chart 2: Pie Chart Array */}
                                        <motion.div
                                            className="flex-35 bg-white rounded-xl shadow-sm border border-zinc-100 p-4 relative"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={step >= 2 ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                                        >
                                            <h3 className="text-[13px] font-bold text-zinc-900 mb-6">Top de ventas por categorías</h3>

                                            <div className="relative w-[65%] aspect-square mx-auto my-auto mt-2 xl:mt-4">
                                                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                                                    {/* Background track */}
                                                    <circle cx="50" cy="50" r="38" fill="none" stroke="#f1f5f9" strokeWidth="20" />

                                                    {step >= 2 && (
                                                        <>
                                                            {/* Segments drawing sequentially */}
                                                            <motion.circle cx="50" cy="50" r="38" fill="none" stroke="#64748b" strokeWidth="20" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 0.15 }} transition={{ duration: 0.6 }} style={{ rotate: -90, transformOrigin: '50% 50%' }} />
                                                            <motion.circle cx="50" cy="50" r="38" fill="none" stroke="#22c55e" strokeWidth="20" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 0.2 }} transition={{ duration: 0.6, delay: 0.4 }} style={{ rotate: -36, transformOrigin: '50% 50%' }} />
                                                            <motion.circle cx="50" cy="50" r="38" fill="none" stroke="#f59e0b" strokeWidth="20" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 0.3 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ rotate: 36, transformOrigin: '50% 50%' }} />
                                                            <motion.circle cx="50" cy="50" r="38" fill="none" stroke="#3b82f6" strokeWidth="20" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 0.35 }} transition={{ duration: 0.8, delay: 1.4 }} style={{ rotate: 144, transformOrigin: '50% 50%' }} />
                                                        </>
                                                    )}
                                                </svg>

                                                <div className="absolute inset-0 flex flex-col items-center justify-center -space-y-0.5 pointer-events-none">
                                                    <span className="text-[8px] xl:text-[9px] font-semibold text-zinc-400">USD 93.42 K</span>
                                                    <span className="text-[10px] xl:text-xs font-bold text-zinc-800 leading-tight">Total de<br />ventas</span>
                                                </div>
                                            </div>

                                            {/* Legend */}
                                            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-y-2 gap-x-1 text-[8px] lg:text-[7px] xl:text-[9px] text-zinc-600 font-medium whitespace-nowrap">
                                                <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>ENTERO</div>
                                                <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>DE LUXE</div>
                                                <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>LECHE</div>
                                                <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>TRADICIONAL</div>
                                                <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>SANDWICH</div>
                                                <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>Otros</div>
                                            </div>
                                        </motion.div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
