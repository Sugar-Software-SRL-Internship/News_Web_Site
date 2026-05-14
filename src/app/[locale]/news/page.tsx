import { Container } from '@/components/layout/Container'
import { HeroGrid } from '@/components/news/HeroGrid'
import { OnlyFromBBC } from '@/components/news/OnlyFromBBC'
import { RecommendedAudio } from '@/components/news/RecommendedAudio'
import { MoreNews } from '@/components/news/MoreNews'
import {
  heroArticles,
  sideArticles,
  onlyBBCArticles,
  audioArticles,
  moreNewsArticles,
} from '@/app/constants/mockData'

export default function NewsPage() {
  return (
    <Container>
      <div className="gap-1 py-4 mx-4 w-auto relative grid">
        <div className="flex justify-center gap-4 min-h-10">
          <h1 className="relative grid items-center text-red-700 h-7 text-3xl font-bold uppercase">
            news
          </h1>
        </div>
      </div>
      <HeroGrid
        leftArticles={heroArticles.slice(0, 2)}
        centerArticle={heroArticles[2]}
        rightArticles={sideArticles}
      />
      <OnlyFromBBC articles={onlyBBCArticles} />
      <RecommendedAudio articles={audioArticles} />
      <MoreNews
        bigArticles={moreNewsArticles.slice(0, 1)}
        largeArticles={moreNewsArticles.slice(1, 4)}
        //smallArticles={moreNewsArticles.slice(4, 7)}
        sideArticles={moreNewsArticles.slice(7, 10)}
      />
    </Container>
  )
}
