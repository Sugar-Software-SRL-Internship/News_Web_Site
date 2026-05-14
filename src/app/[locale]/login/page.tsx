'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: conectare la backend
    console.log('Login:', { email, password })
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950 flex flex-col">
      {/* continut */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Sign in
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Intră în contul tău pentru a continua
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* email */}
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

              {/* passwd */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Parolă
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#024999] hover:underline"
                  >
                    Ai uitat parola?
                  </Link>
                </div>
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

              {/* submit button */}
              <button
                type="submit"
                className="w-full py-2.5 bg-[#024999] text-white font-semibold rounded
                  hover:bg-[#013a7a] transition-colors mt-2"
              >
                Sign in
              </button>
            </form>

            {/* bara */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
              <span className="text-xs text-gray-400">sau</span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* link register */}
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Nu ai cont?{' '}
              <Link
                href="/register"
                className="text-[#024999] font-medium hover:underline"
              >
                Înregistrează-te
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
