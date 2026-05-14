// import { Logo } from './Logo'
// import { NavBar } from './NavBar'
// import { AuthButtons } from './AuthButtons'
// // import { HamburgerMenu } from './HamburgerMenu'

// export function Header() {
//   return (
//     <header className="sticky top-0 z-100 bg-white dark:bg-gray-900 shadow-sm">
//       <div className="border-b border-gray-200 dark:border-gray-700" />
//       <div className="max-full mx-auto px-4 sm:px-3 lg:px-6 py-3 flex items-center justify-between h-20">
//         {/* <div className="px-4 py-3 flex items-center justify-between h-14"> */}
//         <div>{/* <HamburgerMenu /> */}</div>

//         <div className="absolute left-1/2 -translate-x-1/2">
//           <Logo />
//         </div>

//         <div className="flex items-center gap-2">
//           <AuthButtons />
//         </div>
//         {/* </div> */}
//         {/* </div> */}
//       </div>

//       <NavBar />
//     </header>
//   )
// }

'use client'
import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { AuthButtons } from './AuthButtons'
import { useScroll } from '@/app/lib/hooks/useScroll'

export function Header() {
  const { scrollY, scrollDirection } = useScroll()

  const isScrolled = scrollY > 50
  const isAtTop = scrollY === 0
  const hideNav = isScrolled && scrollDirection === 'down'

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-all duration-300">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14' : 'h-20'}`}
          >
            <div className="flex items-center" />

            {/* Logo se miscroseaza si se mareste la scroll */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Logo
                width={isScrolled && !isAtTop ? 105 : 140}
                height={isScrolled && !isAtTop ? 30 : 40}
              />
            </div>

            <div className="flex items-center gap-2">
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>

      {/* NavBar se ascunde la scroll down */}
      <div
        className={`transition-all duration-300 overflow-hidden ${hideNav ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'}`}
      >
        <NavBar />
      </div>
    </header>
  )
}
