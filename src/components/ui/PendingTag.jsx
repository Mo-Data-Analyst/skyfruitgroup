import { useLanguage } from '../../i18n/LanguageContext';

// The small "Coming soon" tag shown wherever the company still has to confirm information.
export default function PendingTag() {
  const { t } = useLanguage();
  return <span className="tbd">{t('tbdSoon')}</span>;
}
