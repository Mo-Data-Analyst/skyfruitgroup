import { useLanguage } from '../i18n/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { SERVICES } from '../data/services';
import SectionHeading from '../components/ui/SectionHeading';
import Icon from '../components/ui/Icon';
import { stepNumber } from '../utils/numbers';
import './Services.css';

export default function Services() {
  const { t, pick, lang } = useLanguage();
  const { requestQuote } = useQuote();
  return (
    <section id="services" className="sec" aria-labelledby="services-title">
      <div className="wrap">
        <SectionHeading id="services-title" kicker="nServices" title="svcH" intro="svcP" />
        <div className="svc-grid">
          {SERVICES.map((service, index) => (
            <article className="svc" id={`service-${service.id}`} key={service.id}>
              <div className="svc-top">
                <span className="ico">
                  <Icon name={service.icon} />
                </span>
                <span className="num">{stepNumber(index, lang)}</span>
              </div>
              <h3>{pick(service.name)}</h3>
              <p>{pick(service.text)}</p>
              <button className="textlink" type="button" onClick={() => requestQuote('service', service.id)}>
                <span>{t('reqSvc')}</span>
                <Icon name="arrow" className="flip" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
