import { useEffect, useState } from 'react';
import { useContent } from '../i18n.jsx';

/* Progress + swipe cue for a horizontal card strip (mobile).
   Tracks which card is centred and lets you tap a segment to go there.
   Rendered only where the strip actually scrolls (CSS hides it on wide
   screens, where the same list is a grid). */

export function useStrip(ref, count) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const items = el.children;
      if (!items.length) return;
      const centre = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let dist = Infinity;
      for (let i = 0; i < items.length; i += 1) {
        const c = items[i].offsetLeft + items[i].offsetWidth / 2;
        const d = Math.abs(c - centre);
        if (d < dist) {
          dist = d;
          best = i;
        }
      }
      setIndex(best);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      el.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [ref, count]);

  const goTo = (i) => {
    const el = ref.current;
    const item = el?.children[i];
    if (!el || !item) return;
    el.scrollTo({ left: item.offsetLeft - (el.clientWidth - item.offsetWidth) / 2, behavior: 'smooth' });
  };

  return { index, goTo };
}

export default function StripNav({ count, index, goTo, labels = [] }) {
  const { ui } = useContent();
  return (
    <div className="strip-nav" aria-hidden={count < 2 ? true : undefined}>
      <span className="strip-nav__hint">
        {ui.swipe}
        <span className="strip-nav__arrow" aria-hidden="true">
          →
        </span>
      </span>
      <div className="strip-nav__segs" role="tablist" aria-label={ui.swipe}>
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            className={`strip-nav__seg ${i === index ? 'is-active' : ''}`}
            aria-selected={i === index}
            aria-label={labels[i] || String(i + 1)}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
      <span className="strip-nav__count" aria-hidden="true">
        {String(index + 1).padStart(2, '0')} <span>/ {String(count).padStart(2, '0')}</span>
      </span>
    </div>
  );
}
