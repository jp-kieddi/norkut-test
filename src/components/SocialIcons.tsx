import { Instagram, Youtube, MessageCircle, Facebook } from 'lucide-react';

export default function SocialIcons({ className }: { className?: string }) {
    return (
        <div className={`flex items-center gap-4 ${className || ''}`}>
            <a href="https://www.youtube.com/watch?v=3C8j_qd19gA" target='_blank' className="w-8 h-8 rounded-full border-2 border-[#F97A22] flex items-center justify-center text-[#F97A22] hover:bg-[#F97A22] hover:text-white transition-colors">
                <Youtube size={14} />
            </a>
            <a href="#" target='_blank' className="w-8 h-8 rounded-full  border-[#F97A22] flex items-center justify-center text-[#F97A22] hover:bg-[#F97A22] hover:text-white transition-colors border-2">
                <Instagram size={14} />
            </a>
            {/* TODO: Add TikTok 
            <a href="#" target='_blank' className="w-8 h-8 rounded-full border border-[#F97A22] flex items-center justify-center text-[#F97A22] hover:bg-[#F97A22] hover:text-white transition-colors">
                <MessageCircle size={14} />
            </a>
            <a href="#" target='_blank' className="w-8 h-8 rounded-full border border-[#F97A22] flex items-center justify-center text-[#F97A22] hover:bg-[#F97A22] hover:text-white transition-colors">
                <Facebook size={14} />
            </a>*/}
        </div>
    );
}
