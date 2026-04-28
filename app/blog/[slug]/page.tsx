import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) return {}
  
  return {
    title: `${post.title} | Jardim Inteligente`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
      type: 'article',
      publishedTime: post.date,
      authors: ['Luiz Henrique'],
      tags: post.tags,
    },
    alternates: {
      canonical: `https://blog-casa-jardim-z6tt2.vercel.app/blog/${slug}`,
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
    <div className="bg-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            image: post.image,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: 'Luiz Henrique',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Jardim Inteligente',
              logo: {
                '@type': 'ImageObject',
                url: 'https://blog-casa-jardim-z6tt2.vercel.app/logo.svg',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://blog-casa-jardim-z6tt2.vercel.app/blog/${slug}`,
            },
            ...(post.faq && post.faq.length > 0 ? {
              hasPart: {
                '@type': 'FAQPage',
                mainEntity: post.faq.map((item: { question: string; answer: string }) => ({
                  '@type': 'Question',
                  name: item.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                  },
                })),
              },
            } : {}),
          }),
        }}
      />
      {/* Breadcrumb */}
      <div className="mx-auto max-w-3xl px-4 pt-8">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-emerald-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{post.category}</span>
        </nav>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-10">
        {/* Header */}
        <header className="mb-10">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {post.description}
          </p>

          <div className="flex items-center gap-3 border-b border-gray-200 pb-6">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face" 
              alt="Luiz Henrique" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">Luiz Henrique</p>
              <p className="text-xs text-gray-500">
                <time dateTime={post.date}>{post.date}</time>
              </p>
            </div>
          </div>
        </header>
        
        {/* Featured Image */}
        {post.image && (
          <figure className="mb-10">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full rounded-xl shadow-md"
            />
          </figure>
        )}
        
        {/* Article Content - Tipografia profissional */}
        <div 
          className="article-body"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* FAQ Section */}
        {post.faq && post.faq.length > 0 && (
          <section className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {post.faq.map((item, index) => (
                <details key={index} className="group rounded-lg border border-gray-200 p-4">
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                    {item.question}
                    <svg className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}
        
        {/* Author Bio */}
        <div className="mt-12 border-t border-gray-200 pt-10">
          <div className="flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face" 
              alt="Luiz Henrique" 
              className="h-14 w-14 rounded-full object-cover ring-2 ring-emerald-100"
            />
            <div>
              <p className="font-semibold text-gray-900">Luiz Henrique</p>
              <p className="text-sm text-gray-600">
                Escritor e entusiasta de jardinagem DIY. Guias práticos testados na prática.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts CTA */}
        <div className="mt-12 border-t border-gray-200 pt-10 text-center">
          <p className="text-gray-500 mb-4">Continue lendo</p>
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            Ver todos os artigos
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  )
}