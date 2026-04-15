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
      featured: 'US & Canada',
      links: [
        { label: 'UK', href: '/news/uk' },
        { label: 'Africa', href: '/news/africa' },
        { label: 'Asia', href: '/news/asia' },
        { label: 'Australia', href: '/news/australia' },
        { label: 'Europe', href: '/news/europe' },
        { label: 'Latin America', href: '/news/latin-america' },
        { label: 'Middle East', href: '/news/middle-east' },
        { label: 'In Pictures', href: '/news/in-pictures' },
        { label: 'BBC InDepth', href: '/news/indepth' },
        { label: 'BBC Verify', href: '/news/verify' },
      ],
    },
  },
  {
    label: 'Sport',
    href: '/sport',
    submenu: {
      featured: 'Home',
      links: [
        { label: 'Football', href: '/sport/football' },
        { label: 'Cricket', href: '/sport/cricket' },
        { label: 'Formula 1', href: '/sport/formula1' },
        { label: 'Rugby U', href: '/sport/rugby' },
        { label: 'Tennis', href: '/sport/tennis' },
        { label: 'Golf', href: '/sport/golf' },
        { label: 'Cycling', href: '/sport/cycling' },
        { label: 'Athletics', href: '/sport/athletics' },
      ],
    },
  },
  {
    label: 'Business',
    href: '/business',
    submenu: {
      featured: 'World of Business',
      links: [
        { label: 'Technology of Business', href: '/business/technology' },
        { label: 'NYSE Opening Bell', href: '/business/nyse' },
      ],
    },
  },
  {
    label: 'Technology',
    href: '/technology',
    submenu: {
      featured: 'Artificial Intelligence',
      links: [
        {
          label: 'Intelligence Revolution',
          href: '/technology/intelligence-revolution',
        },
        { label: 'AI v the Mind', href: '/technology/ai-mind' },
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
      featured: 'Film & TV',
      links: [
        { label: 'Music', href: '/culture/music' },
        { label: 'Art & Design', href: '/culture/art-design' },
        { label: 'Style', href: '/culture/style' },
        { label: 'Books', href: '/culture/books' },
        { label: 'Entertainment News', href: '/culture/entertainment' },
      ],
    },
  },
  {
    label: 'Arts',
    href: '/arts',
    submenu: {
      featured: 'Arts in Motion',
      links: [],
    },
  },
  {
    label: 'Travel',
    href: '/travel',
    submenu: {
      featured: 'Destinations',
      links: [
        { label: "World's Table", href: '/travel/worlds-table' },
        { label: 'Culture & Experiences', href: '/travel/culture' },
        { label: 'Adventures', href: '/travel/adventures' },
        { label: 'The SpeciaList', href: '/travel/specialist' },
      ],
    },
  },
  {
    label: 'Earth',
    href: '/earth',
    submenu: {
      featured: 'Science',
      links: [
        { label: 'Natural Wonders', href: '/earth/natural-wonders' },
        { label: 'Climate Solutions', href: '/earth/climate' },
        { label: 'Sustainable Business', href: '/earth/sustainable' },
        { label: 'Green Living', href: '/earth/green-living' },
      ],
    },
  },
  {
    label: 'Audio',
    href: '/audio',
    submenu: {
      featured: 'Podcast Categories',
      links: [
        { label: 'Radio', href: '/audio/radio' },
        { label: 'Audio FAQs', href: '/audio/faqs' },
      ],
    },
  },
  {
    label: 'Video',
    href: '/video',
    submenu: {
      featured: 'BBC Maestro',
      links: [{ label: 'Discover the World', href: '/video/discover' }],
    },
  },
  {
    label: 'Live',
    href: '/live',
    submenu: {
      featured: 'Live News',
      links: [{ label: 'Live Sport', href: '/live/sport' }],
    },
  },
]
