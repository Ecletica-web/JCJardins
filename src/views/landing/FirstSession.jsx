import Photo from '../../components/Photo.jsx';
import RealClip from '../../components/RealClip.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

/* Day one: a full-bleed photograph with the title over it, the four
   steps as one quiet line, then the in-session clip. All on black. */
export default function FirstSession() {
  const { firstSession, inSession, ui } = useContent();
  return (
    <section className="section first on-dark" id="primeira-sessao" aria-labelledby="primeira-title">
      <div className="stage">
        <Photo image="firstConversation" ratio="auto" className="stage__photo parallax" sizes="100vw" eager />
        <div className="stage__shade" aria-hidden="true" />
        <div className="stage__body wrap">
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

      <div className="wrap">
        <div className="feature">
          <RealClip video="real-coaching" ratio="3 / 4" className="feature__clip" focus="50% 45%" />
          <div className="feature__body">
            <SectionTitle kicker={inSession.kicker} lines={inSession.title} as="h3" />
            <p className="lead soft">{inSession.text}</p>
            <a className="btn" href="#contacto">
              {inSession.cta} <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
