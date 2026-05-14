export const navItems = [
  {
    label: 'Home',
    href: '/home',
    submenu: null,
  },
  {
    label: 'News',
    href: '/news',
    submenu: {
      featured: 'News',
      links: [
        { label: 'US & Canada', href: '/us-canada' },
        { label: 'UK', href: '/uk' },
        { label: 'Africa', href: '/africa' },
        { label: 'Asia', href: '/asia' },
        { label: 'Australia', href: '/australia' },
        { label: 'Europe', href: '/europe' },
        { label: 'Latin America', href: '/latin-america' },
        { label: 'Middle East', href: '/middle-east' },
        { label: 'In Pictures', href: '/in-pictures' },
        { label: 'BBC InDepth', href: '/indepth' },
        { label: 'BBC Verify', href: '/verify' },
      ],
    },
  },
  {
    label: 'Sport',
    href: '/sport',
    submenu: {
      featured: 'Home',
      links: [
        { label: 'Football', href: '/football' },
        { label: 'Cricket', href: '/cricket' },
        { label: 'Formula 1', href: '/formula1' },
        { label: 'Rugby U', href: '/rugby' },
        { label: 'Tennis', href: '/tennis' },
        { label: 'Golf', href: '/golf' },
        { label: 'Cycling', href: '/cycling' },
        { label: 'Athletics', href: '/athletics' },
      ],
    },
  },
  {
    label: 'Business',
    href: '/business',
    submenu: {
      featured: 'Business',
      links: [
        { label: 'World of Business', href: '/world' },
        { label: 'Technology of Business', href: '/technology' },
        { label: 'NYSE Opening Bell', href: '/nyse' },
      ],
    },
  },
  {
    label: 'Technology',
    href: '/technology',
    submenu: {
      featured: 'Technology',
      links: [
        {
          label: 'Artificial Intelligence',
          href: '/artificial-intelligence',
        },
        {
          label: 'Intelligence Revolution',
          href: '/intelligence-revolution',
        },
        { label: 'AI v the Mind', href: '/ai-mind' },
      ],
    },
  },
  {
    label: 'Health',
    href: '/health',
    submenu: null,
  },
  {
    label: 'Culture',
    href: '/culture',
    submenu: {
      featured: 'Culture',
      links: [
        { label: 'Film & TV', href: '/films-tv' },
        { label: 'Music', href: '/music' },
        { label: 'Art & Design', href: '/art-design' },
        { label: 'Style', href: '/style' },
        { label: 'Books', href: '/books' },
        { label: 'Entertainment News', href: '/entertainment' },
      ],
    },
  },
  {
    label: 'Arts',
    href: '/arts',
    submenu: {
      featured: 'Arts',
      links: [{ label: 'Arts in Motion', href: '/arts-in-motion' }],
    },
  },
  {
    label: 'Travel',
    href: '/travel',
    submenu: {
      featured: 'Travel',
      links: [
        { label: 'Destinations', href: '/destinations' },
        { label: "World's Table", href: '/worlds-table' },
        { label: 'Culture & Experiences', href: '/culture' },
        { label: 'Adventures', href: '/adventures' },
        { label: 'The SpeciaList', href: '/specialist' },
      ],
    },
  },
  {
    label: 'Earth',
    href: '/earth',
    submenu: {
      featured: 'Earth',
      links: [
        { label: 'Science', href: '/science' },
        { label: 'Natural Wonders', href: '/natural-wonders' },
        { label: 'Climate Solutions', href: '/climate' },
        { label: 'Sustainable Business', href: '/sustainable' },
        { label: 'Green Living', href: '/green-living' },
      ],
    },
  },
  {
    label: 'Audio',
    href: '/audio',
    submenu: {
      featured: 'Audio',
      links: [
        { label: 'Podcast Categories', href: '/podcast-categories' },
        { label: 'Radio', href: '/radio' },
        { label: 'Audio FAQs', href: '/faqs' },
      ],
    },
  },
  {
    label: 'Video',
    href: '/video',
    submenu: {
      featured: 'Video',
      links: [
        { label: 'BBC Maestro', href: '/maestro' },
        { label: 'Discover the World', href: '/discover' },
      ],
    },
  },
  {
    label: 'Live',
    href: '/live',
    submenu: {
      featured: 'Live',
      links: [
        { label: 'Live News', href: '/news' },
        { label: 'Live Sport', href: '/sport' },
      ],
    },
  },
]
