import { join } from 'path'
import sharp from 'sharp'

const media = join(process.cwd(), 'public', 'media')
const photo = join(media, 'overwatch-hero-photo.webp')
const cool = join(media, 'overwatch-hero-cool.webp')
const out = join(media, 'overwatch-hero-main.webp')

const base = await sharp(photo)
  .resize(1920, 1080, { fit: 'cover' })
  .modulate({ brightness: 0.72, saturation: 1.15 })
  .toBuffer()

const overlay = await sharp(cool).resize(1920, 1080).png().toBuffer()

await sharp(base)
  .composite([{ input: overlay, blend: 'overlay' }])
  .webp({ quality: 90 })
  .toFile(out)

console.log('Wrote', out)
