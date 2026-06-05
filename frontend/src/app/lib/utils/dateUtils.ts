export function timeAgo(date: string | Date): string {
  const now = new Date()
  const past = new Date(date)
  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000)

  if (seconds < 60) return 'Acum câteva secunde'

  const minutes = Math.floor(seconds / 60)
  if (minutes < 60)
    return `Acum ${minutes} ${minutes === 1 ? 'minut' : 'minute'}`

  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `Acum ${hours} ${hours === 1 ? 'oră' : 'ore'}`

  const days = Math.floor(hours / 24)
  if (days < 7) return `Acum ${days} ${days === 1 ? 'zi' : 'zile'}`

  const weeks = Math.floor(days / 7)
  if (weeks < 4)
    return `Acum ${weeks} ${weeks === 1 ? 'săptămână' : 'săptămâni'}`

  const months = Math.floor(days / 30)
  if (months < 12) return `Acum ${months} ${months === 1 ? 'lună' : 'luni'}`

  const years = Math.floor(days / 365)
  return `Acum ${years} ${years === 1 ? 'an' : 'ani'}`
}
