'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const t = useTranslations('theme')

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const themes = [
    { value: 'light', label: t('light') },
    { value: 'dark', label: t('dark') },
    { value: 'system', label: t('system') },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm bg-slate-200
          text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:bg-gray-800
          dark:hover:bg-gray-700 transition-colors text-[14px] font-medium"
      >
        <span className="hidden sm:block">
          {theme === 'dark'
            ? t('dark')
            : theme === 'light'
              ? t('light')
              : t('system')}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* panel expandat */}
      {open && (
        <>
          {/* Overlay transparent ca sa se inchida la click afara */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          {/* Panel */}
          <div
            className="absolute left-0 top-full mt-1 z-50 bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700 shadow-lg p-4 min-w-48"
          >
            <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-3">
              Selectează tema
            </p>

            <div className="flex flex-col gap-1">
              {themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => {
                    setTheme(t.value)
                    setOpen(false)
                  }}
                  className={`flex items-center gap-3 px-3 py-2 text-sm
                    transition-colors text-left
                    ${
                      theme === t.value
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200'
                    }`}
                >
                  <span>{t.label}</span>
                  {theme === t.value && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      className="ml-auto"
                    >
                      <path strokeLinecap="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
