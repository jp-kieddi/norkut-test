import { Instagram, Youtube, MessageCircle, Facebook } from 'lucide-react';

export default function SocialIcons({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-4 ${className || ''}`}>
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
    );
}
