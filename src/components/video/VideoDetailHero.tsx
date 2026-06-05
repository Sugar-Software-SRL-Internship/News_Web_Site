'use client'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { VideoItem } from '@/app/constants/mockData'
import { VideoPlayer } from './VideoPlayer'
import { ShareButtons } from '../ui/ShareButtons'
import { TimeAgo } from '../ui/TimeAgo'
import Link from 'next/link'
import { ExploreMore } from './ExploreMore'

interface VideoDetailHeroProps {
  video: VideoItem
  exploreVideos: VideoItem[]
  exploreTitle?: string
}

export function VideoDetailHero({
  video,
  exploreVideos,
  exploreTitle = 'Explore More',
}: VideoDetailHeroProps) {
  console.log(
    'exploreVideos:',
    exploreVideos.length,
    exploreVideos.map((v) => v.id)
  )
  console.log('activeVideo:', video.id, video.title)
  const locale = useLocale()
  const [activeVideo, setActiveVideo] = useState<VideoItem>(video)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6 border-b border-gray-200 dark:border-gray-700">
      <div className="lg:col-span-2">
        <VideoPlayer
          videoUrl={activeVideo.videoUrl}
          thumbnailUrl={activeVideo.thumbnailUrl}
          title={activeVideo.title}
          autoplay={true}
        />

        <div className="mt-4">
          <h1 className="font-bold text-xl">{activeVideo.title}</h1>
          <p className="text-sm text-gray-500 mt-1">
            {activeVideo.description}
          </p>

          <div className="flex items-center gap-3 mt-2">
            <TimeAgo date={activeVideo.publishedAt} />
            {activeVideo.show && (
              <span className="text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded">
                {activeVideo.show}
              </span>
            )}
          </div>

          <div className="mt-4">
            <ShareButtons
              url={`/${locale}/video/${activeVideo.slug}`}
              title={activeVideo.title}
            />
          </div>
        </div>
      </div>

      <ExploreMore
        videos={exploreVideos}
        title={exploreTitle}
        onSelect={(v) => setActiveVideo(v)}
      />
    </div>
  )
}
