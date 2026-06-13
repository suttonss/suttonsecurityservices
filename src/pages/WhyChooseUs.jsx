import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, staggerItem } from '../components/AnimatedSection'

const comparison = [
  { feature: 'Monthly fees', us: false, them: true, usText: 'None, ever', themText: '£30-£60/month' },
  { feature: 'You own the equipment', us: true, them: false, usText: 'Yes, outright', themText: 'Often rented back' },
  { feature: 'Minimum contract', us: false, them: true, usText: 'No contract', themText: '12–36 months' },
  { feature: 'Smartphone app', us: true, them: true, usText: 'Ajax app included', themText: 'Subscription app' },
  { feature: 'Wireless hardware', us: true, them: false, usText: 'Fully wireless Ajax', themText: 'Often wired/hybrid' },
  { feature: 'Free survey & quote', us: true, them: false, usText: 'Always free', themText: 'Often a sales visit' },
  { feature: '24/7 support', us: true, them: true, usText: 'Direct to engineer', themText: 'Call centre' },
  { feature: 'Upgrade anytime', us: true, them: false, usText: 'Add devices anytime', themText: 'May require new contract' },
]

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: 'You own it',
    desc: 'Every device we install is yours from day one. No renting equipment back. No locked-in contracts.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: 'Zero monthly fees',
    desc: 'Pay once for the hardware and installation. That\'s it. No subscriptions, no ongoing costs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Better technology',
    desc: 'Ajax Systems is rated the #1 wireless alarm globally. Simply better than what subscription brands install.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Direct support',
    desc: 'When you call us, you speak to the engineer who installed your system — not a call centre.',
  },
]

export default function WhyChooseUs({ onQuoteClick }) {
  return (
    <main>
      {/* Hero — red to black gradient */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/alarm-home.png)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-tight">
            No Subscription.<br />No Hassle.<br />Just Security.
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            The security industry charges £30–£60 every single month. We don't. Here's why that matters.
          </p>
          <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="bg-white text-brand px-8 py-4 rounded-full font-black text-base shadow-xl hover:shadow-2xl transition-all">
            Get Your Free Quote
          </motion.button>
        </div>
      </section>

      {/* Cost callout */}
      <section className="bg-gray-900 py-10">
        <div className="container-xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { label: 'Average annual subscription cost', value: '£540' },
                { label: 'Annual fee with Sutton Security', value: '£0', highlight: true },
                { label: 'Subscription cost over 10 years', value: '£5,400' },
              ].map(s => (
                <div key={s.label}>
                  <p className={`text-4xl sm:text-5xl font-black ${s.highlight ? 'text-brand' : 'text-white'}`}>{s.value}</p>
                  <p className="text-gray-400 text-sm mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reasons — SVG icons, no emojis */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag">Why We're Different</span>
            <h2 className="section-title mt-2">The better way to get security</h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map(r => (
              <motion.div key={r.title} variants={staggerItem}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover group">
                <div className="w-12 h-12 rounded-xl bg-brand/8 flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {r.icon}
                </div>
                <h3 className="font-black text-gray-900 text-base mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-pad bg-gray-50">
        <div className="container-xl max-w-3xl">
          <AnimatedSection className="text-center mb-10">
            <span className="section-tag">Side by Side</span>
            <h2 className="section-title mt-2">Sutton Security vs subscription alarms</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg overflow-x-auto">
              <table className="comparison-table w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="text-gray-400 font-semibold py-4 px-5 text-left text-xs uppercase tracking-wider">Feature</th>
                    <th className="text-brand font-black py-4 px-5 text-center text-xs uppercase tracking-wider">Sutton Security</th>
                    <th className="text-gray-400 font-semibold py-4 px-5 text-center text-xs uppercase tracking-wider">Subscription brands</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-50">
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                      <td className="text-gray-700 font-semibold px-5 py-4 text-sm">{row.feature}</td>
                      <td className="text-center px-5 py-4">
                        <div className="flex flex-col items-center gap-1">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </span>
                          <span className="text-xs font-semibold text-green-700">{row.usText}</span>
                        </div>
                      </td>
                      <td className="text-center px-5 py-4">
                        <div className="flex flex-col items-center gap-1">
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${row.them ? 'bg-red-50 text-red-400' : 'bg-gray-100 text-gray-400'}`}>
                            {row.them
                              ? <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                              : <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            }
                          </span>
                          <span className="text-xs font-medium text-gray-400">{row.themText}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hidden cost callout */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12">
              <span className="section-tag mb-3">The Real Numbers</span>
              <h2 className="section-title mb-5">The hidden cost of subscription alarms</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>A typical subscription alarm from a major provider costs around <strong className="text-gray-900">£45/month</strong>. Over 10 years, that's <strong className="text-brand">£5,400</strong> — and you still don't own the equipment.</p>
                <p>With Sutton Security, you pay once for a genuinely better system (Ajax is rated #1 globally), and <strong className="text-gray-900">never pay again</strong> for the alarm itself. The maths speak for themselves.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white" />
        </div>
        <div className="container-xl relative z-10 max-w-xl">
          <AnimatedSection>
            <h2 className="text-4xl font-black text-white mb-4">Make the switch today</h2>
            <p className="text-white/75 mb-8">Free survey. Free quote. Zero commitment.</p>
            <motion.button onClick={onQuoteClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="bg-white text-brand px-8 py-4 rounded-full font-black text-base shadow-xl">
              Start Your Free Quote
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
