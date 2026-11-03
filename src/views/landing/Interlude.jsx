import Photo from '../../components/Photo.jsx';
import { interlude } from '../../content/landing.js';

export default function Interlude() {
  return (
    <section className="interlude on-dark" aria-label="Repetição">
      <Photo image="pinesMist" ratio="auto" className="interlude__photo" sizes="100vw" />
      <div className="interlude__shade" aria-hidden="true" />
      <p className="interlude__lines display wrap">
        {interlude.lines.map((l, i) => (
          <span key={l} className={`br ${i === interlude.lines.length - 1 ? 'slant interlude__accent' : ''}`}>
            {l}{' '}
          </span>
        ))}
      </p>
    </section>
  );
}
