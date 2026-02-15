export interface VerificationBadge {
    platform: 'google' | 'facebook' | 'bbb' | 'rbq' | 'thumbtack' | 'custom'
    rating: string
    reviewCount?: number
    link: string
    customIcon?: string
}

export interface Credential {
    label: string
    value: string
    link?: string
}

export interface AboutInfo {
    founded: number
    onPlatformSince: number
    employees: number
    owner: string
    serviceArea: string
    description?: string
}

export interface Project {
    title: string
    location: string
    date: string
    imageUrl: string
    videoUrl?: string
}

export interface Review {
    platform: string
    author: string
    rating: number
    text: string
    date: string
    embedUrl?: string
}

export interface ClientData {
    slug: string
    businessName: string
    subtitle?: string
    logo?: string

    verification: VerificationBadge[]
    credentials: Credential[]
    about: AboutInfo
    projects: Project[]
    reviews?: Review[]
}
