'use client'
import { VideoItem } from '@/app/constants/mockData'

interface ExploreMoreProps {
  videos: VideoItem[]
  title?: string
  onSelect?: (video: VideoItem) => void
}

export function ExploreMore({
  videos,
  title = 'Explore More',
  onSelect,
}: ExploreMoreProps) {
  return (
    <div className="lg:col-span-1">
      <h2 className="font-extrabold text-sm uppercase mb-4">{title}</h2>
      <div className="flex flex-col gap-3 overflow-y-auto max-h-[500px]">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => onSelect?.(video)}
            className="flex gap-3 group cursor-pointer text-left w-full rounded p-1 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="relative w-24 h-16 shrink-0 overflow-hidden">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="black">
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
  )
}
