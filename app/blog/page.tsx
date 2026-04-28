import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import GSAPScrollReveal from '@/components/GSAPScrollReveal'

export default async function BlogIndex() {
  const posts = await getAllPosts()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 py-16">
        <GSAPScrollReveal>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Biblioteca de Artigos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todos nossos guias, reviews e tutoriais organizados por categoria. 
              Tudo que você precisa saber sobre ferramentas, manutenção e jardinagem em um só lugar.
            </p>
          </div>
        </GSAPScrollReveal>
      </header>
      
      {/* Posts Grid */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <GSAPScrollReveal key={post.slug} delay={index * 0.1}>
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <time className="text-gray-500 text-sm">{post.date}</time>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      {post.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="w-full block text-center py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Ler Artigo Completo →
                    </Link>
                  </div>
                </div>
              </article>
            </GSAPScrollReveal>
          ))}
        </div>
        
        {/* Empty State */}
        {posts.length === 0 && (
          <GSAPScrollReveal>
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Em breve novos artigos!</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Nossa equipe está preparando conteúdos incríveis para você. 
                Volte em breve ou inscreva-se para ser notificado.
              </p>
            </div>
          </GSAPScrollReveal>
        )}
      </main>
      
      {/* Newsletter CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <GSAPScrollReveal>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nos diga sobre qual tema você quer aprender e nossa equipe preparará um artigo especialmente para você.
            </p>
            <form className="max-w-lg mx-auto">
              <div className="flex gap-2 mb-4">
                <input 
                  type="text" 
                  placeholder="Sugira um tema..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Enviar
                </button>
              </div>
              <p className="text-gray-500 text-sm">
                As sugestões mais pedidas viram artigos completos em nossa biblioteca.
              </p>
            </form>
          </div>
        </GSAPScrollReveal>
      </div>
    </div>
  )
}