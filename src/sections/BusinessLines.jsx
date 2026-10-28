import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from '../components/ui/SectionHeading';
import Icon from '../components/ui/Icon';
import packsCollection from '../assets/images/products/packs-collection.webp';
import facilityCorridor from '../assets/images/facility/facility-corridor.webp';
import './BusinessLines.css';

// The two ways to work with Sky Fruit: buying products, or using its processing services.
const LINES = [
  {
    id: 'supply',
    image: packsCollection,
    width: 1200,
    height: 760,
    alt: 'w1AltImg',
    tagIcon: 'leaf',
    tag: 'w1k',
    title: 'w1h',
    text: 'w1p',
    points: ['w1a', 'w1b', 'w1c'],
    button: { href: '#products', label: 'cProducts', style: 'btn-primary' },
  },
  {
    id: 'services',
    image: facilityCorridor,
    width: 900,
    height: 562,
    alt: 'w2AltImg',
    tagIcon: 'layers',
    tag: 'w2k',
    title: 'w2h',
    text: 'w2p',
    points: ['w2a', 'w2b', 'w2c'],
    button: { href: '#services', label: 'cDiscuss', style: 'btn-dark' },
  },
];

export default function BusinessLines() {
  const { t } = useLanguage();
  return (
    <section className="sec" aria-labelledby="ways-title">
      <div className="wrap">
        <SectionHeading id="ways-title" kicker="waysKicker" title="waysH" intro="waysP" />
        <div className="ways">
          {LINES.map((line) => (
            <article className="way rv" key={line.id}>
              <div className="way-media">
                <img
                  src={line.image}
                  width={line.width}
                  height={line.height}
                  alt={t(line.alt)}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="way-body">
                <span className="tag">
                  <Icon name={line.tagIcon} />
                  <span>{t(line.tag)}</span>
                </span>
                <h3>{t(line.title)}</h3>
                <p className="muted">{t(line.text)}</p>
                <ul>
                  {line.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" />
                      <span>{t(point)}</span>
                    </li>
                  ))}
                </ul>
                <a className={`btn ${line.button.style}`} href={line.button.href}>
                  {t(line.button.label)}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
