import { ALL_EXTENDED_KEYWORDS } from './seo-keywords-extended'

/** Target search terms — grouped for forum SEO guides and JSON-LD. */
export const SEO_KEYWORD_GROUPS = [
  {
    id: 'primary',
    label: 'Primary',
    keywords: [
      'overwatch hacks',
      'overwatch cheats',
      'overwatch hack',
      'overwatch cheat',
      'overwatch aimbot',
      'overwatch wallhack',
      'overwatch esp',
      'overwatch hack download',
      'overwatch cheat download',
      'free overwatch hacks',
      'free overwatch cheats',
    ],
  },
  {
    id: 'long-tail',
    label: 'Long-tail',
    keywords: [
      'overwatch aimbot 2025',
      'undetected overwatch hacks',
      'overwatch hack undetected',
      'working overwatch cheats',
      'overwatch cheat engine',
      'overwatch hack tool',
      'overwatch aim assist hack',
      'overwatch triggerbot',
      'overwatch no recoil hack',
      'overwatch speed hack',
      'overwatch hack menu',
      'overwatch internal cheat',
      'overwatch external cheat',
    ],
  },
  {
    id: 'questions',
    label: 'Questions',
    keywords: [
      'how to hack overwatch',
      'how to cheat in overwatch',
      'is there a working overwatch hack',
      'best overwatch aimbot',
      'safest overwatch cheat',
      'how to get aimbot on overwatch',
      'can you hack overwatch',
      'overwatch hack free download',
      'how to wallhack in overwatch',
    ],
  },
  {
    id: 'overwatch-2',
    label: 'Overwatch 2',
    keywords: [
      'overwatch 2 hacks',
      'overwatch 2 cheats',
      'overwatch 2 aimbot',
      'overwatch 2 wallhack',
      'overwatch 2 esp',
      'overwatch 2 hack 2025',
      'overwatch 2 cheat 2025',
    ],
  },
  {
    id: 'technical',
    label: 'Technical',
    keywords: [
      'overwatch hack injector',
      'overwatch dll cheat',
      'overwatch kernel cheat',
      'overwatch driver hack',
      'overwatch bypass',
      'overwatch anti-cheat bypass',
      'overwatch radar hack',
      'overwatch glow hack',
      'overwatch skin changer',
      'overwatch unlock all',
    ],
  },
  {
    id: 'comparison',
    label: 'Reviews & comparisons',
    keywords: [
      'best overwatch hacks 2025',
      'top overwatch cheats',
      'overwatch hack review',
      'overwatch cheat comparison',
      'paid vs free overwatch hacks',
      'safest overwatch hack',
      'best aimbot for overwatch',
      'overwatch hack tier list',
    ],
  },
  {
    id: 'platform',
    label: 'Platform',
    keywords: [
      'overwatch pc hacks',
      'overwatch pc cheats',
      'overwatch steam hack',
      'overwatch battle.net hack',
      'overwatch console hacks',
      'overwatch xbox cheats',
      'overwatch ps5 hacks',
    ],
  },
  {
    id: 'updates',
    label: 'Updates',
    keywords: [
      'overwatch hack working 2025',
      'new overwatch cheat',
      'latest overwatch hack',
      'overwatch hack update',
      'overwatch cheat patch',
      'overwatch hack after update',
      'overwatch season 14 hack',
    ],
  },
  {
    id: 'lsi',
    label: 'Related',
    keywords: [
      'overwatch mod menu',
      'overwatch scripts',
      'overwatch macros',
      'overwatch bot',
      'overwatch farming bot',
      'overwatch xp hack',
      'overwatch competitive hack',
      'overwatch ranked cheat',
    ],
  },
] as const

export const ALL_SEO_KEYWORDS = [
  ...SEO_KEYWORD_GROUPS.flatMap((g) => g.keywords),
  ...ALL_EXTENDED_KEYWORDS,
]

export const RESERVED_LANDING_SLUGS = new Set([
  'forums',
  'faq',
  'reviews',
  'support',
  'privacy',
  'terms',
  'refunds',
  'overwatch-hacks',
  'dayz-cheats',
  '404',
  'index',
])

export function keywordToSlug(keyword: string) {
  return keyword
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function titleCaseKeyword(keyword: string) {
  return keyword.replace(/\b\w/g, (c) => c.toUpperCase())
}
