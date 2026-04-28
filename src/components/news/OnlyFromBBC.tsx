import Image from 'next/image'
import { Article } from '@/app/constants/mockData'

function HorizontalArticle({ article }: { article: Article }) {
  return (
    // card
    <div className="group cursor-pointer flex flex-col gap-3">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover group-hover:opacity-80 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-3 justify-center">
        <h3 className="font-bold text-lg leading-snug group-hover:underline transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {article.description}
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
    <div className="py-6 border-b-2 border-gray-900 dark:border-gray-100">
      <h2 className="text-[15px] font-bold mt-2 mb-6">ONLY FROM BBC</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
        {articles.map((article) => (
          <HorizontalArticle key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
