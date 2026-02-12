'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Kiralama süresi ne kadardır?',
    answer: 'Standart kiralama süresi 3 gündür. Gelinlik almadan 1 gün öncesi, gelinlik günü ve sonrası olmak üzere. Daha uzun süre kiralamak istiyorsanız bize başvurabilirsiniz.'
  },
  {
    id: 2,
    question: 'Özel tasarım gelinlik için ne kadar zaman gereklidir?',
    answer: 'Özel tasarım gelinlikler için ortalama 4-6 hafta süre gerekmektedir. Siparişin aciliyet durumuna göre bu süre değişebilir. Randevu alıp tasarımcımızla konuşabilirsiniz.'
  },
  {
    id: 3,
    question: 'Ölçü alma işlemi ücretsiz mi?',
    answer: 'Evet, ilk ölçü alma işlemi ve konsültasyon tamamen ücretsizdir. Sadece ürün seçimi veya özel tasarım hizmetini kullandığınızda ücret ödersiniz.'
  },
  {
    id: 4,
    question: 'Kiralanan gelinlik iade etmeden önce temizlik gerekli mi?',
    answer: 'Hayır, kiralanan gelinliklerin temizliği bizim tarafımızdan yapılır. Gelinliği istediğiniz şekilde iade edebilirsiniz. Ancak ağır hasar durumunda hasar bedeli alınabilir.'
  },
  {
    id: 5,
    question: 'Alterasyonlar (boy, uyum vb.) yapılabilir mi?',
    answer: 'Evet, hem kiralama hem de satış gelinlikleri için alterasyon hizmeti sunmaktayız. Tasarımcımızla görüşerek uygun çözümleri belirleyebilirsiniz.'
  },
  {
    id: 6,
    question: 'Ödeme seçenekleri nelerdir?',
    answer: 'Kredi kartı, banka transferi ve nakit ödeme seçenekleri mevcut. Özel tasarım gelinlikler için %50 peşinat, %50 teslim sırasında ödeme yapılır.'
  }
]

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold mb-6">Sık Sorulan Sorular</h2>
          <p className="text-gray-600 text-lg">
            Marlenqa Couture hakkında merak edilen soruların cevaplarını bulabilirsiniz.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-rose flex-shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="px-6 py-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
