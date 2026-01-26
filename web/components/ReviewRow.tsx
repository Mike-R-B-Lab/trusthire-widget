'use client'

import { useState } from 'react'
import { ChevronDown, Star, ChevronUp } from 'lucide-react'
import { clsx } from 'clsx'
import { BrandIcon } from './BrandIcons'

export interface Review {
    id: string
    author: string
    content: string
    rating: number
    date: string
}

interface ReviewPlatformProps {
    id: string
    platform: string
    rating: number
    count: number
    color: string
    url: string
    reviews: Review[]
    customRating?: string
}

export function ReviewRow({ id, platform, rating, count, color, url, reviews, customRating }: ReviewPlatformProps) {
    return (
        <div className="py-2 border-b border-gray-200 last:border-0">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                        <BrandIcon id={id} className="w-full h-full" />
                    </div>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-900 hover:text-[#32BD5E] hover:underline transition-colors"
                    >
                        {platform}
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    {customRating ? (
                        <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-gray-900 text-xs">{customRating}</span>
                            {count > 0 && (
                                <span className="text-xs text-gray-500">({count})</span>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5">
                            <div className="flex items-center">
                                <span className="font-semibold text-gray-900 mr-1.5 text-xs">{rating}</span>
                                <div className="relative flex items-center">
                                    {/* Background Gray Stars */}
                                    <div className="flex text-gray-200">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={`bg-${i}`} size={10} className="fill-current" />
                                        ))}
                                    </div>
                                    {/* Foreground Yellow Stars (Clipped) */}
                                    <div
                                        className="absolute top-0 left-0 flex overflow-hidden text-yellow-400"
                                        style={{ width: `${(rating / 5) * 100}%` }}
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={`fg-${i}`} size={10} className="fill-current flex-shrink-0" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {count > 0 && (
                                <span className="text-xs text-gray-500">({count})</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
