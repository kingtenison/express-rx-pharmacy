import { Metadata } from "next";
export const metadata: Metadata = { title: "Blog | ExpressRX Pharmacy" };
export default function BlogPage() {
  return (
    <>
      <section className="pt-20 md:pt-32 pb-10 md:pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="section-label mb-3">Blog</span>
            <h1 className="display-xl mb-4" style={{ color: "var(--text-1)" }}>Health Blog</h1>
            <p className="text-lg" style={{ color: "var(--text-2)" }}>Health tips, pharmacy news, and updates coming soon.</p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "var(--primary-dim)" }}>
              <svg className="w-8 h-8" style={{ color: "var(--primary)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-1)" }}>Coming Soon</h2>
            <p className="max-w-md mx-auto" style={{ color: "var(--text-2)" }}>We&apos;re working on valuable content to help you stay informed about your health. Check back soon!</p>
          </div>
        </div>
      </section>
    </>
  );
}
