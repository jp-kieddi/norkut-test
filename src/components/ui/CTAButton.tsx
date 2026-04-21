import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

export default function CTAButton({
    children,
    className,
    href = "https://app.norkut.com",
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
}) {
    const handleTrackCTA = () => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('trackCustom', 'CTA_Click', { button_text: children?.toString() || 'CTA' });
        }
    };

    if (href) {
        return (
            <a
                href={href}
                onClick={() => {
                    handleTrackCTA();
                    if (onClick) onClick();
                }}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "group flex items-center justify-between gap-3 bg-[#F97A22] text-white pl-6 pr-1.5 h-[48px] rounded-full font-semibold shadow-[0_8px_20px_-6px_rgba(249,122,34,0.6)] hover:bg-[#ff8a3d] hover:shadow-[0_10px_25px_-6px_rgba(249,122,34,0.7)] transition-all shrink-0",
                    className
                )}
            >
                <span className="text-[15.5px] whitespace-nowrap">{children}</span>
                <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center transform group-hover:translate-x-[2px] transition-transform shrink-0" style={{ backgroundColor: '#ffffff' }}>
                    <ArrowRight className="w-[18px] h-[18px] text-[#F97A22]" strokeWidth={2.5} />
                </div>
            </a>
        );
    }

    return (
        <button
            onClick={() => {
                handleTrackCTA();
                if (onClick) onClick();
            }}
            className={cn(
                "group flex items-center justify-between gap-3 bg-[#F97A22] text-white pl-6 pr-1.5 h-[48px] rounded-full font-semibold shadow-[0_8px_20px_-6px_rgba(249,122,34,0.6)] hover:bg-[#ff8a3d] hover:shadow-[0_10px_25px_-6px_rgba(249,122,34,0.7)] transition-all shrink-0",
                className
            )}
        >
            <span className="text-[15.5px] whitespace-nowrap">{children}</span>
            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center transform group-hover:translate-x-[2px] transition-transform shrink-0" style={{ backgroundColor: '#ffffff' }}>
                <ArrowRight className="w-[18px] h-[18px] text-[#F97A22]" strokeWidth={2.5} />
            </div>
        </button>
    );
}