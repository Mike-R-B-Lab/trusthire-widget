import { ArrowRight, ShieldCheck, X, ChevronRight, ChevronLeft, Check } from 'lucide-react'

interface VerticalLauncherProps {
    onOpen: () => void
    onClose: () => void
    isMobile: boolean
}

export function VerticalLauncher({ onOpen, onClose, isMobile }: VerticalLauncherProps) {
    if (isMobile) {
        return (
            <div
                onClick={onOpen}
                className="group flex flex-row items-center outline-none focus:outline-none text-left transform-gpu transition-all duration-300 ease-out cursor-pointer"
            >
                {/* Arrow Tab (Left Side) */}
                <div className="flex items-center justify-center bg-white rounded-l-[11px] shadow-[2px_0_8px_rgba(0,0,0,0.08)] z-[-1] -mr-[18px] pr-[18px] w-[36px] h-[29px]">
                    <ChevronLeft size={18} className="text-[#374151]" strokeWidth={2.5} />
                </div>

                {/* Main Bar */}
                <div className="transform-gpu flex flex-col items-center bg-white rounded-[22px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] relative overflow-hidden select-none px-[6px] pt-[14px] pb-[14px]">
                    <div className="flex flex-col gap-[11px]">
                        {/* Header Row */}
                        <div className="flex items-center gap-[3px]">
                            <span className="font-semibold text-gray-900 tracking-tight whitespace-nowrap leading-none text-[12px]">
                                TrustHire
                            </span>
                            <div className="w-[17px] h-[17px] flex-shrink-0">
                                <img
                                    src="/trusthire-check.png"
                                    alt="Verified"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Icons Row */}
                        <div className="flex flex-col items-center gap-[11px] justify-center">
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
                            <span className="text-[11px] font-bold text-gray-600 tracking-tight leading-none">
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
            </div>
        )
    }

    return (
        <div
            onClick={onOpen}
            className="group flex flex-row items-center outline-none focus:outline-none text-left transform-gpu transition-all duration-300 ease-out cursor-pointer"
        >
            {/* Main Bar */}
            <div className={`transform-gpu flex flex-col items-center bg-white rounded-[22px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] relative overflow-hidden select-none px-[14px] pt-[22px] pb-[22px]`}>

                <div className="flex flex-col gap-[11px]">
                    {/* Header Row */}
                    <div className="flex items-center gap-[3px]">
                        <span className={`font-semibold text-gray-900 tracking-tight whitespace-nowrap leading-none text-[13px]`}>
                            TrustHire
                        </span>
                        <div className="w-[17px] h-[17px] flex-shrink-0">
                            <img
                                src="/trusthire-check.png"
                                alt="Verified"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Icons Row */}
                    <div className="flex flex-col items-center gap-[11px] justify-center">
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
                        <span className="text-[11px] font-bold text-gray-600 tracking-tight leading-none">
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

            {/* Arrow Tab */}
            <div className={`flex items-center justify-center bg-white rounded-r-[11px] shadow-[2px_0_8px_rgba(0,0,0,0.08)] z-[-1] -ml-[18px] pl-[18px] w-[43px] h-[36px]`}>
                <ChevronRight size={18} className="text-[#374151]" strokeWidth={2.5} />
            </div>
        </div>
    )
}
