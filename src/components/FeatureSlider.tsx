import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, ShoppingCart, Store, TrendingUp, CircleDollarSign, ArrowRight, ArrowLeft, MousePointer2, Users, Send, Heart, Landmark, Receipt, Mail } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import LogoISO from './LogoISO';

const OpsAnimation = () => {
    return (
        <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] bg-transparent flex items-center justify-center">
            <div className="relative w-64 h-64 scale-[1.5] origin-center">
                <div className="absolute bottom-10 left-0 right-0 h-4 bg-orange-200 rounded-full" />
                <div className="absolute bottom-6 left-0 right-0 h-4 flex justify-between px-2">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-3 h-3 rounded-full bg-orange-300" />)}
                </div>
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute bottom-14 left-0 w-16 h-16 flex flex-col items-center justify-center overflow-hidden"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: [-100, 100, 300], opacity: [0, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "linear" }}
                    >
                        <Package className="w-12 h-12 text-[#F97A22] relative z-10" strokeWidth={1.5} />
                    </motion.div>
                ))}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-28 bg-white rounded-2xl shadow-xl shadow-orange-900/10 border border-orange-100 p-4">
                    <div className="text-[10px] font-bold text-orange-500 mb-2">STOCK TOTAL</div>
                    <div className="flex items-end gap-2 h-12">
                        {[40, 70, 45, 90, 60].map((h, i) => (
                            <div key={i} className="flex-1 bg-orange-50 rounded-t-sm relative flex justify-end flex-col h-full">
                                <motion.div
                                    className="w-full bg-orange-500 rounded-t-sm"
                                    animate={{ height: [`${Math.max(10, h - 20)}%`, `${h}%`, `${Math.max(10, h - 20)}%`] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const PosAnimation = () => {
    return (
        <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] bg-transparent flex items-center justify-center">
            <div className="relative w-72 h-72 scale-[1.4] md:scale-[1.5] origin-center flex items-center justify-center">
                {["$ 24.50", "$ 115.00", "$ 8.90"].map((amount, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-[5%] top-1/2 -mt-6 bg-white rounded-lg shadow-md border border-emerald-100 px-3 py-2 text-xs font-bold text-emerald-700 flex items-center gap-2 z-0 origin-right"
                        initial={{ x: 140, y: 10, opacity: 0, scale: 0.5 }}
                        animate={{ x: [140, 40, 0, -20], y: [10, -30, -70, -110], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.9] }}
                        transition={{ duration: 4.5, repeat: Infinity, delay: i * 1.5, ease: "easeOut" }}
                    >
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        {amount}
                    </motion.div>
                ))}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-44 bg-white rounded-2xl shadow-xl shadow-orange-900/10 border border-orange-100 flex flex-col items-center pt-3 pb-2 z-10">
                    <div className="h-20 bg-orange-500 rounded-lg flex flex-col items-center justify-center text-center text-white relative overflow-hidden shadow-inner mx-auto px-2 w-[85%]">
                        <div className="absolute top-1 right-1 p-1">
                            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-orange-200" />
                        </div>
                        <span className="text-[7px] text-orange-100 font-medium mb-0.5 tracking-wider">COBRO TARJETA</span>
                        <motion.span className="text-white font-bold text-lg" animate={{ opacity: [1, 1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}>
                            ***
                        </motion.span>
                    </div>
                    <div className="w-full px-4 mt-3 grid grid-cols-3 gap-[4px] opacity-80">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((k) => (
                            <div key={k} className="h-2 w-full bg-zinc-100 rounded-sm" />
                        ))}
                    </div>
                    <div className="mt-3 w-8 h-1 bg-zinc-200 rounded-full" />
                </div>
                <motion.div
                    className="absolute z-20 w-24 h-14 bg-zinc-900 rounded-lg shadow-xl border border-zinc-700 flex flex-col justify-center px-3"
                    initial={{ right: 16, top: '50%', x: 120, y: 10, rotate: 15, opacity: 0 }}
                    animate={{ x: [120, 60, 10, 40, 120], y: [10, -30, -50, -30, 10], rotate: [15, 0, -15, 0, 15], opacity: [0, 1, 1, 0, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-5 h-4 bg-yellow-400/80 rounded-sm mb-1.5 opacity-90" />
                    <div className="flex gap-1 justify-end">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 mix-blend-screen" />
                        <div className="w-3 h-3 rounded-full bg-orange-500/80 -ml-1.5 mix-blend-screen" />
                    </div>
                </motion.div>
                <motion.div
                    className="absolute right-[3.8rem] top-[5.2rem] z-30 w-10 h-10 bg-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center border-2 border-white"
                    animate={{ scale: [0, 0, 1.2, 1, 0, 0], opacity: [0, 0, 1, 1, 0, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.3, 0.4, 0.6, 0.7, 1] }}
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

const StoresAnimation = () => {
    return (
        <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] bg-transparent flex items-center justify-center">
            <div className="relative w-64 h-64 scale-[1.3] origin-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl shadow-xl shadow-orange-900/10 border-[3px] border-[#F97A22] z-20 flex items-center justify-center">
                    <LogoISO className="h-8 w-auto text-[#F97A22]" />
                    <motion.div
                        className="absolute inset-0 rounded-2xl border-[3px] border-orange-400"
                        animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                </div>
                {[
                    { x: -110, y: -80 }, { x: 110, y: -55 }, { x: 0, y: 130 }, { x: -130, y: 25 }, { x: 85, y: 100 }
                ].map((pos, i) => (
                    <div key={i}>
                        <svg className="absolute top-0 left-0 w-full h-full z-0 overflow-visible">
                            <line x1="128" y1="128" x2={128 + pos.x} y2={128 + pos.y} stroke="#fed7aa" strokeWidth="3" strokeDasharray="6 6" />
                        </svg>
                        <motion.div
                            className="absolute w-3 h-3 bg-orange-500 rounded-full z-10 shadow-sm shadow-orange-500/50"
                            style={{ left: 128 - 6, top: 128 - 6 }}
                            animate={{ x: [0, pos.x, 0], y: [0, pos.y, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
                        />
                        <div
                            className="absolute w-12 h-12 bg-white rounded-xl shadow-md border border-orange-200 z-10 flex flex-col items-center justify-center"
                            style={{ left: 128 + pos.x - 24, top: 128 + pos.y - 24 }}
                        >
                            <Store className="w-5 h-5 text-orange-400" strokeWidth={2} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MarketingAnimation = () => {
    return (
        <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] bg-transparent flex items-center justify-center">
            <div className="relative w-72 h-72 scale-[1.4] md:scale-[1.5] origin-center">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-50 bg-white rounded-2xl shadow-xl shadow-orange-900/10 border border-orange-100 flex flex-col overflow-hidden z-10">
                    <div className="bg-orange-50 h-8 flex items-center px-2.5 gap-1.5 border-b border-orange-100">
                        <Mail className="w-3.5 h-3.5 text-[#F97A22] shrink-0" />
                        <span className="text-[7px] font-bold text-[#F97A22] tracking-wider whitespace-nowrap">NUEVA CAMPAÑA</span>
                    </div>
                    <div className="p-3 flex-1 flex flex-col gap-2.5">
                        <div className="h-1.5 w-1/2 bg-zinc-200 rounded-full" />
                        <div className="h-1.5 w-full bg-zinc-100 rounded-full" />
                        <div className="h-1.5 w-4/5 bg-zinc-100 rounded-full" />
                        <div className="h-1.5 w-full bg-zinc-100 rounded-full" />
                        <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-1 bg-orange-100 text-[#F97A22] rounded-md text-[7px] font-bold w-fit border border-orange-200">
                            <Users className="w-2.5 h-2.5" /> CLIENTES VIP
                        </div>
                    </div>
                    <div className="p-2 border-t border-zinc-50 mt-auto">
                        <motion.div
                            className="bg-[#F97A22] rounded-lg h-7 flex items-center justify-center gap-1.5 text-white shadow-sm"
                            animate={{ scale: [1, 1, 0.95, 1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.3, 0.4, 1] }}
                        >
                            <span className="text-[8px] font-bold tracking-wider">ENVIAR</span>
                            <Send className="w-2.5 h-2.5" />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="absolute z-30 drop-shadow-lg text-zinc-800"
                    initial={{ x: 140, y: 260 }}
                    animate={{ x: [140, 64, 64, 140, 140], y: [260, 224, 224, 260, 260], scale: [1, 1, 0.8, 1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.3, 0.5, 1], ease: "easeInOut" }}
                >
                    <MousePointer2 className="w-6 h-6 fill-white" />
                </motion.div>
                {[
                    { y: 62, delay: 0 }, { y: 122, delay: 0.08 }, { y: 182, delay: 0.16 }
                ].map((profile, i) => (
                    <div key={i}>
                        <div className="absolute right-0 w-28 h-12 bg-white rounded-xl shadow-md border border-zinc-100 flex items-center px-2.5 z-10" style={{ top: `${profile.y}px` }}>
                            <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center mr-2.5 border border-orange-100">
                                <Users className="w-3.5 h-3.5 text-[#F97A22]" />
                            </div>
                            <div className="flex flex-col gap-1.5 w-full">
                                <div className="h-1.5 w-full bg-zinc-200 rounded-full" />
                                <div className="h-1.5 w-2/3 bg-zinc-100 rounded-full" />
                            </div>
                        </div>
                        <motion.div
                            className="absolute z-20 bg-[#F97A22] rounded-full p-1.5 shadow-md shadow-orange-500/30"
                            initial={{ x: 64, y: 224, opacity: 0, scale: 0 }}
                            animate={{ x: [64, 64, 64, 176, 176, 176], y: [224, 224, 224, profile.y + 16, profile.y + 16, profile.y + 16], opacity: [0, 0, 1, 1, 0, 0], scale: [0, 0, 1, 1, 0.5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.35, 0.6 + profile.delay, 0.65 + profile.delay, 1], ease: "easeOut" }}
                        >
                            <Send className="w-3.5 h-3.5 text-white -translate-x-px translate-y-px" />
                        </motion.div>
                        <motion.div
                            className="absolute z-30 bg-red-500 text-white rounded-full p-1 shadow-lg border-2 border-white"
                            style={{ right: '-8px', top: `${profile.y - 8}px` }}
                            animate={{ scale: [0, 0, 1.2, 1, 1, 0], rotate: [-15, -15, 10, 0, 0, -15], opacity: [0, 0, 1, 1, 1, 0] }}
                            transition={{ duration: 4, repeat: Infinity, times: [0, 0.6 + profile.delay, 0.65 + profile.delay, 0.7 + profile.delay, 0.9, 1] }}
                        >
                            <Heart className="w-3.5 h-3.5 fill-white" />
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FinanceAnimation = () => {
    const flyingItems = [
        { id: 1, Icon: CircleDollarSign, startX: -100, endX: 100, startY: -15, endY: 15, delay: 0, duration: 2.3, color: "text-emerald-500", size: "w-5 h-5", rot: [0, 360] },
        { id: 2, Icon: Receipt, startX: -100, endX: 100, startY: 10, endY: -20, delay: 1.2, duration: 2.8, color: "text-zinc-500", size: "w-4 h-4", rot: [-10, 45] },
        { id: 3, Icon: CircleDollarSign, startX: -100, endX: 100, startY: 25, endY: 5, delay: 2.7, duration: 2.5, color: "text-emerald-400", size: "w-4 h-4", rot: [0, -360] },
        { id: 4, Icon: Receipt, startX: 100, endX: -100, startY: -25, endY: 10, delay: 0.5, duration: 2.6, color: "text-zinc-600", size: "w-5 h-5", rot: [10, -30] },
        { id: 5, Icon: CircleDollarSign, startX: 100, endX: -100, startY: 15, endY: -15, delay: 1.8, duration: 2.9, color: "text-emerald-500", size: "w-4 h-4", rot: [0, -180] },
        { id: 6, Icon: Receipt, startX: 100, endX: -100, startY: 0, endY: 25, delay: 3.1, duration: 2.4, color: "text-zinc-500", size: "w-4 h-4", rot: [20, 0] },
    ];

    return (
        <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] bg-transparent flex items-center justify-center">
            <div className="relative w-80 h-72 scale-[1.3] origin-center">
                <svg className="absolute top-0 left-0 w-full h-full z-0 overflow-visible">
                    <line x1="40" y1="144" x2="280" y2="144" stroke="#fed7aa" strokeWidth="2" strokeDasharray="6 6" />
                </svg>
                {flyingItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md border border-zinc-100 flex items-center justify-center"
                        initial={{ x: item.startX, y: item.startY, opacity: 0, scale: 0.5 }}
                        animate={{ x: [item.startX, (item.startX + item.endX) / 2, item.endX], y: [item.startY, item.startY - 30, item.endY], opacity: [0, 1, 0], scale: [0.5, 1.1, 0.5], rotate: item.rot as [number, number] }}
                        transition={{ duration: item.duration, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
                    >
                        <item.Icon className={`${item.color} ${item.size}`} />
                    </motion.div>
                ))}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl shadow-xl shadow-zinc-900/10 border border-zinc-200 z-20 flex flex-col items-center justify-center">
                    <Store className="w-8 h-8 text-zinc-700 mb-1" strokeWidth={1.5} />
                    <span className="text-[7px] font-bold tracking-wider text-zinc-400">TIENDA</span>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl shadow-xl shadow-zinc-900/10 border border-zinc-200 z-20 flex flex-col items-center justify-center">
                    <Landmark className="w-8 h-8 text-zinc-700 mb-1" strokeWidth={1.5} />
                    <span className="text-[7px] font-bold tracking-wider text-zinc-400">BANCO</span>
                </div>
            </div>
        </div>
    );
};

const featuresData = [
    {
        id: 'ops',
        category: "Operación y Abastecimiento",
        title: "Control inteligente para escalar tu negocio",
        description: "Esta herramienta facilita la administración diaria de tu comercio. Te permite registrar las compras a tus proveedores, realizar conteos periódicos para que tu inventario físico coincida siempre con el sistema y gestionar el envío de mercadería entre tus diferentes sucursales. El objetivo es que siempre cuentes con los productos necesarios para tus clientes.",
        Icon: Package,
        Animation: OpsAnimation,
    },
    {
        id: 'pos',
        category: "Ventas y Punto de Venta",
        title: "Atención ágil y ventas sin interrupciones",
        description: "El punto de venta está diseñado para ofrecer velocidad y continuidad en la atención al cliente. Puedes procesar pagos con diversos métodos en una misma factura y emitir comprobantes electrónicos vinculados a ARCA. Una ventaja fundamental es su capacidad híbrida, la cual te permite seguir vendiendo y facturando con normalidad aunque te quedes temporalmente sin acceso a internet.",
        Icon: ShoppingCart,
        Animation: PosAnimation,
    },
    {
        id: 'stores',
        category: "Gestión de Tiendas",
        title: "Control centralizado para todas tus sucursales",
        description: "A medida que tu negocio crece, Norkut te acompaña. Esta sección te permite dar de alta nuevos puntos de venta, definir cuántas cajas operarán en cada local y gestionar sus accesos de manera centralizada. Toda la información de tus tiendas se mantiene consistente y estandarizada, permitiéndote tener un control total desde una sola cuenta administrativa.",
        Icon: Store,
        Animation: StoresAnimation,
    },
    {
        id: 'marketing',
        category: "Marketing y Clientes",
        title: "Conecta con tu público y aumenta tus ventas",
        description: "Considera a tus clientes como el activo más valioso de tu empresa. A través de la hiper-personalización de datos, puedes conocer qué prefieren comprar y con qué frecuencia lo hacen. Con esta información, tienes la posibilidad de lanzar campañas de comunicación dirigidas específicamente a los intereses de cada grupo de clientes para aumentar tus ventas.",
        Icon: TrendingUp,
        Animation: MarketingAnimation,
    },
    {
        id: 'finance',
        category: "Finanzas y Administración",
        title: "Visibilidad y control total sobre tus números",
        description: "Obtén un gobierno interno sólido de tu plataforma. Esta funcionalidad te permite conciliar los turnos de trabajo para verificar que el dinero en caja sea el correcto, visualizar resúmenes de tus movimientos bancarios y registrar todos los pagos realizados. De esta manera, mantienes la trazabilidad de cada centavo y conoces con exactitud tus márgenes de ganancia.",
        Icon: CircleDollarSign,
        Animation: FinanceAnimation,
    }
];

export default function FeatureSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHoveringSlide, setIsHoveringSlide] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false); // Can be enabled via setting true later if needed

    useEffect(() => {
        if (!autoPlay) return;
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % featuresData.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [autoPlay]);

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % featuresData.length);
    };

    const handlePrev = () => {
        setActiveIndex((current) => (current === 0 ? featuresData.length - 1 : current - 1));
    };

    return (
        <section className="py-24 bg-zinc-50 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">
                
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl lg:text-[42px] font-extrabold tracking-tight text-zinc-900 text-center mb-10 md:mb-12">
                    Una plataforma, múltiples funcionalidades
                </h2>

                {/* Main Tabs Container */}
                <div className="flex justify-center mb-8 max-w-6xl mx-auto">
                    <div className="flex w-full bg-linear-to-b from-[#edf2f7] to-[#f6f5f5] dark:bg-none dark:bg-[#262232] rounded-full border border-zinc-200 dark:border-[#4b4756] shadow-sm p-1 overflow-x-auto no-scrollbar items-center">
                        {featuresData.map((feature, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`flex items-center justify-center flex-1 gap-2 px-4 md:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 border ${
                                        isActive 
                                            ? 'bg-[#ffffff] dark:bg-transparent border-[#F97A22] text-[#F97A22] shadow-[0_2px_10px_-4px_rgba(249,122,34,0.3)]' 
                                            : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:bg-transparent'
                                    }`}
                                >
                                    <feature.Icon className="w-[18px] h-[18px]" strokeWidth={isActive ? 2.5 : 2} />
                                    {feature.category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Slider Container */}
                <div 
                    className="bg-linear-to-b from-[#edf2f7] to-[#f6f5f5] dark:bg-none dark:bg-[#262232] rounded-[2.5rem] border border-zinc-200 dark:border-[#4b4756] p-8 md:p-12 lg:p-16 relative shadow-sm min-h-[500px] flex items-center group max-w-6xl mx-auto"
                    onMouseEnter={() => setIsHoveringSlide(true)}
                    onMouseLeave={() => setIsHoveringSlide(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full"
                        >
                            {/* Text Sidebar */}
                            <div className="flex-1 text-left w-full lg:w-[45%] relative z-10 hidden md:flex flex-col">
                                <span className="inline-block text-[13px] font-bold text-[#F97A22] mb-3 uppercase">
                                    {featuresData[activeIndex].category}
                                </span>
                                <h3 className="text-3xl md:text-[34px] lg:text-[40px] font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.15]">
                                    {featuresData[activeIndex].title}
                                </h3>
                                <p className="text-[17px] text-zinc-600 font-medium leading-relaxed mb-8">
                                    {featuresData[activeIndex].description}
                                </p>
                                <div className="flex">
                                    <CTAButton>
                                        Empieza gratis
                                    </CTAButton>
                                </div>
                            </div>
                            
                            {/* Mobile View text content (to preserve order or adapt better on phones) */}
                            <div className="md:hidden flex flex-col text-center items-center mb-6">
                                <span className="inline-block text-sm font-bold text-[#F97A22] mb-2 uppercase">
                                    {featuresData[activeIndex].category}
                                </span>
                                <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-4 leading-tight">
                                    {featuresData[activeIndex].title}
                                </h3>
                            </div>

                            {/* Animation Output */}
                            <div className="flex-1 w-full lg:w-[55%] flex justify-center lg:justify-end relative z-10 min-h-[300px]">
                                {(() => {
                                    const AnimationComponent = featuresData[activeIndex].Animation;
                                    return <AnimationComponent />;
                                })()}
                                
                                {/* Mobile Prev Arrow */}
                                <button
                                    onClick={handlePrev}
                                    className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-zinc-100 text-zinc-500 active:text-[#F97A22] z-30"
                                    aria-label="Previous feature"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                
                                {/* Mobile Next Arrow */}
                                <button
                                    onClick={handleNext}
                                    className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border border-zinc-100 text-zinc-500 active:text-[#F97A22] z-30"
                                    aria-label="Next feature"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                            
                            {/* Mobile specific description and CTA placed below animation */}
                            <div className="md:hidden flex flex-col text-center mt-6">
                                <p className="text-[15px] text-zinc-600 font-medium leading-relaxed mb-6">
                                    {featuresData[activeIndex].description}
                                </p>
                                <div className="flex justify-center">
                                    <CTAButton>
                                        Empieza gratis
                                    </CTAButton>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Forward Arrow overlay (Right-aligned, appears on hover of slide) */}
                    <AnimatePresence>
                        {isHoveringSlide && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                onClick={handleNext}
                                className="hidden md:flex absolute bottom-6 right-6 md:bottom-10 md:right-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg border border-zinc-100 text-zinc-500 hover:text-[#F97A22] transition-colors z-30"
                                aria-label="Next feature"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom Dot indicators outside slider */}
                <div className="flex justify-center mt-8 gap-2">
                    {featuresData.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                idx === activeIndex ? 'bg-[#F97A22] w-6' : 'bg-zinc-300 w-2 hover:bg-zinc-400'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
                
            </div>
        </section>
    );
}
