import Wordmark from '../../components/Wordmark.jsx';
import Photo from '../../components/Photo.jsx';
import Marquee from '../../components/Marquee.jsx';
import { useContent } from '../../i18n.jsx';

/* Full-screen opener: the image, the name arriving letter by letter,
   one button, and the slow strip underneath. Nothing else. */
export default function Hero() {
  const { hero, ui } = useContent();
  return (
    <section className="hero on-dark" id="topo" aria-label="Tomás Queiroz">
      <div className="hero__media">
        <Photo image="heroPads" ratio="auto" className="hero__photo" priority sizes="100vw" />
      </div>

      <div className="hero__body">
        <div className="hero__mark">
          <Wordmark as="h1" layout="stacked" descriptor={ui.descriptor} letters />
        </div>

        <div className="hero__copy">
          <div className="hero__actions">
            <a className="btn" href={hero.primary.href}>
              {hero.primary.label} <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <a className="hero__cue" href="#sobre" aria-label={ui.scrollCue}>
          <span className="hero__cue-line" aria-hidden="true" />
        </a>
      </div>

      <Marquee className="hero__strip" items={[...hero.strip, ui.stripPlace]} label={ui.stripLabel} />
    </section>
  );
}
