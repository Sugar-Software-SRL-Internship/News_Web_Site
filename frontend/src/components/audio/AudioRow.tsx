'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { AudioItem } from '../../app/constants/mockData'
import { AudioCard } from './AudioCard'

interface AudioRowProps {
  title: string
  audios: AudioItem[]
  href?: string
}

export function AudioRow({ title, audios, href }: AudioRowProps) {
  const locale = useLocale()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
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
          <button
            onClick={() => scroll('left')}
            className="p-2 border border--gray-300 dark:border-gray-600 hover:border-gray-800 dark:hover:border-gray-200 rounded transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {audios.map((audio) => (
          <AudioCard key={audio.id} audio={audio} />
        ))}
      </div>
    </div>
  )
}
