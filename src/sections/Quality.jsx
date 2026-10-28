import { useLanguage } from '../i18n/LanguageContext';
import Icon from '../components/ui/Icon';
import './Quality.css';

const PRACTICES = [
  { icon: 'hand', title: 'pr1h', text: 'pr1p' },
  { icon: 'doc', title: 'pr2h', text: 'pr2p' },
  { icon: 'box', title: 'pr3h', text: 'pr3p' },
];

export default function Quality() {
  const { t } = useLanguage();
  return (
    <section id="quality" className="sec" aria-labelledby="quality-title">
      <div className="wrap q-grid">
        <div className="rv">
          <span className="kicker">{t('nQuality')}</span>
          <h2 id="quality-title">{t('qH')}</h2>
          <p className="muted">{t('qP1')}</p>
        </div>

        <ul className="practices rv">
          {PRACTICES.map((item) => (
            <li key={item.title}>
              <span className="ico">
                <Icon name={item.icon} />
              </span>
              <div>
                <b>{t(item.title)}</b>
                <span>{t(item.text)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
