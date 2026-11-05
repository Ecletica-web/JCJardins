import { useEffect } from 'react';
import { PrototypeProvider, usePrototype, VIEWS } from './prototype.jsx';
import { LangProvider } from './i18n.jsx';
import LandingPage from './views/landing/LandingPage.jsx';
import BrandPreview from './views/brand/BrandPreview.jsx';

const SITE_TITLE = 'Tomás Queiroz · Private Boxing & Kickboxing Coach in Lisbon';

function Views() {
  const { view } = usePrototype();

  useEffect(() => {
    document.title =
      view === VIEWS.brand ? 'Tomás Queiroz · Marca' : SITE_TITLE;
  }, [view]);

  return (
    <>
      {view === VIEWS.brand ? <BrandPreview /> : <LandingPage />}
    </>
  );
}

export default function App() {
  return (
    <PrototypeProvider>
      <LangProvider>
        <Views />
      </LangProvider>
    </PrototypeProvider>
  );
}
