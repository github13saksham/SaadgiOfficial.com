import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  ChevronRight,
  Headphones,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
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
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=85',
    eyebrow: 'SAADGI · THE NEW EDIT',
    title: 'Elegance in Every Thread.',
    description:
      'Thoughtfully curated ethnic wear for women who find beauty in the details.',
    action: 'Explore Best Sellers',
  },
  {
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85',
    eyebrow: 'MADE FOR YOUR MOMENTS',
    title: 'A little grace, every day.',
    description:
      'Discover timeless silhouettes and considered details made to feel like you.',
    action: 'Discover the Edit',
  },
  {
    image:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1800&q=85',
    eyebrow: 'THE FESTIVE COLLECTION',
    title: 'Tradition, beautifully reimagined.',
    description:
      'Celebration-ready pieces with a softer, more personal point of view.',
    action: 'Find Your Look',
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
  const featuredProducts = products.filter((product) => product.bestseller).slice(0, 4)

  return (
    <div>
      <section
        aria-label="SAADGI collection highlights"
        className="hero-carousel relative isolate overflow-hidden bg-[#eee3d7]"
        onMouseEnter={() => setCarouselPaused(true)}
        onMouseLeave={() => setCarouselPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={heroSlides[activeSlide].image}
              alt="SAADGI ethnic wear campaign"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#211711]/75 via-[#211711]/40 to-[#211711]/5" />
          </motion.div>
        </AnimatePresence>

        <div className="relative mx-auto flex min-h-[570px] max-w-[1500px] items-center px-6 py-20 sm:min-h-[640px] md:px-12 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${activeSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl text-white"
            >
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f0d7b1]">
                {heroSlides[activeSlide].eyebrow}
              </p>
              <h1 className="font-display text-6xl leading-[0.9] sm:text-7xl lg:text-[6.5rem]">
                {heroSlides[activeSlide].title}
              </h1>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/85 sm:text-base">
                {heroSlides[activeSlide].description}
              </p>
              <Link
                to="/best-sellers"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f5efe6] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#34241c] transition hover:bg-white"
              >
                {heroSlides[activeSlide].action}
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-6 flex items-center gap-4 text-xs text-white/80 md:left-12 lg:left-20">
            <span className="font-display text-2xl text-white">
              0{activeSlide + 1}
            </span>
            <span className="h-px w-12 bg-white/50" />
            <span>0{heroSlides.length}</span>
          </div>

          <div className="absolute bottom-7 right-6 flex items-center gap-2 md:right-12 lg:right-20">
            <div className="mr-3 hidden items-center gap-2 sm:flex">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={activeSlide === index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'w-10 bg-white' : 'w-5 bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => changeSlide(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition hover:bg-white hover:text-[#34241c]"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => changeSlide(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition hover:bg-white hover:text-[#34241c]"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <section className="home-section mx-auto max-w-[1500px] px-5 py-20 md:px-8 lg:py-24">
        <div className="section-heading mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="eyebrow">The Most Loved</p>
            <h2 className="section-title">Best Sellers</h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-[#725b4d]">
              Discover the styles our customers can’t get enough of.
            </p>
          </div>
          <Link
            to="/best-sellers"
            className="hidden items-center gap-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#34241c] transition hover:text-[#9b784b] sm:inline-flex"
          >
            View all <ChevronRight size={15} />
          </Link>
        </div>
        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

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
                <blockquote className="font-display text-3xl leading-snug text-[#34241c] sm:text-4xl">
                  “{review.review}”
                </blockquote>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#34241c]">
                  {review.name}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#8a725f]">
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
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5d6c6] bg-white text-[#34241c] transition hover:border-[#b69a69] sm:left-5"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() =>
                setActiveReview((current) => (current + 1) % testimonials.length)
              }
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5d6c6] bg-white text-[#34241c] transition hover:border-[#b69a69] sm:right-5"
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
            Development sample reviews
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-20 md:px-8 lg:py-24">
        <div className="overflow-hidden rounded-[30px] bg-[#e9ded1]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
              <p className="eyebrow">A season, remembered</p>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] text-[#34241c] sm:text-6xl">
                The season changes. Your story stays.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#654e40]">
                A considered edit of pieces to wear, love, and return to long after
                the moment has passed.
              </p>
              <Link
                to="/all-products"
                className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#8f7256] pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#34241c] transition hover:gap-5"
              >
                Explore the end-of-season edit <ArrowRight size={15} />
              </Link>
              <div className="mt-9 flex items-center gap-2 text-xs text-[#725b4d]">
                <Check size={15} className="text-[#9a794b]" />
                Thoughtfully made, chosen to last
              </div>
            </div>
            <div className="relative min-h-[350px] overflow-hidden lg:min-h-[540px]">
              <img
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200&q=85"
                alt="An elegant SAADGI seasonal look"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221711]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5efe6] py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Follow along</p>
              <h2 className="section-title">A little SAADGI in your everyday</h2>
              <p className="mt-3 text-sm leading-7 text-[#725b4d]">
                Styling inspiration and new stories from our community.
              </p>
            </div>
            <a
              href="https://www.instagram.com/saadgi/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d6c5b2] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#34241c] transition hover:border-[#9b784b] hover:bg-white"
            >
              <Camera size={15} /> @saadgi
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
                className={`group relative block overflow-hidden rounded-[18px] ${
                  index === 1 ? 'lg:translate-y-5' : ''
                }`}
              >
                <img
                  src={image}
                  alt="SAADGI style inspiration"
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[#211711]/40 text-white opacity-0 transition group-hover:opacity-100">
                  <Camera size={21} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-20 md:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <p className="eyebrow">The SAADGI promise</p>
          <h2 className="section-title">Care in every detail</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#725b4d]">
            Thoughtful service that makes every part of your experience feel considered.
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
                    ? 'border-[#b69a69] bg-[#34241c] text-white shadow-[0_18px_40px_rgba(52,36,28,0.16)]'
                    : 'border-[#eadfce] bg-white text-[#34241c] shadow-[0_12px_30px_rgba(52,36,28,0.035)] hover:border-[#c9ad84]'
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
                <span className="font-display text-3xl">{service.title}</span>
                <span
                  className={`mt-2 text-xs leading-6 ${
                    isExpanded ? 'text-white/75' : 'text-[#725b4d]'
                  }`}
                >
                  {isExpanded ? serviceDetails[index] : service.description}
                </span>
                <span
                  className={`mt-auto pt-4 text-[9px] font-semibold uppercase tracking-[0.18em] ${
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
