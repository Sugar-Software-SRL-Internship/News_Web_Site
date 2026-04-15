'use client'
import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToSignIn: () => void
}

export function RegisterModal({
  isOpen,
  onClose,
  onSwitchToSignIn,
}: RegisterModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: conectare la backend
    console.log('Register:', { name, email, password })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Înregistrare">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Nume */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Nume complet
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ion Popescu"
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded
              bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
              placeholder-gray-400 outline-none
              focus:border-[#bb1919] focus:ring-1 focus:ring-[#bb1919]
              transition-colors"
          />
        </div>

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
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Parolă
          </label>
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

        {/* Confirmă parola */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Confirmă parola
          </label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
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
          Înregistrează-te
        </Button>

        {/* Switch la Sign In */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Ai deja cont?{' '}
          <button
            type="button"
            onClick={onSwitchToSignIn}
            className="text-[#bb1919] font-medium hover:underline"
          >
            Sign in
          </button>
        </p>
      </form>
    </Modal>
  )
}
