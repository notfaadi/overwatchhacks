const WALLPAPER_2K = '/media/overwatch-hero-wallpaper-2k.webp'
const WALLPAPER_4K = '/media/overwatch-hero-wallpaper-4k.webp'
const WALLPAPER_FALLBACK = '/media/overwatch-hero-wallpaper.webp'
const WALLPAPER_ALT =
  'Overwatch 2 hero artwork for undetected aimbot, ESP and wallhack cheats on PC'

/** Fixed full-viewport wallpaper behind the entire homepage. */
export function HomeWallpaper() {
  return (
    <div className="home-wallpaper-fixed home-wallpaper-fixed--brand pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <picture>
        <source media="(min-width: 2000px)" srcSet={WALLPAPER_4K} type="image/webp" />
        <source media="(min-width: 1024px)" srcSet={WALLPAPER_2K} type="image/webp" />
        <img
          src={WALLPAPER_FALLBACK}
          alt={WALLPAPER_ALT}
          title={WALLPAPER_ALT}
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
          className="home-wallpaper-img"
        />
      </picture>
      <div className="home-wallpaper-shine pointer-events-none absolute inset-0" />
      <div className="home-wallpaper-scrim absolute inset-0" />
    </div>
  )
}
