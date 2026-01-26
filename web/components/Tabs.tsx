import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface TabsProps {
    activeTab: string
    onTabChange: (tab: string) => void
}

export function Tabs({ activeTab, onTabChange }: TabsProps) {
    const tabs = [
        { id: 'reviews', label: 'Reviews', count: 247 },
        { id: 'verified_work', label: 'Verified Work' },
        { id: 'insurance', label: 'License & Insurance' },
        { id: 'job_videos', label: 'Job Videos' },
    ]

    return (
        <div className="flex overflow-x-auto space-x-2 p-4 bg-white border-b border-gray-100 scrollbar-hide">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={twMerge(
                        'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors',
                        activeTab === tab.id
                            ? 'bg-[#32BD5E] text-white'
                            : 'text-gray-600 hover:bg-gray-50'
                    )}
                >
                    {tab.label}
                    {tab.count && (
                        <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                            {tab.count}
                        </span>
                    )}
                </button>
            ))}
        </div>
    )
}
