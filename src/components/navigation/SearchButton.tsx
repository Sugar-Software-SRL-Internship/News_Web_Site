'use client'
import { useState } from 'react'

export function SearchBar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 py-3.25 pl-3.25 pr-0 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
        aria-label="Caută"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="11" cy="11" r="8" />
          <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
        </svg>
        <span className="text-sm font-medium">
          Search news, topics and more
        </span>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-72 z-50">
          <div className="flex items-center border-2 border-gray-800 dark:border-gray-200 bg-white dark:bg-gray-900 rounded">
            <input
              autoFocus
              type="text"
              placeholder="Caută știri..."
              className="flex-1 px-3 py-2 text-sm bg-transparent outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400"
            />
            <button
              className="px-3 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800"
              aria-label="Submit search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
      )}
    </div>
  )
}
