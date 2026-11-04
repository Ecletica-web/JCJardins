import Photo from '../../components/Photo.jsx';
import RealClip from '../../components/RealClip.jsx';
import { Reveal } from '../../components/useReveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import { about, record } from '../../content/landing.js';

export default function About() {
  return (
    <section className="section about on-dark" id="sobre" aria-labelledby="sobre-title">
      <div className="wrap about__grid">
        <div className="about__media">
          <RealClip video="real-padwork" ratio="4 / 5" className="about__portrait" focus="50% 62%" />
          <Photo image="coachGloves" ratio="1 / 1" className="about__detail" compact />
        </div>

        <div className="about__copy">
          <SectionTitle id="sobre-title" kicker={about.kicker} lines={about.title} />
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'lead about__fact' : 'soft'}>
                {p}
              </p>
            ))}
          </div>

          <ul role="list" className="principles">
            {about.principles.map((p, i) => (
              <Reveal as="li" key={p.title} className="principle" delay={i * 90}>
                <h3 className="principle__title">{p.title}</h3>
                <p className="soft">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap">
        <figure className="about__record">
          <div className="record__grid">
            {record.photos.map((ph) => (
              <Photo
                key={ph.image}
                image={ph.image}
                ratio={ph.wide ? '2.1 / 1' : '1 / 1'}
                className={ph.wide ? 'record__wide' : 'record__square'}
                sizes={ph.wide ? '(min-width: 64rem) 40vw, 100vw' : '(min-width: 64rem) 20vw, 33vw'}
              />
            ))}
          </div>
          <figcaption className="record__caption soft">{record.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
