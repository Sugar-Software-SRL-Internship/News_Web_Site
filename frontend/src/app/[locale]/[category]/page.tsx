import { Container } from '@/components/layout/Container'
import { HeroGrid } from '@/components/news/HeroGrid'
import { OnlyFromBBC } from '@/components/news/OnlyFromBBC'
import { RecommendedAudio } from '@/components/news/RecommendedAudio'
import { MoreNews } from '@/components/news/MoreNews'
import {
  heroArticles,
  sideArticles,
  onlyBBCArticles,
  audioArticles,
  moreNewsArticles,
  featuredVideo,
  missedVideos,
  artsVideos,
  maestroVideos,
  openingBellVideo,
  scienceVideos,
} from '@/app/constants/mockData'
import { getTranslations } from 'next-intl/server'
import { FeaturedVideoSection } from '@/components/video/FeaturedVideoSection'
import { VideoRow } from '@/components/video/VideoRow'
import { VideoFeature } from '@/components/video/VideoFeature'

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const tNav = await getTranslations('navigation')
  const tSub = await getTranslations('submenu')
  const videoCategories = ['video', 'maestro', 'discover']
  const isVideoCategory = videoCategories.includes(category)
  const tVideo = await getTranslations('video')

  let title = category
  try {
    title = tNav(category)
  } catch {
    try {
      title = tSub(category)
    } catch {
      title = category
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    }
  }

  return (
    <>
      <div className="w-full py-4 text-center">
        <h1 className="text-red-700 text-3xl font-bold uppercase dark:text-red-500">
          {title}
        </h1>
      </div>

      <Container>
        {isVideoCategory ? (
          <>
            <FeaturedVideoSection
              featured={featuredVideo}
              exploreVideos={missedVideos}
            />
            <VideoRow title={tVideo('missed')} videos={missedVideos} />
            <VideoFeature
              title={tVideo('motion')}
              video={artsVideos[0]}
              videos={artsVideos}
            />
            <VideoRow
              title={tVideo('maestro')}
              videos={maestroVideos}
              href="/maestro"
            />
            <VideoFeature
              title={tVideo('bell')}
              video={openingBellVideo}
              videos={scienceVideos}
            />
            <VideoRow
              title={tVideo('science')}
              videos={scienceVideos}
              href="/science"
            />
          </>
        ) : (
          <>
            <HeroGrid
              leftArticles={heroArticles.slice(0, 2)}
              centerArticle={heroArticles[2]}
              rightArticles={sideArticles}
            />
            <OnlyFromBBC articles={onlyBBCArticles} />
            <RecommendedAudio articles={audioArticles} />
            <MoreNews
              bigArticles={moreNewsArticles.slice(0, 1)}
              largeArticles={moreNewsArticles.slice(0, 3)}
              sideArticles={moreNewsArticles.slice(6, 9)}
            />
          </>
        )}
      </Container>
    </>
  )
}
