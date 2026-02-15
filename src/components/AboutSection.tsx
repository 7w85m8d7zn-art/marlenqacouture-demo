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
             Dijital Showroom, kadın kuaför ve güzellik hizmetlerinde yüksek kalite ve modern stilin adresidir.
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
              src="/salon.png"
              alt="Salonumuzu Ziyaret Edin"
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
              2010 yılında kurulan Dijital Showroom, kadın saç kesimi, renklendirme, fön ve bakım hizmetlerinde İstanbul'un en sevilen salonlarından biridir.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Deneyimli ekibimiz; saç kesimi, boya–balayage, keratin bakımı ve profesyonel saç tasarımıyla her müşteriye yüz hatlarına ve tarzına uygun, kişiye özel bir görünüm sunar. Kaliteli ürünler ve hijyen odaklı yaklaşımımız, Dijital Showroom'un imza stilini oluşturur.
            </p>

            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4">
                <span className="text-[#2C3E50] text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Profesyonel Saç Bakımı</h4>
                  <p className="text-gray-600">Saçınıza uygun bakım protokolleri ve kaliteli ürünlerle sağlıklı görünüm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#2C3E50] text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Renk & Balayage</h4>
                  <p className="text-gray-600">Doğal geçişler, modern tonlar ve size özel renk danışmanlığı</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#2C3E50] text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Stil Danışmanlığı</h4>
                  <p className="text-gray-600">Yüz şeklinize ve tarzınıza uygun kesim ve saç tasarımı önerileri</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
