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

    // Read file directly to ensure specific updates are reflected immediately
    let data;
    try {
        if (slug === 'demo') {
            const process = await import('process');
            const path = await import('path');
            const fs = await import('fs/promises');

            const filePath = path.join(process.cwd(), 'data', 'demo.json');
            const fileContents = await fs.readFile(filePath, 'utf8');
            data = JSON.parse(fileContents);
        } else {
            // Fallback to static import if needed or handle other slugs
            const dataMap: Record<string, any> = {
                'demo': demoData
            }
            data = dataMap[slug]
        }
    } catch (e) {
        console.error("Error reading demo.json:", e);
        // Fallback
        const dataMap: Record<string, any> = {
            'demo': demoData
        }
        data = dataMap[slug]
    }

    if (data) {
        return NextResponse.json(data)
    } else {
        return NextResponse.json(
            { error: 'Business not found' },
            { status: 404 }
        )
    }
}
