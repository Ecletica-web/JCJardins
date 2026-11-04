import Photo from '../../components/Photo.jsx';
import { useContent } from '../../i18n.jsx';

/* A loose, quiet phrase over a dark full-bleed black-and-white image.
   Used sparingly between sections: the brand's "secretive" voice. */
export default function Statement({ which }) {
  const { statements } = useContent();
  const st = statements[which];
  if (!st) return null;
  return (
    <section className={`statement statement--${which} on-dark`} aria-label={st.lines.map((l) => l.replace(/\*/g, '')).join(' ')}>
      <Photo image={st.image} ratio="auto" className="statement__photo" sizes="100vw" label={which !== 'intro'} />
      <div className="statement__shade" aria-hidden="true" />
      <p className="statement__lines wrap" aria-hidden="true">
        {st.lines.map((line, i) => {
          const slanted = line.startsWith('*') && line.endsWith('*');
          return (
            <span key={i} className={`br ${slanted ? 'statement__accent' : ''}`}>
              {slanted ? line.slice(1, -1) : line}{' '}
            </span>
          );
        })}
      </p>
    </section>
  );
}
