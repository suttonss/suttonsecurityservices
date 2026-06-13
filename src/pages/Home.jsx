import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const CDN = 'https://ajax.systems/api/cdn-img/?img='

const stats = [
  { value: '100%', label: 'Wireless Systems' },
  { value: '£0', label: 'Monthly Fees' },
]

const usps = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: 'No Monthly Fees',
    desc: 'Own your system outright. No subscriptions, no contracts, no surprises. Pay once, protected forever.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    title: 'Smartphone Control',
    desc: 'Arm, disarm and monitor your property from anywhere via the Ajax app.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: '100% Wireless',
    desc: 'Fully wireless Ajax systems. Minimal drilling, maximum protection.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    title: '24/7 Support',
    desc: 'When you call, you speak to the engineer who installed your system.',
  },
]

const steps = [
  { num: '01', title: 'Free Survey', desc: 'We visit your property and design a bespoke Ajax security plan tailored to your home or business.' },
  { num: '02', title: 'Expert Installation', desc: 'Our certified engineers install your system cleanly and efficiently, typically in a single day.' },
  { num: '03', title: "You're Protected", desc: "We walk you through the Ajax app, you get a full demo, and you're fully protected from day one." },
]

const faqs = [
  { q: 'How long does installation take?', a: "Most residential installations are completed within a day. We'll leave you with a fully working system and walk you through the Ajax app before we leave." },
  { q: 'Do I need to pay a monthly fee?', a: "No. Ajax alarms don't require any subscription or monitoring contract. You own the equipment outright with no ongoing fees." },
  { q: 'What areas do you cover?', a: 'We install across the UK, with particular coverage in the Midlands including Sutton Coldfield, Birmingham, Lichfield, Tamworth and surrounding areas.' },
  { q: 'Is Ajax compatible with my smartphone?', a: 'Yes. The Ajax Security System app is available for iOS and Android. Arm/disarm, receive instant alerts, and monitor from anywhere in the world.' },
  { q: 'What happens during a power cut?', a: 'Ajax hubs have built-in battery backup (up to 38 hours on Hub 2 Plus). Wireless detectors run on their own batteries lasting up to 7 years.' },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
        <span className="font-bold text-gray-900 group-hover:text-brand transition-colors text-sm sm:text-base">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-brand group-hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function VideoHero({ onQuoteClick }) {
  const videoRef = useRef(null)
  useEffect(() => {
    const v = videoRef.current
    if (v) v.addEventListener('canplay', () => v.classList.add('loaded'))
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center bg-black">
      <video ref={videoRef} autoPlay muted loop playsInline className="hero-video absolute inset-0 w-full h-full object-cover">
        <source src="/thief-looking-at-window.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 w-full text-center px-4 sm:px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <span className="inline-flex items-center gap-2 bg-brand text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Ajax Systems Certified Installer
          </span>
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-none tracking-tight"
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          Home Security<br /><span className="text-brand">No Monthly Fees</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-white/75 mb-10 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        >
          100% wireless Ajax alarm installation.<br className="hidden sm:block" />Own it outright. No subscriptions, ever.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
        >
          <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} className="btn-primary">
            Start Your Free Quote
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.button>
          <Link to="/why-choose-us" className="btn-outline">See Why We're Different</Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <svg className="w-5 h-8" viewBox="0 0 20 32" fill="none">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="2" />
          <motion.circle cx="10" cy="8" r="2.5" fill="currentColor"
            animate={{ cy: [8, 20, 8], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          />
        </svg>
      </motion.div>
    </section>
  )
}

export default function Home({ onQuoteClick }) {
  return (
    <main>
      <VideoHero onQuoteClick={onQuoteClick} />

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 text-center">
            {stats.map(s => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-black text-brand stat-number">{s.value}</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP cards */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Why Sutton Security</span>
            <h2 className="section-title mt-2">Security without the small print</h2>
            <p className="section-sub mt-3 mx-auto max-w-xl text-center">
              World-class Ajax alarm systems with no hidden costs. One price. No ongoing fees. Ever.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {usps.map(u => (
              <div key={u.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 card-hover hover:border-brand/20 group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand/8 flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {u.icon}
                </div>
                <h3 className="font-black text-gray-900 text-base mb-2">{u.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag">Simple Process</span>
            <h2 className="section-title mt-2">Up and running in a day</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-brand/20" />
            {steps.map(s => (
              <div key={s.num} className="text-center relative">
                <div className="w-20 h-20 rounded-full border-2 border-brand/30 bg-brand/8 flex items-center justify-center mx-auto mb-5">
                  <span className="text-3xl font-black text-brand">{s.num}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-primary">
              Book Your Free Survey
            </motion.button>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="section-tag">Ajax Systems Partner</span>
                <span className="bg-brand/10 text-brand text-xs font-bold px-2 py-0.5 rounded-full border border-brand/20">Official Installer</span>
              </div>
              <h2 className="section-title">Premium alarm technology</h2>
              <p className="section-sub mt-2 max-w-xl">
                We exclusively install Ajax, trusted by over 3 million users in 187 countries.
              </p>
            </div>
            <Link to="/products" className="btn-outline-dark flex-shrink-0 text-sm">View All Products</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: `${CDN}%2Fupload%2Fhub_256999a1dd%402.png`, alt: 'Ajax Hub 2 Plus', label: 'Control Panel', name: 'Hub 2 Plus', desc: 'The brain of your Ajax system. Ethernet, dual SIM &amp; Wi-Fi backup. Supports 200+ devices.', link: 'https://ajax.systems/products/hub2plus/' },
              { img: `${CDN}%2Fupload%2Fmp_xl_93d1779d25%402.jpg&1714486620`, alt: 'Ajax MotionProtect', label: 'Motion Detector', name: 'MotionProtect', desc: 'Smart PIR detector. Pet-immune up to 20kg. 12m range with 7-year battery life.', link: 'https://ajax.systems/products/motionprotect/' },
              { img: 'https://ajax.systems/api/cdn-img/?img=%2Fsoftware%2Fbanners%2Fphone.xxl.png&1746109197', alt: 'Ajax app', label: 'Smart App', name: 'Ajax Security App', desc: 'Arm, disarm and monitor your home from anywhere. iOS &amp; Android. Instant push alerts.', link: 'https://ajax.systems/software/' },
            ].map(p => (
              <div key={p.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover shadow-sm group">
                <div className="relative h-44 sm:h-52 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <img src={p.img} alt={p.alt} className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-4 bg-brand text-white text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full z-10">{p.label}</span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 font-semibold mb-1">Ajax Systems</p>
                  <h3 className="font-black text-gray-900 text-lg mb-2">{p.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: p.desc }} />
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-brand text-sm font-bold hover:text-brand-dark transition-colors flex items-center gap-1">
                    View on Ajax Systems
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="section-tag">Professional Install</span>
              <h2 className="section-title mt-2 mb-5">Tidy, fast &amp; hassle-free</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">Our engineers leave your home exactly as they found it, just with a world-class Ajax system protecting it. No unnecessary drilling, no messy cables.</p>
              <ul className="space-y-3 mb-8">
                {['Fully wireless, minimal drilling', 'Smartphone app setup included', 'Same-week installation available', 'Full walkthrough before we leave'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                    <span className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-primary">
                Get a Free Quote
              </motion.button>
            </AnimatedSection>
            <AnimatedSection direction="left" className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <img src={`${CDN}%2Fupload%2Fsplit_xl_d3cd38e275%402.jpg&1753198191`} alt="Ajax alarm sensor installed" className="w-full h-56 sm:h-72 object-cover object-center" />
              </div>
              <motion.div
                className="hidden sm:flex absolute sm:-bottom-4 sm:-left-4 bg-white border border-gray-100 rounded-2xl shadow-xl p-4 items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-black text-gray-900">System Armed</p>
                  <p className="text-xs text-gray-400">All sensors active</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl max-w-2xl">
          <AnimatedSection className="text-center mb-10">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title mt-2">Common questions</h2>
          </AnimatedSection>
          {faqs.map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white" />
        </div>
        <div className="container-xl relative z-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-5">Ready to protect your home?</h2>
          <p className="text-white/75 text-lg mb-10 max-w-md mx-auto">Free survey. Free quote. No obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="bg-white text-brand px-8 py-4 rounded-full font-black text-base shadow-xl hover:shadow-2xl transition-all">
              Start Your Free Quote
            </motion.button>
            <a href="tel:07553089659"
              className="flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              07553 089659
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
