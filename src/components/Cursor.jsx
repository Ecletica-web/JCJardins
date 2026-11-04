import { useEffect, useRef } from 'react';

/* A small ring that trails the pointer and swells over anything
   clickable; over media cards it shows a "+". Pointer devices only,
   never under reduced motion. The native cursor stays. */

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia?.('(pointer: fine)').matches;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const el = ref.current;
    if (!fine || reduce || !el) return undefined;

    let x = -100;
    let y = -100;
    let tx = x;
    let ty = y;
    let raf = 0;
    let shown = false;

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = window.requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        shown = true;
        x = tx;
        y = ty;
        el.classList.add('is-on');
      }
      const t = e.target instanceof Element ? e.target : null;
      const card = t?.closest('.rcard');
      const hit = t?.closest('a, button, [role="button"], input, textarea, label, .slides__stage');
      el.classList.toggle('is-hit', !!hit && !card);
      el.classList.toggle('is-card', !!card);
    };
    const onLeave = () => el.classList.remove('is-on');
    const onEnter = () => shown && el.classList.add('is-on');
    const onDown = () => el.classList.add('is-down');
    const onUp = () => el.classList.remove('is-down');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    raf = window.requestAnimationFrame(loop);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" aria-hidden="true">
      <span className="cursor__ring" />
      <span className="cursor__plus" />
    </div>
  );
}
