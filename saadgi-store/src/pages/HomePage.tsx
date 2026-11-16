import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  Copy,
  ExternalLink,
  Flame,
  Layers,
  MessageSquare,
  MessageSquarePlus,
  Play,
  Quote,
  RotateCcw,
  Send,
  ShoppingBag,
  Sparkles,
  Star,
  Tag,
  Truck,
  X,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import {
  categories,
  products,
  testimonials,
} from '../data/mockData'

import reel1 from '../assets/reels/reel-1.jpg'
import reel2 from '../assets/reels/reel-2.jpg'
import reel3 from '../assets/reels/reel-3.jpg'
import reel4 from '../assets/reels/reel-4.jpg'
import reel5 from '../assets/reels/reel-5.jpg'
import reel6 from '../assets/reels/reel-6.jpg'

const officialReels = [
  {
    id: 'reel-1',
    image: reel1,
    title: 'Floral Hand-Embroidered Co-ord Set',
    category: 'Latest Drop',
    views: '14.2K',
  },
  {
    id: 'reel-2',
    image: reel2,
    title: 'Courtly Yoke Detail Everyday Suit',
    category: 'Cotton Edit',
    views: '18.9K',
  },
  {
    id: 'reel-3',
    image: reel3,
    title: 'Mauve Silk Festive Ensemble',
    category: 'Festive Wear',
    views: '26.4K',
  },
  {
    id: 'reel-4',
    image: reel4,
    title: 'Ivory Short Kurti with Printed Pants',
    category: 'Casual Chic',
    views: '12.8K',
  },
  {
    id: 'reel-5',
    image: reel5,
    title: 'Sunny Yellow Floral Anarkali Set',
    category: 'Summer Drop',
    views: '31.5K',
  },
  {
    id: 'reel-6',
    image: reel6,
    title: 'Ikat Printed Straight Kurti Ensemble',
    category: 'Artisanal Weave',
    views: '22.1K',
  },
]

const heroLooks = [
  {
    id: 'look-1',
    name: 'Ivory Grace Suit',
    category: 'Festive & Occasion',
    price: 4999,
    mrp: 6999,
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=2000&q=85',
    title: 'Comfort you can dress up',
    headline: 'Elegance in Every Thread',
    tag: 'New Season Drop',
    note: 'Linen cotton blend, fine zari hemlines, breathable silhouette',
    bg: 'linear-gradient(180deg, #e9dcc5 0%, #c9a97f 100%)',
    position: 'object-[center_22%]',
  },
  {
    id: 'look-2',
    name: 'Rosewood Heritage Set',
    category: 'Everyday Luxury',
    price: 6799,
    mrp: 8999,
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2000&q=85',
    title: 'Soft cotton, tailored grace',
    headline: 'A Little Grace, Every Day',
    tag: 'Bestseller Choice',
    note: 'Three-quarter sleeves, tailored courtly silhouette, comfort first',
    bg: 'linear-gradient(180deg, #7b5339 0%, #382514 100%)',
    position: 'object-[center_18%]',
  },
  {
    id: 'look-3',
    name: 'Noor Evening Ensemble',
    category: 'Celebration Edition',
    price: 5499,
    mrp: 7499,
    image:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=2000&q=85',
    title: 'Tradition, beautifully reimagined',
    headline: 'Artisanal Festive Edit',
    tag: 'Limited Craft Edit',
    note: 'Pure woven texture, contrast trims and pocket detailing',
    bg: 'linear-gradient(180deg, #d9c6a5 0%, #9a7656 100%)',
    position: 'object-[center_20%]',
  },
]

const fabricStories = [
  {
    title: 'Breathable Pure Cotton & Linen',
    subtitle: 'Stay light in every weather',
    body: 'Soft, breathable weaves that stay feather-light on the skin and effortless in warm afternoon gatherings or festive evenings.',
    bg: '#9a7656',
  },
  {
    title: 'Thoughtful Tailoring & Deep Pockets',
    subtitle: 'Functional elegance in every silhouette',
    body: 'Three-quarter sleeves, considered necklines, contrast trims and concealed pockets in select styles, so a beautiful ensemble is also deeply functional.',
    bg: '#7b5339',
  },
  {
    title: 'Priced Fairly & Built to Last',
    subtitle: 'Honest luxury without compromises',
    body: 'Authentic craftsmanship, reinforced seams, and artisanal textiles priced fairly for wear today, tomorrow, and seasons down the line.',
    bg: '#5b3a26',
  },
]

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [reviewsList, setReviewsList] = useState(testimonials)
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false)
  const [newReviewAuthor, setNewReviewAuthor] = useState('')
  const [newReviewProduct, setNewReviewProduct] = useState('Ivory Grace Suit')
  const [newReviewComment, setNewReviewComment] = useState('')
  const [newReviewRating, setNewReviewRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [reviewSubmittedNotice, setReviewSubmittedNotice] = useState(false)
  const [activeFabric, setActiveFabric] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [isBestSellerExpanded, setIsBestSellerExpanded] = useState(false)
  const [heroPaused, setHeroPaused] = useState(false)
  const [saleCategory, setSaleCategory] = useState<'all' | 'festive' | 'everyday' | 'under4999'>('all')
  const [couponCopied, setCouponCopied] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 18 })

  const [selectedReviewIdx, setSelectedReviewIdx] = useState(0)

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return

    const newEntry = {
      name: newReviewAuthor.trim(),
      city: 'Verified Customer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      product: newReviewProduct,
      review: newReviewComment.trim(),
      rating: newReviewRating,
      tag: 'Verified Purchase',
      date: 'Just now',
    }

    setReviewsList((prev) => [newEntry, ...prev])
    setSelectedReviewIdx(0)
    setNewReviewAuthor('')
    setNewReviewComment('')
    setNewReviewRating(5)
    setIsWriteReviewOpen(false)
    setReviewSubmittedNotice(true)
    setTimeout(() => setReviewSubmittedNotice(false), 4500)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 }
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return { hours: 24, minutes: 0, seconds: 0 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const copyCoupon = () => {
    navigator.clipboard?.writeText('SAADGI35')
    setCouponCopied(true)
    setTimeout(() => setCouponCopied(false), 2500)
  }

  useEffect(() => {
    if (heroPaused) return
    const timer = window.setInterval(() => {
      setHeroIndex((h) => (h + 1) % heroLooks.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [heroPaused])

  const currentHero = heroLooks[heroIndex]
  const bestSellerProducts = products.filter((p) => p.bestseller)
  const endOfSeasonProducts = products
    .filter((p) => p.featured || p.bestseller)
    .filter((p) => {
      if (saleCategory === 'festive') return p.category.toLowerCase().includes('festive')
      if (saleCategory === 'everyday') return p.category.toLowerCase().includes('everyday')
      if (saleCategory === 'under4999') return p.price <= 4999
      return true
    })
    .slice(0, 4)

  const visibleProducts = products.filter((p) => {
    if (selectedFilter === 'all') return true
    return p.category.toLowerCase().includes(selectedFilter.toLowerCase())
  })

  return (
    <div className="space-y-16 pb-16 lg:space-y-24">
      {/* 1. TICKER STRIP */}
      <div className="overflow-hidden whitespace-nowrap bg-[#382514] py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#e9dcc5]">
        <div className="inline-flex w-max animate-marquee gap-8">
          <span>✨ Soft Breathable Cotton Suits</span>
          <span>•</span>
          <span>Tailored Elegance with Deep Pockets</span>
          <span>•</span>
          <span>Artisanal Heritage Weaves</span>
          <span>•</span>
          <span>Priced Fairly for Everyday Luxury</span>
          <span>•</span>
          <span>Free Express Delivery Across India</span>
          <span>•</span>
          <span>Complimentary 7-Day Doorstep Returns</span>
          <span>•</span>
          <span>Helpline & Styling Concierge: +91 98765 43210</span>
          <span>•</span>
          {/* Duplicate track for seamless infinite marquee loop */}
          <span>✨ Soft Breathable Cotton Suits</span>
          <span>•</span>
          <span>Tailored Elegance with Deep Pockets</span>
          <span>•</span>
          <span>Artisanal Heritage Weaves</span>
          <span>•</span>
          <span>Priced Fairly for Everyday Luxury</span>
          <span>•</span>
          <span>Free Express Delivery Across India</span>
          <span>•</span>
          <span>Complimentary 7-Day Doorstep Returns</span>
        </div>
      </div>

      {/* 2. SIGNATURE REDESIGNED HERO SECTION (Brown & Beige Arch Stage + Actual Images) */}
      <section
        id="hero-stage"
        className="relative mx-auto max-w-[1500px] overflow-hidden px-3 sm:px-6 md:px-8"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
      >
        <div className="relative rounded-[28px] sm:rounded-[36px] border border-[#e9dcc5] bg-gradient-to-b from-[#fbf0e5] via-[#faf5ed] to-[#f4ebd0]/40 p-4 sm:p-10 lg:p-16">
          {/* Subtle Watermark Branding */}
          <div
            className="pointer-events-none absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-6 select-none font-display text-[80px] font-bold tracking-widest text-[#ebdcc5]/45 sm:text-[180px] lg:text-[230px]"
            aria-hidden="true"
          >
            SAADGI
          </div>

          <div className="relative grid items-center gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Column: Editorial Headline & Selectable Looks */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 sm:w-8 bg-[#7b5339]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#7b5339]">
                  {currentHero.tag}
                </span>
              </div>

              <h1 className="font-display text-3xl font-medium leading-[1.08] text-[#2a1b12] sm:text-6xl lg:text-[5.2rem]">
                {currentHero.title.split(' ')[0]} <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#7b5339]">
                  {currentHero.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>

              <p className="max-w-lg text-sm sm:text-base leading-relaxed text-[#5b3a26]">
                Curated co-ord sets, festive ensembles, and airy suits in soft, breathable textiles. Made for celebratory evenings, slow mornings, and everything after.
              </p>

              {/* Call to action buttons */}
              <div className="mt-1 sm:mt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/best-sellers"
                  className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#382514] px-5 sm:px-7 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#fbf0e5] transition-all hover:bg-[#5b3a26] hover:translate-y-[-2px]"
                >
                  Explore Best Sellers <ArrowRight size={14} />
                </Link>
                <Link
                  to="/collections"
                  className="inline-flex items-center gap-2 rounded-full border border-[#7b5339] bg-transparent px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#382514] transition-all hover:bg-[#382514] hover:text-[#fbf0e5]"
                >
                  View All Edits
                </Link>
              </div>

              {/* Featured looks tab row */}
              <div className="mt-4 sm:mt-6 border-t border-[#e9dcc5] pt-4 sm:pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a7656]">
                  Select Featured Look
                </span>
                <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-2">
                  {heroLooks.map((look, idx) => (
                    <button
                      key={look.id}
                      type="button"
                      onClick={() => setHeroIndex(idx)}
                      className={`rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium tracking-wide transition-all ${
                        heroIndex === idx
                          ? 'bg-[#382514] text-[#fbf0e5] font-semibold'
                          : 'border border-[#d9c6a5] bg-[#faf5ed] text-[#5b3a26] hover:border-[#7b5339] hover:bg-white'
                      }`}
                    >
                      {look.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Arch Stage with Real Campaign Photography */}
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Backing decorative arch */}
              <div className="absolute -inset-3 sm:-inset-4 -bottom-4 sm:-bottom-6 rounded-[140px_140px_24px_24px] sm:rounded-[220px_220px_30px_30px] bg-[#ebdcc5]/70 backdrop-blur-sm" />

              {/* Main Photo Arch */}
              <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[130px_130px_20px_20px] sm:rounded-[200px_200px_24px_24px] border-2 border-white/80">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHero.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="h-full w-full"
                  >
                    <img
                      src={currentHero.image}
                      alt={currentHero.name}
                      className={`h-full w-full object-cover ${currentHero.position}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b12]/60 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Floating "Now Showing" Glass Card */}
                <div className="absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 z-20 rounded-xl sm:rounded-2xl border border-[#e9dcc5] bg-[#fbf0e5]/95 p-3 sm:p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#9a7656]">
                        Now Featuring
                      </span>
                      <h3 className="font-display text-lg sm:text-2xl font-bold leading-tight text-[#2a1b12]">
                        {currentHero.name}
                      </h3>
                      <p className="mt-0.5 text-[11px] sm:text-xs text-[#6b4d39]">{currentHero.note}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-bold text-[#382514]">
                        ₹{currentHero.price.toLocaleString('en-IN')}
                      </div>
                      <span className="text-[10px] sm:text-xs text-[#8b7a6d] line-through">
                        ₹{currentHero.mrp.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2.5 sm:mt-3 flex items-center justify-between border-t border-[#e9dcc5] pt-2">
                    <Link
                      to={`/product/${currentHero.id}`}
                      className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#7b5339] hover:underline"
                    >
                      View Details <ChevronRight size={13} />
                    </Link>
                    <Link
                      to="/cart"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#382514] px-3 sm:px-4 py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#fbf0e5] hover:bg-[#5b3a26]"
                    >
                      <ShoppingBag size={11} /> Add To Bag
                    </Link>
                  </div>
                </div>
              </div>

              {/* Rotating Circular Seal Badge (Hidden on extra small mobile screens for neatness, visible on sm and up) */}
              <div
                className="hidden sm:flex absolute -left-6 -top-6 z-20 h-24 w-24 items-center justify-center rounded-full bg-[#382514] text-[#e9dcc5] animate-spin"
                style={{ animationDuration: '20s' }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 100 100" className="h-full w-full p-2">
                  <defs>
                    <path
                      id="seal-circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[9px] font-bold uppercase tracking-[2.5px] fill-[#e9dcc5]">
                    <textPath href="#seal-circle">SAADGI • PURE WEAVES • </textPath>
                  </text>
                </svg>
              </div>

              {/* Prev / Next Slide Arrow Controls */}
              <div className="absolute -bottom-3 sm:-bottom-4 right-0 z-20 flex gap-2">
                <button
                  type="button"
                  aria-label="Previous look"
                  onClick={() =>
                    setHeroIndex((h) => (h - 1 + heroLooks.length) % heroLooks.length)
                  }
                  className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#7b5339] bg-[#faf5ed] text-[#382514] transition hover:bg-[#382514] hover:text-[#fbf0e5]"
                >
                  <ArrowLeft size={15} />
                </button>
                <button
                  type="button"
                  aria-label="Next look"
                  onClick={() => setHeroIndex((h) => (h + 1) % heroLooks.length)}
                  className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#7b5339] bg-[#faf5ed] text-[#382514] transition hover:bg-[#382514] hover:text-[#fbf0e5]"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION STRIP */}
      <section className="mx-auto max-w-[1500px] px-3 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 rounded-2xl sm:rounded-3xl border border-[#e9dcc5] bg-[#faf5ed] p-3.5 sm:p-6 lg:p-7 shadow-sm sm:grid-cols-4">
          <div className="flex items-center gap-2 sm:gap-3 border-r border-[#e9dcc5]/80 pr-2 sm:pr-4">
            <span className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#fbf0e5] text-[#7b5339] border border-[#e9dcc5]">
              <Sparkles size={14} className="sm:w-[18px] sm:h-[18px]" />
            </span>
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-[#2a1b12]">Artisanal Quality</p>
              <p className="text-[9px] sm:text-[11px] text-[#7b5339]">Natural cotton & linen</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 sm:border-r border-[#e9dcc5]/80 sm:pr-4">
            <span className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#fbf0e5] text-[#7b5339] border border-[#e9dcc5]">
              <Truck size={14} className="sm:w-[18px] sm:h-[18px]" />
            </span>
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-[#2a1b12]">Express Delivery</p>
              <p className="text-[9px] sm:text-[11px] text-[#7b5339]">Across India in 3-5 days</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 border-r border-[#e9dcc5]/80 pr-2 sm:pr-4">
            <span className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#fbf0e5] text-[#7b5339] border border-[#e9dcc5]">
              <RotateCcw size={14} className="sm:w-[18px] sm:h-[18px]" />
            </span>
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-[#2a1b12]">7-Day Returns</p>
              <p className="text-[9px] sm:text-[11px] text-[#7b5339]">Doorstep pickup</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#fbf0e5] text-[#7b5339] border border-[#e9dcc5]">
              <Tag size={14} className="sm:w-[18px] sm:h-[18px]" />
            </span>
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-[#2a1b12]">Helpline & WA</p>
              <p className="text-[9px] sm:text-[11px] font-semibold text-[#7b5339]">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REDESIGNED ARCH CATEGORY TILES (Shop by Style) */}
      <section id="categories" className="mx-auto max-w-[1500px] px-3 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-10 flex flex-wrap items-end justify-between gap-3 sm:gap-6 border-b border-[#e9dcc5] pb-4 sm:pb-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#9a7656]">
              Curated Edits
            </span>
            <h2 className="mt-1 sm:mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2a1b12]">
              Shop by Style & Silhouette
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#5b3a26]">
            Choose a signature cut or fabric mood to discover outfits crafted for comfort and grace.
          </p>
        </div>

        {/* Mobile: Horizontal scrollable story cards (Myntra style), Tablet & Desktop: Grid */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 scrollbar-none snap-x snap-mandatory">
          {categories.slice(0, 3).map((cat) => (
            <Link
              key={cat.id}
              to={`/collections/${cat.id}`}
              className="group relative flex-none w-[78vw] sm:w-auto snap-center flex flex-col overflow-hidden rounded-[160px_160px_20px_20px] sm:rounded-[220px_220px_24px_24px] border border-[#e9dcc5] bg-[#faf5ed] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Arch Image Container with Actual Real Pictures */}
              <div className="relative h-[300px] sm:h-[380px] w-full overflow-hidden rounded-[160px_160px_0_0] sm:rounded-[220px_220px_0_0]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b12]/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-3 sm:bottom-4 text-center">
                  <span className="inline-block rounded-full bg-white/85 px-3 sm:px-4 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#382514] backdrop-blur-md">
                    Featured Collection
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-[#e9dcc5] p-4 sm:p-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2a1b12] group-hover:text-[#7b5339]">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#6b4d39] mt-0.5">{cat.description}</p>
                </div>
                <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#7b5339] bg-white text-[#382514] transition group-hover:bg-[#382514] group-hover:text-[#fbf0e5]">
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. BEST SELLERS INTERACTIVE CARD STACK SECTION */}
      <section className="relative z-10 mx-auto max-w-[1500px] px-3 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-8 flex flex-wrap items-end justify-between gap-3 sm:gap-5 border-b border-[#e9dcc5] pb-4 sm:pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#9a7656]">
                <Flame size={14} className="text-[#bd644d]" /> Most Loved By You
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[#e9dcc5]/80 px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#5b3a26]">
                <Layers size={11} />
                {isBestSellerExpanded ? 'Deck Spread' : 'Hover over deck to spread'}
              </span>
            </div>
            <h2 className="mt-1 sm:mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2a1b12]">
              Best Sellers
            </h2>
            <p className="mt-1 sm:mt-2 max-w-lg text-xs sm:text-sm text-[#5b3a26]">
              Our most celebrated silhouettes. Discover pieces designed with artisanal heritage, deep pockets, and all-day comfort.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/best-sellers"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#382514] px-4 sm:px-6 py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#382514] transition hover:bg-[#382514] hover:text-[#fbf0e5]"
            >
              View all <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* Interactive Stack Canvas */}
        <div
          className="relative py-2 sm:py-4"
          onMouseEnter={() => setIsBestSellerExpanded(true)}
          onMouseLeave={() => setIsBestSellerExpanded(false)}
        >
          {/* Desktop & Tablet Stack Area */}
          <div className="hidden md:block relative min-h-[580px] w-full">
            {bestSellerProducts.slice(0, 4).map((product, index) => {
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
                      ? { y: -8, zIndex: 30, transition: { duration: 0.2 } }
                      : { scale: 1.03, transition: { duration: 0.2 } }
                  }
                >
                  <ProductCard product={product} />
                </motion.div>
              )
            })}
          </div>

          {/* Quick Helper Pill under deck (Desktop only) */}
          <div className="hidden md:flex justify-center mt-3">
            <motion.div
              animate={{ opacity: isBestSellerExpanded ? 0.4 : 1, y: isBestSellerExpanded ? 12 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#d9c6a5] bg-[#faf5ed] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#5b3a26] shadow-sm backdrop-blur-md cursor-pointer hover:border-[#7b5339]"
              onClick={() => setIsBestSellerExpanded((prev) => !prev)}
            >
              <Sparkles size={14} className="text-[#b69573]" />
              {isBestSellerExpanded ? 'Move cursor away to stack deck' : 'Hover over deck to stack out all 4 cards'}
            </motion.div>
          </div>

          {/* Mobile & Tablet 2-Column Product Grid (Myntra Standard 2-Col Format) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:hidden">
            {bestSellerProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE COLLECTION (Fresh From the Loom with Interactive Filter Tabs) */}
      <section id="collection" className="mx-auto max-w-[1500px] px-3 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-10 flex flex-wrap items-end justify-between gap-3 sm:gap-6 border-b border-[#e9dcc5] pb-4 sm:pb-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#9a7656]">
              The Collection
            </span>
            <h2 className="mt-1 sm:mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2a1b12]">
              Fresh from the Loom
            </h2>
          </div>
          {/* Interactive filter scrollable row on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
            {[
              { id: 'all', label: 'All Styles' },
              { id: 'festive', label: 'Festive Wear' },
              { id: 'everyday', label: 'Everyday Wear' },
              { id: 'cotton', label: 'Cotton Suits' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`flex-none rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-[#382514] text-[#fbf0e5] shadow-md'
                    : 'border border-[#d9c6a5] bg-[#faf5ed] text-[#5b3a26] hover:bg-white hover:border-[#7b5339]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-column on mobile, 4-column on desktop (Myntra standard) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 items-stretch">
          {visibleProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Link
            to="/all-products"
            className="inline-flex items-center gap-2 rounded-full bg-[#382514] px-6 sm:px-8 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#fbf0e5] shadow-lg transition-all hover:bg-[#5b3a26]"
          >
            Explore Complete Catalog <ChevronRight size={15} />
          </Link>
        </div>
      </section>

      {/* 7. END OF SEASON CLEARANCE (Interactive Luxury Showcase & Hero Banner) */}
      <section className="mx-auto max-w-[1500px] px-3 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] border border-[#e9dcc5] bg-gradient-to-b from-[#fbf5ed] via-[#f7eee2] to-[#f2e5d5] p-3.5 sm:p-8 lg:p-12 shadow-sm">
          
          {/* A. INTERACTIVE HERO CLEARANCE BANNER */}
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-gradient-to-r from-[#2a1b12] via-[#382514] to-[#4a3120] text-[#fbf0e5] p-4 sm:p-10 lg:p-12 shadow-xl">
            {/* Subtle luxury glow elements in background */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full bg-[#c9a97f]/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#bd644d]/15 blur-3xl" />

            <div className="relative z-10 grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.3fr_0.9fr]">
              {/* Left Column: Headline, Countdown & Value Statement */}
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#bd644d] px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                    <Flame size={12} /> Seasonal Clearance
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c9a97f]/40 bg-[#2a1b12]/60 px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#e9dcc5] backdrop-blur-md">
                    <Sparkles size={11} className="text-[#c9a97f]" /> Up To 45% Off
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#fbf0e5]">
                    End of Season <br />
                    <span className="italic font-normal text-[#c9a97f]">Clearance Privilege</span>
                  </h2>
                  <p className="mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-[#d9c6a5]">
                    Limited handcrafted inventory from this season’s pure cotton & festive looms. Once these archival pieces sell out, they will not return to the rack.
                  </p>
                </div>

                {/* Live Countdown Timer & Coupon Code interactive chip */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 sm:pt-2">
                  {/* Countdown Timer */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-[#c9a97f]/30 bg-[#1c120b]/80 px-2.5 sm:px-3.5 py-1.5 sm:py-2 min-w-[48px] sm:min-w-[56px] backdrop-blur-sm">
                      <span className="font-mono text-base sm:text-xl font-bold text-[#fbf0e5]">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                      <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#9a7656]">Hours</span>
                    </div>
                    <span className="text-base sm:text-xl font-bold text-[#c9a97f]">:</span>
                    <div className="flex flex-col items-center justify-center rounded-xl border border-[#c9a97f]/30 bg-[#1c120b]/80 px-2.5 sm:px-3.5 py-1.5 sm:py-2 min-w-[48px] sm:min-w-[56px] backdrop-blur-sm">
                      <span className="font-mono text-base sm:text-xl font-bold text-[#fbf0e5]">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#9a7656]">Mins</span>
                    </div>
                    <span className="text-base sm:text-xl font-bold text-[#c9a97f]">:</span>
                    <div className="flex flex-col items-center justify-center rounded-xl border border-[#c9a97f]/30 bg-[#1c120b]/80 px-2.5 sm:px-3.5 py-1.5 sm:py-2 min-w-[48px] sm:min-w-[56px] backdrop-blur-sm">
                      <span className="font-mono text-base sm:text-xl font-bold text-[#fbf0e5]">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#9a7656]">Secs</span>
                    </div>
                  </div>

                  {/* Copyable Coupon Badge */}
                  <div className="flex items-center gap-2 rounded-xl sm:rounded-2xl border border-[#c9a97f]/30 bg-[#1c120b]/60 px-3 sm:px-4 py-2 sm:py-2.5 backdrop-blur-sm">
                    <div>
                      <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#9a7656]">Promo Code</span>
                      <p className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#fbf0e5]">SAADGI35</p>
                    </div>
                    <button
                      type="button"
                      onClick={copyCoupon}
                      className="ml-1.5 sm:ml-2 flex h-8 sm:h-9 items-center gap-1.5 rounded-lg bg-[#c9a97f] px-2.5 sm:px-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#2a1b12] transition hover:bg-white"
                      aria-label="Copy promo code"
                    >
                      {couponCopied ? (
                        <>
                          <Check size={12} /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={12} /> Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Campaign Banner Model Card */}
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80"
                    alt="Saadgi Seasonal Clearance Showcase"
                    className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c120b]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#c9a97f]">Curated Archival Drop</span>
                      <p className="font-display text-base sm:text-lg font-bold text-white">Pure Cotton Sets</p>
                    </div>
                    <Link
                      to="/all-products"
                      className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#2a1b12] shadow-sm backdrop-blur-md transition hover:bg-white"
                    >
                      Shop All <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* B. INTERACTIVE FILTER TABS FOR CLEARANCE ITEMS */}
          <div className="mt-8 sm:mt-10 mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-[#e9dcc5] pb-4 sm:pb-5">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-[#9a7656]">
                Explore Handcrafted Pieces
              </span>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#2a1b12]">
                Archival Silhouettes on Sale
              </h3>
            </div>

            {/* Interactive Category Filter Pills (Scrollable row on mobile) */}
            <div className="flex gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
              {[
                { id: 'all', label: 'All Sale Pieces' },
                { id: 'festive', label: 'Festive Wear' },
                { id: 'everyday', label: 'Everyday Wear' },
                { id: 'under4999', label: 'Under ₹4,999' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSaleCategory(tab.id as any)}
                  className={`flex-none rounded-full px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all ${
                    saleCategory === tab.id
                      ? 'bg-[#382514] text-[#fbf0e5] shadow-sm'
                      : 'border border-[#d9c6a5] bg-[#faf5ed] text-[#5b3a26] hover:bg-white hover:border-[#7b5339]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* C. INTERACTIVE REAL CLOTHES SHOWCASE CARDS (2-Col on Mobile, 4-Col on Desktop) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {endOfSeasonProducts.map((product) => {
              const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100)
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col overflow-hidden rounded-[18px] sm:rounded-[24px] border border-[#e9dcc5] bg-white/95 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(56,37,20,0.1)]"
                >
                  {/* Photo Area */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f4ebd0]/30">
                    <Link to={`/product/${product.slug}`} className="block h-full w-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {product.gallery[1] && (
                        <img
                          src={product.gallery[1]}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      )}
                    </Link>

                    {/* Discount & Stock Urgency Badges */}
                    <div className="absolute inset-x-2 sm:inset-x-3 top-2 sm:top-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#bd644d] px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                        <Zap size={9} fill="currentColor" /> {discountPercent}% OFF
                      </span>
                      {product.stock <= 10 && (
                        <span className="hidden sm:inline-block rounded-full border border-white/80 bg-white/90 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#bd644d] backdrop-blur-sm">
                          Only {product.stock} left
                        </span>
                      )}
                    </div>

                    {/* Quick View Pill on Hover */}
                    <div className="absolute inset-x-0 bottom-3 hidden sm:flex justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                      <Link
                        to={`/product/${product.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#382514]/90 px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-[#fbf0e5] shadow-sm backdrop-blur-md transition hover:bg-[#382514]"
                      >
                        <ShoppingBag size={11} /> Quick View
                      </Link>
                    </div>
                  </div>

                  {/* Product Details Section */}
                  <div className="flex flex-1 flex-col p-3 sm:p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a7656]">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#5b3a26]">
                        <Star size={11} fill="#c9a97f" className="text-[#c9a97f]" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    <Link
                      to={`/product/${product.slug}`}
                      className="mt-1 sm:mt-2 font-display text-base sm:text-2xl font-bold text-[#2a1b12] transition hover:text-[#7b5339] line-clamp-1"
                    >
                      {product.name}
                    </Link>

                    {/* Price and Savings Row */}
                    <div className="mt-2 sm:mt-4 flex flex-wrap items-baseline gap-1.5 sm:gap-2.5">
                      <span className="text-sm sm:text-xl font-bold text-[#382514]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] sm:text-xs text-[#8b7a6d] line-through">
                        ₹{product.mrp.toLocaleString('en-IN')}
                      </span>
                      <span className="w-full sm:w-auto sm:ml-auto text-[9px] sm:text-[10px] font-bold text-[#bd644d]">
                        Save ₹{(product.mrp - product.price).toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Size Selector CTA */}
                    <div className="mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-[#f0e4d2]">
                      <Link
                        to={`/product/${product.slug}`}
                        className="flex w-full items-center justify-center gap-1 rounded-full border border-[#d9c6a5] bg-[#faf5ed] py-1.5 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-[#382514] transition-all hover:border-[#382514] hover:bg-[#382514] hover:text-[#fbf0e5]"
                      >
                        Choose Size <ChevronRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* D. BOTTOM PRIVILEGE RIBBON */}
          <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-between gap-3 sm:gap-5 rounded-xl sm:rounded-2xl border border-[#e9dcc5] bg-white/90 p-3.5 sm:p-5 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#fbf0e5] text-[#7b5339] border border-[#e9dcc5]">
                <Tag size={16} />
              </span>
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-[#2a1b12]">Automatic Seasonal Privilege</p>
                <p className="text-[10px] sm:text-[11px] text-[#7b5339]">Apply code SAADGI35 at checkout for complimentary expedited delivery</p>
              </div>
            </div>
            <Link
              to="/all-products"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#382514] px-4 sm:px-6 py-2 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-[#fbf0e5] transition hover:bg-[#5b3a26]"
            >
              Browse All Styles <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. OUR FABRIC ACCORDION & VISUAL ARCH (Brown & Beige Weave Spotlight) */}
      <section className="mx-auto max-w-[1500px] px-3 sm:px-6 md:px-8">
        <div className="overflow-hidden rounded-[24px] sm:rounded-[36px] bg-[#382514] text-[#fbf0e5] p-5 sm:p-12 lg:p-16">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Visual Arch with Real Photo or Micro-weave */}
            <div className="relative mx-auto w-full max-w-[260px] sm:max-w-sm">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[130px_130px_16px_16px] sm:rounded-[200px_200px_20px_20px] transition-all duration-700"
                style={{ background: fabricStories[activeFabric].bg }}
              >
                <img
                  src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=80"
                  alt="Fabric texture"
                  className="h-full w-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-6 text-center">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#e9dcc5]">
                    Texture Spotlight
                  </span>
                  <p className="font-display text-lg sm:text-2xl font-bold text-white mt-1">
                    {fabricStories[activeFabric].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a97f]">
                  Our Fabric Promise
                </span>
                <h2 className="mt-1 sm:mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#fbf0e5]">
                  Made to be <span className="italic text-[#c9a97f]">worn all day</span>
                </h2>
              </div>

              <div className="divide-y divide-[#5b3a26] border-y border-[#5b3a26]">
                {fabricStories.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveFabric(index)}
                    className="w-full py-4 sm:py-5 text-left transition-colors hover:text-[#e9dcc5]"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-display text-lg sm:text-2xl transition-colors ${
                          activeFabric === index ? 'text-[#c9a97f] font-bold' : 'text-[#fbf0e5]'
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="text-xl sm:text-2xl text-[#c9a97f]">
                        {activeFabric === index ? '−' : '+'}
                      </span>
                    </div>
                    {activeFabric === index && (
                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#d9c6a5]">
                        {item.body}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SIGNATURE EDITORIAL "LOVE NOTES & REFLECTIONS" SECTION (Bespoke Luxury UI) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f1e7] via-[#fdfaf5] to-[#f5ebd9] py-12 sm:py-20 lg:py-28 border-y border-[#e9dcc5]">
        {/* Artistic ambient glow background elements */}
        <div className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 rounded-full bg-[#d9c6a5]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-[#7b5339]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-3 sm:px-6 md:px-8">
          
          {/* Section Header with Editorial Framing */}
          <div className="mb-8 sm:mb-14 flex flex-wrap items-end justify-between gap-4 sm:gap-6 border-b border-[#e9dcc5] pb-6 sm:pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="h-px w-8 sm:w-10 bg-[#7b5339]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#7b5339]">
                  Kind Words, Close to Heart
                </span>
              </div>
              <h2 className="mt-2 sm:mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#2a1b12]">
                Love Notes & <span className="italic font-normal text-[#7b5339]">Reflections</span>
              </h2>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#5b3a26]">
                Genuine impressions on fabric softness, movement, and silhouette grace from women across India who live in SAADGI.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Community rating summary plaque */}
              <div className="flex items-center gap-2 sm:gap-3 rounded-full border border-[#d9c6a5] bg-white/80 px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-sm backdrop-blur-md">
                <div className="flex gap-1 text-[#c9a97f]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <div className="h-3.5 w-px bg-[#d9c6a5]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#382514]">4.9 / 5.0</span>
                <span className="text-[10px] sm:text-xs text-[#8a725f]">({reviewsList.length + 340}+ Reviews)</span>
              </div>

              {/* Action Button: Share Your Story / Write Review */}
              <button
                type="button"
                onClick={() => setIsWriteReviewOpen(true)}
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#382514] px-4 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#fbf0e5] shadow-sm transition-all hover:bg-[#5b3a26] hover:translate-y-[-1px]"
              >
                <MessageSquarePlus size={14} /> Write a Review
              </button>
            </div>
          </div>

          {/* Toast Notification when Review is Added */}
          <AnimatePresence>
            {reviewSubmittedNotice && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 sm:mb-8 flex items-center justify-between rounded-xl sm:rounded-2xl border border-[#7b5339]/30 bg-[#382514] p-3 sm:p-4 text-[#fbf0e5] shadow-lg"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#c9a97f] text-[#2a1b12]">
                    <CheckCircle2 size={16} />
                  </span>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#c9a97f]">Thank You for Your Voice</p>
                    <p className="text-[10px] sm:text-xs text-[#d9c6a5]">Your reflection and rating have been added to our community gallery.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setReviewSubmittedNotice(false)}
                  className="rounded-full p-1 text-[#c9a97f] hover:text-white"
                >
                  <X size={15} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* B. LUXURY DUAL-STAGE ARCH & TESTIMONIAL FEED UI */}
          <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            
            {/* Left Stage: Spotlight Statement Piece with Architectural Arch & Big Typography */}
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#e9dcc5] bg-gradient-to-b from-white via-[#faf5ed] to-[#f5ebd9] p-5 sm:p-12 shadow-sm">
              <div className="absolute right-4 top-4 sm:right-6 sm:top-6 text-[#ebdcc5]/40 pointer-events-none select-none">
                <Quote size={80} className="sm:w-[120px] sm:h-[120px]" strokeWidth={1} />
              </div>

              <div className="relative z-10 flex flex-col justify-between min-h-[260px] sm:min-h-[380px]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#382514] px-3 sm:px-3.5 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#fbf0e5]">
                      <Sparkles size={11} className="text-[#c9a97f]" /> Spotlight
                    </span>
                    <div className="flex gap-1 text-[#c9a97f]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          fill={i < reviewsList[selectedReviewIdx].rating ? 'currentColor' : 'none'}
                          stroke="currentColor"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Big Editorial Quote */}
                  <blockquote className="mt-5 sm:mt-8 font-serif text-lg sm:text-3xl lg:text-4xl leading-relaxed text-[#2a1b12] italic font-normal">
                    “{reviewsList[selectedReviewIdx].review}”
                  </blockquote>
                </div>

                {/* Spotlight Reviewer Profile */}
                <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-[#e9dcc5] flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={reviewsList[selectedReviewIdx].avatar}
                      alt={reviewsList[selectedReviewIdx].name}
                      className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-[#c9a97f] shadow-sm"
                    />
                    <div>
                      <h4 className="font-display text-base sm:text-xl font-bold text-[#2a1b12]">
                        {reviewsList[selectedReviewIdx].name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-[#7b5339] font-medium">
                        {reviewsList[selectedReviewIdx].city} • Purchased <span className="font-bold">{reviewsList[selectedReviewIdx].product}</span>
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-[#d9c6a5] bg-white/80 px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#5b3a26]">
                    {reviewsList[selectedReviewIdx].tag || 'Verified Purchase'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Stage: Interactive Voices Reel (Click any to spotlight on the left) */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#9a7656]">
                  Recent Reflections ({reviewsList.length})
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#7b5339] italic">Tap any note to view</span>
              </div>

              <div className="flex flex-col gap-2.5 sm:gap-3.5 max-h-[420px] sm:max-h-[500px] overflow-y-auto pr-1">
                {reviewsList.map((item, index) => {
                  const isSelected = selectedReviewIdx === index
                  return (
                    <button
                      key={`${item.name}-${index}`}
                      type="button"
                      onClick={() => setSelectedReviewIdx(index)}
                      className={`w-full text-left rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border transition-all duration-300 ${
                        isSelected
                          ? 'border-[#7b5339] bg-[#382514] text-[#fbf0e5] shadow-md translate-x-1'
                          : 'border-[#e9dcc5] bg-white/85 text-[#2a1b12] hover:bg-white hover:border-[#c9a97f] hover:translate-x-0.5'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover border border-[#c9a97f]/60"
                          />
                          <div>
                            <span className={`block text-xs font-bold tracking-wider ${isSelected ? 'text-[#fbf0e5]' : 'text-[#382514]'}`}>
                              {item.name}
                            </span>
                            <span className={`text-[9px] sm:text-[10px] ${isSelected ? 'text-[#c9a97f]' : 'text-[#8a725f]'}`}>
                              {item.city} • {item.product}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-0.5 text-[#c9a97f]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={11}
                              fill={i < item.rating ? 'currentColor' : 'none'}
                              stroke="currentColor"
                            />
                          ))}
                        </div>
                      </div>

                      <p className={`mt-2 sm:mt-3 text-xs leading-relaxed line-clamp-2 ${isSelected ? 'text-[#e9dcc5]' : 'text-[#5b3a26]'}`}>
                        “{item.review}”
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Interactive Modal: Add Your Comment & Star Rating */}
          <AnimatePresence>
            {isWriteReviewOpen && (
              <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#2a1b12]/60 px-4 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-[#e9dcc5] bg-[#faf5ed] p-6 sm:p-8 shadow-2xl"
                >
                  <button
                    type="button"
                    aria-label="Close review dialog"
                    onClick={() => setIsWriteReviewOpen(false)}
                    className="absolute right-5 top-5 rounded-full p-2 text-[#7b5339] transition hover:bg-[#e9dcc5] hover:text-[#2a1b12]"
                  >
                    <X size={18} />
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#382514] text-[#e9dcc5]">
                      <MessageSquare size={15} />
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9a7656]">Community Voices</span>
                      <h3 className="font-display text-2xl font-bold text-[#2a1b12]">Share Your Review</h3>
                    </div>
                  </div>

                  <form onSubmit={handleReviewSubmit} className="mt-6 flex flex-col gap-4">
                    {/* Star Rating Selector */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5b3a26]">
                        Your Overall Rating
                      </label>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          {[1, 2, 3, 4, 5].map((starVal) => {
                            const isFilled = (hoverRating || newReviewRating) >= starVal
                            return (
                              <button
                                key={starVal}
                                type="button"
                                onMouseEnter={() => setHoverRating(starVal)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setNewReviewRating(starVal)}
                                className="p-1 transition-transform hover:scale-110 focus:outline-none"
                                aria-label={`Rate ${starVal} stars`}
                              >
                                <Star
                                  size={24}
                                  fill={isFilled ? '#c9a97f' : 'none'}
                                  stroke={isFilled ? '#c9a97f' : '#b69a69'}
                                  className="transition-colors"
                                />
                              </button>
                            )
                          })}
                        </div>
                        <span className="text-xs font-bold text-[#7b5339]">
                          {newReviewRating} of 5 Stars
                        </span>
                      </div>
                    </div>

                    {/* Author Name */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5b3a26]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shalini K."
                        value={newReviewAuthor}
                        onChange={(e) => setNewReviewAuthor(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-[#d9c6a5] bg-white px-4 py-3 text-sm text-[#2a1b12] placeholder-[#a69181] focus:border-[#7b5339] focus:outline-none focus:ring-1 focus:ring-[#7b5339]"
                      />
                    </div>

                    {/* Product Selection */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5b3a26]">
                        Product Reviewed
                      </label>
                      <select
                        value={newReviewProduct}
                        onChange={(e) => setNewReviewProduct(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-[#d9c6a5] bg-white px-4 py-3 text-sm text-[#2a1b12] focus:border-[#7b5339] focus:outline-none focus:ring-1 focus:ring-[#7b5339]"
                      >
                        {products.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Review Comments */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5b3a26]">
                        Your Comments & Experience
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Share your thoughts on the softness of the weave, color accuracy, and overall fit..."
                        value={newReviewComment}
                        onChange={(e) => setNewReviewComment(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-[#d9c6a5] bg-white px-4 py-3 text-sm text-[#2a1b12] placeholder-[#a69181] focus:border-[#7b5339] focus:outline-none focus:ring-1 focus:ring-[#7b5339]"
                      />
                    </div>

                    {/* Submit Actions */}
                    <div className="mt-3 flex items-center justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsWriteReviewOpen(false)}
                        className="rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#7b5339] hover:bg-[#e9dcc5]/50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-[#382514] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#fbf0e5] shadow-sm transition hover:bg-[#5b3a26]"
                      >
                        <Send size={13} /> Post Review
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 10. OFFICIAL INSTAGRAM REELS & VIDEO SHOWCASE */}
      <section className="mx-auto max-w-[1500px] px-3 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-10 flex flex-wrap items-end justify-between gap-4 sm:gap-6 border-b border-[#e9dcc5] pb-5 sm:pb-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                <Camera size={11} /> @saadgi_.official
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#7b5339]">
                Live Store Styling
              </span>
            </div>
            <h2 className="mt-2 sm:mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2a1b12]">
              Watch Our Latest Reels
            </h2>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#5b3a26]">
              Real fabric movement, try-ons, and studio mirror reflections fresh from our Delhi flagship boutique.
            </p>
          </div>

          <a
            href="https://www.instagram.com/saadgi_.official?cplk=MW5yaW5qemZoY3BleQ=="
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-gradient-to-r from-[#382514] to-[#5b3a26] px-5 sm:px-7 py-2.5 sm:py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#fbf0e5] shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-1px]"
          >
            <Camera size={15} /> Follow @saadgi_.official <ExternalLink size={12} className="text-[#c9a97f]" />
          </a>
        </div>

        {/* 6-Reel Grid Showcase (Scrollable on small mobile screens or 2-col, 3-col on tablet, 6-col on desktop) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {officialReels.map((reel, index) => (
            <a
              key={reel.id}
              href="https://www.instagram.com/saadgi_.official?cplk=MW5yaW5qemZoY3BleQ=="
              target="_blank"
              rel="noreferrer"
              aria-label={`Watch ${reel.title} on Instagram Reels`}
              className={`group relative block overflow-hidden rounded-[20px] sm:rounded-[26px] border border-[#e9dcc5] bg-[#faf5ed] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(56,37,20,0.14)] ${
                index % 2 === 1 ? 'lg:translate-y-3' : ''
              }`}
            >
              {/* Reel Image Container */}
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#2a1b12]">
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-108"
                />

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Top Instagram Reel Badge */}
                <div className="absolute inset-x-2.5 sm:inset-x-3 top-2.5 sm:top-3 flex items-center justify-between">
                  <span className="flex items-center gap-1 rounded-full bg-black/45 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    <Camera size={9} className="text-[#f4ebd0]" /> Reel
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-white/90 drop-shadow-md">
                    ▶ {reel.views}
                  </span>
                </div>

                {/* Center Animated Play Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-white/90 text-[#382514] shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-115 group-hover:bg-[#c9a97f] group-hover:text-white">
                    <Play size={16} fill="currentColor" className="ml-0.5 sm:ml-1" />
                  </span>
                </div>

                {/* Bottom Meta & Caption */}
                <div className="absolute inset-x-2.5 sm:inset-x-3 bottom-2.5 sm:bottom-3 text-white">
                  <span className="block text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#c9a97f]">
                    {reel.category}
                  </span>
                  <p className="mt-0.5 sm:mt-1 font-display text-xs sm:text-sm font-semibold leading-tight text-white line-clamp-2">
                    {reel.title}
                  </p>
                  <div className="mt-1.5 sm:mt-2 hidden sm:flex items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#e9dcc5] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Watch Reel <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Instagram Community Callout Bar */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-[#e9dcc5] bg-gradient-to-r from-[#faf5ed] via-[#fbf0e5] to-[#faf5ed] p-3.5 sm:p-5">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[#382514] text-[#e9dcc5]">
              <Camera size={16} />
            </span>
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-[#2a1b12]">Tag @saadgi_.official in your stories</p>
              <p className="text-[10px] sm:text-[11px] text-[#7b5339]">Use hashtag #SaadgiElegance to be featured on our official store reels feed.</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/saadgi_.official?cplk=MW5yaW5qemZoY3BleQ=="
            target="_blank"
            rel="noreferrer"
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#7b5339] hover:underline"
          >
            Visit Official Instagram Profile →
          </a>
        </div>
      </section>
    </div>
  )
}
