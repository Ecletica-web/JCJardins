/* Slow endless strip of words. The track is duplicated so the loop is
   seamless; the copy is hidden from assistive tech. Pauses on hover and
   stands still under reduced motion. */
export default function Marquee({ items, label, className = '' }) {
  const track = (hidden) => (
    <ul role={hidden ? undefined : 'list'} className="marquee__track" aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <li key={`${it}-${i}`} className="marquee__item">
          <span>{it}</span>
          <span className="marquee__dot" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee ${className}`} aria-label={label}>
      <div className="marquee__inner">
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}
