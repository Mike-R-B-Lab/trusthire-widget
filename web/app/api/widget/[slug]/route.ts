import { NextResponse } from 'next/server'
import demoData from '@/data/demo.json'
import ulavalData from '@/data/ulaval.json'

// Forces the route to be dynamic to handle the [slug] param correctly
export const dynamic = 'force-dynamic'

const dataMap: Record<string, any> = {
    'demo': demoData,
    'ulaval': ulavalData
}

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug
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
