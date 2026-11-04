import { useContent, useLang } from '../i18n.jsx';

/* PT / EN switch. Two tracked-caps buttons; the active one is marked
   with aria-pressed and a hairline underline. */
export default function LangToggle({ className = '' }) {
  const { lang, setLang } = useLang();
  const { ui } = useContent();
  const options = [
    { code: 'pt', short: ui.lang.pt, name: ui.lang.ptName, hreflang: 'pt-PT' },
    { code: 'en', short: ui.lang.en, name: ui.lang.enName, hreflang: 'en' },
  ];
  return (
    <div className={`lang-toggle ${className}`} role="group" aria-label={ui.lang.label}>
      {options.map((o, i) => (
        <span key={o.code} className="lang-toggle__item">
          {i > 0 && (
            <span className="lang-toggle__sep" aria-hidden="true">
              /
            </span>
          )}
          <button
            type="button"
            className="lang-toggle__btn"
            aria-pressed={lang === o.code}
            lang={o.hreflang}
            title={o.name}
            onClick={() => setLang(o.code)}
          >
            <span aria-hidden="true">{o.short}</span>
            <span className="visually-hidden">{o.name}</span>
          </button>
        </span>
      ))}
    </div>
  );
}
