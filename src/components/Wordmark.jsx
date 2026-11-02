/* Tomás Queiroz wordmark
   ----------------------
   • TOMÁS sits upright and compressed — the guard, planted.
   • QUEIROZ is slanted and stepped forward — the strike, in motion.
   • The acute accent on the Á is drawn as a single rust stroke, cut at the
     same angle as the slant. It is the only colour in the mark.
   The visible letters are decorative; assistive tech reads the label. */

export default function Wordmark({ layout = 'stacked', tone = 'chalk', as: Tag = 'span', className = '', size }) {
  const style = size ? { fontSize: size } : undefined;
  return (
    <Tag
      className={`wordmark wordmark--${layout} wordmark--${tone} ${className}`}
      style={style}
      role="img"
      aria-label="Tomás Queiroz"
    >
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
    </Tag>
  );
}

/* Secondary monogram — for avatars, favicons and tight spaces only. */
export function Monogram({ tone = 'chalk', className = '', size }) {
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
