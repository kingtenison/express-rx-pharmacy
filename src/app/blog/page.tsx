import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight, Clock, Tag, BookOpen, Sparkles } from "lucide-react";

export const metadata = {
  title: "Health Blog | ExpressRx Pharmacy – Columbus, Ohio",
  description: "Expert health tips, pharmacy news, medication guides, and patient resources from ExpressRx Pharmacy in Columbus, Ohio. Stay informed about compounding, DME, insurance, and more.",
  keywords: ["pharmacy blog", "health tips Columbus Ohio", "medication guide", "compounding pharmacy", "ExpressRx blog", "patient resources Ohio"],
  openGraph: {
    title: "Health Blog | ExpressRx Pharmacy",
    description: "Expert health tips, pharmacy news, and patient resources from ExpressRx Pharmacy in Columbus, Ohio.",
    type: "website",
  },
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <section className="relative min-h-[50vh] md:min-h-[45vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(160deg, #f8fdf8 0%, #e8f5e8 40%, #f0f9f0 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 800px 400px at 30% 50%, rgba(0,163,0,0.06) 0%, transparent 60%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: "linear-gradient(to top, white 0%, transparent 100%)" }} />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-[#00A300]/15" style={{ background: "rgba(0,163,0,0.05)" }}>
              <BookOpen className="w-3.5 h-3.5 text-[#00A300]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#00A300]/80">Health Blog</span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-gray-900 mb-4">
              Expert Insights.<br />
              <span className="text-[#00A300]">Better Health.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Pharmacy news, medication guides, and wellness tips from our clinical team in Columbus, Ohio.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 pb-20 md:pb-28" style={{ background: "white" }}>
        <div className="w-full px-6 md:px-12 lg:px-16">

          {featured && featured.image && (
            <Link href={`/blog/${featured.slug}`} className="block group mb-12 md:mb-16">
              <article className="relative rounded-3xl overflow-hidden border border-gray-100 group-hover:border-[#00A300]/20 shadow-sm group-hover:shadow-xl transition-all duration-500" style={{ background: "white" }}>
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto min-h-[320px]">
                    <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:bg-gradient-to-r md:from-transparent md:to-white" />
                  </div>
                  <div className="relative p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ background: "rgba(0,163,0,0.08)", color: "#00A300" }}>
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                        <Tag className="w-3 h-3" />
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#00A300] mb-3 leading-tight transition-colors duration-300">
                      {featured.title}
                    </h2>
                    <p className="text-base text-gray-500 mb-6 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {featured.readTime}
                        </span>
                        <span>{featured.date}</span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A300] group-hover:gap-3 transition-all duration-300">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="relative h-full rounded-2xl border border-gray-100 group-hover:border-[#00A300]/20 shadow-sm group-hover:shadow-lg overflow-hidden transition-all duration-500 flex flex-col" style={{ background: "white" }}>
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm" style={{ color: "#00A300" }}>
                        {post.category}
                      </span>
                    </div>
                  )}
                  <div className="relative p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#00A300] mb-2 leading-snug transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-3 text-[11px] text-gray-400">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#00A300]/40 group-hover:text-[#00A300] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
