import { TrustHireWidget } from '../../../components/TrustHireWidget'

export default function EmbedPage({
    params,
    searchParams,
}: {
    params: { slug: string }
    searchParams: { variant?: string }
}) {
    const slug = params.slug
    const variant = (searchParams?.variant === 'B') ? 'B' : 'A'

    return <TrustHireWidget slug={slug} variant={variant} />
}
