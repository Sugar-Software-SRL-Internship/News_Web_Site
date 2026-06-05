'use client'
import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { useTranslations } from 'next-intl'

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
  const t = useTranslations('auth')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: conectare la backend
    console.log('Register:', { name, email, password })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('signIn')}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* nume */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {t('fullName')}
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

        {/* email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {t('email')}
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

        {/* passwd */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {t('password')}
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

        {/* confirma passwd */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {t('confirmPassword')}
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

        {/* submit */}
        <Button variant="primary" fullWidth>
          {t('register')}
        </Button>

        {/* switch la Sign In */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          {t('hasAccount')}
          <button
            type="button"
            onClick={onSwitchToSignIn}
            className="text-[#bb1919] font-medium hover:underline"
          >
            {t('signIn')}
          </button>
        </p>
      </form>
    </Modal>
  )
}
