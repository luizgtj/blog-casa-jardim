import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'

export default async function Home() {
  const posts = await getAllPosts()
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Jardim Inteligente</span>
              <span className="block text-emerald-600">Guias Práticos de Jardinagem</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Aprenda na prática como transformar seu jardim com ferramentas certas, 
              sem gastar fortunas e sem precisar de experiência prévia.
            </p>
            <div className="mt-10">
              <Link
                href="/blog"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Explorar Todos os Guias
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Guias Mais Recentes
              </h2>
              <p className="mt-2 text-gray-600">
                Tudo testado na prática por nossa equipe
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Ver todos →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 6).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Explore por Categoria
            </h2>
            <p className="mt-4 text-gray-600">
              Encontre exatamente o que você precisa
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Ferramentas', count: '12 guias', color: 'bg-blue-100 text-blue-800' },
              { name: 'Irrigação', count: '8 guias', color: 'bg-green-100 text-green-800' },
              { name: 'Plantas', count: '15 guias', color: 'bg-emerald-100 text-emerald-800' },
              { name: 'DIY', count: '20 guias', color: 'bg-amber-100 text-amber-800' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/categorias/${category.name.toLowerCase()}`}
                className="group rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-emerald-300 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{category.count}</p>
                  </div>
                  <div className={`rounded-full px-3 py-1 text-xs font-medium ${category.color}`}>
                    {category.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50">
            <div className="px-6 py-12 sm:p-12">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Por Que Confiar no Jardim Inteligente?
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Somos jardineiros reais, não teóricos. Cada guia é resultado de 
                    testes práticos, erros cometidos e soluções encontradas na marra.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/sobre"
                      className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-600 shadow-sm ring-1 ring-inset ring-emerald-300 hover:bg-emerald-50"
                    >
                      Conheça Nossa História
                    </Link>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-emerald-600">8+</div>
                      <div className="text-sm text-gray-600">Anos de experiência</div>
                    </div>
                    <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-emerald-600">147</div>
                      <div className="text-sm text-gray-600">Ferramentas testadas</div>
                    </div>
                    <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-emerald-600">89</div>
                      <div className="text-sm text-gray-600">Guias publicados</div>
                    </div>
                    <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                      <div className="text-2xl font-bold text-emerald-600">6.847</div>
                      <div className="text-sm text-gray-600">Jardineiros na comunidade</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}