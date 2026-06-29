import { ArrowRight, Medal } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import img1 from '@fotos/MG_8562-768x512.jpg'
import img2 from '@fotos/MG_8550-683x1024.jpg'
import img3 from '@fotos/MG_8555-683x1024.jpg'

const stats = [
  { num: '15+', label: 'Jaar ervaring' },
  { num: '500+', label: 'Projecten afgerond' },
  { num: '100%', label: 'Klanten tevreden' },
  { num: '4', label: 'Provincies werkgebied' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="about" id="over-ons" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="reveal">
              <span className="section-tag">Over ons</span>
            </div>
            <h2 className="reveal d1">
              Kwaliteit en vakmanschap, bij elk project
            </h2>
            <p className="reveal d2">
              Stukadoorsbedrijf JP Everts staat voor eerlijk, vakkundig werk. Met jarenlange ervaring in glad stucwerk, sausklaar stucwerk en renovatieprojecten weten wij precies wat nodig is voor een perfect resultaat.
            </p>
            <p className="reveal d3">
              Wij werken voor particulieren in Winschoten en de regio Groningen, Drenthe en Friesland. Of het nu gaat om een woonkamer, slaapkamer, badkamer of een complete woning: wij zorgen voor een strakke, nette afwerking.
            </p>
            <p className="reveal d4">
              Persoonlijk contact staat bij ons centraal. U weet altijd waar u aan toe bent, van de eerste kennismaking tot de uiteindelijke oplevering.
            </p>

            <div className="about-stats reveal d3">
              {stats.map(s => (
                <div key={s.label} className="stat-card">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-ghost reveal d4" style={{ marginTop: '28px' }}>
              Neem contact op
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="about-images reveal d2">
            <div className="about-img-main">
              <img src={img1} alt="Stucwerk door JP Everts - wand afwerking" loading="lazy" />
            </div>
            <div className="about-img-sub">
              <img src={img2} alt="Glad stucwerk detail" loading="lazy" />
            </div>
            <div className="about-img-sub">
              <img src={img3} alt="Professioneel stucwerk" loading="lazy" />
            </div>

            <div className="about-badge">
              <div className="about-badge-icon" aria-hidden="true">
                <Medal size={22} weight="fill" />
              </div>
              <div className="about-badge-text">
                <strong>Vakmanschap</strong>
                <span>Meer dan 15 jaar ervaring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
