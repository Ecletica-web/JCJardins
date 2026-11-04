import Wordmark from '../../components/Wordmark.jsx';
import Photo from '../../components/Photo.jsx';
import Marquee from '../../components/Marquee.jsx';
import { useContent } from '../../i18n.jsx';

/* Full-screen opener. The image fills the right of the viewport on
   desktop and the whole width on mobile, with a slow drift as you
   scroll. The name arrives letter by letter; copy and actions sit low.
   A thin scroll cue breathes at the bottom. */
export default function Hero() {
  const { hero, ui } = useContent();
  return (
    <section className="hero on-dark" id="topo" aria-labelledby="hero-title">
      <div className="hero__media">
        <Photo image="heroPads" ratio="auto" className="hero__photo" priority sizes="(min-width: 64rem) 60vw, 100vw" />
      </div>

      <div className="hero__body">
        <div className="hero__mark">
          <Wordmark as="p" layout="stacked" descriptor={ui.descriptor} letters />
        </div>

        <div className="hero__copy">
          <h1 id="hero-title" className="h1 hero__headline">
            {hero.headline.map((line, i) => (
              <span key={line} className="hero__line" style={{ '--i': i }}>
                <span className={`br ${i === hero.headline.length - 1 ? 'slant hero__accent' : ''}`}>{line} </span>
              </span>
            ))}
          </h1>
          <p className="hero__support">{hero.support}</p>
          <div className="hero__actions">
            <a className="btn" href={hero.primary.href}>
              {hero.primary.label} <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href={hero.secondary.href}>
              {hero.secondary.label}
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
