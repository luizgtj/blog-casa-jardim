import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  category: string
  author: string
  image?: string
  content: string
  faq?: Array<{ question: string; answer: string }>
  tags?: string[]
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      return await getPostBySlug(slug)
    })
  )
  
  // Sort posts by date
  return allPostsData
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()
    
    // Combine the data with the slug
    return {
      slug,
      content: contentHtml,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      description: matterResult.data.description || '',
      category: matterResult.data.category || '',
      author: matterResult.data.author || '',
      image: matterResult.data.image,
      faq: matterResult.data.faq || [],
      tags: matterResult.data.tags || [],
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getPostsByCategory(category: string): Promise<Post[]> {
  return getAllPosts().then(posts => 
    posts.filter(post => post.category === category)
  )
}

export function getCategories(): string[] {
  const posts = fs.readdirSync(postsDirectory)
  const categories = new Set<string>()
  
  posts.forEach(fileName => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    if (matterResult.data.category) {
      categories.add(matterResult.data.category)
    }
  })
  
  return Array.from(categories)
}