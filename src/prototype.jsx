import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/* Prototype-only state: which view is open and whether image labels show.
   Kept apart from the customer-facing components on purpose. */

const PrototypeContext = createContext(null);

export const VIEWS = {
  landing: 'landing',
  brand: 'marca',
};

function readView() {
  const params = new URLSearchParams(window.location.search);
  return params.get('vista') === VIEWS.brand ? VIEWS.brand : VIEWS.landing;
}

function readLabels() {
  try {
    return window.localStorage.getItem('tq-proto-labels') !== 'off';
  } catch {
    return true;
  }
}

export function PrototypeProvider({ children }) {
  const [view, setViewState] = useState(readView);
  const [showLabels, setShowLabelsState] = useState(readLabels);

  useEffect(() => {
    const onPop = () => setViewState(readView());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const setView = useCallback((next, hash = '') => {
    const url = new URL(window.location.href);
    if (next === VIEWS.brand) url.searchParams.set('vista', VIEWS.brand);
    else url.searchParams.delete('vista');
    url.hash = hash;
    window.history.pushState({}, '', url);
    setViewState(next);
    requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.replace('#', '')) : null;
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
