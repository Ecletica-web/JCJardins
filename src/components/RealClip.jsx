import { useEffect, useRef, useState } from 'react';
import { usePrototype } from '../prototype.jsx';

/* Real footage of Tomás holding pads (muted loop, brand grade).
   PROTOTYPE ONLY until the other athlete in the clip gives consent.
   Does not autoplay when the viewer prefers reduced motion. */

const base = import.meta.env.BASE_URL;

export default function RealClip({ ratio = '4 / 5', className = '' }) {
  const { showLabels } = usePrototype();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className={`photo real-clip ${className}`} style={{ aspectRatio: ratio }}>
      <video
        ref={videoRef}
        className="real-clip__video"
        src={`${base}video/real-padwork.mp4`}
        poster={`${base}video/real-padwork-poster.jpg`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Vídeo: o Tomás segura os pads enquanto um atleta treina combinações."
      />
      {showLabels && (
        <span className="proto-chip proto-chip--real photo__ref" aria-hidden="true">
          Real footage of Tomás · athlete consent pending
        </span>
      )}
      <button
        type="button"
        className="real-clip__toggle"
        onClick={toggle}
        aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}
      >
        <span aria-hidden="true">{playing ? '❚❚' : '▶'}</span>
      </button>
      <span className="photo__grain" aria-hidden="true" />
    </figure>
  );
}
