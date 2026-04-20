'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { Article } from '@/app/constants/mockData'
import { TimeAgo } from '@/components/ui/TimeAgo'

// Card audio individual
function AudioCard({ article }: { article: Article }) {
  const [saved, setSaved] = useState(false)

  return (
    <div className="group cursor-pointer flex flex-col gap-2 w-44 shrink-0">
      <div className="relative w-44 h-44 overflow-hidden rounded">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs text-gray-400 font-medium">{article.author}</p>
        <h3 className="font-bold text-sm leading-snug group-hover:text-[#bb1919] transition-colors line-clamp-2">
          {article.title}
        </h3>

        <div className="flex items-center justify-between mt-1">
          {/* Buton save */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSaved(!saved)
            }}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#bb1919] transition-colors"
          >
            {saved ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#bb1919"
              >
                <path d="M5 3h14a1 1 0 011 1v17l-7-3.5L6 21V4a1 1 0 011-1z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 3h14a1 1 0 011 1v17l-7-3.5L6 21V4a1 1 0 011-1z" />
              </svg>
            )}
            {saved ? 'Saved' : 'Save'}
          </button>
          <p className="text-xs text-gray-400">
            <TimeAgo date={article.publishedAt} />
          </p>
        </div>
      </div>
    </div>
  )
}

interface RecommendedAudioProps {
  articles: Article[]
}

export function RecommendedAudio({ articles }: RecommendedAudioProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth', // animat
    })
  }

  return (
    <div className="py-6 border-b-4 border-gray-900 dark:border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold border-l-4 border-[#bb1919] pl-3">
          Recommended Audio
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 border border-gray-300 dark:border-gray-600 hover:border-gray-800 dark:hover:border-gray-200 rounded transition-colors"
            aria-label="Scroll stânga"
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
              <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 border border-gray-300 dark:border-gray-600 hover:border-gray-800 dark:hover:border-gray-200 rounded transition-colors"
            aria-label="Scroll dreapta"
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
        {articles.map((article) => (
          <AudioCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
