import { Container } from '@/components/layout/Container'
import { VideoCard } from '@/components/video/VideoCard'
import { VideoDetailHero } from '@/components/video/VideoDetailHero'
import {
  featuredVideo,
  maestroVideos,
  missedVideos,
  artsVideos,
  openingBellVideo,
  scienceVideos,
} from '@/app/constants/mockData'

const allVideos = [
  featuredVideo,
  ...missedVideos,
  ...artsVideos,
  ...maestroVideos,
  openingBellVideo,
  ...scienceVideos,
]

export default async function VideoPagesDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const video = allVideos.find((v) => v.slug === slug) ?? featuredVideo

  // fetch din API const video = await fetch(`/api/videos/${slug}`).then(r => r.json())

  return (
    <>
      <Container className="py-6">
        <VideoDetailHero
          video={video}
          exploreVideos={maestroVideos}
          exploreTitle="Explore More"
        />
      </Container>

      <Container className="pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {missedVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </Container>
    </>
  )
}
