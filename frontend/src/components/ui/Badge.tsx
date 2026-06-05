interface BadgeProps {
  label: string
  variant?: 'default' | 'breaking' | 'live' | 'sport' | 'tech'
  className?: string
}

export function Badge({
  label,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const base =
    'inline-flex items-center px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide'

  const variants = {
    default: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
    breaking: 'bg-[#bb1919] text-white',
    live: 'bg-red-600 text-white',
    sport: 'bg-yellow-500 text-black',
    tech: 'bg-blue-600 text-white',
  }

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {variant === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-pulse" />
      )}
      {label}
    </span>
  )
}
