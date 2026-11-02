import Wordmark from '../../components/Wordmark.jsx';
import Photo from '../../components/Photo.jsx';
import { hero } from '../../content/landing.js';

export default function Hero() {
  return (
    <section className="hero on-charcoal" id="topo" aria-labelledby="hero-title">
      <div className="hero__grid wrap">
        <div className="hero__mark">
          <Wordmark as="p" layout="stacked" />
        </div>

        <div className="hero__media">
          <Photo image="heroHands" ratio="4 / 5" priority sizes="(min-width: 64rem) 45vw, 100vw" />
          <p className="hero__media-note" aria-hidden="true">
            <span>Ligaduras</span>
            <span>antes da primeira ronda</span>
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

      <div className="hero__strip" aria-label="O que inclui o treino">
        <ul role="list" className="wrap">
          {hero.strip.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li className="hero__strip-place">Lisboa · no local combinado</li>
        </ul>
      </div>
    </section>
  );
}
