import Wordmark from '../../components/Wordmark.jsx';
import { footer, nav } from '../../content/landing.js';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <Wordmark layout="stacked" className="site-footer__mark" />
        <div className="site-footer__info">
          <p>{footer.line}</p>
          <nav aria-label="Rodapé">
            <ul role="list">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>
          <p className="site-footer__small">© {new Date().getFullYear()} Tomás Queiroz · Lisboa</p>
        </div>
      </div>
    </footer>
  );
}
