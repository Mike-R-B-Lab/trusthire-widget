import { TrustHireWidget } from '../../../components/TrustHireWidget'

export default function EmbedPage({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { variant?: string }
}) {
    const slug = params.slug
    const variantParam = searchParams?.variant
    const variant: 'A' | 'B' | 'D' = (variantParam === 'B' || variantParam === 'D') ? variantParam : 'A'

    return <TrustHireWidget slug={slug} variant={variant} />
}
