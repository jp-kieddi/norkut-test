import { motion } from 'framer-motion';
import { Activity, Wallet, Store, TrendingUp, Users, LayoutDashboard } from 'lucide-react';
import Logo from '../Logo';

export default function IAConnectionAnimation() {
    const paths = [
        "M 40 50 L 100 50 L 100 130 L 140 130",   // L1
        "M 40 150 L 140 150",                     // L2
        "M 40 250 L 100 250 L 100 170 L 140 170", // L3
        "M 360 50 L 300 50 L 300 130 L 260 130",  // R1
        "M 360 150 L 260 150",                    // R2
        "M 360 250 L 300 250 L 300 170 L 260 170" // R3
    ];

    return (
        <div className="relative w-full aspect-square md:aspect-4/3 max-w-lg mx-auto overflow-visible flex items-center justify-center">
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="glow-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f56e0f" stopOpacity="0" />
                        <stop offset="50%" stopColor="#ff801f" stopOpacity="1" />
                        <stop offset="100%" stopColor="#f56e0f" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {paths.map((d, i) => (
                    <g key={i}>
                        <path d={d} fill="none" stroke="#e4e4e7" strokeWidth="2" strokeLinejoin="round" />
                        <motion.path
                            d={d}
                            fill="none"
                            stroke="url(#glow-line)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
                            animate={{
                                pathOffset: [0, 1],
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 3.6,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.2
                            }}
                        />
                    </g>
                ))}
            </svg>

            {/* Nodes */}
            <div className="absolute left-[10%] top-[16.6%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-zinc-200 shadow-md rounded-xl flex items-center justify-center z-10 hover:scale-110 transition-transform">
                <Activity className="w-5 h-5 text-zinc-500" />
            </div>
            <div className="absolute left-[10%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-zinc-200 shadow-md rounded-xl flex items-center justify-center z-10 hover:scale-110 transition-transform">
                <Store className="w-5 h-5 text-zinc-500" />
            </div>
            <div className="absolute left-[10%] top-[83.3%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-zinc-200 shadow-md rounded-xl flex items-center justify-center z-10 hover:scale-110 transition-transform">
                <Wallet className="w-5 h-5 text-zinc-500" />
            </div>
            <div className="absolute left-[90%] top-[16.6%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-zinc-200 shadow-md rounded-xl flex items-center justify-center z-10 hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 text-zinc-500" />
            </div>
            <div className="absolute left-[90%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-zinc-200 shadow-md rounded-xl flex items-center justify-center z-10 hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-zinc-500" />
            </div>
            <div className="absolute left-[90%] top-[83.3%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-zinc-200 shadow-md rounded-xl flex items-center justify-center z-10 hover:scale-110 transition-transform">
                <LayoutDashboard className="w-5 h-5 text-zinc-500" />
            </div>

            {/* Center Node */}
            <motion.div
                className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-linear-to-r from-[#ccc] to-[#a1a1a1] rounded-xl flex flex-col items-center justify-center z-20 border border-orange-500/30 overflow-hidden"
                animate={{
                    scale: [1, 1.04, 1],
                    boxShadow: [
                        "0 0 0px rgba(255,128,31,0)",
                        "0 0 40px rgba(255,128,31,0.8)",
                        "0 0 0px rgba(255,128,31,0)"
                    ]
                }}
                transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    times: [0, 0.1, 1],
                    ease: "easeOut"
                }}
            >
                <div className="absolute inset-0 bg-white/10 blur-xl rounded-full scale-110 pointer-events-none"></div>

                <div className="relative flex flex-col items-center gap-0">
                    <Logo className="h-10 md:h-14 w-[120px] text-white drop-shadow-md pb-1 pointer-events-none" />
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-4 py-0.5 rounded-full border border-white/40">
                        <span className="text-md font-light text-white tracking-widest uppercase mt-px">IA</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
