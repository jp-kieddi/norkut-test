import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

export default function CTAButton({
    children,
    className,
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "group relative inline-flex items-center gap-4 rounded-full overflow-hidden bg-linear-to-r from-[#ff801f] to-[#f56e0f] py-1.5 pl-6 pr-1.5 font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_20px_-6px_rgba(255,128,31,0.6)] hover:-translate-y-0.5 hover:brightness-95 active:scale-[0.98] active:translate-y-0 active:shadow-none",
                className
            )}
        >
            <span className="relative z-10 text-sm font-bold tracking-wide">{children}</span>
            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#ff801f] shadow-sm group-hover:animate-fly-arrow">
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </div>
        </button>
    );
}
