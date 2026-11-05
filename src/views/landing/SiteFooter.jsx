import Mark from '../../components/Mark.jsx';
import SocialIcon from '../../components/SocialIcon.jsx';
import { socials } from '../../content/socials.js';
import { useContent } from '../../i18n.jsx';

export default function SiteFooter() {
  const { footer, nav, ui } = useContent();
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <Mark className="site-footer__logo" label="Tomás Queiroz" />
        <div className="site-footer__info">
          <p>{footer.line}</p>
          <nav aria-label={ui.navFooter}>
            <ul role="list">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="#contacto">{ui.contactLink}</a>
              </li>
            </ul>
          </nav>
          <ul role="list" className="socials" aria-label="Social">
            {socials.map((s) => (
              <li key={s.id}>
                {s.url ? (
                  <a
                    className="socials__btn"
                    href={s.url}
                    aria-label={s.label}
                    {...(s.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <SocialIcon id={s.id} />
                  </a>
                ) : (
                  <span className="socials__btn is-pending" role="img" aria-label={`${s.label}: ${ui.soon}`} title={`${s.label} · ${ui.soon}`}>
                    <SocialIcon id={s.id} />
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="site-footer__small">© {new Date().getFullYear()} Tomás Queiroz · Lisboa</p>
        </div>
      </div>
    </footer>
  );
}
