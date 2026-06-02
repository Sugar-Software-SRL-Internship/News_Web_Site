import { articleDetail } from '@/app/constants/mockData'
import { ArticlePage } from '@/components/news/ArticlePage'

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // de inlocuit cu fetch real din backend: const article = await fetch(`/api/news/${slug}`)
  const article = { ...articleDetail, slug }

  return <ArticlePage article={article} />
}
