import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
  category: 'ordering' | 'shipping' | 'policies' | 'products'
}

const faqs: FAQItem[] = [
  {
    q: '1. How can I place an order?',
    a: 'Browse our collection, select your favourite product, choose the available size and add it to your cart. Proceed to checkout to complete your order.',
    category: 'ordering'
  },
  {
    q: '2. Do I need an account to place an order?',
    a: 'No, you can shop with Saadgi using the checkout options available on our website.',
    category: 'ordering'
  },
  {
    q: '3. What payment methods do you accept?',
    a: 'We accept the payment methods displayed at checkout, which may include UPI, debit cards, credit cards and other available payment options.',
    category: 'ordering'
  },
  {
    q: '4. How long does delivery take?',
    a: 'Orders are generally processed within 2–4 business days and delivered within approximately 5–10 business days after dispatch. Delivery times may vary depending on your location.',
    category: 'shipping'
  },
  {
    q: '5. Will I receive an order confirmation?',
    a: 'Yes, once your order is successfully placed, you will receive an order confirmation through your registered contact details.',
    category: 'ordering'
  },
  {
    q: '6. How can I track my order?',
    a: 'Once your order is dispatched, tracking details will be shared through your registered contact number or email, wherever available.',
    category: 'shipping'
  },
  {
    q: '7. Can I cancel my order?',
    a: 'Cancellation requests may be accepted before dispatch. Once an order has been dispatched, cancellation may not be possible.',
    category: 'policies'
  },
  {
    q: '8. Do you accept returns or exchanges?',
    a: 'Saadgi follows a no-return and no-exchange policy for change of mind, incorrect size selection or personal preferences. However, damaged, defective or incorrect products can be reported within 48 hours of delivery for assistance.',
    category: 'policies'
  },
  {
    q: '9. What should I do if I receive a damaged, defective or incorrect product?',
    a: 'Please contact our customer support team within 48 hours of delivery with your order number, clear photographs or an unboxing video, and details of the issue.',
    category: 'policies'
  },
  {
    q: '10. How will I receive my refund if applicable?',
    a: 'If a refund is approved, it will generally be processed to your original payment method within 5–7 business days.',
    category: 'policies'
  },
  {
    q: '11. How do I choose the right size?',
    a: 'Please refer to the size guide available on our website before placing an order. If you need help finding your size, our support team will be happy to assist you.',
    category: 'products'
  },
  {
    q: '12. Are the product colours accurate?',
    a: 'We strive to display accurate colours, but slight variations may occur due to photography lighting and screen display settings.',
    category: 'products'
  },
  {
    q: '13. Can I change my shipping address after placing an order?',
    a: 'If you need to update your shipping address, please contact us immediately. We can only update address details before your order has been dispatched.',
    category: 'shipping'
  },
  {
    q: '14. What if my order is delayed?',
    a: 'While we aim to deliver orders within the estimated timeline, occasional delays may occur due to courier delays, weather or holidays. Our team will gladly help follow up on your shipment.',
    category: 'shipping'
  },
  {
    q: '15. How can I contact Saadgi support?',
    a: 'You can reach us through the contact details provided in the Contact Us section on our website.',
    category: 'ordering'
  }
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | 'ordering' | 'shipping' | 'policies' | 'products'>('all')

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'all' || faq.category === filter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="bg-[#faf5ed] text-[#382514]">
      {/* Header */}
      <section className="border-b border-[#382514]/30 bg-[#2d1e15] py-14 sm:py-20 text-center text-[#fef5ec]">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9c39d]">
            Help & Answers
          </p>
          <h1 className="mt-3 font-display text-4xl text-white sm:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#dccbb8] sm:text-base">
            Everything you need to know about placing orders, sizing, delivery timelines, and our customer policies.
          </p>

          {/* Search Box */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="relative flex items-center">
              <Search size={18} className="absolute left-4 text-[#d9c39d]" />
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-[#ebdcc8]/30 bg-[#231710] py-3 pl-11 pr-4 text-sm text-[#fef5ec] placeholder-[#a68d77] outline-none transition focus:border-[#c9a97f] focus:ring-1 focus:ring-[#c9a97f]"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              { label: 'All Questions', id: 'all' },
              { label: 'Orders & Payments', id: 'ordering' },
              { label: 'Shipping & Delivery', id: 'shipping' },
              { label: 'Returns & Refunds', id: 'policies' },
              { label: 'Products & Sizing', id: 'products' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                  filter === tab.id
                    ? 'bg-[#c9a97f] text-[#2d1e15] font-bold shadow-md'
                    : 'border border-[#ebdcc8]/30 bg-[#382514] text-[#d9c39d] hover:bg-[#442c19] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-[#7b5339] bg-[#fef5ec] shadow-[0_4px_20px_rgba(56,37,20,0.06)]'
                      : 'border-[#ebdcc8] bg-white hover:border-[#c9a97f]'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="font-display text-lg font-medium text-[#382514] sm:text-xl">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ebdcc8] bg-[#faf5ed] text-[#7b5339] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#382514] text-white' : ''
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#ebdcc8] px-5 pb-6 pt-4 text-sm leading-relaxed text-[#5b3a26] sm:px-6 sm:text-base">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })
          ) : (
            <div className="rounded-2xl border border-[#ebdcc8] bg-white p-12 text-center">
              <HelpCircle size={36} className="mx-auto text-[#7b5339]" />
              <p className="mt-4 font-display text-xl text-[#382514]">No matching questions found</p>
              <p className="mt-2 text-sm text-[#7b5339]">
                Try searching for something else or contact our customer support team directly.
              </p>
            </div>
          )}
        </div>

        {/* Still Need Help Banner */}
        <div className="mt-14 rounded-3xl border border-[#ebdcc8] bg-[#fef5ec] p-8 text-center sm:p-10">
          <MessageCircle size={32} className="mx-auto text-[#7b5339]" />
          <h3 className="mt-4 font-display text-2xl text-[#382514]">Still have questions?</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#5b3a26]">
            Can't find the answer you're looking for? Reach out to our customer support team and we will be happy to assist you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[#382514] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#fef5ec] hover:bg-[#7b5339]"
            >
              Contact Support
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#7b5339] bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#382514] hover:bg-[#faf5ed]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
