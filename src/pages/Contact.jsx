import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, staggerItem } from '../components/AnimatedSection'

const methods = [
  {
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    label: 'Phone',
    value: '07553 089659',
    action: 'tel:07553089659',
    cta: 'Call Now',
    color: 'bg-blue-50 text-blue-600',
    note: 'Available 7 days a week',
  },
  {
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    label: 'Email',
    value: 'contact@suttonss.co.uk',
    action: 'mailto:contact@suttonss.co.uk',
    cta: 'Send Email',
    color: 'bg-purple-50 text-purple-600',
    note: 'We reply within 24 hours',
  },
  {
    icon: <svg className="w-8 h-8" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.8 0-222.8 100-222.9 222.9 0 39.2 10.2 77.5 29.6 111.2L0 480l116.2-30.5c32.4 17.7 68.9 27 107.7 27h.1c122.8 0 222.8-100 222.9-222.9 0-59.4-23.1-115.2-66-156.5z"/></svg>,
    label: 'WhatsApp',
    value: '07553 089659',
    action: 'https://wa.me/447553089659',
    cta: 'Chat on WhatsApp',
    color: 'bg-green-50 text-green-600',
    note: 'Fastest response time',
    external: true,
  },
]

export default function Contact() {
  return (
    <main>
      {/* Hero — red to black gradient */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/hero-home.png)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="container-xl relative z-10 text-center max-w-2xl mx-auto">
          <span className="text-white/60 font-bold tracking-widest uppercase text-xs mb-3 block">Get In Touch</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-tight">Contact Us</h1>
          <p className="text-white/80 text-lg">We're available 7 days a week. Call, email, or WhatsApp. We respond fast.</p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {methods.map(m => (
              <motion.div key={m.label} variants={staggerItem}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 text-center card-hover hover:border-brand/20 group shadow-sm">
                <div className={`w-16 h-16 rounded-2xl ${m.color} mx-auto flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {m.icon}
                </div>
                <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">{m.label}</p>
                <p className="font-black text-gray-900 text-base mb-1 break-all sm:break-normal">{m.value}</p>
                <p className="text-gray-400 text-xs mb-5">{m.note}</p>
                <motion.a href={m.action} target={m.external ? '_blank' : undefined} rel={m.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="inline-block w-full bg-brand text-white py-3 rounded-xl font-bold text-sm hover:bg-brand-dark transition-colors">
                  {m.cta}
                </motion.a>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Areas */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl max-w-3xl">
          <div className="text-center mb-10">
            <span className="section-tag">Coverage Area</span>
            <h2 className="section-title mt-2">Where do we install?</h2>
          </div>
          <p className="text-gray-500 text-center mb-8 text-base leading-relaxed max-w-xl mx-auto">
            We install across the UK, with particular coverage in the Midlands. Here are some of the areas we regularly serve:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Sutton Coldfield', 'Birmingham', 'Lichfield', 'Tamworth', 'Walsall', 'Wolverhampton', 'Solihull', 'Stafford', 'Burton upon Trent', 'Coventry', 'Redditch', 'UK-Wide'].map(area => (
              <div key={area} className="bg-white rounded-xl px-3 py-3 border border-gray-100 text-center text-sm font-semibold text-gray-700 flex items-center justify-center gap-1.5">
                <svg className="w-3 h-3 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-5">Don't see your area? Contact us. We travel further than you think.</p>
        </div>
      </section>

      {/* Not ready */}
      <section className="py-16 bg-white text-center border-t border-gray-100">
        <div className="container-xl max-w-xl">
          <h2 className="section-title mb-4">Not ready to call?</h2>
          <p className="text-gray-500 mb-8">No problem. Drop us a WhatsApp any time and we'll respond when we can. Or start a quote online and we'll call you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/447553089659" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25d366] text-white px-7 py-3.5 rounded-full font-bold hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.8 0-222.8 100-222.9 222.9 0 39.2 10.2 77.5 29.6 111.2L0 480l116.2-30.5c32.4 17.7 68.9 27 107.7 27h.1c122.8 0 222.8-100 222.9-222.9 0-59.4-23.1-115.2-66-156.5z"/></svg>
              WhatsApp Us
            </a>
            <a href="https://facebook.com/suttonsecurity" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-full font-bold hover:border-gray-300 hover:bg-gray-50 transition-all">
              Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
