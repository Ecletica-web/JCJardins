import { useState } from 'react';
import Photo from '../../components/Photo.jsx';
import RealClip from '../../components/RealClip.jsx';
import { Reveal } from '../../components/useReveal.jsx';
import RevealCard from '../../components/RevealCard.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

/* Desktop: four vertical panels side by side; one is open (video, title,
   line), the others are slim strips with their titles set vertically.
   Hover, focus or click opens a panel. Phones keep the swipe row. */
function CraftPanels({ pillars }) {
  const [active, setActive] = useState(0);
  return (
    <ol role="list" className="panels">
      {pillars.map((p, i) => {
        const on = i === active;
        return (
          <li key={p.n} className={`panel ${on ? 'is-active' : ''}`} onMouseEnter={() => setActive(i)}>
            <div className="panel__media">
              {p.video ? (
                <RealClip video={p.video} ratio="auto" focus={p.focus} label={false} />
              ) : (
                <Photo image={p.image} ratio="auto" sizes="60vw" eager label={false} />
              )}
            </div>
            <div className="panel__shade" aria-hidden="true" />
            <button
              type="button"
              className="panel__trigger"
              aria-expanded={on}
              aria-label={p.title}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
            />
            <span className="panel__strip" aria-hidden="true">
              <span className="panel__n">{p.n}</span>
              <span className="panel__label">{p.title}</span>
            </span>
            <div className="panel__copy">
              <span className="panel__n" aria-hidden="true">{p.n}</span>
              <h3 className="panel__title">{p.title}</h3>
              <p className="panel__text">{p.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function Experience() {
  const { experience } = useContent();
  return (
    <section className="section experience on-dark" id="treino" aria-labelledby="treino-title">
      <div className="wrap">
        <div className="experience__head">
          <SectionTitle id="treino-title" kicker={experience.kicker} lines={experience.title} />
          <p className="lead soft experience__intro">{experience.intro}</p>
        </div>

        <CraftPanels pillars={experience.pillars} />

        <ol role="list" className="pillars">
          {experience.pillars.map((p, i) => (
            <Reveal as="li" key={p.n} className={`pillar pillar--${i + 1}`} delay={i % 2 ? 120 : 0}>
              <RevealCard
                marker={p.n}
                title={p.title}
                media={
                  p.video ? (
                    <RealClip video={p.video} ratio={i % 3 === 0 ? '4 / 5' : '3 / 4'} focus={p.focus} />
                  ) : (
                    <Photo image={p.image} ratio={i % 3 === 0 ? '4 / 5' : '3 / 4'} sizes="(min-width: 64rem) 40vw, 100vw" />
                  )
                }
              >
                <p>{p.text}</p>
              </RevealCard>
            </Reveal>
          ))}
        </ol>

      </div>
    </section>
  );
}
