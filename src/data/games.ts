export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is Overwatch hacks only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'overwatch', name: 'Overwatch', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-hacks`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  if (lower.endsWith('-hacks')) return lower.slice(0, -6)
  if (lower.endsWith('-cheats')) return lower.slice(0, -7)
  return lower
}

export const GUIDE_FEATURES = [
  {
    name: 'Aim assist (silent aim)',
    text: 'Tracking with FOV, smoothing and hitbox selection so shots stay on target through duels, without a visible snap an observer can call out.',
  },
  {
    name: 'Player ESP / Wallhack',
    text: 'See heroes through walls and corners with distance, health and role tags when the build supports it — read a fight before you take the angle.',
  },
  {
    name: 'Ultimate & ability ESP',
    text: 'Track enemy ultimates and key cooldowns so you stop walking into a grav, shatter or deadeye you could have waited out.',
  },
  {
    name: 'Health & outline ESP',
    text: 'Color outlines by health and team so you finish low targets first and stop dumping damage into a pocketed tank.',
  },
  {
    name: 'Radar',
    text: '2D radar for off-screen heroes on every map — catch the flank before it reaches your backline.',
  },
  {
    name: 'Role intel',
    text: 'Mark supports, tanks and DPS so focus fire lands on the hero that actually wins the fight.',
  },
  {
    name: 'Quick Play, Competitive & custom games',
    text: 'Built for the live Overwatch client on Windows, including custom games and the usual public queues.',
  },
  {
    name: 'Spoofer + Cleaner',
    text: 'Hardware-ID cover and a trace refresh after a ban or a hardware swap — included with the package.',
  },
  {
    name: 'Security status + support',
    text: 'Clear-to-load or Updating is reviewed after game patches before you load.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
