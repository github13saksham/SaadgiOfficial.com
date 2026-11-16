import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, FileText, Truck, RefreshCw, XCircle, CreditCard, HelpCircle } from 'lucide-react'

export type PolicyTab = 'privacy' | 'terms' | 'shipping' | 'returns' | 'cancellation' | 'refund'

interface PolicyPageProps {
  initialTab?: PolicyTab
}

export default function PolicyPage({ initialTab = 'privacy' }: PolicyPageProps) {
  const [activeTab, setActiveTab] = React.useState<PolicyTab>(initialTab)

  // Update tab if initialTab changes
  React.useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  return (
    <div className="bg-[#faf5ed] text-[#382514]">
      {/* Header */}
      <section className="border-b border-[#382514]/30 bg-[#2d1e15] py-14 sm:py-20 text-center text-[#fef5ec]">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9c39d]">
            Legal & Customer Guidelines
          </p>
          <h1 className="mt-3 font-display text-4xl text-white sm:text-6xl">
            Policies & Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#dccbb8] sm:text-base">
            Transparent and trustworthy commitments for your peace of mind while shopping with SAADGI.
          </p>

          {/* Navigation Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'privacy' as PolicyTab, label: '1. Privacy Policy', icon: ShieldCheck },
              { id: 'terms' as PolicyTab, label: '2. Terms & Conditions', icon: FileText },
              { id: 'shipping' as PolicyTab, label: '3. Shipping & Delivery', icon: Truck },
              { id: 'returns' as PolicyTab, label: '4. Return & Exchange', icon: RefreshCw },
              { id: 'cancellation' as PolicyTab, label: '5. Cancellation', icon: XCircle },
              { id: 'refund' as PolicyTab, label: '6. Refund Policy', icon: CreditCard },
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    isActive
                      ? 'bg-[#c9a97f] text-[#2d1e15] font-bold shadow-md'
                      : 'border border-[#ebdcc8]/30 bg-[#382514] text-[#d9c39d] hover:bg-[#442c19] hover:text-white'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="rounded-[28px] border border-[#ebdcc8] bg-white p-6 shadow-[0_12px_45px_rgba(56,37,20,0.04)] sm:p-10 md:p-14">
          
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <article className="space-y-6">
              <div className="border-b border-[#ebdcc8] pb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b5339]">Section 1</span>
                <h2 className="mt-1 font-display text-3xl text-[#382514] sm:text-4xl">Privacy Policy</h2>
                <p className="mt-2 text-xs text-[#8a725f]">Last Updated: 31 October 2026</p>
              </div>

              <p className="text-base leading-relaxed text-[#5b3a26]">
                At <strong>Saadgi</strong>, we respect your privacy and are committed to protecting your personal information.
              </p>

              <div>
                <h3 className="font-display text-xl text-[#382514]">Information We Collect</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  When you visit our website or place an order, we may collect the following information:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#5b3a26]">
                  <li>Full name</li>
                  <li>Contact number</li>
                  <li>Email address</li>
                  <li>Shipping and billing address</li>
                  <li>Order and payment-related information</li>
                </ul>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">How We Use Your Information</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  We use your information to:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#5b3a26]">
                  <li>Process and deliver your orders.</li>
                  <li>Share order confirmations and delivery updates.</li>
                  <li>Respond to customer queries.</li>
                  <li>Improve our website and shopping experience.</li>
                  <li>Send promotional updates, where you have agreed to receive them.</li>
                </ul>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Payment Security</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Payments are processed through secure payment service providers. Saadgi does not intend to store your complete card details, UPI PIN or banking passwords.
                </p>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Sharing of Information</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Your information may be shared with trusted delivery partners, payment providers and necessary service providers only for fulfilling business and legal requirements.
                </p>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Your Privacy Rights</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  You may contact us to request access to, correction of or deletion of your personal information, subject to applicable legal and record-retention requirements.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#5b3a26]">
                  For privacy-related queries, contact us at <a href="mailto:hello@saadgi.in" className="font-medium text-[#7b5339] hover:underline">hello@saadgi.in</a>.
                </p>
              </div>
            </article>
          )}

          {/* TAB 2: TERMS & CONDITIONS */}
          {activeTab === 'terms' && (
            <article className="space-y-6">
              <div className="border-b border-[#ebdcc8] pb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b5339]">Section 2</span>
                <h2 className="mt-1 font-display text-3xl text-[#382514] sm:text-4xl">Terms & Conditions</h2>
              </div>

              <p className="text-base leading-relaxed text-[#5b3a26]">
                Welcome to <strong>Saadgi</strong>. By accessing our website and placing an order, you agree to the following terms and conditions.
              </p>

              <div>
                <h3 className="font-display text-xl text-[#382514]">Website Usage</h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#5b3a26]">
                  <li>Customers must provide accurate information while placing an order.</li>
                  <li>Any misuse of the website or fraudulent activity is prohibited.</li>
                  <li>Saadgi reserves the right to correct website errors and update product information.</li>
                </ul>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Product Information</h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#5b3a26]">
                  <li>We make every effort to display accurate product images, colours and descriptions.</li>
                  <li>Actual colours may vary slightly due to lighting, photography and screen settings.</li>
                  <li>Product availability is subject to stock.</li>
                </ul>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Pricing & Payments</h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#5b3a26]">
                  <li>All prices will be displayed in Indian Rupees (INR).</li>
                  <li>Applicable taxes and delivery charges will be communicated during checkout.</li>
                  <li>Orders are confirmed only after successful payment or confirmation of an accepted payment method.</li>
                </ul>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Intellectual Property</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  All Saadgi logos, branding, photographs, designs and website content belong to Saadgi or their respective owners. They cannot be copied or used without permission.
                </p>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Policy Updates</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Saadgi reserves the right to update these terms whenever necessary. Updated terms will be published on our website.
                </p>
              </div>
            </article>
          )}

          {/* TAB 3: SHIPPING & DELIVERY */}
          {activeTab === 'shipping' && (
            <article className="space-y-6">
              <div className="border-b border-[#ebdcc8] pb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b5339]">Section 3</span>
                <h2 className="mt-1 font-display text-3xl text-[#382514] sm:text-4xl">Shipping & Delivery Policy</h2>
              </div>

              <p className="text-base leading-relaxed text-[#5b3a26]">
                At <strong>Saadgi</strong>, we aim to deliver your favourite pieces safely and on time.
              </p>

              <div>
                <h3 className="font-display text-xl text-[#382514]">Order Processing</h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#5b3a26]">
                  <li>Orders are generally processed within <strong>2–4 business days</strong> after confirmation.</li>
                  <li>Orders are not processed on Sundays or public holidays.</li>
                  <li>During sales, festive seasons or high-demand periods, processing may take longer.</li>
                </ul>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Delivery Timeline</h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#5b3a26]">
                  <li>Estimated delivery time is <strong>5–10 business days</strong> after dispatch, depending on the delivery location.</li>
                  <li>Remote locations may require additional delivery time.</li>
                </ul>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Shipping Charges</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Applicable shipping charges, if any, will be displayed at checkout before payment.
                </p>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Order Tracking</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Once your order is dispatched, tracking details will be shared through your registered contact number or email, where available.
                </p>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Delivery Delays</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Saadgi is not responsible for delays caused by courier partners, weather conditions, public holidays or circumstances beyond our reasonable control. We will assist customers in following up on delayed shipments.
                </p>
                <div className="mt-4 rounded-xl border border-[#ebdcc8] bg-[#fef5ec] p-4 text-xs font-medium text-[#7b5339]">
                  Please ensure that your shipping address and contact details are correct before placing an order.
                </div>
              </div>
            </article>
          )}

          {/* TAB 4: RETURN & EXCHANGE */}
          {activeTab === 'returns' && (
            <article className="space-y-6">
              <div className="border-b border-[#ebdcc8] pb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b5339]">Section 4</span>
                <h2 className="mt-1 font-display text-3xl text-[#382514] sm:text-4xl">Return & Exchange Policy</h2>
              </div>

              <p className="text-base leading-relaxed text-[#5b3a26]">
                We request customers to review product descriptions, size details and photographs carefully before placing an order.
              </p>

              <div className="rounded-2xl border border-[#c9a97f] bg-[#fef5ec] p-5 sm:p-6">
                <h3 className="font-display text-lg text-[#382514]">Important Notice on Returns</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  At <strong>Saadgi</strong>, we follow a strict no-return and no-exchange policy for reasons including:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[#5b3a26]">
                  <li>Change of mind after placing an order.</li>
                  <li>Incorrect size selection by the customer.</li>
                  <li>Colour preference or personal styling preferences.</li>
                  <li>Products ordered by mistake.</li>
                </ul>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Damaged, Defective or Incorrect Products</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Customer satisfaction matters to us. If you receive a damaged, defective or incorrect product, please contact us within <strong>48 hours of delivery</strong>.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#5b3a26]">
                  To help us resolve the issue, please provide:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[#5b3a26]">
                  <li>Your order number.</li>
                  <li>Clear photographs or an unboxing video, if available.</li>
                  <li>A brief description of the issue.</li>
                </ul>
                <p className="mt-3 text-sm leading-relaxed text-[#5b3a26]">
                  Our team will review your complaint and arrange an appropriate resolution, such as replacement, exchange or refund, wherever applicable under law.
                </p>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Important Conditions</h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#5b3a26]">
                  <li>Products must not be worn, washed or altered before reporting an issue.</li>
                  <li>Original tags and packaging should be retained wherever possible.</li>
                  <li>Claims will be reviewed individually.</li>
                </ul>
                <p className="mt-4 text-xs italic text-[#8a725f]">
                  Please Note: This policy does not limit any consumer rights or remedies available under applicable Indian law.
                </p>
              </div>
            </article>
          )}

          {/* TAB 5: CANCELLATION */}
          {activeTab === 'cancellation' && (
            <article className="space-y-6">
              <div className="border-b border-[#ebdcc8] pb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b5339]">Section 5</span>
                <h2 className="mt-1 font-display text-3xl text-[#382514] sm:text-4xl">Cancellation Policy</h2>
              </div>

              <p className="text-base leading-relaxed text-[#5b3a26]">
                We understand that plans can change.
              </p>

              <div>
                <h3 className="font-display text-xl text-[#382514]">Before Dispatch</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Customers may request cancellation before their order has been dispatched by contacting our support team.
                </p>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">After Dispatch</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Once an order has been dispatched, cancellation requests may not be accepted through our standard cancellation process.
                </p>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Cancellation by Saadgi</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Saadgi reserves the right to cancel an order due to stock unavailability, payment issues, incorrect pricing or other genuine operational reasons.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  In case of cancellation by Saadgi after payment has been received, the eligible amount will be refunded to the original payment method.
                </p>
              </div>
            </article>
          )}

          {/* TAB 6: REFUND */}
          {activeTab === 'refund' && (
            <article className="space-y-6">
              <div className="border-b border-[#ebdcc8] pb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b5339]">Section 6</span>
                <h2 className="mt-1 font-display text-3xl text-[#382514] sm:text-4xl">Refund Policy</h2>
              </div>

              <p className="text-base leading-relaxed text-[#5b3a26]">
                At <strong>Saadgi</strong>, we aim to ensure a smooth and transparent refund process.
              </p>

              <div>
                <h3 className="font-display text-xl text-[#382514]">When Is a Refund Applicable?</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  Refunds may be considered in the following situations:
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#5b3a26]">
                  <li>An order is cancelled by Saadgi after payment.</li>
                  <li>A product is confirmed to be defective, damaged or incorrect and a refund is the appropriate resolution.</li>
                  <li>A refund is otherwise required under applicable law.</li>
                </ul>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Refund Processing</h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#5b3a26]">
                  <li>Approved refunds will generally be initiated within <strong>5–7 business days</strong>.</li>
                  <li>The amount will be returned through the original payment method wherever possible.</li>
                  <li>The time taken for the amount to reflect in your account may depend on your bank or payment provider.</li>
                </ul>
              </div>

              <div className="border-t border-[#ebdcc8] pt-6">
                <h3 className="font-display text-xl text-[#382514]">Non-Refundable Situations</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b3a26]">
                  We do not offer refunds for change of mind, incorrect size selection or personal preferences, except where a refund is required under applicable law.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#5b3a26]">
                  For refund-related assistance, please contact our customer support team.
                </p>
              </div>
            </article>
          )}

        </div>

        {/* Quick Cross-Links */}
        <div className="mt-10 flex flex-wrap justify-between items-center gap-4 rounded-2xl border border-[#ebdcc8] bg-[#fef5ec] p-6 text-sm text-[#5b3a26]">
          <div className="flex items-center gap-2">
            <HelpCircle size={18} className="text-[#7b5339]" />
            <span>Have questions regarding these policies?</span>
          </div>
          <div className="flex gap-4">
            <Link to="/faqs" className="font-semibold text-[#7b5339] hover:underline">
              Read FAQs →
            </Link>
            <Link to="/contact" className="font-semibold text-[#382514] hover:underline">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
