import Link from "next/link";
export const metadata = { title: "Blog | ExpressRX Pharmacy" };
export default function BlogPage() {
  return (
    <>
      <section className="pt-20 md:pt-32 pb-10 md:pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="section-label mb-3">Blog</span>
            <h1 className="display-xl mb-4" style={{ color: "var(--text-1)" }}>Health Blog</h1>
            <p className="text-lg" style={{ color: "var(--text-2)" }}>Health tips, pharmacy news, and expert insights.</p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog/choose-long-term-care-pharmacy" className="block group">
              <article className="card-bento p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label">Patient & Caregiver Guide</span>
                  <span className="text-sm" style={{ color: "var(--text-3)" }}>April 2026</span>
                  <span className="text-sm" style={{ color: "var(--text-3)" }}>8 min read</span>
                </div>
                <h2 className="font-display text-2xl mb-4 group-hover:text-[var(--primary-dark)] transition-colors" style={{ color: "var(--text-1)" }}>
                  How to Choose the Right Long-Term Care Pharmacy in Columbus, Ohio
                </h2>
                <p className="mb-4" style={{ color: "var(--text-2)" }}>
                  Managing a chronic condition — or supporting a loved one in long-term care — involves far more than picking up prescriptions. Learn how to make the right choice.
                </p>
                <div className="flex items-center gap-4 text-sm" style={{ color: "var(--primary)" }}>
                  <span>Read Article →</span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
