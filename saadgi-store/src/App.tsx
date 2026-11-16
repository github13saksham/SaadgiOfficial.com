import { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProductCard } from './components/ProductCard'
import { categories, collections, products } from './data/mockData'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import PolicyPage, { type PolicyTab } from './pages/PolicyPage'
import ProductDetailPage from './pages/ProductDetailPage'

const LoginPage = lazy(() => import('./pages/LoginPage'))

function InfoPage({ title, description, eyebrow }: { title: string; description: string; eyebrow: string }) {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-20 md:px-8">
      <div className="rounded-[30px] border border-[#382514]/20 bg-[#2d1e15] p-8 shadow-[0_18px_60px_rgba(52,36,28,0.12)] md:p-12 text-[#fef5ec]">
        <p className="text-[12px] uppercase tracking-[0.28em] text-[#d9c39d]">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl text-white md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#dccbb8]">{description}</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c9a97f] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2d1e15] hover:bg-[#e4cfb2] transition-colors">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

function CatalogPage({ title, items, eyebrow }: { title: string; items: typeof products; eyebrow: string }) {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-16 md:px-8">
      <div className="mb-10 rounded-[28px] border border-[#382514]/30 bg-[#2d1e15] p-8 md:p-12 text-center text-[#fef5ec]">
        <p className="text-[12px] uppercase tracking-[0.25em] text-[#d9c39d]">{eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl text-white md:text-6xl">{title}</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

function CollectionsPage() {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-16 md:px-8">
      <div className="mb-10 rounded-[28px] border border-[#382514]/30 bg-[#2d1e15] p-8 md:p-12 text-center text-[#fef5ec]">
        <p className="text-[12px] uppercase tracking-[0.25em] text-[#d9c39d]">Collections</p>
        <h1 className="mt-3 font-display text-5xl text-white md:text-6xl">Curated stories</h1>
      </div>
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <div key={category.id} className="rounded-full border border-[#ebdcc8] bg-[#fffdfb] px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#382514]">
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

function PolicyRouteWrapper({ tab }: { tab: PolicyTab }) {
  return <PolicyPage initialTab={tab} />
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-[40vh]" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:slug" element={<CollectionsPage />} />
            <Route path="/best-sellers" element={<CatalogPage title="Best Sellers" eyebrow="The Most Loved" items={products.filter((item) => item.bestseller)} />} />
            <Route path="/all-products" element={<CatalogPage title="All Products" eyebrow="Shop Today" items={products} />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/wishlist" element={<InfoPage title="Wishlist" eyebrow="Saved Favourites" description="Keep your preferred looks close at hand and revisit them whenever you are ready to shop." />} />
            <Route path="/cart" element={<InfoPage title="Shopping Cart" eyebrow="Bag" description="Review your chosen styles, apply offers, and continue to a secure checkout experience." />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<LoginPage />} />
            <Route path="/account" element={<InfoPage title="My Account" eyebrow="Your Profile" description="View your details, update profile information, and manage your saved addresses and order history." />} />
            <Route path="/orders" element={<InfoPage title="My Orders" eyebrow="Order History" description="Track your purchases and review order progress with a secure, clean account experience." />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/privacy-policy" element={<PolicyRouteWrapper tab="privacy" />} />
            <Route path="/terms" element={<PolicyRouteWrapper tab="terms" />} />
            <Route path="/shipping-policy" element={<PolicyRouteWrapper tab="shipping" />} />
            <Route path="/returns-policy" element={<PolicyRouteWrapper tab="returns" />} />
            <Route path="/cancellation-policy" element={<PolicyRouteWrapper tab="cancellation" />} />
            <Route path="/refund-policy" element={<PolicyRouteWrapper tab="refund" />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
