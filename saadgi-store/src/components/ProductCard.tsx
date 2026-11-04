import { motion } from 'framer-motion'
import { Heart, Star } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/mockData'

export function ProductCard({ product }: { product: Product }) {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <motion.article
      layout
      whileHover={{ y: -5 }}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#efe2d3] bg-white shadow-[0_12px_30px_rgba(52,36,28,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(52,36,28,0.1)]"
    >
      <div className="product-card-image relative aspect-[4/5] overflow-hidden bg-[#f3ece3]">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          {product.gallery[1] && (
            <img
              src={product.gallery[1]}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
            />
          )}
        </Link>
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          {product.badge && (
            <span className="rounded-full bg-[#f5efe6] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#34241c]">{product.badge}</span>
          )}
          <button
            type="button"
            aria-label={isSaved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            aria-pressed={isSaved}
            onClick={() => setIsSaved((saved) => !saved)}
            className="ml-auto rounded-full border border-white/80 bg-white/85 p-2 text-[#34241c] shadow-sm backdrop-blur-sm transition hover:scale-105 hover:bg-white"
          >
            <Heart size={16} fill={isSaved ? 'currentColor' : 'none'} className={isSaved ? 'text-[#9b5b54]' : ''} />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-3 justify-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <Link
            to={`/product/${product.slug}`}
            className="rounded-full bg-[#34241c]/95 px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-[#72523e]"
          >
            Quick view
          </Link>
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-3 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#72523e]">{product.category}</p>
          <div className="flex items-center gap-1 text-[#b69a69]">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-medium text-[#34241c]">{product.rating}</span>
          </div>
        </div>

        <Link to={`/product/${product.slug}`} className="block font-display text-3xl leading-none text-[#34241c] hover:text-[#72523e]">
          {product.name}
        </Link>

        <div className="mt-auto flex flex-wrap items-end gap-x-2 gap-y-1 pt-1">
          <span className="text-lg font-semibold text-[#34241c]">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-sm text-[#8b7a6d] line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#9b784b]">{Math.round(((product.mrp - product.price) / product.mrp) * 100)}% Off</span>
        </div>
        <Link
          to={`/product/${product.slug}`}
          className="flex w-full items-center justify-center rounded-full border border-[#d9c8b4] py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#34241c] transition hover:border-[#34241c] hover:bg-[#34241c] hover:text-white"
        >
          Choose your size
        </Link>
      </div>
    </motion.article>
  )
}
