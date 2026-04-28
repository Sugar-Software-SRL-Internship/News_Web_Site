'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navItems } from '@/constants/navigation'

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleExpand = (href: string) => {
    setExpandedItem(expandedItem === href ? null : href)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Deschide meniul"
      >
        <span
          className={`w-5 h-0.5 bg-gray-800 dark:bg-gray-200 block transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`w-5 h-0.5 bg-gray-800 dark:bg-gray-200 block transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`w-5 h-0.5 bg-gray-800 dark:bg-gray-200 block transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
        fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-900
        z-50 shadow-xl transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        overflow-y-auto
      `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
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
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-2 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center border-2 border-gray-800 dark:border-gray-200 overflow-hidden">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search news, topics and more"
              className="flex-1 pl-3 py-3 text-base bg-transparent outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400"
            />
            <button
              className="flex items-center justify-center px-3 py-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 hover:opacity-90 transition-opacity"
              aria-label="Caută"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="flex flex-col">
          {navItems.map((item, index) => (
            <div key={item.href}>
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-bold flex-1 px-4 py-3 text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {item.label}
                </Link>

                {item.submenu && (
                  <button
                    onClick={() => toggleExpand(item.href)}
                    className="px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label={`Extinde ${item.label}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className={`transition-transform duration-300 ${expandedItem === item.href ? 'rotate-180' : ''}`}
                    >
                      <path
                        strokeLinecap="round"
                        d="M19 9l-7 7-7-7"
                        className="w-4 h-4"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {item.submenu && expandedItem === item.href && (
                <div className="dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-2.5 text-sm font-bold text-gray-900 dark:text-gray-100  hover:bg-gray-100 border-b border-gray-200 dark:border-gray-700"
                  >
                    {item.submenu.featured}
                  </Link>

                  {item.submenu.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-2.5 text-sm text-gray-600 dark:text-gray-400  hover:bg-gray-100 dark:hover:text-[#bb1919] dark:hover:bg-gray-700 transition-colors border-b border-gray-200 dark:border-gray-700 last:border-0"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}
