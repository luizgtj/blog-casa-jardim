import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import GSAPScrollReveal from '@/components/GSAPScrollReveal'

export default async function Home() {
  const posts = await getAllPosts()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <GSAPScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Casa & Jardim
              <span className="block text-4xl md:text-5xl text-green-600 mt-2">
                Ferramentas
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Guias práticos, reviews honestos e dicas especializadas para transformar seu jardim em um oásis. Tudo que você precisa saber sobre ferramentas, manutenção e jardinagem.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/blog/ferramentas-jardinagem-iniciantes" 
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Comece Aqui →
              </Link>
              <a 
                href="#latest-posts" 
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
              >
                Ver Artigos
              </a>
            </div>
          </div>
        </GSAPScrollReveal>
        
        {/* Stats */}
        <GSAPScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">450K+</div>
              <div className="text-gray-600">Buscas Mensais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">R$ 5,45</div>
              <div className="text-gray-600">CPC Médio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">15+</div>
              <div className="text-gray-600">Anos Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">2.000+</div>
              <div className="text-gray-600">Famílias Ajudadas</div>
            </div>
          </div>
        </GSAPScrollReveal>
      </header>
      
      {/* Latest Posts */}
      <section id="latest-posts" className="max-w-6xl mx-auto px-4 py-12">
        <GSAPScrollReveal>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Artigos Mais Recentes</h2>
              <p className="text-gray-600 mt-2">Guias completos baseados em experiência real</p>
            </div>
            <Link 
              href="/blog"
              className="text-green-600 hover:text-green-800 font-semibold"
            >
              Ver Todos →
            </Link>
          </div>
        </GSAPScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post, index) => (
            <GSAPScrollReveal key={post.slug} delay={index * 0.1}>
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <time className="text-gray-500 text-sm">{post.date}</time>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-green-600 hover:text-green-800 font-semibold text-sm"
                    >
                      Ler Artigo →
                    </Link>
                  </div>
                </div>
              </article>
            </GSAPScrollReveal>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <GSAPScrollReveal>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para Transformar Seu Jardim?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Receba dicas semanais, ofertas exclusivas e guias passo a passo diretamente no seu email.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                  Inscrever-se
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                Sem spam. Só conteúdo de qualidade. Pode cancelar quando quiser.
              </p>
            </div>
          </div>
        </GSAPScrollReveal>
      </section>
    </div>
  )
}