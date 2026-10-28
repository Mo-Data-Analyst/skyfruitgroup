import { forwardRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import Icon from './Icon';
import PendingTag from './PendingTag';
import './PrivacyDialog.css';

// Privacy policy popup (text still to be provided by the company).
const PrivacyDialog = forwardRef(function PrivacyDialog(_props, ref) {
  const { t } = useLanguage();
  const close = () => ref.current?.close();
  return (
    <dialog ref={ref} aria-labelledby="privacy-title" onClick={(e) => e.target === ref.current && close()}>
      <div className="dlg">
        <div className="dlg-head">
          <h2 id="privacy-title">{t('privacy')}</h2>
          <button className="icon-btn" type="button" onClick={close} aria-label={t('close')}>
            <Icon name="close" />
          </button>
        </div>
        <p>{t('privP')}</p>
        <PendingTag />
      </div>
    </dialog>
  );
});

export default PrivacyDialog;
