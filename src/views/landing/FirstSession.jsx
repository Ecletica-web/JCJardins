import Photo from '../../components/Photo.jsx';
import RealClip from '../../components/RealClip.jsx';
import { Reveal } from '../../components/useReveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

export default function FirstSession() {
  const { firstSession, inSession, ui } = useContent();
  return (
    <section className="section first on-light" id="primeira-sessao" aria-labelledby="primeira-title">
      <div className="wrap">
        <div className="first__head">
          <SectionTitle id="primeira-title" kicker={firstSession.kicker} lines={firstSession.title} />
          <p className="lead soft">{firstSession.intro}</p>
        </div>

        <Photo image="firstConversation" ratio="21 / 9" className="first__photo" sizes="100vw" />

        <ol role="list" className="steps">
          {firstSession.steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="step" delay={i * 90}>
              <span className="step__n display" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="step__title">{s.title}</h3>
              <p className="soft">{s.text}</p>
            </Reveal>
          ))}
        </ol>

        <div className="feature">
          <RealClip video="real-coaching" ratio="3 / 4" className="feature__clip" focus="50% 45%" />
          <div className="feature__body">
            <SectionTitle kicker={inSession.kicker} lines={inSession.title} as="h3" />
            <p className="lead soft">{inSession.text}</p>
            <ul role="list" className="feature__points">
              {inSession.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <a className="btn" href="#contacto">
              {inSession.cta} <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
