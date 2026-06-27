import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { getPostBySlug, posts } from '../data/posts'

export default function BlogPost({ onQuoteClick }) {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = posts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-14 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="container-xl relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-5">
            <Link to="/blog" className="text-white/50 hover:text-white/80 text-sm font-medium transition-colors">
              Blog
            </Link>
            <svg className="w-3.5 h-3.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.color}`}>{post.category}</span>
          </div>
          <motion.h1
            className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            {post.title}
          </motion.h1>
          <motion.div
            className="flex items-center gap-4 text-white/50 text-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          >
            <span>{post.date}</span>
            <span>|</span>
            <span>{post.readTime}</span>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-3xl">
          <AnimatedSection>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 pb-10 border-b border-gray-100 font-medium">
              {post.excerpt}
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {post.body.map((section, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <h2 className="text-xl font-black text-gray-900 mb-3">{section.heading}</h2>
                <p className="text-gray-500 leading-relaxed">{section.text}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* Author / CTA card */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="flex-1">
                  <p className="font-black text-gray-900 text-base mb-0.5">Sutton Security Services</p>
                  <p className="text-gray-400 text-sm mb-4">Ajax Certified Installer, UK</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We install professionally designed Ajax alarm systems for homes and businesses across the UK. No subscriptions, no monthly fees. Get in touch for a free survey.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={onQuoteClick}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                >
                  Get a Free Quote
                </motion.button>
                <a href="tel:07404636800"
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-bold text-sm hover:border-gray-300 transition-colors">
                  Call 07404 636800
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related articles */}
      <section className="section-pad bg-gray-50 border-t border-gray-100">
        <div className="container-xl max-w-3xl">
          <AnimatedSection className="mb-8">
            <h2 className="text-xl font-black text-gray-900">More articles</h2>
          </AnimatedSection>
          <div className="divide-y divide-gray-200">
            {related.map(p => (
              <AnimatedSection key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="group flex items-start gap-4 py-5">
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5 ${p.color}`}>
                    {p.category}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-gray-900 text-base group-hover:text-brand transition-colors">{p.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{p.readTime} &middot; {p.date}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-brand transition-colors flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/blog" className="text-brand font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all w-fit">
              View all articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
