import { useCallback, useEffect, useRef, useState } from 'react';
import { getImage } from '../content/images.js';
import { useAlt, useContent } from '../i18n.jsx';

/* One photo at a time: slow crossfade with a gentle zoom, progress
   segments at the top, prev/next, counter. Autoplays (pauses on hover,
   focus or when off screen); no autoplay under reduced motion.
   Each photo is shown whole over a blurred, darkened copy of itself,
   so portrait and landscape images both fit without bad crops. */

const DURATION = 5000;

export default function Slideshow({ images, label, caption }) {
  const altFor = useAlt();
  const { ui } = useContent();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reduce, setReduce] = useState(false);
  const rootRef = useRef(null);
  const count = images.length;

  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    setReduce(!!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
    const node = rootRef.current;
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const playing = !paused && visible && !reduce;

  useEffect(() => {
    if (!playing) return undefined;
    const t = window.setTimeout(() => go(index + 1), DURATION);
    return () => window.clearTimeout(t);
  }, [playing, index, go]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(index - 1);
    }
  };

  return (
    <section
      ref={rootRef}
      className={`slides ${playing ? 'is-playing' : ''}`}
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setPaused(false)}
      onKeyDown={onKey}
    >
      <div className="slides__progress" aria-hidden="true">
        {images.map((key, i) => (
          <span key={key} className={`slides__seg ${i < index ? 'is-done' : ''} ${i === index ? 'is-active' : ''}`}>
            <span className="slides__fill" style={{ animationDuration: `${DURATION}ms` }} />
          </span>
        ))}
      </div>

      <div className="slides__stage" aria-live={playing ? 'off' : 'polite'}>
        {images.map((key, i) => {
          const img = getImage(key);
          if (!img) return null;
          const active = i === index;
          return (
            <figure
              key={key}
              className={`slides__slide ${active ? 'is-active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${count}`}
              aria-hidden={!active}
            >
              <img className="slides__backdrop" src={img.src} alt="" aria-hidden="true" loading="lazy" />
              <img className="slides__img" src={img.src} alt={altFor(key, img.alt)} loading={i === 0 ? 'eager' : 'lazy'} />
            </figure>
          );
        })}
        <span className="slides__grain photo__grain" aria-hidden="true" />
      </div>

      <div className="slides__bar">
        <p className="slides__caption">{caption}</p>
        <span className="slides__count" aria-hidden="true">
          {String(index + 1).padStart(2, '0')} <span>/ {String(count).padStart(2, '0')}</span>
        </span>
        <div className="slides__nav">
          <button type="button" className="slides__btn" onClick={() => go(index - 1)} aria-label={ui.prev}>
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className="slides__btn" onClick={() => go(index + 1)} aria-label={ui.next}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
