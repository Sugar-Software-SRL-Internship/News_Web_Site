import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { AuthButtons } from './AuthButtons'
import { HamburgerMenu } from './HamburgerMenu'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-full mx-auto px-4 sm:px-3 lg:px-6">
          <div className="px-4 py-3 flex items-center justify-between h-14">
            <div className="flex items-center">
              <HamburgerMenu />
            </div>

            <div className="absolute left-1/2 -translate-x-1/2">
              <Logo />
            </div>

            <div className="flex items-center gap-2">
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>

      <NavBar />
    </header>
  )
}
