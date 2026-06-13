import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const CDN = 'https://ajax.systems/api/cdn-img/?img='

const services = [
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    title: 'Residential Alarm Installation',
    desc: 'Fully tailored wireless Ajax alarm systems for houses, flats and apartments. We survey your property and design a system that covers every entry point without any unnecessary devices.',
    benefits: ['Free home survey included', 'Fully wireless, minimal drilling', 'Smartphone app setup included', 'Pet-friendly PIR sensor options'],
    image: `${CDN}%2Fupload%2Fsplit_xl_d3cd38e275%402.jpg&1753198191`,
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: 'Business & Commercial',
    desc: 'Protect your premises, staff and assets with a professionally designed Ajax commercial alarm system. From small offices to warehouses, we design systems to suit any layout.',
    benefits: ['Multiple user access levels', 'Staff key fob arming', 'Integration with monitoring centres', 'After-hours alert configuration'],
    image: `${CDN}%2Fupload%2Fkey_pad_xl_7d32b0e429%402.jpg&1764851252`,
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    title: 'System Upgrades',
    desc: 'Got an old alarm tied into a subscription, causing false activations, or requiring expensive maintenance? We can upgrade you to Ajax with minimal disruption.',
    benefits: ['Free upgrade assessment', 'Keep existing sounder where possible', 'Same-day upgrade possible', 'Trade-in options available'],
    image: `${CDN}%2Fupload%2Fhub_256999a1dd%402.png`,
    imgClass: 'w-full h-56 sm:h-64 object-contain bg-white p-4 sm:p-8',
  },
  {
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Servicing & Support',
    desc: 'Already have Ajax? We provide servicing, sensor additions, and ongoing support for existing Ajax installations regardless of who installed them.',
    benefits: ['Sensor additions & expansions', 'App troubleshooting', 'Battery replacement service', 'Annual health checks'],
    image: `${CDN}%2Fupload%2Fmp_xl_93d1779d25%402.jpg&1714486620`,
  },
]

export default function Services({ onQuoteClick }) {
  return (
    <main>
      {/* Hero — red to black gradient */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/alarm-home.png)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="container-xl relative z-10">
          <span className="text-white/60 font-bold tracking-widest uppercase text-xs mb-3 block">What We Offer</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-tight">Our Services</h1>
          <div className="flex flex-wrap gap-4">
            {['Ajax Certified', 'No Subscriptions', 'Same-Week Install', 'UK-Wide'].map(badge => (
              <span key={badge} className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="space-y-14 lg:space-y-20">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} direction={i % 2 === 0 ? 'right' : 'left'}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className={i % 2 !== 0 ? 'order-2 lg:order-last' : 'order-2'}>
                    <div className="w-14 h-14 rounded-2xl bg-brand/8 flex items-center justify-center text-brand mb-5">
                      {s.icon}
                    </div>
                    <h2 className="section-title mb-4">{s.title}</h2>
                    <p className="section-sub mb-6">{s.desc}</p>
                    <ul className="space-y-2.5 mb-8">
                      {s.benefits.map(b => (
                        <li key={b} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                          <span className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-primary">
                      Get a Quote
                    </motion.button>
                  </div>
                  <div className={`order-1 ${i % 2 !== 0 ? 'lg:order-first' : ''} rounded-3xl overflow-hidden border border-gray-100 shadow-sm`}>
                    <img src={s.image} alt={s.title} className={s.imgClass || 'w-full h-56 sm:h-64 object-cover object-center'} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Smartphone */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-white h-64 sm:h-80 border border-gray-100">
                <img src="https://ajax.systems/api/cdn-img/?img=%2Fsoftware%2Fbanners%2Fphone.xxl.png&1746109197" alt="Ajax app on smartphone" className="w-full h-full object-cover object-center" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="section-tag">Smartphone Control</span>
              <h2 className="section-title mt-2 mb-5">Monitor from anywhere</h2>
              <p className="section-sub mb-6">
                The Ajax Security System app gives you full control no matter where you are. Arm, disarm, check sensor status, and receive instant alerts — all from your phone.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['iOS & Android', 'Real-time alerts', 'Event history', 'Multiple users'].map(f => (
                  <div key={f} className="bg-white rounded-xl p-3 border border-gray-100 flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm font-semibold text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/products" className="btn-outline-dark">View All Ajax Products →</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden text-center" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white" />
        </div>
        <div className="container-xl relative z-10 max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Not sure which service you need?</h2>
          <p className="text-white/75 mb-8">Call us or start a quote — we'll ask the right questions and figure it out together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="bg-white text-brand px-8 py-4 rounded-full font-black text-base shadow-xl">
              Start Quote
            </motion.button>
            <a href="tel:07553089659"
              className="flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-all">
              Call 07553 089659
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
