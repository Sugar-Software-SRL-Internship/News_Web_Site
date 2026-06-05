'use client'
import { useLocale } from 'next-intl'
import { AudioItem } from '../../app/constants/mockData'
import { TimeAgo } from '../ui'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface AudioFeatureProps {
  audio: AudioItem
  title?: string
}

export function AudioFeature({ audio, title }: AudioFeatureProps) {
  const locale = useLocale()
  const [playing, setPlaying] = useState(false)

  return (
    <div className="py-6 border-t border-gray-200 dark:border-gray-700">
      {title && (
        <h2 className="font-extrabold text-sm uppercase mb-4">{title}</h2>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="relative w-full aspect-square overflow-hidden rounded">
            <Image
              src={audio.thumbnailUrl}
              alt={audio.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col gap-3">
          {audio.show && (
            <p className="text-xs font-bold uppercase text-gray-500">
              {audio.show}
            </p>
          )}
          <h3 className="font-bold text-2xl leading-snug">{audio.title}</h3>
          <p className="text-sm text-gray-500">{audio.description}</p>

          {!playing ? (
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => setPlaying(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                {audio.duration}
              </button>
              <span className="text-xs text-gray-400">
                {audio.availableFor}
              </span>
            </div>
          ) : (
            <iframe
              src={audio.embedUrl}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="rounded"
            />
          )}
        </div>
      </div>
    </div>
  )
}
