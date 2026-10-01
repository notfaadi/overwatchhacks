import { DAYZ_HERO } from '../data/media'

type VideoBgProps = {
  /** Full-bleed Overwatch hero image (defaults to product artwork). */
  image?: string
  imageAlt?: string
  /** Zoom/crop to hide baked-in screenshot UI in source art */
  cinematic?: boolean
  /** Animated glow overlay for homepage-style heroes */
  pulse?: boolean
  /** Cover the entire area with the image (no letterbox / composite banner look) */
  wallpaper?: boolean
}

/** Full-bleed static Overwatch hero — no legacy video background. */
export function VideoBg({
  image = DAYZ_HERO,
  imageAlt = 'Overwatch cheats Aimbot and ESP product artwork',
  cinematic = false,
  pulse = false,
  wallpaper = false,
}: VideoBgProps) {
  const imgClass = wallpaper
    ? 'hero-video-bg hero-video-bg--wallpaper'
    : `hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover opacity-100 ${
        cinematic ? 'hero-video-bg--cinematic' : 'object-center'
      }`

  return (
    <div
      className={`hero-video-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none select-none ${
        wallpaper ? 'hero-video-wrap--wallpaper' : ''
      }`}
    >
      <div className="absolute inset-0 z-0 bg-z-bg" aria-hidden />
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className={imgClass}
      />
      <div
        className={`hero-video-tint pointer-events-none absolute inset-0 z-[2] ${
          wallpaper ? 'hero-video-tint--wallpaper' : cinematic ? 'hero-video-tint--cinematic' : ''
        }`}
        aria-hidden
      />
      {!wallpaper ? (
        <div className="hero-video-tint-glow pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      ) : null}
      <div
        className={`absolute inset-x-0 bottom-0 z-[3] bg-gradient-to-t from-z-bg via-z-bg/90 to-transparent ${
          wallpaper ? 'h-56 sm:h-64' : 'h-48'
        }`}
      />
      {!wallpaper ? (
        <div className="absolute inset-x-0 top-0 z-[3] h-32 bg-gradient-to-b from-black/75 to-transparent" />
      ) : (
        <div className="absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-black/45 to-transparent sm:h-28" />
      )}
      {cinematic && !wallpaper ? (
        <div
          className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_55%_45%_at_50%_42%,rgba(12,13,16,0.55),transparent_70%)]"
          aria-hidden
        />
      ) : null}
      {pulse && !wallpaper ? (
        <div className="hero-pulse pointer-events-none absolute inset-0 z-[4]" aria-hidden />
      ) : null}
    </div>
  )
}
