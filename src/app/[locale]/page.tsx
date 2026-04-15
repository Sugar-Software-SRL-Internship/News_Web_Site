// import { useTranslations } from 'next-intl'

// export default function HomePage() {
//   const t = useTranslations()

//   return (
//     <main style={{ padding: '2rem' }}>
//       <p>DEBUG LOCALE: {locale}</p>
//       <h1>{t('home.title')}</h1>
//       <p>{t('home.breaking')}</p>
//       <p>{t('common.readMore')}</p>
//     </main>
//   )
// }

// import { useTranslations, useLocale } from 'next-intl'

// export default function HomePage() {
//   const t = useTranslations()
//   const locale = useLocale()

//   return (
//     <main style={{ padding: '2rem' }}>
//       <h1>{t('home.title')}</h1>
//       <p>{t('home.breaking')}</p>
//       <p>{t('common.readMore')}</p>
//     </main>
//   )
// }

import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Tag } from '@/components/ui/Tag'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/layout/Container'
import { Grid } from '@/components/layout/Grid'
import { Section } from '@/components/layout/Section'

export default function HomePage() {
  return (
    <Container>
      <Section title="Butoane">
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Badge-uri">
        <div className="flex gap-4 flex-wrap">
          <Badge label="Default" />
          <Badge label="Ultima Oră" variant="breaking" />
          <Badge label="Live" variant="live" />
          <Badge label="Sport" variant="sport" />
          <Badge label="Tech" variant="tech" />
        </div>
      </Section>

      <Section title="Tag-uri">
        <div className="flex gap-4 flex-wrap">
          <Tag label="Politică" />
          <Tag label="Sport" active />
          <Tag label="Tehnologie" />
          <Tag label="Sănătate" />
        </div>
      </Section>

      <Section title="Carduri">
        <Grid cols={3}>
          <Card
            title="Titlul unei știri importante despre evenimentele din țară"
            description="Descrierea scurtă a știrii care apare sub titlu și oferă context"
            category="Politică"
            publishedAt="15 ianuarie 2024"
          />
          <Card
            title="Știre de ultimă oră despre un eveniment major"
            description="Detalii despre evenimentul de ultimă oră"
            isBreaking
            publishedAt="Acum 5 minute"
          />
          <Card
            title="Transmisiune live din centrul orașului"
            isLive
            publishedAt="Live acum"
          />
        </Grid>
      </Section>
    </Container>
  )
}
