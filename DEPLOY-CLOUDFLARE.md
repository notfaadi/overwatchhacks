# Deploy on Cloudflare (fix “no repositories”)

Primary remote: **`https://github.com/notfaadi/overwatchhacks`** · branch **`main`**.

(Legacy copy may exist at `notfaadiroziroti-debug/overwatch-hacks`.)

Cloudflare shows **“There are no repositories on this GitHub account”** when the **Cloudflare GitHub App** is not allowed to read your repos (common with **private** repos or **zero repos selected** during install).

### Fix the empty repo list (do this first)

1. Open (while logged in as **`notfaadiroziroti-debug`**):  
   **https://github.com/apps/cloudflare-workers-and-pages/installations/new**
2. Choose **Only select repositories** → pick **`overwatch-hacks`**, or choose **All repositories**.
3. In Cloudflare → **Workers & Pages** → connect GitHub again → **`overwatch-hacks`** should appear.

If the repo page is 404 in the browser, you are on the wrong GitHub account, or the repo is private and you are not signed in.

**Optional:** **Settings → General → Danger zone → Change visibility → Public** so “Import Git URL” works without extra tokens.

## Option A — Cloudflare dashboard Git connect

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
