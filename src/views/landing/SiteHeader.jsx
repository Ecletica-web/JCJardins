import { useEffect, useRef, useState } from 'react';
import Wordmark from '../../components/Wordmark.jsx';
import Mark from '../../components/Mark.jsx';
import LangToggle from '../../components/LangToggle.jsx';
import { useContent } from '../../i18n.jsx';

export default function SiteHeader() {
  const { nav, ui } = useContent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // hide while scrolling down past the hero, show as soon as you scroll up
      if (y > last + 6 && y > 160) setHidden(true);
      else if (y < last - 6 || y < 80) setHidden(false);
      last = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
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
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''} ${open ? 'is-open' : ''}`}>
      <div className="site-header__bar wrap">
        <a className="site-header__home" href="#topo" aria-label={ui.home}>
          <Mark className="site-header__logo" />
          <Wordmark layout="inline" />
        </a>

        <nav className="site-nav" aria-label={ui.navMain}>
          <ul role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <LangToggle className="site-header__lang" />

        <a className="btn btn--small site-header__cta" href="#contacto">
          {ui.cta}
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-movel"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-toggle__label">{open ? ui.close : ui.menu}</span>
          <span className="menu-toggle__icon" aria-hidden="true" />
        </button>
      </div>

      <div id="menu-movel" className="mobile-menu" ref={menuRef} hidden={!open}>
        <nav aria-label={ui.navMobile}>
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
          {ui.cta} <span className="btn__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
