import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News website',
  description: 'Site de știri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
