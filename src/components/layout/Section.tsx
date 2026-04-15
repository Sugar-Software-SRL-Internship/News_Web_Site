interface SectionProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function Section({ children, title, className = '' }: SectionProps) {
  return (
    <section className={`py-8 ${className}`}>
      {title && (
        <h2 className="text-xl font-bold text-[var(--foreground)] border-l-4 border-[#bb1919] pl-3 mb-6">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
