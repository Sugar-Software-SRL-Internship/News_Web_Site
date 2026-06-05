'use client'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { VideoItem } from '@/app/constants/mockData'
import { VideoPlayer } from './VideoPlayer'
import { TimeAgo } from '../ui/TimeAgo'
import Link from 'next/link'

interface FeaturedVideoSectionProps {
  featured: VideoItem
  exploreVideos: VideoItem[]
  exploreTitle?: string
}

export function FeaturedVideoSection({
  featured,
  exploreVideos,
  exploreTitle = 'Explore More',
}: FeaturedVideoSectionProps) {
  const locale = useLocale()
  const [activeVideo, setActiveVideo] = useState<VideoItem>(featured)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6 border-b border-gray-200 dark:border-gray-700">
      <div className="lg:col-span-2">
        <VideoPlayer
          videoUrl={activeVideo.videoUrl}
          thumbnailUrl={activeVideo.thumbnailUrl}
          title={activeVideo.title}
          autoplay={true}
        />
        <div className="mt-3">
          <h1 className="font-bold text-xl">{activeVideo.title}</h1>
          <p className="text-sm text-gray-500 mt-1">
            {activeVideo.description}
          </p>
          <div className="flex items-center gap-2 mt-2">
            {activeVideo.show && (
              <span className="text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded">
                {activeVideo.show}
              </span>
            )}
            <span className="text-xs text-gray-400">
              <TimeAgo date={activeVideo.publishedAt} />
            </span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <h2 className="font-extrabold text-sm uppercase mb-4">
          {exploreTitle}
        </h2>
        <div className="flex flex-col gap-3 overflow-y-auto max-h-96">
          {exploreVideos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className={`flex gap-3 group cursor-pointer text-left w-full rounded p-1 transition-colors
                ${
                  activeVideo.id === video.id
                    ? 'bg-gray-100 dark:bg-gray-800'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
            >
              <div className="relative w-24 h-16 shrink-0 overflow-hidden">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="black"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium group-hover:underline line-clamp-3">
                {video.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
