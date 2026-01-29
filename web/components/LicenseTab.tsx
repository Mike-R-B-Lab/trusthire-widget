import { useState } from 'react'
import { Shield, Building2, CheckCircle2, Copy, Check } from 'lucide-react'

interface LicenseTabProps {
    incorporationNumber?: string
    warranty?: string
    insuredAmount?: string
}

export function LicenseTab({ incorporationNumber, warranty, insuredAmount }: LicenseTabProps) {
    const [copied, setCopied] = useState(false)
    return (
        <div className="space-y-0">
            {/* Incorporation Number */}
            <div className="py-2 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-gray-600">Incorporation #</span>
                    {incorporationNumber ? (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(incorporationNumber)
                                    setCopied(true)
                                    setTimeout(() => setCopied(false), 2000)
                                }}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                title="Copy number"
                            >
                                {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                            </button>
                            <a
                                href="https://www.registreentreprises.gouv.qc.ca/REQNA/GR/GR03/GR03A71.RechercheRegistre.MVC/GR03A71"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                            >
                                {incorporationNumber}
                            </a>
                        </div>
                    ) : (
                        <span className="text-xs text-gray-500">N/A</span>
                    )}
                </div>
            </div>

            {/* Insurance */}
            <div className="py-2 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-gray-600">Insurance</span>
                    {insuredAmount ? (
                        <div className="flex items-center gap-1">
                            <a
                                href="http://lunique.qc.ca"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                            >
                                L'Unique
                            </a>
                            <span className="text-xs text-gray-500">- {insuredAmount}</span>
                        </div>
                    ) : (
                        <span className="text-xs text-gray-500">N/A</span>
                    )}
                </div>
            </div>

            {/* Warranty */}
            <div className="py-2">
                <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-gray-600">Warranty</span>
                    <span className="text-xs text-gray-500 w-[180px] text-right leading-tight">{warranty || 'N/A'}</span>
                </div>
            </div>
        </div>
    )
}
