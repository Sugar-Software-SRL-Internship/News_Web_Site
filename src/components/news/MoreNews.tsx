import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { Article } from '@/app/constants/mockData'
import { TimeAgo } from '@/components/ui/TimeAgo'

function BigArticle({ article }: { article: Article }) {
  const locale = useLocale()
  return (
    <Link
      href={`/${locale}/news/${article.slug}`}
      className="group flex flex-col gap-2"
    >
      <h3 className="font-bold text-2xl leading-snug group-hover:underline">
        {article.title}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-2">
        {article.description}
      </p>
      <p className="text-xs text-gray-400">
        {article.source} | <TimeAgo date={article.publishedAt} />
      </p>
    </Link>
  )
}

function LargeArticle({ article }: { article: Article }) {
  const locale = useLocale()
  return (
    <Link
      href={`/${locale}/news/${article.slug}`}
      className="group flex flex-col gap-2 py-2 border-b border-gray-200 dark:border-gray-700"
    >
      {article.imageUrl && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:opacity-90"
          />
        </div>
      )}
      <h3 className="font-bold text-base leading-snug group-hover:underline">
        {article.title}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-2">
        {article.description}
      </p>
      <p className="text-xs text-gray-400">
        {article.source} | <TimeAgo date={article.publishedAt} />
      </p>
    </Link>
  )
}

function SideArticle({ article }: { article: Article }) {
  const locale = useLocale()
  return (
    <Link
      href={`/${locale}/news/${article.slug}`}
      className="group flex flex-col gap-1 py-2 border-b border-gray-200 dark:border-gray-700"
    >
      <h3 className="font-bold text-base leading-snug group-hover:underline">
        {article.title}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-2">
        {article.description}
      </p>
      <p className="text-xs text-gray-400">
        {article.source} | <TimeAgo date={article.publishedAt} />
      </p>
    </Link>
  )
}

interface MoreNewsProps {
  bigArticles: Article[]
  largeArticles: Article[]
  sideArticles: Article[]
}

export function MoreNews({
  bigArticles,
  largeArticles,
  sideArticles,
}: MoreNewsProps) {
  const locale = useLocale()
  const t = useTranslations('home')
  return (
    <section>
      <div className="">
        <Link href={`/${locale}/news`}>
          <h2 className="font-extrabold text-[15px] mb-6 flex items-center gap-2 uppercase hover:underline pt-6">
            {t('moreNews')}
            <span className="text-[15px]">›</span>
          </h2>
        </Link>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-1 lg:col-span-1 flex flex-col justify-center">
                {bigArticles[0] && <BigArticle article={bigArticles[0]} />}
              </div>

              <div className="hidden lg:block col-span-2">
                {bigArticles[0] && (
                  <Link
                    href={`/news/${bigArticles[0].slug}`}
                    className="group block"
                  >
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={bigArticles[0].imageUrl}
                        alt={bigArticles[0].title}
                        fill
                        className="object-cover group-hover:opacity-90"
                      />
                    </div>
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {largeArticles.map((article) => (
                  <LargeArticle key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4 min-w-[280px]">
            <div className="col-span-1 flex flex-col">
              {largeArticles.slice(0, 1).map((article) => (
                <LargeArticle key={article.id} article={article} />
              ))}
            </div>

            <div className="col-span-1 flex flex-col gap-4">
              {sideArticles.slice(0, 3).map((article) => (
                <SideArticle key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
