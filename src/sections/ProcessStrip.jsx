import { useLanguage } from '../i18n/LanguageContext';
import { STRIP_STEPS } from '../data/process';
import Icon from '../components/ui/Icon';
import { stepNumber } from '../utils/numbers';
import './ProcessStrip.css';

// Dark strip with the 4 main stages, overlapping the bottom of the hero.
export default function ProcessStrip() {
  const { t, pick, lang } = useLanguage();
  return (
    <div className="wrap strip rv" aria-label={t('stripAria')}>
      <ol>
        {STRIP_STEPS.map((step, index) => (
          <li key={step.icon}>
            <span className="ico">
              <Icon name={step.icon} />
            </span>
            <span>
              <span className="n">{stepNumber(index, lang)}</span>
              <b>{pick(step.title)}</b>
              <small>{pick(step.text)}</small>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
