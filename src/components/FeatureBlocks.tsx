import { motion } from 'framer-motion';
import { Package, Store, Landmark, Receipt, CircleDollarSign, Mail, Users, MousePointer2, Heart, Send } from 'lucide-react';
import CTAButton from './ui/CTAButton';
import LogoISO from './LogoISO';

const OpsAnimation = () => {
    return (
        <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] bg-transparent flex items-center justify-center">
            <div className="relative w-64 h-64 scale-[1.5] origin-center">
                {/* Conveyor base */}
                <div className="absolute bottom-10 left-0 right-0 h-4 bg-orange-200 rounded-full" />
                <div className="absolute bottom-6 left-0 right-0 h-4 flex justify-between px-2">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-3 h-3 rounded-full bg-orange-300" />)}
                </div>

                {/* Boxes moving */}
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

                {/* Inventory HUD */}
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

                {/* Sales Tickets popping up on the left */}
                {["$ 24.50", "$ 115.00", "$ 8.90"].map((amount, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-[5%] top-1/2 -mt-6 bg-white rounded-lg shadow-md border border-emerald-100 px-3 py-2 text-xs font-bold text-emerald-700 flex items-center gap-2 z-0 origin-right"
                        initial={{ x: 140, y: 10, opacity: 0, scale: 0.5 }}
                        animate={{
                            x: [140, 40, 0, -20],
                            y: [10, -30, -70, -110],
                            opacity: [0, 1, 1, 0],
                            scale: [0.5, 1, 1, 0.9]
                        }}
                        transition={{ duration: 4.5, repeat: Infinity, delay: i * 1.5, ease: "easeOut" }}
                    >
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        {amount}
                    </motion.div>
                ))}

                {/* Handheld POS Terminal on the right/center */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-44 bg-white rounded-2xl shadow-xl shadow-orange-900/10 border border-orange-100 flex flex-col items-center pt-3 pb-2 z-10">
                    <div className="h-20 bg-orange-500 rounded-lg flex flex-col items-center justify-center text-center text-white relative overflow-hidden shadow-inner mx-auto px-2 w-[85%]">
                        <div className="absolute top-1 right-1 p-1">
                            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-orange-200" />
                        </div>
                        <span className="text-[7px] text-orange-100 font-medium mb-0.5 tracking-wider">COBRO TARJETA</span>
                        <motion.span
                            className="text-white font-bold text-lg"
                            animate={{ opacity: [1, 1, 0, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
                        >
                            ***
                        </motion.span>
                    </div>
                    {/* Keypad */}
                    <div className="w-full px-4 mt-3 grid grid-cols-3 gap-[4px] opacity-80">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((k) => (
                            <div key={k} className="h-2 w-full bg-zinc-100 rounded-sm" />
                        ))}
                    </div>
                    <div className="mt-3 w-8 h-1 bg-zinc-200 rounded-full" />
                </div>

                {/* Credit Card swiping over */}
                <motion.div
                    className="absolute z-20 w-24 h-14 bg-zinc-900 rounded-lg shadow-xl border border-zinc-700 flex flex-col justify-center px-3"
                    initial={{ right: 16, top: '50%', x: 120, y: 10, rotate: 15, opacity: 0 }}
                    animate={{
                        x: [120, 60, 10, 40, 120],
                        y: [10, -30, -50, -30, 10],
                        rotate: [15, 0, -15, 0, 15],
                        opacity: [0, 1, 1, 0, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-5 h-4 bg-yellow-400/80 rounded-sm mb-1.5 opacity-90" />
                    <div className="flex gap-1 justify-end">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 mix-blend-screen" />
                        <div className="w-3 h-3 rounded-full bg-orange-500/80 -ml-1.5 mix-blend-screen" />
                    </div>
                </motion.div>

                {/* Success Checkmark emerging from the POS screen */}
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
                {/* Central Admin Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl shadow-xl shadow-orange-900/10 border-[3px] border-[#F97A22] z-20 flex items-center justify-center">
                    <LogoISO className="h-8 w-auto text-[#F97A22]" />
                    {/* Radar pulse */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl border-[3px] border-orange-400"
                        animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                </div>

                {/* Branches */}
                {[
                    { x: -110, y: -80 },
                    { x: 110, y: -55 },
                    { x: 0, y: 130 },
                    { x: -130, y: 25 },
                    { x: 85, y: 100 }
                ].map((pos, i) => (
                    <div key={i}>
                        {/* the line */}
                        <svg className="absolute top-0 left-0 w-full h-full z-0 overflow-visible">
                            <line
                                x1="128" y1="128"
                                x2={128 + pos.x} y2={128 + pos.y}
                                stroke="#fed7aa" strokeWidth="3" strokeDasharray="6 6"
                            />
                        </svg>

                        {/* data packet moving out */}
                        <motion.div
                            className="absolute w-3 h-3 bg-orange-500 rounded-full z-10 shadow-sm shadow-orange-500/50"
                            style={{ left: 128 - 6, top: 128 - 6 }}
                            animate={{
                                x: [0, pos.x, 0],
                                y: [0, pos.y, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
                        />

                        {/* Store node */}
                        <div
                            className="absolute w-12 h-12 bg-white rounded-xl shadow-md border border-orange-200 z-10 flex flex-col items-center justify-center"
                            style={{
                                left: 128 + pos.x - 24,
                                top: 128 + pos.y - 24
                            }}
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

                {/* Left: Campaign Builder UI */}
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

                        {/* Target Segment Tag */}
                        <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-1 bg-orange-100 text-[#F97A22] rounded-md text-[7px] font-bold w-fit border border-orange-200">
                            <Users className="w-2.5 h-2.5" /> CLIENTES VIP
                        </div>
                    </div>
                    {/* Animated Send Button */}
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

                {/* Animated Mouse Cursor */}
                <motion.div
                    className="absolute z-30 drop-shadow-lg text-zinc-800"
                    initial={{ x: 140, y: 260 }}
                    animate={{
                        x: [140, 64, 64, 140, 140],
                        y: [260, 224, 224, 260, 260],
                        scale: [1, 1, 0.8, 1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.3, 0.5, 1], ease: "easeInOut" }}
                >
                    <MousePointer2 className="w-6 h-6 fill-white" />
                </motion.div>

                {/* Right: Customer Profiles */}
                {[
                    { y: 62, delay: 0 },
                    { y: 122, delay: 0.08 },
                    { y: 182, delay: 0.16 }
                ].map((profile, i) => (
                    <div key={i}>
                        {/* Profile Card */}
                        <div
                            className="absolute right-0 w-28 h-12 bg-white rounded-xl shadow-md border border-zinc-100 flex items-center px-2.5 z-10"
                            style={{ top: `${profile.y}px` }}
                        >
                            <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center mr-2.5 border border-orange-100">
                                <Users className="w-3.5 h-3.5 text-[#F97A22]" />
                            </div>
                            <div className="flex flex-col gap-1.5 w-full">
                                <div className="h-1.5 w-full bg-zinc-200 rounded-full" />
                                <div className="h-1.5 w-2/3 bg-zinc-100 rounded-full" />
                            </div>
                        </div>

                        {/* Flying Message (Paper Plane) */}
                        <motion.div
                            className="absolute z-20 bg-[#F97A22] rounded-full p-1.5 shadow-md shadow-orange-500/30"
                            initial={{ x: 64, y: 224, opacity: 0, scale: 0 }}
                            animate={{
                                x: [64, 64, 64, 176, 176, 176],
                                y: [224, 224, 224, profile.y + 16, profile.y + 16, profile.y + 16],
                                opacity: [0, 0, 1, 1, 0, 0],
                                scale: [0, 0, 1, 1, 0.5, 0]
                            }}
                            transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.35, 0.6 + profile.delay, 0.65 + profile.delay, 1], ease: "easeOut" }}
                        >
                            <Send className="w-3.5 h-3.5 text-white -translate-x-px translate-y-px" />
                        </motion.div>

                        {/* Reaction / Success Pop */}
                        <motion.div
                            className="absolute z-30 bg-red-500 text-white rounded-full p-1 shadow-lg border-2 border-white"
                            style={{ right: '-8px', top: `${profile.y - 8}px` }}
                            animate={{
                                scale: [0, 0, 1.2, 1, 1, 0],
                                rotate: [-15, -15, 10, 0, 0, -15],
                                opacity: [0, 0, 1, 1, 1, 0]
                            }}
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
    // Flying money and receipts data
    const flyingItems = [
        // Store -> Bank (Money / Tickets)
        { id: 1, Icon: CircleDollarSign, startX: -100, endX: 100, startY: -15, endY: 15, delay: 0, duration: 2.3, color: "text-emerald-500", size: "w-5 h-5", rot: [0, 360] },
        { id: 2, Icon: Receipt, startX: -100, endX: 100, startY: 10, endY: -20, delay: 1.2, duration: 2.8, color: "text-zinc-500", size: "w-4 h-4", rot: [-10, 45] },
        { id: 3, Icon: CircleDollarSign, startX: -100, endX: 100, startY: 25, endY: 5, delay: 2.7, duration: 2.5, color: "text-emerald-400", size: "w-4 h-4", rot: [0, -360] },

        // Bank -> Store (Receipts / Money)
        { id: 4, Icon: Receipt, startX: 100, endX: -100, startY: -25, endY: 10, delay: 0.5, duration: 2.6, color: "text-zinc-600", size: "w-5 h-5", rot: [10, -30] },
        { id: 5, Icon: CircleDollarSign, startX: 100, endX: -100, startY: 15, endY: -15, delay: 1.8, duration: 2.9, color: "text-emerald-500", size: "w-4 h-4", rot: [0, -180] },
        { id: 6, Icon: Receipt, startX: 100, endX: -100, startY: 0, endY: 25, delay: 3.1, duration: 2.4, color: "text-zinc-500", size: "w-4 h-4", rot: [20, 0] },
    ];

    return (
        <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] bg-transparent flex items-center justify-center">
            <div className="relative w-80 h-72 scale-[1.3] origin-center">

                {/* Connecting Path */}
                <svg className="absolute top-0 left-0 w-full h-full z-0 overflow-visible">
                    <line
                        x1="40" y1="144"
                        x2="280" y2="144"
                        stroke="#fed7aa" strokeWidth="2" strokeDasharray="6 6"
                    />
                </svg>

                {/* Flying items */}
                {flyingItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-md border border-zinc-100 flex items-center justify-center"
                        initial={{ x: item.startX, y: item.startY, opacity: 0, scale: 0.5 }}
                        animate={{
                            x: [item.startX, (item.startX + item.endX) / 2, item.endX],
                            y: [item.startY, item.startY - 30, item.endY],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.1, 0.5],
                            rotate: item.rot
                        }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "easeInOut"
                        }}
                    >
                        <item.Icon className={`${item.color} ${item.size}`} />
                    </motion.div>
                ))}

                {/* Left Node: Store */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl shadow-xl shadow-zinc-900/10 border border-zinc-200 z-20 flex flex-col items-center justify-center">
                    <Store className="w-8 h-8 text-zinc-700 mb-1" strokeWidth={1.5} />
                    <span className="text-[7px] font-bold tracking-wider text-zinc-400">TIENDA</span>
                </div>

                {/* Right Node: Bank */}
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
        title: "Operación y Abastecimiento",
        description: "Esta herramienta facilita la administración diaria de tu comercio. Te permite registrar las compras a tus proveedores, realizar conteos periódicos para que tu inventario físico coincida siempre con el sistema y gestionar el envío de mercadería entre tus diferentes sucursales. El objetivo es que siempre cuentes con los productos necesarios para tus clientes.",
        Animation: OpsAnimation,
    },
    {
        title: "Ventas y Punto de Venta (POS)",
        description: "El punto de venta está diseñado para ofrecer velocidad y continuidad en la atención al cliente. Puedes procesar pagos con diversos métodos en una misma factura y emitir comprobantes electrónicos vinculados a ARCA. Una ventaja fundamental es su capacidad híbrida, la cual te permite seguir vendiendo y facturando con normalidad aunque te quedes temporalmente sin acceso a internet.",
        Animation: PosAnimation,
    },
    {
        title: "Gestión de Tiendas",
        description: "A medida que tu negocio crece, Norkut te acompaña. Esta sección te permite dar de alta nuevos puntos de venta, definir cuántas cajas operarán en cada local y gestionar sus accesos de manera centralizada. Toda la información de tus tiendas se mantiene consistente y estandarizada, permitiéndote tener un control total desde una sola cuenta administrativa.",
        Animation: StoresAnimation,
    },
    {
        title: "Marketing y Clientes",
        description: "Considera a tus clientes como el activo más valioso de tu empresa. A través de la hiper-personalización de datos, puedes conocer qué prefieren comprar y con qué frecuencia lo hacen. Con esta información, tienes la posibilidad de lanzar campañas de comunicación dirigidas específicamente a los intereses de cada grupo de clientes para aumentar tus ventas.",
        Animation: MarketingAnimation,
    },
    {
        title: "Finanzas y Administración",
        description: "Obtén un gobierno interno sólido de tu plataforma. Esta funcionalidad te permite conciliar los turnos de trabajo para verificar que el dinero en caja sea el correcto, visualizar resúmenes de tus movimientos bancarios y registrar todos los pagos realizados. De esta manera, mantienes la trazabilidad de cada centavo y conoces con exactitud tus márgenes de ganancia.",
        Animation: FinanceAnimation,
    }
];

export default function FeatureBlocks() {
    return (
        <section className="py-24 bg-zinc-50 border-t border-zinc-100">
            <div className="container mx-auto px-4 md:px-6 flex flex-col gap-12 md:gap-16">
                {featuresData.map((feature, idx) => {
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="bg-white rounded-[2.5rem] p-8 md:p-14 lg:px-16 lg:py-4 border border-zinc-100 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-500"
                        >
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                                {/* Text Content */}
                                <div className="flex-1 text-left">
                                    <span className="inline-block text-[13px] font-bold text-[#F97A22] uppercase tracking-[0.15em] mb-4">
                                        Funcionalidades Norkut
                                    </span>
                                    <h3 className="text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-10">
                                        {feature.description}
                                    </p>
                                    <div className="flex justify-start">
                                        <CTAButton>
                                            Ver funcionalidades
                                        </CTAButton>
                                    </div>
                                </div>

                                {/* Animation Visual */}
                                <div className="flex-1 w-full flex justify-center lg:justify-end">
                                    <feature.Animation />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
