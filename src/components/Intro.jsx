import { useEffect, useState } from 'react';
import Wordmark from './Wordmark.jsx';
import Mark from './Mark.jsx';
import { useContent } from '../i18n.jsx';

/* Opening sequence: the TQ mark alone in the centre, held for a moment;
   it vanishes, and the name lands in its place letter by letter. Then
   the veil lifts. Plays once per visit, never under reduced
   motion. The page underneath is fully rendered the whole time. */

const KEY = 'tq-intro-seen';
const LENGTH = 4600;

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
    <div className={`intro intro--${stage}`} aria-hidden="true">
      <div className="intro__stack">
        <Wordmark layout="stacked" descriptor={ui.descriptor} letters className="intro__mark" />
        <Mark className="intro__logo" />
      </div>
    </div>
  );
}
