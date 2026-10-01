import { copyFile, mkdir } from 'fs/promises'
import { join } from 'path'
import sharp from 'sharp'

const root = process.cwd()
const media = join(root, 'public', 'media')
await mkdir(media, { recursive: true })

const sourceAsset = join(
  root,
  'assets',
  'overwatch-hero-wallpaper.jpg',
)
const fallbackAsset =
  'C:\\Users\\Faadi Khan\\.cursor\\projects\\c-Users-Faadi-Khan-Downloads-overwatch-hack\\assets\\c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_134883f228d3c0ff16dc26cbc8b132aa_images_image-2f16a51e-1347-42dc-81bc-fb7d8a149db6.jpg'

const input = sourceAsset
let inputPath = input
try {
  await sharp(input).metadata()
} catch {
  inputPath = fallbackAsset
}

await copyFile(inputPath, join(media, 'overwatch-hero-wallpaper-source.jpg'))

const W = 1920
const H = 1080

const meta = await sharp(inputPath).metadata()
const srcW = meta.width ?? 1080
const srcH = meta.height ?? 1920

/** Blurred fill for wide sides */
const bgBuffer = await sharp(inputPath)
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .blur(28)
  .modulate({ brightness: 0.72, saturation: 1.05 })
  .toBuffer()

/** Sharp center — fit height so logo stays visible on ultrawide */
const fgHeight = Math.round(H * 0.92)
const fgBuffer = await sharp(inputPath)
  .resize({ height: fgHeight, fit: 'inside' })
  .modulate({ brightness: 0.95, saturation: 1.08 })
  .toBuffer()

const fgMeta = await sharp(fgBuffer).metadata()
const fgW = fgMeta.width ?? Math.round((srcW / srcH) * fgHeight)

const left = Math.round((W - fgW) / 2)
const top = Math.round((H - fgHeight) / 2)

const vignette = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="v" cx="50%" cy="45%" r="72%">
      <stop offset="0%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.55"/>
    </radialGradient>
    <linearGradient id="b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#000" stop-opacity="0.35"/>
      <stop offset="55%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#0c0d10" stop-opacity="0.92"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#v)"/>
  <rect width="100%" height="100%" fill="url(#b)"/>
</svg>`)

const out = join(media, 'overwatch-hero-banner.webp')

await sharp(bgBuffer)
  .composite([
    { input: fgBuffer, left, top },
    { input: vignette, blend: 'multiply' },
  ])
  .webp({ quality: 90 })
  .toFile(out)

console.log('Wrote', out, `(${W}x${H}) from`, inputPath)
