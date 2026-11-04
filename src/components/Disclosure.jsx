import { useEffect, useId, useRef, useState } from 'react';

/* Expandable box: a clickable title row with a +/× icon; the body
   slides open (grid-rows 0fr → 1fr). Content stays in the DOM. */
export default function Disclosure({ title, marker, children, className = '', defaultOpen = false, as: Heading = 'h3' }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const bodyRef = useRef(null);

  // "over" variant: the body hangs below its host, so tell the host how
  // much room to reserve (set as --story-h on the nearest .about__hero)
  useEffect(() => {
    if (!className.includes('disc--over')) return undefined;
    const body = bodyRef.current;
    const host = body?.closest('.about__hero');
    if (!body || !host) return undefined;
    const apply = () => host.style.setProperty('--story-h', open ? `${body.scrollHeight}px` : '0px');
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(body);
    return () => ro.disconnect();
  }, [open, className]);

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
      <div className="disc__body" id={`${id}-body`} inert={!open} ref={bodyRef}>
        <div className="disc__inner">{children}</div>
      </div>
    </div>
  );
}
