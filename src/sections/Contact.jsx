import { useLanguage } from '../i18n/LanguageContext';
import { CONTACT } from '../data/contact';
import Icon from '../components/ui/Icon';
import PendingTag from '../components/ui/PendingTag';
import QuoteForm from '../components/forms/QuoteForm';
import './Contact.css';

const TIPS = ['tip1', 'tip2', 'tip3', 'tip4'];

export default function Contact() {
  const { t, pick } = useLanguage();
  const address = pick(CONTACT.address);

  // Each row shows a working link once the detail is filled in src/data/contact.js.
  const rows = [
    {
      icon: 'phone',
      label: 'cPhone',
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
      ltr: true,
    },
    {
      icon: 'chat',
      label: 'cWa',
      value: CONTACT.whatsapp,
      href: `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`,
      ltr: true,
    },
    { icon: 'mail', label: 'cMail', value: CONTACT.email, href: `mailto:${CONTACT.email}`, ltr: true },
    { icon: 'pin', label: 'fAddr', value: address },
  ];

  return (
    <section id="contact" className="sec" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <aside className="rv">
          <span className="kicker">{t('nContact')}</span>
          <h2 id="contact-title">{t('contactH')}</h2>
          <p className="muted">{t('contactP')}</p>

          <div className="c-card">
            <ul className="c-list">
              {rows.map((row) => (
                <li key={row.label}>
                  <span className="ico">
                    <Icon name={row.icon} />
                  </span>
                  <span>
                    <b>{t(row.label)}</b>
                    {!row.value && <PendingTag />}
                    {row.value && row.href && (
                      <a href={row.href} dir={row.ltr ? 'ltr' : undefined}>
                        {row.value}
                      </a>
                    )}
                    {row.value && !row.href && <span>{row.value}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tips">
            <h3>{t('tipsH')}</h3>
            <ul>
              {TIPS.map((tip) => (
                <li key={tip}>
                  <Icon name="check" />
                  <span>{t(tip)}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <QuoteForm />
      </div>
    </section>
  );
}
