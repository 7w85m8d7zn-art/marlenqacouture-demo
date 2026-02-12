export interface Product {
  id: string
  slug: string
  name: string
  category: 'kiralama' | 'ozel-dikim'
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
    slug: 'tul-prenses-gelinlik',
    name: 'Tül Prenses Gelinlik',
    category: 'kiralama',
    priceFrom: 4500,
    images: [
      'https://images.unsplash.com/photo-1665783126947-8c98c7b7ac72?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1572364377536-459335b1bdb7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    colors: ['Beyaz', 'Krem'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['Kiralama', 'Klasik'],
    description: 'Premium tül kumaştan yapılmış, zarif prenses kesim gelinlik. Mütevazı but detayları ile moderne sahip.',
  },
  {
    id: '2',
    slug: 'modern-minimal-gelinlik',
    name: 'Modern Minimal Gelinlik',
    category: 'ozel-dikim',
    priceFrom: 8000,
    images: [
      'https://images.unsplash.com/photo-1770757588092-6fd47f8a2985?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyaWRhbCUyMGdvd258ZW58MHx8MHx8fDI%3D',
      'https://images.unsplash.com/photo-1759054713286-713c4ceeb5ba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyaWRhbCUyMGdvd258ZW58MHx8MHx8fDI%3D',
    ],
    colors: ['Beyaz', 'Krem', 'Pudra'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    tags: ['Özel Dikim', 'Minimal'],
    description: 'Çağdaş tasarımla minimal ve şık bir görünüm sunuyor. Sade detaylar ve kusursuz kesim.',
  },
  {
    id: '3',
    slug: 'dantel-gul-gelinlik',
    name: 'Dantel Gül Gelinlik',
    category: 'kiralama',
    priceFrom: 5500,
    images: [
      'https://images.unsplash.com/photo-1572364373428-d8b405100d0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyaWRhbCUyMGdvd258ZW58MHx8MHx8fDI%3D',
      'https://images.unsplash.com/photo-1762687379484-81085b94c512?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyaWRhbCUyMGdvd258ZW58MHx8MHx8fDI%3D',
    ],
    colors: ['Beyaz', 'Krem'],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['Kiralama', 'Romantik'],
    description: 'Zarif dantel işlemesiyle bezeli, romantik ruhu yakalamış bir tasarım.',
  },
  
  {
    id: '5',
    slug: 'bohem-stil-gelinlik',
    name: 'Bohem Stil Gelinlik',
    category: 'kiralama',
    priceFrom: 4800,
    images: [
      'https://images.unsplash.com/photo-1767961054380-b53c469a8b2f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJyaWRhbCUyMGdvd258ZW58MHx8MHx8fDI%3D',
      'https://images.unsplash.com/photo-1770757588092-6fd47f8a2985?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyaWRhbCUyMGdvd258ZW58MHx8MHx8fDI%3D',
    ],
    colors: ['Krem', 'Fildişi'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    tags: ['Kiralama', 'Bohem'],
    description: 'Kırsal ve serbestçi vibes ile bohem ruhunu sergileyen, kapalı tasarım.',
  },
  {
    id: '6',
    slug: 'ince-ipek-gelinlik',
    name: 'İnce İpek Gelinlik',
    category: 'ozel-dikim',
    priceFrom: 9500,
    images: [
      'https://images.unsplash.com/photo-1759893362613-8bb8bb057af1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyaWRhbCUyMGdvd258ZW58MHx8MHx8fDI%3D',
      'https://images.unsplash.com/photo-1620147148825-589c4f1bb2a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyaWRhbCUyMGdvd258ZW58MHx8MHx8fDI%3D',
    ],
    colors: ['Beyaz', 'Krem', 'Peach'],
    sizes: ['XS', 'S', 'M', 'L'],
    tags: ['Özel Dikim', 'Sofistike'],
    description: 'Premium ipek kumaştan üretilmiş, sofistike ve rahat bir tasarım.',
  },
  

  {
    id: '9',
    slug: 'v-yaka-gelinlik',
    name: 'V-Yaka Gelinlik',
    category: 'kiralama',
    priceFrom: 5200,
    images: [
      'https://images.unsplash.com/photo-1620147148825-589c4f1bb2a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyaWRhbCUyMGdvd258ZW58MHx8MHx8fDI%3D',
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZyUyMGdvd258ZW58MHx8MHx8fDI%3D',
    ],
    colors: ['Beyaz', 'Krem'],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['Kiralama', 'V-Yaka'],
    description: 'Derin V-yakalı, hafif ve rahat bir gelinlik modeli.',
  },  
]
