import { Geist } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import '../globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import { ThemeToggle } from '../components/ThemeToggle'

const geist = Geist({
  subsets: ['latin'],
})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages({ locale })

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <div lang={locale} className={geist.className}>
          <ThemeToggle />
          {children}
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
