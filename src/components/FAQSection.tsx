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
    question: 'Randevu almak zorunlu mu?',
    answer:
      'Yoğunluk durumuna göre değişir. En iyi deneyim için randevu öneririz. WhatsApp üzerinden hızlıca saat ayarlayabilir veya salonu arayabilirsiniz.'
  },
  {
    id: 2,
    question: 'Saç boyama / balayage işlemi ne kadar sürer?',
    answer:
      'İşlemin süresi saçın uzunluğu, yoğunluğu ve istenen tekniğe göre değişir. Ortalama 2-4 saat arası sürer. Net süre için fotoğraf paylaşarak ücretsiz ön değerlendirme alabilirsiniz.'
  },
  {
    id: 3,
    question: 'Keratin bakımı ve saç botoksu farkı nedir?',
    answer:
      'Keratin bakımı saç telini güçlendirmeye ve kabarmayı azaltmaya odaklanır. Saç botoksu ise nem, parlaklık ve yumuşaklık kazandıran yoğun bir bakım protokolüdür. Saç tipinize göre en uygun seçeneği birlikte belirliyoruz.'
  },
  {
    id: 4,
    question: 'Fön ve şekillendirme için saçım temiz olmalı mı?',
    answer:
      'Tercihen temiz saç ile gelmeniz önerilir. İsterseniz salonda yıkama + fön paketi de alabilirsiniz. Saç tipinize uygun ürünlerle işlemi tamamlıyoruz.'
  },
  {
    id: 5,
    question: 'Saç kesimi öncesi danışmanlık yapıyor musunuz?',
    answer:
      'Evet. Yüz şekliniz, saç yapınız ve kullanım alışkanlıklarınıza göre size en uygun kesimi öneriyoruz. İsterseniz referans fotoğraflarınızı getirerek birlikte karar verebiliriz.'
  },
  {
    id: 6,
    question: 'Ödeme seçenekleri nelerdir?',
    answer:
      'Nakit, kredi/banka kartı ve banka transferi ile ödeme yapabilirsiniz. Paket hizmetlerde dönemsel kampanyalarımız olabiliyor; güncel fiyat ve kampanyalar için bize ulaşın.'
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
            Kadın kuaför ve bakım hizmetlerimiz hakkında merak edilen soruların cevaplarını burada bulabilirsiniz.
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
