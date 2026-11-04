import Photo from '../../components/Photo.jsx';
import SectionTitle from './SectionTitle.jsx';
import Disclosure from '../../components/Disclosure.jsx';
import { useContent } from '../../i18n.jsx';

export default function Locations() {
  const { locations, ui } = useContent();
  return (
    <section className="section locations on-light" id="locais" aria-labelledby="locais-title">
      <div className="wrap locations__grid">
        <div className="locations__copy">
          <SectionTitle id="locais-title" kicker={locations.kicker} lines={locations.title} />
          <p className="lead soft">{locations.intro}</p>

          <div className="discs">
            {locations.options.map((o, i) => (
              <Disclosure key={o.title} marker={String.fromCharCode(65 + i)} title={o.title}>
                <p>{o.text}</p>
              </Disclosure>
            ))}
          </div>
        </div>

        <div className="locations__media">
          <Photo image="boardwalk" ratio="4 / 5" className="locations__kit" />
          <Photo image="portableKit" ratio="3 / 2" className="locations__home" compact />
        </div>
      </div>
    </section>
  );
}
