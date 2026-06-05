import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin('./i18n.ts')

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https' as const,
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https' as const,
        hostname: 'www.youtube.com',
        pathname: '/**',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
