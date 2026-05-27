import Link from 'next/link'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { Article } from '@/app/constants/mockData'
import { useTranslations } from 'next-intl'

function HorizontalArticle({ article }: { article: Article }) {
  const locale = useLocale()
  return (
    // card
    <Link
      href={`/${locale}/news/${article.slug}`}
      className="group cursor-pointer flex flex-col gap-2"
    >
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
    </Link>
  )
}

interface OnlyFromBBCProps {
  articles: Article[]
}

export function OnlyFromBBC({ articles }: OnlyFromBBCProps) {
  const t = useTranslations('home')
  return (
    <div className="py-6 border-b-2 border-gray-900 dark:border-white">
      <h2 className="font-extrabold text-[15px] mb-6 flex items-center gap-2 uppercase">
        {t('onlyFrom')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
        {articles.map((article) => (
          <HorizontalArticle key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
