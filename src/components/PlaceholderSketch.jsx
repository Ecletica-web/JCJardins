/* Art-directed placeholder drawing.
   Line sketches (never filled silhouettes) that show the intended
   composition, subject placement and light direction for a photo to shoot. */

const STROKE = 'currentColor';

function Standing({ x, y, s = 1, flip = false, holding = false, opacity = 0.62 }) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}
      fill="none"
      stroke={STROKE}
      strokeWidth={1.4 / s}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={opacity}
    >
      <circle cx="0" cy="-262" r="19" />
      <path d="M-27 -232 Q0 -240 27 -232 L21 -128 Q0 -122 -21 -128 Z" />
      {holding ? (
        <>
          <path d="M24 -226 L52 -214 L70 -226" />
          <path d="M-22 -224 L20 -196 L62 -204" />
          <rect x="66" y="-246" width="16" height="30" rx="7" />
          <rect x="58" y="-216" width="16" height="30" rx="7" />
        </>
      ) : (
        <>
          <path d="M24 -226 L46 -186 L42 -236" />
          <path d="M-22 -224 L6 -190 L20 -240" />
          <circle cx="42" cy="-242" r="9" />
          <circle cx="20" cy="-246" r="9" />
        </>
      )}
      <path d="M-15 -128 L-36 -64 L-44 0" />
      <path d="M15 -128 L34 -66 L50 0" />
    </g>
  );
}

function Seated({ x, y, s = 1, flip = false }) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}
      fill="none"
      stroke={STROKE}
      strokeWidth={1.4 / s}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.62"
    >
      <circle cx="0" cy="-168" r="19" />
      <path d="M-24 -138 Q0 -146 26 -138 L18 -48 L-20 -48 Z" />
      <path d="M-18 -48 L40 -60 L52 0" />
      <path d="M14 -48 L66 -40 L74 0" />
      <path d="M22 -130 L48 -88 L58 -66" />
      <path d="M-20 -128 L-34 -84 L-10 -64" />
    </g>
  );
}

const scenes = {
  single: () => <Standing x={210} y={470} s={1.45} />,
  motion: () => (
    <>
      <Standing x={200} y={470} s={1.45} />
      <g stroke={STROKE} strokeWidth="1.2" opacity="0.4" strokeLinecap="round">
        <line x1="250" y1="112" x2="330" y2="112" />
        <line x1="262" y1="124" x2="352" y2="124" />
        <line x1="242" y1="136" x2="312" y2="136" />
      </g>
    </>
  ),
  two: () => (
    <>
      <Standing x={140} y={470} s={1.32} />
      <Standing x={300} y={470} s={1.32} flip holding opacity={0.4} />
    </>
  ),
  three: () => (
    <>
      <Standing x={92} y={450} s={1} opacity={0.4} />
      <Standing x={200} y={460} s={1.12} />
      <Standing x={318} y={460} s={1.12} flip holding opacity={0.4} />
    </>
  ),
  seated: () => (
    <>
      <Seated x={120} y={420} s={1.2} />
      <Seated x={300} y={420} s={1.2} flip />
      <g fill="none" stroke={STROKE} strokeWidth="1.2" opacity="0.4">
        <rect x="188" y="392" width="28" height="22" rx="10" />
        <rect x="214" y="398" width="28" height="18" rx="9" />
      </g>
    </>
  ),
  detail: () => (
    <g fill="none" stroke={STROKE} strokeWidth="1.4" opacity="0.6" strokeLinecap="round">
      <rect x="70" y="150" width="110" height="160" rx="44" transform="rotate(-14 125 230)" />
      <rect x="92" y="176" width="66" height="104" rx="30" transform="rotate(-14 125 230)" opacity="0.6" />
      <circle cx="270" cy="330" r="62" />
      <path d="M232 280 Q270 210 308 280" />
      <circle cx="270" cy="160" r="34" />
      <circle cx="270" cy="160" r="20" opacity="0.6" />
      <path d="M100 400 Q200 370 330 420" strokeDasharray="5 6" />
    </g>
  ),
  wide: () => (
    <>
      <line x1="0" y1="380" x2="400" y2="380" stroke={STROKE} strokeWidth="1" opacity="0.35" />
      <Standing x={180} y={380} s={0.55} />
      <Standing x={235} y={380} s={0.55} flip holding opacity={0.4} />
    </>
  ),
};

export default function PlaceholderSketch({ variant = 'single' }) {
  const Scene = scenes[variant] ?? scenes.single;
  return (
    <svg className="sketch" viewBox="0 0 400 500" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
      <Scene />
    </svg>
  );
}
