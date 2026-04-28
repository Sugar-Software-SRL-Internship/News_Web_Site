'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { Article } from '@/app/constants/mockData'
import { TimeAgo } from '@/components/ui/TimeAgo'
import { SignInModal } from '../navigation'
import { RegisterModal } from '../navigation'

// card audio individual
function AudioCard({ article }: { article: Article }) {
  const [saved, setSaved] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  // de inlocuit cu date din backend: const isLoggedIn = !!session?.user
  const isLoggedIn = false

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isLoggedIn) {
      setShowSignIn(true)
    } else {
      setSaved(!saved)
    }
  }

  return (
    <>
      <div className="group cursor-pointer flex flex-col gap-2 w-45 h-full shrink-0">
        <div className="relative w-45 h-45 overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-400 font-medium">{article.author}</p>
          <h3 className="font-bold text-sm leading-snug group-hover:underline transition-colors line-clamp-2">
            {article.title}
          </h3>

          <div className="flex items-center justify-between mt-4.5">
            {/* buton save */}
            <button
              onClick={handleSave}
              className="flex items-center gap-1 text-xs text-gray-500 hover:text-opacity-80 transition-colors"
            >
              {saved ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
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

      <SignInModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSwitchToRegister={() => {
          ;(setShowSignIn(false), setShowRegister(true))
        }}
      />

      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToSignIn={() => {
          ;(setShowRegister(false), setShowSignIn(true))
        }}
      />
    </>
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
      behavior: 'smooth',
    })
  }

  return (
    <div className="py-6 border-b-2 border-gray-900 dark:border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[15px] font-bold">RECOMMENDED AUDIO</h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="p-2 hover:bg-gray-900 hover:text-white"
            aria-label="Scroll stânga"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
            className="p-2 hover:bg-gray-900 hover:text-white"
            aria-label="Scroll dreapta"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
