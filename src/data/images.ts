import { DAYZ_HERO, DAYZ_SOLDIER, DAYZ_COVER, DAYZ_MENU, DAYZ_ESP } from './media'
import { DAYZ_OG, getOgImageForPath, PAGE_OG } from './og'

export { DAYZ_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const DAYZ_PRODUCT_HERO = DAYZ_HERO
export const DAYZ_PRODUCT_COVER = DAYZ_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  overwatch: {
    alt: 'Overwatch cheats product artwork for Overwatch on PC',
    title: 'Overwatch Hacks Product Details',
    caption: 'Overwatch Aimbot, ESP, wallhack, loot ESP, radar hack and anti-cheat compatibility',
    heroAlt: 'Overwatch cheats silent aim Aimbot and ESP features',
    heroTitle: 'Overwatch Hacks Features',
    heroCaption: 'Review Overwatch Aimbot, ESP, radar hack and current anti-cheat status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: DAYZ_SOLDIER,
    og: PAGE_OG.home,
    alt: 'Overwatch cheats Aimbot and ESP artwork for Overwatch on PC',
    title: 'Overwatch Hacks',
    caption: 'Overwatch Aimbot, ESP, wallhack and radar hack overview.',
  },
  forums: {
    src: DAYZ_HERO,
    og: PAGE_OG.forums,
    alt: 'Overwatch cheats product artwork',
    title: 'Overwatch Hacks Guides',
    caption: 'Setup, Aimbot and ESP guides for Overwatch.',
  },
  reviews: {
    src: DAYZ_ESP,
    og: PAGE_OG.reviews,
    alt: 'Overwatch cheats review artwork',
    title: 'Overwatch Hacks Reviews',
    caption: 'Feature and compatibility feedback for Overwatch.',
  },
  faq: {
    src: DAYZ_MENU,
    og: PAGE_OG.faq,
    alt: 'Overwatch cheats FAQ artwork',
    title: 'Overwatch Hacks FAQ',
    caption: 'Compatibility, feature and setup answers for Overwatch.',
  },
  support: {
    src: DAYZ_HERO,
    og: PAGE_OG.support,
    alt: 'Overwatch cheats support artwork',
    title: 'Overwatch Hacks Support',
    caption: 'Delivery, loader and setup support for Overwatch cheats.',
  },
  product: {
    src: DAYZ_COVER,
    og: PAGE_OG.product,
    alt: 'Overwatch Aimbot ESP and radar hack product artwork',
    title: 'Overwatch Hacks Features',
    caption: 'Product details for Overwatch Aimbot and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return DAYZ_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return DAYZ_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
