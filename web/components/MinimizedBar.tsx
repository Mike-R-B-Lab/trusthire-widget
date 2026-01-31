import { ArrowRight, ShieldCheck, X } from 'lucide-react'

interface MinimizedBarProps {
    onOpen: () => void
    onClose: () => void
    isMobile: boolean
}

export function MinimizedBar({ onOpen, onClose, isMobile }: MinimizedBarProps) {
    return (
        <div
            className={`w-fit bg-white rounded-lg flex flex-col items-center origin-bottom-right relative
            ${isMobile
                    ? 'min-w-[160px] pt-[8px] pb-[10px] px-[10px] gap-1.5 scale-90'
                    : 'min-w-[200px] pt-[12px] pb-[16px] px-[14px] gap-2 scale-105 p-2.5'
                }`}
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
                <span className={`text-black leading-none whitespace-nowrap ${isMobile ? 'text-xs' : 'text-[13.5px]'}`}>
                    Vérifié par <span className="font-bold">TrustHire</span>
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
                    <span className={`font-medium text-white leading-none ${isMobile ? 'text-[10px]' : 'text-[11px]'}`}>Résumé de l'entreprise</span>
                    <ArrowRight size={12} className={`text-white ${isMobile ? 'w-3 h-3' : 'w-auto h-auto'}`} />
                </button>
            </div>
        </div>
    )
}
