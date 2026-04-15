'use client'
import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToRegister: () => void
}

export function SignInModal({
  isOpen,
  onClose,
  onSwitchToRegister,
}: SignInModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: conectare la backend
    console.log('Sign in:', { email, password })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sign in">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplu@email.com"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded
              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
              placeholder-gray-400 outline-none
              focus:border-[#bb1919] focus:ring-1 focus:ring-[#bb1919]
              transition-colors"
          />
        </div>

        {/* Parolă */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Parolă
            </label>
            <button
              type="button"
              className="text-xs text-[#bb1919] hover:underline"
            >
              Ai uitat parola?
            </button>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded
              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
              placeholder-gray-400 outline-none
              focus:border-[#bb1919] focus:ring-1 focus:ring-[#bb1919]
              transition-colors"
          />
        </div>

        {/* Buton submit */}
        <Button variant="primary" fullWidth>
          Sign in
        </Button>

        {/* Separator */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <span className="text-xs text-gray-400">sau</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Switch la Register */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Nu ai cont?{' '}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-[#bb1919] font-medium hover:underline"
          >
            Înregistrează-te
          </button>
        </p>
      </form>
    </Modal>
  )
}
