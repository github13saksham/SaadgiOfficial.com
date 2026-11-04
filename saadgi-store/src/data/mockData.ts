export type Product = {
  id: string
  name: string
  slug: string
  description: string
  price: number
  mrp: number
  category: string
  collection: string
  image: string
  gallery: string[]
  sizes: string[]
  colors: string[]
  stock: number
  bestseller: boolean
  newArrival: boolean
  featured: boolean
  rating: number
  reviews: number
  fabric: string
  care: string
  badge?: string
}

export const announcementMessages = [
  'Discover the latest SAADGI collection.',
  'Complimentary shipping on qualifying orders.',
  'New styles just arrived.',
]

export const categories = [
  {
    id: 'festive',
    name: 'Festive Wear',
    description: 'Rich silhouettes for celebrations.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'everyday',
    name: 'Everyday Wear',
    description: 'Effortless elegance for daily rituals.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cotton',
    name: 'Cotton Suits',
    description: 'Breathable textures in timeless tones.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'party',
    name: 'Party Wear',
    description: 'Statement pieces for memorable evenings.',
    image:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'traditional',
    name: 'Traditional Suits',
    description: 'Heritage-inspired craftsmanship.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'premium',
    name: 'Premium Collection',
    description: 'Handpicked luxury essentials.',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
]

export const products: Product[] = [
  {
    id: 'p-1',
    name: 'Ivory Grace Suit',
    slug: 'ivory-grace-suit',
    description:
      'A softly structured suit in premium linen-cotton blend, tailored for graceful everyday elegance.',
    price: 4999,
    mrp: 6999,
    category: 'Everyday Wear',
    collection: 'The Premium Edit',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Taupe', 'Champagne'],
    stock: 18,
    bestseller: true,
    newArrival: true,
    featured: true,
    rating: 4.8,
    reviews: 126,
    fabric: 'Linen Cotton Blend',
    care: 'Dry clean recommended. Store in a garment bag.',
    badge: 'New',
  },
  {
    id: 'p-2',
    name: 'Rosewood Heritage Set',
    slug: 'rosewood-heritage-set',
    description:
      'A refined festive ensemble with subtle texture and a tailored courtly silhouette.',
    price: 6799,
    mrp: 8999,
    category: 'Festive Wear',
    collection: 'Festive Edit',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Rosewood', 'Mughlai', 'Saffron'],
    stock: 10,
    bestseller: true,
    newArrival: false,
    featured: false,
    rating: 4.7,
    reviews: 98,
    fabric: 'Silk Blend',
    care: 'Gentle hand wash or dry clean.',
    badge: 'Bestseller',
  },
  {
    id: 'p-3',
    name: 'Pearl Thread Kurta',
    slug: 'pearl-thread-kurta',
    description:
      'Lightweight, elegant, and easy to style with statement jewellery for festive evenings.',
    price: 3899,
    mrp: 5799,
    category: 'Cotton Suits',
    collection: 'Everyday Elegance',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Pearl', 'Sand', 'Blush'],
    stock: 22,
    bestseller: false,
    newArrival: true,
    featured: true,
    rating: 4.9,
    reviews: 154,
    fabric: 'Cotton Silk',
    care: 'Machine wash cold, line dry.',
    badge: 'New',
  },
  {
    id: 'p-4',
    name: 'Noor Evening Ensemble',
    slug: 'noor-evening-ensemble',
    description:
      'A statement party look crafted in fluid textures with a modern festive finish.',
    price: 7999,
    mrp: 10499,
    category: 'Party Wear',
    collection: 'The Festive Edit',
    image:
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cocoa', 'Champagne', 'Deep Wine'],
    stock: 8,
    bestseller: true,
    newArrival: false,
    featured: true,
    rating: 4.8,
    reviews: 112,
    fabric: 'Georgette',
    care: 'Dry clean only.',
    badge: 'Bestseller',
  },
  {
    id: 'p-5',
    name: 'Saffron Courtyard Set',
    slug: 'saffron-courtyard-set',
    description:
      'Rich, regal, and intricately detailed with a graceful fit designed for celebrations.',
    price: 7299,
    mrp: 9399,
    category: 'Traditional Suits',
    collection: 'Timeless Traditions',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    ],
    sizes: ['M', 'L', 'XL'],
    colors: ['Saffron', 'Moss', 'Terracotta'],
    stock: 12,
    bestseller: false,
    newArrival: true,
    featured: true,
    rating: 4.9,
    reviews: 88,
    fabric: 'Silk Blend with Embroidery',
    care: 'Dry clean recommended.',
    badge: 'New',
  },
  {
    id: 'p-6',
    name: 'Eden Luxe Suit',
    slug: 'eden-luxe-suit',
    description:
      'A premium designer silhouette with tailored sophistication and a luxe finish.',
    price: 8999,
    mrp: 12000,
    category: 'Premium Collection',
    collection: 'The Premium Edit',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ecru', 'Cafe', 'Mocha'],
    stock: 6,
    bestseller: true,
    newArrival: false,
    featured: true,
    rating: 5,
    reviews: 210,
    fabric: 'Premium Rayon',
    care: 'Hand wash cold; dry in shade.',
    badge: 'Premium',
  },
]

export const collections = [
  {
    id: 'c-1',
    name: 'The Festive Edit',
    description: 'Statement silhouettes for joyful celebrations and elevated gifting moments.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'c-2',
    name: 'Everyday Elegance',
    description: 'Refined essentials designed to beautify the everyday rhythm of your life.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'c-3',
    name: 'Timeless Traditions',
    description: 'Crafted with heritage details, layered elegance, and a modern silhouette.',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'c-4',
    name: 'The Premium Edit',
    description: 'Luxury textures, handcrafted finishing, and couture-inspired details.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  },
]

export const testimonials = [
  {
    name: 'Aarohi S.',
    product: 'Ivory Grace Suit',
    review:
      'The fabric feels luxurious, the tailoring is graceful, and I received compliments at every event I wore it to. Truly premium.',
    rating: 5,
  },
  {
    name: 'Nisha P.',
    product: 'Rosewood Heritage Set',
    review:
      'The finish feels couture-level and the fit is extremely flattering. SAADGI has become my go-to for festive dressing.',
    rating: 5,
  },
  {
    name: 'Pragya M.',
    product: 'Noor Evening Ensemble',
    review:
      'Elegant, soft, and so easy to carry. The styling and detailing are excellent for special occasions.',
    rating: 4,
  },
]

export const serviceBlocks = [
  {
    title: 'Premium Quality',
    description: 'Carefully curated fabrics and craftsmanship.',
    icon: 'Sparkles',
  },
  {
    title: 'Secure Payments',
    description: 'Safe shopping experience backed by trusted systems.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Easy Returns',
    description: 'Clear and convenient return policies.',
    icon: 'PackageCheck',
  },
  {
    title: 'Customer Support',
    description: 'Assistance whenever needed',
    icon: 'Headphones',
  },
]

export const instagramShots = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=600&q=80',
]

export const siteSettings = {
  contactEmail: 'hello@saadgi.in',
  phone: '+91 98765 43210',
  address: 'Saket, New Delhi, India',
  instagram: '@saadgi',
  facebook: 'facebook.com/saadgi',
  pinterest: 'pinterest.com/saadgi',
  tagline: 'Elegance in Every Thread.',
}

export const adminMenu = [
  'Dashboard',
  'Products',
  'Categories',
  'Collections',
  'Orders',
  'Customers',
  'Coupons',
  'Shipping',
  'Inventory',
  'Reviews',
  'Homepage Management',
  'Newsletter',
  'Analytics',
  'Website Settings',
  'Admin Users',
  'Logout',
]

export const dashboardStats = [
  { label: 'Total Revenue', value: '₹ 18.4L', change: '+12.4%' },
  { label: 'Total Orders', value: '2,184', change: '+8.1%' },
  { label: 'Total Customers', value: '1,460', change: '+11.8%' },
  { label: 'Total Products', value: '342', change: '+4.2%' },
  { label: 'Pending Orders', value: '48', change: '-3.0%' },
  { label: 'Delivered Orders', value: '1,702', change: '+9.4%' },
  { label: 'Cancelled Orders', value: '64', change: '-1.2%' },
  { label: 'Low Stock Products', value: '19', change: '+2.1%' },
]
