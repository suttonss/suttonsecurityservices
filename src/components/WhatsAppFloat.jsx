import { motion } from 'framer-motion'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/447553089659"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
      style={{ backgroundColor: '#25d366' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          animation: 'waPulse 2.5s ease-out infinite',
          backgroundColor: '#25d366',
        }}
      />
      <svg viewBox="0 0 448 512" className="w-7 h-7 relative z-10" fill="white">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.8 0-222.8 100-222.9 222.9 0 39.2 10.2 77.5 29.6 111.2L0 480l116.2-30.5c32.4 17.7 68.9 27 107.7 27h.1c122.8 0 222.8-100 222.9-222.9 0-59.4-23.1-115.2-66-156.5zM224 438.7h-.1c-34.6 0-68.5-9.3-98.2-26.8l-7-4.2-68.9 18.1 18.4-67.2-4.6-7c-17.5-27.8-26.8-59.8-26.8-93.1C36.8 153.1 121.9 68 224 68c50.8 0 98.5 19.8 134.4 55.7 35.9 35.9 55.6 83.7 55.6 134.4-.1 104.6-85.2 183.1-190 183.1zm101.7-138.2c-5.6-2.8-33.1-16.3-38.2-18.2-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18.2-17.6 21.9-3.2 3.7-6.5 4.2-12.1 1.4-33.1-16.5-54.8-29.5-76.6-66.7-5.8-10 5.8-9.3 16.5-30.9 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.7 57.4c2.8 3.7 39.1 59.7 94.8 83.7 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 33.1-13.5 37.8-26.5 4.6-13 4.6-24.1 3.2-26.5-1.4-2.3-5.1-3.7-10.7-6.5z"/>
      </svg>
    </motion.a>
  )
}
