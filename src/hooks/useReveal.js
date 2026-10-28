import { useEffect } from 'react';

// Fades in every element with the class "rv" when it scrolls into view.
// Skipped for visitors who prefer reduced motion.
export default function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return undefined;
    document.documentElement.classList.add('js-rv');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        }),
      { rootMargin: '0px 0px -6% 0px' },
    );
    document.querySelectorAll('.rv:not(.in)').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
