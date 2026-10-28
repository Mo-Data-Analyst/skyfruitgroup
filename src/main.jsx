import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Global styles first, so each section's own CSS can build on them.
import './styles/variables.css';
import './styles/base.css';
import { LanguageProvider } from './i18n/LanguageContext';
import { QuoteProvider } from './context/QuoteContext';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <QuoteProvider>
        <App />
      </QuoteProvider>
    </LanguageProvider>
  </StrictMode>,
);
