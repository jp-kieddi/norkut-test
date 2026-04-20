import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import CTAButton from './ui/CTAButton';

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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        
        // Init dark mode state
        if (document.documentElement.classList.contains('dark')) {
            setIsDarkMode(true);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 dark:bg-[#110c22]/90 backdrop-blur-md shadow-sm py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-zinc-900">
                        <Logo className="h-8 w-auto ml-[-12px] md:h-10" />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
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
                    <div className="hidden md:flex items-center gap-4 pl-6">
                        {/* Country Selector */}
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

                        <CTAButton className="h-[46px]">
                            Empieza gratis
                        </CTAButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-foreground p-2 -mr-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="py-3 px-4 text-base font-medium text-foreground hover:bg-gray-50 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 my-4 mx-4"></div>
                    <div className="flex flex-col gap-3 px-4 pb-4">
                        <CTAButton className="w-full">
                            Empieza gratis
                        </CTAButton>
                    </div>
                </div>
            )}
        </header>
    );
}
