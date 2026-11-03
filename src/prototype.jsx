import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/* Prototype-only state: which view is open and whether image labels show.
   Kept apart from the customer-facing components on purpose. */

const PrototypeContext = createContext(null);

export const VIEWS = {
  landing: 'landing',
  brand: 'marca',
};

/* Views are addressed by a plain #name so links survive hosts that only
   pass the hash (e.g. a published artifact). #marca opens the brand view;
   any brand-section anchor keeps it open; landing anchors return to the site.
   The older ?vista=marca query still works. */
const BRAND_IDS = new Set(['marca', 'wordmark', 'type', 'colour', 'photo', 'shot-list', 'layouts', 'feed', 'stories']);
const LANDING_IDS = new Set(['topo', 'treino', 'sobre', 'primeira-sessao', 'formatos', 'locais', 'contacto']);

function readView(current = VIEWS.landing) {
  const id = window.location.hash.replace('#', '');
  if (BRAND_IDS.has(id)) return VIEWS.brand;
  if (LANDING_IDS.has(id)) return VIEWS.landing;
  try {
    if (new URLSearchParams(window.location.search).get('vista') === VIEWS.brand) return VIEWS.brand;
  } catch {
    /* no query available */
  }
  return current;
}

function readLabels() {
  try {
    return window.localStorage.getItem('tq-proto-labels') !== 'off';
  } catch {
    return true;
  }
}

export function PrototypeProvider({ children }) {
  const [view, setViewState] = useState(() => readView());
  const [showLabels, setShowLabelsState] = useState(readLabels);

  useEffect(() => {
    const onHash = () => setViewState((current) => readView(current));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const setView = useCallback((next, hash = '') => {
    const id = hash ? hash.replace('#', '') : next === VIEWS.brand ? 'marca' : 'topo';
    setViewState(next);
    if (window.location.hash !== `#${id}`) window.location.hash = id;
    requestAnimationFrame(() => {
      const target = hash ? document.getElementById(id) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
      document.getElementById('conteudo')?.focus({ preventScroll: true });
    });
  }, []);

  const setShowLabels = useCallback((value) => {
    setShowLabelsState(value);
    try {
      window.localStorage.setItem('tq-proto-labels', value ? 'on' : 'off');
    } catch {
      /* storage unavailable — labels still toggle for this visit */
    }
  }, []);

  const value = useMemo(
    () => ({ view, setView, showLabels, setShowLabels }),
    [view, setView, showLabels, setShowLabels],
  );

  return <PrototypeContext.Provider value={value}>{children}</PrototypeContext.Provider>;
}

export function usePrototype() {
  const ctx = useContext(PrototypeContext);
  if (!ctx) throw new Error('usePrototype must be used inside PrototypeProvider');
  return ctx;
}
