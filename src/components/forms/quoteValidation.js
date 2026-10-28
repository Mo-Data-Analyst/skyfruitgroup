// Validation rules for the quote form. Returns { fieldName: translationKeyOfError }.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s\-()]{7,20}$/;

export function validateQuote(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'eName';
  if (!values.company.trim()) errors.company = 'eCompany';
  if (!values.email.trim()) errors.email = 'eEmail';
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'eEmailBad';
  const phone = values.phone.trim();
  if (phone && !(PHONE_PATTERN.test(phone) && phone.replace(/\D/g, '').length >= 7)) errors.phone = 'ePhoneBad';
  if (!values.country.trim()) errors.country = 'eCountry';
  if (!values.type) errors.type = 'eType';
  else if (!values.item) errors.item = values.type === 'service' ? 'eItemSvc' : 'eItem';
  return errors;
}
