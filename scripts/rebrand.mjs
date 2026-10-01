import fs from 'fs'
import path from 'path'

const root = process.cwd()
const skip = new Set(['node_modules', '.git', 'dist', 'public'])
const exts = new Set(['.ts', '.tsx', '.astro', '.css', '.mjs', '.js', '.md', '.json', '.svg'])

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (skip.has(name)) continue
    const p = path.join(dir, name)
    if (p.endsWith('rebrand.mjs')) continue
    const st = fs.statSync(p)
    if (st.isDirectory()) walk(p, out)
    else if (exts.has(path.extname(name))) out.push(p)
  }
  return out
}

let n = 0
for (const file of walk(root)) {
  let s = fs.readFileSync(file, 'utf8')
  const orig = s
  const holds = []
  s = s.replace(/(\/(?:media|videos|og)\/dayz[\w.-]*)/g, (m) => {
    holds.push(m)
    return `__ASSET_${holds.length - 1}__`
  })
  const pairs = [
    ['https://dayzcheats.io', 'https://overwatchhack.org'],
    ['dayzcheats.io', 'overwatchhack.org'],
    ['dayzcheats', 'overwatchhacks'],
    ['/dayz-cheats', '/overwatch-hacks'],
    ['/dayz-hacks', '/overwatch-hacks'],
    ['DayZ Cheats', 'Overwatch Hacks'],
    ['DayZ Cheat', 'Overwatch Hack'],
    ['dayz cheats', 'overwatch hacks'],
    ['dayz cheat', 'overwatch hack'],
    ['DayZ Standalone', 'Overwatch'],
    ['DayZ', 'Overwatch'],
    ['dayz hacks', 'overwatch hacks'],
    ['dayz hack', 'overwatch hack'],
    ['dayz', 'overwatch'],
    ['BattlEye', 'anti-cheat'],
    ['battleye', 'anti-cheat'],
  ]
  for (const [a, b] of pairs) s = s.replaceAll(a, b)
  s = s.replace(/__ASSET_(\d+)__/g, (_, i) => holds[Number(i)])
  if (s !== orig) {
    fs.writeFileSync(file, s)
    n++
  }
}
console.log('updated', n, 'files')
