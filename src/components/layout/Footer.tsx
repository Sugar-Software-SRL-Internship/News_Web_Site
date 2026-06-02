'use client'

import { ThemeToggle } from '@/components/ThemeToggle'
import { Logo } from '@/components/navigation/Logo'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

export function Footer() {
  const locale = useLocale()
  const tNav = useTranslations('navigation')
  const tFooter = useTranslations('footer')

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="h-px bg-gray-900 dark:bg-white mb-2 mt-13 w-full" />
      {/*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> */}
      <div className="w-[105px] h-[30px]">
        <Logo />
      </div>
      <div className="flex flex-wrap gap-4 text-sm dark:text-gray-100 mt-[29px]">
        <a href={`/${locale}/home`} className="hover:underline">
          {tNav('home')}
        </a>
        <a href={`/${locale}/news`} className="hover:underline">
          {tNav('news')}
        </a>
        <a href={`/${locale}/sport`} className="hover:underline">
          {tNav('sport')}
        </a>
        <a href={`/${locale}/business`} className="hover:underline">
          {tNav('business')}
        </a>
        <a href={`/${locale}/technology`} className="hover:underline">
          {tNav('technology')}
        </a>
        <a href={`/${locale}/health`} className="hover:underline">
          {tNav('health')}
        </a>
        <a href={`/${locale}/culture`} className="hover:underline">
          {tNav('culture')}
        </a>
        <a href={`/${locale}/arts`} className="hover:underline">
          {tNav('arts')}
        </a>
        <a href={`/${locale}/travel`} className="hover:underline">
          {tNav('travel')}
        </a>
        <a href={`/${locale}/earth`} className="hover:underline">
          {tNav('earth')}
        </a>
        <a href={`/${locale}/audio`} className="hover:underline">
          {tNav('audio')}
        </a>
        <a href={`/${locale}/video`} className="hover:underline">
          {tNav('video')}
        </a>
        <a href={`/${locale}/live`} className="hover:underline">
          {tNav('live')}
        </a>
        <a href={`/${locale}/home`} className="hover:underline">
          {tNav('weather')}
        </a>
        <a href={`/${locale}/home`} className="hover:underline">
          {tNav('shop')}
        </a>
        <a href={`/${locale}/home`} className="hover:underline">
          {tNav('britbox')}
        </a>
      </div>
      <div className="mt-[21px] flex flex-row gap-4">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      <div className="flex-col flex-flow items-center justify-between text-base mr-10 my-4">
        {/* <div className="flex-row mh-4 pt-4"> */}
        <div className="h-px bg-gray-200 dark:bg-gray-700 mb-4 w-full" />
        <div className="flex flex-row">
          <div className="text-base font-medium mr-10">
            <p>{tFooter('followUs')}</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://x.com/Jurnal_TV"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/jurnaltv.md/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] transition-colors flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jurnaltv.md/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] transition-colors flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@jurnaltv.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
              </svg>
            </a>
            <a
              href="https://md.linkedin.com/company/jurnaltv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/user/JurnalTV"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF0000] transition-colors flex items-center justify-center"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-xs dark:text-gray-400 mt-4">
        <a href="#" className="hover:underline">
          {tFooter('terms')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('subscriptionTerms')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('about')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('privacy')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('cookies')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('accessibility')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('contact')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('advertise')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('doNotShare')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('help')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('contentIndex')}
        </a>
        <a href="#" className="hover:underline">
          {tFooter('setSource')}
        </a>
      </div>
      <div className="mt-4">
        <p className="text-xs dark:text-gray-500">
          {tFooter('copyright')}
          <a href="#" className="font-bold">
            {tFooter('readmore')}
          </a>
        </p>
      </div>
      {/* </div> */}
      {/*</div>*/}
    </footer>
  )
}
