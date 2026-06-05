'use client'
import { useState } from 'react'
import { SignInModal } from '@/components/navigation/SignInModal'
import { RegisterModal } from '@/components/navigation/RegisterModal'

export function SaveButton() {
  const [saved, setSaved] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  // TODO: de inlocuit cu date din backend
  const isLoggedIn = false

  const handleSave = () => {
    if (!isLoggedIn) {
      setShowSignIn(true)
    } else {
      setSaved(!saved)
    }
  }

  return (
    <>
      <button
        onClick={handleSave}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
          transition-colors
          ${
            saved
              ? 'text-gray-800 dark:text-gray-200 hover:underline'
              : 'text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 hover:underline'
          }`}
      >
        {/* Iconița bookmark */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="24"
          viewBox="0 0 24 24"
          fill={saved ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
        {saved ? 'Saved' : 'Save'}
      </button>

      <SignInModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSwitchToRegister={() => {
          setShowSignIn(false)
          setShowRegister(true)
        }}
      />
      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToSignIn={() => {
          setShowRegister(false)
          setShowSignIn(true)
        }}
      />
    </>
  )
}
