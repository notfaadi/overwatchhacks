/** Stylized hero emblem — inspired by hero-shooter key art, not official game assets. */
export function OverwatchHeroMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="3" opacity="0.95" />
      <path
        d="M60 18 C60 18 28 42 28 60 C28 78 42 92 60 92 C78 92 92 78 92 60 C92 42 60 18 60 18Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M60 28 C60 28 38 46 38 60 C38 72 48 82 60 82 C72 82 82 72 82 60 C82 46 60 28 60 28Z"
        fill="#0c0d10"
      />
    </svg>
  )
}
