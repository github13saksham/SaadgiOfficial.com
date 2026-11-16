import { Link } from 'react-router-dom'
import storeSignage from '../assets/store-signage.jpg'
import { Sparkles, Heart, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-[#faf5ed] text-[#382514]">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[#382514]/30 bg-[#2d1e15] py-16 sm:py-24 text-[#fef5ec]">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d9c39d]">
            The Story of Simplicity
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-6xl md:text-7xl">
            About SAADGI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-light italic leading-relaxed text-[#d9c39d] sm:text-xl">
            "Where Simplicity Meets Elegance"
          </p>
        </div>
      </section>

      {/* Main Story & Physical Store Signage */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Neon Signage Showcase with Luxury Border Frame */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-[32px] border-2 border-[#dccab5] bg-gradient-to-b from-[#fef5ec] to-[#eaddcb] p-3 shadow-[0_25px_60px_rgba(56,37,20,0.12)]">
              <div className="overflow-hidden rounded-[24px] bg-[#1e1511]">
                <img
                  src={storeSignage}
                  alt="SAADGI Official Store Signage Since 2026"
                  className="h-[440px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-[#c9a97f] bg-[#fef5ec] px-5 py-3 shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7b5339]">Official Brand Studio</p>
                <p className="font-display text-base text-[#382514]">Since 2026</p>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-6 text-[#5b3a26]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dccab5] bg-[#fef5ec] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7b5339]">
              <Sparkles size={14} /> Our Essence
            </div>

            <h2 className="font-display text-3xl leading-snug text-[#382514] sm:text-4xl">
              Thoughtfully curated ethnic wear designed for everyday grace.
            </h2>

            <p className="text-base leading-relaxed text-[#5b3a26] sm:text-lg">
              <strong>Saadgi</strong> is an online ethnic wear clothing brand bringing you a beautiful collection of elegant, comfortable and trendy outfits.
            </p>

            <p className="text-base leading-relaxed text-[#5b3a26]">
              Rooted in the philosophy of effortless charm, we celebrate subtle craft, breathable fabrics, and enduring silhouettes. From festive ensembles made to turn heads gracefully, to everyday cotton suits tailored for contemporary comfort, every piece is designed with pure intentionality.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-b border-[#ebdcc8] py-6 my-6">
              <div className="space-y-1">
                <p className="font-display text-3xl font-semibold text-[#382514]">100%</p>
                <p className="text-xs uppercase tracking-wider text-[#7b5339]">Handcrafted Finesse</p>
              </div>
              <div className="space-y-1">
                <p className="font-display text-3xl font-semibold text-[#382514]">2026</p>
                <p className="text-xs uppercase tracking-wider text-[#7b5339]">Founded with Passion</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 rounded-full bg-[#382514] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#fef5ec] shadow-md transition hover:bg-[#7b5339]"
              >
                Explore Collections
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#b69573] bg-[#fef5ec] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#382514] transition hover:bg-white"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="border-t border-[#ebdcc8] bg-[#fef5ec] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7b5339]">Our Promise</p>
            <h3 className="mt-2 font-display text-3xl text-[#382514] sm:text-4xl">Why Wear SAADGI</h3>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#ebdcc8] bg-[#faf5ed] p-8 text-center transition hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fef5ec] text-[#7b5339] shadow-sm">
                <Heart size={24} />
              </div>
              <h4 className="mt-6 font-display text-xl text-[#382514]">Breathable Comfort</h4>
              <p className="mt-3 text-sm leading-relaxed text-[#6d4f3b]">
                Soft mulmuls, premium cottons, and breathable silks tailored for day-long ease in every climate.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ebdcc8] bg-[#faf5ed] p-8 text-center transition hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fef5ec] text-[#7b5339] shadow-sm">
                <Sparkles size={24} />
              </div>
              <h4 className="mt-6 font-display text-xl text-[#382514]">Timeless Grace</h4>
              <p className="mt-3 text-sm leading-relaxed text-[#6d4f3b]">
                Clean lines, subtle embellishments, and classic silhouettes that outlive fleeting seasonal trends.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ebdcc8] bg-[#faf5ed] p-8 text-center transition hover:shadow-md">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fef5ec] text-[#7b5339] shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <h4 className="mt-6 font-display text-xl text-[#382514]">Transparent Quality</h4>
              <p className="mt-3 text-sm leading-relaxed text-[#6d4f3b]">
                Strict quality inspections, exact size measurements, and transparent policies you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Signoff Banner */}
      <section className="border-t border-[#ebdcc8] bg-[#faf5ed] py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#7b5339]">With love</p>
          <h4 className="mt-2 font-display text-3xl text-[#382514]">Team Saadgi</h4>
          <p className="mt-3 text-sm text-[#7b5339]">Where Simplicity Meets Elegance</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-[#5b3a26]">
            <span className="flex items-center gap-1.5"><Mail size={14} className="text-[#7b5339]" /> hello@saadgi.in</span>
            <span className="flex items-center gap-1.5"><Phone size={14} className="text-[#7b5339]" /> +91 98765 43210</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#7b5339]" /> India</span>
          </div>
        </div>
      </section>
    </div>
  )
}
