import Image from 'next/image'
import {
  ArticleDetail,
  ContentBlock,
  heroArticles,
  sideArticles,
} from '@/app/constants/mockData'
import { TimeAgo } from '@/components/ui/TimeAgo'
import { ShareButtons } from '@/components/ui/ShareButtons'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { HeroGrid } from './HeroGrid'
import { SaveButton } from '@/components/ui/SaveButton'
import { useTranslations } from 'next-intl'

interface ArticlePageProps {
  article: ArticleDetail
}

export function ArticlePage({ article }: ArticlePageProps) {
  const t = useTranslations('article')
  return (
    <Container>
      <article className="max-w-full m-auto dark:bg-[#101727]">
        <div className="mt-6 mb-4 grid justify-center relative">
          <div className="grid grid-flow-row gap-x-4 max-w-[1248px] w-full grid-cols-[repeat(24,1fr)] mx-4">
            <div className="col-[6/span_14]">
              <h1 className="text-[38px] text-gray-950 dark:text-[#e0e0e0] font-medium">
                {' '}
                {article.title}{' '}
              </h1>
            </div>
          </div>
        </div>
        <div className="grid justify-center relative mb-6 z-[1000] items-center">
          <div className="grid grid-flow-row grid-cols-[repeat(24,1fr)] justify-between w-full max-w-[1248px] mx-4">
            <div className="col-[6/span_14]">
              <div className="grid gap-y-1 [grid-template-areas:'date_actions''contributors_contributors'] place-items-center">
                <p className="text-[rgb(84,86,88)] font-normal text-xs">
                  <TimeAgo date={article.publishedAt} />
                </p>
                <div className="[grid-area:actions] flex wrap gap-x-4">
                  <div className="relative flex items-center">
                    <ShareButtons
                      url={`/news/${article.slug}`}
                      title={article.title}
                    />
                    <SaveButton />
                    <a
                      href="https://www.google.com/preferences/source?q=bbc.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-800 transition-colors">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        {t('addToGoogle')}
                      </button>
                    </a>
                  </div>
                </div>
                <div className="[grid-area:contributors]">
                  <span className="block w-[458px]">
                    <div className="block">
                      <span className="mb-1 font-normal text-4 ">
                        {article.author}
                      </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center relative mb-8 max-[1279px]:inline">
          <div className="gap-x-2 gap-y-4 grid-flow-row max-w-[1248px] w-full mx-4 grid-cols-[repeat(24,1fr)] grid">
            <div className="col-[4/span_18]">
              <div className="relative w-full">
                {article.imageUrl && (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                <span className="block text-white absolute px-2 py-1 bg-black dark:text-black dark:bg-white font-normal text-xs bottom-0 right-0">
                  {article.source}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center relative mb-4">
          <div className="gap-x-4 max-w-[1248px] w-full mx-4 grid grid-cols-[repeat(24,1fr)]">
            <div className="col-[6/span_12]">
              {' '}
              <div className="grid gap-y-4">
                {article.content.map((block, index) => (
                  <RenderBlock key={index} block={block} />
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <Section title="more from jurnal tv">
          {article.relatedArticles.map((related) => (
            <RelatedArticleCard key={related.id} article={related} />
          ))}
        </Section>
        <HeroGrid
          leftArticles={heroArticles.slice(0, 2)}
          centerArticle={heroArticles[2]}
          rightArticles={sideArticles}
        />
      </article>
    </Container>
  )
}

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-base leading-relaxed text-[rgb(32, 34, 36)] font-normal text-[18px] dark:text-gray-200">
          {block.text}
        </p>
      )
    case 'heading':
      return (
        <h2 className="text-[rgb(32, 34, 36)] font-medium text-[32px] dark:text-gray-100">
          {block.text}
        </h2>
      )
    case 'image':
      return (
        <figure className="my-6">
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={block.url!}
              alt={block.caption || ''}
              fill
              className="object-contain"
            />
          </div>
          {block.caption && (
            <figcaption className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'quote':
      return (
        <blockquote className="border-l-4 border-[#024999] pl-4 my-6">
          <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
            "{block.text}"
          </p>
          {block.author && (
            <cite className="text-sm text-gray-500 dark:text-gray-400">
              — {block.author}
            </cite>
          )}
        </blockquote>
      )
    default:
      return null
  }
}

function RelatedArticleCard({
  article,
}: {
  article: ArticleDetail['relatedArticles'][0]
}) {
  return (
    <div className="group cursor-pointer flex gap-4 py-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <div className="flex-1">
        <h3 className="font-bold text-sm leading-snug group-hover:underline transition-colors">
          {article.title}
        </h3>
        {article.description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 my-1 line-clamp-2">
            {article.description}
          </p>
        )}
        <p className="text-xs text-gray-400">
          {article.category} | <TimeAgo date={article.publishedAt} />
        </p>
      </div>
      {article.imageUrl && (
        <div className="relative w-24 h-16 shrink-0 overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-contain group-hover:opacity-90 transition-transform duration-300"
          />
        </div>
      )}
    </div>
  )
}
