import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Chatbot from './components/chatbot/Chatbot';
import Hero from './sections/Hero';
import ProcessStrip from './sections/ProcessStrip';
import BusinessLines from './sections/BusinessLines';
import Products from './sections/Products';
import Services from './sections/Services';
import Capabilities from './sections/Capabilities';
import Quality from './sections/Quality';
import About from './sections/About';
import B2B from './sections/B2B';
import Contact from './sections/Contact';
import useReveal from './hooks/useReveal';
import { useLanguage } from './i18n/LanguageContext';

// The page, top to bottom. Reorder or remove a line here to move or hide a section.
export default function App() {
  const { t } = useLanguage();
  useReveal();

  return (
    <>
      <a className="skip" href="#main">
        {t('skip')}
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ProcessStrip />
        <BusinessLines />
        <Products />
        <Services />
        <Capabilities />
        <Quality />
        <About />
        <B2B />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
