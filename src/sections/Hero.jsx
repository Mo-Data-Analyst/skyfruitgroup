import { useLanguage } from '../i18n/LanguageContext';
import Icon from '../components/ui/Icon';
import productionLine from '../assets/images/hero/hero-production-line.webp';
import mixedVegetables from '../assets/images/hero/hero-mixed-vegetables.webp';
import broccoli from '../assets/images/hero/hero-broccoli.webp';
import './Hero.css';

const HERO_POINTS = [
  { icon: 'pin', text: 'hp1' },
  { icon: 'leaf', text: 'hp2' },
  { icon: 'layers', text: 'hp3' },
];

// A blurred leaf used as soft decoration around the image composition.
function DecorLeaf({ className }) {
  return (
    <svg className={`hc-leaf ${className}`} viewBox="0 0 40 60" aria-hidden="true">
      <path fill="currentColor" d="M20 0C6 14 0 30 4 46c3 10 10 14 16 14s13-4 16-14C40 30 34 14 20 0z" />
    </svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-inner">
        <div>
          <span className="kicker">{t('heroKicker')}</span>
          <h1 id="hero-title">{t('heroH')}</h1>
          <p className="hero-lead">{t('heroP')}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#quote">
              <span>{t('cQuote')}</span>
              <Icon name="arrow" className="flip" />
            </a>
            <a className="btn btn-line" href="#products">
              {t('cProducts')}
            </a>
          </div>
          <ul className="hero-points">
            {HERO_POINTS.map((point) => (
              <li key={point.text}>
                <Icon name={point.icon} />
                <span>{t(point.text)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-comp">
          <div className="hc-panel" aria-hidden="true" />
          <DecorLeaf className="l1" />
          <DecorLeaf className="l2" />

          <div className="hc-grid">
            <figure className="hc-main">
              <img
                src={productionLine}
                width="528"
                height="589"
                alt={t('hcMainAlt')}
                fetchpriority="high"
                decoding="async"
              />
              <div className="hc-badge">
                <b>3</b>
                <span>{t('heroBadge')}</span>
              </div>
            </figure>
            <figure>
              <img src={mixedVegetables} width="436" height="289" alt={t('hcAAlt')} decoding="async" />
            </figure>
            <figure>
              <img src={broccoli} width="436" height="275" alt={t('hcBAlt')} decoding="async" />
            </figure>
          </div>

          <div className="hc-blobwrap" aria-hidden="true">
            <div className="hc-blob" />
          </div>
          <div className="hc-tag">
            <svg
              viewBox="0 0 48 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 36C10 34 4 24 6 8c12 0 20 8 18 26" />
              <path d="M22 36C20 26 15 18 8 12" />
              <path d="M26 36c2-12 8-20 18-22 0 12-6 20-18 22z" />
              <path d="M26 36c4-7 9-12 14-16" />
            </svg>
            <i />
            <span>
              <b>{t('hcTag1')}</b>
              <small>{t('hcTag2')}</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
