import Wordmark from '../../components/Wordmark.jsx';
import Photo from '../../components/Photo.jsx';
import { useContent } from '../../i18n.jsx';

export default function Hero() {
  const { hero, ui } = useContent();
  return (
    <section className="hero on-dark" id="topo" aria-labelledby="hero-title">
      <div className="hero__grid wrap">
        <div className="hero__mark">
          <Wordmark as="p" layout="stacked" descriptor={ui.descriptor} />
        </div>

        <div className="hero__media">
          <Photo image="heroPads" ratio="4 / 5" priority sizes="(min-width: 64rem) 45vw, 100vw" />
          <p className="hero__media-note" aria-hidden="true">
            <span>{ui.heroNote[0]}</span>
            <span>{ui.heroNote[1]}</span>
          </p>
        </div>

        <div className="hero__copy">
          <h1 id="hero-title" className="h1 hero__headline">
            {hero.headline.map((line, i) => (
              <span key={line} className={`br ${i === hero.headline.length - 1 ? 'slant hero__accent' : ''}`}>
                {line}{' '}
              </span>
            ))}
          </h1>
          <p className="lead hero__support">{hero.support}</p>
          <div className="hero__actions">
            <a className="btn" href={hero.primary.href}>
              {hero.primary.label} <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href={hero.secondary.href}>
              {hero.secondary.label}
            </a>
          </div>
        </div>
      </div>

      <div className="hero__strip" aria-label={ui.stripLabel}>
        <div className="wrap">
          <ul role="list">
            {hero.strip.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li className="hero__strip-place">{ui.stripPlace}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
