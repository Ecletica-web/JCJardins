import { useEffect, useState } from 'react';
import Wordmark from './Wordmark.jsx';
import { useContent } from '../i18n.jsx';

/* Opening sequence: black, the name letter by letter, then the veil
   lifts to reveal the page. Plays once per visit, never under reduced
   motion. The page underneath is fully rendered the whole time. */

const KEY = 'tq-intro-seen';
const LENGTH = 1900;

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
      <Wordmark layout="stacked" descriptor={ui.descriptor} letters className="intro__mark" />
    </div>
  );
}
