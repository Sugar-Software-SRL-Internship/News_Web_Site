import { Container } from '@/components/layout'
import { VideoFeature } from '@/components/video/VideoFeature'
import { VideoRow } from '@/components/video/VideoRow'
import { FeaturedVideoSection } from '@/components/video/FeaturedVideoSection'
import {
  featuredVideo,
  missedVideos,
  artsVideos,
  maestroVideos,
  openingBellVideo,
  scienceVideos,
} from '@/app/constants/mockData'
import { getTranslations } from 'next-intl/server'

export default async function VideoPages() {
  const t = await getTranslations('common')
  const tr = await getTranslations('video')
  return (
    <Container className="py-6">
      <FeaturedVideoSection
        featured={featuredVideo}
        exploreVideos={missedVideos}
        exploreTitle={t('seeAll')}
      />
      <VideoRow title={tr('missed')} videos={missedVideos} />
      <VideoFeature title={tr('motion')} video={artsVideos[0]} />
      <VideoRow title={tr('maestro')} videos={maestroVideos} href="/maestro" />
      <VideoFeature title={tr('bell')} video={openingBellVideo} />
      <VideoRow title={tr('science')} videos={scienceVideos} href="/science" />
    </Container>
  )
}
