import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TxtAnimation = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayedText}</span>;
}

export default function IAChat() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(500);
    const mouseY = useMotionValue(200);

    const smoothX = useSpring(mouseX, { damping: 25, stiffness: 150 });
    const smoothY = useSpring(mouseY, { damping: 25, stiffness: 150 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <section
            id="ia-chat"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative bg-[#ffffff] dark:bg-[#110c22] pt-20 pb-20 lg:pt-32 lg:pb-40 px-4 md:px-8 z-50 mt-14 md:mt-14  overflow-hidden"
        >
            {/* Soft Purple Blur following mouse */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full bg-linear-to-r from-[#4FA9FF]/20 to-[#D16DFF]/20 blur-[100px] pointer-events-none hidden md:block"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
            />
            {/* Fixed purple blur fallback for mobile */}
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-linear-to-tr from-[#4FA9FF]/15 to-[#D16DFF]/15 blur-[80px] pointer-events-none md:hidden" />

            <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center">

                {/* Titles */}
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 text-center mb-6 max-w-3xl leading-[1.15]">
                    Una IA que te acompaña en todas tus decisiones
                </h2>
                <p className="text-lg md:text-[20px] text-zinc-600 font-medium leading-relaxed mb-20 lg:mb-36 max-w-3xl text-center">
                    La inteligencia artificial de Norkut aprende del comportamiento real de tus ventas, inventario y clientes. Anticipa quiebres, sobrestocks y descubre oportunidades de mejora para tomar decisiones estratégicas a tiempo.
                </p>

                {/* Chatbot Visual Container */}
                <div className="w-full max-w-3xl flex flex-col items-start px-0">

                    {/* Header Label */}
                    <div className="flex items-center gap-3 mb-4">
                        <motion.div
                            animate={{ filter: ['drop-shadow(0px 0px 0px rgba(79,169,255,0))', 'drop-shadow(0px 0px 15px rgba(209,109,255,0.7))', 'drop-shadow(0px 0px 0px rgba(79,169,255,0))'] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <svg width="32" height="32" viewBox="0 0 283 278" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                                <g clipPath="url(#clip0_2376_13738)">
                                    <path d="M257.1 61.4795V0.539518L252.04 0.179518C251.22 0.119518 231.68 -1.20048 207.75 4.45952C178.91 11.2795 156.19 25.4495 141.46 45.6195C126.74 25.4395 104.02 11.2795 75.17 4.44952C51.24 -1.21048 31.7 0.119518 30.88 0.169518L25.82 0.529518V61.4695H0V172.42H25.82V277.51L31.31 277.47C67.35 277.22 95.85 266.59 116 245.89C129.57 231.95 137.18 215.69 141.46 201.55C145.74 215.69 153.35 231.95 166.92 245.89C187.07 266.59 215.57 277.22 251.61 277.47L257.1 277.51V172.42H282.92V61.4795H257.1ZM10.91 161.52V72.3795H25.82V122.44H31.27C94.72 122.44 121.96 148.26 131.77 161.52H10.91ZM108.11 238.37C91.08 255.81 67.08 265.25 36.72 266.45V172.43H135.78C134.88 184.7 130.39 215.54 108.11 238.37ZM136.01 149.54C122.37 134.26 93.28 112.9 36.73 111.6V10.9195H36.86C54.05 10.9195 109.43 14.3695 136.01 56.9395V149.53V149.54ZM146.92 56.9395C173.51 14.3495 229.16 10.9295 246.2 10.9295V111.6C189.65 112.9 160.55 134.26 146.92 149.54V56.9395ZM246.2 266.45C215.84 265.25 191.84 255.82 174.81 238.37C152.52 215.54 148.04 184.69 147.14 172.43H246.2V266.45ZM272.02 161.52H151.16C160.98 148.25 188.22 122.44 251.65 122.44H257.1V72.3795H272.01V161.52H272.02Z" fill="url(#paint0_linear_2376_13738)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_2376_13738" x1="-6.82723" y1="-0.000962962" x2="335.463" y2="103.145" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#4FA9FF" />
                                        <stop offset="1" stopColor="#D16DFF" />
                                    </linearGradient>
                                    <clipPath id="clip0_2376_13738">
                                        <rect width="282.92" height="277.52" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </motion.div>
                        <h3 className="text-xl lg:text-2xl font-bold font-['Melefont']" style={{
                            background: "linear-gradient(to right, #4FA9FF, #D16DFF)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            ¡Hola! ¿En que te puedo ayudar?
                        </h3>
                    </div>

                    {/* Chat Bubble with tracing animation */}
                    <div className="relative w-full rounded-[1.5rem] p-0 overflow-hidden border border-[#9dbffc] shadow-none group mt-2">
                        {/* Trace animated border */}
                        <motion.div
                            className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#D16DFF_360deg)]"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Static light purple border behind to ensure it has a soft outline when animation sweeps */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 rounded-[1.5rem]" />

                        {/* Inner Box */}
                        <div className="relative w-full h-full bg-white dark:bg-[#110c22] rounded-[1.4rem] p-4 md:p-6 flex flex-col justify-between min-h-[130px]">
                            <p className="text-[#6b7280] dark:text-zinc-400 text-[17px] font-medium leading-relaxed max-w-2xl min-h-[4rem]">
                                <TxtAnimation text="Decide antes que el resto, automatiza lo repetitivo y haz que cada punto de venta funcione con precisión..." />
                            </p>

                            {/* Action Button inside chat */}
                            <div className="flex justify-end mt-4">
                                <a href="https://auth.norkut-cloud.com/sign-up" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#9dbffc] hover:border-[#D16DFF] hover:bg-purple-50 dark:hover:bg-[#1e1633] transition-colors duration-300 shadow-none">
                                    <span className="text-sm font-semibold bg-linear-to-r from-[#4FA9FF] to-[#D16DFF] bg-clip-text text-transparent">Probar ahora</span>
                                    <span className="bg-linear-to-r from-[#4FA9FF] to-[#D16DFF] bg-clip-text text-transparent text-base font-normal leading-none mb-[2px] ml-1">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
