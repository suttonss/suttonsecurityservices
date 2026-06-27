import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const propertyTypes = [
  { id: 'house', label: 'House', icon: '🏠' },
  { id: 'flat', label: 'Flat / Apartment', icon: '🏢' },
  { id: 'business', label: 'Business', icon: '🏪' },
  { id: 'other', label: 'Other', icon: '🏗️' },
]

const protectionNeeds = [
  { id: 'entry-doors', label: 'Entry Doors' },
  { id: 'windows', label: 'Windows' },
  { id: 'garage', label: 'Garage / Outbuildings' },
  { id: 'outdoor', label: 'Garden / Outdoor Areas' },
  { id: 'motion', label: 'Indoor Motion Detection' },
  { id: 'business-premises', label: 'Business Premises' },
]

const propertySizes = [
  { id: '1-2bed', label: '1–2 Bedrooms' },
  { id: '3-4bed', label: '3–4 Bedrooms' },
  { id: '5plus', label: '5+ Bedrooms' },
  { id: 'commercial', label: 'Commercial Unit' },
]

const TOTAL_STEPS = 4

export default function QuoteModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [data, setData] = useState({
    propertyType: '',
    propertySize: '',
    needs: [],
    name: '',
    phone: '',
    email: '',
    postcode: '',
  })

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => { setStep(1); setDone(false) }, 400)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const toggleNeed = (id) =>
    setData(d => ({
      ...d,
      needs: d.needs.includes(id) ? d.needs.filter(n => n !== id) : [...d.needs, id],
    }))

  const canNext = () => {
    if (step === 1) return !!data.propertyType
    if (step === 2) return !!data.propertySize
    if (step === 3) return data.needs.length > 0
    if (step === 4) return !!(data.name && data.phone && data.email)
    return true
  }

  const handleSubmit = () => {
    const propertyLabel = propertyTypes.find(p => p.id === data.propertyType)?.label || data.propertyType
    const sizeLabel = propertySizes.find(s => s.id === data.propertySize)?.label || data.propertySize
    const needsLabels = data.needs.map(n => protectionNeeds.find(p => p.id === n)?.label || n).join(', ')
    const message = encodeURIComponent(
      `Hi! I'd like a free Ajax alarm quote.\n\nProperty: ${propertyLabel} (${sizeLabel})\nNeeds: ${needsLabels}\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}${data.postcode ? `\nPostcode: ${data.postcode}` : ''}`
    )
    window.open(`https://wa.me/447404636800?text=${message}`, '_blank')
    setDone(true)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal — always centred, scrollable on small screens */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                <div>
                  <h2 className="text-lg font-black text-gray-900">Get a Free Quote</h2>
                  {!done && (
                    <p className="text-xs text-gray-400 mt-0.5">Step {step} of {TOTAL_STEPS}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                >
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Progress bar */}
              {!done && (
                <div className="h-1 bg-gray-100">
                  <motion.div
                    className="h-full bg-brand"
                    animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-4"
                    >
                      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-black text-gray-900 mb-2">WhatsApp Opened!</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Your quote details are pre-filled in WhatsApp. Just hit send and we'll reply within the hour.
                      </p>
                    </motion.div>
                  ) : step === 1 ? (
                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                      <p className="text-sm font-semibold text-gray-700 mb-4">What type of property?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {propertyTypes.map(p => (
                          <button
                            key={p.id}
                            onClick={() => setData(d => ({ ...d, propertyType: p.id }))}
                            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 ${
                              data.propertyType === p.id ? 'border-brand bg-brand/5 text-brand' : 'border-gray-100 hover:border-gray-200 text-gray-700'
                            }`}
                          >
                            <span className="text-2xl">{p.icon}</span>
                            <span className="text-xs font-bold">{p.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : step === 2 ? (
                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                      <p className="text-sm font-semibold text-gray-700 mb-4">Property size?</p>
                      <div className="space-y-2.5">
                        {propertySizes.map(s => (
                          <button
                            key={s.id}
                            onClick={() => setData(d => ({ ...d, propertySize: s.id }))}
                            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-semibold ${
                              data.propertySize === s.id ? 'border-brand bg-brand/5 text-brand' : 'border-gray-100 hover:border-gray-200 text-gray-700'
                            }`}
                          >
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : step === 3 ? (
                    <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                      <p className="text-sm font-semibold text-gray-700 mb-4">What needs protecting? <span className="text-gray-400 font-normal">(select all that apply)</span></p>
                      <div className="space-y-2">
                        {protectionNeeds.map(n => (
                          <button
                            key={n.id}
                            onClick={() => toggleNeed(n.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium flex items-center gap-3 ${
                              data.needs.includes(n.id) ? 'border-brand bg-brand/5 text-brand' : 'border-gray-100 hover:border-gray-200 text-gray-700'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border-2 transition-all ${
                              data.needs.includes(n.id) ? 'bg-brand border-brand' : 'border-gray-300'
                            }`}>
                              {data.needs.includes(n.id) && (
                                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </span>
                            {n.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                      <p className="text-sm font-semibold text-gray-700 mb-4">Your contact details</p>
                      <div className="space-y-3">
                        {[
                          { field: 'name', label: 'Full Name *', type: 'text' },
                          { field: 'phone', label: 'Phone Number *', type: 'tel' },
                          { field: 'email', label: 'Email Address *', type: 'email' },
                          { field: 'postcode', label: 'Postcode (optional)', type: 'text' },
                        ].map(({ field, label, type }) => (
                          <input
                            key={field}
                            type={type}
                            placeholder={label}
                            value={data[field]}
                            onChange={e => setData(d => ({ ...d, [field]: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-brand focus:outline-none text-sm text-gray-800 placeholder-gray-400 transition-colors"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer actions */}
              {!done && (
                <div className="px-6 pb-6 flex gap-3 border-t border-gray-50 pt-4">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(s => s - 1)}
                      className="flex-1 py-3 rounded-xl border-2 border-gray-100 text-sm font-bold text-gray-600 hover:border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={() => step < TOTAL_STEPS ? setStep(s => s + 1) : handleSubmit()}
                    disabled={!canNext()}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                      canNext()
                        ? 'bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {step < TOTAL_STEPS ? 'Next →' : 'Send via WhatsApp →'}
                  </button>
                </div>
              )}
              {done && (
                <div className="px-6 pb-6">
                  <button onClick={onClose} className="w-full py-3 rounded-xl bg-gray-100 text-gray-700 font-bold text-sm hover:bg-gray-200 transition-colors">
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
