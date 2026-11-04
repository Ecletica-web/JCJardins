import Photo from '../../components/Photo.jsx';
import Disclosure from '../../components/Disclosure.jsx';
import { useContent } from '../../i18n.jsx';

export default function About() {
  const { about, record, ui } = useContent();
  return (
    <section className="section about on-dark" id="sobre" aria-labelledby="sobre-title">
      <div className="wrap">
        <div className="about__hero">
          <Photo image="tomasKickGarden" ratio="4 / 5" className="about__lead" sizes="(min-width: 64rem) 60vw, 100vw" />
          <div className="about__shade" aria-hidden="true" />
          <div className="about__over">
            <h2 id="sobre-title" className="visually-hidden">
              {about.kicker}
            </h2>
            <Disclosure title={about.storyTitle} marker="01" className="disc--story disc--over">
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
            </Disclosure>
          </div>
        </div>
        <Photo image="tomasSplit" ratio="16 / 9" className="about__split" priority={false} focus="40% 45%" />
      </div>

      <div className="wrap">
        <figure className="about__record">
          <div className="record__row">
            {record.photos.map((ph) => (
              <div key={ph.image} className={`record__item record__item--${ph.slot}`} style={{ '--ar': ph.ratio }}>
                <Photo image={ph.image} ratio={`${ph.ratio} / 1`} sizes="(min-width: 64rem) 30vw, 70vw" />
              </div>
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}
