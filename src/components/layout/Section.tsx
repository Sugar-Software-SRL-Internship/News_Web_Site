interface SectionProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function Section({ children, title, className = '' }: SectionProps) {
  return (
    <section className={`py-8 ${className}`}>
      {title && (
        <h2 className="text-xl font-extrabold text-[var(--foreground)] text-[15px] uppercase mb-6">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
