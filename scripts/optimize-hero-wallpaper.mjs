import { mkdir } from 'fs/promises'
import { join } from 'path'
import sharp from 'sharp'

const media = join(process.cwd(), 'public', 'media')
await mkdir(media, { recursive: true })

const input = join(process.cwd(), 'assets', 'overwatch-2-hero-banner.png')

/** Wide 16:9 exports — logo centered on white, sharp for full-viewport cover. */
for (const [name, w] of [
  ['overwatch-hero-wallpaper-4k.webp', 3840],
  ['overwatch-hero-wallpaper-2k.webp', 2560],
  ['overwatch-hero-wallpaper.webp', 1920],
]) {
  const h = Math.round(w * (9 / 16))
  const out = join(media, name)
  await sharp(input)
    .rotate()
    .resize(w, h, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .sharpen({ sigma: 0.45, m1: 0.45, m2: 0.2 })
    .webp({ quality: 94, effort: 6 })
    .toFile(out)
  console.log('Wrote', out)
}
