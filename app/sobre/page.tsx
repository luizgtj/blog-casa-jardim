import GSAPScrollReveal from '@/components/GSAPScrollReveal'

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Hero */}
      <header className="max-w-6xl mx-auto px-4 py-16">
        <GSAPScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Por Que o
              <span className="block text-4xl md:text-5xl text-emerald-600 mt-2">
                Jardim Inteligente Existe
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um lugar onde jardinagem não é luxo, nem mistério. É prática, economia e resultados reais.
            </p>
          </div>
        </GSAPScrollReveal>
      </header>

      {/* Origin Story */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <GSAPScrollReveal>
          <div className="bg-white rounded-3xl p-10 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Frustração que Gerou Tudo</h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Em 2018, comprei minha primeira casa com jardim. 50m² de terra batida e mato. 
                Empolgado, fui à loja mais cara da cidade e gastei <strong className="text-emerald-600">R$ 3.247</strong> 
                em ferramentas "profissionais".
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                <p className="text-amber-800">
                  <strong>Resultado:</strong> Em 3 meses, 40% das plantas mortas, 2 ferramentas quebradas 
                  e uma conta de água de R$ 380 (eu regava errado).
                </p>
              </div>
              
              <p className="text-lg text-gray-700">
                Percebi que a jardinagem estava cercada de <strong className="text-emerald-600">mitos, preços abusivos e informação ruim</strong>. 
                As revistas mostravam jardins impossíveis, os vendedores empurravam o que dava mais lucro, 
                e os "especialistas" falavam uma linguagem técnica que ninguém entendia.
              </p>
              
              <p className="text-lg text-gray-700">
                Foi aí que decidi: <strong className="text-emerald-600">vou aprender na marra e documentar tudo</strong>. 
                Cada erro, cada acerto, cada centavo gasto. E compartilhar de forma clara, prática e honesta.
              </p>
            </div>
          </div>
        </GSAPScrollReveal>
      </section>

      {/* Our Philosophy */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <GSAPScrollReveal delay={0.2}>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Nossos 4 Pilares (Inflexíveis)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Testamos Tudo</h3>
                <p className="text-gray-600">
                  Não publicamos nada que não tenhamos usado por pelo menos 30 dias em condições reais. 
                  Se falarmos que algo funciona, é porque funcionou na nossa mão.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Patrocínio</h3>
                <p className="text-gray-600">
                  Nunca aceitamos produtos gratuitos ou pagamento por reviews. Comprarmos tudo com nosso dinheiro 
                  para manter a isenção total. Se é bom, dizemos. Se é ruim, também.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Orçamento Real</h3>
                <p className="text-gray-600">
                  Mostramos preços reais de ferragens, não de lojas especializadas. Nosso lema: 
                  "Se não pode fazer com R$ 200, não precisa fazer". Democracia na prática.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Erros são Aula</h3>
                <p className="text-gray-600">
                  Compartilhamos nossos fracassos em detalhes. Você economiza dinheiro e tempo aprendendo 
                  com nossos erros, não cometendo os mesmos.
                </p>
              </div>
            </div>
          </div>
        </GSAPScrollReveal>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <GSAPScrollReveal delay={0.3}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quem Faz Acontecer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos um time pequeno de gente prática que cansou da jardinagem elitizada.
            </p>
          </div>
        </GSAPScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <GSAPScrollReveal delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  JM
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Luiz Henrique</h3>
                  <div className="text-emerald-600 font-medium mb-3">Fundador & Testador Chefe</div>
                  <p className="text-gray-600 mb-4">
                    Ex-engenheiro que trocou a calculadora pela pá. Especialista em fazer muito com pouco. 
                    Já testou 147 ferramentas diferentes e escreveu 89 guias práticos.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">8 anos experiência</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">DIY extremo</span>
                  </div>
                </div>
              </div>
            </div>
          </GSAPScrollReveal>

          <GSAPScrollReveal delay={0.5}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  CR
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Carla Rios</h3>
                  <div className="text-emerald-600 font-medium mb-3">Especialista em Plantas</div>
                  <p className="text-gray-600 mb-4">
                    Bióloga que acredita que ciência deve ser prática. Responsável por todas as pesquisas 
                    técnicas e testes com plantas. Consegue reviver qualquer planta "perdida".
                  </p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">PhD Biologia</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">12 anos horta</span>
                  </div>
                </div>
              </div>
            </div>
          </GSAPScrollReveal>
        </div>
      </section>

      {/* Numbers */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <GSAPScrollReveal delay={0.6}>
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossos Números (Concretos)</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">6.847</div>
                <div className="text-emerald-200">Jardineiros na comunidade</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">R$ 412k</div>
                <div className="text-emerald-200">Economizados pelos leitores</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">147</div>
                <div className="text-emerald-200">Ferramentas testadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">89</div>
                <div className="text-emerald-200">Guias práticos publicados</div>
              </div>
            </div>
          </div>
        </GSAPScrollReveal>
      </section>

      {/* Final CTA */}
      <section className="max-w-2xl mx-auto px-4 py-20">
        <GSAPScrollReveal delay={0.7}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pronto para Jardinagem Sem Mitos?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Junte-se aos milhares que já transformaram seus jardins sem gastar fortunas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/blog"
                className="px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
              >
                Ver Todos Guias
              </a>
              <a 
                href="/"
                className="px-8 py-3.5 border-2 border-emerald-200 text-emerald-700 font-semibold rounded-lg hover:border-emerald-300 transition-colors"
              >
                Voltar para Home
              </a>
            </div>
          </div>
        </GSAPScrollReveal>
      </section>
    </div>
  )
}