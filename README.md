# Sky Fruit website

The bilingual (Arabic / English) website of **Sky Fruit**, an Egyptian company that supplies frozen vegetables and fruits and offers washing, sorting, freezing and packing services to other businesses.

It is a single page: hero, product catalog, services, facility, quality and packing, about, a B2B section, and a quote request form, plus a small "Ask us" chatbot with predefined answers.

## Technologies

- **React 18**: builds the page from small components.
- **Vite 5**: runs the site locally and builds the production files.
- **Plain CSS** with CSS variables: no CSS framework.
- No backend, no database. Fonts come from Google Fonts.

## Folder structure

```
sky-fruit-website/
├── index.html                 Page shell: <title>, meta tags, Google Fonts link
├── public/favicon.png         Browser tab icon
├── .env.example               Template for the form endpoint setting
├── package.json               Scripts and dependencies
└── src/
    ├── main.jsx               Starts the app and loads the global styles
    ├── App.jsx                The page, top to bottom (section order lives here)
    ├── styles/
    │   ├── variables.css      ★ Brand colors, fonts, spacing, corner radii
    │   └── base.css           Text, buttons and shared helpers
    ├── i18n/
    │   ├── translations.js    ★ All interface text, Arabic and English side by side
    │   └── LanguageContext.jsx Language switch (direction, title, memory of choice)
    ├── data/                  ★ Content lists, easy to edit
    │   ├── products.js        Products (name, category, weight, image)
    │   ├── services.js        Services
    │   ├── process.js         The 4 stages strip and the 6 processing steps
    │   ├── facility.js        Photo tiles in "Capabilities"
    │   ├── packFormats.js     Bags / cartons / sacks
    │   ├── navigation.js      Menu links
    │   ├── contact.js         ★ Phone, WhatsApp, email, address
    │   └── faq.js             Chatbot questions, answers and keywords
    ├── sections/              One file per page section (+ its own .css file)
    │   Hero, ProcessStrip, BusinessLines, Products, Services,
    │   Capabilities, Quality, About, B2B, Contact
    ├── components/
    │   ├── layout/            Header and Footer
    │   ├── ui/                Icon, SectionHeading, PendingTag, PrivacyDialog
    │   ├── forms/             QuoteForm and its validation rules
    │   └── chatbot/           Chatbot window and question matching
    ├── context/QuoteContext.jsx  Lets "Inquire" buttons prefill the quote form
    ├── hooks/                 Menu highlighting on scroll, fade-in on scroll
    ├── utils/numbers.js       01/02… and ٠١/٠٢… numbering
    └── assets/images/         All images (brand, hero, products, facility)
```

The files marked ★ are the ones you will edit most.

## Install and run

You need **Node.js 18 or newer** (https://nodejs.org).

Open the project folder in VS Code, then open the terminal (`Ctrl + ` `) and run:

```bash
npm install        # once, downloads the dependencies
npm run dev        # starts the site at http://localhost:5173 and reloads on every save
```

### Build the production version

```bash
npm run build      # creates the final site in the "dist" folder
npm run preview    # opens that built version at http://localhost:4173 to check it
```

## Common changes

| I want to change… | Edit this |
|---|---|
| Any sentence or button label | `src/i18n/translations.js` (search for the text, edit `ar` or `en`) |
| Brand colors, fonts, corner radius | `src/styles/variables.css` |
| Phone, WhatsApp, email, address | `src/data/contact.js` (empty = shows "Coming soon") |
| Products | `src/data/products.js` |
| Services | `src/data/services.js` |
| Chatbot questions and answers | `src/data/faq.js` |
| Menu links | `src/data/navigation.js` |
| Page title / search description | `title` and `desc` in `translations.js` (also the defaults in `index.html`) |
| Section order, or hiding a section | `src/App.jsx` (move or delete the line) |
| One section's layout or spacing | the `.css` file next to it in `src/sections/` |

### Replace an image or the logo

Put the new file in the same folder with the **same file name** and it is used everywhere automatically.
- Logo mark: `src/assets/images/brand/logo-mark.webp` (also update `public/favicon.png`)
- Hero photos: `src/assets/images/hero/`. The composition expects these sizes: production line 528×589, mixed vegetables 436×289, broccoli 436×275. Larger images with the same proportions are better (for example 1056×1178).
- Product photos: `src/assets/images/products/` (square images, about 600×600)

### Add a product

1. Add the image to `src/assets/images/products/`, for example `pack-sweet-corn.webp`.
2. In `src/data/products.js`, import it at the top:
   `import packSweetCorn from '../assets/images/products/pack-sweet-corn.webp';`
3. Add an object to `PRODUCTS`:
   ```js
   { id: 'sweet-corn', format: 'pack', category: 'vegetables', image: packSweetCorn,
     name: { ar: 'ذرة حلوة', en: 'Sweet corn' }, weight: { ar: '400 جم', en: '400 g' } },
   ```
   `format` is `'pack'` (retail pack, shown whole) or `'bulk'` (loose product photo). `weight` is optional.

The product appears in the catalog, the filters' counts, and the quote form's list automatically.

### Add or remove a service

Add or delete an object in `src/data/services.js`. `icon` must be one of the names in `src/components/ui/Icon.jsx`. The service card, footer link and quote form option update automatically.

### Add a chatbot question

Add an object to `FAQ` in `src/data/faq.js` with a `question`, an `answer`, the `links` buttons to show, and `keywords` (Arabic and English words visitors might type). Set `featured: true` to show it as a quick button.

### Add a new page section

1. Create `src/sections/MySection.jsx` (copy a simple one like `About.jsx`) and `MySection.css`.
2. Add its texts to `translations.js`.
3. Import it in `src/App.jsx` and place `<MySection />` where it should appear.
4. To add it to the menu, give the `<section>` an `id` and add `{ id, label }` to `src/data/navigation.js`.

## The quote form

The form validates every field in both languages. **It does not send anything yet**, and it tells the visitor so, until you connect it:

1. Create a receiving endpoint that accepts a JSON `POST`, for example a Laravel route that emails the request, or a form service such as Formspree.
2. Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT=https://your-endpoint`.
3. On Vercel, add the same variable under **Project → Settings → Environment Variables**, then redeploy.

The form only shows "Request received" when the endpoint answers with a success status. The fields sent are: `name, company, email, phone, country, type, item, quantity, packaging, details, lang`.

No passwords or API keys belong in this project: anything starting with `VITE_` is visible in the browser.

## Deploying to Vercel with your domain

1. Push the project to a GitHub repository (`node_modules`, `dist` and `.env` are excluded by `.gitignore`).
2. On https://vercel.com: **Add New → Project**, import the repository. Vercel detects Vite automatically (build command `npm run build`, output folder `dist`). Deploy.
3. **Project → Settings → Domains**: add your domain (and the `www` version).
4. Vercel then shows the DNS records to create. Add them where your domain's DNS is managed (registrar or Cloudflare). This is a manual step you do yourself.

### Publishing updates

Edit, check with `npm run dev`, then commit and push to GitHub. Vercel rebuilds and publishes automatically.

## Still to complete before launch

- Official phone, WhatsApp, email and address (`src/data/contact.js`).
- A form endpoint (see above).
- Privacy policy text (`privP` in `translations.js`).
- Carton and sack weights, and certificates, once the company confirms them.
- Company approval of claims shown in images: the "100% ORGANIC" / "Your Organic Food Store" badges on the packs, and whether the hero factory photo is Sky Fruit's own facility.
- Higher-resolution hero photos, if available.
