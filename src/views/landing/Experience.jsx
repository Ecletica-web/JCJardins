import Photo from '../../components/Photo.jsx';
import { Reveal } from '../../components/useReveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import { experience } from '../../content/landing.js';

export default function Experience() {
  return (
    <section className="section experience on-light" id="treino" aria-labelledby="treino-title">
      <div className="wrap">
        <div className="experience__head">
          <SectionTitle id="treino-title" kicker={experience.kicker} lines={experience.title} />
          <p className="lead soft experience__intro">{experience.intro}</p>
        </div>

        <ol role="list" className="pillars">
          {experience.pillars.map((p, i) => (
            <Reveal as="li" key={p.n} className={`pillar pillar--${i + 1}`} delay={i % 2 ? 120 : 0}>
              <Photo image={p.image} ratio={i % 3 === 0 ? '4 / 5' : '3 / 4'} sizes="(min-width: 64rem) 40vw, 100vw" />
              <div className="pillar__text">
                <span className="pillar__n" aria-hidden="true">
                  {p.n}
                </span>
                <h3 className="pillar__title display">{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
