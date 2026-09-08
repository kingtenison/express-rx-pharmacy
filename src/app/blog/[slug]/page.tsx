import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, blogContent } from "@/lib/blog-data";
import { ArrowLeft, Clock, Tag, Calendar, User, ArrowRight, Share2 } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
      title: `${post.title} | ExpressRx Pharmacy Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        images: post.image ? [post.image] : [],
      },
    };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug]?.html || "";
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen" style={{ background: "white" }}>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #f8fdf8 0%, #e8f5e8 40%, #f0f9f0 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 800px 400px at 30% 50%, rgba(0,163,0,0.06) 0%, transparent 60%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-24" style={{ background: "linear-gradient(to top, white 0%, transparent 100%)" }} />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#00A300] mb-8 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ background: "rgba(0,163,0,0.08)", color: "#00A300" }}>
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
              {post.author && (
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                  <User className="w-3 h-3" />
                  {post.author}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-[-0.02em] text-gray-900 mb-5 max-w-3xl">
              {post.title}
            </h1>

            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {post.image && (
        <section className="relative z-10 -mt-6 pb-12">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
                <div className="relative aspect-[16/7]">
                  <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="relative z-10 pb-20 md:pb-28">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">

            {/* Share bar */}
            <div className="flex items-center justify-between py-5 mb-8 border-y border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Share2 className="w-4 h-4" />
                <span>Share this article</span>
              </div>
              <div className="flex items-center gap-3">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://expressrx.com/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-[#00A300] transition-colors">Twitter</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://expressrx.com/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-[#00A300] transition-colors">Facebook</a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://expressrx.com/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-[#00A300] transition-colors">LinkedIn</a>
              </div>
            </div>

            {/* Article body */}
            <article
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* CTA */}
            <div className="mt-16 rounded-2xl p-8 md:p-10 relative overflow-hidden border border-[#00A300]/15" style={{ background: "linear-gradient(135deg, #f0fdf0 0%, white 100%)" }}>
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full" style={{ background: "rgba(0,163,0,0.05)" }} />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Have Questions?</h3>
                <p className="text-gray-500 mb-6 max-w-lg">Our pharmacists are here to help. Get personalized answers about your medications, insurance, or any health concern.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:6144959097" className="inline-flex items-center gap-2 font-semibold rounded-full px-6 py-3 text-sm transition-all duration-300 bg-[#00A300] text-white hover:bg-[#008800] shadow-md hover:shadow-lg">
                    Call (614) 495-9097
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 font-semibold rounded-full px-6 py-3 text-sm transition-all duration-300 border border-gray-200 text-gray-700 hover:border-[#00A300]/30 hover:text-[#00A300]">
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* More articles */}
            {otherPosts.length > 0 && (
              <div className="mt-16 pt-10 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Continue Reading</h3>
                <div className="grid md:grid-cols-3 gap-5">
                  {otherPosts.map((other) => (
                    <Link key={other.slug} href={`/blog/${other.slug}`} className="block group">
                      <article className="h-full rounded-xl border border-gray-100 group-hover:border-[#00A300]/20 shadow-sm group-hover:shadow-md overflow-hidden transition-all duration-300">
                        {other.image && (
                          <div className="relative h-36 overflow-hidden">
                            <Image src={other.image} alt={other.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        )}
                        <div className="p-5">
                          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2" style={{ background: "rgba(0,163,0,0.06)", color: "#00A300" }}>
                            {other.category}
                          </span>
                          <h4 className="text-sm font-bold text-gray-800 group-hover:text-[#00A300] leading-snug transition-colors mb-2 line-clamp-2">
                            {other.title}
                          </h4>
                          <span className="text-[11px] text-gray-400">{other.readTime}</span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
