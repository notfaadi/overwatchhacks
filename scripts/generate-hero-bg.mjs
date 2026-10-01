import { mkdir, writeFile } from 'fs/promises'
import { join } from 'path'
import sharp from 'sharp'

const outDir = join(process.cwd(), 'public', 'media')
await mkdir(outDir, { recursive: true })

const w = 1920
const h = 1080

const svg = `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sky" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0b0f"/>
      <stop offset="45%" stop-color="#141820"/>
      <stop offset="100%" stop-color="#0c0d10"/>
    </linearGradient>
    <radialGradient id="glowL" cx="20%" cy="75%" r="55%">
      <stop offset="0%" stop-color="#ff8a2a" stop-opacity="0.55"/>
      <stop offset="55%" stop-color="#c2410c" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#0a0b0f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowR" cx="85%" cy="25%" r="50%">
      <stop offset="0%" stop-color="#ffd08a" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#f99e1a" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0a0b0f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vignette" cx="50%" cy="45%" r="70%">
      <stop offset="35%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.72"/>
    </radialGradient>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#f99e1a" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
    <filter id="blur">
      <feGaussianBlur stdDeviation="28"/>
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#sky)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <ellipse cx="380" cy="820" rx="520" ry="280" fill="url(#glowL)" filter="url(#blur)"/>
  <ellipse cx="1580" cy="220" rx="480" ry="260" fill="url(#glowR)" filter="url(#blur)"/>
  <path d="M0 680 Q960 520 1920 760 L1920 1080 L0 1080 Z" fill="#f99e1a" fill-opacity="0.07"/>
  <path d="M0 780 Q960 640 1920 860 L1920 1080 L0 1080 Z" fill="#000" fill-opacity="0.35"/>
  <rect width="100%" height="100%" fill="url(#vignette)"/>
  <text x="960" y="540" text-anchor="middle" fill="#ffffff" fill-opacity="0.03" font-family="Arial Black, sans-serif" font-size="280" font-weight="900">OW</text>
</svg>`

const webpPath = join(outDir, 'overwatch-hero-cool.webp')
const pngPath = join(outDir, 'overwatch-hero-cool.png')

await sharp(Buffer.from(svg))
  .webp({ quality: 88 })
  .toFile(webpPath)

await sharp(Buffer.from(svg)).png().toFile(pngPath)

console.log('Wrote', webpPath)
