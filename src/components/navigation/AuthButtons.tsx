'use client'
import { useState } from 'react'
import { SignInModal } from './SignInModal'
import { RegisterModal } from './RegisterModal'

export function AuthButtons() {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const openSignIn = () => {
    setShowRegister(false)
    setShowSignIn(true)
  }

  const openRegister = () => {
    setShowSignIn(false)
    setShowRegister(true)
  }

  return (
    <>
      <div className="hidden md:flex items-center gap-2">
        <button
          onClick={openRegister}
          className="px-3 py-1.5 text-sm font-medium bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-800 hover:opacity-90 transition-opacity"
        >
          Register
        </button>
        <button
          onClick={openSignIn}
          className="px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white transition-colors"
        >
          Sign in
        </button>
      </div>

      <button
        onClick={openSignIn}
        className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
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
      </button>

      <SignInModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSwitchToRegister={openRegister}
      />
      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToSignIn={openSignIn}
      />
    </>
  )
}
