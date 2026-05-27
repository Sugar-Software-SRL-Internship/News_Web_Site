export interface NavLink {
  label: string
  href: string
  key?: string
}

export interface NavItem {
  key: string
  label: string
  href: string
  submenu: {
    featured: string
    links: NavLink[]
  } | null
}

export const navItems: NavItem[] = [
  {
    key: 'home',
    label: 'Home',
    href: '/home',
    submenu: null,
  },
  {
    key: 'news',
    label: 'News',
    href: '/news',
    submenu: {
      featured: 'News',
      links: [
        { label: 'US & Canada', href: '/us-canada', key: 'usCanada' },
        { label: 'UK', href: '/uk', key: 'uk' },
        { label: 'Africa', href: '/africa', key: 'africa' },
        { label: 'Asia', href: '/asia', key: 'asia' },
        { label: 'Australia', href: '/australia', key: 'australia' },
        { label: 'Europe', href: '/europe', key: 'europe' },
        { label: 'Latin America', href: '/latin-america', key: 'latinAmerica' },
        { label: 'Middle East', href: '/middle-east', key: 'middleEast' },
        { label: 'In Pictures', href: '/in-pictures', key: 'inPictures' },
        { label: 'Jurnal TV InDepth', href: '/indepth', key: 'inDepth' },
        { label: 'Jurnal TV Verify', href: '/verify', key: 'verify' },
      ],
    },
  },
  {
    key: 'sport',
    label: 'Sport',
    href: '/sport',
    submenu: {
      featured: 'Home',
      links: [
        { label: 'Football', href: '/football', key: 'football' },
        { label: 'Cricket', href: '/cricket', key: 'cricket' },
        { label: 'Formula 1', href: '/formula1', key: 'formula1' },
        { label: 'Rugby U', href: '/rugby', key: 'rugby' },
        { label: 'Tennis', href: '/tennis', key: 'tennis' },
        { label: 'Golf', href: '/golf', key: 'golf' },
        { label: 'Cycling', href: '/cycling', key: 'cycling' },
        { label: 'Athletics', href: '/athletics', key: 'athletics' },
      ],
    },
  },
  {
    key: 'business',
    label: 'Business',
    href: '/business',
    submenu: {
      featured: 'Business',
      links: [
        { label: 'World of Business', href: '/world', key: 'world' },
        {
          label: 'Technology of Business',
          href: '/technology',
          key: 'technology',
        },
        { label: 'NYSE Opening Bell', href: '/nyse', key: 'nyse' },
      ],
    },
  },
  {
    key: 'technology',
    label: 'Technology',
    href: '/technology',
    submenu: {
      featured: 'Technology',
      links: [
        {
          label: 'Artificial Intelligence',
          href: '/artificial-intelligence',
          key: 'ai',
        },
        {
          label: 'Intelligence Revolution',
          href: '/intelligence-revolution',
          key: 'ir',
        },
        { label: 'AI v the Mind', href: '/ai-mind', key: 'aimind' },
      ],
    },
  },
  {
    key: 'health',
    label: 'Health',
    href: '/health',
    submenu: null,
  },
  {
    key: 'culture',
    label: 'Culture',
    href: '/culture',
    submenu: {
      featured: 'Culture',
      links: [
        { label: 'Film & TV', href: '/films-tv', key: 'film' },
        { label: 'Music', href: '/music', key: 'music' },
        { label: 'Art & Design', href: '/art-design', key: 'art' },
        { label: 'Style', href: '/style', key: 'style' },
        { label: 'Books', href: '/books', key: 'books' },
        {
          label: 'Entertainment News',
          href: '/entertainment',
          key: 'entertainment',
        },
      ],
    },
  },
  {
    key: 'arts',
    label: 'Arts',
    href: '/arts',
    submenu: {
      featured: 'Arts',
      links: [
        { label: 'Arts in Motion', href: '/arts-in-motion', key: 'arts' },
      ],
    },
  },
  {
    key: 'travel',
    label: 'Travel',
    href: '/travel',
    submenu: {
      featured: 'Travel',
      links: [
        { label: 'Destinations', href: '/destinations', key: 'destination' },
        { label: "World's Table", href: '/worlds-table', key: 'table' },
        { label: 'Culture & Experiences', href: '/culture', key: 'experience' },
        { label: 'Adventures', href: '/adventures', key: 'adventure' },
        { label: 'The SpeciaList', href: '/specialist', key: 'specialist' },
      ],
    },
  },
  {
    key: 'earth',
    label: 'Earth',
    href: '/earth',
    submenu: {
      featured: 'Earth',
      links: [
        { label: 'Science', href: '/science', key: 'science' },
        { label: 'Natural Wonders', href: '/natural-wonders', key: 'natural' },
        { label: 'Climate Solutions', href: '/climate', key: 'climate' },
        {
          label: 'Sustainable Business',
          href: '/sustainable',
          key: 'sustainable',
        },
        { label: 'Green Living', href: '/green-living', key: 'green' },
      ],
    },
  },
  {
    key: 'audio',
    label: 'Audio',
    href: '/audio',
    submenu: {
      featured: 'Audio',
      links: [
        {
          label: 'Podcast Categories',
          href: '/podcast-categories',
          key: 'podcast',
        },
        { label: 'Radio', href: '/radio', key: 'radio' },
        { label: 'Audio FAQs', href: '/faqs', key: 'faq' },
      ],
    },
  },
  {
    key: 'video',
    label: 'Video',
    href: '/video',
    submenu: {
      featured: 'Video',
      links: [
        { label: 'Jurnal TV Maestro', href: '/maestro', key: 'maestro' },
        { label: 'Discover the World', href: '/discover', key: 'discover' },
      ],
    },
  },
  {
    key: 'live',
    label: 'Live',
    href: '/live',
    submenu: {
      featured: 'Live',
      links: [
        { label: 'Live News', href: '/news', key: 'livenews' },
        { label: 'Live Sport', href: '/sport', key: 'livesport' },
      ],
    },
  },
]
