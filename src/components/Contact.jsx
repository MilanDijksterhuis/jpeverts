import { useState } from 'react'
import { PhoneCall, Envelope, MapPin, CheckCircle } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const ref = useScrollReveal()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    naam: '', email: '', telefoon: '', service: '', bericht: '',
  })

  function onChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="reveal">
              <span className="section-tag">Contact</span>
              <h2>Vraag een vrijblijvende offerte aan</h2>
            </div>
            <p className="reveal d1">
              Heeft u een vraag of wilt u een offerte aanvragen? Vul het formulier in of bel ons direct. Wij reageren zo snel mogelijk.
            </p>

            <div className="contact-details">
              <a
                href="tel:0646291510"
                className="contact-detail phone-detail reveal d2"
                aria-label="Bel JP Everts"
              >
                <div className="contact-detail-icon">
                  <PhoneCall size={20} weight="fill" />
                </div>
                <div>
                  <div className="contact-detail-label">Telefoon</div>
                  <div className="contact-detail-value">06 46 29 15 10</div>
                </div>
              </a>

              <a
                href="mailto:contact@stukadoorjpeverts.nl"
                className="contact-detail reveal d3"
                aria-label="Stuur een e-mail"
              >
                <div className="contact-detail-icon">
                  <Envelope size={20} weight="fill" />
                </div>
                <div>
                  <div className="contact-detail-label">E-mail</div>
                  <div className="contact-detail-value">contact@stukadoorjpeverts.nl</div>
                </div>
              </a>

              <div className="contact-detail reveal d4">
                <div className="contact-detail-icon">
                  <MapPin size={20} weight="fill" />
                </div>
                <div>
                  <div className="contact-detail-label">Adres</div>
                  <div className="contact-detail-value">Lariksweg 1, 9674 JA Winschoten</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap reveal d2">
            {sent ? (
              <div className="form-success">
                <CheckCircle size={48} color="var(--accent)" weight="fill" />
                <h3 style={{ marginTop: 16, marginBottom: 8 }}>Bedankt voor uw bericht!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  We nemen zo snel mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="form-title">Stuur ons een bericht</div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="naam">Naam</label>
                    <input
                      id="naam"
                      name="naam"
                      type="text"
                      placeholder="Uw naam"
                      value={form.naam}
                      onChange={onChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefoon">Telefoonnummer</label>
                    <input
                      id="telefoon"
                      name="telefoon"
                      type="tel"
                      placeholder="06 00 00 00 00"
                      value={form.telefoon}
                      onChange={onChange}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mailadres</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="uw@email.nl"
                    value={form.email}
                    onChange={onChange}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Type werkzaamheid</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={onChange}
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="glad">Glad stucwerk</option>
                    <option value="sausklaar">Sausklaar stucwerk</option>
                    <option value="behangklaar">Behangklaar stucwerk</option>
                    <option value="raapwerk">Raapwerk</option>
                    <option value="renovatie">Renovatiestucwerk</option>
                    <option value="plafond">Plafond</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="bericht">Omschrijving</label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    placeholder="Vertel ons meer over uw project, de ruimte, oppervlakte of andere wensen..."
                    value={form.bericht}
                    onChange={onChange}
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Bericht versturen
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
