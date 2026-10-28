import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useQuote } from '../../context/QuoteContext';
import { PRODUCTS } from '../../data/products';
import { SERVICES } from '../../data/services';
import { validateQuote } from './quoteValidation';

// Where submissions are sent (Formspree). VITE_FORM_ENDPOINT in .env overrides it;
// the built-in URL keeps the form working on hosts where that variable isn't set.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/xnppvqnb';

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  type: '',
  item: '',
  quantity: '',
  packaging: '',
  details: '',
};
const REQUEST_TYPES = [
  { value: 'supply', label: 'tSupply' },
  { value: 'service', label: 'tService' },
  { value: 'other', label: 'tOther' },
];
const ITEM_LABEL = { supply: 'lItemSupply', service: 'lItemService', other: 'lItemOther' };
const RESULT_TEXT = {
  ok: { className: 'ok', title: 'rOkH', text: 'rOkP' },
  fail: { className: 'fail', title: 'rFailH', text: 'rFailP' },
};
const FIELD_ORDER = ['name', 'company', 'email', 'phone', 'country', 'type', 'item'];

export default function QuoteForm() {
  const { t, pick, lang } = useLanguage();
  const { request } = useQuote();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [sending, setSending] = useState(false);
  const nameRef = useRef(null);
  const summaryRef = useRef(null);
  const resultRef = useRef(null);

  // A product/service button elsewhere on the page asked to prefill the form.
  useEffect(() => {
    if (!request) return undefined;
    setValues((v) => ({ ...v, type: request.type, item: request.type === 'other' ? 'general' : request.item }));
    setResult(null);
    const timer = setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 650);
    return () => clearTimeout(timer);
  }, [request]);

  // Re-check while the visitor corrects mistakes after the first submit.
  useEffect(() => {
    if (submitted) setErrors(validateQuote(values));
  }, [values, submitted]);

  const update = (field) => (e) => {
    const value = e.target.value;
    setValues((v) =>
      field === 'type' ? { ...v, type: value, item: value === 'other' ? 'general' : '' } : { ...v, [field]: value },
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setResult(null);
    const found = validateQuote(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setTimeout(() => summaryRef.current?.focus(), 0);
      return;
    }
    setSending(true);
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, lang }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setValues(EMPTY);
      setSubmitted(false);
      setResult('ok');
    } catch {
      setResult('fail');
    } finally {
      setSending(false);
      setTimeout(() => resultRef.current?.focus(), 0);
    }
  };

  const focusField = (field) => (e) => {
    e.preventDefault();
    const el = document.getElementById(field === 'type' ? 'f-type-supply' : `f-${field}`);
    el?.focus();
    el?.scrollIntoView({ block: 'center' });
  };

  const errorFor = (field) => (errors[field] ? t(errors[field]) : '');
  const errorList = FIELD_ORDER.filter((f) => errors[f]);

  // Text field helper (label, input, hint, error).
  const field = (name, label, { type = 'text', required, hint, full, ...rest } = {}) => (
    <div className={`field${full ? ' full' : ''}`}>
      <label htmlFor={`f-${name}`}>
        <span>{t(label)}</span>
        {required ? (
          <span className="req" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="opt">{t('optional')}</span>
        )}
      </label>
      <input
        id={`f-${name}`}
        name={name}
        type={type}
        value={values[name]}
        onChange={update(name)}
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-describedby={[hint && `h-${name}`, `e-${name}`].filter(Boolean).join(' ')}
        ref={name === 'name' ? nameRef : undefined}
        {...rest}
      />
      {hint && (
        <span className="hint" id={`h-${name}`}>
          {hint}
        </span>
      )}
      <span className={`err${errors[name] ? ' on' : ''}`} id={`e-${name}`}>
        {errorFor(name)}
      </span>
    </div>
  );

  return (
    <div className="form-card rv" id="quote">
      <h3 id="quote-title">{t('formH')}</h3>

      <div
        className={`summary${errorList.length && submitted ? ' on' : ''}`}
        ref={summaryRef}
        tabIndex={-1}
        role="alert"
        aria-labelledby="err-title"
      >
        <h4 id="err-title">{t('errTitle')}</h4>
        <ul>
          {errorList.map((f) => (
            <li key={f}>
              <a href={`#f-${f}`} onClick={focusField(f)}>
                {t(errors[f])}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form noValidate onSubmit={handleSubmit} aria-labelledby="quote-title">
        <div className="fgrid">
          {field('name', 'lName', { required: true, autoComplete: 'name' })}
          {field('company', 'lCompany', { required: true, autoComplete: 'organization' })}
          {field('email', 'lEmail', { type: 'email', required: true, autoComplete: 'email', dir: 'ltr' })}
          {field('phone', 'lPhone', {
            type: 'tel',
            autoComplete: 'tel',
            dir: 'ltr',
            hint: (
              <>
                {t('hPhone')} <bdi dir="ltr">+20</bdi>
              </>
            ),
          })}
          {field('country', 'lCountry', { required: true, autoComplete: 'country-name', full: true })}

          <fieldset className="field full" aria-describedby="e-type">
            <legend>
              <span>{t('lType')}</span>
              <span className="req" aria-hidden="true">
                *
              </span>
            </legend>
            <div className="radios">
              {REQUEST_TYPES.map((type) => (
                <label className="radio" key={type.value}>
                  <input
                    id={`f-type-${type.value}`}
                    type="radio"
                    name="type"
                    value={type.value}
                    checked={values.type === type.value}
                    onChange={update('type')}
                    aria-invalid={errors.type ? 'true' : 'false'}
                  />
                  <span>{t(type.label)}</span>
                </label>
              ))}
            </div>
            <span className={`err${errors.type ? ' on' : ''}`} id="e-type">
              {errorFor('type')}
            </span>
          </fieldset>

          <div className="field full">
            <label htmlFor="f-item">
              <span>{t(ITEM_LABEL[values.type] || 'lItemDef')}</span>
              <span className="req" aria-hidden="true">
                *
              </span>
            </label>
            <select
              id="f-item"
              name="item"
              value={values.item}
              onChange={update('item')}
              disabled={!values.type}
              aria-invalid={errors.item ? 'true' : 'false'}
              aria-describedby="e-item"
            >
              {!values.type && <option value="">{t('selFirst')}</option>}
              {values.type && values.type !== 'other' && <option value="">{t('selPick')}</option>}
              {values.type === 'supply' &&
                ['pack', 'bulk'].map((format) => (
                  <optgroup key={format} label={t(format === 'pack' ? 'grpPack' : 'grpBulk')}>
                    {PRODUCTS.filter((p) => p.format === format).map((p) => (
                      <option key={p.id} value={p.id}>
                        {pick(p.name)}
                        {p.weight ? ` (${pick(p.weight)})` : ''}
                      </option>
                    ))}
                  </optgroup>
                ))}
              {values.type === 'service' &&
                SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {pick(s.name)}
                  </option>
                ))}
              {(values.type === 'supply' || values.type === 'service') && <option value="other">{t('itOther')}</option>}
              {values.type === 'other' && <option value="general">{t('itGeneral')}</option>}
            </select>
            <span className={`err${errors.item ? ' on' : ''}`} id="e-item">
              {errorFor('item')}
            </span>
          </div>

          {field('quantity', 'lQty', { hint: t('hQty') })}
          {field('packaging', 'lPack', { hint: t('hPack') })}

          <div className="field full">
            <label htmlFor="f-details">
              <span>{t('lDetails')}</span>
              <span className="opt">{t('optional')}</span>
            </label>
            <textarea id="f-details" name="details" value={values.details} onChange={update('details')} />
          </div>
        </div>

        <div className="form-foot">
          <button className="btn btn-primary" type="submit" disabled={sending}>
            {t(sending ? 'sending' : 'submit')}
          </button>
          <small>{t('reqNote')}</small>
        </div>

        <div
          className={`result${result ? ` on ${RESULT_TEXT[result].className}` : ''}`}
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={resultRef}
        >
          {result && (
            <>
              <h4>{t(RESULT_TEXT[result].title)}</h4>
              <p>{t(RESULT_TEXT[result].text)}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
