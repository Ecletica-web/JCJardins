import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Wordmark from './Wordmark.jsx';
import { Q_PATH, T_PATH } from './Mark.jsx';
import { useContent } from '../i18n.jsx';

/* Opening sequence: the TQ mark alone in the centre; its two strokes then
   fly apart, the T bar stretching into TOMÁS and the Q hook into QUEIROZ,
   as the letters land in their place. Then the veil lifts. Plays once per visit, never under reduced
   motion. The page underneath is fully rendered the whole time. */

const KEY = 'tq-intro-seen';
const LENGTH = 3300;

function shouldPlay() {
  try {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
    return window.sessionStorage.getItem(KEY) !== '1';
  } catch {
    return false;
  }
}

export default function Intro() {
  const [stage, setStage] = useState(() => (shouldPlay() ? 'in' : 'done'));
  const { ui } = useContent();
  const rootRef = useRef(null);

  // measure where each stroke has to travel: the T bar onto the TOMÁS
  // line, the Q hook onto the QUEIROZ line
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const pairs = [
      ['.intro__stroke--t', '.wordmark__first'],
      ['.intro__stroke--q', '.wordmark__last'],
    ];
    for (const [strokeSel, lineSel] of pairs) {
      const svg = root.querySelector(strokeSel);
      const line = root.querySelector(`.intro__mark ${lineSel}`);
      if (!svg || !line) continue;
      const box = svg.getBoundingClientRect();
      const part = svg.querySelector('path').getBoundingClientRect();
      const to = line.getBoundingClientRect();
      const capH = to.height * 0.62; // cap height of the line, roughly
      svg.style.transformOrigin = `${part.left - box.left + part.width / 2}px ${part.top - box.top + part.height / 2}px`;
      svg.style.setProperty('--dx', `${to.left + to.width / 2 - (part.left + part.width / 2)}px`);
      svg.style.setProperty('--dy', `${to.top + to.height / 2 - (part.top + part.height / 2)}px`);
      svg.style.setProperty('--sx', `${to.width / part.width}`);
      svg.style.setProperty('--sy', `${capH / part.height}`);
    }
  }, []);

  useEffect(() => {
    if (stage === 'done') return undefined; // decided at mount: no intro
    const html = document.documentElement;
    html.classList.add('is-intro');
    // the veil lifts, and the hero's own entrance starts while it does
    const lift = window.setTimeout(() => {
      setStage('out');
      html.classList.remove('is-intro');
    }, LENGTH);
    const done = window.setTimeout(() => {
      setStage('done');
      try {
        window.sessionStorage.setItem(KEY, '1');
      } catch {
        /* fine */
      }
    }, LENGTH + 900);
    return () => {
      window.clearTimeout(lift);
      window.clearTimeout(done);
      html.classList.remove('is-intro');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (stage === 'done') return null;
  return (
    <div className={`intro intro--${stage}`} aria-hidden="true" ref={rootRef}>
      <div className="intro__stack">
        <Wordmark layout="stacked" descriptor={ui.descriptor} letters className="intro__mark" />
        <div className="intro__logo">
          <svg className="intro__stroke intro__stroke--t" viewBox="0 0 895 774" focusable="false">
            <path d={T_PATH} fill="currentColor" />
          </svg>
          <svg className="intro__stroke intro__stroke--q" viewBox="0 0 895 774" focusable="false">
            <path d={Q_PATH} fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}
