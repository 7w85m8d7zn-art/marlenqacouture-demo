'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Dijital Showroom</h3>
            <p className="text-gray-400">Premium bridal couture markası</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/koleksiyonlar" className="hover:text-white transition-colors">Gelinlik Kiralama</Link></li>
              <li><Link href="/koleksiyonlar" className="hover:text-white transition-colors">Abiye Kiralama</Link></li>
              <li><Link href="/koleksiyonlar" className="hover:text-white transition-colors">Nişanlık Kiralama</Link></li>
              <li><Link href="/koleksiyonlar" className="hover:text-white transition-colors">Kınalık Kiralama</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Bilgi</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">SSS</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <p className="text-gray-400 text-sm mb-3">
              İstanbul, Üsküdar
            </p>
            <a href="https://wa.me/905317745680" className="text-gray-400 hover:text-white transition-colors font-medium text-sm">
              WhatsApp: 0530 624 93 82
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Dijital Showroom. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
