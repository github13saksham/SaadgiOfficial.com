import { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProductCard } from './components/ProductCard'
import { categories, collections, products } from './data/mockData'
import HomePage from './pages/HomePage'

const LoginPage = lazy(() => import('./pages/LoginPage'))

function ContactPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-16 md:px-8 lg:py-20">
      <div className="rounded-[30px] border border-[#ebdcc8] bg-[#fffdfb] p-8 shadow-[0_18px_60px_rgba(52,36,28,0.04)] md:p-14">
        <p className="eyebrow">Customer Care & Support</p>
        <h1 className="mt-3 font-display text-5xl text-[#2b1c15] md:text-6xl">We’re Here for You</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#5b4337]">
          Have questions about your order, custom sizing, fabric details, or styling? Reach out to our dedicated concierge.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#ebdcc8] bg-[#fbf7f2] p-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#926d4a]">Call Helpline</span>
            <h3 className="mt-2 text-xl font-bold text-[#2b1c15]">+91 98765 43210</h3>
            <p className="mt-2 text-xs leading-5 text-[#6c5446]">Monday to Saturday<br />10:00 AM - 7:00 PM IST</p>
            <a href="tel:+919876543210" className="mt-4 inline-block rounded-full bg-[#2b1c15] px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-white hover:bg-[#8b5a38]">
              Call Now
            </a>
          </div>

          <div className="rounded-2xl border border-[#ebdcc8] bg-[#fbf7f2] p-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2f7d4b]">WhatsApp Chat</span>
            <h3 className="mt-2 text-xl font-bold text-[#2b1c15]">+91 98765 43210</h3>
            <p className="mt-2 text-xs leading-5 text-[#6c5446]">Instant styling advice & quick tracking queries</p>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-full bg-[#2f7d4b] px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-white hover:bg-[#25683d]">
              Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-[#ebdcc8] bg-[#fbf7f2] p-6 sm:col-span-2 lg:col-span-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#926d4a]">Email Inquiries</span>
            <h3 className="mt-2 text-xl font-bold text-[#2b1c15]">hello@saadgi.in</h3>
            <p className="mt-2 text-xs leading-5 text-[#6c5446]">We usually respond within 24 business hours</p>
            <a href="mailto:hello@saadgi.in" className="mt-4 inline-block rounded-full border border-[#2b1c15] px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#2b1c15] hover:bg-[#2b1c15] hover:text-white">
              Send Email
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[#ebdcc8] pt-8">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-[#2b1c15] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-[#72523e]">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

function InfoPage({ title, description, eyebrow }: { title: string; description: string; eyebrow: string }) {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-20 md:px-8">
      <div className="rounded-[30px] border border-[#ebdcc8] bg-[#fffdfb] p-8 shadow-[0_18px_60px_rgba(52,36,28,0.03)] md:p-12">
        <p className="text-[12px] uppercase tracking-[0.28em] text-[#72523e]">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl text-[#34241c] md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b4337]">{description}</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#34241c] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-[#72523e]">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

function CatalogPage({ title, items, eyebrow }: { title: string; items: typeof products; eyebrow: string }) {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-20 md:px-8">
      <div className="mb-10">
        <p className="text-[12px] uppercase tracking-[0.25em] text-[#72523e]">{eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl text-[#34241c] md:text-6xl">{title}</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) ?? products[0]

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-[28px] border border-[#ebdcc8] bg-white p-4 shadow-[0_20px_60px_rgba(52,36,28,0.04)]">
          <img src={product.image} alt={product.name} className="h-[680px] w-full rounded-[20px] object-cover" />
        </div>
        <div className="space-y-6">
          <p className="text-[12px] uppercase tracking-[0.25em] text-[#72523e]">{product.category}</p>
          <h1 className="font-display text-5xl leading-none text-[#34241c]">{product.name}</h1>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-semibold text-[#34241c]">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-lg text-[#8b7a6d] line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
            <span className="text-xs uppercase tracking-[0.16em] text-[#b69a69]">{Math.round(((product.mrp - product.price) / product.mrp) * 100)}% Off</span>
          </div>
          <p className="text-base leading-8 text-[#5b4337]">{product.description}</p>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <span key={color} className="rounded-full border border-[#dccab5] bg-[#f7f3ee] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#34241c]">{color}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <span key={size} className="rounded-full border border-[#dbc9b8] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#34241c]">{size}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-[#34241c] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white hover:bg-[#72523e]">Add to Cart</button>
            <button className="rounded-full border border-[#d9c7ad] bg-[#f9f4ee] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#34241c]">Buy Now</button>
          </div>
          <div className="rounded-[20px] border border-[#ebdcc8] bg-[#f7f2eb] p-5 text-sm leading-7 text-[#4d3b32]">
            <p><strong>Fabric:</strong> {product.fabric}</p>
            <p><strong>Care:</strong> {product.care}</p>
            <p><strong>Availability:</strong> {product.stock > 0 ? 'In stock' : 'Sold out'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CollectionsPage() {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-20 md:px-8">
      <div className="mb-10 text-center">
        <p className="text-[12px] uppercase tracking-[0.25em] text-[#72523e]">Collections</p>
        <h1 className="mt-3 font-display text-5xl text-[#34241c] md:text-6xl">Curated stories</h1>
      </div>
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <div key={category.id} className="rounded-full border border-[#e7d9c8] bg-[#fffdfb] px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#34241c]">
            {category.name}
          </div>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {collections.map((collection) => (
          <div key={collection.id} className="group relative overflow-hidden rounded-[28px] border border-[#ebdcc8] bg-white">
            <img src={collection.image} alt={collection.name} className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1511]/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <h2 className="font-display text-4xl leading-none">{collection.name}</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#f0dfd1]">{collection.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-[40vh]" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<InfoPage title="About SAADGI" eyebrow="Our Story" description="SAADGI celebrates the beauty of simple elegance through thoughtfully designed ethnicwear, premium fabrics, and everyday luxury rooted in timeless Indian aesthetics." />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:slug" element={<CollectionsPage />} />
            <Route path="/best-sellers" element={<CatalogPage title="Best Sellers" eyebrow="The Most Loved" items={products.filter((item) => item.bestseller)} />} />
            <Route path="/all-products" element={<CatalogPage title="All Products" eyebrow="Shop Today" items={products} />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/wishlist" element={<InfoPage title="Wishlist" eyebrow="Saved Favourites" description="Keep your preferred looks close at hand and revisit them whenever you are ready to shop." />} />
            <Route path="/cart" element={<InfoPage title="Shopping Cart" eyebrow="Bag" description="Review your chosen styles, apply offers, and continue to a secure checkout experience." />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<InfoPage title="Register" eyebrow="Create Account" description="Set up your SAADGI profile to save favourites and track your purchases in one place." />} />
            <Route path="/account" element={<InfoPage title="My Account" eyebrow="Your Profile" description="View your details, update profile information, and manage your saved addresses and order history." />} />
            <Route path="/orders" element={<InfoPage title="My Orders" eyebrow="Order History" description="Track your purchases and review order progress with a secure, clean account experience." />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<InfoPage title="FAQs" eyebrow="Helpful Answers" description="Explore thoughtful guidance on ordering, sizing, shipping, returns, and care instructions." />} />
            <Route path="/shipping-policy" element={<InfoPage title="Shipping Policy" eyebrow="Delivery" description="Learn more about shipping timelines, courier coverage, and order dispatch updates." />} />
            <Route path="/refund-policy" element={<InfoPage title="Return and Refund Policy" eyebrow="Customer Care" description="Read our return and refund process for eligible purchases and exchange requests." />} />
            <Route path="/privacy-policy" element={<InfoPage title="Privacy Policy" eyebrow="Security" description="Understand how your personal information is handled and protected when you shop with SAADGI." />} />
            <Route path="/terms" element={<InfoPage title="Terms and Conditions" eyebrow="Policies" description="Review the terms that govern purchases, membership, and the SAADGI shopping experience." />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
