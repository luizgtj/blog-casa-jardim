import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'

export const metadata = {
  title: 'Todos os Artigos | Jardim Inteligente',
  description: 'Todos os guias práticos de jardinagem DIY organizados por categoria.',
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ categoria?: string; busca?: string }> }) {
  const params = await searchParams
  const allPosts = await getAllPosts()
  
  // Filter by category
  let posts = allPosts
  if (params.categoria) {
    const catSlug = params.categoria.toLowerCase()
    const catMap: Record<string, string[]> = {
      'ferramentas': ['Ferramentas'],
      'irrigacao': ['Irrigação'],
      'plantas': ['Plantas'],
      'diy': ['DIY', 'Casa & Jardim'],
    }
    const categories = catMap[catSlug] || [catSlug]
    posts = allPosts.filter(p => categories.some(c => p.category?.toLowerCase().includes(c.toLowerCase())))
  }
  
  // Filter by search
  if (params.busca) {
    const query = params.busca.toLowerCase()
    posts = allPosts.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(query)))
    )
  }

  const categoryLabel = params.categoria 
    ? params.categoria.charAt(0).toUpperCase() + params.categoria.slice(1).replace(/-/g, ' ')
    : null

  return (
    <div className="bg-white">
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {categoryLabel ? categoryLabel : 'Todos os Artigos'}
          </h1>
          <p className="mt-1 text-gray-600">
            {posts.length} {posts.length === 1 ? 'artigo' : 'artigos'} encontrados
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500">Nenhum artigo encontrado.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}