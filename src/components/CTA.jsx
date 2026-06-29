import { PhoneCall, ArrowRight } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTA() {
  const ref = useScrollReveal()

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <div className="cta-inner">
          <div className="reveal">
            <h2>Klaar voor een strakke afwerking?</h2>
            <p>
              Vraag vandaag nog vrijblijvend een offerte aan. Wij nemen snel contact met u op en bespreken wat wij voor uw woning kunnen betekenen.
            </p>
          </div>

          <div className="cta-buttons reveal d2">
            <a href="#contact" className="btn btn-white">
              Offerte aanvragen
              <ArrowRight size={16} />
            </a>

            <a href="tel:0646291510" className="phone-cta-link" aria-label="Bel JP Everts">
              <PhoneCall size={18} weight="fill" aria-hidden="true" />
              <span>Of bel direct: <span className="phone-num">06 46 29 15 10</span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
