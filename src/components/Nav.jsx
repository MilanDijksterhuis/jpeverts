import { useState, useEffect } from 'react'
import { PhoneCall } from '@phosphor-icons/react'
import logo from '@img/cropped-logo-4.png'

const links = [
  { label: 'Diensten',  href: '#diensten' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Over ons',  href: '#over-ons' },
  { label: 'Werkwijze', href: '#werkwijze' },
  { label: 'Contact',   href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav-wrap${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo" aria-label="Stukadoorsbedrijf JP Everts">
          <img src={logo} alt="JP Everts logo" />
        </a>

        <nav className="nav-links" aria-label="Hoofdnavigatie">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <a href="tel:0646291510" className="btn btn-primary nav-cta">
          <PhoneCall size={16} weight="fill" />
          Bel direct
        </a>

        <button
          className="nav-burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile" role="navigation">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0646291510"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            <PhoneCall size={16} weight="fill" />
            Bel direct: 06 46 29 15 10
          </a>
        </div>
      )}
    </header>
  )
}
