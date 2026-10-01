import { mkdir } from 'fs/promises'
import { join } from 'path'
import sharp from 'sharp'

const outDir = join(process.cwd(), 'public', 'media')
await mkdir(outDir, { recursive: true })

const w = 1920
const h = 1080

const svg = `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#030408"/>
      <stop offset="40%" stop-color="#12151c"/>
      <stop offset="100%" stop-color="#050608"/>
    </linearGradient>
    <radialGradient id="core" cx="50%" cy="42%" r="38%">
      <stop offset="0%" stop-color="#ffe7c2" stop-opacity="0.9"/>
      <stop offset="22%" stop-color="#ff9f1a" stop-opacity="0.75"/>
      <stop offset="55%" stop-color="#ff6a00" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#ff6a00" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="teal" cx="12%" cy="88%" r="50%">
      <stop offset="0%" stop-color="#2ee6d6" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#2ee6d6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="slash" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff9f1a" stop-opacity="0"/>
      <stop offset="45%" stop-color="#ffd08a" stop-opacity="0.85"/>
      <stop offset="55%" stop-color="#ffffff" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#ff9f1a" stop-opacity="0"/>
    </linearGradient>
    <filter id="b"><feGaussianBlur stdDeviation="22"/></filter>
    <filter id="b2"><feGaussianBlur stdDeviation="8"/></filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#teal)" filter="url(#b)"/>
  <ellipse cx="960" cy="460" rx="680" ry="380" fill="url(#core)" filter="url(#b)"/>
  <rect x="-120" y="320" width="2160" height="8" fill="url(#slash)" transform="rotate(-8 960 540)" filter="url(#b2)"/>
  <rect x="-120" y="520" width="2160" height="4" fill="url(#slash)" transform="rotate(6 960 540)" opacity="0.6"/>
  ${Array.from({ length: 48 }, (_, i) => {
    const x = (i * 41) % w
    const y = 80 + ((i * 97) % 900)
    const r = 1 + (i % 3)
    const o = 0.08 + (i % 5) * 0.04
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" fill-opacity="${o}"/>`
  }).join('')}
  <path d="M0 720 Q480 640 960 700 T1920 760 L1920 1080 L0 1080 Z" fill="#000" fill-opacity="0.65"/>
  <path d="M0 820 Q960 740 1920 860 L1920 1080 L0 1080 Z" fill="#000" fill-opacity="0.45"/>
</svg>`

const out = join(outDir, 'overwatch-hero-banner.webp')
await sharp(Buffer.from(svg)).webp({ quality: 93 }).toFile(out)
console.log('Wrote', out)
