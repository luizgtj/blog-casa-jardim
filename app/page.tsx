import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'

export default async function Home() {
  const posts = await getAllPosts()
  
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Jardim Inteligente
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Guias práticos de jardinagem DIY. Tudo testado, nada de teoria.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            Artigos mais recentes
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Categorias
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Ferramentas', slug: 'ferramentas' },
              { name: 'Irrigação', slug: 'irrigacao' },
              { name: 'Plantas', slug: 'plantas' },
              { name: 'DIY', slug: 'diy' },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog?categoria=${cat.slug}`}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-700 ring-1 ring-gray-200 hover:ring-emerald-300 hover:text-emerald-700 transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}