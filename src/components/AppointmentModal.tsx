'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    
    // Send WhatsApp message
    const message = encodeURIComponent(
      `Merhaba, randevu almak istiyorum.\n\nAdı: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\nTarih: ${formData.date}\nSaat: ${formData.time}`
    )
    window.open(`https://wa.me/905317745680?text=${message}`, '_blank')

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', date: '', time: '' })
      setIsSubmitted(false)
      onClose()
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bg-white rounded-lg shadow-2xl max-w-2xl z-50 mx-auto"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '95%',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="p-10">
              {!isSubmitted ? (
                <>
                  <h2 className="text-4xl font-serif font-bold mb-3">Randevu Al</h2>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    Lütfen bilgilerinizi girin. Hemen size dönüş yapacağız.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2.5 text-gray-800">Ad Soyad</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Adınız"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2.5 text-gray-800">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ornek@email.com"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2.5 text-gray-800">Telefon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="0530 XXX XX XX"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2.5 text-gray-800">Tarih</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2.5 text-gray-800">Saat</label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gray-900 text-white py-3.5 rounded-md font-semibold text-base hover:bg-gray-800 transition-colors mt-8"
                    >
                      WhatsApp'tan Gönder
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-serif font-bold mb-2">Başarılı!</h3>
                  <p className="text-gray-600">
                    Randevu talebiniz WhatsApp'tan iletildi. Hemen size dönüş yapacağız.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
