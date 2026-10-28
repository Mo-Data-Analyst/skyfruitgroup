import { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { NAV_LINKS } from '../../data/navigation';
import useScrollSpy from '../../hooks/useScrollSpy';
import Icon from '../ui/Icon';
import logoMark from '../../assets/images/brand/logo-mark.webp';
import './Header.css';

const SECTION_IDS = ['top', ...NAV_LINKS.map((link) => link.id)];

export default function Header() {
  const { t, isEnglish, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-head${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap head-in">
        <a className="brand" href="#top" aria-label={t('brandAria')}>
          <img src={logoMark} alt="" width="40" height="46" />
          <span className="brand-name">
            <strong>{t('brand')}</strong>
            <span>{t('brandAlt')}</span>
          </span>
        </a>

        <nav
          className={`main-nav${menuOpen ? ' open' : ''}`}
          id="main-nav"
          aria-label={t('navAria')}
          onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} aria-current={activeId === link.id ? 'true' : undefined} onClick={closeMenu}>
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-cta">
            <a className="btn btn-primary" href="#quote" onClick={closeMenu}>
              {t('cQuote')}
            </a>
          </div>
        </nav>

        <div className="head-tools">
          <button
            className="lang-btn"
            type="button"
            onClick={toggleLanguage}
            aria-label={isEnglish ? 'التبديل إلى العربية' : 'Switch to English'}
          >
            <Icon name="globe" />
            <span className="lbl" lang={isEnglish ? 'ar' : 'en'}>
              {isEnglish ? 'العربية' : 'English'}
            </span>
          </button>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
            <span className="sr-only">{t(menuOpen ? 'close' : 'menu')}</span>
          </button>
          <a className="btn btn-primary head-cta" href="#quote">
            {t('cQuote')}
          </a>
        </div>
      </div>
    </header>
  );
}
