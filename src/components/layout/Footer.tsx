import { ThemeToggle } from '@/components/ThemeToggle'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Links */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <a href="#" className="hover:underline">
            About BBC
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
        </div>

        {/* Linie separator */}
        <div className="h-px bg-gray-200 dark:bg-gray-700 mb-6" />

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © 2024 BBC. All rights reserved.
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
