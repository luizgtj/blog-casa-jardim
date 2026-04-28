import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import GSAPScrollReveal from '@/components/GSAPScrollReveal'

export default async function Home() {
  const posts = await getAllPosts()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Hero Section */}
      <header className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-100 rounded-full translate-y-24 -translate-x-24 opacity-30"></div>
        
        <div className="relative z-10">
          <GSAPScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Desde 2022 • Mais de 50.000 leitores
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                <span className="text-emerald-600">Jardim</span>
                <span className="block text-4xl md:text-5xl text-gray-800 mt-2">
                  Inteligente
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Somos a maior comunidade brasileira de jardinagem DIY. Aqui você aprende 
                <span className="text-emerald-600 font-semibold"> na prática</span> como transformar seu jardim com ferramentas certas, 
                <span className="text-emerald-600 font-semibold"> sem gastar fortunas</span> e 
                <span className="text-emerald-600 font-semibold"> sem precisar de experiência</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog/ferramentas-jardinagem-iniciantes" 
                  className="px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  🛠️ Comece Aqui: Guia do Iniciante
                </Link>
                <a 
                  href="#latest-posts" 
                  className="px-8 py-3.5 border-2 border-emerald-200 text-emerald-700 font-semibold rounded-lg hover:border-emerald-300 transition-colors hover:bg-emerald-50"
                >
                  🌱 Ver Todos Artigos
                </a>
              </div>
            </div>
          </GSAPScrollReveal>
          
          {/* Trust Signals */}
          <GSAPScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600">✓</span>
                </div>
                <span>Reviews 100% independentes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600">💸</span>
                </div>
                <span>Nunca patrocinado por marcas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600">🎯</span>
                </div>
                <span>Testamos cada ferramenta</span>
              </div>
            </div>
          </GSAPScrollReveal>
        </div>
      </header>
      
      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <GSAPScrollReveal>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa Missão: Democratizar a Jardinagem
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A jardinagem sempre foi vista como hobby de elite. Ferramentas caras, técnicas secretas, 
              linguagem complicada. Nós quebramos essa barreira. Criamos o Jardim Inteligente para mostrar que 
              <span className="text-emerald-600 font-semibold"> qualquer pessoa pode ter um jardim lindo</span>, 
              mesmo começando do zero e com orçamento limitado.
            </p>
            <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold">
              <span>Conheça nossa história</span>
              <span>→</span>
            </div>
          </div>
        </GSAPScrollReveal>
      </section>
      
      {/* Latest Posts */}
      <section id="latest-posts" className="max-w-6xl mx-auto px-4 py-12">
        <GSAPScrollReveal>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Guias Mais Recentes</h2>
              <p className="text-gray-600 mt-2">Passo a passo testado na prática</p>
            </div>
            <Link 
              href="/blog"
              className="text-emerald-600 hover:text-emerald-800 font-semibold flex items-center gap-2"
            >
              Ver Todos Artigos
              <span>→</span>
            </Link>
          </div>
        </GSAPScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post, index) => (
            <GSAPScrollReveal key={post.slug} delay={index * 0.1}>
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
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
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        JM
                      </div>
                      <span className="text-sm font-medium">João Mendes</span>
                    </div>
                    <div className="text-sm text-gray-500">15 min de leitura</div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="block w-full text-center py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Ler Guia Completo →
                  </Link>
                </div>
              </article>
            </GSAPScrollReveal>
          ))}
        </div>
        
        {/* Empty State - Add more articles */}
        {posts.length < 3 && (
          <GSAPScrollReveal>
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mais conteúdo em produção!</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                Nossa equipe está testando ferramentas e preparando novos guias. 
                Em breve: irrigação automática, compostagem caseira e ferramentas elétricas.
              </p>
              <button className="px-6 py-3 border-2 border-emerald-200 text-emerald-700 font-semibold rounded-lg hover:border-emerald-300 transition-colors">
                Receber Aviso de Novos Artigos
              </button>
            </div>
          </GSAPScrollReveal>
        )}
      </section>
      
      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <GSAPScrollReveal>
          <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Gaste Menos, Tenha Mais
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Receba toda semana: 1 ferramenta testada, 1 técnica simples, 1 erro evitado. 
              Tudo que você precisa saber para não jogar dinheiro fora.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
                <button className="px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Quero Aprender Jardinagem
                </button>
              </div>
              <p className="text-emerald-100 text-sm mt-3">
                2.847 jardineiros já se inscreveram. Você vai receber o Guia de Ferramentas Essenciais de graça.
              </p>
            </div>
          </div>
        </GSAPScrollReveal>
      </section>
      
      {/* About Founder */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <GSAPScrollReveal>
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white text-5xl font-bold">
                  JM
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  "Comecei sem saber segurar uma pá"
                </h3>
                <p className="text-gray-700 mb-4">
                  Sou o <strong className="text-emerald-600">João Mendes</strong>, fundador do Jardim Inteligente. 
                  Há 8 anos atrás, comprei minha primeira casa e quase desisti quando vi o jardim abandonado. 
                  Gastei R$ 3.000 em ferramentas erradas antes de aprender na marra.
                </p>
                <p className="text-gray-700 mb-6">
                  Criei este blog para que <strong className="text-emerald-600">você não cometa os mesmos erros</strong>. 
                  Aqui só publicamos o que realmente funciona, testado no meu próprio jardim e no de amigos.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-emerald-600 hover:text-emerald-800 font-semibold">
                    Minha História Completa →
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-800 font-semibold">
                    Meus Erros (para você evitar)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </GSAPScrollReveal>
      </section>
    </div>
  )
}