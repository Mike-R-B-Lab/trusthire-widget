import { ChevronRight, ChevronDown, Check } from 'lucide-react'

interface MinimizedBarProps {
    onOpen: () => void
    onClose: () => void
    isMobile: boolean
    showChevron?: boolean
}

export function MinimizedBar({ onOpen, onClose, isMobile, showChevron = true }: MinimizedBarProps) {
    return (
        <div
            onClick={onOpen}
            className="relative group/container flex flex-col items-center cursor-pointer"
            style={isMobile ? { transform: 'scale(1.8)', transformOrigin: 'center' } : {}}
        >
            <div
                className={`group flex items-center bg-white rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] relative overflow-visible select-none text-left
            ${isMobile ? 'py-3 px-5' : 'py-4 px-6'}`}
            >
                <div className={`flex flex-col gap-1.5`}>
                    {/* Header Row */}
                    <div className="flex items-center gap-1.5">
                        <span className={`font-semibold text-gray-900 tracking-tight whitespace-nowrap ${isMobile ? 'text-[13px]' : 'text-[14px]'}`}>
                            Vérifié par TrustHire
                        </span>
                        <div className="w-6 h-6">
                            <img
                                src="/trusthire-check.png"
                                alt="Verified"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Icons Row */}
                    <div className="flex items-center gap-3 justify-center">
                        {/* Google Logo */}
                        <div className="w-[20px] h-[20px] flex items-center justify-center">
                            <svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>

                        {/* Facebook Logo */}
                        <div className="w-[20px] h-[20px] flex items-center justify-center">
                            <svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" fill="#1877F2">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </div>

                        {/* Blue Shield */}
                        <div className="w-[18px] h-[18px] flex items-center justify-center relative">
                            {/* Shield Shape */}
                            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#3B82F6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                            </svg>
                            {/* Checkmark inside */}
                            <svg viewBox="0 0 24 24" width="60%" height="60%" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="absolute top-[20%] left-[20%]">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>

                        {/* RBQ Text */}
                        <span className="text-[12px] font-bold text-gray-600 tracking-tight leading-none">
                            RBQ
                        </span>

                        {/* Fleur-de-lis */}
                        <div className="w-[20px] h-[20px] flex items-center justify-center">
                            <img
                                src="/fleur-de-lis-blue.png"
                                alt="QC"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Chevron Tab */}
            {showChevron && (
                <div
                    className="bg-white rounded-b-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] pt-2.5 pb-0.5 px-[15px] -mt-2 z-[-1] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Open widget"
                >
                    <ChevronDown size={18} className="text-gray-600" strokeWidth={2.5} />
                </div>
            )}
        </div>
    )
}
