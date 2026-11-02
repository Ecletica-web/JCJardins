import SiteHeader from './SiteHeader.jsx';
import Hero from './Hero.jsx';
import Experience from './Experience.jsx';
import Interlude from './Interlude.jsx';
import About from './About.jsx';
import FirstSession from './FirstSession.jsx';
import Formats from './Formats.jsx';
import Locations from './Locations.jsx';
import Contact from './Contact.jsx';
import SiteFooter from './SiteFooter.jsx';

export default function LandingPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Saltar para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Experience />
        <Interlude />
        <About />
        <FirstSession />
        <Formats />
        <Locations />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
