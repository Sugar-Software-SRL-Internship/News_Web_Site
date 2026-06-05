'use client'
import Link from 'next/link'
import { VideoItem } from '@/app/constants/mockData'
import { VideoPlayer } from './VideoPlayer'
import { useLocale, useTranslations } from 'next-intl'

interface VideoFeatureProps {
  video: VideoItem
  title: string
  videos: VideoItem[]
}

export function VideoFeature({ video, title }: VideoFeatureProps) {
  const locale = useLocale()
  const t = useTranslations('common')

  return (
    <div className="py-6 border-t border-gray-200  dark:border-gray-700">
      <Link
        href={`/${locale}/${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="hover:underline"
      >
        <h2 className="font-extrabold text-sm uppercase mb-4 flex gap-1 items-center">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" d="M9 5l7 7-7 7-7" />
          </svg>
        </h2>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoPlayer
            videoUrl={video.videoUrl}
            thumbnailUrl={video.thumbnailUrl}
            title={video.title}
          />
        </div>
        <div className="lg:col-span-1 flex flex-col gap-2 justify-center">
          {video.show && (
            <span className="text-xs font-bold uppercase text-gray-500">
              {video.show}
            </span>
          )}
          <h2 className="text-2xl font-bold">{video.title}</h2>
          <p className="text-sm text-gray-500">{video.description}</p>
          <Link
            href={'/${locale/video/${video.slug}'}
            className="mt-2 px-4 py-2 border-2 border-gray-800 dark:border-gray-200 text-sm font-bold hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors inline-block text-center"
          >
            {t('readMore')}
          </Link>
        </div>
      </div>
    </div>
  )
}
