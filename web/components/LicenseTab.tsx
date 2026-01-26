import { Shield, Building2, CheckCircle2 } from 'lucide-react'

export function LicenseTab() {
    const licenseInfo = [
        { label: 'RBQ License', value: '5589-7841-01' },
        { label: 'Incorporation #', value: '1178492044' },
        { label: 'Insured Amount', value: '$2,000,000' }
    ]

    return (
        <div className="space-y-0">
            {licenseInfo.map((item, index) => (
                <div key={index} className="py-2 border-b border-gray-200 last:border-0">
                    <div className="flex items-center justify-between">
                        <span className="text-[13px] font-medium text-gray-600">{item.label}</span>
                        <span className="text-xs text-gray-500">{item.value}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
