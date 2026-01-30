import { X } from 'lucide-react'

interface WidgetHeaderProps {
    onClose: () => void
    businessName?: string
}

export function WidgetHeader({ onClose, businessName }: WidgetHeaderProps) {
    return (
        <div className="px-3 pt-2 pb-1">
            <div className="bg-[#32BD5E] rounded-lg p-3">
                <h1 className="text-base sm:text-lg font-bold text-white leading-tight">{businessName || 'Loading...'}</h1>
                <p className="text-xs text-white/90 mt-1">
                    Reviewed public and business-provided information
                </p>
            </div>
        </div>
    )
}
