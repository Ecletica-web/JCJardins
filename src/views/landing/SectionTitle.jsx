/* Kicker + headline with deliberate line breaks.
   `lines` is an array; each entry becomes its own line. Lines wrapped in
   *asterisks* are set in the slanted italic. */
export default function SectionTitle({ id, kicker, lines, as: Tag = 'h2', className = '' }) {
  return (
    <div className={`section-title ${className}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <Tag id={id} className={Tag === 'h1' ? 'h1' : 'h2'}>
        {lines.map((line, i) => {
          const slanted = line.startsWith('*') && line.endsWith('*');
          const text = slanted ? line.slice(1, -1) : line;
          return (
            <span key={i} className={`br ${slanted ? 'slant' : ''}`}>
              {text}
              {i < lines.length - 1 ? ' ' : ''}
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
