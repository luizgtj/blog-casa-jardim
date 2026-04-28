import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'

export default async function Home() {
  const posts = await getAllPosts()
  
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Jardim Inteligente</span>
              <span className="block text-emerald-600 mt-2">Guias Práticos de Jardinagem</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Aprenda na prática como transformar seu jardim com ferramentas certas, 
              sem gastar fortunas e sem precisar de experiência prévia.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Guias Mais Recentes
          </h2>
          <p className="mt-2 text-gray-600">
            Tudo testado na prática por nossa equipe
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Explore por Categoria
            </h2>
            <p className="mt-3 text-gray-600">
              Encontre exatamente o que você precisa
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { name: 'Ferramentas', slug: 'ferramentas', emoji: '🛠️' },
              { name: 'Irrigação', slug: 'irrigacao', emoji: '💧' },
              { name: 'Plantas', slug: 'plantas', emoji: '🌱' },
              { name: 'DIY', slug: 'diy', emoji: '🔨' },
            ].map((category) => (
              <Link
                key={category.slug}
                href={`/blog?categoria=${category.slug}`}
                className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-emerald-300 transition-all text-center"
              >
                <div className="text-3xl mb-3">{category.emoji}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}