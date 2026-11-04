import { useId, useState } from 'react';

/* Expandable box: a clickable title row with a +/× icon; the body
   slides open (grid-rows 0fr → 1fr). Content stays in the DOM. */
export default function Disclosure({ title, marker, children, className = '', defaultOpen = false, as: Heading = 'h3' }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div className={`disc ${open ? 'is-open' : ''} ${className}`}>
      <Heading className="disc__heading">
        <button
          type="button"
          className="disc__trigger"
          aria-expanded={open}
          aria-controls={`${id}-body`}
          onClick={() => setOpen((v) => !v)}
        >
          {marker && (
            <span className="disc__marker" aria-hidden="true">
              {marker}
            </span>
          )}
          <span className="disc__title">{title}</span>
          <span className="disc__icon" aria-hidden="true" />
        </button>
      </Heading>
      <div className="disc__body" id={`${id}-body`} inert={!open}>
        <div className="disc__inner">{children}</div>
      </div>
    </div>
  );
}
