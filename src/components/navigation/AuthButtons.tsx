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
      <div className="flex items-center gap-2">
        <button
          onClick={openRegister}
          className="px-3 py-1.5 text-sm font-medium bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 hover:opacity-90 transition-opacity"
        >
          Register
        </button>

        <button
          onClick={openSignIn}
          className="px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 hover:underline transition-colors"
        >
          Sign in
        </button>
      </div>

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
