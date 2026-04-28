'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const categories = [
  { name: 'Ferramentas', slug: 'ferramentas', count: 12 },
  { name: 'Irrigação', slug: 'irrigacao', count: 8 },
  { name: 'Plantas', slug: 'plantas', count: 15 },
  { name: 'DIY', slug: 'diy', count: 20 },
  { name: 'Horta', slug: 'horta', count: 10 },
  { name: 'Decoração', slug: 'decoracao', count: 7 },
  { name: 'Manutenção', slug: 'manutencao', count: 9 },
  { name: 'Economia', slug: 'economia', count: 5 },
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
                href={`/categorias/${category.slug}`}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  currentCategory === category.slug
                    ? 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs text-gray-500">({category.count})</span>
              </Link>
            ))}
          </div>
          <div className="ml-4 flex-shrink-0">
            <Link
              href="/categorias"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-emerald-700"
            >
              Todas as categorias →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}