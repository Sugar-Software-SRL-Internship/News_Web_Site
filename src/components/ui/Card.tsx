import Image from 'next/image'
import { Badge } from './Badge'

interface CardProps {
  title: string
  description?: string
  imageUrl?: string
  category?: string
  publishedAt?: string
  isBreaking?: boolean
  isLive?: boolean
  variant?: 'vertical' | 'horizontal'
  onClick?: () => void
  className?: string
}

export function Card({
  title,
  description,
  imageUrl,
  category,
  publishedAt,
  isBreaking = false,
  isLive = false,
  variant = 'vertical',
  onClick,
  className = '',
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        group cursor-pointer
        ${variant === 'horizontal' ? 'flex flex-row' : 'flex flex-col'}
        ${className}
      `}
    >
      {/* Imagine */}
      {imageUrl && (
        <div
          className={`relative overflow-hidden ${
            variant === 'horizontal' ? 'w-36 shrink-0' : 'w-full aspect-video'
          }`}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Continut */}
      <div className="flex flex-col gap-2 py-2 px-0">
        {/* Badge-uri */}
        <div className="flex gap-2">
          {isBreaking && <Badge label="Ultima Oră" variant="breaking" />}
          {isLive && <Badge label="Live" variant="live" />}
          {category && !isBreaking && !isLive && <Badge label={category} />}
        </div>

        {/* Titlu */}
        <h3 className="font-bold text-[var(--foreground)] group-hover:text-[#bb1919] transition-colors line-clamp-3 leading-snug">
          {title}
        </h3>

        {/* Descriere */}
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
        )}

        {/* Data */}
        {publishedAt && (
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-auto">
            {publishedAt}
          </p>
        )}
      </div>
    </div>
  )
}
