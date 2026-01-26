import { NextResponse } from 'next/server'

// Static import ensures the data is bundled into the serverless function
import demoData from '@/data/demo.json'

// Forces the route to be dynamic to handle the [slug] param correctly
export const dynamic = 'force-dynamic'

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug

    // Simple lookup map
    const dataMap: Record<string, any> = {
        'demo': demoData
    }

    const data = dataMap[slug]

    if (data) {
        return NextResponse.json(data)
    } else {
        return NextResponse.json(
            { error: 'Business not found' },
            { status: 404 }
        )
    }
}
