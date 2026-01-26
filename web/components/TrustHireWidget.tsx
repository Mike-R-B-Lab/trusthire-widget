'use client'

import { useEffect, useState, useMemo } from 'react'
import { WidgetHeader } from './WidgetHeader'
import { AccordionSection } from './AccordionSection'
import { ProjectCard } from './ProjectCard'
import { MinimizedBar } from './MinimizedBar'
import { LicenseTab } from './LicenseTab'
import { ReviewRow, type Review } from './ReviewRow'
import type { Project } from '../types'
import { Star, Briefcase, Shield, Video, Info, Building2, ChevronDown, X, Play } from 'lucide-react'



interface PlatformData {
    id: string
    name: string
    rating: number
    count: number
    color: string
    url: string
    reviews: Review[]
    customRating?: string
}

interface TrustHireWidgetProps {
    slug: string
}

export function TrustHireWidget({ slug }: TrustHireWidgetProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [projects, setProjects] = useState<Project[]>([])
    const [reviews, setReviews] = useState<PlatformData[]>([])
    const [loading, setLoading] = useState(true)
    const [visibleProjects, setVisibleProjects] = useState(2)

    const handleLoadMoreProjects = () => {
        setVisibleProjects(prev => prev + 2)
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                // Fetch data from local JSON API
                const response = await fetch(`/api/widget/${slug}`)

                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }

                const data = await response.json()

                if (data.projects) {
                    setProjects(data.projects)
                }

                if (data.reviews) {
                    setReviews(data.reviews)
                }
            } catch (err) {
                console.error('Fetch error:', err)
                // Fallback to empty states or could show an error message
                setProjects([])
                setReviews([])
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [slug])

    const handleOpen = () => {
        setIsOpen(true)
    }

    if (!isOpen) {
        return (
            <div className="fixed bottom-0 right-6 z-50">
                <MinimizedBar onOpen={handleOpen} />
            </div>
        )
    }

    return (
        <>
            {/* Full-screen darkened overlay */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-300"
                onClick={() => setIsOpen(false)}
            />

            {/* Centered modal */}
            <main className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="w-full max-w-[440px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 fade-in duration-300 pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* White band strip at top with Verified by TrustHire - sticky on scroll */}
                    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 py-2 pl-3 pr-4 relative flex items-center">
                        <div className="flex items-center gap-1">
                            <span className="text-[14px] text-black leading-none whitespace-nowrap">
                                Verified by <span className="font-bold">TrustHire</span>
                            </span>
                            <div className="shrink-0 w-7 h-7">
                                <img
                                    src="/contractor_icon_new.png"
                                    alt="TrustHire"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 text-gray-600 hover:bg-gray-100 rounded-full p-1.5 transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Scrollable content area - includes header and accordions */}
                    <div className="flex-1 overflow-y-auto bg-white">
                        <WidgetHeader onClose={() => setIsOpen(false)} />

                        <div className="px-3 pt-1 pb-3 space-y-2">
                            {/* Reviews Accordion */}
                            <AccordionSection
                                title="Online Reviews"
                                icon={<Star className="text-[#32BD5E]" size={20} />}
                                verified={true}
                            >
                                <div className="space-y-0">
                                    {reviews.map((platform) => (
                                        <ReviewRow
                                            key={platform.id}
                                            id={platform.id}
                                            platform={platform.name}
                                            rating={platform.rating}
                                            count={platform.count}
                                            color={platform.color}
                                            url={platform.url}
                                            reviews={platform.reviews}
                                            customRating={platform.customRating}
                                        />
                                    ))}
                                    {reviews.length === 0 && !loading && (
                                        <p className="text-gray-500 text-sm py-2">No reviews found.</p>
                                    )}
                                </div>
                            </AccordionSection>

                            {/* Past Work Accordion */}
                            <AccordionSection
                                title="Previous Projects"
                                icon={<Briefcase className="text-[#32BD5E]" size={20} />}
                                verified={true}
                                onToggle={(isOpen) => {
                                    if (!isOpen) {
                                        setVisibleProjects(2)
                                    }
                                }}
                            >
                                <div className="space-y-4">
                                    {projects.slice(0, visibleProjects).map((project) => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))}

                                    {projects.length === 0 && !loading && (
                                        <p className="text-gray-500 text-sm py-2 text-center">No projects available.</p>
                                    )}

                                    {visibleProjects < projects.length && (
                                        <div className="flex justify-center py-px">
                                            <button
                                                onClick={handleLoadMoreProjects}
                                                className="text-xs font-medium text-[#32BD5E] hover:text-[#32BD5E] transition-colors"
                                            >
                                                View more projects
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </AccordionSection>

                            {/* Recorded Work Accordion */}
                            <AccordionSection
                                title="Recorded Work"
                                icon={<Video className="text-[#32BD5E]" size={20} />}
                                verified={true}
                            >
                                <div className="pb-2 last:pb-1">
                                    <div className="relative w-[90%] mx-auto aspect-video rounded-lg overflow-hidden shrink-0 bg-gray-100 flex items-center justify-center group mb-2 border border-gray-100">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 cursor-pointer">
                                            <Play size={20} className="text-[#32BD5E] ml-1 fill-[#32BD5E]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center text-center gap-0.5">
                                        <p className="text-[10px] text-gray-900">
                                            <span className="font-bold">Site Walkthrough</span> - Montreal, QC
                                        </p>
                                        <p className="text-[10px] text-gray-500">
                                            Oct 2023
                                        </p>
                                    </div>
                                </div>
                            </AccordionSection>

                            {/* Credentials & Insurance Accordion */}
                            <AccordionSection
                                title="Credentials & Insurance"
                                icon={<Shield className="text-[#32BD5E]" size={20} />}
                                verified={true}
                            >
                                <LicenseTab />
                            </AccordionSection>

                            {/* About the Business Accordion */}
                            <AccordionSection
                                title="About the Business"
                                icon={<Building2 className="text-[#32BD5E]" size={20} />}
                                verified={true}
                            >
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                                        <p className="text-[10px] text-gray-500 mb-0.5">Founded Year</p>
                                        <p className="font-semibold text-sm text-gray-900">2009</p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                                        <p className="text-[10px] text-gray-500 mb-0.5">On TrustHire Since</p>
                                        <p className="font-semibold text-sm text-gray-900">2024</p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                                        <p className="text-[10px] text-gray-500 mb-0.5">Number of Employees</p>
                                        <p className="font-semibold text-sm text-gray-900">12-15</p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                                        <p className="text-[10px] text-gray-500 mb-0.5">Owner</p>
                                        <p className="font-semibold text-sm text-gray-900">Jean Tremblay</p>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 col-span-2">
                                        <p className="text-[10px] text-gray-500 mb-0.5">Service Area</p>
                                        <p className="font-semibold text-sm text-gray-900">Greater Montreal, Laval, and surrounding areas</p>
                                    </div>
                                </div>
                            </AccordionSection>

                            {/* About TrustHire Accordion */}
                            <AccordionSection
                                title="About TrustHire"
                                icon={<Info size={16} />}
                            >
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-2">
                                            TrustHire is an independent verification platform that aggregates publicly available business
                                            information and presents it alongside selected materials provided directly by the business. Reviews,
                                            credentials, licenses, insurance details, and examples of past work are displayed with the business's
                                            knowledge and consent.
                                        </p>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-2">
                                            Information shown by TrustHire is presented as sourced and is not altered or modified. By organizing
                                            reviewed and clearly attributed business information in one place, TrustHire helps customers better
                                            understand a business when making decisions.{' '}
                                            <a href="https://trusttabs.com" target="_blank" rel="noopener noreferrer" className="text-[#32BD5E] hover:underline font-medium">
                                                Learn more
                                            </a>
                                        </p>
                                    </div>

                                    {/* Grey divider line */}
                                    <div className="border-t border-gray-200"></div>

                                    <div>
                                        <h4 className="font-semibold text-sm text-gray-900 mb-1.5">Business Use</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-2">
                                            Independent verification and transparent presentation of business information.{' '}
                                            <a href="https://trusttabs.com/business" target="_blank" rel="noopener noreferrer" className="text-[#32BD5E] hover:underline font-medium">
                                                View applicability
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </AccordionSection>
                        </div>
                    </div>
                </div >
            </main >
        </>
    )
}
