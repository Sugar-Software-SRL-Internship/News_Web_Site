import Image from 'next/image'
import { Article } from '@/app/constants/mockData'
import { TimeAgo } from '@/components/ui/TimeAgo'

function HorizontalArticle({ article }: { article: Article }) {
  return (
    <div className="group cursor-pointer flex flex-row gap-4">
      <div className="relative w-48 shrink-0 aspect-video overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-2 justify-center">
        <span className="text-xs font-bold uppercase text-[#bb1919]">
          {article.source}
        </span>
        <h3 className="font-bold text-base leading-snug group-hover:text-[#bb1919] transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {article.description}
        </p>
        <p className="text-xs text-gray-400">
          <TimeAgo date={article.publishedAt} />
        </p>
      </div>
    </div>
  )
}

interface OnlyFromBBCProps {
  articles: Article[]
}

export function OnlyFromBBC({ articles }: OnlyFromBBCProps) {
  return (
    <div className="py-6 border-b-4 border-gray-900 dark:border-gray-100">
      <h2 className="text-xl font-bold border-l-4 border-[#bb1919] pl-3 mb-6">
        Only from BBC
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <HorizontalArticle key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
