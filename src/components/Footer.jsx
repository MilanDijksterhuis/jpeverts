import { PhoneCall, Envelope, MapPin } from '@phosphor-icons/react'
import logo from '@img/cropped-logo-4.png'

const areas = [
  'Winschoten', 'Groningen', 'Drenthe', 'Friesland',
  'Veendam', 'Stadskanaal', 'Emmen', 'Assen',
  'Winschoten', 'Groningen', 'Drenthe', 'Friesland',
  'Veendam', 'Stadskanaal', 'Emmen', 'Assen',
]

export default function Footer() {
  return (
    <>
      <div className="area-strip" aria-label="Werkgebied">
        <div className="area-marquee" aria-hidden="true">
          {areas.map((area, i) => (
            <span key={i} className="area-item">
              {area}
              <span className="area-dot" />
            </span>
          ))}
        </div>
      </div>

      <footer className="footer" aria-label="Voettekst">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="Stukadoorsbedrijf JP Everts" />
              </div>
              <p>
                Vakkundig stucwerk voor particulieren in Winschoten en de regio. Eerlijk, netjes en altijd met oog voor detail.
              </p>
              <a href="tel:0646291510" className="footer-phone" aria-label="Bel JP Everts">
                <PhoneCall size={16} weight="fill" aria-hidden="true" />
                06 46 29 15 10
              </a>
            </div>

            <div className="footer-col">
              <h4>Navigatie</h4>
              <nav className="footer-links" aria-label="Footernavigatie">
                <a href="#over-ons">Over ons</a>
                <a href="#diensten">Diensten</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#werkwijze">Werkwijze</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div className="footer-col">
              <h4>Diensten</h4>
              <div className="footer-links">
                <a href="#diensten">Glad stucwerk</a>
                <a href="#diensten">Sausklaar stucwerk</a>
                <a href="#diensten">Raapwerk</a>
                <a href="#diensten">Renovatiestucwerk</a>
                <a href="#diensten">Plafonds</a>
                <a href="#diensten">Sierpleister</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <a href="tel:0646291510" className="footer-contact-item">
                <PhoneCall size={14} weight="fill" aria-hidden="true" />
                06 46 29 15 10
              </a>
              <a href="mailto:contact@stukadoorjpeverts.nl" className="footer-contact-item">
                <Envelope size={14} weight="fill" aria-hidden="true" />
                contact@stukadoorjpeverts.nl
              </a>
              <div className="footer-contact-item">
                <MapPin size={14} weight="fill" aria-hidden="true" />
                Lariksweg 1<br />9674 JA Winschoten
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Stukadoorsbedrijf JP Everts. Alle rechten voorbehouden.
            </p>
            <p className="footer-copy">
              KVK Winschoten &mdash; Stukadoor Groningen &amp; omgeving
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
