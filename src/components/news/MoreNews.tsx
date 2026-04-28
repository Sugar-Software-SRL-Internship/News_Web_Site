import Image from 'next/image'
import { Article } from '@/app/constants/mockData'
import { TimeAgo } from '@/components/ui/TimeAgo'

function BigArticles({ article }: { article: Article }) {
  return (
    <div className="group cursor-pointer flex flex-row gap-4 justify-between py-4">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-[28px] leading-snug group-hover:underline transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {article.description}
        </p>
        <p className="text-xs text-gray-400">
          {article.source} | <TimeAgo date={article.publishedAt} />
        </p>
      </div>

      <div className="object-cover relative w-154 shrink-0 overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover group-hover:opacity-90 transition-transform duration-300"
        />
      </div>
    </div>
  )
}

function LargeArticle({ article }: { article: Article }) {
  return (
    <div className="group cursor-pointer flex flex-col gap-4 justify-between py-4">
      <div className="object-cover relative w-75 h-full shrink-0 overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover group-hover:opacity-90 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-base leading-snug group-hover:underline transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {article.description}
        </p>
        <p className="text-xs text-gray-400">
          {article.source} | <TimeAgo date={article.publishedAt} />
        </p>
      </div>
    </div>
  )
}

function SmallArticle({ article }: { article: Article }) {
  return (
    <div className="group cursor-pointer flex flex-col gap-1.5 py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <h3 className="font-bold text-sm leading-snug group-hover:underline transition-colors">
        {article.title}
      </h3>
      <p className="text-xs text-gray-400">
        {article.source} | <TimeAgo date={article.publishedAt} />
      </p>
    </div>
  )
}

interface MoreNewsProps {
  largeArticles: Article[]
  smallArticles: Article[]
  sideArticles: Article[]
  bigArticles: Article[]
}

export function MoreNews({
  bigArticles,
  largeArticles,
  smallArticles,
  sideArticles,
}: MoreNewsProps) {
  return (
    <div className="py-6">
      <h2 className="text-[15px] font-bold mb-4">MORE NEWS</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 md:pr-6">
          <div className="">
            {bigArticles.map((article) => (
              <BigArticles key={article.id} article={article} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            {largeArticles.map((article) => (
              <LargeArticle key={article.id} article={article} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {smallArticles.map((article) => (
              <SmallArticle key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="md:col-span-1 flex flex-col">
          {sideArticles.map((article, index) => (
            <div key={article.id}>
              {index === 0 ? (
                <div className="group cursor-pointer flex flex-col gap-2 pb-4 border-b border-gray-200 dark:border-gray-700">
                  {article.imageUrl && (
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:opacity-90 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h3 className="font-bold text-sm leading-snug group-hover:underline transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {article.source} | <TimeAgo date={article.publishedAt} />
                  </p>
                </div>
              ) : (
                <SmallArticle article={article} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
