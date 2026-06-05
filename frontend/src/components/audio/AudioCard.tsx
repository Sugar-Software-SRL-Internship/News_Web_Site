'use client'
<<<<<<< HEAD
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { AudioItem } from '../../app/constants/mockData'
import { TimeAgo } from '../ui'
import { SignInModal } from '../navigation'
import { RegisterModal } from '../navigation'

interface AudioCradProps {
  audio: AudioItem
}

export function AudioCard({ audio }: AudioCradProps) {
  const locale = useLocale()
  const [saved, setSaved] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const isLoggedIn = false // TODO: de inlocuit cu auth real

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!isLoggedIn) {
      setShowSignIn(true)
    } else {
      setSaved(!saved)
    }
  }

  return (
    <>
      <Link
        href={`/${locale}/audio/${audio.slug}`}
        className="group flex flex-col gap-2 w-44 shrink-0"
      >
        <div className="relative w-44 h-44 overflow-hidden rounded">
          <Image
            src={audio.thumbnailUrl}
            alt={audio.title}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity"
          />
        </div>

        <div className="flex flex-col gap-1">
          {audio.show && (
            <p className="text-xs text-gray-500 font-medium line-clamp-1">
              {audio.show}
            </p>
          )}
          <h3 className="font-bold text-sm leading-snug group-hover:underline line-clamp-2">
            {audio.title}
          </h3>

          <div className="flex items-center justify-between mt-1">
            <button
              onClick={handleSave}
              className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0  24 24"
                fill={saved ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
              {saved ? 'Saved' : 'Save'}
            </button>
            <p className="text-xs text-gray-400">
              <TimeAgo date={audio.publishedAt} />
            </p>
          </div>
        </div>
      </Link>

      <SignInModal
        isOpen={showRegister}
        onClose={() => {
          setShowSignIn(false)
        }}
        onSwitchToRegister={() => {
          setShowSignIn(false)
          setShowRegister(true)
        }}
      />

      <RegisterModal
        isOpen={showSignIn}
        onClose={() => {
          setShowRegister(false)
        }}
        onSwitchToSignIn={() => {
          setShowRegister(false)
          setShowSignIn(true)
        }}
      />
    </>
=======
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
>>>>>>> 6815c8ba (feat: moved frontend files to folder /frontend)
  )
}
