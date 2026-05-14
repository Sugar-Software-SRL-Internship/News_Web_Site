'use client'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export function AuthButtons() {
  const locale = useLocale()

  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:flex items-center gap-2">
        <Link
          href={`/${locale}/register`}
          className="px-3 py-1.5 text-sm font-medium bg-gray-900 text-white hover:opacity-90 transition-colors"
        >
          Register
        </Link>
        <Link
          href={`/${locale}/login`}
          className="px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline transition-colors"
        >
          Sign In
        </Link>
      </div>
      {/* responsive */}
      <Link
        href={`/${locale}/login`}
        className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Cont"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
          />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </Link>
    </div>
  )
}
