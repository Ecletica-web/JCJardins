import Photo from '../../components/Photo.jsx';
import useReveal from '../../components/useReveal.jsx';
import { useContent } from '../../i18n.jsx';

/* A loose, quiet phrase over a dark full-bleed black-and-white image.
   The image drifts slowly as you scroll; the lines rise one by one. */
export default function Statement({ which }) {
  const { statements } = useContent();
  const [ref, visible] = useReveal({ threshold: 0.35 });
  const st = statements[which];
  if (!st) return null;
  return (
    <section
      ref={ref}
      className={`statement statement--${which} on-dark rise ${visible ? 'is-visible' : ''}`}
      aria-label={st.lines.map((l) => l.replace(/\*/g, '')).join(' ')}
    >
      <Photo image={st.image} ratio="auto" className="statement__photo parallax" sizes="100vw" label={which !== 'intro'} />
      <div className="statement__shade" aria-hidden="true" />
      <p className="statement__lines wrap" aria-hidden="true">
        {st.lines.map((line, i) => {
          const slanted = line.startsWith('*') && line.endsWith('*');
          return (
            <span key={i} className="rise__mask">
              <span className={`br rise__item ${slanted ? 'statement__accent' : ''}`} style={{ '--i': i }}>
                {slanted ? line.slice(1, -1) : line}{' '}
              </span>
            </span>
          );
        })}
      </p>
    </section>
  );
}
