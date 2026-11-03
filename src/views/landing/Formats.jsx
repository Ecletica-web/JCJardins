import Photo from '../../components/Photo.jsx';
import { Reveal } from '../../components/useReveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import { formats } from '../../content/landing.js';

export default function Formats() {
  return (
    <section className="section formats on-dark" id="formatos" aria-labelledby="formatos-title">
      <div className="wrap">
        <SectionTitle id="formatos-title" kicker={formats.kicker} lines={formats.title} />

        <div className="formats__grid">
          {formats.items.map((f, i) => (
            <Reveal as="article" key={f.name} className="format" delay={i * 120} aria-labelledby={`formato-${i}`}>
              <Photo image={f.image} ratio="4 / 3" sizes="(min-width: 64rem) 45vw, 100vw" />
              <div className="format__body">
                <h3 id={`formato-${i}`} className="format__name display">
                  {f.name}
                </h3>
                <p className="format__lead">{f.lead}</p>
                <p className="soft">{f.text}</p>
                <ul role="list" className="format__points">
                  {f.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="formats__note soft">{formats.note}</p>
      </div>
    </section>
  );
}
