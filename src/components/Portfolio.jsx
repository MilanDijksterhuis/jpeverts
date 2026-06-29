import { useState, useEffect, useCallback } from 'react'
import { MagnifyingGlassPlus, X, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

import p1 from '@fotos/MG_8550-683x1024.jpg'
import p2 from '@fotos/MG_8555-683x1024.jpg'
import p3 from '@fotos/MG_8558-1024x683.jpg'
import p4 from '@fotos/MG_8562-768x512.jpg'
import p5 from '@fotos/MG_8574-683x1024.jpg'
import p6 from '@fotos/MG_8590.jpg'

const photos = [
  { src: p1, alt: 'Glad stucwerk wand - JP Everts' },
  { src: p2, alt: 'Sausklaar stucwerk afwerking - JP Everts' },
  { src: p3, alt: 'Professioneel plafond stucwerk - JP Everts' },
  { src: p4, alt: 'Strakke wandafwerking - JP Everts' },
  { src: p5, alt: 'Renovatiestucwerk resultaat - JP Everts' },
  { src: p6, alt: 'Vakkundig stucwerk - JP Everts' },
]

function Lightbox({ index, onClose, onPrev, onNext }) {
  const photo = photos[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Portfoliofoto vergroot"
    >
      <div className="lightbox-img-wrap" onClick={e => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
      </div>

      <button className="lb-close" onClick={onClose} aria-label="Sluiten">
        <X size={20} weight="bold" />
      </button>
      <button className="lb-prev" onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Vorige foto">
        <CaretLeft size={20} weight="bold" />
      </button>
      <button className="lb-next" onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Volgende foto">
        <CaretRight size={20} weight="bold" />
      </button>
    </div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState(null)
  const ref = useScrollReveal()

  const close = useCallback(() => setActive(null), [])
  const prev  = useCallback(() => setActive(i => (i - 1 + photos.length) % photos.length), [])
  const next  = useCallback(() => setActive(i => (i + 1) % photos.length), [])

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container">
        <div className="portfolio-head reveal">
          <span className="section-tag">Ons werk</span>
          <h2>Portfolio</h2>
          <p>Een selectie van afgeronde projecten. Elk werk getuigt van precisie, vakmanschap en aandacht voor detail.</p>
        </div>

        <div className="portfolio-grid">
          {photos.map((photo, i) => (
            <div
              key={photo.alt}
              className={`portfolio-item reveal d${Math.min(i + 1, 6)}`}
              onClick={() => setActive(i)}
              tabIndex={0}
              role="button"
              aria-label={`Bekijk foto: ${photo.alt}`}
              onKeyDown={e => e.key === 'Enter' && setActive(i)}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="portfolio-overlay" aria-hidden="true">
                <div className="portfolio-overlay-icon">
                  <MagnifyingGlassPlus size={22} weight="bold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active !== null && (
        <Lightbox index={active} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  )
}
