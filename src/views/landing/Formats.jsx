import Photo from '../../components/Photo.jsx';
import { Reveal } from '../../components/useReveal.jsx';
import RevealCard from '../../components/RevealCard.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

export default function Formats() {
  const { formats, ui } = useContent();
  return (
    <section className="section formats on-dark" id="formatos" aria-labelledby="formatos-title">
      <div className="wrap">
        <SectionTitle id="formatos-title" kicker={formats.kicker} lines={formats.title} />

        <div className="formats__grid">
          {formats.items.map((f, i) => (
            <Reveal key={f.name} className="format" delay={i * 120}>
              <RevealCard
                marker={String(i + 1).padStart(2, '0')}
                title={f.name}
                media={<Photo image={f.image} ratio="4 / 3" sizes="(min-width: 64rem) 45vw, 100vw" />}
              >
                <p>{f.text}</p>
                <ul role="list">
                  {f.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </RevealCard>
              <p className="format__tagline">{f.lead}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
