import SiteHeader from './SiteHeader.jsx';
import Intro from '../../components/Intro.jsx';
import Cursor from '../../components/Cursor.jsx';
import { useContent } from '../../i18n.jsx';
import Hero from './Hero.jsx';
import Experience from './Experience.jsx';
import Interlude from './Interlude.jsx';
import About from './About.jsx';
import Statement from './Statement.jsx';
import FirstSession from './FirstSession.jsx';
import Formats from './Formats.jsx';
import Locations from './Locations.jsx';
import Contact from './Contact.jsx';
import SiteFooter from './SiteFooter.jsx';

export default function LandingPage() {
  const { ui } = useContent();
  return (
    <>
      <a className="skip-link" href="#conteudo">
        {ui.skip}
      </a>
      <Intro />
      <Cursor />
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Statement which="intro" />
        <About />
        <Experience />
        <Interlude />
        <FirstSession />
        <Formats />
        <Locations />
        <Statement which="close" />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
