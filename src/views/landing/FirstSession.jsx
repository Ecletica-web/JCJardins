import Photo from '../../components/Photo.jsx';
import { Reveal } from '../../components/useReveal.jsx';
import SectionTitle from './SectionTitle.jsx';
import { firstSession } from '../../content/landing.js';

export default function FirstSession() {
  return (
    <section className="section first on-chalk" id="primeira-sessao" aria-labelledby="primeira-title">
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

        <div className="first__cta">
          <a className="btn" href="#contacto">
            Marcar a primeira sessão <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
