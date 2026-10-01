import { CheatMenuPanel } from './CheatMenuPanel'
import {
  AIMBOT_FEATURES,
  HERO_SCRIPTS,
  MISC_FEATURES,
  VISUAL_FEATURES,
} from '../data/hack-menu-features'
import { HOME_HEADINGS } from '../data/site'

function FeatureBox({ title, items }: { title: string; items: readonly string[] }) {
  const mid = Math.ceil(items.length / 2)
  const colA = items.slice(0, mid)
  const colB = items.slice(mid)

  return (
    <article className="cheat-feature-box overflow-hidden rounded-md border border-z-soft/25 bg-z-card">
      <header className="border-b border-z-soft/15 bg-z-elevated px-3 py-3 text-center text-xs font-bold tracking-[0.2em] text-z-accent sm:text-sm">
        {title}
      </header>
      <div className="grid gap-x-4 gap-y-2 px-4 py-4 sm:grid-cols-2 sm:gap-y-2.5">
        <ul className="space-y-2">
          {colA.map((label) => (
            <li key={label} className="flex items-start gap-2 text-sm leading-snug text-z-ink/85">
              <span className="mt-0.5 shrink-0 text-z-accent" aria-hidden>
                ✓
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {colB.map((label) => (
            <li key={label} className="flex items-start gap-2 text-sm leading-snug text-z-ink/85">
              <span className="mt-0.5 shrink-0 text-z-accent" aria-hidden>
                ✓
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function HackMenuShowcase() {
  return (
    <section id="features" className="page-band page-x border-t border-z-soft/15 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-z-accent">
            Live menu preview
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {HOME_HEADINGS.h2Features}
          </h2>
        </div>

        <div className="mx-auto max-w-lg sm:max-w-xl">
          <CheatMenuPanel />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <FeatureBox title="AIMBOT OPTIONS" items={AIMBOT_FEATURES} />
          <FeatureBox title="VISUAL OPTIONS" items={VISUAL_FEATURES} />
          <FeatureBox title="HERO SCRIPTS" items={HERO_SCRIPTS} />
          <FeatureBox title="MISCELLANEOUS OPTIONS" items={MISC_FEATURES} />
        </div>

        <div className="glass-liquid page-card mt-10 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-lg font-semibold text-white">Overwatch Hacks product</p>
            <p className="mt-1 text-sm text-white/55">
              Full feature list · live status · price · checkout
            </p>
          </div>
          <a
            href="/overwatch-hacks"
            className="cta-gradient inline-flex shrink-0 items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em]"
          >
            View product details
          </a>
        </div>
      </div>
    </section>
  )
}
