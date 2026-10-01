import { DAYZ_OG } from './images'
import { PAGE_OG } from './og'
import { ALL_SEO_KEYWORDS } from './seo-keywords'

export const SITE_URL = 'https://overwatchhack.org'
export const SITE_NAME = 'Overwatch Hacks'
export const SITE_HOST = 'overwatchhack.org'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Overwatch / Overwatch cheats for PC (worldwide).
 * Canonical host is apex https://overwatchhack.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy Overwatch hacks for the Windows PC client — aim assist, player ESP, ultimate tracking, wallhack and radar, with a live security status and instant digital delivery.'

/** Backend SEO vocabulary — surfaced in JSON-LD knowsAbout, not as a public keyword grid. */
export const SITE_ABOUT = [...ALL_SEO_KEYWORDS] as readonly string[]

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = DAYZ_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Overwatch Hacks — Undetected Aimbot, ESP & Wallhack',
    description:
      'Undetected Overwatch 2 hacks for PC: aimbot, wallhack, ESP and radar. Live anti-cheat status, setup forums and secure checkout — Season 14.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Overwatch Hacks — Overwatch Aimbot, ESP and radar hack for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'How to Hack Overwatch 2025 | Step-by-Step Guide | No Ban',
    description:
      'Complete guide to installing Overwatch hacks safely. Avoid detection, configure settings, and stay undetected. Works for beginners. Updated methods.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Overwatch Hacks setup guides for Aimbot, ESP and anti-cheat',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Best Overwatch Hacks 2025 | Top 5 Cheats Reviewed & Tested',
    description:
      'We tested 47 Overwatch hacks. Here are the only 5 that actually work in 2025. Undetected, feature-rich, and affordable. See our #1 pick.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Overwatch Hacks buyer reviews for Overwatch',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Is Overwatch Hack Safe? | Ban Risks & Detection 2025 | FAQ',
    description:
      'Everything about Overwatch hack safety. Detection methods, ban rates, and how to avoid getting banned. Read before downloading any cheat.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Overwatch Hacks FAQ — price, anti-cheat and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Overwatch Hack Not Working? | Fix Errors & Troubleshooting 2025',
    description:
      'Common Overwatch cheat problems solved. Black screen, injection failed, game crash fixes. Get your hack working now with our guide.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Overwatch Hacks support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'Overwatch 2 Cheats | Working Hacks, Aimbots & ESP [Undetected 2025]',
    description:
      'Premium Overwatch 2 hacks with humanized aimbot, 3D radar, and loot unlocker. Private build, no detection history. Download now for Windows 10/11.',
    path: '/overwatch-hacks',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Overwatch Aimbot, ESP and radar hack product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Overwatch Hacks — Undetected Aimbot, ESP & Wallhack',
  h2Intro:
    'Buy undetected Overwatch 2 cheats with honest status labels',
  h2Features: 'Overwatch 2 aimbot, ESP, wallhack, triggerbot & radar',
  h2Featured: 'Overwatch ESP and silent aim Aimbot',
  h2About: 'Clear anti-cheat status before you buy Overwatch cheats',
  h2Access: 'Buy Overwatch Hacks',
  h2Faq: 'Overwatch Hacks FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
