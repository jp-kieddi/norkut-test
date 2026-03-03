import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import CTAButton from './ui/CTAButton';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gestión Inteligente', href: '/#gestion-inteligente' },
    { name: 'Funcionalidades', href: '/#features' },
    { name: 'Precios', href: '/precios' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
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
                    </nav>

                    <div className="hidden md:flex flex-col items-center pl-6">
                        <CTAButton className="py-1 pl-4 pr-1 text-base">
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
                        <button className="bg-primary text-white py-3 rounded-xl font-semibold text-center w-full">
                            Empieza gratis
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
