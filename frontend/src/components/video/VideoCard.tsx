'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { VideoItem } from '@/app/constants/mockData'

interface VideoCardProps {
  video: VideoItem
  variant?: 'horizontal' | 'vertical'
}

export function VideoCard({ video, variant = 'vertical' }: VideoCardProps) {
  const locale = useLocale()

  return (
    <Link
      href={`/${locale}/video/${video.slug}`}
      className="group flex flex-col gap-2"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          fill
          className="object-cover group-hover:oapcity-90 transition-opacity"
        />
        <div className="absolute inset-0 flex items-end p-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white text-xs font-medium bg-black/50 px-1 rounded">
              {video.duration}
            </span>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-sm leading-snug group-hover:underline line-clamp-2">
        {video.title}
      </h3>
      {video.description && (
        <p className="text-xs text-gray-500 line-clamp-2">
          {video.description}
        </p>
      )}
      <p className="text-xs text-gray-400">{video.source}</p>
    </Link>
  )
}
