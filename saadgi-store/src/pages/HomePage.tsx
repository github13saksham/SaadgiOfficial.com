import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronRight,
  Headphones,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Flame,
  Truck,
  RotateCcw,
  Tag,
  Layers,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import {
  instagramShots,
  products,
  serviceBlocks,
  testimonials,
} from '../data/mockData'

const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=2000&q=85',
    eyebrow: 'SAADGI · THE NEW EDIT',
    title: 'Elegance in Every Thread.',
    description:
      'Thoughtfully curated ethnic wear for women who find beauty in graceful silhouettes and artisanal details.',
    action: 'Explore Best Sellers',
    link: '/best-sellers',
    tag: 'Festive Ready',
    position: 'object-[center_25%]',
  },
  {
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=85',
    eyebrow: 'MADE FOR YOUR MOMENTS',
    title: 'A little grace, every day.',
    description:
      'Discover timeless silhouettes, airy textures, and considered details made to feel effortless every day.',
    action: 'Shop Everyday Edit',
    link: '/collections',
    tag: 'Pure Cotton & Linen',
    position: 'object-[center_18%]',
  },
  {
    image:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=2000&q=85',
    eyebrow: 'THE CELEBRATION EDIT',
    title: 'Tradition, beautifully reimagined.',
    description:
      'Celebration-ready pieces with rich craftsmanship and a softer, more personal point of view.',
    action: 'Explore All Suits',
    link: '/all-products',
    tag: 'Handcrafted Heritage',
    position: 'object-[center_20%]',
  },
]

const serviceIconMap = {
  Sparkles,
  ShieldCheck,
  PackageCheck,
  Headphones,
} as const

const serviceDetails = [
  'Thoughtful fabric selection and considered finishing make every piece feel special.',
  'Checkout is designed to keep your payment and personal information protected.',
  'Simple guidance is available if a piece is not quite right for you.',
  'Our team is here to help with orders, fit, and styling questions.',
]

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeReview, setActiveReview] = useState(0)
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [carouselPaused, setCarouselPaused] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isBestSellerExpanded, setIsBestSellerExpanded] = useState(false)

  useEffect(() => {
    if (carouselPaused) return

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [carouselPaused])

  const changeSlide = (direction: number) => {
    setActiveSlide(
      (current) => (current + direction + heroSlides.length) % heroSlides.length,
    )
  }

  const review = testimonials[activeReview]
  const bestSellerProducts = products.filter((product) => product.bestseller)
  const endOfSeasonProducts = products.filter((p) => p.featured || p.bestseller).slice(0, 4)

  const filteredProducts =
    selectedCategory === 'all'
      ? products.slice(0, 8)
      : products.filter(
          (p) =>
            p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            p.collection.toLowerCase().includes(selectedCategory.toLowerCase()),
        )

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* HERO SECTION with responsive desktop/mobile framing so model images are never cut off */}
      <section
        aria-label="SAADGI collection highlights"
        className="hero-carousel relative isolate overflow-hidden bg-[#241711]"
        onMouseEnter={() => setCarouselPaused(true)}
        onMouseLeave={() => setCarouselPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <img
              src={heroSlides[activeSlide].image}
              alt="SAADGI ethnic wear campaign"
              className={`h-full w-full object-cover ${heroSlides[activeSlide].position} md:object-[center_20%] lg:object-[center_15%]`}
            />
            {/* Elegant multi-stop gradient ensuring text readability without hiding the model or garments */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c120c]/90 via-[#1c120c]/55 to-black/25" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1c120c]/70 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative mx-auto flex min-h-[580px] max-w-[1500px] items-center px-6 py-20 sm:min-h-[660px] lg:min-h-[720px] md:px-12 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${activeSlide}`}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl text-white"
            >
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e4cca8]/40 bg-black/30 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f5ebd9] backdrop-blur-md">
                  <Sparkles size={12} className="text-[#e2b77a]" />
                  {heroSlides[activeSlide].tag}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d6bba0]">
                  {heroSlides[activeSlide].eyebrow}
                </span>
              </div>

              <h1 className="font-display text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
                {heroSlides[activeSlide].title}
              </h1>

              <p className="mt-5 max-w-lg font-light text-sm leading-relaxed text-white/90 sm:text-base sm:leading-8">
                {heroSlides[activeSlide].description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={heroSlides[activeSlide].link}
                  className="inline-flex items-center gap-3 rounded-full bg-[#fbf8f4] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2b1c15] shadow-xl transition-all hover:bg-white hover:shadow-2xl hover:translate-y-[-2px]"
                >
                  {heroSlides[activeSlide].action}
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/all-products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20"
                >
                  View All Outfits
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicator */}
          <div className="absolute bottom-8 left-6 flex items-center gap-4 text-xs text-white/80 md:left-12 lg:left-20">
            <span className="font-display text-2xl font-bold text-white">
              0{activeSlide + 1}
            </span>
            <span className="h-px w-12 bg-white/50" />
            <span className="text-[11px] tracking-wider text-white/70">0{heroSlides.length}</span>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-7 right-6 flex items-center gap-3 md:right-12 lg:right-20">
            <div className="mr-3 hidden items-center gap-2 sm:flex">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={activeSlide === index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'w-10 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => changeSlide(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-[#2b1c15] active:scale-95"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => changeSlide(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-[#2b1c15] active:scale-95"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* QUICK VALUE PROPOSITION STRIP */}
      <section className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-[#ebdcc8] bg-white p-5 shadow-sm sm:grid-cols-4 sm:p-6">
          <div className="flex items-center gap-3 border-r border-[#ebdcc8]/60 pr-3 last:border-r-0">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbf5ec] text-[#926d4a]">
              <Sparkles size={18} />
            </span>
            <div>
              <p className="text-xs font-bold text-[#2b1c15]">Artisanal Quality</p>
              <p className="text-[11px] text-[#7a6453]">Premium fabrics & finishes</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:border-r border-[#ebdcc8]/60 sm:pr-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbf5ec] text-[#926d4a]">
              <Truck size={18} />
            </span>
            <div>
              <p className="text-xs font-bold text-[#2b1c15]">Express Delivery</p>
              <p className="text-[11px] text-[#7a6453]">Across India in 3-5 days</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border-r border-[#ebdcc8]/60 pr-3 last:border-r-0">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbf5ec] text-[#926d4a]">
              <RotateCcw size={18} />
            </span>
            <div>
              <p className="text-xs font-bold text-[#2b1c15]">Easy 7-Day Returns</p>
              <p className="text-[11px] text-[#7a6453]">Hassle-free pickups</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbf5ec] text-[#926d4a]">
              <Tag size={18} />
            </span>
            <div>
              <p className="text-xs font-bold text-[#2b1c15]">Support Hotline</p>
              <p className="text-[11px] font-semibold text-[#8b5a38]">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS SECTION WITH INTERACTIVE CARD STACK DESIGN */}
      <section className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-[#ebdcc8]/70 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#926d4a]">
                <Flame size={14} className="text-[#bd644d]" /> Most Loved By You
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[#ebdcc8]/60 px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#7a6453]">
                <Layers size={11} />
                {isBestSellerExpanded ? 'Cards Spread' : 'Hover to Unstack Cards'}
              </span>
            </div>
            <h2 className="section-title">Best Sellers</h2>
            <p className="mt-2 max-w-lg text-sm text-[#6c5446]">
              Our most celebrated silhouettes. Hover over the card deck to watch all 4 styles smoothly fan out and settle in one line.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsBestSellerExpanded((prev) => !prev)}
              className="inline-flex sm:hidden items-center gap-1.5 rounded-full border border-[#2b1c15] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#2b1c15]"
            >
              <Layers size={12} />
              {isBestSellerExpanded ? 'Stack Cards' : 'Spread Out'}
            </button>
            <Link
              to="/best-sellers"
              className="inline-flex items-center gap-2 rounded-full border border-[#2b1c15] px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2b1c15] transition hover:bg-[#2b1c15] hover:text-white"
            >
              View all <ChevronRight size={15} />
            </Link>
          </div>
        </div>

        {/* Interactive Stack Canvas */}
        <div
          className="relative py-4"
          onMouseEnter={() => setIsBestSellerExpanded(true)}
          onMouseLeave={() => setIsBestSellerExpanded(false)}
        >
          {/* Desktop & Tablet Stack Area */}
          <div className="hidden md:block relative min-h-[580px] w-full">
            {bestSellerProducts.slice(0, 4).map((product, index) => {
              // Target coordinates when spread out: 4 equal columns with gap
              // 0: left 0%, 1: left ~25.5%, 2: left ~51%, 3: left ~76.5%
              const leftPercent = isBestSellerExpanded ? index * 25.5 : 36
              const offsetX = isBestSellerExpanded ? 0 : (index - 1.5) * 26
              const rotateDeg = isBestSellerExpanded ? 0 : (index - 1.5) * 4.5
              const translateY = isBestSellerExpanded ? 0 : index * 8
              const scaleVal = isBestSellerExpanded ? 1 : 1 - (3 - index) * 0.02
              const zIndexVal = isBestSellerExpanded ? 10 + index : index + 1

              return (
                <motion.div
                  key={product.id}
                  className="absolute top-0 w-[23.5%] origin-bottom"
                  initial={false}
                  animate={{
                    left: `${leftPercent}%`,
                    x: offsetX,
                    rotate: rotateDeg,
                    y: translateY,
                    scale: scaleVal,
                    zIndex: zIndexVal,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 26,
                    mass: 0.8,
                  }}
                  whileHover={
                    isBestSellerExpanded
                      ? { y: -8, zIndex: 50, transition: { duration: 0.2 } }
                      : { scale: 1.03, transition: { duration: 0.2 } }
                  }
                >
                  <ProductCard product={product} />
                </motion.div>
              )
            })}
          </div>

          {/* Quick Helper Pill under the deck on desktop */}
          <div className="hidden md:flex justify-center mt-3">
            <motion.div
              animate={{ opacity: isBestSellerExpanded ? 0.35 : 1, y: isBestSellerExpanded ? 12 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#d8c5b0] bg-white/95 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5e46] shadow-sm backdrop-blur-md cursor-pointer hover:border-[#926d4a]"
              onClick={() => setIsBestSellerExpanded((prev) => !prev)}
            >
              <Sparkles size={14} className="text-[#c28e53]" />
              {isBestSellerExpanded ? 'Move cursor away to stack deck' : 'Hover over deck to stack out all 4 cards'}
            </motion.div>
          </div>

          {/* Mobile responsive grid view */}
          <div className="grid items-stretch gap-6 sm:grid-cols-2 md:hidden">
            {bestSellerProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SHOP BY CATEGORY / MOOD */}
      <section className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="eyebrow">Curated Collections</p>
          <h2 className="section-title">Shop by Silhouette & Mood</h2>
          <p className="mt-3 max-w-lg text-sm text-[#6c5446]">
            Filter through our curated ethnic edits to find the perfect ensemble for every moment.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Silhouettes' },
              { id: 'festive', label: 'Festive Wear' },
              { id: 'everyday', label: 'Everyday Wear' },
              { id: 'cotton', label: 'Cotton Suits' },
              { id: 'party', label: 'Party Wear' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#2b1c15] text-white shadow-md'
                    : 'border border-[#ebdcc8] bg-white text-[#5d4538] hover:border-[#b69a69] hover:bg-[#fbf7f2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/all-products"
            className="inline-flex items-center gap-2 rounded-full bg-[#2b1c15] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:bg-[#8b5a38]"
          >
            Explore Complete Catalog <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* END OF SEASON SECTION: SHOWS REAL PICTURES OF CLOTHES INSTEAD OF A BANNER */}
      <section className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="overflow-hidden rounded-[32px] border border-[#ebdcc8] bg-gradient-to-b from-[#f9f4ec] to-[#f4ebe0] p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-[#ebdcc8]/80 pb-8">
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-[#bd644d]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#bd644d]">
                Special Seasonal Clearance
              </span>
              <h2 className="mt-3 font-display text-4xl font-medium text-[#2b1c15] sm:text-5xl md:text-6xl">
                End of Season Edit
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#654e40]">
                Explore actual handcrafted pieces from this season's most beloved outfits at exclusive seasonal value before they sell out.
              </p>
            </div>
            <Link
              to="/all-products"
              className="inline-flex items-center gap-2 rounded-full bg-[#bd644d] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-md transition hover:bg-[#a3523d]"
            >
              Shop Clearance Sale <ArrowRight size={15} />
            </Link>
          </div>

          {/* Grid of actual clothes pictures with interactive cards and quick buy tags */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {endOfSeasonProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white/80 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2b1c15] text-[#f2dfc7]">
                <Tag size={18} />
              </span>
              <div>
                <p className="text-xs font-bold text-[#2b1c15]">Extra Seasonal Privilege</p>
                <p className="text-[11px] text-[#6c5446]">Up to 35% off automatically calculated at checkout</p>
              </div>
            </div>
            <Link
              to="/collections"
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b5a38] hover:underline"
            >
              Browse All Seasonal Styles →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-[#f3ece3] py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-5 text-center md:px-8">
          <p className="eyebrow">Kind words, close to heart</p>
          <h2 className="section-title">Love notes from our customers</h2>
          <div className="relative mx-auto mt-10 max-w-3xl rounded-[28px] border border-[#e7dacb] bg-[#fbf8f3] px-7 py-10 shadow-[0_20px_60px_rgba(52,36,28,0.05)] sm:px-16 sm:py-14">
            <div className="mb-6 flex justify-center gap-1 text-[#b69a69]">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={15}
                  fill={index < review.rating ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="font-display text-3xl leading-snug text-[#2b1c15] sm:text-4xl">
                  “{review.review}”
                </blockquote>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#2b1c15]">
                  {review.name}
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8a725f]">
                  Purchased {review.product}
                </p>
              </motion.div>
            </AnimatePresence>
            <button
              type="button"
              aria-label="Previous review"
              onClick={() =>
                setActiveReview(
                  (current) =>
                    (current - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5d6c6] bg-white text-[#2b1c15] transition hover:border-[#b69a69] sm:left-5"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() =>
                setActiveReview((current) => (current + 1) % testimonials.length)
              }
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5d6c6] bg-white text-[#2b1c15] transition hover:border-[#b69a69] sm:right-5"
            >
              <ArrowRight size={15} />
            </button>
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show review ${index + 1}`}
                  aria-current={activeReview === index}
                  onClick={() => setActiveReview(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeReview === index ? 'w-7 bg-[#72523e]' : 'w-1.5 bg-[#d2c1ae]'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-[#8a725f]">
            Verified Customer Reviews
          </p>
        </div>
      </section>

      {/* INSTAGRAM COMMUNITY SHOWCASE */}
      <section className="bg-[#f5efe6] py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Follow along @saadgi</p>
              <h2 className="section-title">A little SAADGI in your everyday</h2>
              <p className="mt-3 text-sm leading-7 text-[#725b4d]">
                Tag #SaadgiElegance to be featured on our official styling feed.
              </p>
            </div>
            <a
              href="https://www.instagram.com/saadgi/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6c5b2] bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2b1c15] shadow-sm transition hover:border-[#9b784b] hover:bg-[#2b1c15] hover:text-white"
            >
              <Camera size={15} /> Follow @saadgi
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {instagramShots.map((image, index) => (
              <a
                key={image}
                href="https://www.instagram.com/saadgi/"
                target="_blank"
                rel="noreferrer"
                aria-label={`View SAADGI community post ${index + 1} on Instagram`}
                className={`group relative block overflow-hidden rounded-[20px] shadow-sm ${
                  index === 1 ? 'lg:translate-y-4' : ''
                }`}
              >
                <img
                  src={image}
                  alt="SAADGI style inspiration"
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#1c120c]/50 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                  <Camera size={24} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">View on Instagram</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CARE & SERVICE PROMISE */}
      <section className="mx-auto max-w-[1500px] px-5 py-12 md:px-8 lg:py-16">
        <div className="mb-10 text-center">
          <p className="eyebrow">The SAADGI promise</p>
          <h2 className="section-title">Care in every detail</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#725b4d]">
            Thoughtful service and round-the-clock guidance that make every part of your experience feel considered.
          </p>
        </div>
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceBlocks.map((service, index) => {
            const Icon =
              serviceIconMap[service.icon as keyof typeof serviceIconMap]
            const isExpanded = expandedService === index
            return (
              <motion.button
                key={service.title}
                type="button"
                aria-expanded={isExpanded}
                onClick={() => setExpandedService(isExpanded ? null : index)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.985 }}
                className={`group flex min-h-[230px] flex-col items-center rounded-[22px] border p-7 text-center transition-colors duration-300 ${
                  isExpanded
                    ? 'border-[#b69a69] bg-[#2b1c15] text-white shadow-[0_18px_40px_rgba(52,36,28,0.16)]'
                    : 'border-[#eadfce] bg-white text-[#2b1c15] shadow-[0_12px_30px_rgba(52,36,28,0.035)] hover:border-[#c9ad84]'
                }`}
              >
                <span
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full transition-colors ${
                    isExpanded
                      ? 'bg-white/10 text-[#e2c99e]'
                      : 'bg-[#f5efe6] text-[#a88858] group-hover:bg-[#efe3d5]'
                  }`}
                >
                  <Icon size={23} strokeWidth={1.6} />
                </span>
                <span className="font-display text-3xl font-medium">{service.title}</span>
                <span
                  className={`mt-2 text-xs leading-6 ${
                    isExpanded ? 'text-white/75' : 'text-[#725b4d]'
                  }`}
                >
                  {isExpanded ? serviceDetails[index] : service.description}
                </span>
                <span
                  className={`mt-auto pt-4 text-[9px] font-bold uppercase tracking-[0.18em] ${
                    isExpanded ? 'text-[#e2c99e]' : 'text-[#9a794b]'
                  }`}
                >
                  {isExpanded ? 'Show less' : 'Discover more'}
                </span>
              </motion.button>
            )
          })}
        </div>
      </section>
    </div>
  )
}
