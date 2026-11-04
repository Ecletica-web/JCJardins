import { useId, useState } from 'react';
import { useContent } from '../i18n.jsx';

/* Media card: title sits on the image; clicking (or tapping) slides a
   panel up over the image with the details. Hover lifts the card. */
export default function RevealCard({ media, marker, title, children, className = '' }) {
  const [open, setOpen] = useState(false);
  const { ui } = useContent();
  const id = useId();
  return (
    <article className={`rcard ${open ? 'is-open' : ''} ${className}`}>
      <div className="rcard__media">{media}</div>
      <div className="rcard__panel" id={`${id}-panel`} inert={!open}>
        <div className="rcard__panel-inner">{children}</div>
      </div>
      <h3 className="rcard__heading">
        <button
          type="button"
          className="rcard__trigger"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((v) => !v)}
        >
          {marker && (
            <span className="rcard__marker" aria-hidden="true">
              {marker}
            </span>
          )}
          <span className="rcard__title">{title}</span>
          <span className="rcard__hint" aria-hidden="true">
            {open ? ui.less : ui.more}
          </span>
          <span className="rcard__icon" aria-hidden="true" />
        </button>
      </h3>
    </article>
  );
}
