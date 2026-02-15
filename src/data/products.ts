export interface Product {
  id: string
  slug: string
  name: string
  category: 'kesim' | 'renklendirme' | 'bakim' | 'tasarim'
  priceFrom: number
  images: string[]
  colors: string[]
  sizes: string[]
  tags: string[]
  description: string
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'profesyonel-sac-kesimi',
    name: 'Profesyonel Saç Kesimi',
    category: 'kesim',
    priceFrom: 450,
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&auto=format&fit=crop&q=60'
    ],
    colors: ['Doğal', 'Katlı', 'Modern'],
    sizes: ['Standart'],
    tags: ['Kesim', 'Stil'],
    description: 'Yüz şeklinize uygun profesyonel saç kesimi ve stil danışmanlığı hizmeti.'
  },
  {
    id: '2',
    slug: 'balayage-renklendirme',
    name: 'Balayage & Saç Renklendirme',
    category: 'renklendirme',
    priceFrom: 1800,
    images: [
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1595475038665-7d5a6b8f7f28?w=900&auto=format&fit=crop&q=60'
    ],
    colors: ['Kumral', 'Platin', 'Karamel', 'Soğuk Ton'],
    sizes: ['Kısa Saç', 'Orta Saç', 'Uzun Saç'],
    tags: ['Boya', 'Balayage'],
    description: 'Modern renk teknikleri ile doğal geçişli balayage ve profesyonel renklendirme hizmeti.'
  },
  {
    id: '3',
    slug: 'keratin-sac-bakimi',
    name: 'Keratin Saç Bakımı',
    category: 'bakim',
    priceFrom: 1200,
    images: [
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=900&auto=format&fit=crop&q=60'
    ],
    colors: ['Tüm Saç Tipleri'],
    sizes: ['Standart'],
    tags: ['Bakım', 'Keratin'],
    description: 'Saçı güçlendiren, parlaklık ve pürüzsüzlük sağlayan profesyonel keratin bakım uygulaması.'
  },
  {
    id: '4',
    slug: 'fon-ve-sekillendirme',
    name: 'Fön & Şekillendirme',
    category: 'kesim',
    priceFrom: 300,
    images: [
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=900&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&auto=format&fit=crop&q=60'
    ],
    colors: ['Düz', 'Dalgalı', 'Hacimli'],
    sizes: ['Kısa', 'Orta', 'Uzun'],
    tags: ['Fön', 'Şekil'],
    description: 'Özel günler veya günlük kullanım için profesyonel fön ve saç şekillendirme hizmeti.'
  },
  {
    id: '5',
    slug: 'topuz-ve-ozel-sac-tasarimi',
    name: 'Topuz & Özel Saç Tasarımı',
    category: 'tasarim',
    priceFrom: 950,
    images: [
      'https://images.unsplash.com/photo-1523264766116-1e09b3145b84?w=900&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=900&auto=format&fit=crop&q=60'
    ],
    colors: ['Doğal', 'Romantik', 'Modern'],
    sizes: ['Standart'],
    tags: ['Topuz', 'Özel Gün'],
    description: 'Düğün, nişan veya özel davetler için kişiye özel profesyonel saç tasarımı.'
  }
]
