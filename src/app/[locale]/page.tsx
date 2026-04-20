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

export default function HomePage() {
  return (
    <Container className="py-6">
      {/* Section 1 — Hero Grid */}
      <HeroGrid
        leftArticles={heroArticles.slice(0, 2)}
        centerArticle={heroArticles[2]}
        rightArticles={sideArticles}
      />

      {/* Section 2 — Only from BBC */}
      <OnlyFromBBC articles={onlyBBCArticles} />

      {/* Section 3 — Recommended Audio */}
      <RecommendedAudio articles={audioArticles} />

      {/* Section 4 — More News */}
      <MoreNews
        largeArticles={moreNewsArticles.slice(0, 3)}
        smallArticles={moreNewsArticles.slice(3, 6)}
        sideArticles={moreNewsArticles.slice(6, 9)}
      />
    </Container>
  )
}

// import { Button } from '@/components/ui/Button'
// import { Badge } from '@/components/ui/Badge'
// import { Tag } from '@/components/ui/Tag'
// import { Card } from '@/components/ui/Card'
// import { Container } from '@/components/layout/Container'
// import { Grid } from '@/components/layout/Grid'
// import { Section } from '@/components/layout/Section'

// export default function HomePage() {
//   return (
//     <Container>
//       <Section title="Butoane">
//         <div className="flex gap-4 flex-wrap">
//           <Button variant="primary">Primary</Button>
//           <Button variant="secondary">Secondary</Button>
//           <Button variant="ghost">Ghost</Button>
//           <Button size="sm">Small</Button>
//           <Button size="lg">Large</Button>
//           <Button disabled>Disabled</Button>
//         </div>
//       </Section>

//       <Section title="Badge-uri">
//         <div className="flex gap-4 flex-wrap">
//           <Badge label="Default" />
//           <Badge label="Ultima Oră" variant="breaking" />
//           <Badge label="Live" variant="live" />
//           <Badge label="Sport" variant="sport" />
//           <Badge label="Tech" variant="tech" />
//         </div>
//       </Section>

//       <Section title="Tag-uri">
//         <div className="flex gap-4 flex-wrap">
//           <Tag label="Politică" />
//           <Tag label="Sport" active />
//           <Tag label="Tehnologie" />
//           <Tag label="Sănătate" />
//         </div>
//       </Section>

//       <Section title="Carduri">
//         <Grid cols={3}>
//           <Card
//             title="Titlul unei știri importante despre evenimentele din țară"
//             description="Descrierea scurtă a știrii care apare sub titlu și oferă context"
//             category="Politică"
//             publishedAt="15 ianuarie 2024"
//           />
//           <Card
//             title="Știre de ultimă oră despre un eveniment major"
//             description="Detalii despre evenimentul de ultimă oră"
//             isBreaking
//             publishedAt="Acum 5 minute"
//           />
//           <Card
//             title="Transmisiune live din centrul orașului"
//             isLive
//             publishedAt="Live acum"
//           />
//         </Grid>
//       </Section>
//     </Container>
//   )
// }
