// Photo tiles in the "Capabilities" section. Text keys live in src/i18n/translations.js.
import intakeMangoCrates from '../assets/images/facility/intake-mango-crates.webp';
import washingLine from '../assets/images/facility/washing-line.webp';
import freezingTunnels from '../assets/images/facility/freezing-tunnels.webp';
import packingDicedMango from '../assets/images/facility/packing-diced-mango.webp';

export const FACILITY_TILES = [
  {
    id: 'intake',
    tall: true,
    image: intakeMangoCrates,
    width: 760,
    height: 1064,
    alt: 'capIntakeAlt',
    title: 'capIntakeH',
    text: 'capIntakeP',
  },
  {
    id: 'washing',
    image: washingLine,
    width: 711,
    height: 533,
    alt: 'capLineAlt',
    title: 'capLineH',
    text: 'capLineP',
  },
  {
    id: 'tunnels',
    image: freezingTunnels,
    width: 820,
    height: 615,
    alt: 'capTunAlt',
    title: 'capTunH',
    text: 'capTunP',
    stat: { value: '3', label: 'capTunStat' },
  },
  {
    id: 'packing',
    image: packingDicedMango,
    width: 720,
    height: 540,
    alt: 'capPackAlt',
    title: 'capPackH',
    text: 'capPackP',
  },
];
