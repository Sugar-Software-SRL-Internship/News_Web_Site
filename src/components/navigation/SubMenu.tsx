'use client'
import { useRouter } from 'next/navigation'

interface SubMenuProps {
  featured: string
  links: { label: string; href: string }[]
}

export function SubMenu({ links }: SubMenuProps) {
  const router = useRouter()

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center overflow-x-auto scrollbar-hide">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => router.push(link.href)}
              className="relative p-2 text-xs font-medium whitespace-nowrap
                transition-colors hover:bg-gray-100 dark:hover:bg-gray-800
                text-gray-600 dark:text-gray-400 shrink-0"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
