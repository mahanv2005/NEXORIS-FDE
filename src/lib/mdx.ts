import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/content/blog');

export type PostMetadata = {
  title: string;
  date: string;
  category: string;
  slug: string;
};

export function getPostSlugs() {
  return fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  return {
    meta: { ...data, slug: realSlug } as PostMetadata,
    content,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug).meta);
  
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
