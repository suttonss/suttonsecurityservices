import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import QuoteModal from './components/QuoteModal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import WhyChooseUs from './pages/WhyChooseUs'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  const openQuote = () => setQuoteOpen(true)
  const closeQuote = () => setQuoteOpen(false)

  return (
    <>
      <Navbar onQuoteClick={openQuote} />
      <Routes location={location}>
        <Route path="/" element={<Home onQuoteClick={openQuote} />} />
        <Route path="/about" element={<About onQuoteClick={openQuote} />} />
        <Route path="/services" element={<Services onQuoteClick={openQuote} />} />
        <Route path="/products" element={<Products onQuoteClick={openQuote} />} />
        <Route path="/why-choose-us" element={<WhyChooseUs onQuoteClick={openQuote} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost onQuoteClick={openQuote} />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteOpen} onClose={closeQuote} />
    </>
  )
}
