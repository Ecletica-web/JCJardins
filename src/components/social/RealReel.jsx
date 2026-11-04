import { useEffect, useRef, useState } from 'react';
import Wordmark from '../Wordmark.jsx';
import { usePrototype } from '../../prototype.jsx';

/* Reel example built from real footage of Tomás holding pads.
   Muted, looping, black and white, cropped to keep the gym's signage out. */

const base = import.meta.env.BASE_URL;

export default function RealReel() {
  const { showLabels } = usePrototype();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="post post--photo post--story real-reel" style={{ aspectRatio: '9 / 16' }}>
      <video
        ref={videoRef}
        className="real-reel__video"
        src={`${base}video/real-padwork.mp4`}
        poster={`${base}video/real-padwork-poster.jpg`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Vídeo: o Tomás segura os pads enquanto um atleta treina combinações."
      />
      <div className="post__shade" aria-hidden="true" />
      <div className="post__content">
        <span className="post__kicker">Reel · Pads</span>
        <span className="post__headline">
          <span className="br">Ritmo,</span>
          <span className="br">
            <span className="post__accent">sem pressa.</span>
          </span>
        </span>
      </div>
      <span className="post__sig">
        <Wordmark layout="inline" />
      </span>
      {showLabels && (
        <span className="proto-chip proto-chip--real photo__ref" aria-hidden="true">
          Real footage of Tomás
        </span>
      )}
      <button
        type="button"
        className="real-reel__toggle"
        onClick={toggle}
        aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}
      >
        <span aria-hidden="true">{playing ? '❚❚' : '▶'}</span>
      </button>
    </div>
  );
}
