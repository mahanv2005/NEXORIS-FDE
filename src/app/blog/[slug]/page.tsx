import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { meta, content } = getPostBySlug(resolvedParams.slug);

  // Custom components for MDX to maintain the enterprise aesthetic
  const components = {
    h1: (props: any) => <h1 className="text-4xl md:text-5xl font-heading font-bold mt-12 mb-6 text-white" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-heading font-semibold mt-10 mb-4 text-white border-b border-white/10 pb-2" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-heading font-semibold mt-8 mb-4 text-gray-200" {...props} />,
    p: (props: any) => <p className="text-gray-300 leading-relaxed mb-6 text-lg" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 text-lg" {...props} />,
    li: (props: any) => <li className="text-gray-300" {...props} />,
    strong: (props: any) => <strong className="font-semibold text-white" {...props} />,
    a: (props: any) => <a className="text-primary hover:text-white underline transition-colors" {...props} />,
  };

  return (
    <main className="flex min-h-screen flex-col pt-32 pb-24">
      <article className="container mx-auto px-6 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Journal
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white leading-tight">
            {meta.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <Tag size={16} />
              <span className="text-primary font-medium">{meta.category}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <span>By Nexus FDE Team</span>
            </div>
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <MDXRemote source={content} components={components} />
        </div>

        <footer className="mt-24 pt-12 border-t border-white/10 text-center">
          <div className="p-8 rounded-2xl bg-surface border border-primary/20">
            <h3 className="text-2xl font-heading font-bold mb-4">Want to deploy this architecture?</h3>
            <p className="text-gray-400 mb-6">Our FDEs can build this directly inside your enterprise environment.</p>
            <Link href="/contact" className="inline-flex px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-white transition-colors">
              Book a Strategy Call
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
