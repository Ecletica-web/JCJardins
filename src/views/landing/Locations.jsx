import Photo from '../../components/Photo.jsx';
import SectionTitle from './SectionTitle.jsx';
import { locations } from '../../content/landing.js';

export default function Locations() {
  return (
    <section className="section locations on-chalk" id="locais" aria-labelledby="locais-title">
      <div className="wrap locations__grid">
        <div className="locations__copy">
          <SectionTitle id="locais-title" kicker={locations.kicker} lines={locations.title} />
          <p className="lead soft">{locations.intro}</p>

          <dl className="options">
            {locations.options.map((o, i) => (
              <div key={o.title} className="option">
                <dt>
                  <span className="option__n" aria-hidden="true">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {o.title}
                </dt>
                <dd className="soft">{o.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="locations__media">
          <Photo image="portableKit" ratio="4 / 5" className="locations__kit" briefAt="top" />
          <Photo image="wrapsWindow" ratio="3 / 2" className="locations__home" compact />
        </div>
      </div>
    </section>
  );
}
