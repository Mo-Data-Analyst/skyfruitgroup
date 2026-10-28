// "01, 02..." in English and "٠١، ٠٢..." in Arabic.
const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

export function stepNumber(index, lang) {
  const number = String(index + 1).padStart(2, '0');
  return lang === 'ar' ? number.replace(/\d/g, (d) => ARABIC_DIGITS[d]) : number;
}
