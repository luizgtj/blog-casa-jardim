import Link from 'next/link'

interface RelatedPost {
  slug: string
  title: string
  image?: string
  readingTime?: string
}

export default function RelatedPosts({ posts, currentSlug }: { posts: RelatedPost[]; currentSlug: string }) {
  const related = posts
    .filter(p => p.slug !== currentSlug)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="mt-12 border-t border-gray-200 pt-10">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Leia também</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex sm:flex-col gap-3 sm:gap-0"
          >
            <div className="flex-shrink-0 w-20 h-20 sm:w-full sm:h-36 rounded-lg overflow-hidden bg-gray-100">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-green-50" />
              )}
            </div>
            <div className="sm:mt-3 flex-1 sm:flex-none">
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700 line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-1 text-xs text-gray-500 hidden sm:block">
                {post.readingTime || '5 min'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}