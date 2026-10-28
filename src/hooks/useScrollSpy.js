import { useEffect, useState } from 'react';

// Returns the id of the section currently in the middle of the screen (for menu highlighting).
export default function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveId(entry.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
