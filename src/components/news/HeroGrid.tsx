import Image from 'next/image'
import { Article } from '@/app/constants/mockData'
import { TimeAgo } from '@/components/ui/TimeAgo'

function ArticleWithImage({
  article,
  showDescription = true,
}: {
  article: Article
  showDescription?: boolean
}) {
  return (
    <div className="group cursor-pointer flex flex-col gap-2">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-bold text-base leading-snug group-hover:text-[#bb1919] transition-colors">
          {article.title}
        </h3>
        {showDescription && (
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {article.description}
          </p>
        )}
        <p className="text-xs text-gray-400">
          {article.source} · <TimeAgo date={article.publishedAt} />
        </p>
      </div>
    </div>
  )
}

function ArticleTextOnly({ article }: { article: Article }) {
  return (
    <div className="group cursor-pointer flex flex-col gap-1 py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <h3 className="font-bold text-sm leading-snug group-hover:text-[#bb1919] transition-colors">
        {article.title}
      </h3>
      <p className="text-xs text-gray-400">
        {article.source} · <TimeAgo date={article.publishedAt} />
      </p>
    </div>
  )
}

interface HeroGridProps {
  leftArticles: Article[]
  centerArticle: Article
  rightArticles: Article[]
}

export function HeroGrid({
  leftArticles,
  centerArticle,
  rightArticles,
}: HeroGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-b-4 border-gray-900 dark:border-gray-100 pb-6">
      <div className="md:col-span-1 flex flex-col gap-4 md:border-r border-gray-200 dark:border-gray-700 md:pr-4">
        {leftArticles.map((article) => (
          <div
            key={article.id}
            className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
          >
            <ArticleWithImage article={article} />
          </div>
        ))}
      </div>

      <div className="md:col-span-2 md:border-r border-gray-200 dark:border-gray-700 md:px-4">
        <ArticleWithImage article={centerArticle} showDescription />
      </div>

      <div className="md:col-span-1 md:pl-4 flex flex-col">
        {rightArticles.map((article) => (
          <ArticleTextOnly key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
