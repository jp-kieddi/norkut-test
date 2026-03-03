import { Instagram, Twitter, Youtube } from 'lucide-react';
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
        <footer className="bg-zinc-50 relative">
            {/* Color divider top */}
            <div className="absolute top-0 left-0 right-0 h-[10px] flex w-full drop-shadow-md">
                <div className="flex-1 bg-[#8ECAE6]"></div>
                <div className="flex-1 bg-[#219EBC]"></div>
                <div className="flex-1 bg-[#023047]"></div>
                <div className="flex-1 bg-[#FFB703]"></div>
                <div className="flex-1 bg-[#FB8500]"></div>
            </div>

            <div className="pt-24 pb-8 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-8">
                    {/* Brand Col */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-zinc-900 w-32 mb-4">
                            <Logo className="h-12 w-auto" />
                        </div>
                        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                            La plataforma que centraliza la complejidad operativa en la gestión de inventario de tu negocio.
                        </p>
                        <div className="flex items-center gap-4 pt-2 drop-shadow-md">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#F97A22] hover:border-[#F97A22] transition-colors shadow-sm">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#F97A22] hover:border-[#F97A22] transition-colors shadow-sm">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#F97A22] hover:border-[#F97A22] transition-colors shadow-sm">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-[#F97A22] hover:border-[#F97A22] transition-colors shadow-sm">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Nav Cols */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-8 sm:gap-12 pl-0 lg:pl-12">
                        {footerNavs.map((navItem, idx) => (
                            <div key={idx} className="space-y-4">
                                <h4 className="text-base font-semibold text-foreground mb-4 opacity-90">
                                    {navItem.label}
                                </h4>
                                <ul className="space-y-3">
                                    {navItem.items.map((item, idxx) => (
                                        <li key={idxx}>
                                            <a href={item.href} className="text-sm font-medium text-muted-foreground hover:text-[#F97A22] transition-colors block">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[13px] text-muted-foreground font-medium">
                        © {new Date().getFullYear()} Norkut. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-6 text-[13px] font-medium text-muted-foreground">
                        <a href="#" className="hover:text-[#F97A22] transition-colors">Términos y condiciones</a>
                        <div className="w-1 h-1 rounded-full bg-zinc-300"></div>
                        <a href="#" className="hover:text-[#F97A22] transition-colors">Políticas de privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
