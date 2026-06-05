// import createMiddleware from 'next-intl/middleware'

// const intlMiddleware = createMiddleware({
//   locales: ['ro', 'en'],
//   defaultLocale: 'ro',
// })

// export function proxy(request: any) {
//   return intlMiddleware(request)
// }

// export const config = {
//   matcher: ['/', '/(ro|en)/:path*'],
// }

import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
