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
          const parts = slanted ? [line] : line.split(/(\*[^*]+\*)/).filter(Boolean);
          return (
            <span key={i} className="rise__mask">
              <span className={`br rise__item ${slanted ? 'slant' : ''}`} style={{ '--i': i + 1 }}>
                {parts.map((part, j) =>
                  part.startsWith('*') && part.endsWith('*') ? (
                    <span key={j} className="slant">
                      {part.slice(1, -1)}
                    </span>
                  ) : (
                    part
                  ),
                )}
                {i < lines.length - 1 ? ' ' : ''}
              </span>
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
