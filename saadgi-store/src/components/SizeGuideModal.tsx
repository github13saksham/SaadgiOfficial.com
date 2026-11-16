import React from 'react'
import { X, Ruler, HelpCircle, MessageCircle } from 'lucide-react'
import sizeChartImg from '../assets/size-chart.jpg'
import orderNoteImg from '../assets/order-note.jpg'

interface SizeGuideModalProps {
  isOpen: boolean
  onClose: () => void
}

const measurements = [
  { size: 'S', bust: '34–35', waist: '27–28', hips: '37–38' },
  { size: 'M', bust: '36–37', waist: '29–30', hips: '39–40' },
  { size: 'L', bust: '38–40', waist: '31–33', hips: '41–43' },
  { size: 'XL', bust: '41–43', waist: '34–36', hips: '44–46' },
  { size: 'XXL', bust: '44–46', waist: '37–39', hips: '47–49' },
]

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const [activeTab, setActiveTab] = React.useState<'table' | 'original'>('table')

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#211711]/60 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-[#ebdcc8] bg-[#fffdfb] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#ebdcc8] bg-[#fef5ec] text-[#382514] transition hover:bg-[#382514] hover:text-white"
          aria-label="Close Size Guide"
        >
          <X size={18} />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fef5ec] text-[#7b5339]">
            <Ruler size={16} />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7b5339]">Official Sizing</p>
            <h2 className="font-display text-2xl text-[#382514] sm:text-3xl">Size Guide & Fit Assistance</h2>
          </div>
        </div>

        {/* View Toggle */}
        <div className="mt-5 flex gap-2 border-b border-[#ebdcc8] pb-3">
          <button
            onClick={() => setActiveTab('table')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
              activeTab === 'table' ? 'bg-[#382514] text-[#fef5ec]' : 'bg-[#faf5ed] text-[#7b5339] hover:bg-white'
            }`}
          >
            Interactive Measurement Table
          </button>
          <button
            onClick={() => setActiveTab('original')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
              activeTab === 'original' ? 'bg-[#382514] text-[#fef5ec]' : 'bg-[#faf5ed] text-[#7b5339] hover:bg-white'
            }`}
          >
            Original Studio Charts
          </button>
        </div>

        {activeTab === 'table' ? (
          <div className="mt-6 space-y-6">
            {/* Table */}
            <div className="overflow-hidden rounded-2xl border border-[#ebdcc8] bg-white">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-[#ebdcc8] bg-[#fef5ec] text-[11px] font-semibold uppercase tracking-wider text-[#7b5339]">
                  <tr>
                    <th className="px-4 py-3.5 sm:px-6">Size</th>
                    <th className="px-4 py-3.5 sm:px-6">Bust (in)</th>
                    <th className="px-4 py-3.5 sm:px-6">Waist (in)</th>
                    <th className="px-4 py-3.5 sm:px-6">Hips (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ebdcc8]/60 text-[#382514]">
                  {measurements.map((row) => (
                    <tr key={row.size} className="transition hover:bg-[#faf5ed]">
                      <td className="px-4 py-3.5 font-bold text-[#7b5339] sm:px-6">{row.size}</td>
                      <td className="px-4 py-3.5 sm:px-6">{row.bust}</td>
                      <td className="px-4 py-3.5 sm:px-6">{row.waist}</td>
                      <td className="px-4 py-3.5 sm:px-6">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* A little note before ordering */}
            <div className="rounded-2xl border border-[#ebdcc8] bg-[#faf5ed] p-5 sm:p-6">
              <h3 className="font-display text-lg text-[#382514]">A little note before ordering</h3>
              <ul className="mt-3 list-inside list-disc space-y-2 text-xs leading-relaxed text-[#5b3a26] sm:text-sm">
                <li>All measurements are in inches.</li>
                <li>The chart represents body measurements, not garment measurements.</li>
                <li>Different styles, fabrics and silhouettes may have different fits.</li>
                <li>Please check individual product descriptions for additional measurements.</li>
                <li>If you fall between two sizes, check with our team before ordering.</li>
              </ul>

              {/* Need help finding your size card */}
              <div className="mt-5 rounded-xl border border-[#dccab5] bg-white p-4">
                <div className="flex items-center gap-2">
                  <HelpCircle size={16} className="text-[#7b5339]" />
                  <h4 className="font-display text-base text-[#382514]">Need help finding your size?</h4>
                </div>
                <p className="mt-1 text-xs text-[#7b5339]">We're happy to help you find the right fit.</p>
                <div className="mt-3 flex items-center justify-between border-t border-[#ebdcc8] pt-3">
                  <div>
                    <p className="font-display text-sm text-[#382514]">Team Saadgi</p>
                    <p className="text-[10px] italic text-[#7b5339]">Where Simplicity Meets Elegance</p>
                  </div>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Team%20Saadgi,%20I%20need%20help%20choosing%20the%20right%20size"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#2f7d4b] px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white hover:bg-[#25683d]"
                  >
                    <MessageCircle size={14} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-[#ebdcc8] bg-black">
              <img src={sizeChartImg} alt="Saadgi Size Chart" className="w-full object-contain" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#ebdcc8] bg-black">
              <img src={orderNoteImg} alt="Saadgi A Little Note Before Ordering" className="w-full object-contain" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
