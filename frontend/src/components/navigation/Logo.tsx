'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface LogoProps {
  width?: number
  height?: number
}

export function Logo({ width = 140, height = 40 }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const filter =
    !mounted || theme === 'light'
      ? 'brightness(0) saturate(100%) invert(12%) sepia(99%) saturate(1200%) hue-rotate(210deg) brightness(95%)'
      : 'brightness(0) invert(1)'

  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/jurnal_logo_rgb.svg"
        alt="Jurnal TV logo"
        width={width}
        height={height}
        priority
        style={{
          filter,
          transition: 'width 0.3s, height 0.3s',
          width,
          height,
        }}
      />
    </Link>
  )
}
