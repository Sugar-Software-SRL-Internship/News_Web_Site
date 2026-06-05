'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { VideoItem } from '@/app/constants/mockData'
import { VideoCard } from './VideoCard'

interface VideoRowProps {
  title: string
  videos: VideoItem[]
  href?: string
}

export function VideoRow({ title, videos, href }: VideoRowProps) {
  const locale = useLocale()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scoll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    })
  }

  return (
    <div className="py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        {href ? (
          <Link href={`/${locale}${href}`} className="hover:underline">
            <h2 className="font-extrabold text-sm uppercase">{title}</h2>
          </Link>
        ) : (
          <h2 className="font-extrabold text-sm uppercase">{title}</h2>
        )}
        <div className="flex gap-2">
          <button onClick={() => scoll('left')} className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={() => scoll('right')} className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" d="M9 5l7 7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scollbar-hide scroll-smooth"
      >
        {videos.map((video) => (
          <div key={video.id} className="w-56 shrink-0">
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  )
}
