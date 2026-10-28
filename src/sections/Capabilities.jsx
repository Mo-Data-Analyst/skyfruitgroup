import { useLanguage } from '../i18n/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { FACILITY_TILES } from '../data/facility';
import { FLOW_STEPS } from '../data/process';
import SectionHeading from '../components/ui/SectionHeading';
import './Capabilities.css';

export default function Capabilities() {
  const { t, pick } = useLanguage();
  const { requestQuote } = useQuote();
  return (
    <section id="capabilities" className="sec sec-white" aria-labelledby="caps-title">
      <div className="wrap">
        <SectionHeading id="caps-title" kicker="nCaps" title="capsH" intro="capsP" />

        <div className="bento rv">
          {FACILITY_TILES.map((tile) => (
            <figure className={`tile${tile.tall ? ' tall' : ''}`} key={tile.id}>
              <img
                src={tile.image}
                width={tile.width}
                height={tile.height}
                alt={t(tile.alt)}
                loading="lazy"
                decoding="async"
              />
              {tile.stat && (
                <div className="stat">
                  <b>{tile.stat.value}</b>
                  <span>{t(tile.stat.label)}</span>
                </div>
              )}
              <figcaption>
                <h3>{t(tile.title)}</h3>
                <p>{t(tile.text)}</p>
              </figcaption>
            </figure>
          ))}
          <div className="tile tile-cta">
            <div>
              <h3>{t('capCtaH')}</h3>
              <p>{t('capCtaP')}</p>
            </div>
            <button className="btn btn-light" type="button" onClick={() => requestQuote('service')}>
              {t('cDiscuss')}
            </button>
          </div>
        </div>
        <p className="cap-note">{t('capsNote')}</p>

        <div className="flow-wrap rv">
          <h3>{t('flowH')}</h3>
          <p className="muted" style={{ margin: 0 }}>
            {t('flowP')}
          </p>
          <ol className="flow">
            {FLOW_STEPS.map((step) => (
              <li key={step.title.en}>
                <h4>{pick(step.title)}</h4>
                <p>{pick(step.text)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
