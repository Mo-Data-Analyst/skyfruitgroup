// Product catalog.
// "pack" = retail pack shown whole on a white stage.
// "bulk" = loose frozen product photo, cropped to fill the card.
// To add a product: add an image to src/assets/images/products/, import it below,
// and add one object to the PRODUCTS list. "weight" is optional (shows "On request" if missing).

import packGreenPeas from '../assets/images/products/pack-green-peas.webp';
import packPeasCarrots from '../assets/images/products/pack-peas-carrots.webp';
import packMixedVegetables from '../assets/images/products/pack-mixed-vegetables.webp';
import packOkraZero from '../assets/images/products/pack-okra-zero.webp';
import packMolokhia from '../assets/images/products/pack-molokhia.webp';
import packBroccoli from '../assets/images/products/pack-broccoli.webp';
import packStrawberries from '../assets/images/products/pack-strawberries.webp';
import bulkGreenPeas from '../assets/images/products/bulk-green-peas.webp';
import bulkGreenBeans from '../assets/images/products/bulk-green-beans.webp';
import bulkCauliflower from '../assets/images/products/bulk-cauliflower.webp';
import bulkDicedMango from '../assets/images/products/bulk-diced-mango.webp';
import bulkSlicedMango from '../assets/images/products/bulk-sliced-mango.webp';

export const CATEGORIES = {
  vegetables: { ar: 'خضروات', en: 'Vegetables' },
  fruits: { ar: 'فواكه', en: 'Fruits' },
};

export const PRODUCTS = [
  {
    id: 'peas',
    format: 'pack',
    category: 'vegetables',
    image: packGreenPeas,
    name: { ar: 'بسلة', en: 'Green peas' },
    weight: { ar: '400 جم', en: '400 g' },
  },
  {
    id: 'peas-carrots',
    format: 'pack',
    category: 'vegetables',
    image: packPeasCarrots,
    name: { ar: 'بسلة وجزر', en: 'Peas and carrots' },
    weight: { ar: '400 جم', en: '400 g' },
  },
  {
    id: 'mixed',
    format: 'pack',
    category: 'vegetables',
    image: packMixedVegetables,
    name: { ar: 'خضروات مشكلة', en: 'Mixed vegetables' },
    weight: { ar: '400 جم', en: '400 g' },
  },
  {
    id: 'okra',
    format: 'pack',
    category: 'vegetables',
    image: packOkraZero,
    name: { ar: 'بامية زيرو', en: 'Okra Zero' },
    weight: { ar: '400 جم', en: '400 g' },
  },
  {
    id: 'molokhia',
    format: 'pack',
    category: 'vegetables',
    image: packMolokhia,
    name: { ar: 'ملوخية', en: 'Molokhia' },
    weight: { ar: '400 جم', en: '400 g' },
  },
  {
    id: 'broccoli',
    format: 'pack',
    category: 'vegetables',
    image: packBroccoli,
    name: { ar: 'بروكلي', en: 'Broccoli' },
    weight: { ar: '400 جم', en: '400 g' },
  },
  {
    id: 'strawberry',
    format: 'pack',
    category: 'fruits',
    image: packStrawberries,
    name: { ar: 'فراولة', en: 'Strawberries' },
    weight: { ar: '1 كجم', en: '1 kg' },
  },
  {
    id: 'peas-bulk',
    format: 'bulk',
    category: 'vegetables',
    image: bulkGreenPeas,
    name: { ar: 'بسلة', en: 'Green peas' },
  },
  {
    id: 'beans',
    format: 'bulk',
    category: 'vegetables',
    image: bulkGreenBeans,
    name: { ar: 'فاصوليا خضراء', en: 'Green beans' },
  },
  {
    id: 'cauliflower',
    format: 'bulk',
    category: 'vegetables',
    image: bulkCauliflower,
    name: { ar: 'قرنبيط', en: 'Cauliflower' },
  },
  {
    id: 'mango-diced',
    format: 'bulk',
    category: 'fruits',
    image: bulkDicedMango,
    name: { ar: 'مانجو مكعبات', en: 'Diced mango' },
  },
  {
    id: 'mango-sliced',
    format: 'bulk',
    category: 'fruits',
    image: bulkSlicedMango,
    name: { ar: 'مانجو شرائح', en: 'Sliced mango' },
  },
];
