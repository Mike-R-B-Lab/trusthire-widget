import { ArrowRight, ShieldCheck } from 'lucide-react'

interface MinimizedBarProps {
    onOpen: () => void
}

export function MinimizedBar({ onOpen }: MinimizedBarProps) {
    return (
        <button
            onClick={onOpen}
            className="w-fit min-w-[180px] bg-white shadow-xl cursor-pointer rounded-t-lg overflow-hidden border-t border-x border-gray-100 flex flex-col items-center py-1 gap-0.5 transition-none px-2 scale-105 origin-bottom-right"
        >
            {/* Top row: Text + Icon */}
            <div className="flex items-center justify-center gap-1.5 w-full">
                {/* Text */}
                <span className="text-[13px] text-black leading-none whitespace-nowrap">
                    Verified by <span className="font-bold">TrustHire</span>
                </span>

                {/* Shield Icon */}
                <div className="shrink-0 w-5 h-5">
                    <img
                        src="/contractor_icon_new.png"
                        alt="TrustHire"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Bottom row: Button */}
            <div className="w-full">
                <div className="bg-[#32BD5E] rounded-md py-0.5 flex items-center gap-1 justify-center w-full shadow-sm">
                    <span className="text-[10px] font-medium text-white leading-none">View business summary</span>
                    <ArrowRight size={10} className="text-white" />
                </div>
            </div>
        </button>
    )
}
