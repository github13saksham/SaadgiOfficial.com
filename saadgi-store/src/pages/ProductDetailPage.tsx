import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Ruler, ShieldCheck, Truck, RefreshCw, Heart, Share2, Check } from 'lucide-react'
import { products } from '../data/mockData'
import SizeGuideModal from '../components/SizeGuideModal'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) ?? products[0]

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M')
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || '')
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="bg-[#faf5ed] py-10 sm:py-16">
      <div className="mx-auto max-w-[1300px] px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-wider text-[#7b5339]">
          <Link to="/" className="hover:text-[#382514]">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-[#382514]">Collections</Link>
          <span>/</span>
          <span className="text-[#382514] font-semibold">{product.name}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Product Gallery */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[28px] border border-[#ebdcc8] bg-white p-3 shadow-[0_15px_45px_rgba(56,37,20,0.05)]">
              <img
                src={product.image}
                alt={product.name}
                className="h-[520px] sm:h-[640px] w-full rounded-[22px] object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#7b5339]">
                  {product.category}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleShare}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ebdcc8] bg-[#fef5ec] text-[#7b5339] hover:bg-white transition"
                    title="Share product link"
                  >
                    {copied ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
                  </button>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ebdcc8] bg-[#fef5ec] text-[#7b5339] hover:bg-white transition"
                    title="Add to wishlist"
                  >
                    <Heart size={16} />
                  </button>
                </div>
              </div>

              <h1 className="mt-2 font-display text-3xl text-[#382514] sm:text-5xl leading-tight">
                {product.name}
              </h1>

              {/* Price Row */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-[#382514]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-lg text-[#8b7a6d] line-through">
                  ₹{product.mrp.toLocaleString('en-IN')}
                </span>
                <span className="rounded-full bg-[#fef5ec] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#7b5339] border border-[#c9a97f]">
                  {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% Off
                </span>
              </div>
              <p className="mt-1 text-xs text-[#8a725f]">Inclusive of all taxes. Free shipping on orders over ₹1,999.</p>
            </div>

            <p className="text-sm leading-relaxed text-[#5b3a26] sm:text-base">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7b5339]">
                  Colour: <span className="text-[#382514] font-bold">{selectedColor}</span>
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-full px-4 py-2 text-xs uppercase tracking-wider transition ${
                        selectedColor === color
                          ? 'border-2 border-[#382514] bg-[#382514] text-[#fef5ec] font-bold shadow-sm'
                          : 'border border-[#dccab5] bg-white text-[#382514] hover:bg-[#fef5ec]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector with Size Guide Trigger */}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7b5339]">
                  Select Size: <span className="text-[#382514] font-bold">{selectedSize}</span>
                </p>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7b5339] hover:text-[#382514] hover:underline"
                >
                  <Ruler size={14} /> Size Guide
                </button>
              </div>

              <div className="mt-2.5 flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-11 min-w-[48px] items-center justify-center rounded-xl px-4 text-xs font-bold uppercase tracking-wider transition ${
                      selectedSize === size
                        ? 'border-2 border-[#382514] bg-[#382514] text-[#fef5ec] shadow-sm'
                        : 'border border-[#dccab5] bg-white text-[#382514] hover:border-[#7b5339] hover:bg-[#fef5ec]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                onClick={() => alert(`Added ${product.name} (Size: ${selectedSize}) to Cart!`)}
                className="flex-1 rounded-full bg-[#382514] py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#fef5ec] shadow-md transition hover:bg-[#7b5339]"
              >
                Add to Cart
              </button>
              <button
                onClick={() => alert(`Proceeding to checkout for ${product.name} (Size: ${selectedSize})`)}
                className="flex-1 rounded-full border border-[#7b5339] bg-[#fef5ec] py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#382514] shadow-sm transition hover:bg-white"
              >
                Buy Now
              </button>
            </div>

            {/* Note Before Ordering Callout */}
            <div className="rounded-2xl border border-[#ebdcc8] bg-[#fef5ec] p-5">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-semibold text-[#382514]">
                  A Little Note Before Ordering
                </p>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[11px] font-semibold uppercase tracking-wider text-[#7b5339] underline"
                >
                  View Details
                </button>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[#5b3a26]">
                All measurements represent body measurements in inches. If you fall between two sizes, feel free to reach out to our team before ordering.
              </p>
            </div>

            {/* Product Specifications & Care */}
            <div className="space-y-2 rounded-2xl border border-[#ebdcc8] bg-white p-5 text-xs text-[#5b3a26]">
              <div className="flex justify-between py-1.5 border-b border-[#ebdcc8]/60">
                <span className="font-bold uppercase tracking-wider text-[#7b5339]">Fabric</span>
                <span className="text-[#382514]">{product.fabric}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#ebdcc8]/60">
                <span className="font-bold uppercase tracking-wider text-[#7b5339]">Care Instructions</span>
                <span className="text-[#382514]">{product.care}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="font-bold uppercase tracking-wider text-[#7b5339]">Stock Status</span>
                <span className="font-semibold text-[#2f7d4b]">{product.stock > 0 ? 'In Stock — Ready to Dispatch' : 'Sold Out'}</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-[10px] text-[#5b3a26]">
              <div className="rounded-xl border border-[#ebdcc8] bg-[#faf5ed] p-3">
                <Truck size={18} className="mx-auto mb-1 text-[#7b5339]" />
                <p className="font-semibold">Dispatch</p>
                <p className="text-[#8a725f]">2–4 business days</p>
              </div>
              <div className="rounded-xl border border-[#ebdcc8] bg-[#faf5ed] p-3">
                <RefreshCw size={18} className="mx-auto mb-1 text-[#7b5339]" />
                <p className="font-semibold">48h Support</p>
                <p className="text-[#8a725f]">For defects & issues</p>
              </div>
              <div className="rounded-xl border border-[#ebdcc8] bg-[#faf5ed] p-3">
                <ShieldCheck size={18} className="mx-auto mb-1 text-[#7b5339]" />
                <p className="font-semibold">100% Authentic</p>
                <p className="text-[#8a725f]">Handpicked craft</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </section>
  )
}
