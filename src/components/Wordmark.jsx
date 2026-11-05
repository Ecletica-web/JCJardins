import Mark from './Mark.jsx';

/* Tomás Queiroz wordmark
   ----------------------
   • Wide, quiet capitals (Archivo at 125 % width).
   • TOMÁS in medium weight; QUEIROZ lighter and stepped half an em forward,
     the movement of a single step in.
   • The acute accent on the Á is one fine sage stroke — the only colour
     in the mark.
   The visible letters are decorative; assistive tech reads the label.
   `letters` wraps every character so the mark can animate in letter by
   letter (hero, intro). */

const FIRST = ['T', 'O', 'M', 'Á', 'S'];
const LAST = ['Q', 'U', 'E', 'I', 'R', 'O', 'Z'];

function Char({ ch, i }) {
  if (ch === 'Á') {
    return (
      <span className="wordmark__ch wordmark__a" style={{ '--i': i }}>
        A<span className="wordmark__acute" />
      </span>
    );
  }
  return (
    <span className="wordmark__ch" style={{ '--i': i }}>
      {ch}
    </span>
  );
}

export default function Wordmark({
  layout = 'stacked',
  tone = 'light',
  as: Tag = 'span',
  className = '',
  size,
  descriptor,
  letters = false,
}) {
  const style = size ? { fontSize: size } : undefined;
  const label = descriptor ? `Tomás Queiroz ${descriptor}` : 'Tomás Queiroz';
  const name = letters ? (
    <>
      <span className="wordmark__first" aria-hidden="true">
        {FIRST.map((ch, i) => (
          <Char key={i} ch={ch} i={i} />
        ))}
      </span>
      <span className="wordmark__last" aria-hidden="true">
        {LAST.map((ch, i) => (
          <Char key={i} ch={ch} i={i + FIRST.length} />
        ))}
      </span>
    </>
  ) : (
    <>
      <span className="wordmark__first" aria-hidden="true">
        TOM
        <span className="wordmark__a">
          A<span className="wordmark__acute" />
        </span>
        S
      </span>
      <span className="wordmark__last" aria-hidden="true">
        QUEIROZ
      </span>
    </>
  );
  const mod = letters ? 'wordmark--letters' : '';

  if (!descriptor) {
    return (
      <Tag className={`wordmark wordmark--${layout} wordmark--${tone} ${mod} ${className}`} style={style} role="img" aria-label={label}>
        {name}
      </Tag>
    );
  }

  /* Lockup: the name with a small, widely tracked descriptor centred
     underneath (e.g. KICKBOXING), as on the towels. */
  return (
    <Tag className={`wordmark-lockup wordmark-lockup--${layout} wordmark-lockup--${tone} ${className}`} style={style} role="img" aria-label={label}>
      <span className={`wordmark wordmark--${layout} wordmark--${tone} ${mod}`}>{name}</span>
      <span className="wordmark-lockup__line" aria-hidden="true">
        <span className="wordmark-lockup__descriptor" style={{ '--i': FIRST.length + LAST.length }}>
          {descriptor}
        </span>
      </span>
    </Tag>
  );
}

/* Secondary monogram — for avatars, favicons and tight spaces only. */
export function Monogram({ tone = 'light', className = '', size }) {
  const style = size ? { fontSize: size } : undefined;
  return (
    <span className={`monogram monogram--${tone} ${className}`} style={style}>
      <Mark label="TQ — monograma Tomás Queiroz" />
    </span>
  );
}
