import Photo from '../../components/Photo.jsx';
import RealClip from '../../components/RealClip.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

/* Day one: the garden kick as a full-bleed backdrop, the title and one
   line, and the four steps as a quiet line. From tablet up the "in session"
   note and the booking button sit on the same photo (top right); on phones
   that block lives at the end of the craft section instead. */
export default function FirstSession() {
  const { firstSession, inSession } = useContent();
  return (
    <section className="first on-dark" id="primeira-sessao" aria-labelledby="primeira-title">
      <div className="stage stage--tall">
        <Photo image="tomasKickGarden" ratio="auto" className="stage__photo parallax" sizes="100vw" eager focus="45% 14%" />
        <div className="stage__shade" aria-hidden="true" />
        <div className="stage__body wrap">
          <div className="first__session">
            <div className="first__clip">
              <RealClip video="real-coaching" ratio="3 / 4" className="first__clip-video" focus="50% 45%" />
              <div className="first__clip-shade" aria-hidden="true" />
              <div className="first__clip-over">
                <SectionTitle kicker={inSession.kicker} lines={inSession.title} as="h3" />
                <p className="first__session-text">{inSession.text}</p>
              </div>
            </div>
            <a className="btn" href="#contacto">
              {inSession.cta} <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
          <SectionTitle id="primeira-title" kicker={firstSession.kicker} lines={firstSession.title} />
          <p className="stage__intro">{firstSession.intro}</p>
          <ol role="list" className="sequence">
            {firstSession.steps.map((st, i) => (
              <li key={st.title}>
                <span className="sequence__n" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {st.title}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
