import Photo from '../../components/Photo.jsx';
import RealClip from '../../components/RealClip.jsx';
import { Reveal } from '../../components/useReveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import Disclosure from '../../components/Disclosure.jsx';
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
          <p className="lead about__fact">{about.paragraphs[0]}</p>

          <div className="discs">
            <Disclosure title={about.storyTitle} marker="01">
              {about.paragraphs.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Disclosure>
            {about.credentials.map((c, i) => (
              <Disclosure key={c.group} title={c.group} marker={String(i + 2).padStart(2, '0')}>
                <ul role="list" className="credentials__list">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Disclosure>
            ))}
            <Disclosure title={about.methodTitle} marker={String(about.credentials.length + 2).padStart(2, '0')}>
              <dl className="method">
                {about.principles.map((p) => (
                  <div key={p.title}>
                    <dt>{p.title}</dt>
                    <dd>{p.text}</dd>
                  </div>
                ))}
              </dl>
            </Disclosure>
          </div>
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
