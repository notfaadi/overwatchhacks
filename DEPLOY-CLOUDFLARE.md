# Deploy on Cloudflare (fix “no repositories”)

Your code **is** on GitHub at `notfaadiroziroti-debug/overwatch-hacks` on branch `main` (commit `59f965f`).  
Cloudflare shows **no repositories** when the GitHub connection cannot see your repos — usually a **private repo** or **Cloudflare GitHub app permissions**.

## Option A — Fix GitHub ↔ Cloudflare (recommended for auto deploy)

1. Sign in to GitHub as **`notfaadiroziroti-debug`** and open:  
   https://github.com/notfaadiroziroti-debug/overwatch-hacks  
   (If you get 404, you are on the wrong GitHub account.)

2. **Make the repo public** (easiest for Cloudflare):  
   **Settings → General → Danger zone → Change repository visibility → Public**

3. On GitHub: **Settings → Applications → Installed GitHub Apps** (or **Authorized OAuth Apps**) → find **Cloudflare** → **Configure** → **Repository access** → **All repositories** (or select `overwatch-hacks`).

4. In Cloudflare: disconnect GitHub and connect again, then pick **`overwatch-hacks`**.

5. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`

This project also ships a **Cloudflare Worker** (`wrangler.toml`). For **Workers**, connect the same repo or use Option B.

## Option B — Deploy from your PC (no Git connect)

```bash
npm install
npm run build
npx wrangler login
npx wrangler deploy
```

## Option C — Import by Git URL (Pages)

Use **Clone a public repository via Git URL**:

```
https://github.com/notfaadiroziroti-debug/overwatch-hacks.git
```

Branch: `main`.  
Works only if the repo is **public** or you provide a token Cloudflare accepts.
