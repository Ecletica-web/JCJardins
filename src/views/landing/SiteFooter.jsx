import Wordmark from '../../components/Wordmark.jsx';
import Mark from '../../components/Mark.jsx';
import { useContent } from '../../i18n.jsx';

export default function SiteFooter() {
  const { footer, nav, ui } = useContent();
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div className="site-footer__brand">
          <Mark className="site-footer__logo" />
          <Wordmark layout="stacked" className="site-footer__mark" />
        </div>
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
          <p className="site-footer__small">© {new Date().getFullYear()} Tomás Queiroz · Lisboa</p>
        </div>
      </div>
    </footer>
  );
}
