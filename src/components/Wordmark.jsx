/* Tomás Queiroz wordmark
   ----------------------
   • Wide, quiet capitals (Archivo at 125 % width).
   • TOMÁS in medium weight; QUEIROZ lighter and stepped half an em forward,
     the movement of a single step in.
   • The acute accent on the Á is one fine sage stroke — the only colour
     in the mark.
   The visible letters are decorative; assistive tech reads the label. */

export default function Wordmark({
  layout = 'stacked',
  tone = 'light',
  as: Tag = 'span',
  className = '',
  size,
  descriptor,
}) {
  const style = size ? { fontSize: size } : undefined;
  const label = descriptor ? `Tomás Queiroz ${descriptor}` : 'Tomás Queiroz';
  const name = (
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

  if (!descriptor) {
    return (
      <Tag className={`wordmark wordmark--${layout} wordmark--${tone} ${className}`} style={style} role="img" aria-label={label}>
        {name}
      </Tag>
    );
  }

  /* Lockup: the name with a small, widely tracked descriptor centred
     underneath (e.g. KICKBOXING), as on the towels. */
  return (
    <Tag className={`wordmark-lockup wordmark-lockup--${layout} wordmark-lockup--${tone} ${className}`} style={style} role="img" aria-label={label}>
      <span className={`wordmark wordmark--${layout} wordmark--${tone}`}>{name}</span>
      <span className="wordmark-lockup__line" aria-hidden="true">
        <span className="wordmark-lockup__descriptor">{descriptor}</span>
      </span>
    </Tag>
  );
}

/* Secondary monogram — for avatars, favicons and tight spaces only. */
export function Monogram({ tone = 'light', className = '', size }) {
  const style = size ? { fontSize: size } : undefined;
  return (
    <span className={`monogram monogram--${tone} ${className}`} style={style} role="img" aria-label="TQ — monograma Tomás Queiroz">
      <span className="monogram__t" aria-hidden="true">
        T<span className="wordmark__acute monogram__acute" />
      </span>
      <span className="monogram__q" aria-hidden="true">
        Q
      </span>
    </span>
  );
}
