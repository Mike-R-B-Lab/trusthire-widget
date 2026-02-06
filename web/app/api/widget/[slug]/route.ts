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

    try {
        const process = await import('process');
        const path = await import('path');
        const fs = await import('fs/promises');

        // Dynamically load the JSON file matching the slug
        const filePath = path.join(process.cwd(), 'data', `${slug}.json`);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        return NextResponse.json(data)
    } catch (e) {
        console.error(`Error reading data for ${slug}:`, e);
        return NextResponse.json(
            { error: 'Business not found' },
            { status: 404 }
        )
    }
}
