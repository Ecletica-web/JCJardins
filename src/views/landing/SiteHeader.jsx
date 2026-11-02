import { useEffect, useRef, useState } from 'react';
import Wordmark from '../../components/Wordmark.jsx';
import { nav } from '../../content/landing.js';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector('a')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 64rem)');
    const close = () => mq.matches && setOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="site-header__bar wrap">
        <a className="site-header__home" href="#topo" aria-label="Tomás Queiroz — início">
          <Wordmark layout="inline" />
        </a>

        <nav className="site-nav" aria-label="Principal">
          <ul role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--small site-header__cta" href="#contacto">
          Pedir uma sessão
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-movel"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-toggle__label">{open ? 'Fechar' : 'Menu'}</span>
          <span className="menu-toggle__icon" aria-hidden="true" />
        </button>
      </div>

      <div id="menu-movel" className="mobile-menu" ref={menuRef} hidden={!open}>
        <nav aria-label="Menu móvel">
          <ul role="list">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  <span className="mobile-menu__n">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn mobile-menu__cta" href="#contacto" onClick={() => setOpen(false)}>
          Pedir uma sessão <span className="btn__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
