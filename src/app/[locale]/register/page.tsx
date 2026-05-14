'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
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
    <div className=" bg-gray-50 dark:bg-gray-950 flex flex-col">
      {/* Conținut */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Înregistrare
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Creează un cont nou
            </p>

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
                  required
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    placeholder-gray-400 outline-none
                    focus:border-[#024999] focus:ring-1 focus:ring-[#024999]
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
                  required
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    placeholder-gray-400 outline-none
                    focus:border-[#024999] focus:ring-1 focus:ring-[#024999]
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
                  required
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    placeholder-gray-400 outline-none
                    focus:border-[#024999] focus:ring-1 focus:ring-[#024999]
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
                  required
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    placeholder-gray-400 outline-none
                    focus:border-[#024999] focus:ring-1 focus:ring-[#024999]
                    transition-colors"
                />
              </div>

              {/* Buton submit */}
              <button
                type="submit"
                className="w-full py-2.5 bg-[#024999] text-white font-semibold rounded
                  hover:bg-[#013a7a] transition-colors mt-2"
              >
                Înregistrează-te
              </button>
            </form>

            {/* Separator */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
              <span className="text-xs text-gray-400">sau</span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Link login */}
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Ai deja cont?{' '}
              <Link
                href="/login"
                className="text-[#024999] font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
