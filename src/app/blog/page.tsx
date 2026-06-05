import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";
import { AnimatedCard } from "@/components/ui/animated-card";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="flex min-h-screen flex-col pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-4xl text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Engineering Journal</h1>
        <p className="text-xl text-text-muted">Technical deep-dives, architectural blueprints, and enterprise AI deployment strategies written by our FDEs.</p>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <AnimatedCard delay={i * 0.05} className="h-full flex flex-col justify-between group bg-background-dark">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    Learn how enterprise AI engineers navigate the complexities of {post.title.toLowerCase()}, ensuring strict vendor neutrality and high-throughput execution.
                  </p>
                </div>
                
                <div className="flex items-center gap-2 mt-8 text-sm font-semibold text-text-muted group-hover:text-white transition-colors">
                  <BookOpen size={16} /> Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </AnimatedCard>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
