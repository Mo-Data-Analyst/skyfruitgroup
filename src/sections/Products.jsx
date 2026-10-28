import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { CATEGORIES, PRODUCTS } from '../data/products';
import SectionHeading from '../components/ui/SectionHeading';
import Icon from '../components/ui/Icon';
import './Products.css';

const FILTERS = [
  { id: 'all', label: 'fAll' },
  { id: 'vegetables', label: 'fVeg' },
  { id: 'fruits', label: 'fFruit' },
];

const GROUPS = [
  { format: 'pack', icon: 'bag', title: 'gPackH', text: 'gPackP' },
  { format: 'bulk', icon: 'box', title: 'gBulkH', text: 'gBulkP' },
];

function ProductCard({ product }) {
  const { t, pick, isEnglish } = useLanguage();
  const { requestQuote } = useQuote();
  const name = pick(product.name);
  const altText =
    product.format === 'pack'
      ? isEnglish
        ? `Sky Fruit pack: ${name}`
        : `عبوة سكاي فروت: ${name}`
      : isEnglish
        ? `Bulk frozen ${name.toLowerCase()}`
        : `${name} مجمدة سائبة`;

  return (
    <article className={`prod ${product.format}`}>
      <div className="prod-media">
        <img src={product.image} width="600" height="600" alt={altText} loading="lazy" decoding="async" />
        <span className="prod-flag">{t(product.format === 'pack' ? 'flagPack' : 'flagBulk')}</span>
      </div>
      <div className="prod-body">
        <span className="prod-cat">{pick(CATEGORIES[product.category])}</span>
        <h4>{name}</h4>
        <span className="prod-en" lang={isEnglish ? 'ar' : 'en'}>
          {product.name[isEnglish ? 'ar' : 'en']}
        </span>
        <div className="prod-meta">
          <span>{t('packLbl')}</span>
          <b>{product.weight ? pick(product.weight) : t('packAsk')}</b>
        </div>
        <button className="btn btn-line" type="button" onClick={() => requestQuote('supply', product.id)}>
          {t('inquireP')}
        </button>
      </div>
    </article>
  );
}

export default function Products() {
  const { t } = useLanguage();
  const { requestQuote } = useQuote();
  const [filter, setFilter] = useState('all');

  const countFor = (id) => PRODUCTS.filter((p) => id === 'all' || p.category === id).length;
  const visible = PRODUCTS.filter((p) => filter === 'all' || p.category === filter);

  return (
    <section id="products" className="sec sec-white" aria-labelledby="products-title">
      <div className="wrap">
        <SectionHeading id="products-title" kicker="nProducts" title="prodH" intro="prodP">
          <div className="pfilter" role="group" aria-label={t('filterAria')}>
            {FILTERS.map((f) => (
              <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
                <span>{t(f.label)}</span>
                <span className="c">({countFor(f.id)})</span>
              </button>
            ))}
          </div>
        </SectionHeading>

        {GROUPS.map((group) => {
          const items = visible.filter((p) => p.format === group.format);
          if (!items.length) return null;
          return (
            <div className="pgroup" key={group.format}>
              <div className="pgroup-head">
                <h3>
                  <Icon name={group.icon} />
                  <span>{t(group.title)}</span>
                </h3>
                <p>{t(group.text)}</p>
              </div>
              <div className={`prod-grid prod-grid--${group.format}`}>
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}

        <div className="catalog rv">
          <div>
            <h3>{t('catH')}</h3>
            <p>{t('catP')}</p>
          </div>
          <button className="btn btn-dark" type="button" onClick={() => requestQuote('supply', 'other')}>
            {t('catBtn')}
          </button>
        </div>
      </div>
    </section>
  );
}
