'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold mb-6">Hakkımızda</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
             Dijital Showroom, gelinlik tasarımında yüksek kalite ve özel tasarımın simgesidir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
           <img
              src="/shoowroom.png"
              alt="Showroom'umuzu Ziyaret Edin"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed text-lg">
              2010 yılında kurulan Dijital Showroom, gelinlik kiralama ve özel tasarım hizmetlerinde İstanbul'un en saygın markalarından biridir.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Deneyimli tasarımcılarımız ve usta ustalarımız, her gelin için benzersiz ve kişiye özel çözümler sunmaktadır. Geleneksel el işçiliği ile modern tasarımın birleşimi, Dijital Showroom'un" imza stilini oluşturur.
            </p>

            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4">
                <span className="text-2C3E50 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Premium Koleksiyon</h4>
                  <p className="text-gray-600">En iyi kumaş ve tasarımlarla oluşturulan koleksiyon</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2C3E50 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Özel Tasarım Hizmeti</h4>
                  <p className="text-gray-600">Hayalinizdeki gelinliği tasarlayabiliriz</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2C3E50 text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Profesyonel Danışmanlık</h4>
                  <p className="text-gray-600">Deneyimli tasarımcılarımız size rehberlik edecek</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
