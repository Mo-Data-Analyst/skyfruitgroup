import { useLanguage } from '../i18n/LanguageContext';
import { CONTACT } from '../data/contact';
import PendingTag from '../components/ui/PendingTag';
import './About.css';

const FACTS = [
  { label: 'fLoc', value: 'fLocV' },
  { label: 'fField', value: 'fFieldV' },
  { label: 'fBiz', value: 'fBizV' },
  { label: 'fTun', value: 'fTunV', highlight: true },
  { label: 'fTeam', value: 'fTeamV' },
];

export default function About() {
  const { t, pick } = useLanguage();
  const address = pick(CONTACT.address);
  return (
    <section id="about" className="sec sec-white" aria-labelledby="about-title">
      <div className="wrap about">
        <div className="rv">
          <span className="kicker">{t('nAbout')}</span>
          <h2 id="about-title">{t('aboutH')}</h2>
          <p>{t('aboutP1')}</p>
          <p className="muted">{t('aboutP2')}</p>
        </div>
        <dl className="facts rv">
          {FACTS.map((fact) => (
            <div key={fact.label} className={fact.highlight ? 'hl' : undefined}>
              <dt>{t(fact.label)}</dt>
              <dd>{t(fact.value)}</dd>
            </div>
          ))}
          <div>
            <dt>{t('fAddr')}</dt>
            <dd>{address || <PendingTag />}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
