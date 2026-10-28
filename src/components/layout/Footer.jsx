import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { NAV_LINKS } from '../../data/navigation';
import { SERVICES } from '../../data/services';
import PrivacyDialog from '../ui/PrivacyDialog';
import logoMark from '../../assets/images/brand/logo-mark.webp';
import './Footer.css';

export default function Footer() {
  const { t, pick } = useLanguage();
  const privacyRef = useRef(null);
  const siteLinks = NAV_LINKS.filter((link) => link.id !== 'services');

  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <img src={logoMark} alt="" width="44" height="50" />
              <div>
                <strong>{t('brand')}</strong>
                <span>{t('brandAlt')}</span>
              </div>
            </div>
            <p>{t('footP')}</p>
          </div>

          <nav aria-labelledby="footer-site">
            <h2 id="footer-site">{t('fSite')}</h2>
            <ul>
              {siteLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{t(link.label)}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services">{t('nServices')}</h2>
            <ul>
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href={`#service-${service.id}`}>{pick(service.name)}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2>{t('nContact')}</h2>
            <p>{t('footContact')}</p>
            <a className="btn btn-primary" href="#quote">
              {t('cQuote')}
            </a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {t('brand')}
          </span>
          <button className="linkbtn" type="button" onClick={() => privacyRef.current?.showModal()}>
            {t('privacy')}
          </button>
        </div>
      </div>
      <PrivacyDialog ref={privacyRef} />
    </footer>
  );
}
