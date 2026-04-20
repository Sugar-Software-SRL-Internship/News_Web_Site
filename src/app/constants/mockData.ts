export interface Article {
  id: string
  title: string
  description: string
  imageUrl: string
  source: string
  publishedAt: Date //publishedAt: new Date(article.created_at) data din backend
  isBreaking?: boolean
  author?: string
  duration?: string
}

export const heroArticles: Article[] = [
  {
    id: '1',
    title: 'World leaders gather for emergency climate summit',
    description:
      'Representatives from over 190 countries meet to discuss urgent climate action following record temperatures.',
    imageUrl: 'https://picsum.photos/seed/news1/800/450',
    source: 'BBC News',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: '2',
    title: 'Tech giants face new regulations across Europe',
    description:
      'The European Union announces sweeping new rules targeting major technology companies.',
    imageUrl: 'https://picsum.photos/seed/news2/800/450',
    source: 'BBC Tech',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 1),
  },
  {
    id: '3',
    title:
      'Historic peace agreement signed in the Middle East after decades of conflict',
    description:
      'A landmark agreement brings hope for lasting peace in a region long troubled by war.',
    imageUrl: 'https://picsum.photos/seed/news3/800/600',
    source: 'BBC World',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
  },
]

export const sideArticles: Article[] = [
  {
    id: '4',
    title: 'Markets fall as inflation data disappoints investors',
    description: '',
    imageUrl: '',
    source: 'BBC Business',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 10),
  },
  {
    id: '5',
    title: 'Scientists discover new species deep in the Amazon rainforest',
    description: '',
    imageUrl: '',
    source: 'BBC Science',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 19),
  },
  {
    id: '6',
    title: 'Political crisis deepens as parliament votes against new budget',
    description: '',
    imageUrl: '',
    source: 'BBC News',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: '7',
    title: 'New study links social media use to rising anxiety in teenagers',
    description: '',
    imageUrl: '',
    source: 'BBC Health',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
  },
]

export const onlyBBCArticles: Article[] = [
  {
    id: '8',
    title:
      'The hidden world beneath Antarctica revealed by new satellite imaging',
    description:
      'Scientists have uncovered a vast network of rivers and lakes under the Antarctic ice sheet.',
    imageUrl: 'https://picsum.photos/seed/bbc1/600/400',
    source: 'BBC InDepth',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 9),
  },
  {
    id: '9',
    title: 'How one small town became the unlikely center of the AI revolution',
    description:
      'A remote community is transforming as tech companies move in, changing lives forever.',
    imageUrl: 'https://picsum.photos/seed/bbc2/600/400',
    source: 'BBC Future',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 1),
  },
]

export const audioArticles: Article[] = [
  {
    id: '10',
    title: 'The Future of Democracy',
    description: '',
    imageUrl: 'https://picsum.photos/seed/audio1/200/200',
    source: 'BBC Radio',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
    author: 'John Smith',
    duration: '45 min',
  },
  {
    id: '11',
    title: 'Climate Crisis Explained',
    description: '',
    imageUrl: 'https://picsum.photos/seed/audio2/200/200',
    source: 'BBC Sounds',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 13),
    author: 'Sarah Johnson',
    duration: '32 min',
  },
  {
    id: '12',
    title: 'The Economy After COVID',
    description: '',
    imageUrl: 'https://picsum.photos/seed/audio3/200/200',
    source: 'BBC Business',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    author: 'Mike Williams',
    duration: '28 min',
  },
  {
    id: '13',
    title: 'Inside the Tech Giants',
    description: '',
    imageUrl: 'https://picsum.photos/seed/audio4/200/200',
    source: 'BBC Tech',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
    author: 'Emma Davis',
    duration: '55 min',
  },
  {
    id: '14',
    title: 'Health Myths Debunked',
    description: '',
    imageUrl: 'https://picsum.photos/seed/audio5/200/200',
    source: 'BBC Health',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8),
    author: 'Dr. Chen',
    duration: '41 min',
  },
  {
    id: '15',
    title: 'The Art of Leadership',
    description: '',
    imageUrl: 'https://picsum.photos/seed/audio6/200/200',
    source: 'BBC Arts',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 9),
    author: 'Lisa Brown',
    duration: '38 min',
  },
  {
    id: '16',
    title: 'War and Peace in Modern Times',
    description: '',
    imageUrl: 'https://picsum.photos/seed/audio7/200/200',
    source: 'BBC World',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
    author: 'James Wilson',
    duration: '62 min',
  },
]

export const moreNewsArticles: Article[] = [
  {
    id: '17',
    title:
      'Floods devastate communities across southern Europe as storm season worsens',
    description:
      'Thousands of people have been evacuated from their homes as rivers burst their banks.',
    imageUrl: 'https://picsum.photos/seed/more1/400/250',
    source: 'BBC News',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
  },
  {
    id: '18',
    title: 'Global food prices rise sharply amid supply chain disruptions',
    description:
      'The cost of basic foods has increased significantly across developing nations.',
    imageUrl: 'https://picsum.photos/seed/more2/400/250',
    source: 'BBC Business',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 18),
  },
  {
    id: '19',
    title:
      'Space agency announces new mission to explore distant moons of Jupiter',
    description:
      'Scientists believe the moons may harbor conditions suitable for life.',
    imageUrl: 'https://picsum.photos/seed/more3/400/250',
    source: 'BBC Science',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
  },
  {
    id: '20',
    title: 'Election results spark protests in capital city',
    description: '',
    imageUrl: '',
    source: 'BBC News',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 20),
  },
  {
    id: '21',
    title: 'New cancer treatment shows promising results in early trials',
    description: '',
    imageUrl: '',
    source: 'BBC Health',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
  },
  {
    id: '22',
    title: 'Major earthquake strikes coastal region, tsunami warning issued',
    description: '',
    imageUrl: '',
    source: 'BBC News',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 1),
  },
  {
    id: '23',
    title: 'Refugee crisis grows as conflict enters third year',
    description:
      'Aid organizations warn of deteriorating conditions in border camps.',
    imageUrl: 'https://picsum.photos/seed/more4/400/250',
    source: 'BBC World',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 9),
  },
  {
    id: '24',
    title: 'Central bank raises interest rates for fifth consecutive time',
    description: '',
    imageUrl: '',
    source: 'BBC Business',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 15),
  },
  {
    id: '25',
    title:
      'New study reveals impact of plastic pollution on deep sea ecosystems',
    description: '',
    imageUrl: '',
    source: 'BBC Science',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 11),
  },
]
