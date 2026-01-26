import { TrustHireWidget } from '../../components/TrustHireWidget'

export default function EmbedPage({
    searchParams,
}: {
    searchParams: { slug?: string }
}) {
    const slug = searchParams?.slug ?? 'demo'
    return <TrustHireWidget slug={slug} />
}
