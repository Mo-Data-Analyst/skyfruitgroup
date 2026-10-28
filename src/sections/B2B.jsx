import { useLanguage } from '../i18n/LanguageContext';
import './B2B.css';

const AUDIENCE = ['au1', 'au2', 'au3', 'au4'];
const STEPS = [
  { title: 's1h', text: 's1p' },
  { title: 's2h', text: 's2p' },
  { title: 's3h', text: 's3p' },
];

// Dark green band for importers and business buyers.
export default function B2B() {
  const { t } = useLanguage();
  return (
    <section className="sec band" aria-labelledby="b2b-title">
      <div className="wrap b2b">
        <div className="rv">
          <span className="kicker kicker--light">{t('b2bKicker')}</span>
          <h2 id="b2b-title">{t('b2bH')}</h2>
          <p>{t('b2bP')}</p>
          <ul className="audience">
            {AUDIENCE.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </div>
        <div className="rv">
          <h3 className="b2b-steps-title">{t('howH')}</h3>
          <ol className="steps">
            {STEPS.map((step) => (
              <li key={step.title}>
                <b>{t(step.title)}</b>
                <span>{t(step.text)}</span>
              </li>
            ))}
          </ol>
          <a className="btn btn-primary" href="#quote">
            {t('cQuote')}
          </a>
        </div>
      </div>
    </section>
  );
}
