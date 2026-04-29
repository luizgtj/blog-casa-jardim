import { Post } from '@/lib/posts'
import Link from 'next/link'
import Image from 'next/image'

interface ArticleCardProps {
  post: Post
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-emerald-300 transition-all duration-300">
      {/* Category Badge */}
      <div className="absolute left-4 top-4 z-10">
        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
          {post.category}
        </span>
      </div>

      {/* Featured Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-emerald-200 to-green-200 opacity-50"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          {/* Meta */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <time dateTime={post.date}>{new Date(post.date.split('T')[0] + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            <span>•</span>
            <span>{post.readingTime || '5 min de leitura'}</span>
          </div>

          {/* Title */}
          <Link href={`/blog/${post.slug}`} className="mt-2 block">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-700 line-clamp-2">
              {post.title}
            </h3>
          </Link>

          {/* Description */}
          <p className="mt-3 text-gray-600 line-clamp-3">
            {post.description}
          </p>
        </div>

        {/* Author & CTA */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">LH</div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Luiz Henrique</p>
              <p className="text-xs text-gray-500">Jardinagem DIY</p>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Ler artigo
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}