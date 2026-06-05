import { getRequestConfig } from 'next-intl/server'
import { routing } from './src/i18n/routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || routing.defaultLocale

  return {
    locale,
    messages: (await import(`./src/i18n/locales/${locale}.json`)).default,
  }
})
