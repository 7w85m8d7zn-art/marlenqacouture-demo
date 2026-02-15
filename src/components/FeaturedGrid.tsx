'use client'

import { useCallback } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Product } from '@/data/products'

interface FeaturedGridProps {
  products: Product[]
}

export function FeaturedGrid({ products }: FeaturedGridProps) {
  const getWhatsAppHref = useCallback((serviceName: string) => {
    const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, '')
    const msg = encodeURIComponent(
      `Merhaba, ${serviceName} hizmeti hakkında bilgi almak istiyorum.\nFiyat, süre ve müsaitlik paylaşabilir misiniz?`
    )

    // If a number is not configured, fall back to contact page
    if (!number) return `/iletisim?msg=${msg}`

    return `https://wa.me/${number}?text=${msg}`
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Öne Çıkan Hizmetler
          </h2>
          <p className="text-gray-600 text-lg">
            Saç kesimi, renklendirme ve bakım hizmetlerimizden öne çıkanlar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/urun/${product.slug}`}>
                <div className="group cursor-pointer relative">
                  {/* Image Container */}
                  <div className="relative h-96 overflow-hidden rounded-lg mb-4 bg-gray-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* WhatsApp Quick Action */}
                    <a
                      href={getWhatsAppHref(product.name)}
                      target={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? '_blank' : undefined}
                      rel={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? 'noreferrer' : undefined}
                      onClick={(e) => {
                        // Prevent the parent card Link navigation
                        e.preventDefault()
                        e.stopPropagation()
                        const href = getWhatsAppHref(product.name)
                        if (href.startsWith('http')) {
                          window.open(href, '_blank', 'noopener,noreferrer')
                        } else {
                          window.location.href = href
                        }
                      }}
                      className="absolute left-4 bottom-4 z-10"
                      aria-label="WhatsApp'tan sor"
                    >
                      {/* Desktop hover bubble */}
                      <span className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-2 text-xs font-semibold text-gray-900 shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M19.11 17.44c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.16.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.55-.33z"
                          />
                          <path
                            fill="currentColor"
                            d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.12.56 4.19 1.62 6.02L4 29l8.14-1.6A11.93 11.93 0 0 0 16.02 27c6.62 0 12-5.38 12-12S22.64 3 16.02 3zm0 21.9c-1.78 0-3.52-.48-5.03-1.4l-.36-.21-4.83.95.99-4.7-.24-.38a9.88 9.88 0 0 1-1.5-5.16c0-5.46 4.44-9.9 9.9-9.9 5.46 0 9.9 4.44 9.9 9.9 0 5.46-4.44 9.9-9.9 9.9z"
                          />
                        </svg>
                        WhatsApp'tan Sor
                      </span>

                      {/* Mobile always-visible pill */}
                      <span className="md:hidden inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-2 text-xs font-semibold text-gray-900 shadow-lg">
                        <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M19.11 17.44c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.16.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.55-.33z"
                          />
                          <path
                            fill="currentColor"
                            d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.12.56 4.19 1.62 6.02L4 29l8.14-1.6A11.93 11.93 0 0 0 16.02 27c6.62 0 12-5.38 12-12S22.64 3 16.02 3zm0 21.9c-1.78 0-3.52-.48-5.03-1.4l-.36-.21-4.83.95.99-4.7-.24-.38a9.88 9.88 0 0 1-1.5-5.16c0-5.46 4.44-9.9 9.9-9.9 5.46 0 9.9 4.44 9.9 9.9 0 5.46-4.44 9.9-9.9 9.9z"
                          />
                        </svg>
                        Sor
                      </span>
                    </a>
                    {/* Tag Overlay */}
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-xs font-semibold">
                      {product.category === 'kesim'
                        ? 'Kesim & Şekillendirme'
                        : product.category === 'renklendirme'
                          ? 'Renk & Balayage'
                          : product.category === 'bakim'
                            ? 'Saç Bakımı'
                            : 'Özel Saç Tasarımı'}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-rose transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description.substring(0, 60)}...
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Hizmet başlangıç fiyatı</p>
                      <p className="text-2xl font-serif font-bold">₺{product.priceFrom.toLocaleString('tr-TR')}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center"
                    >
                      →
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/koleksiyonlar">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Tüm Hizmetleri Gör
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  )
}
