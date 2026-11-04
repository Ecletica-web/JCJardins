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
          <div className="about__frames">
            <Photo image="tomasSplit" ratio="4 / 3" className="about__portrait" priority={false} />
            <Photo image="tomasInRing" ratio="1 / 1" className="about__detail" compact />
          </div>
        </div>

        <div className="about__copy">
          <SectionTitle id="sobre-title" kicker={about.kicker} lines={about.title} />
          <p className="lead about__fact">{about.paragraphs[0]}</p>

          <div className="discs">
            {about.credentials.map((c, i) => (
              <Disclosure key={c.group} title={c.group} marker={String(i + 1).padStart(2, '0')}>
                <ul role="list" className="credentials__list">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Disclosure>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap about__slides">
        <Slideshow images={record.photos.map((ph) => ph.image)} label={ui.slidesLabel} caption={record.caption} />
      </div>
    </section>
  );
}
