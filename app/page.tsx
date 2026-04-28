import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function Home() {
  const posts = await getAllPosts()
  
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Hero */}
      <header className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Jardim Inteligente
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guias práticos de jardinagem DIY. Tudo testado, nada de teoria.
          </p>
        </div>
      </header>
      
      {/* Posts Grid - Minimal */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <div className="mb-4">
                <span className="text-sm text-gray-500">{post.category}</span>
                <span className="mx-2">•</span>
                <time className="text-sm text-gray-500">{post.date}</time>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-emerald-600">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.description}
              </p>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-block text-emerald-600 hover:text-emerald-800 font-medium text-sm"
              >
                Ler artigo completo →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}