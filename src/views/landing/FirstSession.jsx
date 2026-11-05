import { useState } from 'react';
import Photo from '../../components/Photo.jsx';
import RealClip from '../../components/RealClip.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

/* Day one: the garden kick as a full-bleed backdrop, the title and one
   line, and the four steps as a quiet line. From tablet up the "in session"
   clip and the booking button sit on the same photo (top right). On phones
   the backdrop swipes from the photo to the clip, and the button sits
   under the four steps. */
export default function FirstSession() {
  const { firstSession, inSession, ui } = useContent();
  const [slide, setSlide] = useState(0);
  const onScroll = (e) => {
    const el = e.currentTarget;
    setSlide(Math.round(el.scrollLeft / Math.max(1, el.clientWidth)));
  };
  return (
    <section className="first on-dark" id="primeira-sessao" aria-labelledby="primeira-title">
      <div className="stage stage--tall">
        <div className="first__media">
          <div className="first__track" onScroll={onScroll} aria-label={ui.slidesLabel}>
            <div className="first__slide">
              <Photo image="tomasKickGarden" ratio="auto" className="stage__photo parallax" sizes="100vw" eager focus="45% 14%" />
            </div>
            <div className="first__slide first__slide--clip">
              <RealClip video="real-coaching" ratio="auto" focus="50% 40%" label={false} />
            </div>
          </div>
          <div className="first__dots" aria-hidden="true">
            <span className={slide === 0 ? 'is-active' : ''} />
            <span className={slide === 1 ? 'is-active' : ''} />
          </div>
        </div>
        <div className="stage__shade" aria-hidden="true" />
        <div className="stage__body wrap">
          <div className="first__session">
            <div className="first__clip">
              <RealClip video="real-coaching" ratio="3 / 4" className="first__clip-video" focus="50% 45%" />
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
          <a className="btn first__cta" href="#contacto">
            {inSession.cta} <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
