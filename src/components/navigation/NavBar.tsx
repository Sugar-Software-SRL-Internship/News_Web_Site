'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { SubMenu } from './SubMenu'
import { navItems } from '@/constants/navigation'

export function NavBar() {
  const pathname = usePathname()
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const handleNavClick = (href: string) => {
    if (activeSubmenu === href) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(href)
    }
  }

  const activeItem = navItems.find((item) => item.href === activeSubmenu)

  return (
    <div className="hidden md:block">
      <nav className="flex items-center border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {navItems.map((item) => {
              const isActive =
                pathname.includes(item.href) || activeSubmenu === item.href

              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    relative px-4 py-3 text-sm font-medium whitespace-nowrap
                    transition-colors hover:bg-gray-100 dark:hover:bg-gray-800
                    text-gray-800 dark:text-gray-200 shrink-0
                    ${
                      isActive
                        ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#bb1919]'
                        : ''
                    }
                  `}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {activeSubmenu && activeItem?.submenu && (
        <SubMenu
          featured={activeItem.submenu.featured}
          links={activeItem.submenu.links}
        />
      )}
    </div>
  )
}
