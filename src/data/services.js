// Toll-processing services offered to other companies.
// "icon" must be a name from src/components/ui/Icon.jsx.

export const SERVICES = [
  {
    id: 'prep',
    icon: 'truck',
    name: { ar: 'تجهيز المنتجات الغذائية', en: 'Food product preparation' },
    text: {
      ar: 'استلام المنتجات وتجهيزها مبدئيًا للمراحل التالية، بحسب نوع المنتج ومتطلبات العميل.',
      en: 'Intake and initial preparation for the next stages, based on the product and client requirements.',
    },
  },
  {
    id: 'wash',
    icon: 'drops',
    name: { ar: 'الغسيل والفرز', en: 'Washing and sorting' },
    text: {
      ar: 'غسيل المنتجات وفرزها على خط مخصص قبل التجميد أو التعبئة، متى تطلبت طبيعة المنتج ذلك.',
      en: 'Washing and sorting on a dedicated line before freezing or packing, where the product requires it.',
    },
  },
  {
    id: 'freeze',
    icon: 'snow',
    name: { ar: 'التجميد', en: 'Freezing' },
    text: {
      ar: 'تجميد المنتجات في أنفاق التجميد البلاست وفقًا لمتطلبات التشغيل المتفق عليها.',
      en: 'Freezing in our blast freezing tunnels to the agreed operating requirements.',
    },
  },
  {
    id: 'pack',
    icon: 'box',
    name: { ar: 'التعبئة والتغليف', en: 'Packing' },
    text: {
      ar: 'تعبئة المنتجات في صالات مخصصة، في العبوة التي يُتفق عليها بحسب المنتج والطلب.',
      en: 'Packing in dedicated halls, in the pack format agreed for the product and order.',
    },
  },
  {
    id: 'custom',
    icon: 'layers',
    name: { ar: 'التجهيز والتعبئة وفق متطلبات العميل', en: 'Processing to client specification' },
    text: {
      ar: 'تنفيذ عدة مراحل مما سبق معًا وفق مواصفات يحددها العميل وتُناقش مسبقًا مع فريقنا.',
      en: 'Combining several of these stages to a specification set by the client and agreed with our team in advance.',
    },
  },
];
