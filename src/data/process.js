// The 4 stages in the dark strip under the hero, and the 6-step processing flow.

export const STRIP_STEPS = [
  {
    icon: 'truck',
    title: { ar: 'الاستقبال', en: 'Intake' },
    text: { ar: 'استلام المنتج الطازج', en: 'Fresh produce received' },
  },
  {
    icon: 'drops',
    title: { ar: 'الغسيل والفرز', en: 'Washing and sorting' },
    text: { ar: 'بحسب طبيعة كل منتج', en: 'As each product requires' },
  },
  {
    icon: 'snow',
    title: { ar: 'التجميد', en: 'Freezing' },
    text: { ar: '3 أنفاق تجميد بلاست', en: '3 blast freezing tunnels' },
  },
  {
    icon: 'box',
    title: { ar: 'التعبئة', en: 'Packing' },
    text: { ar: 'أكياس وكراتين وأجولة', en: 'Bags, cartons and sacks' },
  },
];

export const FLOW_STEPS = [
  {
    title: { ar: 'استلام المنتجات', en: 'Receiving' },
    text: { ar: 'استقبال المنتجات في المنشأة.', en: 'Products arrive at the facility.' },
  },
  {
    title: { ar: 'الفحص والتجهيز الأولي', en: 'Inspection and preparation' },
    text: { ar: 'تجهيز المنتج للمراحل التالية.', en: 'Readying the product for the next stages.' },
  },
  {
    title: { ar: 'الغسيل والفرز', en: 'Washing and sorting' },
    text: { ar: 'بحسب طبيعة كل منتج.', en: 'As each product requires.' },
  },
  {
    title: { ar: 'التجميد', en: 'Freezing' },
    text: { ar: 'في أنفاق التجميد البلاست.', en: 'In blast freezing tunnels.' },
  },
  {
    title: { ar: 'التعبئة والتغليف', en: 'Packing' },
    text: { ar: 'في العبوة المتفق عليها.', en: 'In the agreed pack.' },
  },
  {
    title: { ar: 'تجهيز الطلبات', en: 'Order preparation' },
    text: { ar: 'تجهيز الطلب للتسليم.', en: 'Readying the order for delivery.' },
  },
];
