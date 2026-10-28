import { useLanguage } from '../../i18n/LanguageContext';

// Small label + title + intro paragraph used at the top of most sections.
// Pass translation keys. "children" is shown beside the text (e.g. product filters).
export default function SectionHeading({ id, kicker, title, intro, children }) {
  const { t } = useLanguage();
  return (
    <div className={`sec-head rv${children ? ' row' : ''}`}>
      <div>
        {kicker && <span className="kicker">{t(kicker)}</span>}
        <h2 id={id}>{t(title)}</h2>
        {intro && <p>{t(intro)}</p>}
      </div>
      {children}
    </div>
  );
}
