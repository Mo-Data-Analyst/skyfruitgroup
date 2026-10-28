import { FAQ } from '../../data/faq';

// Makes Arabic and English text comparable: lowercase, no diacritics,
// unified alef / ya / ta-marbuta, punctuation removed.
export function normalize(text) {
  return String(text)
    .toLowerCase()
    .replace(/[\u064B-\u0652\u0640]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي')
    .replace(/[^\w\u0600-\u06FF\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const NORMALIZED = FAQ.map((item) => ({ item, keywords: item.keywords.map(normalize) }));

// Finds the FAQ entry whose keywords best match the visitor's question (or null).
export function findAnswer(question) {
  const text = ` ${normalize(question)} `;
  let best = null;
  let bestScore = 0;
  for (const { item, keywords } of NORMALIZED) {
    let score = 0;
    for (const keyword of keywords) {
      if (keyword && text.includes(keyword)) score += keyword.length > 3 ? 2 : 1;
    }
    score *= item.weight || 1;
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }
  return best;
}
