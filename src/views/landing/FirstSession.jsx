import Photo from '../../components/Photo.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

/* Day one: the misty pines as a full-bleed backdrop, the title and one
   line, and the four steps as a quiet line. */
export default function FirstSession() {
  const { firstSession } = useContent();
  return (
    <section className="first on-dark" id="primeira-sessao" aria-labelledby="primeira-title">
      <div className="stage stage--tall">
        <Photo image="pinesMist" ratio="auto" className="stage__photo parallax" sizes="100vw" eager />
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
    </section>
  );
}
