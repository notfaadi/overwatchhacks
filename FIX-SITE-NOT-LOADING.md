# `overwatchhack.org` shows DNS_PROBE_FINISHED_NXDOMAIN

Your **Cloudflare deploy is OK**. The site answers on the public internet. The error is on **your PC’s DNS path** (Wi‑Fi router **192.168.100.1**).

## What we measured

| DNS server | `A` record (IPv4) for overwatchhack.org |
|------------|-------------------------------------------|
| Cloudflare authoritative (`cody.ns.cloudflare.com`) | Yes — `104.21.47.34`, `172.67.144.46` |
| Google / Cloudflare public (`8.8.8.8`, `1.1.1.1`) | Yes |
| Your router (`192.168.100.1`) | **No** — only IPv6 (`AAAA`) or timeout |

Chrome needs a working **IPv4 `A` record** (or working IPv6 end‑to‑end). Your router/ISP resolver does not return `A`, so you get **NXDOMAIN**.

Some ISPs also **filter** domains with words like “hack” on their DNS — same symptom. Using **1.1.1.1** bypasses that.

## Fix (pick one)

### A — Recommended: Cloudflare DNS on Windows (2 minutes)

1. **Right‑click** `scripts\Fix-DNS-Run-as-Admin.bat` → **Run as administrator** → Yes on UAC.
2. Close Chrome completely, reopen **`https://overwatchhack.org`**.

Or manually: **Settings → Network & Internet → Wi‑Fi → your network → DNS → Manual → IPv4 ON**  
Primary **1.1.1.1**, Secondary **1.0.0.1** → Save → run `ipconfig /flushdns` in a terminal.

### B — Chrome Secure DNS (no admin)

1. Chrome → **Settings → Privacy and security → Security**.
2. **Use secure DNS** → **With Custom** → `https://cloudflare-dns.com/dns-query`
3. Reload the site.

### C — Cloudflare dashboard (only if zone is “Pending”)

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **overwatchhack.org** → must be **Active**.
2. **DNS → Records**: apex `@` and `www` should be **Proxied** (orange cloud) with type **A** or **AAAA** (Workers custom domain usually creates these).
3. At your **domain registrar**, nameservers must be only:
   - `cody.ns.cloudflare.com`
   - `khloe.ns.cloudflare.com`

## Verify

In PowerShell:

```powershell
nslookup -type=A overwatchhack.org 1.1.1.1
```

You should see two IPv4 addresses. Then open **https://overwatchhack.org**.
