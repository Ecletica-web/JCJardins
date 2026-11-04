import { useEffect, useRef, useState } from 'react';
import { usePrototype } from '../prototype.jsx';
import { useContent } from '../i18n.jsx';

/* Real footage of Tomás, muted black-and-white loops.
   Plays only while on screen, never autoplays under reduced motion,
   and always has a pause/play button. */

const base = import.meta.env.BASE_URL;

export const clips = {
  'real-padwork': 'Vídeo: o Tomás segura os pads enquanto um atleta treina combinações.',
  'real-bagwork': 'Vídeo: o Tomás treina pontapés e socos no saco pesado.',
  'real-coaching': 'Vídeo: o Tomás segura os pads para uma aluna durante uma sessão.',
};

export default function RealClip({ video = 'real-padwork', ratio = '4 / 5', className = '', label = true, focus }) {
  const { showLabels } = usePrototype();
  const { ui } = useContent();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!('IntersectionObserver' in window)) {
      v.play().then(() => setPlaying(true)).catch(() => {});
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused) {
          v.play().then(() => setPlaying(true)).catch(() => {});
        } else if (!entry.isIntersecting && !v.paused) {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [userPaused]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      setUserPaused(false);
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      setUserPaused(true);
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className={`photo real-clip ${className}`} style={{ aspectRatio: ratio }}>
      <video
        ref={videoRef}
        className="real-clip__video"
        src={`${base}video/${video}.mp4`}
        poster={`${base}video/${video}-poster.jpg`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={ui.video[video] || clips[video]}
        style={focus ? { objectPosition: focus } : undefined}
      />
      {showLabels && label && (
        <span className="proto-chip proto-chip--real photo__ref" aria-hidden="true">
          Real footage of Tomás
        </span>
      )}
      <button
        type="button"
        className="real-clip__toggle"
        onClick={toggle}
        aria-label={playing ? ui.video.pause : ui.video.play}
      >
        <span aria-hidden="true">{playing ? '❚❚' : '▶'}</span>
      </button>
      <span className="photo__grain" aria-hidden="true" />
    </figure>
  );
}
