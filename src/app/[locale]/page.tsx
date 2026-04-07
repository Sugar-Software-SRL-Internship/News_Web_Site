// import { useTranslations } from 'next-intl'

// export default function HomePage() {
//   const t = useTranslations()

//   return (
//     <main style={{ padding: '2rem' }}>
//       <p>DEBUG LOCALE: {locale}</p>
//       <h1>{t('home.title')}</h1>
//       <p>{t('home.breaking')}</p>
//       <p>{t('common.readMore')}</p>
//     </main>
//   )
// }

import { useTranslations, useLocale } from 'next-intl'

export default function HomePage() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('home.title')}</h1>
      <p>{t('home.breaking')}</p>
      <p>{t('common.readMore')}</p>
    </main>
  )
}
