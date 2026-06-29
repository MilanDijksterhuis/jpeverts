import { PhoneCall, ArrowRight, CheckCircle } from '@phosphor-icons/react'
import heroBg from '@fotos/MG_8558-1024x683.jpg'

const usps = [
  'Vakkundig stucwerk',
  'Vrijblijvende offerte',
  'Betrouwbare planning',
  'Persoonlijk contact',
]

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introductie">
      <div className="hero-bg">
        <img
          src={heroBg}
          alt="Strak stucwerk door JP Everts"
          fetchpriority="high"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot" aria-hidden="true" />
              Actief in Groningen, Drenthe &amp; Friesland
            </div>

            <h1>
              Vakkundig stucwerk voor <span>uw woning</span>
            </h1>

            <p className="hero-sub">
              JP Everts verzorgt strak en duurzaam stucwerk voor particulieren. Van glad stucwerk tot volledige renovatie, altijd met oog voor detail en een nette oplevering.
            </p>

            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">
                Offerte aanvragen
                <ArrowRight size={16} weight="bold" />
              </a>

              <a href="tel:0646291510" className="phone-btn" aria-label="Bel JP Everts">
                <PhoneCall
                  size={18}
                  weight="fill"
                  className="phone-icon"
                  aria-hidden="true"
                />
                06 46 29 15 10
              </a>
            </div>

            <ul className="hero-usps" role="list">
              {usps.map(usp => (
                <li key={usp} className="hero-usp">
                  <span className="usp-check" aria-hidden="true">
                    <CheckCircle size={12} weight="fill" />
                  </span>
                  {usp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <div className="scroll-line" />
      </div>
    </section>
  )
}
