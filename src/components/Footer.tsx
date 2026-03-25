import { Instagram, Youtube, MessageCircle, Facebook } from 'lucide-react';
import Logo from './Logo';

const footerNavs = [
    {
        label: "App",
        items: [
            { href: '#', name: 'Funcionalidades' },
            { href: '#', name: 'Integraciones' },
            { href: '#', name: 'Precios' },
            { href: '#', name: 'Soporte' },
        ],
    },
    {
        label: "Explorar",
        items: [
            { href: '#', name: 'Tutoriales' },
            { href: '#', name: 'Blog' },
            { href: '#', name: 'La empresa' },
        ],
    },
    {
        label: "Conecta",
        items: [
            { href: '#', name: 'Partners' },
            { href: '#', name: 'Solicita una demo' },
            { href: '#', name: 'Trabaja con nosotros' },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="bg-[#110c22] relative border-t border-[#1E1B29]">
            <div className="pt-24 pb-8 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-8">
                    {/* Brand Col */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-white w-32 mb-4">
                            <Logo className="h-8 w-auto text-white" />
                        </div>
                        <p className="text-[#9E9BAE] text-xs max-w-xs leading-relaxed">
                            La plataforma que centraliza la complejidad operativa en la gestión de inventario de tu negocio.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="w-8 h-8 rounded-full border border-[#F97A22] flex items-center justify-center text-[#F97A22] hover:bg-[#F97A22] hover:text-white transition-colors">
                                <Youtube size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-[#F97A22] flex items-center justify-center text-[#F97A22] hover:bg-[#F97A22] hover:text-white transition-colors">
                                <MessageCircle size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-[#F97A22] flex items-center justify-center text-[#F97A22] hover:bg-[#F97A22] hover:text-white transition-colors">
                                <Facebook size={14} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-[#F97A22] flex items-center justify-center text-[#F97A22] hover:bg-[#F97A22] hover:text-white transition-colors">
                                <Instagram size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Nav Cols */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8 sm:gap-12 pl-0 lg:pl-12">
                        {footerNavs.map((navItem, idx) => (
                            <div key={idx} className="space-y-4">
                                <h4 className="text-base font-semibold text-[#F97A22] mb-6">
                                    {navItem.label}
                                </h4>
                                <ul className="space-y-4">
                                    {navItem.items.map((item, idxx) => (
                                        <li key={idxx}>
                                            <a href={item.href} className="text-xs font-medium text-[#9E9BAE] hover:text-white transition-colors block">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-[#1E1B29] grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left">
                    <p className="text-[11px] text-[#9E9BAE] font-medium">
                        © {new Date().getFullYear()} Norkut
                    </p>
                    <div className="text-[11px] text-[#9E9BAE] font-medium md:text-center">
                        <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
                    </div>
                    <div className="text-[11px] text-[#9E9BAE] font-medium md:text-right">
                        <a href="#" className="hover:text-white transition-colors">Términos de servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
