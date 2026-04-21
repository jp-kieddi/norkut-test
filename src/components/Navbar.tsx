import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import Logo from './Logo';
import CTAButton from './ui/CTAButton';
import SocialIcons from './SocialIcons';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gestión Inteligente', href: '/gestion-inteligente' },
    { name: 'Funcionalidades', href: '/funcionalidades' },
    { name: 'Precios', href: '/precios' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null;
        if (storedTheme) {
            setTheme(storedTheme);
        }

        // Init dark mode state
        if (document.documentElement.classList.contains('dark')) {
            setIsDarkMode(true);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else if (newTheme === 'light') {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                setIsDarkMode(false);
            }
        }
    };

    const toggleDarkMode = () => {
        handleThemeChange(isDarkMode ? 'light' : 'dark');
    };

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 dark:bg-[#110c22]/90 backdrop-blur-md shadow-sm py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between px-4 lg:px-0 py-2 lg:py-0">
                    <div className="flex items-center gap-2 text-zinc-900">
                        <Link to="/">
                            <Logo className="h-10 lg:h-10 w-auto ml-[-12px] md:h-10 mt-1" />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                                style={{ fontWeight: 500 }}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-orange-50 dark:hover:bg-white/10 text-zinc-500 dark:text-zinc-400 hover:text-[#F97A22] dark:hover:text-[#F97A22] transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </nav>

                    {/* Right Utilities + CTA */}
                    <div className="hidden lg:flex items-center gap-4 pl-6">
                        {/* Country Selector
                        <div className="relative group flex items-center h-[46px]">
                            <select 
                                defaultValue="ve"
                                className="appearance-none h-full rounded-full px-4 pr-10 text-[15px] font-medium outline-none hover:border-[#F97A22] transition-colors cursor-pointer shadow-sm bg-white text-zinc-700 border border-zinc-200 dark:bg-[#1C1A1E] dark:border-[#312b3e] dark:text-zinc-200 dark:hover:border-[#F97A22]"
                                style={{ colorScheme: 'light' }}
                            >
                                <option value="ve">🇻🇪 VE</option>
                                <option value="ar">🇦🇷 AR</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </div>
                        </div>
                        */}
                        <CTAButton className="h-[46px]">
                            Empieza gratis
                        </CTAButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-foreground p-2 -mr-2"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 z-[9999999] flex justify-end">
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-md"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-[350px] h-[100dvh] bg-white dark:bg-[#110c22] shadow-2xl flex flex-col pt-6 pb-6 px-4 border-l border-zinc-100 dark:border-white/10 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-5 px-2">
                                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                                    <Logo className="h-8 w-auto text-zinc-900 dark:text-white" />
                                </Link>
                                <button
                                    className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="py-3 bg-gray-50 dark:bg-zinc-500/10 px-4 text-base font-medium text-zinc-700 hover:text-[#F97A22] hover:bg-orange-50 dark:text-zinc-300 dark:hover:text-[#F97A22] dark:hover:bg-white/5 rounded-xl transition-all"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-white/10">
                                <CTAButton className="w-full">
                                    Empieza gratis
                                </CTAButton>
                            </div>

                            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-white/10 px-2">
                                <h4 className="text-xs font-semibold text-[#F97A22] mb-4 uppercase tracking-wider">Explorar</h4>
                                <div className="flex flex-col gap-1">

                                    <Link
                                        to="/solicitar-partner"
                                        className="py-1 text-sm font-medium text-zinc-600 hover:text-[#F97A22] dark:text-zinc-400 dark:hover:text-[#F97A22] transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Solicita una demo
                                    </Link>
                                    <Link
                                        to="/quiero-ser-partner"
                                        className="py-1 text-sm font-medium text-zinc-600 hover:text-[#F97A22] dark:text-zinc-400 dark:hover:text-[#F97A22] transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Conviértete en Partner
                                    </Link>
                                    <Link
                                        to="/tutoriales"
                                        className="py-1 text-sm font-medium text-zinc-600 hover:text-[#F97A22] dark:text-zinc-400 dark:hover:text-[#F97A22] transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Tutoriales
                                    </Link>
                                    <Link
                                        to="/empresa"
                                        className="py-1 text-sm font-medium text-zinc-600 hover:text-[#F97A22] dark:text-zinc-400 dark:hover:text-[#F97A22] transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        La empresa
                                    </Link>
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-white/10 px-2 pb-2">
                                <h4 className="text-xs font-semibold text-[#F97A22] mb-4 uppercase tracking-wider">Apariencia</h4>
                                <div className="flex bg-zinc-100 dark:bg-white/5 px-1.5 py-0.5 rounded-2xl items-center gap-1">
                                    <button
                                        onClick={() => handleThemeChange('light')}
                                        className={`flex-1 flex justify-center items-center py-1 rounded-xl transition-all ${theme === 'light' ? 'bg-white dark:bg-[#1a1429] text-[#F97A22] shadow-sm' : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
                                            }`}
                                        aria-label="Modo Claro"
                                    >
                                        <Sun size={20} strokeWidth={theme === 'light' ? 2.5 : 2} />
                                    </button>
                                    <button
                                        onClick={() => handleThemeChange('dark')}
                                        className={`flex-1 flex justify-center items-center py-1 rounded-xl transition-all ${theme === 'dark' ? 'bg-white dark:bg-[#1a1429] text-[#F97A22] shadow-sm' : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
                                            }`}
                                        aria-label="Modo Oscuro"
                                    >
                                        <Moon size={20} strokeWidth={theme === 'dark' ? 2.5 : 2} />
                                    </button>
                                    <button
                                        onClick={() => handleThemeChange('system')}
                                        className={`flex-1 flex justify-center items-center py-1 rounded-xl transition-all ${theme === 'system' ? 'bg-white dark:bg-[#1a1429] text-[#F97A22] shadow-sm' : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
                                            }`}
                                        aria-label="Modo Sistema"
                                    >
                                        <Monitor size={20} strokeWidth={theme === 'system' ? 2.5 : 2} />
                                    </button>
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-white/10 px-2 flex justify-start">
                                <SocialIcons />
                            </div>


                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </header>
    );
}
