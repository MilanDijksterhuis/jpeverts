/* ============================================================
   STUKADOORSBEDRIJF JP EVERTS — JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV SCROLL BEHAVIOUR ──────────────────────────────────
  const nav = document.getElementById('nav')
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60)
  }, { passive: true })

  // ── MOBILE MENU ───────────────────────────────────────────
  const burger  = document.getElementById('nav-burger')
  const mobileMenu = document.getElementById('nav-mobile')

  burger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open')
    burger.setAttribute('aria-expanded', open)
  })

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open')
      burger.setAttribute('aria-expanded', 'false')
    })
  })

  // ── SCROLL REVEAL ─────────────────────────────────────────
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

  // ── PORTFOLIO LIGHTBOX ────────────────────────────────────
  const photos = Array.from(document.querySelectorAll('.portfolio-item img'))
  const lightbox   = document.getElementById('lightbox')
  const lbImg      = document.getElementById('lb-img')
  let   lbCurrent  = 0

  function openLightbox(index) {
    lbCurrent = index
    lbImg.src = photos[index].src
    lbImg.alt = photos[index].alt
    lightbox.removeAttribute('hidden')
    document.body.style.overflow = 'hidden'
    lightbox.focus()
  }

  function closeLightbox() {
    lightbox.setAttribute('hidden', '')
    document.body.style.overflow = ''
    lbImg.src = ''
  }

  function lbPrev() {
    lbCurrent = (lbCurrent - 1 + photos.length) % photos.length
    lbImg.src = photos[lbCurrent].src
    lbImg.alt = photos[lbCurrent].alt
  }

  function lbNext() {
    lbCurrent = (lbCurrent + 1) % photos.length
    lbImg.src = photos[lbCurrent].src
    lbImg.alt = photos[lbCurrent].alt
  }

  document.querySelectorAll('.portfolio-item').forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i))
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(i)
    })
  })

  document.getElementById('lb-close').addEventListener('click', closeLightbox)
  document.getElementById('lb-prev').addEventListener('click', (e) => { e.stopPropagation(); lbPrev() })
  document.getElementById('lb-next').addEventListener('click', (e) => { e.stopPropagation(); lbNext() })

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox()
  })

  document.addEventListener('keydown', e => {
    if (lightbox.hasAttribute('hidden')) return
    if (e.key === 'Escape')      closeLightbox()
    if (e.key === 'ArrowLeft')   lbPrev()
    if (e.key === 'ArrowRight')  lbNext()
  })

  // ── CONTACT FORM ──────────────────────────────────────────
  const form    = document.getElementById('contact-form')
  const success = document.getElementById('form-success')

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault()
      form.style.display = 'none'
      success.classList.add('visible')
    })
  }

})
