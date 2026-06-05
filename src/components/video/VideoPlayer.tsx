'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface VideoPlayerProps {
  videoUrl: string
  thumbnailUrl: string
  title: string
  autoplay?: boolean
}

export function VideoPlayer({
  videoUrl,
  thumbnailUrl,
  title,
  autoplay = false,
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(autoplay)

  useEffect(() => {
    setPlaying(autoplay)
  }, [videoUrl, autoplay])

  return (
    <div className="relative w-full aspect-video bg-black">
      {!playing ? (
        <>
          <Image src={thumbnailUrl} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              onClick={() => setPlaying(true)}
              className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Play"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <iframe
          src={`${videoUrl}&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  )
}
