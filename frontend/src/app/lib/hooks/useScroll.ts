'use client'
import { useState, useEffect, useRef } from 'react'

export function useScroll() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      if (Math.abs(current - lastScrollY.current) < 15) return

      setScrollDirection(current > lastScrollY.current ? 'down' : 'up')
      setScrollY(current)
      lastScrollY.current = current
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, scrollDirection }
}
