import { ArrowRight, ShieldCheck, X } from 'lucide-react'

interface MinimizedBarProps {
    onOpen: () => void
    onClose: () => void
}

export function MinimizedBar({ onOpen, onClose }: MinimizedBarProps) {
    return (
        <div
            className="w-fit min-w-[160px] sm:min-w-[200px] bg-white shadow-xl rounded-lg border border-gray-100 flex flex-col items-center pt-[8px] pb-[10px] px-[10px] sm:pt-[12px] sm:pb-[16px] sm:px-[14px] gap-1.5 sm:gap-2 scale-100 sm:scale-105 origin-bottom-right relative"
        >
            {/* Close Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    onClose()
                }}
                className="absolute top-[-1px] right-[-1px] p-1 text-gray-400 hover:text-gray-600 transition-colors z-50 rounded-full"
            >
                <X size={12} strokeWidth={2.5} />
            </button>

            {/* Top row: Text + Icon */}
            <div className="flex items-center justify-center gap-1.5 w-full">
                {/* Text */}
                <span className="text-xs sm:text-[13.5px] text-black leading-none whitespace-nowrap">
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
                <button
                    onClick={onOpen}
                    className="bg-[#32BD5E] hover:bg-[#2ca652] transition-colors rounded-md py-2.5 flex items-center gap-1.5 justify-center w-full shadow-sm cursor-pointer"
                >
                    <span className="text-[10px] sm:text-[11px] font-medium text-white leading-none">View business summary</span>
                    <ArrowRight size={12} className="text-white w-3 h-3 sm:w-auto sm:h-auto" />
                </button>
            </div>
        </div>
    )
}
