import { useEffect } from 'react';
import { PrototypeProvider, usePrototype, VIEWS } from './prototype.jsx';
import LandingPage from './views/landing/LandingPage.jsx';
import BrandPreview from './views/brand/BrandPreview.jsx';
import PrototypeControl from './components/PrototypeControl.jsx';

function Views() {
  const { view } = usePrototype();

  useEffect(() => {
    document.title =
      view === VIEWS.brand ? 'Tomás Queiroz · Marca' : 'Tomás Queiroz';
  }, [view]);

  return (
    <>
      {view === VIEWS.brand ? <BrandPreview /> : <LandingPage />}
      <PrototypeControl />
    </>
  );
}

export default function App() {
  return (
    <PrototypeProvider>
      <Views />
    </PrototypeProvider>
  );
}
