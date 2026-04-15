interface TagProps {
  label: string
  onClick?: () => void
  active?: boolean
  className?: string
}

export function Tag({
  label,
  onClick,
  active = false,
  className = '',
}: TagProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1 rounded-full text-sm font-medium border transition-colors
        ${
          active
            ? 'bg-[#bb1919] text-white border-[#bb1919]'
            : 'bg-transparent border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#bb1919] hover:text-[#bb1919]'
        }
        ${className}
      `}
    >
      {label}
    </button>
  )
}
