import Photo from '../../components/Photo.jsx';
import RealClip from '../../components/RealClip.jsx';
import { Reveal } from '../../components/useReveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

export default function About() {
  const { about, record, ui } = useContent();
  return (
    <section className="section about on-dark" id="sobre" aria-labelledby="sobre-title">
      <div className="wrap about__grid">
        <div className="about__media">
          <div className="about__frames">
            <Photo image="tomasSplit" ratio="4 / 3" className="about__portrait" priority={false} />
            <Photo image="tomasInRing" ratio="1 / 1" className="about__detail" compact />
          </div>
          <p className="about__credit">{ui.photoCredit}</p>
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
          <div className="record__row">
            {record.photos.map((ph) => (
              <div key={ph.image || ph.video} className={`record__item record__item--${ph.slot}`} style={{ '--ar': ph.ratio }}>
                {ph.video ? (
                  <RealClip video={ph.video} ratio={`${ph.ratio} / 1`} focus="50% 55%" label={false} />
                ) : (
                  <Photo image={ph.image} ratio={`${ph.ratio} / 1`} sizes="(min-width: 64rem) 30vw, 70vw" />
                )}
              </div>
            ))}
          </div>
          <figcaption className="record__caption soft">{record.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
