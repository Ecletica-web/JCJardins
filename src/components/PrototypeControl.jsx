import { useEffect, useId, useRef, useState } from 'react';
import { usePrototype, VIEWS } from '../prototype.jsx';

/* Discreet prototype navigation. Lives outside <main>, uses its own neutral
   styling so nobody mistakes it for part of Tomás's website. */

export default function PrototypeControl() {
  const { view, setView, showLabels, setShowLabels } = usePrototype();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (!panelRef.current?.contains(e.target) && !buttonRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    panelRef.current?.querySelector('button, input')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
    };
  }, [open]);

  const go = (next, hash) => {
    setOpen(false);
    setView(next, hash);
  };

  return (
    <aside className="proto" aria-label="Prototype controls">
      {open && (
        <div className="proto__panel" id={panelId} ref={panelRef}>
          <p className="proto__title">Prototype · v0.1</p>

          <fieldset className="proto__group">
            <legend>View</legend>
            <button
              type="button"
              className="proto__option"
              aria-pressed={view === VIEWS.landing}
              onClick={() => go(VIEWS.landing)}
            >
              1 · Landing page
            </button>
            <button
              type="button"
              className="proto__option"
              aria-pressed={view === VIEWS.brand}
              onClick={() => go(VIEWS.brand)}
            >
              2 · Brand &amp; Instagram
            </button>
          </fieldset>

          <label className="proto__switch">
            <input type="checkbox" checked={showLabels} onChange={(e) => setShowLabels(e.target.checked)} />
            <span>Show image labels &amp; shot briefs</span>
          </label>

          <ul className="proto__notes">
            <li>
              <b>Reference</b> images are licensed Pexels stock for tone only — the people are not Tomás or
              clients.
            </li>
            <li>
              <b>Photo to shoot</b> frames mark images that must show Tomás.
            </li>
            <li>The enquiry form is local only. Nothing is sent.</li>
          </ul>

          <button type="button" className="proto__link" onClick={() => go(VIEWS.brand, '#shot-list')}>
            Open shot list &amp; image sources →
          </button>
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        className="proto__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="proto__dot" aria-hidden="true" />
        Prototype
        <span className="proto__current">{view === VIEWS.brand ? 'Brand' : 'Landing'}</span>
      </button>
    </aside>
  );
}
