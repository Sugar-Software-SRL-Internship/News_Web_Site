'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { AudioItem } from '@/app/constants/mockData'

interface AudioCardProps {
  audio: AudioItem
  variant?: 'horizontal' | 'vertical'
}

export function AudioCard({ audio, variant = 'vertical' }: AudioCardProps) {
  const locale = useLocale()

  return (
    <Link
      href={`/${locale}/audio/${audio.slug}`}
      className="group flex flex-col gap-2"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={audio.thumbnailUrl}
          alt={audio.title}
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
              {audio.duration}
            </span>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-sm leading-snug group-hover:underline line-clamp-2">
        {audio.title}
      </h3>
      {audio.description && (
        <p className="text-xs text-gray-500 line-clamp-2">
          {audio.description}
        </p>
      )}
      <p className="text-xs text-gray-400">{audio.source}</p>
    </Link>
  )
}
