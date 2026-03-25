import { motion } from 'framer-motion';
import { Activity, Wallet, Store, TrendingUp, Users, LayoutDashboard } from 'lucide-react';
import Logo from '../Logo';

export default function IAConnectionAnimation() {
    const nodes = [
        { Icon: Activity, top: '16.6%', left: '10%', path: "M 40 50 L 100 50 L 100 130 L 140 130", delay: 0.2, duration: 3.1 },
        { Icon: Store, top: '50%', left: '10%', path: "M 40 150 L 140 150", delay: 1.7, duration: 2.4 },
        { Icon: Wallet, top: '83.3%', left: '10%', path: "M 40 250 L 100 250 L 100 170 L 140 170", delay: 0.8, duration: 3.5 },
        { Icon: TrendingUp, top: '16.6%', left: '90%', path: "M 360 50 L 300 50 L 300 130 L 260 130", delay: 2.3, duration: 2.7 },
        { Icon: Users, top: '50%', left: '90%', path: "M 360 150 L 260 150", delay: 0.4, duration: 2.9 },
        { Icon: LayoutDashboard, top: '83.3%', left: '90%', path: "M 360 250 L 300 250 L 300 170 L 260 170", delay: 1.4, duration: 3.2 }
    ];

    return (
        <div className="relative w-full aspect-square md:aspect-4/3 max-w-lg mx-auto overflow-visible flex items-center justify-center">
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {nodes.map((node, i) => (
                    <g key={`path-${i}`}>
                        <path d={node.path} fill="none" stroke="#e4e4e7" strokeWidth="2" strokeLinejoin="round" />
                        <motion.path
                            d={node.path}
                            fill="none"
                            stroke="#ff801f"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#glow)"
                            initial={{ pathLength: 0.2, pathOffset: 0, opacity: 0 }}
                            animate={{
                                pathOffset: [0, 1],
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: node.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: node.delay
                            }}
                        />
                    </g>
                ))}
            </svg>

            {/* Nodes */}
            {nodes.map((node, i) => (
                <div 
                    key={`node-${i}`} 
                    className="absolute w-12 h-12 bg-white border border-zinc-200 shadow-md rounded-xl flex items-center justify-center z-10 hover:scale-110 transition-transform"
                    style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
                >
                    <motion.div
                        animate={{ color: ["#71717a", "#f97a22", "#f97a22", "#71717a"] }}
                        transition={{
                            duration: node.duration,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.1, 0.4, 0.6],
                            delay: node.delay
                        }}
                    >
                        <node.Icon className="w-5 h-5" color="currentColor" />
                    </motion.div>
                </div>
            ))}

            {/* Center Node */}
            <motion.div
                className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-linear-to-r from-[#ccc] to-[#a1a1a1] rounded-xl flex flex-col items-center justify-center z-20 border border-orange-500/30 overflow-hidden shadow-xl"
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
