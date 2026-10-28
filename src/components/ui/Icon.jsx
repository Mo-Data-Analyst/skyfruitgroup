// All icons used on the site (simple line icons drawn in SVG).
// Usage: <Icon name="leaf" />. To add an icon, add an entry to ICONS.

const ICONS = {
  leaf: {
    viewBox: '0 0 24 24',
    props: {
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.7',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    body: (
      <>
        <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
        <path d="M5 19c3-4 6-7 10-9" />
      </>
    ),
  },
  truck: {
    viewBox: '0 0 24 24',
    props: {
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.7',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    body: (
      <>
        <path d="M2 6.5h11v9.5H2zM13 9.5h4.2l2.8 3.2v3.3h-7" />
        <circle cx="6" cy="17.5" r="1.8" />
        <circle cx="16.5" cy="17.5" r="1.8" />
      </>
    ),
  },
  drops: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M8 3S4 8 4 11a4 4 0 0 0 8 0c0-3-4-8-4-8z" />
        <path d="M17 10s-3 3.6-3 5.6a3 3 0 0 0 6 0c0-2-3-5.6-3-5.6z" />
      </>
    ),
  },
  snow: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinecap: 'round' },
    body: (
      <>
        <path d="M12 2.5v19M3.8 7.2l16.4 9.6M3.8 16.8l16.4-9.6" />
        <path d="M9.3 4.3 12 6l2.7-1.7M9.3 19.7 12 18l2.7 1.7" />
      </>
    ),
  },
  box: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M3 7.2 12 3l9 4.2v9.6L12 21l-9-4.2z" />
        <path d="M3 7.2 12 11.4l9-4.2M12 11.4V21" />
      </>
    ),
  },
  sack: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M8 3.5h8l-1.5 3c3 1.5 4.5 5 4.5 8.5 0 4-3 5.5-7 5.5s-7-1.5-7-5.5c0-3.5 1.5-7 4.5-8.5z" />
        <path d="M9.5 6.5h5" />
      </>
    ),
  },
  bag: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M5 4h14l-1 16H6z" />
        <path d="M5 8h14" />
        <path d="M9 12h6" />
      </>
    ),
  },
  layers: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="m12 3 9 5-9 5-9-5z" />
        <path d="m3 13 9 5 9-5" />
      </>
    ),
  },
  check: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M5 12.5 10 17l9-10" />
      </>
    ),
  },
  hand: {
    viewBox: '0 0 24 24',
    props: {
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.7',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    body: (
      <>
        <path d="M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9a1.5 1.5 0 0 1 3 0v5a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-2.7L3.5 15a1.5 1.5 0 0 1 2.4-1.8L7 14.5" />
      </>
    ),
  },
  doc: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v4h4M9 12h6M9 16h6" />
      </>
    ),
  },
  award: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <circle cx="12" cy="9" r="5.5" />
        <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
      </>
    ),
  },
  pin: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
  globe: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7' },
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
      </>
    ),
  },
  phone: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M5 3.5h4l1.5 4-2.3 1.5a11 11 0 0 0 6.8 6.8l1.5-2.3 4 1.5v4a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2z" />
      </>
    ),
  },
  chat: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M4 19.5 5.3 16A8 8 0 1 1 8 18.6z" />
      </>
    ),
  },
  mail: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M3 5.5h18v13H3z" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
  },
  arrow: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' },
    body: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
  },
  menu: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round' },
    body: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
  },
  close: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round' },
    body: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),
  },
  send: {
    viewBox: '0 0 24 24',
    props: { fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinejoin: 'round', strokeLinecap: 'round' },
    body: (
      <>
        <path d="M4 12 20 4l-4 16-4-6z" />
        <path d="M12 14 20 4" />
      </>
    ),
  },
};

export default function Icon({ name, className }) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg className={className} viewBox={icon.viewBox} aria-hidden="true" focusable="false" {...icon.props}>
      {icon.body}
    </svg>
  );
}
