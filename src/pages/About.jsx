import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const values = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    title: 'Honest Advice',
    desc: 'We tell you what you need — nothing more. No upselling, no unnecessary extras.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    title: 'Tidy Installation',
    desc: 'Fully wireless systems. No cable runs, no drilling through walls unless essential.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    title: 'Simple Tech',
    desc: 'We set everything up and walk you through the app. No tech knowledge needed.',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'Long-Term Support',
    desc: 'We\'re here after install too. Call or WhatsApp us any time. We\'re always available.',
  },
]

export default function About({ onQuoteClick }) {
  return (
    <main>
      {/* Hero — red to black gradient */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/hero-home.png)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="container-xl relative z-10 max-w-2xl">
          <span className="text-white/60 font-bold tracking-widest uppercase text-xs mb-3 block">About Us</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-tight">
            We keep it<br />simple
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Sutton Security Services is a specialist wireless alarm installer, partnered exclusively with Ajax Systems. We install world-class security without the jargon, the contracts, or the monthly bills.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title mt-2 mb-6">Security without the subscription</h2>
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <p>We started Sutton Security Services because we were fed up seeing customers tied into expensive monthly contracts for alarms they already owned.</p>
                <p>When we discovered Ajax Systems, it changed everything. Here was technology genuinely better than anything from the big subscription brands, with no ongoing fees required. We became early adopters and certified installers.</p>
                <p>Today, every installation follows the same principle: give people the best possible security, explain everything clearly, and charge a fair one-off price. No contracts. No nonsense.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left" className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-50 h-64 sm:h-80">
                <img src="https://ajax.systems/api/cdn-img/?img=%2Fsoftware%2Fbanners%2Fphone.xxl.png&1746109197" alt="Ajax app on smartphone" className="w-full h-full object-cover object-center" />
              </div>
              <motion.div
                className="hidden sm:block absolute sm:-bottom-4 sm:-right-4 bg-brand rounded-2xl shadow-xl p-5 max-w-[180px]"
                initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-4xl font-black text-white mb-1">£0</p>
                <p className="text-white/80 text-xs font-semibold leading-snug">Monthly fees, ever</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title mt-2">Our approach</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 card-hover group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand/8 flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="font-black text-gray-900 text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ajax Partner */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="section-tag">Our Technology Partner</span>
              <h2 className="section-title mt-2 mb-5">Why we chose Ajax</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                We exclusively install Ajax Systems because they are the best wireless alarm technology available. Military-grade encryption, 7+ year battery life on sensors, and a genuinely brilliant app. Nothing else comes close.
              </p>
              <ul className="space-y-3">
                {[
                  'Used by 3M+ customers in 187 countries',
                  'Jeweller proprietary wireless protocol',
                  'Two-way communication with hub',
                  'Encrypted, tamper-proof communication',
                  'ISO 9001 and EN 50131 certified',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand mx-auto flex items-center justify-center mb-4">
                    <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <p className="text-gray-900 font-black text-lg">Ajax Certified Installer</p>
                  <p className="text-gray-400 text-sm mt-1">Sutton Security Services</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[{ label: 'Countries', value: '187+' }, { label: 'Customers', value: '3M+' }, { label: 'Devices', value: '300+' }, { label: 'Languages', value: '27' }].map(s => (
                    <div key={s.label} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                      <p className="text-3xl font-black text-gray-900">{s.value}</p>
                      <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
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
        <div className="container-xl relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-5">Let's protect your home</h2>
          <p className="text-white/75 text-lg mb-8 max-w-md mx-auto">Free survey. Free quote. No obligation.</p>
          <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="bg-white text-brand px-8 py-4 rounded-full font-black text-base shadow-xl hover:shadow-2xl transition-all">
            Get Your Free Quote
          </motion.button>
        </div>
      </section>
    </main>
  )
}
