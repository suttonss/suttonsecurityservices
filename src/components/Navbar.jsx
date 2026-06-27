import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/products', label: 'Alarm Products' },
  { path: '/why-choose-us', label: 'Why Choose Us' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar({ onQuoteClick }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()
  const isHome = loc.pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => { setOpen(false); setScrolled(false) }, [loc.pathname])

  useEffect(() => {
    if (!isHome) { setScrolled(false); return }
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (path) => loc.pathname === path

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          transparent
            ? 'bg-transparent'
            : 'bg-white shadow-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20">

          {/* Logo — white when transparent, natural colour when solid */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Sutton Security Services"
              className={`h-9 lg:h-11 w-auto transition-all duration-300 ${transparent ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <Link key={l.path} to={l.path}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative group
                  ${isActive(l.path)
                    ? 'text-brand'
                    : transparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                {l.label}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-brand transition-all duration-300
                  ${isActive(l.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:07404636800"
              className={`text-sm font-semibold transition-colors ${transparent ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              07404 636800
            </a>
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onQuoteClick}
              className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-dark transition-colors"
              style={{ boxShadow: '0 4px 20px rgba(227,27,35,0.3)' }}
            >
              Start Quote
            </motion.button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-[7px] flex-shrink-0"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {[
              open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 },
              open ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 },
              open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 },
            ].map((anim, i) => (
              <motion.span
                key={i}
                className={`block w-6 h-[2px] rounded-full transition-colors duration-300 ${transparent ? 'bg-white' : 'bg-gray-700'}`}
                animate={anim}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ backgroundColor: '#0d0d0d' }}
          >
            <div className="flex flex-col h-full px-6 pt-24 pb-10 overflow-y-auto">
              <nav className="flex-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-white/10"
                  >
                    <Link
                      to={l.path}
                      className={`block py-5 text-2xl font-black tracking-tight transition-colors ${
                        isActive(l.path) ? 'text-brand' : 'text-white hover:text-brand'
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: links.length * 0.05 + 0.1, duration: 0.3 }}
                className="mt-8 space-y-4 pt-4"
              >
                <a
                  href="tel:07404636800"
                  className="flex items-center gap-3 text-gray-400 text-base font-medium hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 flex-shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07404 636800
                </a>
                <button
                  onClick={() => { setOpen(false); onQuoteClick() }}
                  className="w-full bg-brand text-white py-4 rounded-2xl text-lg font-bold hover:bg-brand-dark transition-colors"
                  style={{ boxShadow: '0 4px 20px rgba(227,27,35,0.35)' }}
                >
                  Start Your Free Quote
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
