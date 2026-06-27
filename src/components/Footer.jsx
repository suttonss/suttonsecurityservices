import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  { path: '/services', label: 'Wireless Ajax Installation' },
  { path: '/products', label: 'Ajax Alarm Products' },
  { path: '/why-choose-us', label: 'No Subscription Alarms' },
  { path: '/blog', label: 'Blog & Advice' },
]

const company = [
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
  { path: '/why-choose-us', label: 'Why Choose Us' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="Sutton Security Services" className="h-10 w-auto brightness-0 invert mb-5" />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional wireless Ajax alarm installation for homes and businesses across the UK.
              No subscriptions, no contracts. Just security.
            </p>
            <p className="text-gray-600 text-xs">
              Sutton Security Services (trading name of R &amp; U Services Limited)
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-bold tracking-wider uppercase text-xs mb-5">Services</p>
            <ul className="space-y-3">
              {services.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-bold tracking-wider uppercase text-xs mb-5">Company</p>
            <ul className="space-y-3">
              {company.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold tracking-wider uppercase text-xs mb-5">Get In Touch</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:07404636800" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07404 636800
                </a>
              </li>
              <li>
                <a href="mailto:contact@suttonss.co.uk" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@suttonss.co.uk
                </a>
              </li>
              <li>
                <a href="https://wa.me/447404636800" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#25d366] flex-shrink-0" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.8 0-222.8 100-222.9 222.9 0 39.2 10.2 77.5 29.6 111.2L0 480l116.2-30.5c32.4 17.7 68.9 27 107.7 27h.1c122.8 0 222.8-100 222.9-222.9 0-59.4-23.1-115.2-66-156.5zM224 438.7h-.1c-34.6 0-68.5-9.3-98.2-26.8l-7-4.2-68.9 18.1 18.4-67.2-4.6-7c-17.5-27.8-26.8-59.8-26.8-93.1C36.8 153.1 121.9 68 224 68c50.8 0 98.5 19.8 134.4 55.7 35.9 35.9 55.6 83.7 55.6 134.4-.1 104.6-85.2 183.1-190 183.1z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="https://facebook.com/suttonsecurity" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1877f2] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.04 3.69 9.22 8.5 9.94v-7.03H7.95v-2.91h2.55V9.85c0-2.52 1.5-3.91 3.79-3.91 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.57v1.88h2.79l-.45 2.91h-2.34V22c4.81-.72 8.37-4.9 8.37-9.94z"/>
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Sutton Security Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
