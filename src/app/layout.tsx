import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-white dark:bg-gray-900 transition-colors"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
