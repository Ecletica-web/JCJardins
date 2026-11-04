import Photo from '../../components/Photo.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

/* Places: the boardwalk full-bleed, title and places over it, the kit
   as a small frame in the corner on wide screens. */
export default function Locations() {
  const { locations, ui } = useContent();
  return (
    <section className="locations on-dark" id="locais" aria-labelledby="locais-title">
      <div className="stage stage--tall">
        <Photo image="boardwalk" ratio="auto" className="stage__photo parallax" sizes="100vw" focus="60% 50%" eager />
        <div className="stage__shade" aria-hidden="true" />
        <div className="stage__body wrap">
          <SectionTitle id="locais-title" kicker={locations.kicker} lines={locations.title} />
          <div className="places">
            <p className="places__intro">{locations.intro}</p>
            <p className="places__list">{locations.strip.join(' · ')}</p>
          </div>
        </div>
        <Photo image="portableKit" ratio="3 / 2" className="stage__inset" compact />
      </div>
    </section>
  );
}
