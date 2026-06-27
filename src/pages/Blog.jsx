import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, staggerItem } from '../components/AnimatedSection'
import { posts } from '../data/posts'

export default function Blog() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #e31b23 0%, #8b0000 55%, #0d0d0d 100%)' }}>
        <div className="absolute inset-0 bg-cover bg-right opacity-10" style={{ backgroundImage: 'url(/alarm-home.png)' }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />
        </div>
        <AnimatedSection className="container-xl relative z-10">
          <span className="text-white/60 font-bold tracking-widest uppercase text-xs mb-3 block">Knowledge Base</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 leading-tight">Blog &amp; Advice</h1>
          <p className="text-white/80 text-lg">Honest, practical security advice from professional installers. No fluff, no sales pitch.</p>
        </AnimatedSection>
      </section>

      {/* Featured article */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="container-xl max-w-4xl">
          <AnimatedSection>
            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full ${featured.color}`}>{featured.category}</span>
                <span className="text-gray-300 text-xs">Featured</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight mb-4 group-hover:text-brand transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-5 max-w-2xl">{featured.excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">{featured.date}</span>
                <span className="text-gray-200">|</span>
                <span className="text-gray-400 text-sm">{featured.readTime}</span>
                <span className="text-brand text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all ml-2">
                  Read article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Article list */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl">
          <AnimatedSection className="mb-8">
            <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase">All Articles</h2>
          </AnimatedSection>
          <StaggerContainer className="divide-y divide-gray-100">
            {rest.map(post => (
              <motion.article key={post.slug} variants={staggerItem}>
                <Link to={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row sm:items-start gap-4 py-7">
                  <div className="sm:w-28 flex-shrink-0 pt-0.5">
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${post.color}`}>{post.category}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-black text-gray-900 text-lg leading-snug mb-2 group-hover:text-brand transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{post.date}</span>
                      <span className="text-gray-200">|</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="sm:pt-1 flex-shrink-0">
                    <span className="inline-flex items-center gap-1 text-brand text-sm font-bold group-hover:gap-2 transition-all">
                      Read
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-gray-100 bg-gray-50">
        <div className="container-xl max-w-xl">
          <AnimatedSection>
            <p className="text-brand font-bold tracking-widest uppercase text-xs mb-3">Ready to Act?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Get expert advice on your property</h2>
            <p className="text-gray-500 mb-8">Book a free survey and we'll tell you exactly what you need and what you don't.</p>
            <a href="https://wa.me/447404636800" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Chat with an Expert
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
