import { useCallback, useEffect, useRef, useState } from 'react';
import Photo from '../../components/Photo.jsx';
import { getImage } from '../../content/images.js';
import Disclosure from '../../components/Disclosure.jsx';
import { useContent } from '../../i18n.jsx';

/* Origin: the splits photo as a full-screen wallpaper. At its lower edge,
   a slider of the four training/competition photos (one at a time, slow
   crossfade, swipe or arrows). Under that, the "Origin story" row, which
   opens the story over the photo. */

const DURATION = 5000;

function Slider({ images, label, prev, next }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const swipe = useRef(null);
  const count = images.length;
  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    setReduce(!!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (paused || reduce) return undefined;
    const t = window.setTimeout(() => go(index + 1), DURATION);
    return () => window.clearTimeout(t);
  }, [paused, reduce, index, go]);

  return (
    <div
      className="oslider"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(e) => {
        swipe.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerUp={(e) => {
        const s = swipe.current;
        swipe.current = null;
        if (!s) return;
        const dx = e.clientX - s.x;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(e.clientY - s.y)) go(dx < 0 ? index + 1 : index - 1);
      }}
    >
      <div className="oslider__stage">
        {images.map((key, i) => (
          <div key={key} className={`oslider__slide ${i === index ? 'is-active' : ''}`} aria-hidden={i !== index}>
            <img className="oslider__backdrop" src={getImage(key)?.src} alt="" aria-hidden="true" />
            <Photo image={key} ratio="auto" className="oslider__photo" label={false} sizes="(min-width: 64rem) 50vw, 100vw" eager />
          </div>
        ))}
        <button type="button" className="oslider__btn oslider__btn--prev" onClick={() => go(index - 1)} aria-label={prev}>
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" className="oslider__btn oslider__btn--next" onClick={() => go(index + 1)} aria-label={next}>
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div className="oslider__dots" aria-hidden="true">
        {images.map((key, i) => (
          <span key={key} className={`oslider__dot ${i === index ? 'is-active' : ''}`} />
        ))}
      </div>
    </div>
  );
}

export default function Origin() {
  const { about, record, ui } = useContent();
  return (
    <section className="origin on-dark" id="sobre" aria-labelledby="sobre-title">
      <div className="origin__stage">
        <Photo image="tomasSplit" ratio="auto" className="origin__photo" sizes="100vw" eager focus="42% 0%" />
        <div className="origin__shade" aria-hidden="true" />

        <div className="origin__over">
          <h2 id="sobre-title" className="visually-hidden">
            {about.kicker}
          </h2>

          <div className="origin__slider wrap">
            <Slider images={record.photos.map((ph) => ph.image)} label={ui.slidesLabel} prev={ui.prev} next={ui.next} />
          </div>

          <div className="origin__row wrap">
            <Disclosure title={about.storyTitle} marker="01" className="disc--story disc--over">
              <div className="story">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="credentials">
                {about.credentials.map((c) => (
                  <div key={c.group} className="credentials__group">
                    <h4 className="credentials__title">{c.group}</h4>
                    <ul role="list" className="credentials__list">
                      {c.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Disclosure>
          </div>
        </div>
      </div>
    </section>
  );
}
