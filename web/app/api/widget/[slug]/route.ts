import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug

    try {
        // Construct path to the JSON file
        // Note: process.cwd() returns the root of the project where package.json is
        // We expect data to be in web/data/[slug].json if running from root,
        // but depending on how nextjs runs, process.cwd() is usually the specific app dir or project root.
        // Let's try finding it relative to process.cwd()
        const jsonDirectory = path.join(process.cwd(), 'data')
        const fileContents = await fs.readFile(jsonDirectory + `/${slug}.json`, 'utf8')

        const data = JSON.parse(fileContents)

        return NextResponse.json(data)
    } catch (error) {
        console.error('Error reading data file:', error)
        return NextResponse.json(
            { error: 'Business not found' },
            { status: 404 }
        )
    }
}
