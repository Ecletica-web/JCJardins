import Photo from '../../components/Photo.jsx';
import Slideshow from '../../components/Slideshow.jsx';
import SectionTitle from './SectionTitle.jsx';
import Disclosure from '../../components/Disclosure.jsx';
import { useContent } from '../../i18n.jsx';

export default function About() {
  const { about, record, ui } = useContent();
  return (
    <section className="section about on-dark" id="sobre" aria-labelledby="sobre-title">
      <div className="wrap about__grid">
        <div className="about__media">
          <Photo image="tomasKickGarden" ratio="4 / 5" className="about__lead" sizes="(min-width: 64rem) 40vw, 100vw" />
          <div className="about__frames">
            <Photo image="tomasSplit" ratio="4 / 3" className="about__portrait" priority={false} />
            <Photo image="tomasInRing" ratio="1 / 1" className="about__detail" compact />
          </div>
        </div>

        <div className="about__copy">
          <SectionTitle id="sobre-title" kicker={about.kicker} lines={about.title} />
          <div className="discs">
            <Disclosure title={about.storyTitle} marker="01" className="disc--story">
              <div className="story">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="credentials">
                {about.credentials.map((c) => (
                  <div key={c.group} className="credentials__group">
                    <h4 className="credentials__title">{c.group}</h4>
                    <ul role="list" className="credentials__list">
                      {c.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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

      <div className="wrap about__slides">
        <Slideshow images={record.photos.map((ph) => ph.image)} label={ui.slidesLabel} caption={record.caption} />
      </div>
    </section>
  );
}
