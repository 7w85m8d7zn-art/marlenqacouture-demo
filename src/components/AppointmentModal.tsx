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
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Close the modal and show a lightweight thank-you overlay.
    setIsSubmitted(true)
    onClose()
    setShowThankYou(true)

    // Reset form and hide thank-you after a short delay.
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', date: '', time: '' })
      setIsSubmitted(false)
      setShowThankYou(false)
    }, 2500)
  }

  return (
    <AnimatePresence>
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
        >
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            initial={{ scale: 0.96, y: 8, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl p-8 text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">Teşekkürler!</h3>
            <p className="text-gray-600 leading-relaxed">
              Randevu talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </motion.div>
        </motion.div>
      )}
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

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl"
              style={{ maxHeight: 'calc(100vh - 3rem)', overflowY: 'auto' }}
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
                        Randevu Talebini Gönder
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
                      Randevu talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
