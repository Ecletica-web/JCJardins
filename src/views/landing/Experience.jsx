import Photo from '../../components/Photo.jsx';
import RealClip from '../../components/RealClip.jsx';
import { Reveal } from '../../components/useReveal.jsx';
import RevealCard from '../../components/RevealCard.jsx';
import SectionTitle from './SectionTitle.jsx';
import { useContent } from '../../i18n.jsx';

export default function Experience() {
  const { experience, ui } = useContent();
  return (
    <section className="section experience on-dark" id="treino" aria-labelledby="treino-title">
      <div className="wrap">
        <div className="experience__head">
          <SectionTitle id="treino-title" kicker={experience.kicker} lines={experience.title} />
          <p className="lead soft experience__intro">{experience.intro}</p>
        </div>

        <ol role="list" className="pillars">
          {experience.pillars.map((p, i) => (
            <Reveal as="li" key={p.n} className={`pillar pillar--${i + 1}`} delay={i % 2 ? 120 : 0}>
              <RevealCard
                marker={p.n}
                title={p.title}
                media={
                  p.video ? (
                    <RealClip video={p.video} ratio={i % 3 === 0 ? '4 / 5' : '3 / 4'} focus={p.focus} />
                  ) : (
                    <Photo image={p.image} ratio={i % 3 === 0 ? '4 / 5' : '3 / 4'} sizes="(min-width: 64rem) 40vw, 100vw" />
                  )
                }
              >
                <p>{p.text}</p>
              </RevealCard>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
