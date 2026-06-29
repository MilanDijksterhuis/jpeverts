import Nav       from './components/Nav'
import Hero      from './components/Hero'
import About     from './components/About'
import Services  from './components/Services'
import Portfolio from './components/Portfolio'
import Process   from './components/Process'
import WhyUs     from './components/WhyUs'
import CTA       from './components/CTA'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
