import { NextResponse } from 'next/server'

// Forces the route to be dynamic and not static optimized, ensuring the import runs at request time
export const dynamic = 'force-dynamic'

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug

    try {
        // Dynamic import of the JSON file
        // Webpack will identify this pattern and bundle the files in @/data/
        const data = await import(`@/data/${slug}.json`)

        // Return the JSON content (handled by default export in some bundlers or direct module)
        return NextResponse.json(data.default || data)
    } catch (error) {
        console.error('Error reading data file:', error)
        return NextResponse.json(
            { error: 'Business not found' },
            { status: 404 }
        )
    }
}
