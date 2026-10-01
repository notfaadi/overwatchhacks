# Deploy on Cloudflare

## Site works in Cloudflare but browser shows `DNS_PROBE_FINISHED_NXDOMAIN`

That error means **your PC or router’s DNS resolver does not know `overwatchhack.org` yet** — not that the Worker deploy failed.

The live Worker **does** serve pages when the hostname resolves (custom domains in **Workers & Pages → overwatchhacks → Domains**).

### Fix on your PC

1. **Registrar nameservers** (where you bought the domain) must be Cloudflare only, for example:
   - `cody.ns.cloudflare.com`
   - `khloe.ns.cloudflare.com`
2. In **Cloudflare → Websites → overwatchhack.org**, zone status must be **Active** (not “Pending nameserver update”).
3. **Flush DNS** (Windows, admin PowerShell): `ipconfig /flushdns`
4. Set adapter DNS to **1.1.1.1** and **1.0.0.1** (or use Cloudflare WARP), then reload `https://overwatchhack.org`.
5. Test on **mobile data** (not Wi‑Fi). If it works there, your router DNS is stale — reboot the router or change its upstream DNS.

### Sitemaps (after DNS works)

| URL | Purpose |
|-----|---------|
| `https://overwatchhack.org/sitemap.xml` | Full XML sitemap (84 pages + images) for Google/Bing |
| `https://overwatchhack.org/sitemap-urls.txt` | Plain list of canonical page URLs |
| `https://overwatchhack.org/robots.txt` | Points crawlers at the XML sitemap |

Worker preview URL (`*.workers.dev`) may **404** when the project uses **custom domains only** — use the apex domain above.

---

## Fix “no repositories” on Git connect

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
