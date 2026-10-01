import { useMemo, useRef, useState, type ReactNode } from 'react'
import {
  AIMBOT_TOGGLES,
  MISC_TOGGLES,
  VISUAL_TOGGLES,
  type VisualToggle,
} from '../data/hack-menu-features'

type Tab = 'visuals' | 'aimbot' | 'misc'

function ToggleRow({
  item,
  on,
  onToggle,
}: {
  item: VisualToggle
  on: boolean
  onToggle: () => void
}) {
  return (
    <div className="cheat-menu-row flex items-center justify-between gap-4 border-b border-z-soft/10 py-3 last:border-0">
      <span className="text-sm text-z-ink/90">{item.label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={`${item.label} ${on ? 'on' : 'off'}`}
        onClick={onToggle}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          on ? 'bg-z-accent' : 'bg-z-hover'
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full shadow transition-transform ${
            on ? 'translate-x-[22px] bg-z-ink' : 'translate-x-0.5 bg-z-ink/40'
          }`}
        />
      </button>
    </div>
  )
}

function RollingScrollMenu({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const nudge = (delta: number) => scrollRef.current?.scrollBy({ top: delta, behavior: 'smooth' })

  return (
    <div className="cheat-rolling-wrap flex overflow-hidden bg-z-bg">
      <div
        ref={scrollRef}
        className="cheat-menu-scroll h-[240px] flex-1 overflow-y-scroll overscroll-contain px-4 py-2 sm:h-[260px]"
      >
        {children}
      </div>
      <div className="cheat-rolling-rail flex w-9 shrink-0 flex-col items-center border-l border-z-soft/20 bg-z-elevated">
        <button
          type="button"
          onClick={() => nudge(-72)}
          className="flex h-8 w-full items-center justify-center text-[10px] text-z-soft hover:bg-z-hover hover:text-z-accent"
          aria-label="Scroll up"
        >
          ▲
        </button>
        <div className="cheat-rolling-track relative my-1 min-h-[120px] flex-1 w-1.5 rounded-full bg-z-card sm:min-h-[150px]">
          <div className="cheat-rolling-thumb absolute inset-x-0 top-0 h-1/3 rounded-full" aria-hidden />
        </div>
        <button
          type="button"
          onClick={() => nudge(72)}
          className="flex h-8 w-full items-center justify-center text-[10px] text-z-soft hover:bg-z-hover hover:text-z-accent"
          aria-label="Scroll down"
        >
          ▼
        </button>
      </div>
    </div>
  )
}

export function CheatMenuPanel({ className = '' }: { className?: string }) {
  const [tab, setTab] = useState<Tab>('visuals')
  const [maxDistance, setMaxDistance] = useState(300)

  const initialToggles = useMemo(() => {
    const map: Record<string, boolean> = {}
    for (const t of [...VISUAL_TOGGLES, ...AIMBOT_TOGGLES, ...MISC_TOGGLES]) {
      map[t.id] = t.defaultOn
    }
    return map
  }, [])

  const [toggles, setToggles] = useState(initialToggles)
  const list =
    tab === 'visuals' ? VISUAL_TOGGLES : tab === 'aimbot' ? AIMBOT_TOGGLES : MISC_TOGGLES

  const tabs: { id: Tab; label: string }[] = [
    { id: 'visuals', label: 'VISUALS' },
    { id: 'aimbot', label: 'AIMBOT' },
    { id: 'misc', label: 'MISC' },
  ]

  return (
    <div
      className={`cheat-menu-panel w-full overflow-hidden rounded-xl border border-z-soft/35 bg-z-card/95 shadow-[0_0_60px_var(--glow-soft)] ${className}`}
    >
      <div className="flex border-b border-z-soft/15 bg-z-elevated">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`flex-1 py-3 text-xs font-bold tracking-[0.2em] sm:text-sm ${
              tab === t.id
                ? 'bg-z-hover text-z-accent shadow-[inset_0_-2px_0_var(--accent)]'
                : 'text-z-ink/45 hover:text-z-ink/70'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <RollingScrollMenu>
        {list.map((item) => (
          <ToggleRow
            key={item.id}
            item={item}
            on={toggles[item.id]}
            onToggle={() => setToggles((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
          />
        ))}
        {tab === 'visuals' ? (
          <div className="border-t border-z-soft/15 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-z-ink/90">Max Distance</span>
              <span className="font-medium text-z-soft">{maxDistance}m</span>
            </div>
            <input
              type="range"
              min={50}
              max={500}
              step={10}
              value={maxDistance}
              onChange={(e) => setMaxDistance(Number(e.target.value))}
              className="cheat-slider mt-4 w-full"
              aria-label="Max distance"
            />
          </div>
        ) : null}
      </RollingScrollMenu>
    </div>
  )
}
