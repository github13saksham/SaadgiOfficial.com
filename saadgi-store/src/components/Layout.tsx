import { memo, useMemo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Heart, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import logo from '../assets/logo.jpeg'
import footerLogo from '../assets/logo-closeup.jpeg'
import { announcementMessages, products } from '../data/mockData'

const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT US', to: '/about' },
  { label: 'COLLECTIONS', to: '/collections', hasDropdown: true },
  { label: 'BEST SELLER', to: '/best-sellers' },
  { label: 'CONTACT', to: '/contact' },
]

export const Layout = memo(function Layout({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return products.slice(0, 3)
    return products
      .filter((product) =>
        `${product.name} ${product.category} ${product.collection}`
          .toLowerCase()
          .includes(query),
      )
      .slice(0, 5)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-[#faf7f1] text-[#34241c]">
      <div className="bg-[#241711] px-4 py-2.5 text-center text-[11px] font-medium tracking-[0.16em] text-[#f5efe6]">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-x-6 gap-y-1.5 sm:justify-between">
          <span className="font-normal uppercase tracking-[0.2em] text-[#e3d3c4] text-[10px] sm:text-[11px]">
            ✨ {announcementMessages[0]}
          </span>
          <div className="flex items-center gap-4 text-[11px] text-[#decab5]">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-white"
            >
              <span className="text-[10px] uppercase tracking-wider text-[#bba084]">Helpline:</span>
              <span className="font-bold tracking-wider text-white">+91 98765 43210</span>
            </a>
            <span className="hidden text-white/30 sm:inline">|</span>
            <span className="hidden text-[#c5ad96] sm:inline">Mon - Sat (10 AM - 7 PM IST)</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#e7dacb] bg-[#fef5ec]">
        <div className="relative mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-4 sm:h-[88px] lg:px-8">
          <div className="flex w-8 items-center lg:w-[220px]">
            <button
              className="icon-button mobile-menu-button lg:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Link to="/" className="flex items-center justify-center">
              <img
                src={logo}
                alt="SAADGI logo"
                className="h-14 w-14 object-contain sm:h-[72px] sm:w-[72px]"
              />
            </Link>
          </div>

          <div className="flex w-[140px] items-center justify-end gap-1 max-[360px]:w-28 max-[360px]:gap-0 lg:w-[220px] lg:gap-5">
            <button
              aria-label="Search products"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(true)}
              className="icon-button"
            >
              <Search size={18} />
            </button>
            <Link to="/login" aria-label="Customer account login" className="icon-button">
              <UserRound size={18} />
            </Link>
            <Link to="/wishlist" aria-label="Wishlist" className="icon-button relative">
              <Heart size={18} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#b69a69] text-[9px] text-white">2</span>
            </Link>
            <Link to="/cart" aria-label="Shopping bag" className="icon-button relative">
              <ShoppingBag size={18} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#34241c] text-[9px] text-white">3</span>
            </Link>
          </div>
        </div>

        <nav className="hidden border-t border-[#e7dacb] bg-[#fef5ec] lg:block">
          <div className="mx-auto flex max-w-[1500px] items-center justify-center gap-8 px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#34241c]">
            {navItems.map((item) => (
              <div key={item.label} className="group relative flex items-center">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition-colors duration-200 ${isActive ? 'text-[#72523e]' : 'hover:text-[#72523e]'}`
                  }
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} />}
                </NavLink>
                {item.hasDropdown && (
                  <div className="invisible absolute left-1/2 top-full z-20 mt-3 w-52 -translate-x-1/2 rounded-sm border border-[#e8e0d7] bg-white p-3 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <Link to="/collections/festive" className="block border-b border-[#f0eae2] py-2 text-[10px] uppercase tracking-[0.2em] text-[#34241c] hover:text-[#72523e]">Festive Wear</Link>
                    <Link to="/collections/everyday" className="block border-b border-[#f0eae2] py-2 text-[10px] uppercase tracking-[0.2em] text-[#34241c] hover:text-[#72523e]">Everyday Wear</Link>
                    <Link to="/collections/premium" className="block py-2 text-[10px] uppercase tracking-[0.2em] text-[#34241c] hover:text-[#72523e]">Premium Collection</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
        {mobileMenuOpen && (
          <nav className="border-t border-[#e7dacb] bg-[#fef5ec] px-5 py-3 lg:hidden">
            <div className="mx-auto flex max-w-[1500px] flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-[#e7dacb] py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#34241c] last:border-0"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center bg-[#211711]/45 px-4 pt-[12vh] backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSearchOpen(false)
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            className="w-full max-w-2xl rounded-[24px] border border-[#e7dacb] bg-[#fbf8f3] p-5 shadow-[0_30px_90px_rgba(27,18,12,0.25)] sm:p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="eyebrow">Find your next favourite</p>
                <h2 id="search-title" className="font-display text-3xl text-[#34241c]">
                  Search SAADGI
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="icon-button"
              >
                <X size={19} />
              </button>
            </div>
            <div className="flex items-center gap-3 border-b border-[#d9c8b4] pb-3">
              <Search size={18} className="shrink-0 text-[#72523e]" />
              <input
                type="search"
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setSearchOpen(false)
                }}
                placeholder="Search by style or category"
                aria-label="Search by product or category"
                className="w-full bg-transparent text-sm text-[#34241c] outline-none placeholder:text-[#907e70]"
              />
            </div>
            <div className="mt-5">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8a725f]">
                {searchQuery.trim() ? 'Search results' : 'Popular right now'}
              </p>
              {searchResults.length ? (
                <div className="space-y-2">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-4 rounded-xl p-2 transition hover:bg-[#f1e8dc]"
                    >
                      <img
                        src={product.image}
                        alt=""
                        className="h-16 w-14 rounded-lg object-cover"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-2xl leading-tight text-[#34241c]">
                          {product.name}
                        </span>
                        <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-[#8a725f]">
                          {product.category}
                        </span>
                      </span>
                      <span className="text-sm font-medium text-[#34241c]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="rounded-xl bg-white px-4 py-5 text-sm text-[#725b4d]">
                  No styles matched that search. Try another name or category.
                </p>
              )}
            </div>
          </section>
        </div>
      )}

      <footer className="border-t border-[#e7dacb] bg-[#fef5ec]">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <img
              src={footerLogo}
              alt="SAADGI emblem"
              className="mb-4 h-[112px] w-[136px] object-contain sm:h-[132px] sm:w-[160px]"
            />
            <p className="max-w-xs text-sm leading-7 text-[#5d4538]">
              Thoughtfully crafted ethnic wear for women who value softness, elegance, and timeless style.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#72523e]">Elegance in Every Thread.</p>
          </div>

          <div>
            <h3 className="mb-5 font-display text-2xl text-[#34241c]">Quick Links</h3>
            <ul className="space-y-3 text-sm text-[#5d4538]">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Collections', '/collections'],
                ['Best Seller', '/best-sellers'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={label}><Link className="hover:text-[#72523e]" to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-2xl text-[#34241c]">Customer Support</h3>
            <ul className="space-y-3 text-sm text-[#5d4538]">
              {[
                ['Contact Us', '/contact'],
                ['FAQs', '/faqs'],
                ['Shipping Policy', '/shipping-policy'],
                ['Return and Refund Policy', '/refund-policy'],
                ['Privacy Policy', '/privacy-policy'],
                ['Terms and Conditions', '/terms'],
              ].map(([label, to]) => (
                <li key={label}><Link className="hover:text-[#72523e]" to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-2xl text-[#34241c]">Follow Us</h3>
            <div className="flex gap-3">
              {[
                ['Instagram', 'https://www.instagram.com/saadgi/'],
                ['Facebook', 'https://www.facebook.com/'],
                ['Pinterest', 'https://www.pinterest.com/'],
              ].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5c7b7] bg-white text-[#34241c] transition hover:border-[#b69a69]">{label.slice(0, 1)}</a>
              ))}
            </div>
            <div className="mt-8 space-y-2.5 rounded-xl border border-[#e2d7cb] bg-[#fbf7f2] p-4 text-xs text-[#5d4538]">
              <div className="flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider text-[#241711]">Phone:</span>
                <a href="tel:+919876543210" className="font-semibold text-[#8b5a38] hover:underline">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider text-[#241711]">WhatsApp:</span>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="font-medium text-[#2f7d4b] hover:underline">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider text-[#241711]">Email:</span>
                <a href="mailto:hello@saadgi.in" className="hover:text-[#8b5a38]">hello@saadgi.in</a>
              </div>
              <p className="border-t border-[#ebdccb] pt-2 text-[11px] text-[#8a725f]">
                Mon - Sat: 10:00 AM - 7:00 PM IST
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5d8c9] py-4 text-center text-xs uppercase tracking-[0.22em] text-[#6a5243]">
          © 2026 SAADGI. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
})
