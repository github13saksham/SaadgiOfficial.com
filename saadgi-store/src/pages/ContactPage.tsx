import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-[#faf5ed] text-[#382514]">
      {/* Header */}
      <section className="border-b border-[#382514]/30 bg-[#2d1e15] py-14 sm:py-20 text-center text-[#fef5ec]">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9c39d]">
            We are always happy to assist you
          </p>
          <h1 className="mt-3 font-display text-4xl text-white sm:text-6xl">
            Contact Us & Support
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#dccbb8] sm:text-base">
            For questions about products, orders, shipping, cancellations, refunds or any other concerns, please reach out to our team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Brand Info Card */}
          <div className="rounded-[28px] border border-[#ebdcc8] bg-white p-8 shadow-[0_12px_45px_rgba(56,37,20,0.04)] sm:p-10">
            <div className="border-b border-[#ebdcc8] pb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7b5339]">Brand Headquarters</span>
              <h2 className="mt-1 font-display text-3xl text-[#382514]">SAADGI</h2>
              <p className="mt-1 text-sm font-light italic text-[#7b5339]">Where Simplicity Meets Elegance</p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fef5ec] text-[#7b5339]">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7b5339]">Email Us</h3>
                  <p className="mt-1 text-sm text-[#5b3a26]">
                    <a href="mailto:hello@saadgi.in" className="font-medium text-[#382514] hover:text-[#7b5339] hover:underline">hello@saadgi.in</a>
                  </p>
                  <p className="text-xs text-[#8a725f]">We aim to reply to all queries within 24–48 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fef5ec] text-[#7b5339]">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7b5339]">WhatsApp / Call</h3>
                  <p className="mt-1 text-sm text-[#5b3a26]">
                    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="font-medium text-[#382514] hover:text-[#7b5339] hover:underline">+91 98765 43210</a>
                  </p>
                  <p className="text-xs text-[#8a725f]">Instant WhatsApp support for orders and size assistance.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fef5ec] text-[#7b5339]">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7b5339]">Customer Support Hours</h3>
                  <p className="mt-1 text-sm font-medium text-[#382514]">Monday – Saturday: 10:00 AM – 7:00 PM IST</p>
                  <p className="text-xs text-[#8a725f]">Closed on Sundays and National Public Holidays.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fef5ec] text-[#7b5339]">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#7b5339]">Business Address</h3>
                  <p className="mt-1 text-sm text-[#5b3a26]">
                    Saadgi Official Studio & Design Centre, India
                  </p>
                </div>
              </div>
            </div>

            {/* Grievance Officer Section as mandated */}
            <div className="mt-8 rounded-2xl border border-[#ebdcc8] bg-[#fef5ec] p-6">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#7b5339]" />
                <h3 className="font-display text-lg text-[#382514]">Grievance Officer</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#5b3a26]">
                In accordance with Information Technology Act and Consumer Protection rules:
              </p>
              <div className="mt-3 space-y-1.5 text-xs text-[#5b3a26]">
                <p><strong>Designation:</strong> Grievance Officer</p>
                <p><strong>Email:</strong> <a href="mailto:grievance@saadgi.in" className="text-[#7b5339] hover:underline">grievance@saadgi.in</a></p>
                <p><strong>Address:</strong> Saadgi Studio, India</p>
              </div>
              <p className="mt-3 text-[11px] text-[#8a725f]">
                We aim to acknowledge customer complaints within 48 hours and resolve them within the applicable statutory timeline.
              </p>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="rounded-[28px] border border-[#ebdcc8] bg-white p-8 shadow-[0_12px_45px_rgba(56,37,20,0.04)] sm:p-10">
            <div className="flex items-center gap-2">
              <MessageSquare size={18} className="text-[#7b5339]" />
              <h2 className="font-display text-2xl text-[#382514]">Send Us a Message</h2>
            </div>
            <p className="mt-2 text-xs text-[#8a725f]">
              Fill in your details and our customer care team will get back to you promptly.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for reaching out to Team Saadgi! We have received your message and will respond shortly.')
              }}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7b5339]">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarohi Sharma"
                  className="mt-1.5 w-full rounded-xl border border-[#dccab5] bg-[#faf5ed] p-3 text-sm text-[#382514] placeholder-[#a68d77] outline-none transition focus:border-[#7b5339] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7b5339]">Contact Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="mt-1.5 w-full rounded-xl border border-[#dccab5] bg-[#faf5ed] p-3 text-sm text-[#382514] placeholder-[#a68d77] outline-none transition focus:border-[#7b5339] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7b5339]">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="aarohi@example.com"
                  className="mt-1.5 w-full rounded-xl border border-[#dccab5] bg-[#faf5ed] p-3 text-sm text-[#382514] placeholder-[#a68d77] outline-none transition focus:border-[#7b5339] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7b5339]">Order Number (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. SDG-2026-9812"
                  className="mt-1.5 w-full rounded-xl border border-[#dccab5] bg-[#faf5ed] p-3 text-sm text-[#382514] placeholder-[#a68d77] outline-none transition focus:border-[#7b5339] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7b5339]">Message / Concern</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we assist you today? Please share defect details or queries here."
                  className="mt-1.5 w-full rounded-xl border border-[#dccab5] bg-[#faf5ed] p-3 text-sm text-[#382514] placeholder-[#a68d77] outline-none transition focus:border-[#7b5339] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#382514] py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#fef5ec] transition hover:bg-[#7b5339]"
              >
                Submit Message
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-[#7b5339]">With love,</p>
              <p className="font-display text-base text-[#382514]">Team Saadgi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
