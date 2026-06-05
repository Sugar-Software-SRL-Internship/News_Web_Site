'use client'
import { useState, useEffect } from 'react'
import { timeAgo } from '@/app/lib/utils/dateUtils'

interface TimeAgoProps {
  date: Date | string
  className?: string
}

export function TimeAgo({ date, className = '' }: TimeAgoProps) {
  const [text, setText] = useState(() => {
    const d = new Date(date)
    return isNaN(d.getTime()) ? '' : timeAgo(d)
  })

  useEffect(() => {
    const d = new Date(date)
    if (isNaN(d.getTime())) return

    setText(timeAgo(d))

    const interval = setInterval(() => {
      setText(timeAgo(d))
    }, 3600000)

    return () => clearInterval(interval)
  }, [date])

  if (!text) return null

  const d = new Date(date)

  return (
    <time dateTime={d.toISOString()} className={className}>
      {text}
    </time>
  )
}
