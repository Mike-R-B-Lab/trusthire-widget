import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project } from '../types'

export function ProjectCard({ project }: { project: Project }) {
    const images = [project.after_image, project.before_image].filter(Boolean)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="pb-2 border-b border-gray-100 last:border-0 last:pb-1">
            {/* Centered Image - 80% width */}
            <div className="relative w-[80%] mx-auto aspect-video rounded-lg overflow-hidden shrink-0 group mb-2">
                <Image
                    src={images[currentImageIndex]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500"
                />

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ChevronLeft size={14} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ChevronRight size={14} />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Info below image - centered, 2 lines */}
            <div className="flex flex-col items-center text-center gap-0.5">
                <p className="text-[10px] text-gray-900">
                    <span className="font-bold">{project.title}</span> - {project.location}
                </p>
                <p className="text-[10px] text-gray-500">
                    {project.date} - Completed in {project.duration || '2 days'}
                </p>
            </div>
        </div>
    )
}
