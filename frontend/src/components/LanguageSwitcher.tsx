'use client'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations('language')

  const languages = [
    { code: 'ro', label: t('ro'), nativeLabel: 'RO' },
    { code: 'en', label: t('en'), nativeLabel: 'EN' },
  ]

  const switchLanguage = (newLocale: string) => {
    // de inlocuit locale-ul curent din url
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
    setOpen(false)
  }

  const currentLang = languages.find((l) => l.code === locale)

  return (
    <div className="relative">
      {/* buton principal */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm bg-slate-200
          text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:bg-gray-800
          dark:hover:bg-gray-700 transition-colors font-medium"
      >
        <span>{currentLang?.nativeLabel}</span>
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
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          <div
            className="absolute left-0 top-full mt-1 z-50 bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700 shadow-lg p-4 min-w-48"
          >
            <p className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-3">
              {t('select')}
            </p>

            <div className="flex flex-col gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`flex items-center gap-3 px-3 py-2 text-sm
                    transition-colors text-left
                    ${
                      locale === lang.code
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200'
                    }`}
                >
                  <span className="font-bold text-xs">{lang.nativeLabel}</span>
                  <span>{lang.label}</span>
                  {locale === lang.code && (
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
