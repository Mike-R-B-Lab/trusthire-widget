import { X } from 'lucide-react'

interface WidgetHeaderProps {
    onClose: () => void
    businessName?: string
}

export function WidgetHeader({ onClose, businessName }: WidgetHeaderProps) {
    return (
        <div className="pl-[10px] pr-2.5 py-3">
            <div className="bg-white">
                <div className="inline-block bg-[#32BD5E] rounded-full px-3 py-1.5">
                    <h1 className="text-[17px] sm:text-[19px] font-bold text-white leading-none">
                        {businessName || 'Loading...'}
                    </h1>
                </div>
                <div className="flex items-center gap-2 mt-2 ml-3">
                    <div className="w-2 h-2 rounded-full bg-[#32BD5E] flex-shrink-0"></div>
                    <p className="text-[12px] text-gray-700">
                        Informations publiques et fournies par l'entreprise
                    </p>
                </div>
            </div>
        </div>
    )
}
