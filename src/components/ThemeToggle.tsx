'use client'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('theme')

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="theme-btn px-3 py-1.5 bg-gray-200 drak:bg-gray-700
        text-gray-800 dark:text-gray-200 text-sm transition-colors"
    >
      {theme === 'dark' ? t('light') : t('dark')}
    </button>
  )
}
