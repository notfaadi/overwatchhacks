import { ArrowRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { HomeWallpaper } from '../components/HomeWallpaper'
import { SiteFooter } from '../components/SiteFooter'
import { FaqSection } from '../components/FaqSection'
import { BuyNowPill } from '../components/BuyNowPill'
import { HackMenuShowcase } from '../components/HackMenuShowcase'
import { guidePath } from '../data/games'
import { CheckoutLink } from '../components/CheckoutLink'
import { HOME_FAQS } from '../data/faqs'
import { HOME_HEADINGS, SITE_HOST, SITE_NAME, SITE_PURPOSE } from '../data/site'

export function HomePage() {
  return (
    <div className="home-page relative min-h-screen overflow-x-hidden text-white">
      <HomeWallpaper />

      <section id="home" className="relative flex min-h-screen flex-col overflow-x-clip">
        <div className="relative z-20 flex min-h-screen flex-col">
          <Navbar onVideo />

          <main className="page-x mt-auto pb-6 sm:pb-8 lg:pb-10">
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="glass-liquid relative z-30 max-w-md rounded-3xl p-5 sm:p-6 lg:max-w-lg lg:p-7">
                <p className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-z-soft/90 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                  Overwatch 2 · Worldwide · {SITE_HOST}
                </p>
                <h1 className="text-[1.75rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
                  {HOME_HEADINGS.h1}
                </h1>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 sm:mt-3.5 sm:text-[0.95rem]">
                  Overwatch 2 cheats for Windows PC — silent aim Aimbot, ESP, wallhack, triggerbot,
                  radar hack and live anti-cheat status on Battle.net and Steam.
                </p>

                <div className="relative z-50 mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <BuyNowPill className="glass-liquid-buy shadow-[0_12px_40px_rgba(0,0,0,0.45)]" />
                  <a
                    href={guidePath('overwatch')}
                    className="glass-liquid-pill inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-[border-color,box-shadow] hover:border-white/35"
                  >
                    Product details
                  </a>
                </div>
              </div>

              <div className="relative z-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:w-[30rem] lg:shrink-0">
                <div className="glass-liquid flex h-full min-h-[140px] flex-col justify-between rounded-2xl p-4 sm:min-h-[160px] sm:p-5">
                  <p
                    className="status-pill text-2xl font-normal tracking-tight sm:text-3xl"
                    style={{ fontFamily: "'Silkscreen', cursive" }}
                  >
                    UD
                  </p>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/70 sm:mt-3 sm:text-sm">
                    Live anti-cheat status for Overwatch 2. Updated after patches — not random
                    Discord screenshots.
                  </p>
                </div>

                <div className="glass-liquid flex h-full min-h-[140px] flex-col rounded-2xl p-4 sm:min-h-[160px] sm:p-5">
                  <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-z-accent/30 text-[10px] font-bold text-z-soft sm:h-6 sm:w-6 sm:text-xs">
                      OW
                    </div>
                    <span className="text-sm font-semibold text-white">Overwatch 2</span>
                  </div>
                  <p className="flex-1 text-xs leading-relaxed text-white/80 sm:text-sm">
                    “ESP and smooth silent aim — status stayed honest after the last patch. Finally
                    a shop that updates when Blizzard drops.”
                  </p>
                  <div className="mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-z-accent/25 text-xs font-semibold text-z-ink sm:h-9 sm:w-9 sm:text-sm">
                      MX
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">moxie</p>
                      <p className="text-xs text-white/60">Comp player</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <div className="hero-to-body" aria-hidden />

      <div className="page-body home-page-body relative z-10">
        <HackMenuShowcase />

        <section id="about" className="page-band page-x border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
            <div className="glass-liquid page-card flex h-full min-h-[240px] flex-col justify-between rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:p-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  About {SITE_NAME}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {HOME_HEADINGS.h2About}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  {SITE_PURPOSE} Clear features, honest status labels, and deep forums for setup.
                  Then check{' '}
                  <a
                    href="/overwatch-hacks"
                    className="text-white/80 underline-offset-2 hover:underline"
                  >
                    the Overwatch feature list
                  </a>
                  ,{' '}
                  <a href="/reviews" className="text-white/80 underline-offset-2 hover:underline">
                    reviews
                  </a>
                  , or{' '}
                  <a href="/support" className="text-white/80 underline-offset-2 hover:underline">
                    loader help
                  </a>
                  .
                </p>
              </div>
              <a
                href={guidePath('overwatch')}
                className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80"
              >
                See Overwatch product details
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>

            <div
              id="access"
              className="glass-liquid page-card flex h-full min-h-[240px] flex-col justify-between rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:p-10"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                  Checkout
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {HOME_HEADINGS.h2Access}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  Confirm Overwatch Hacks anti-cheat status is clear to load, then checkout for
                  digital delivery on supported Windows builds — worldwide.
                </p>
              </div>
              <CheckoutLink className="cta-gradient mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-fit">
                Get Overwatch Hacks license
              </CheckoutLink>
            </div>
          </div>
        </section>

        <FaqSection
          id="faq"
          heading={HOME_HEADINGS.h2Faq}
          intro="Anti-cheat status, Aimbot and ESP, delivery and checkout — before you buy."
          items={HOME_FAQS}
          moreHref="/faq"
          moreLabel="Full FAQ →"
        />

        <SiteFooter currentPath="/" />
      </div>
    </div>
  )
}
