import useReveal from '../../components/useReveal.jsx';

/* Kicker + headline with deliberate line breaks.
   `lines` is an array; each entry becomes its own line. Lines wrapped in
   *asterisks* are set in the slanted italic. Each line rises into view
   from below when the title enters the screen (staggered). */
export default function SectionTitle({ id, kicker, lines, as: Tag = 'h2', className = '' }) {
  const [ref, visible] = useReveal({ threshold: 0.2 });
  return (
    <div ref={ref} className={`section-title rise ${visible ? 'is-visible' : ''} ${className}`}>
      {kicker && (
        <p className="kicker rise__item" style={{ '--i': 0 }}>
          {kicker}
        </p>
      )}
      <Tag id={id} className={Tag === 'h1' ? 'h1' : 'h2'}>
        {lines.map((line, i) => {
          const slanted = line.startsWith('*') && line.endsWith('*');
          const text = slanted ? line.slice(1, -1) : line;
          return (
            <span key={i} className="rise__mask">
              <span className={`br rise__item ${slanted ? 'slant' : ''}`} style={{ '--i': i + 1 }}>
                {text}
                {i < lines.length - 1 ? ' ' : ''}
              </span>
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
