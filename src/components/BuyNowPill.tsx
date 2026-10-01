import { ShoppingCart } from 'lucide-react'
import { CheckoutLink } from './CheckoutLink'
import { PRODUCT_PRICE_USD } from '../data/site'

type BuyNowPillProps = {
  className?: string
}

export function BuyNowPill({ className = '' }: BuyNowPillProps) {
  return (
    <CheckoutLink
      className={`buy-now-pill group inline-flex overflow-hidden shadow-lg transition-transform hover:scale-[1.02] ${className}`}
    >
      <span className="inline-flex items-center gap-2 bg-white px-5 py-3.5 text-sm font-bold text-black sm:px-6 sm:py-4 sm:text-base">
        <ShoppingCart className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden />
        Buy now
      </span>
      <span className="inline-flex items-center bg-black px-5 py-3.5 text-sm font-bold text-white sm:px-6 sm:py-4 sm:text-base">
        from ${PRODUCT_PRICE_USD}
      </span>
    </CheckoutLink>
  )
}
