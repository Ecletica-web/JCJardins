import Photo from '../../components/Photo.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

export default function Locations() {
  const { locations, ui } = useContent();
  return (
    <section className="section locations on-light" id="locais" aria-labelledby="locais-title">
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
          <Photo image="boardwalk" ratio="4 / 5" className="locations__kit" />
          <Photo image="portableKit" ratio="3 / 2" className="locations__home" compact />
        </div>
      </div>
    </section>
  );
}
