import {
  Star, Ruler, ChatCircle, CalendarCheck,
  Broom, Eye
} from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight } from '@phosphor-icons/react'
// img not used in layout, removed import

const reasons = [
  {
    icon: Star,
    title: 'Jarenlange ervaring',
    desc: 'Meer dan 15 jaar vakkundig stucwerk voor particulieren in de regio.',
  },
  {
    icon: Ruler,
    title: 'Strakke afwerking',
    desc: 'Iedere millimeter telt. We werken pas door als het echt goed is.',
  },
  {
    icon: ChatCircle,
    title: 'Heldere communicatie',
    desc: 'U weet altijd hoe het staat. Geen verrassingen, wel eerlijk advies.',
  },
  {
    icon: CalendarCheck,
    title: 'Betrouwbare planning',
    desc: 'We komen afspraken na. Klaar op tijd, netjes opgeruimd.',
  },
  {
    icon: Broom,
    title: 'Nette werkwijze',
    desc: 'Uw woning behandelen wij met dezelfde zorg als onze eigen.',
  },
  {
    icon: Eye,
    title: 'Oog voor detail',
    desc: 'Van vlak stucwerk tot het kleinste hoekje: elk onderdeel wordt perfect afgewerkt.',
  },
]

export default function WhyUs() {
  const ref = useScrollReveal()

  return (
    <section className="whyus" ref={ref}>
      <div className="container">
        <div className="whyus-layout">
          <div className="whyus-text reveal">
            <span className="section-tag">Waarom JP Everts</span>
            <h2>Wat u kunt verwachten</h2>
            <p>
              Bij JP Everts krijgt u niet alleen vakkundig stucwerk. U krijgt ook eerlijkheid, betrouwbaarheid en een vakman die trots is op zijn werk. Dat maakt het verschil.
            </p>
            <a href="#contact" className="btn btn-primary">
              Offerte aanvragen
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="whyus-grid">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <div key={r.title} className={`whyus-card reveal d${Math.min(i + 1, 6)}`}>
                  <div className="whyus-icon" aria-hidden="true">
                    <Icon size={20} weight="duotone" />
                  </div>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
