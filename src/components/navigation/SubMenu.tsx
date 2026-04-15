import Link from 'next/link'

interface SubMenuProps {
  featured: string
  links: { label: string; href: string }[]
}

export function SubMenu({ featured, links }: SubMenuProps) {
  return (
    <div className="flex items-center border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 overflow-x-auto py-2 scrollbar-hide">
          <Link
            href="#"
            className="text-sm font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap hover:text-[#bb1919] transition-colors shrink-0"
          >
            {featured}
          </Link>

          {links.length > 0 && (
            <div className="h-4 w-px bg-gray-300 dark:bg-gray-600 shrink-0" />
          )}

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap hover:text-[#bb1919] dark:hover:text-[#bb1919] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
