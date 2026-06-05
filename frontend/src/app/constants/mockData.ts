export interface Article {
  id: string
  slug: string
  title: string
  description: string
  imageUrl: string
  source: string
  publishedAt: Date // de inlocuit cu -> publishedAt: new Date(article.created_at) data din backend
  isBreaking?: boolean
  isLive?: boolean
  isVerify?: boolean
  author?: string
  duration?: string
  category: string
}

const BASE_IMAGE = 'https://picsum.photos/seed/news/800/450'
const BASE_IMAGE_SQ = 'https://picsum.photos/seed/audio/200/200'
const BASE_SOURCE = 'BBC News'

const makeSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 60)

const makeArticle = (
  id: string,
  title: string,
  description = '',
  imageUrl = '',
  category = 'News',
  extras = {}
): Article => ({
  id,
  slug: makeSlug(title), // este generat automat din title
  title,
  description,
  imageUrl,
  source: BASE_SOURCE,
  publishedAt: new Date(Date.now() - 1000 * 60 * 60 * Number(id)),
  category,
  ...extras,
})

export const heroArticles: Article[] = [
  makeArticle(
    '1',
    'World leaders gather for emergency climate summit',
    'Representatives from over 190 countries meet to discuss urgent climate action.',
    BASE_IMAGE,
    'World'
  ),
  makeArticle(
    '2',
    'Tech giants face new regulations across Europe',
    'The European Union announces sweeping new rules targeting major technology companies.',
    BASE_IMAGE,
    'Technology'
  ),
  makeArticle(
    '3',
    'Historic peace agreement signed in the Middle East',
    'A landmark agreement brings hope for lasting peace.',
    BASE_IMAGE,
    'World'
  ),
]

export const sideArticles: Article[] = [
  makeArticle(
    '4',
    'Markets fall as inflation data disappoints investors',
    'Scientists have uncovered a vast network of rivers and lakes under the ice.',
    '',
    'Business'
  ),
  makeArticle(
    '5',
    'Scientists discover new species in the Amazon rainforest',
    'Scientists have uncovered a vast network of rivers and lakes under the ice.',
    '',
    'Science'
  ),
  makeArticle(
    '6',
    'Political crisis deepens as parliament votes against budget',
    'Scientists have uncovered a vast network of rivers and lakes under the ice.',
    '',
    'Politics'
  ),
  makeArticle(
    '7',
    'New study links social media to rising anxiety in teenagers',
    'Scientists have uncovered a vast network of rivers and lakes under the ice.',
    '',
    'Health'
  ),
]

export const onlyBBCArticles: Article[] = [
  makeArticle(
    '8',
    'The hidden world beneath Antarctica revealed by satellite',
    'Scientists have uncovered a vast network of rivers and lakes under the ice.',
    BASE_IMAGE,
    'Science'
  ),
  makeArticle(
    '9',
    'How one small town became the center of the AI revolution',
    'A remote community is transforming as tech companies move in.',
    BASE_IMAGE,
    'Technology'
  ),
]

export const audioArticles: Article[] = [
  makeArticle('10', 'The Future of Democracy', '', BASE_IMAGE_SQ, 'Politics', {
    author: 'John Smith',
    duration: '45 min',
  }),
  makeArticle('11', 'Climate Crisis Explained', '', BASE_IMAGE_SQ, 'Science', {
    author: 'Sarah Johnson',
    duration: '32 min',
  }),
  makeArticle('12', 'The Economy After COVID', '', BASE_IMAGE_SQ, 'Business', {
    author: 'Mike Williams',
    duration: '28 min',
  }),
  makeArticle('13', 'Inside the Tech Giants', '', BASE_IMAGE_SQ, 'Technology', {
    author: 'Emma Davis',
    duration: '55 min',
  }),
  makeArticle('14', 'Health Myths Debunked', '', BASE_IMAGE_SQ, 'Health', {
    author: 'Dr. Chen',
    duration: '41 min',
  }),
  makeArticle('15', 'The Art of Leadership', '', BASE_IMAGE_SQ, 'Culture', {
    author: 'Lisa Brown',
    duration: '38 min',
  }),
  makeArticle(
    '16',
    'War and Peace in Modern Times',
    '',
    BASE_IMAGE_SQ,
    'World',
    { author: 'James Wilson', duration: '62 min' }
  ),
]

export const moreNewsArticles: Article[] = [
  makeArticle(
    '17',
    'Floods devastate communities across southern Europe',
    'Thousands evacuated as rivers burst their banks.',
    BASE_IMAGE,
    'World'
  ),
  makeArticle(
    '18',
    'Global food prices rise amid supply chain disruptions',
    'Cost of basic foods increased across developing nations.',
    BASE_IMAGE,
    'Business'
  ),
  makeArticle(
    '19',
    'Space agency announces mission to moons of Jupiter',
    'Scientists believe the moons may harbor conditions for life.',
    BASE_IMAGE,
    'Science'
  ),
  makeArticle(
    '20',
    'Election results spark protests in capital city',
    '',
    '',
    'Politics'
  ),
  makeArticle(
    '21',
    'New cancer treatment shows promising results in trials',
    '',
    '',
    'Health'
  ),
  makeArticle('22', 'Major earthquake strikes coastal region', '', '', 'World'),
  makeArticle(
    '23',
    'Refugee crisis grows as conflict enters third year',
    'Aid organizations warn of deteriorating conditions.',
    BASE_IMAGE,
    'World'
  ),
  makeArticle(
    '24',
    'Central bank raises interest rates for fifth time',
    'Scientists believe the moons may harbor conditions for life.',
    '',
    'Business'
  ),
  makeArticle(
    '25',
    'Plastic pollution impact on deep sea ecosystems',
    'Scientists believe the moons may harbor conditions for life.',
    '',
    'Science'
  ),
]

export const breakingNews: Article = makeArticle(
  'breaking-1',
  'Major earthquake strikes coastal region, tsunami warning issued for several countries',
  'Authorities urge residents to move to higher ground immediately.',
  '',
  'World',
  { isBreaking: true }
)

export const newsHeroArticles: Article[] = [
  makeArticle(
    'news-1',
    'Trump says ceasefire extended by three weeks',
    'Envoys from the two countries met in Washington.',
    BASE_IMAGE,
    'US & Canada'
  ),
  makeArticle(
    'news-2',
    'Kremlin tightening grip on internet fuels discontent',
    'Officials say restrictions are for public safety.',
    BASE_IMAGE,
    'Europe'
  ),
]

export const newsRowArticles: Article[] = [
  makeArticle(
    'row-1',
    'Epstein housed abuse victims in London flats',
    'The revelations intensify concerns about police decisions.',
    BASE_IMAGE,
    'UK'
  ),
  makeArticle(
    'row-2',
    'US soldier charged after winning $400,000 on Polymarket',
    'Allegedly made trades on the basis of classified information.',
    BASE_IMAGE,
    'US & Canada'
  ),
  makeArticle(
    'row-3',
    'Ringo Starr: I made all my mistakes on stage',
    'Beatles star reveals all about his new country album.',
    BASE_IMAGE,
    'Culture'
  ),
  makeArticle(
    'row-4',
    'Kenyan leader sparks uproar after mocking Nigerians',
    'William Ruto says Kenyans speak some of the best English.',
    BASE_IMAGE,
    'Africa'
  ),
  makeArticle(
    'row-5',
    'South Korea police arrest man for posting AI wolf photo',
    'The image had prompted authorities to move their search.',
    BASE_IMAGE,
    'Asia'
  ),
]

export const textOnlyArticles: Article[] = [
  makeArticle(
    'txt-1',
    'Trump says he speaks for the UK more than Prince Harry',
    '',
    '',
    'US & Canada'
  ),
  makeArticle(
    'txt-2',
    'Woman trapped for three hours after outback toilet collapses',
    '',
    '',
    'Australia'
  ),
  makeArticle(
    'txt-3',
    "Briton in Netflix's Con-Mum faces fresh charges in Singapore",
    '',
    '',
    'Asia'
  ),
  makeArticle(
    'txt-4',
    "Aboriginal children's book pulled over Bondi attack comments",
    '',
    '',
    'Australia'
  ),
  makeArticle(
    'txt-5',
    "Singer had 'significant amount' of child abuse images, say prosecutors",
    '',
    '',
    'UK'
  ),
]

export const thematicSections = [
  {
    id: 'iran-war',
    title: 'Iran War',
    articles: [
      makeArticle(
        'iran-1',
        'Couple discovers Lebanon home destroyed by Israel',
        'Joe Bliss contacted BBC Verify following reports.',
        BASE_IMAGE,
        'Middle East',
        { isVerify: true }
      ),
      makeArticle(
        'iran-2',
        'US boards ship carrying Iran oil as Trump threatens',
        'Central Command said it intercepted 33 vessels.',
        BASE_IMAGE,
        'Middle East'
      ),
      makeArticle(
        'iran-3',
        'Trump says ceasefire to be extended by three weeks',
        'Envoys met in Washington as the truce was due to expire.',
        BASE_IMAGE,
        'Middle East'
      ),
      makeArticle(
        'iran-4',
        'Masked Iranian forces appear to seize ships in video',
        'Analysis indicates parts were filmed hours after seizure.',
        BASE_IMAGE,
        'Middle East',
        { isVerify: true }
      ),
    ],
  },
]

export const mostWatchedArticles: Article[] = [
  makeArticle(
    'w-1',
    'My five-minute phone call with President Trump',
    '',
    '',
    'US & Canada'
  ),
  makeArticle(
    'w-2',
    'Watch: Girl describes finding new Mexican ocelot',
    '',
    '',
    'Science'
  ),
  makeArticle(
    'w-3',
    'Hundreds of wildfires burn across Florida and Georgia',
    '',
    '',
    'US & Canada'
  ),
  makeArticle(
    'w-4',
    'Giant ice chunks move into Michigan homes',
    '',
    '',
    'US & Canada'
  ),
  makeArticle(
    'w-5',
    'Ringo Starr talks Beatles and country music',
    '',
    '',
    'Culture'
  ),
]

export const mostReadArticles: Article[] = [
  makeArticle(
    'r-1',
    "Kremlin's tightening grip on internet fuels discontent",
    '',
    '',
    'Europe'
  ),
  makeArticle(
    'r-2',
    'Kenyan leader sparks uproar after mocking Nigerians',
    '',
    '',
    'Africa'
  ),
  makeArticle(
    'r-3',
    'US soldier charged after winning $400,000 on Polymarket',
    '',
    '',
    'US & Canada'
  ),
  makeArticle(
    'r-4',
    'Trump says he speaks for the UK more than Prince Harry',
    '',
    '',
    'US & Canada'
  ),
  makeArticle(
    'r-5',
    'Epstein housed abuse victims in London flats',
    '',
    '',
    'UK'
  ),
  makeArticle(
    'r-6',
    'Woman trapped after outback toilet collapses',
    '',
    '',
    'Australia'
  ),
  makeArticle(
    'r-7',
    "Indian leader condemns video Trump called a 'hellhole'",
    '',
    '',
    'US & Canada'
  ),
  makeArticle(
    'r-8',
    'Scientists grapple with impact of wild medication',
    '',
    '',
    'US & Canada'
  ),
  makeArticle(
    'r-9',
    "We paid our builder 'cash' and then had us arrested",
    '',
    '',
    'UK'
  ),
  makeArticle(
    'r-10',
    'Weekly quiz: what did Madonna lose at Coachella?',
    '',
    '',
    'Culture'
  ),
]

export const sportNewsArticles: Article[] = [
  makeArticle(
    'sp-1',
    'Raiders take Mendoza with first pick of NFL Draft',
    'Mendoza just played his first collegiate season for Alabama.',
    BASE_IMAGE,
    'American Football'
  ),
  makeArticle(
    'sp-2',
    'Premier League: Slot speaks on Man City & Howe latest',
    'All the latest updates and team news.',
    BASE_IMAGE,
    'Premier League',
    { isLive: true }
  ),
  makeArticle(
    'sp-3',
    'US rights groups urge caution for World Cup visitors',
    'More than 100 organizations issue a warning letter.',
    BASE_IMAGE,
    'Football'
  ),
  makeArticle(
    'sp-4',
    'Who will win title? The big prediction special',
    'Will it be Manchester City or Arsenal?',
    BASE_IMAGE,
    'Premier League'
  ),
  makeArticle(
    'sp-5',
    "Korda takes Chevron lead as England's Rhodes impresses",
    'Nelly Korda takes the lead at the Chevron Championship.',
    BASE_IMAGE,
    'Golf'
  ),
  makeArticle(
    'sp-6',
    'Will Zheng v Ding draw biggest TV audience in snooker?',
    'The World Snooker Championship final features two Chinese players.',
    BASE_IMAGE,
    'Snooker'
  ),
]

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'image' | 'quote'
  text?: string
  url?: string
  caption?: string
  author?: string
}

export interface ArticleDetail extends Article {
  slug: string
  content: ContentBlock[]
  tags: string[]
  relatedArticles: Article[]
}

export const articleDetail: ArticleDetail = {
  id: '1',
  slug: 'why-ai-companies-want-you-to-be-afraid',
  title: 'Why AI companies want you to be afraid of them',
  description:
    'Stop me if you heard this before: a tech company says its built a new AI thats so powerful its scary.',
  imageUrl: BASE_IMAGE,
  source: 'BBC News',
  publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
  category: 'Technology',
  author: 'Thomas Germain',
  tags: ['AI', 'Technology', 'Anthropic', 'OpenAI'],
  content: [
    {
      type: 'paragraph',
      text: 'Stop me if you heard this one before: a tech company says its built a new AI thats so powerful its scary. Apparently, its too dangerous to release into the world — the consequences would be catastrophic.',
    },
    {
      type: 'paragraph',
      text: 'Thats exactly what AI company Anthropic is telling us about its latest model, Claude Mythux. The company says Mythux ability to find cybersecurity bugs far surpasses human experts.',
    },
    {
      type: 'heading',
      text: 'Somebody stop me',
    },
    {
      type: 'paragraph',
      text: 'An Anthropic spokesperson told me the company has been clear about these issues. They shared blog posts from other organizations supporting Mythux cyber capabilities, but said nothing to address the points in this article.',
    },
    {
      type: 'image',
      url: 'https://picsum.photos/seed/article1/800/450',
      caption: 'A person using a laptop with an AI interface. Getty Images',
    },
    {
      type: 'quote',
      text: 'If you want to understand how an organization, particularly a corporation, is going to behave, look at what its incentives are.',
      author: 'AI researcher',
    },
    {
      type: 'heading',
      text: 'Why so serious?',
    },
    {
      type: 'paragraph',
      text: 'Preventing the end of the world is why OpenAI and Anthropic say they exist in the first place. OpenAI was founded as a non-profit, promising to build AI in a way that was safer and better than the irresponsible tech giants like Google and Meta got there first.',
    },
    {
      type: 'paragraph',
      text: 'Then Anthropic was founded by OpenAI employees who said OpenAI was no longer responsible enough to worry about safety. Now both organizations are working to become publicly traded companies and sell shares on the stock market.',
    },
  ],
  relatedArticles: [
    makeArticle(
      'rel-1',
      'Meta shares slide as plan to spend billions on AI spooks investors',
      'Other tech giants, including Microsoft, Amazon also reported quarterly earnings on Wednesday.',
      BASE_IMAGE,
      'Technology'
    ),
    makeArticle(
      'rel-2',
      'Women can wait years for an endometriosis diagnosis. New tech could change that',
      'A new non-invasive test could spot signs of endometriosis sooner.',
      BASE_IMAGE,
      'Health'
    ),
    makeArticle(
      'rel-3',
      'Musk accuses OpenAI lawyer of trying to trick him in combative testimony',
      'Elon Musk was cross-examined on the third day of his lawsuit.',
      BASE_IMAGE,
      'Technology'
    ),
    makeArticle(
      'rel-4',
      'Why friendly AI chatbots might be less trustworthy',
      'Researchers found adapting AI systems to be more warm and friendly in tone.',
      BASE_IMAGE,
      'Technology'
    ),
    makeArticle(
      'rel-5',
      'Springfield: the beloved birthplace of Route 66',
      "Chicago and Santa Monica might be Route 66's more endpoints.",
      BASE_IMAGE,
      'Travel'
    ),
  ],
}

export interface VideoItem {
  id: string
  slug: string
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string // YouTube embed URL sau MP4 din backend
  duration: string
  publishedAt: Date
  category: string
  source: string
  show?: string
}

const makeVideo = (
  id: string,
  title: string,
  description = '',
  youtubeId: string,
  category = 'Video',
  extras = {}
): VideoItem => ({
  id,
  slug: makeSlug(title),
  title,
  description,
  thumbnailUrl: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
  videoUrl: `https://www.youtube.com/embed/${youtubeId}?autoplay=1`,
  // de inlocuit cu date din backend direct: videoUrl: `https://api.yoursite.com/videos/${id}.mp4`
  duration: '7:41',
  publishedAt: new Date(Date.now() - 1000 * 60 * 60 * Number(id)),
  category,
  source: 'BBC News',
  ...extras,
})

export const featuredVideo: VideoItem = makeVideo(
  '1',
  'Fans rally behind US mens national soccer team as World Cup roster revealed',
  'Fans share their enthusiasm about World Cup ticket prices and what the sport means to the US.',
  'CKV15yxAsIQ',
  'Sport',
  { show: 'New York City' }
)

export const missedVideos: VideoItem[] = [
  makeVideo(
    '2',
    'The unseen photos captured on the Royal Yacht Britannia',
    'The only photographer allowed on board reveals exclusive shots.',
    'CKV15yxAsIQ',
    'Culture',
    { source: 'BBC Select' }
  ),
  makeVideo(
    '3',
    "Inside Lapland's dramatic high-speed reindeer racing",
    'The Travel Show goes to Finland.',
    'dQw4w9WgXcQ',
    'Travel',
    { source: 'The Travel Show' }
  ),
  makeVideo(
    '4',
    'Can a fashion fix help smart glasses finally take off?',
    'Smart glasses take on a new update.',
    'dQw4w9WgXcQ',
    'Technology',
    { source: 'Tech Now' }
  ),
  makeVideo(
    '5',
    'Sameena: A rare taste of South India in Manhattan',
    'Stacy Delikat takes a closer look.',
    'dQw4w9WgXcQ',
    'Food',
    { source: 'Discover the World' }
  ),
  makeVideo(
    '6',
    'I was told I like Simon Fox',
    '',
    'dQw4w9WgXcQ',
    'Entertainment'
  ),
]

export const artsVideos: VideoItem[] = [
  makeVideo(
    '7',
    'What it really takes to make a film from scratch',
    'At the National Film and Television School, students learn to turn ideas into films.',
    'dQw4w9WgXcQ',
    'Arts'
  ),
]

export const maestroVideos: VideoItem[] = [
  makeVideo(
    '8',
    "Get a good night's sleep with Stephanie Romiszewski",
    'Join the world-leading sleep expert.',
    'dQw4w9WgXcQ',
    'Health',
    { show: 'BBC Maestro' }
  ),
  makeVideo(
    '9',
    'Launch your business with Sharon Bartlett',
    'Join the youngest judge in Dragons Den.',
    'dQw4w9WgXcQ',
    'Business',
    { show: 'BBC Maestro' }
  ),
  makeVideo(
    '10',
    'Transform your health with Professor Tim Spector',
    'Join health guru Tim Spector.',
    'dQw4w9WgXcQ',
    'Health',
    { show: 'BBC Maestro' }
  ),
  makeVideo(
    '11',
    'Master the craft of cooking with Marco Pierre White',
    'Go beyond recipes and learn the art of cooking.',
    'dQw4w9WgXcQ',
    'Food',
    { show: 'BBC Maestro' }
  ),
  makeVideo('12', 'Learn the art of photography', '', 'dQw4w9WgXcQ', 'Arts', {
    show: 'BBC Maestro',
  }),
]

export const openingBellVideo: VideoItem = makeVideo(
  '13',
  'Wall Street opens higher as concerns over Iran crisis ease',
  'Report says markets seem to be expecting some kind of a deal between the United States and Iran.',
  'dQw4w9WgXcQ',
  'Business'
)

export const scienceVideos: VideoItem[] = [
  makeVideo(
    '14',
    'How deep sea creatures survive',
    '',
    'dQw4w9WgXcQ',
    'Science'
  ),
  makeVideo(
    '15',
    'The future of renewable energy',
    '',
    'dQw4w9WgXcQ',
    'Science'
  ),
  makeVideo(
    '16',
    'Inside the worlds largest telescope',
    '',
    'dQw4w9WgXcQ',
    'Science'
  ),
  makeVideo(
    '17',
    'Climate change effects on Arctic ice',
    '',
    'dQw4w9WgXcQ',
    'Science'
  ),
]

export interface AudioItem {
  id: string
  slug: string
  title: string
  description: string
  thumbnailUrl: string
  embedUrl: string
  duration: string
  publishedAt: Date
  category: string
  source: string
  show?: string
  presenter?: string
  producer?: string
  editor?: string
  chapters?: { time: string; title: string }[]
  availableFor?: string
  episodeNumber?: number
}

const makeAudio = (
  id: string,
  title: string,
  description = '',
  embedUrl: string,
  category = 'Audio',
  extras = {}
): AudioItem => ({
  id,
  slug: makeSlug(title),
  title,
  description,
  thumbnailUrl: `https://picsum.photos/seed/audio${id}/300/300`,
  embedUrl,
  duration: '36 mins',
  publishedAt: new Date(Date.now() - 1000 * 60 * 60 * Number(id)),
  category,
  source: 'BBC Sounds',
  ...extras,
})

// Spotify embed URL format: https://open.spotify.com/embed/episode/EPISODE_ID

export const featuredAudio: AudioItem = makeAudio(
  'a1',
  'A History of the United States in 100 Objects',
  'A concise guide: How America built a hidden empire, one object at a time.',
  'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
  'History',
  {
    show: '100 Objects #2: 60-Degree Screw',
    presenter: 'Sean Farrington',
    producer: 'Jeevan Narwan',
    editor: 'Olivia Baron',
    availableFor: 'Available for a year',
    episodeNumber: 42,
    chapters: [
      { time: '03:18', title: 'Gen Z loneliness and isolation' },
      { time: '07:19', title: 'Growth compared to other dating apps' },
      { time: '09:18', title: 'Growth in the UK and the gender balance' },
      { time: '15:30', title: 'AI features on the app and authenticity' },
      { time: '22:37', title: "The younger generation's relationship with AI" },
      { time: '36:12', title: 'Age restrictions on social media usage' },
      { time: '39:30', title: 'Tinder and other Match Group apps' },
      {
        time: '42:25',
        title: 'Is "Designed to be deleted" at odds with the business model?',
      },
      { time: '46:20', title: 'The cost of living crisis' },
      {
        time: '54:46',
        title: 'Her career in tech, including roles at Spotify',
      },
    ],
  }
)

export const recommendedAudioItems: AudioItem[] = [
  makeAudio(
    'a2',
    'The battle to save Jeanne, flood-ravaged shipping',
    'A story about saving history.',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Culture',
    { show: 'BBC Sounds', duration: '28 mins' }
  ),
  makeAudio(
    'a3',
    'The protests that sparked the Tiananmen Square massacre',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'History',
    { show: 'BBC History', duration: '45 mins' }
  ),
  makeAudio(
    'a4',
    'The Black Power Mixtape: I say what I mean',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Culture',
    { show: 'BBC Culture', duration: '32 mins' }
  ),
  makeAudio(
    'a5',
    'Run for World Cup freedom: How sport changes lives',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Sport',
    { show: 'BBC Sport', duration: '41 mins' }
  ),
  makeAudio(
    'a6',
    'Hinge CEO: The Cost of Living Crunch Is Changing How We Date',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Business',
    { show: 'Business Matters', duration: '58 mins' }
  ),
  makeAudio(
    'a7',
    'Why the UK honored Marco Polo, Phan and Dark Xygas',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Culture',
    { show: 'BBC Sounds', duration: '24 mins' }
  ),
  makeAudio(
    'a8',
    'Australian politics: The new wave',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Politics',
    { show: 'BBC World', duration: '37 mins' }
  ),
]

export const globalNewsAudio: AudioItem = makeAudio(
  'a9',
  "US House votes to curb Trump's war powers",
  'In a rebuke to the president, Congress passes resolution calling for an end to Iran war.',
  'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
  'Politics',
  { show: 'Global News Podcast', duration: '36 mins' }
)

export const worldBusinessAudio: AudioItem[] = [
  makeAudio(
    'a10',
    'Venezuela: A media-savvy leader is in crisis',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Business',
    { show: 'World Business Report', duration: '24 mins' }
  ),
  makeAudio(
    'a11',
    "Lay's latest: Trump tariff will lead to massive layoffs",
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Business',
    { show: 'World Business Report', duration: '31 mins' }
  ),
  makeAudio(
    'a12',
    'The Ukraine: to refuse de-industrialize its political policy',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Business',
    { show: 'World Business Report', duration: '28 mins' }
  ),
  makeAudio(
    'a13',
    'Russian ceasefire coming: Israel refuses a two-state model attack in St. Petersburg',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Business',
    { show: 'World Business Report', duration: '45 mins' }
  ),
  makeAudio(
    'a14',
    'Who gets to regulate AI',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Technology',
    { show: 'World Business Report', duration: '22 mins' }
  ),
]

export const deeperConversations: AudioItem[] = [
  makeAudio(
    'a15',
    'Arike Ogunbowale, Soccer leader: Can we imagine a music is cooking',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Culture',
    { show: 'Deeper Conversations', duration: '52 mins' }
  ),
  makeAudio(
    'a16',
    'Charles Miner, singer: Music is cooking',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Culture',
    { show: 'Deeper Conversations', duration: '48 mins' }
  ),
  makeAudio(
    'a17',
    'Jennifer Pirlo, Analyzing chief: Financial systems child available systems',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Business',
    { show: 'Deeper Conversations', duration: '61 mins' }
  ),
  makeAudio(
    'a18',
    'Daniel Webber, Alexander President: A war on president',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Politics',
    { show: 'Deeper Conversations', duration: '44 mins' }
  ),
  makeAudio(
    'a19',
    'Katrina Mix, Sierra Leone First Lady: Speaking up',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Politics',
    { show: 'Deeper Conversations', duration: '39 mins' }
  ),
]

export const historyAudio: AudioItem[] = [
  makeAudio(
    'a20',
    'The first Irish language television channel',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'History',
    { show: 'BBC History', duration: '33 mins' }
  ),
  makeAudio(
    'a21',
    'Rewinding the Buchanan interviews',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'History',
    { show: 'BBC History', duration: '27 mins' }
  ),
  makeAudio(
    'a22',
    'Filming Titanic in Mexico',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'History',
    { show: 'BBC History', duration: '41 mins' }
  ),
  makeAudio(
    'a23',
    "Teenaged Mexico's deadly gang nightmare",
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'History',
    { show: 'BBC History', duration: '55 mins' }
  ),
]

export const sportAudio: AudioItem[] = [
  makeAudio(
    'a24',
    'Mark McCall: Kind of on me',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Sport',
    { show: 'Rugby Union Weekly', duration: '48 mins' }
  ),
  makeAudio(
    'a25',
    'Nickson says: we need for tomorrow change ahead of Saul Test',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Sport',
    { show: 'BBC Sport', duration: '35 mins' }
  ),
  makeAudio(
    'a26',
    'Rekha: Inside England with Freya Godfrey and Laura Kendall',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Sport',
    { show: 'BBC Sport', duration: '52 mins' }
  ),
  makeAudio(
    'a27',
    'Remember: Where... We Had A Golden Generation Also Known',
    '',
    'https://open.spotify.com/embed/episode/3NRFbAHbMTJW8bxXEKhMKl',
    'Sport',
    { show: 'BBC Sport', duration: '44 mins' }
  ),
]

export const audioCategories = [
  { label: 'Business', imageUrl: 'https://picsum.photos/seed/cat1/300/200' },
  { label: 'Comedy', imageUrl: 'https://picsum.photos/seed/cat2/300/200' },
  { label: 'History', imageUrl: 'https://picsum.photos/seed/cat3/300/200' },
  { label: 'News', imageUrl: 'https://picsum.photos/seed/cat4/300/200' },
  {
    label: 'Science and health',
    imageUrl: 'https://picsum.photos/seed/cat5/300/200',
  },
  {
    label: 'Society and culture',
    imageUrl: 'https://picsum.photos/seed/cat6/300/200',
  },
  { label: 'Sport', imageUrl: 'https://picsum.photos/seed/cat7/300/200' },
  { label: 'True crime', imageUrl: 'https://picsum.photos/seed/cat8/300/200' },
]
