'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Categorias que existem com conteúdo real
const categories = [
  { name: 'Ferramentas', slug: 'ferramentas' },
  { name: 'Irrigação', slug: 'irrigacao' },
  { name: 'Plantas', slug: 'plantas' },
  { name: 'DIY', slug: 'diy' },
]

export default function CategoriesBar() {
  const pathname = usePathname()
  const currentCategory = pathname.split('/').filter(Boolean)[1] || ''

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center overflow-x-auto py-3 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog?categoria=${category.slug}`}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  currentCategory === category.slug
                    ? 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}