import { HandshakeIcon, FileText, Wrench, SealCheck } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    icon: HandshakeIcon,
    title: 'Kennismaking',
    desc: 'We bespreken uw wensen, bekijken de situatie ter plaatse en geven eerlijk advies over de beste aanpak.',
  },
  {
    icon: FileText,
    title: 'Vrijblijvende offerte',
    desc: 'U ontvangt een heldere, gedetailleerde offerte zonder verborgen kosten. Geen verplichtingen.',
  },
  {
    icon: Wrench,
    title: 'Uitvoering',
    desc: 'Vakkundig en netjes uitgevoerd, met respect voor uw woning. Wij werken ordelijk en houden u op de hoogte.',
  },
  {
    icon: SealCheck,
    title: 'Oplevering',
    desc: 'Na afronding loopt u samen met ons door het werk. Pas als u tevreden bent, is het klaar.',
  },
]

export default function Process() {
  const ref = useScrollReveal()

  return (
    <section id="werkwijze" ref={ref}>
      <div className="container">
        <div className="process-head reveal">
          <span className="section-tag">Werkwijze</span>
          <h2>Van kennismaking tot oplevering</h2>
          <p>Een helder en eerlijk proces, zodat u weet wat u kunt verwachten. Stap voor stap naar een perfect resultaat.</p>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title} className={`process-step reveal d${i + 1}`}>
                <div className="process-icon" aria-hidden="true">
                  <Icon size={28} weight="duotone" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
