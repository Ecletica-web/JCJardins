import Photo from '../../components/Photo.jsx';
import { useContent } from '../../i18n.jsx';

export default function Interlude() {
  const { interlude, ui } = useContent();
  return (
    <section className="interlude on-dark" aria-label={ui.interludeLabel}>
      <Photo image="pinesMist" ratio="auto" className="interlude__photo parallax" sizes="100vw" eager />
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
