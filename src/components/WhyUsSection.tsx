'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '✨',
    title: 'Premium Kalite',
    description: 'Yüksek kaliteli kumaş ve işçiliğe sahip seçkin gelinlikler'
  },
  {
    icon: '👗',
    title: 'Geniş Seçim',
    description: 'Her tarzdan, her bedenden gelinlik modelleri'
  },
  {
    icon: '💍',
    title: 'Kişiselleştirme',
    description: 'Özel tasarım ve ölçü alımı hizmetleri'
  },
]

export function WhyUsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Neden Dijital Showroom?
          </h2>
          <p className="text-gray-600 text-lg">
            Binlerce gelin bize güvendi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
