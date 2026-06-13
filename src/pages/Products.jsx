import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, staggerItem } from '../components/AnimatedSection'

const categories = ['All', 'Control Panel', 'Detectors', 'Sirens', 'Control Devices']

const ProductIcon = ({ type }) => {
  const icons = {
    hub: (
      <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="7" width="20" height="14" rx="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a4 4 0 018 0v2" />
        <circle cx="6" cy="11" r="1" fill="currentColor" />
        <circle cx="18" cy="11" r="1" fill="currentColor" />
      </svg>
    ),
    motion: (
      <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    door: (
      <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
        <circle cx="14" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    glass: (
      <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l6 3-4 5M21 9l-6 3 4 5" />
      </svg>
    ),
    siren: (
      <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M12 6v12M8.464 8.464a5 5 0 000 7.072M18.364 5.636a9 9 0 010 12.728M5.636 5.636a9 9 0 000 12.728" />
      </svg>
    ),
    keypad: (
      <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="3" width="16" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="9" r="0.8" fill="currentColor" />
        <circle cx="12" cy="9" r="0.8" fill="currentColor" />
        <circle cx="15" cy="9" r="0.8" fill="currentColor" />
        <circle cx="9" cy="12.5" r="0.8" fill="currentColor" />
        <circle cx="12" cy="12.5" r="0.8" fill="currentColor" />
        <circle cx="15" cy="12.5" r="0.8" fill="currentColor" />
        <rect x="7" y="15.5" width="10" height="2" rx="1" fill="currentColor" />
      </svg>
    ),
    remote: (
      <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="8" y="2" width="8" height="14" rx="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="20" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6h4M10 9h4M10 12h4" />
      </svg>
    ),
    camera: (
      <svg className="w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        <circle cx="9" cy="12" r="2" />
      </svg>
    ),
  }
  return icons[type] || icons.hub
}

function ProductImage({ src, alt, type }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <ProductIcon type={type} />
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-contain p-4 drop-shadow-sm"
      onError={() => setFailed(true)}
    />
  )
}

const CDN = 'https://ajax.systems/api/cdn-img/?img='

const products = [
  {
    id: 'hub2plus', name: 'Ajax Hub 2 Plus', category: 'Control Panel', tagline: 'The heart of your system',
    description: 'Advanced central hub supporting 200+ devices. Ethernet, dual SIM, and Wi-Fi for uninterrupted protection even during outages.',
    specs: ['200+ device capacity', 'Ethernet + Dual SIM + Wi-Fi', '38-hour battery backup', 'Cloud management via Ajax app'],
    ajaxUrl: 'https://ajax.systems/products/hub-2-plus-jeweller/', icon: 'hub',
    image: `${CDN}%2Fupload%2Fhub_256999a1dd%402.png`,
  },
  {
    id: 'hub2', name: 'Ajax Hub 2', category: 'Control Panel', tagline: 'Reliable home protection hub',
    description: 'Core hub for compact Ajax systems. Supports 100 devices with Ethernet and SIM backup. Perfect for homes and small businesses.',
    specs: ['100 device capacity', 'Ethernet + SIM backup', '16-hour battery backup', 'Encrypted communication'],
    ajaxUrl: 'https://ajax.systems/products/hub-2-jeweller/', icon: 'hub',
    image: `${CDN}%2Fupload%2Fhub_rex_xl_f3788e8080%402.jpg&1763459049`,
  },
  {
    id: 'motionprotect', name: 'MotionProtect', category: 'Detectors', tagline: 'Smart indoor PIR detection',
    description: 'Wireless PIR motion detector with pet-immune technology up to 20kg. Instant push notification to your smartphone.',
    specs: ['12m range / 90° angle', 'Pet-immune up to 20kg', '7-year battery life', 'Tamper & anti-masking'],
    ajaxUrl: 'https://ajax.systems/products/motionprotect/', icon: 'motion',
    image: `${CDN}%2Fupload%2Fmp_xl_93d1779d25%402.jpg&1714486620`,
  },
  {
    id: 'motionprotect-outdoor', name: 'MotionProtect Outdoor', category: 'Detectors', tagline: 'Outdoor perimeter protection',
    description: 'Dual-infrared outdoor detector for rain, wind, fog, and temperature extremes. Ideal for gardens and driveways.',
    specs: ['15m range', 'IP55 weatherproof', 'Dual PIR anti-masking', '4-year battery life'],
    ajaxUrl: 'https://ajax.systems/products/motionprotect-outdoor/', icon: 'motion',
    image: `${CDN}%2Fupload%2Fsplit_xl_d3cd38e275%402.jpg&1753198191`,
  },
  {
    id: 'doorprotect', name: 'DoorProtect', category: 'Detectors', tagline: 'Every entry point covered',
    description: 'Magnetic sensor for doors, windows, gates and hatches. Detects opening and sends an instant alert to your phone.',
    specs: ['For doors & windows', 'Indoor & outdoor variants', '7-year battery life', 'Two-axis tilt detection'],
    ajaxUrl: 'https://ajax.systems/products/doorprotect/', icon: 'door',
    image: `${CDN}%2Fupload%2Fdp_p_j_xl_410df7528e%402.jpg&1736868984`,
  },
  {
    id: 'glassprotect', name: 'GlassProtect', category: 'Detectors', tagline: 'Detect break-ins before entry',
    description: 'Detects the sound of breaking glass up to 9m away. Works with all glass types — laminated, tempered and standard.',
    specs: ['9m detection radius', 'All glass types supported', '5-year battery life', 'Adjustable sensitivity'],
    ajaxUrl: 'https://ajax.systems/products/glassprotect/', icon: 'glass',
    image: `${CDN}%2Fupload%2Fgp_xl_98444c95f8%402.jpg&1716281071`,
  },
  {
    id: 'motioncam', name: 'MotionCam', category: 'Detectors', tagline: 'See what triggered the alarm',
    description: 'Motion detector with built-in camera. Captures a photo series on alarm for instant visual verification.',
    specs: ['Photo series on alarm', '12m / 90° coverage', 'End-to-end encrypted', '400 event photo buffer'],
    ajaxUrl: 'https://ajax.systems/products/motioncam/', icon: 'camera',
    image: `${CDN}%2Fupload%2Fmc_j_xl_c08a42c711%402.jpg&1721123433`,
  },
  {
    id: 'streetsiren', name: 'StreetSiren', category: 'Sirens', tagline: 'Maximum outdoor deterrent',
    description: 'Wireless outdoor siren with 113 dB alarm and LED light strip for maximum visual deterrence. Fully weatherproof.',
    specs: ['113 dB alarm', 'LED visual indicator', 'IP65 weatherproof', 'Tamper & anti-masking'],
    ajaxUrl: 'https://ajax.systems/products/streetsiren/', icon: 'siren',
    image: `${CDN}%2Fupload%2Fss_j_xl_67bf5a0236%402.jpg&1733488946`,
  },
  {
    id: 'homesiren', name: 'HomeSiren', category: 'Sirens', tagline: 'Loud indoor alert',
    description: 'Wireless indoor siren with 105 dB output and 81 LED colour combinations for clear visual alerts.',
    specs: ['105 dB siren', '81 LED colour combos', 'Wireless & battery powered', 'Tamper detection'],
    ajaxUrl: 'https://ajax.systems/products/homesiren/', icon: 'siren',
    image: `${CDN}%2Fupload%2Fhs_xl_e99f50b9bc%402.jpg&1721821201`,
  },
  {
    id: 'keypad', name: 'KeyPad', category: 'Control Devices', tagline: 'Easy arming & disarming',
    description: 'Wireless alarm keyboard with backlit keys and NFC card support. Arm, disarm and switch modes with ease.',
    specs: ['4 arming modes', 'NFC key support', 'Backlit display', 'Duress code alarm'],
    ajaxUrl: 'https://ajax.systems/products/keypad/', icon: 'keypad',
    image: `${CDN}%2Fupload%2Fkey_pad_xl_7d32b0e429%402.jpg&1764851252`,
  },
  {
    id: 'spacecontrol', name: 'SpaceControl', category: 'Control Devices', tagline: 'Arm from anywhere',
    description: 'Compact wireless key fob with 4 programmable buttons. Arm/disarm your system and trigger a panic alarm.',
    specs: ['1,300m open air range', '4 programmable buttons', 'Panic alarm button', '1.5-year battery'],
    ajaxUrl: 'https://ajax.systems/products/spacecontrol/', icon: 'remote',
    image: `${CDN}%2Fupload%2Fspace_control_xl_cfe8fc94b3%402.jpg&1764851403`,
  },
]

export default function Products({ onQuoteClick }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory)

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="container-xl relative z-10">
          <AnimatedSection className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Official Ajax Systems Installer
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 leading-tight">
              Ajax Alarm<br />Products
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-7 max-w-xl">
              As certified Ajax Systems installers, we supply and install the complete range of Ajax devices. We'll design a bespoke system tailored to your property at no extra charge.
            </p>
            <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="bg-white text-brand px-7 py-3.5 rounded-full font-black text-base shadow-xl hover:shadow-2xl transition-all">
              Get a Free System Design
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* Ajax Partnership Banner */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="container-xl">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-11 h-11 rounded-xl bg-brand flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <p className="text-gray-900 font-black text-sm">Ajax Systems Certified Partner</p>
                  <p className="text-gray-400 text-xs">Professional Grade Security</p>
                </div>
              </div>
              <div className="h-px w-full sm:h-8 sm:w-px bg-gray-100" />
              <p className="text-gray-500 text-sm leading-relaxed text-center sm:text-left">
                Ajax Systems is trusted by over <strong className="text-gray-900">3 million users</strong> in 187 countries. We are fully trained, certified installers with access to the complete Ajax product range.
              </p>
              <a href="https://ajax.systems" target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 text-brand text-sm font-bold hover:text-brand-dark transition-colors flex items-center gap-1">
                ajax.systems
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Product grid */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl">
          <AnimatedSection className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand text-white shadow-md shadow-brand/20'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}>
                {cat}
              </button>
            ))}
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover hover:border-brand/20"
              >
                <div className="h-44 bg-white relative overflow-hidden border-b border-gray-100">
                  <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/2 transition-colors duration-500" />
                  <ProductImage src={p.image} alt={p.name} type={p.icon} />
                  <span className="absolute bottom-3 left-4 bg-brand text-white text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {p.category}
                  </span>
                  <a href={p.ajaxUrl} target="_blank" rel="noopener noreferrer"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md text-gray-400 hover:text-brand border border-gray-100"
                    title="View on Ajax Systems">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>

                <div className="p-5">
                  <p className="text-gray-400 text-xs font-medium mb-0.5">{p.tagline}</p>
                  <h3 className="font-black text-gray-900 text-lg mb-2">{p.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.specs.map(s => (
                      <li key={s} className="flex items-center gap-2 text-gray-500 text-xs">
                        <svg className="w-3 h-3 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 items-center">
                    <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      className="flex-1 bg-brand text-white py-2.5 rounded-xl text-xs font-bold hover:bg-brand-dark transition-colors">
                      Start a Quote
                    </motion.button>
                    <a href={p.ajaxUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-400 hover:text-brand font-medium transition-colors px-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Details
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="container-xl max-w-xl">
          <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-3">Not Sure What You Need?</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">We'll design it for you, free</h2>
          <p className="text-white/70 mb-8">Book a free survey and we'll assess your property and design the perfect Ajax system from scratch. No obligation.</p>
          <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="bg-white text-brand px-8 py-4 rounded-full font-black text-base shadow-xl hover:shadow-2xl transition-all">
            Book Free Survey
          </motion.button>
        </div>
      </section>
    </main>
  )
}
