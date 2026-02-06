import { TrustHireWidget } from '../../components/TrustHireWidget'

export default function EmbedPage({
    searchParams,
}: {
    searchParams: { slug?: string; variant?: string }
}) {
    const slug = searchParams?.slug ?? 'demo'
    const variant = (searchParams?.variant === 'B') ? 'B' : 'A'

    return <TrustHireWidget slug={slug} variant={variant} />
}
