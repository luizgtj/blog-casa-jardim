import { getAllPosts } from '@/lib/posts'
import RelatedPosts from './RelatedPosts'

export default async function RelatedSection({ currentSlug, currentCategory }: { currentSlug: string; currentCategory: string }) {
  const allPosts = await getAllPosts()
  const posts = allPosts
    .filter(p => p.slug !== currentSlug)
    .sort((a, b) => {
      if (a.category === currentCategory && b.category !== currentCategory) return -1
      if (b.category === currentCategory && a.category !== currentCategory) return 1
      return 0
    })
    .slice(0, 3)
    .map(p => ({ slug: p.slug, title: p.title, image: p.image, readingTime: p.readingTime }))

  return <RelatedPosts posts={posts} currentSlug={currentSlug} />
}