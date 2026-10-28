import { createContext, useCallback, useContext, useMemo, useState } from 'react';

// Lets any "Inquire" / "Request this service" button open the quote form
// with the request type and product/service already selected.
const QuoteContext = createContext(null);

export function QuoteProvider({ children }) {
  const [request, setRequest] = useState(null);

  const requestQuote = useCallback((type, item = '') => {
    setRequest({ type, item, at: Date.now() });
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('quote')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    try {
      history.replaceState(null, '', '#quote');
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(() => ({ request, requestQuote }), [request, requestQuote]);
  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  return useContext(QuoteContext);
}
