import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import GSAPScrollReveal from '@/components/GSAPScrollReveal'
import AdZone from '@/components/AdZone'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) return {}
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) notFound()
  
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <header className="mb-12">
        <GSAPScrollReveal>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span>{post.category}</span>
            <span>•</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {post.description}
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-gray-500">Especialista em {post.category}</div>
            </div>
          </div>
        </GSAPScrollReveal>
      </header>
      
      {/* Featured Image */}
      {post.image && (
        <GSAPScrollReveal>
          <div className="mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </GSAPScrollReveal>
      )}
      
      {/* Ad Zone: Header */}
      <AdZone position="header" />
      
      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      
      {/* Ad Zone: In-article */}
      <AdZone position="in-article" />
      
      {/* FAQ Section */}
      {post.faq && post.faq.length > 0 && (
        <GSAPScrollReveal>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {post.faq.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </GSAPScrollReveal>
      )}
      
      {/* Ad Zone: Footer */}
      <AdZone position="footer" />
      
      {/* Author Bio */}
      <GSAPScrollReveal>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mt-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Sobre o Autor</h3>
              <p className="text-gray-700 mb-4">
                {post.author} é especialista em {post.category} com mais de 10 anos de experiência. 
                Já ajudou milhares de pessoas através de seus artigos e guias práticos.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">Website</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </GSAPScrollReveal>
    </article>
  )
}