export interface Project {
    id: string
    title: string
    before_image: string
    after_image: string
    likes: number
    verified: boolean
    category: string
    date: string
    location: string
    source?: string
    duration?: string
}
