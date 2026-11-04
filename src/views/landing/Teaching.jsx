import RealClip from '../../components/RealClip.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

/* Teaching: the coaching clip, vertical, with the title over it
   and the booking button below. */
export default function Teaching() {
  const { inSession } = useContent();
  return (
    <section className="section teaching on-dark" id="ensino" aria-labelledby="ensino-title">
      <div className="wrap">
        <div className="feature feature--over feature--vertical">
          <div className="feature__frame">
            <RealClip video="real-coaching" ratio="3 / 4" className="feature__clip" focus="50% 45%" />
            <div className="feature__shade" aria-hidden="true" />
            <div className="feature__over">
              <SectionTitle id="ensino-title" kicker={inSession.kicker} lines={inSession.title} as="h2" />
              <p className="feature__text">{inSession.text}</p>
            </div>
          </div>
          <a className="btn feature__cta" href="#contacto">
            {inSession.cta} <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
