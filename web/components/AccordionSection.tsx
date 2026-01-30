'use client'

import { useState, ReactNode, useRef, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { clsx } from 'clsx'

interface AccordionSectionProps {
    title: string
    icon?: ReactNode
    badge?: string | number
    children: ReactNode
    defaultOpen?: boolean
    verified?: boolean
    onToggle?: (isOpen: boolean) => void
    scrollAnchor?: ScrollLogicalPosition
    scrollTarget?: 'section' | 'content'
}

export function AccordionSection({
    title,
    icon,
    badge,
    children,
    defaultOpen = false,
    verified = false,
    onToggle,
    scrollAnchor = 'center',
    scrollTarget = 'section'
}: AccordionSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const sectionRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen && sectionRef.current) {
            // Small delay to allow the accordion to start opening
            setTimeout(() => {
                const targetRef = scrollTarget === 'content' ? contentRef : sectionRef
                targetRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: scrollAnchor
                })
            }, 400)
        }
        // Notify parent when accordion state changes
        if (onToggle) {
            onToggle(isOpen)
        }
    }, [isOpen, onToggle])

    return (
        <div ref={sectionRef} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white p-2.5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center">
                    <div className="text-left flex items-center gap-2">
                        {icon && (
                            <div className="text-gray-400">
                                {icon}
                            </div>
                        )}
                        <h3 className="text-[11px] sm:text-sm font-semibold text-gray-900">
                            {title}
                        </h3>
                    </div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                    {verified && (
                        <span className="flex items-center text-[10px] font-medium text-[#32BD5E] bg-[#32BD5E]/10 px-1.5 py-0.5 rounded-full border border-[#32BD5E]/20">
                            Verified
                        </span>
                    )}
                    {isOpen ? (
                        <ChevronUp size={16} className="text-gray-400" />
                    ) : (
                        <ChevronDown size={16} className="text-gray-400" />
                    )}
                </div>
            </button>

            <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
            >
                <div className="overflow-hidden">
                    <div
                        ref={contentRef}
                        className="bg-white border-t border-gray-200 px-2.5 pb-2.5 pt-[3px]"
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
