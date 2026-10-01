export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 256 256" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M36 48h184v32H36zm0 64h128v32H36zm0 64h184v32H36z"
      />
    </svg>
  )
}
