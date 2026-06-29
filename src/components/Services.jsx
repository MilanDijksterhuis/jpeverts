import {
  Wall, PaintBrush, Broom, Hammer,
  HouseSimple, ArrowsClockwise, Rows, Sparkle
} from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight } from '@phosphor-icons/react'

const services = [
  {
    icon: Wall,
    title: 'Glad stucwerk',
    desc: 'Een strak, egaal oppervlak voor muren en plafonds. Glad stucwerk geeft iedere ruimte een luxe en tijdloze uitstraling, klaar voor schilderwerk of een andere afwerking.',
  },
  {
    icon: PaintBrush,
    title: 'Sausklaar stucwerk',
    desc: 'Uw muren en plafonds worden zo afgewerkt dat ze direct kunnen worden geschilderd. Geen verdere voorbewerking nodig, meteen een professioneel resultaat.',
  },
  {
    icon: Broom,
    title: 'Behangklaar stucwerk',
    desc: 'Een perfecte egale ondergrond zodat uw behang naadloos aansluit.',
  },
  {
    icon: Rows,
    title: 'Raapwerk',
    desc: 'Traditioneel raapwerk voor een robuuste en sfeervolle wandafwerking.',
  },
  {
    icon: ArrowsClockwise,
    title: 'Renovatiestucwerk',
    desc: 'Herstel van beschadigde of verouderde stuclagen voor een als-nieuw resultaat.',
  },
  {
    icon: HouseSimple,
    title: 'Plafonds',
    desc: 'Strakke plafondafwerking, van kleine kamers tot grote open ruimtes.',
  },
  {
    icon: Hammer,
    title: 'Wanden',
    desc: 'Professionele wandafwerking in alle ruimtes, van woonkamer tot badkamer.',
  },
  {
    icon: Sparkle,
    title: 'Sierpleister',
    desc: 'Decoratieve sierpleister voor een uniek karakter en een bijzondere uitstraling.',
  },
]

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section id="diensten" ref={ref}>
      <div className="container">
        <div className="services-head reveal">
          <div>
            <span className="section-tag">Diensten</span>
            <h2>Wat wij voor u kunnen doen</h2>
            <p>Van nieuwbouw tot renovatie: wij verzorgen alle vormen van stucwerk, altijd met de zorg en precisie die uw woning verdient.</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Vraag een offerte
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className={`service-card reveal d${Math.min(i + 1, 6)}`}
              >
                <div className="service-icon" aria-hidden="true">
                  <Icon size={22} weight="duotone" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
