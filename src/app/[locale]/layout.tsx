import { Geist } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Header } from '@/components/navigation/Header'
import { Footer } from '@/components/layout/Footer'
import '../globals.css'

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
      <div lang={locale} className={geist.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
