export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What are Overwatch Hacks?',
    a: 'Overwatch Hacks are Overwatch tools on overwatchhack.org — silent-aim Aimbot, player ESP, wallhack, infected and loot ESP, and a 2D radar hack — with live anti-cheat status after game patches.',
  },
  {
    q: 'How much do Overwatch cheats cost?',
    a: `Overwatch cheats start from $35 for short access. Longer licenses cost more. Always confirm live anti-cheat status and the price on overwatchhack.org before checkout.`,
  },
  {
    q: 'Do you sell Overwatch hacks for other games?',
    a: 'No. overwatchhack.org sells Overwatch cheats / Overwatch hacks only — one product, no multi-game catalog.',
  },
  {
    q: 'Is Aimbot the main feature?',
    a: 'Aimbot is optional. Most buyers lead with Overwatch ESP, loot highlighting and radar awareness, then enable silent aim only if they want it.',
  },
  {
    q: 'How do you handle anti-cheat updates?',
    a: 'We publish live clear-to-load or Updating labels after Overwatch and anti-cheat patches. Always check status on overwatchhack.org before you load.',
  },
  {
    q: 'What is Overwatch ESP / wallhack?',
    a: 'Overwatch ESP and wallhack show survivors, infected and loot through walls with distance and health when supported. Loot ESP highlights guns, ammo and medical gear so empty houses stop wasting your time.',
  },
  {
    q: 'What is a Overwatch radar hack?',
    a: 'The radar hack is a 2D overlay for off-screen survivors and third parties — useful for military loot approaches and avoiding ambushes on Chernarus or Livonia.',
  },
  {
    q: 'What features are included?',
    a: 'Overwatch Aimbot with silent aim, player ESP, infected ESP, loot and item ESP, radar hack, base and stash intel, spoofer and stream-proof options — Overwatch on Windows PC only. See the Features Checklist guide for the full list.',
  },
  {
    q: 'Do Overwatch Hacks work on official and private servers?',
    a: 'Yes. The cheats run on official Overwatch servers and on private servers using most common mod setups. Heavily modded servers with custom anti-cheat scripts can behave differently — ask support before you buy.',
  },
  {
    q: 'How do I buy Overwatch cheats?',
    a: 'Start on the homepage, confirm live anti-cheat status and review the price from $35. Open Product details for compatibility and features, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load Overwatch Hacks?',
    a: 'After checkout, follow the Complete Setup forum thread for the current load order. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where do I get Overwatch Hacks support?',
    a: 'Use the Support page and your checkout order channel. Include current anti-cheat status and whether you need load, menu or delivery help.',
  },
  {
    q: 'Where can I read Overwatch Hacks reviews?',
    a: 'Player reviews with ratings are on the Reviews page. They cover ESP usefulness, status honesty and patch survival before you buy.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page — delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official Overwatch site?',
    a: 'No. overwatchhack.org sells third-party Overwatch hacks and cheats only. Buy the game from Battle.net; we are not affiliated with Blizzard Entertainment.',
  },
  {
    q: 'How to hack Overwatch or cheat in Overwatch safely?',
    a: 'Start on overwatchhack.org: confirm undetected status, read the aimbot and ESP guides, then use the official overwatch hack download after checkout — never random free paste links.',
  },
  {
    q: 'Is there a working Overwatch hack after the latest update?',
    a: 'When status shows clear to load, the build is treated as a working Overwatch cheat for the current patch. If it says Updating, wait for the overwatch hack update before you inject or load the menu.',
  },
  {
    q: 'What is the best Overwatch aimbot or safest Overwatch cheat?',
    a: 'Searchers compare best overwatch aimbot and safest overwatch cheat options — we recommend silent aim with conservative FOV, ESP over rage features, and checking top overwatch cheats reviews before purchase.',
  },
  {
    q: 'Can you hack Overwatch on PC, Steam or Battle.net?',
    a: 'Our overwatch pc hacks target the Windows Battle.net and Steam client. Console searches like overwatch xbox cheats or ps5 hacks are listed for SEO but the license is PC-only.',
  },
  {
    q: 'Free overwatch hacks vs paid — which is better?',
    a: 'Free overwatch cheats often lack updates and undetected labels. Paid vs free overwatch hacks comparisons on our keyword pages explain why licensed builds with live status rank higher for ranked and competitive play.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[9],
  SITE_FAQS[11],
]
