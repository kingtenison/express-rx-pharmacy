import Image from "next/image";
import Link from "next/link";
import BlogShareButtons from "./BlogShareButtons";

export const metadata = {
  title: "How to Choose the Right Long-Term Care Pharmacy in Columbus, Ohio | Express Pharmacy & DME",
  description: "Learn how to choose the best long-term care pharmacy in Columbus, Ohio for chronic disease management, medication adherence, and personalized patient support.",
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      {/* SITE BAR */}
      <div className="sticky top-0 z-50" style={{ background: "#0f2744" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo-nav.png" alt="Express Pharmacy Logo" width={120} height={44} className="h-8 w-auto object-contain brightness-0 invert" />
              <div>
                <div className="font-display text-white text-sm font-semibold leading-tight">Express Pharmacy & DME</div>
                <div className="text-[0.65rem] text-white/55 uppercase tracking-wider leading-tight">We Care Long-Term Care Pharmacy</div>
              </div>
            </Link>
            <a href="tel:6144959097" className="inline-flex items-center gap-2 text-sm font-bold rounded-lg px-3 py-2 transition-colors" style={{ background: "#4cc966", color: "#1e2530" }}>
              📞 (614) 495-9097
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

          {/* MAIN ARTICLE */}
          <article className="min-w-0">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6 flex gap-2 items-center" style={{ color: "var(--text-3)" }}>
              <Link href="/" className="hover:underline" style={{ color: "var(--primary)" }}>Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:underline" style={{ color: "var(--primary)" }}>Resources</Link>
              <span>/</span>
              <Link href="/blog" className="hover:underline" style={{ color: "var(--primary)" }}>Medication Management</Link>
              <span>/</span>
              <span>How to Choose a Long-Term Care Pharmacy</span>
            </nav>

            <span className="inline-block text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4" style={{ background: "var(--primary-dim)", color: "var(--primary)" }}>
              Patient &amp; Caregiver Guide
            </span>

            <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5" style={{ color: "#0f2744" }}>
              How to Choose the Right Long-Term Care Pharmacy in Columbus, Ohio
            </h1>

            <div className="flex flex-wrap gap-6 text-sm mb-8 pb-6 border-b" style={{ color: "var(--text-3)", borderColor: "rgba(22,163,74,0.12)" }}>
              <div className="flex items-center gap-1"><span>📅</span> <strong style={{ color: "var(--text-1)" }}>Published:</strong> April 2026</div>
              <div className="flex items-center gap-1"><span>✍️</span> <strong style={{ color: "var(--text-1)" }}>By:</strong> Express Pharmacy Clinical Team</div>
              <div className="flex items-center gap-1"><span>⏱️</span> <strong style={{ color: "var(--text-1)" }}>Read time:</strong> 8 minutes</div>
              <div className="flex items-center gap-1"><span>📍</span> <strong style={{ color: "var(--text-1)" }}>Columbus, Ohio</strong></div>
            </div>

            <p className="text-lg mb-10 pl-5 border-l-4" style={{ color: "var(--text-2)", lineHeight: "1.8", borderColor: "#4cc966" }}>
              Managing a chronic condition — or supporting a loved one in long-term care — involves far more than picking up prescriptions. The right pharmacy becomes a genuine partner in health: helping medications work better, reducing risk, and making daily care more manageable. Here is how to make that choice wisely.
            </p>

            {/* IMAGE 4 */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-lg" style={{ boxShadow: "0 12px 48px rgba(26,122,46,0.14)" }}>
              <Image src="/images/blog-photo-4.jpg" alt="Express Pharmacy pharmacist in white coat reviewing medications with a patient at the pharmacy counter — personalized support starts with a conversation" width={1100} height={600} className="w-full object-cover" />
              <div className="px-5 py-3" style={{ background: "#0f2744", color: "rgba(255,255,255,0.82)" }}>
                <em style={{ color: "#4cc966", fontStyle: "normal", fontWeight: 600 }}>&quot;Personalized support starts with a conversation.&quot;</em> &mdash; Our pharmacists take the time to understand each patient&apos;s situation before every recommendation.
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold mt-12 mb-4 pb-3" style={{ color: "#0f2744", borderBottom: "2px solid var(--primary-dim)" }} id="why-it-matters">
              Why Your Choice of Pharmacy Matters
            </h2>

            <p className="mb-5" style={{ color: "var(--text-2)" }}>
              Chronic diseases like <strong style={{ color: "var(--text-1)" }}>diabetes, hypertension, asthma, and heart disease</strong> often require complex medication regimens. Missing a dose, incorrect timing, or an unnoticed drug interaction can lead to complications, hospitalizations, or a worsening of condition.
            </p>

            <p className="mb-8" style={{ color: "var(--text-2)" }}>
              A specialized <strong style={{ color: "var(--text-1)" }}>long-term care pharmacy in Columbus, Ohio</strong> is designed from the ground up to serve these needs — not just to dispense, but to actively manage. This is a fundamentally different service model from a standard retail pharmacy.
            </p>

            {/* STAT STRIP */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
              {[
                { num: "50%", label: "of chronic disease patients do not take medications as prescribed" },
                { num: "$300B+", label: "in annual U.S. costs linked to medication non-adherence" },
                { num: "1 in 3", label: "hospital readmissions are related to medication-related problems" },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl p-6 text-center" style={{ background: "#0f2744" }}>
                  <div className="font-display text-3xl font-bold mb-2" style={{ color: "#4cc966" }}>{stat.num}</div>
                  <div className="text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.4" }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* INLINE CTA 1 */}
            <div className="rounded-2xl p-8 my-12 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2744 0%, #1a3a5c 100%)" }}>
              <div className="absolute -top-8 -right-8 w-30 h-30 rounded-full" style={{ background: "rgba(76,201,102,0.1)" }} />
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#4cc966" }}>💊 Managing multiple medications?</div>
              <span className="font-display text-xl text-white font-bold block mb-2">There is a better way to manage them.</span>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>Our medication synchronization and adherence packaging programs are designed specifically for patients managing chronic conditions. Talk to a pharmacist today at no obligation.</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:6144959097" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm transition-all duration-300" style={{ background: "#4cc966", color: "#1e2530", boxShadow: "0 3px 12px rgba(76,201,102,0.35)" }}>📞 Call (614) 495-9097</a>
                <a href="mailto:info@expressrxdme.com" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm transition-colors" style={{ background: "transparent", color: "rgba(255,255,255,0.85)", border: "1.5px solid rgba(255,255,255,0.3)" }}>Transfer Your Prescriptions</a>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold mt-12 mb-4 pb-3" style={{ color: "#0f2744", borderBottom: "2px solid var(--primary-dim)" }} id="key-factors">
              Key Factors When Choosing a Long-Term Care Pharmacy
            </h2>

            <p className="mb-8" style={{ color: "var(--text-2)" }}>Not all pharmacies are built for long-term care. Here are the six most important capabilities to evaluate when making your decision.</p>

            {/* Factor 1 */}
            <h3 className="font-sans text-lg font-bold mt-8 mb-3 flex items-center gap-3" style={{ color: "var(--primary)" }}>
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "var(--primary)" }}>1</span>
              Comprehensive Medication Management
            </h3>
            <p className="mb-4" style={{ color: "var(--text-2)" }}>A reliable pharmacy should do more than fill prescriptions. Look for structured services that go beyond dispensing:</p>
            <ul className="mb-6">
              {[
                "Medication therapy management (MTM) reviews to identify interactions or duplications",
                "Coordination with your physicians for timely prescription adjustments",
                "Chronic disease monitoring support and follow-up communication",
                "Hospital-to-home transition support to prevent readmissions",
              ].map((item, i) => (
                <li key={i} className="py-1.5 pl-7 relative border-b text-sm" style={{ color: "var(--text-2)", borderColor: "rgba(22,163,74,0.12)" }}>
                  <span className="absolute left-0 font-bold" style={{ color: "var(--primary)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-8" style={{ color: "var(--text-2)" }}>This level of clinical involvement is especially important for patients managing <strong style={{ color: "var(--text-1)" }}>five or more prescriptions</strong> simultaneously — a common situation in long-term and post-surgical care.</p>

            {/* Factor 2 */}
            <h3 className="font-sans text-lg font-bold mt-8 mb-3 flex items-center gap-3" style={{ color: "var(--primary)" }}>
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "var(--primary)" }}>2</span>
              Medication Synchronization
            </h3>
            <p className="mb-4" style={{ color: "var(--text-2)" }}><strong style={{ color: "var(--text-1)" }}>Medication synchronization</strong> aligns all of your prescriptions to a single refill date each month. For patients managing multiple medications, it removes a significant source of confusion and missed doses.</p>
            <ul className="mb-8">
              {[
                "Eliminates multiple trips to the pharmacy each month",
                "Simplifies routines for patients and caregivers alike",
                "Minimizes the risk of running out of critical medications",
                "Creates natural checkpoints for regular medication review",
              ].map((item, i) => (
                <li key={i} className="py-1.5 pl-7 relative border-b text-sm" style={{ color: "var(--text-2)", borderColor: "rgba(22,163,74,0.12)" }}>
                  <span className="absolute left-0 font-bold" style={{ color: "var(--primary)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Factor 3 */}
            <h3 className="font-sans text-lg font-bold mt-8 mb-3 flex items-center gap-3" style={{ color: "var(--primary)" }}>
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "var(--primary)" }}>3</span>
              Adherence Packaging (Blister Packs)
            </h3>
            <p className="mb-6" style={{ color: "var(--text-2)" }}>Adherence packaging organizes medications by date and time — typically in clearly labeled blister packs or unit-dose pouches. For elderly patients, those with cognitive challenges, or caregivers managing medications for a loved one, this system dramatically reduces errors.</p>

            {/* IMAGE 3 */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg" style={{ boxShadow: "0 12px 48px rgba(26,122,46,0.14)" }}>
              <Image src="/images/blog-photo-3.jpg" alt="Express Pharmacy delivery driver handing medication package to elderly woman at front door — reliable home delivery of medications in Columbus Ohio" width={1100} height={600} className="w-full object-cover" />
              <div className="px-5 py-3" style={{ background: "#0f2744", color: "rgba(255,255,255,0.82)" }}>
                <em style={{ color: "#4cc966", fontStyle: "normal", fontWeight: 600 }}>&quot;Reliable delivery ensures medications arrive on time.&quot;</em> &mdash; Express Pharmacy &amp; DME delivers across Columbus Metro and offers statewide mail-order throughout Ohio.
              </div>
            </div>

            <ul className="mb-8">
              {[
                "Scheduled and same-day delivery options throughout the Columbus metro area",
                "Statewide mail-order fulfillment across Ohio",
                "Coordination with refill cycles to prevent gaps in therapy",
                "Secure, patient-appropriate transport for temperature-sensitive medications",
              ].map((item, i) => (
                <li key={i} className="py-1.5 pl-7 relative border-b text-sm" style={{ color: "var(--text-2)", borderColor: "rgba(22,163,74,0.12)" }}>
                  <span className="absolute left-0 font-bold" style={{ color: "var(--primary)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="rounded-r-2xl p-6 my-8 border-l-4" style={{ background: "var(--primary-dim)", borderColor: "var(--primary)" }}>
              <p className="m-0" style={{ color: "var(--text-1)" }}>
                <strong style={{ color: "var(--primary)" }}>At Express Pharmacy &amp; DME:</strong> Our adherence packaging is customized for each patient&apos;s specific regimen &mdash; including medication names, times, and special instructions. This is one of our most requested services for both home care patients and long-term care facilities. <a href="#" style={{ color: "var(--primary)" }}>Learn more about our packaging services</a>
              </p>
            </div>

            {/* Factor 4 */}
            <h3 className="font-sans text-lg font-bold mt-8 mb-3 flex items-center gap-3" style={{ color: "var(--primary)" }}>
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "var(--primary)" }}>4</span>
              24/7 Pharmacist Support
            </h3>
            <p className="mb-4" style={{ color: "var(--text-2)" }}>Healthcare needs do not stop at 5 PM. Access to a pharmacist outside of regular business hours can make a real difference — especially for patients managing complex regimens or recovering at home after hospitalization.</p>
            <ul className="mb-6">
              {[
                "Around-the-clock consultation for medication questions",
                "Emergency medication guidance when urgent situations arise",
                "Immediate support for side effect concerns or dosing uncertainty",
              ].map((item, i) => (
                <li key={i} className="py-1.5 pl-7 relative border-b text-sm" style={{ color: "var(--text-2)", borderColor: "rgba(22,163,74,0.12)" }}>
                  <span className="absolute left-0 font-bold" style={{ color: "var(--primary)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-8" style={{ color: "var(--text-2)" }}>Express Pharmacy & DME provides <strong style={{ color: "var(--text-1)" }}>24/7 AI-assisted pharmacist access</strong>, giving patients and caregivers a trusted resource whenever they need it — without waiting for business hours.</p>

            {/* Factor 5 */}
            <h3 className="font-sans text-lg font-bold mt-8 mb-3 flex items-center gap-3" style={{ color: "var(--primary)" }}>
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "var(--primary)" }}>5</span>
              Delivery Services
            </h3>
            <p className="mb-6" style={{ color: "var(--text-2)" }}>Reliable delivery is not just a convenience — for patients with mobility limitations, those in assisted living, or caregivers managing multiple responsibilities, it is essential to continuity of care.</p>

            {/* IMAGE 1 */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg" style={{ boxShadow: "0 12px 48px rgba(26,122,46,0.14)" }}>
              <Image src="/images/blog-photo-1.jpg" alt="Pharmacist helping elderly patient review medications at table with pill organizer, prescription bottles, and checklist &mdash; Right Medication, Right Dose, Right Time, Every Time" width={1100} height={600} className="w-full object-cover" />
              <div className="px-5 py-3" style={{ background: "#0f2744", color: "rgba(255,255,255,0.82)" }}>
                <em style={{ color: "#4cc966", fontStyle: "normal", fontWeight: 600 }}>Personalized medication counseling</em> — helping patients understand the right medication, the right dose, at the right time. Every time.
              </div>
            </div>

            <ul className="mb-8">
              {[
                "Easy-to-follow schedules organized by day and time of day",
                "Reduced confusion — especially for elderly or cognitively challenged patients",
                "Improved compliance with prescribed regimens",
                "Caregiver-friendly — makes medication administration faster and more confident",
              ].map((item, i) => (
                <li key={i} className="py-1.5 pl-7 relative border-b text-sm" style={{ color: "var(--text-2)", borderColor: "rgba(22,163,74,0.12)" }}>
                  <span className="absolute left-0 font-bold" style={{ color: "var(--primary)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* INLINE CTA 2 */}
            <div className="rounded-2xl p-8 my-12 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2744 0%, #1a3a5c 100%)" }}>
              <div className="absolute -top-8 -right-8 w-30 h-30 rounded-full" style={{ background: "rgba(76,201,102,0.1)" }} />
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#4cc966" }}>🚚 Medication Delivery</div>
              <span className="font-display text-xl text-white font-bold block mb-2">We deliver across Columbus — and across Ohio.</span>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>Whether you need local delivery or statewide mail-order, we make sure your medications arrive on schedule, every time. Ask about setting up recurring delivery today.</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:6144959097" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm transition-all duration-300" style={{ background: "#4cc966", color: "#1e2530", boxShadow: "0 3px 12px rgba(76,201,102,0.35)" }}>Set Up Delivery</a>
                <a href="mailto:info@expressrxdme.com" className="inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm transition-colors" style={{ background: "transparent", color: "rgba(255,255,255,0.85)", border: "1.5px solid rgba(255,255,255,0.3)" }}>Email Us</a>
              </div>
            </div>

            {/* Factor 6 */}
            <h3 className="font-sans text-lg font-bold mt-8 mb-3 flex items-center gap-3" style={{ color: "var(--primary)" }}>
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "var(--primary)" }}>6</span>
              Specialty and Compounded Medications
            </h3>
            <p className="mb-4" style={{ color: "var(--text-2)" }}>Not all patients can take standard commercial medications. Certain conditions — pediatric cases, geriatric patients, complex chronic conditions, or those with specific allergies — require medications tailored specifically to them.</p>
            <p className="mb-4" style={{ color: "var(--text-2)" }}>A trusted <strong style={{ color: "var(--text-1)" }}>compounding pharmacy in Ohio</strong> can:</p>
            <ul className="mb-6">
              {[
                "Adjust dosages to meet individual patient needs precisely",
                "Create alternative delivery forms — liquids, creams, gels, transdermal patches",
                "Remove allergens, dyes, preservatives, or additives from formulations",
                "Prepare discontinued medications where no commercial alternative exists",
                "Combine multiple compatible medications into a single formulation to reduce pill burden",
              ].map((item, i) => (
                <li key={i} className="py-1.5 pl-7 relative border-b text-sm" style={{ color: "var(--text-2)", borderColor: "rgba(22,163,74,0.12)" }}>
                  <span className="absolute left-0 font-bold" style={{ color: "var(--primary)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-8" style={{ color: "var(--text-2)" }}>This flexibility is essential for truly personalized care. <a href="#" style={{ color: "var(--primary)" }}>Explore our compounding services</a></p>

            <h2 className="font-display text-2xl font-bold mt-12 mb-4 pb-3" style={{ color: "#0f2744", borderBottom: "2px solid var(--primary-dim)" }} id="ltc-difference">
              What Sets a Long-Term Care Pharmacy Apart
            </h2>

            <p className="mb-4" style={{ color: "var(--text-2)" }}>Unlike traditional retail pharmacies, a long-term care pharmacy in Columbus, Ohio is structured to serve patients with <strong style={{ color: "var(--text-1)" }}>ongoing and complex medical needs</strong>. The differences are significant:</p>

            <ul className="mb-8">
              {[
                "Close, proactive collaboration with physicians and care coordinators",
                "Systems purpose-built for medication adherence and patient safety",
                "Support tailored to chronic care, post-surgical recovery, and long-term treatment",
                "Regulatory compliance expertise for facilities and institutional settings",
              ].map((item, i) => (
                <li key={i} className="py-1.5 pl-7 relative border-b text-sm" style={{ color: "var(--text-2)", borderColor: "rgba(22,163,74,0.12)" }}>
                  <span className="absolute left-0 font-bold" style={{ color: "var(--primary)" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-10" style={{ color: "var(--text-2)" }}>These pharmacies act as an extension of the care team — not a separate transaction point. They reduce the risk of medication-related complications by staying actively engaged in care.</p>

            {/* WHY CHOOSE US */}
            <div className="rounded-2xl p-8 my-12 border" style={{ background: "#f2f6f3", borderColor: "rgba(22,163,74,0.12)" }}>
              <div className="font-display text-xl mb-6" style={{ color: "#0f2744" }}>Why Patients &amp; Providers Choose Express Pharmacy &amp; DME</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: "🦄", title: "Physician-led oversight", desc: "Dr. Daniel Amoh, MD, RPh — founder with dual clinical credentials" },
                  { icon: "🔗", title: "One partner, all needs", desc: "Pharmacy, DME, compounding, specialty, LTC — all coordinated" },
                  { icon: "⏰", title: "24/7 pharmacist access", desc: "AI-assisted support available outside business hours" },
                  { icon: "🚚", title: "Reliable delivery", desc: "Columbus metro + statewide Ohio mail-order" },
                  { icon: "💳", title: "Broad insurance accepted", desc: "Medicare, Medicaid, most major commercial plans" },
                  { icon: "🏥", title: "Facility partnerships", desc: "LTC, nursing homes, assisted living, hospice support" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-white rounded-xl p-4 border" style={{ borderColor: "rgba(22,163,74,0.12)" }}>
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <strong className="block text-sm" style={{ color: "var(--text-1)" }}>{item.title}</strong>
                      <span className="text-xs" style={{ color: "var(--text-3)" }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold mt-12 mb-4 pb-3" style={{ color: "#0f2744", borderBottom: "2px solid var(--primary-dim)" }} id="caregiver-provider">
              Guidance for Caregivers and Healthcare Providers
            </h2>

            <p className="mb-8" style={{ color: "var(--text-2)" }}>The right pharmacy affects not just patients — but everyone involved in their care. Here is what to look for from each perspective.</p>

            {/* IMAGE 2 */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg" style={{ boxShadow: "0 12px 48px rgba(26,122,46,0.14)" }}>
              <Image src="/images/blog-photo-2.jpg" alt="We Care Long-Term Care Pharmacy blister pack showing weekly medication schedule organized by Morning, Noon, Evening and Bedtime &mdash; with the message: Better Organization, Better Adherence, Better Health" width={1100} height={600} className="w-full object-cover" />
              <div className="px-5 py-3" style={{ background: "#0f2744", color: "rgba(255,255,255,0.82)" }}>
                <em style={{ color: "#4cc966", fontStyle: "normal", fontWeight: 600 }}>We Care Long-Term Care Pharmacy&apos;s blister pack system</em> &mdash; each compartment labeled by day and time, removing guesswork and reducing medication errors for patients and caregivers.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
              {/* Patient Panel */}
              <div className="rounded-xl p-6 border" style={{ background: "var(--primary-dim)", borderColor: "rgba(76,201,102,0.3)" }}>
                <div className="text-2xl mb-3">👨‍👩‍👧</div>
                <span className="block font-bold mb-4" style={{ color: "#0f2744" }}>For Caregivers &amp; Families</span>
                <ul>
                  {[
                    "Does the pharmacy simplify the medication routine?",
                    "Are medications clearly packaged and labeled by day and time?",
                    "Is a pharmacist available when urgent questions arise?",
                    "Can prescriptions be synchronized, managed, and delivered efficiently?",
                    "Does the pharmacy communicate proactively about refills or changes?",
                  ].map((item, i) => (
                    <li key={i} className="py-1 pl-6 relative text-sm border-b" style={{ color: "#5c3a1a", borderColor: "rgba(0,0,0,0.06)" }}>
                      <span className="absolute left-0 font-bold" style={{ color: "var(--primary)" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Provider Panel */}
              <div className="rounded-xl p-6 border" style={{ background: "#eef2ff", borderColor: "rgba(99,102,241,0.25)" }}>
                <div className="text-2xl mb-3">🎯</div>
                <span className="block font-bold mb-4" style={{ color: "#0f2744" }}>For Healthcare Providers</span>
                <ul>
                  {[
                    "Does the pharmacy communicate proactively about prescription changes?",
                    "Is medication therapy management (MTM) actively supported?",
                    "Are prior authorizations handled quickly and accurately?",
                    "Can the pharmacy scale with your patient volume and complexity?",
                    "Are compounding and specialty services available when needed?",
                  ].map((item, i) => (
                    <li key={i} className="py-1 pl-6 relative text-sm border-b" style={{ color: "#5c3a1a", borderColor: "rgba(0,0,0,0.06)" }}>
                      <span className="absolute left-0 font-bold" style={{ color: "#6366f1" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-10" style={{ color: "var(--text-2)" }}>A pharmacy that offers synchronization, adherence packaging, delivery, and direct clinical communication reduces the daily burden on caregivers and streamlines provider workflows significantly. <a href="#" style={{ color: "var(--primary)" }}>Learn about our provider partnership program</a></p>

            <h2 className="font-display text-2xl font-bold mt-12 mb-4 pb-3" style={{ color: "#0f2744", borderBottom: "2px solid var(--primary-dim)" }} id="red-flags">
              Red Flags to Watch For
            </h2>

            <p className="mb-6" style={{ color: "var(--text-2)" }}>Not all pharmacies are equipped for long-term care. These warning signs suggest a pharmacy may not be the right fit for complex or chronic care needs:</p>

            <div className="rounded-r-2xl p-6 my-8 border-l-4" style={{ background: "#fff8f0", borderColor: "#e07a2a" }}>
              <div className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "#b05a10" }}>Warning Signs</div>
              <ul>
                {[
                  "Limited or inconsistent communication with healthcare providers",
                  "No adherence packaging, synchronization, or structured support systems",
                  "Inconsistent medication availability or frequent fulfillment delays",
                  "No after-hours pharmacist access or emergency guidance",
                  "Inability to handle specialty or compounded medications",
                  "No delivery options for patients with limited mobility or transport access",
                ].map((item, i) => (
                  <li key={i} className="py-1.5 pl-7 relative border-b text-sm" style={{ color: "#5c3a1a", borderColor: "rgba(224,122,42,0.15)" }}>
                    <span className="absolute left-0 font-bold" style={{ color: "#e07a2a" }}>!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mb-10" style={{ color: "var(--text-2)" }}>These gaps create real risk — including missed doses, dangerous interactions going unnoticed, and disruptions in care continuity. In a long-term care setting, they are not acceptable.</p>

            <h2 className="font-display text-2xl font-bold mt-12 mb-4 pb-3" style={{ color: "#0f2744", borderBottom: "2px solid var(--primary-dim)" }} id="making-the-choice">
              Making the Right Choice
            </h2>

            <p className="mb-4" style={{ color: "var(--text-2)" }}>Choosing a long-term care pharmacy is about finding a provider that functions as a true partner — supporting patients, caregivers, and healthcare teams in managing complex conditions over time.</p>
            <p className="mb-4" style={{ color: "var(--text-2)" }}>The ideal pharmacy combines <strong style={{ color: "var(--text-1)" }}>convenience, clinical depth, and reliability</strong>. In Columbus, Ohio, Express Pharmacy &amp; DME — operating as We Care Long-Term Care Pharmacy — is structured precisely to meet these needs through coordinated care, adherence solutions, and patient-centered services.</p>
            <p className="mb-8" style={{ color: "var(--text-2)" }}>Effective chronic disease management depends on consistency, accuracy, and support. A pharmacy that offers medication synchronization, adherence packaging, 24/7 pharmacist access, delivery services, and compounding capabilities can significantly improve both outcomes and quality of life for patients and those who care for them.</p>

            <div className="rounded-r-2xl p-6 my-8 border-l-4" style={{ background: "var(--primary-dim)", borderColor: "var(--primary)" }}>
              <p className="m-0" style={{ color: "var(--text-1)" }}>
                <strong style={{ color: "var(--primary)" }}>Ready to transfer your prescriptions?</strong> We make it easy. Call us at <a href="tel:6144959097" style={{ color: "var(--primary)" }}>(614) 495-9097</a> and our team will coordinate the transfer directly with your current pharmacy. No disruption in your care.
              </p>
            </div>

            {/* FAQ - CSS-based toggle with Checkbox Hack */}
            <div className="mt-12 mb-10">
              <h2 className="font-display text-2xl mb-6" style={{ color: "#0f2744" }} id="faq">Frequently Asked Questions</h2>

              {[
                {
                  id: "faq1",
                  q: "What is the difference between a long-term care pharmacy and a retail pharmacy?",
                  a: "A retail pharmacy primarily fills individual prescriptions on demand. A long-term care pharmacy is designed to serve patients with ongoing, complex medication needs — offering medication therapy management, adherence packaging, synchronization, 24/7 pharmacist access, delivery, and close coordination with healthcare providers.",
                },
                {
                  id: "faq2",
                  q: "Does Express Pharmacy & DME accept Medicare and Medicaid?",
                  a: "Yes. We accept Medicare Part D, Ohio Medicaid, and most major commercial insurance plans including UnitedHealth, Aetna, Cigna, Humana, Anthem/BCBS, and more.",
                },
                {
                  id: "faq3",
                  q: "What is adherence packaging and how does it help my loved one?",
                  a: "Adherence packaging organizes medications into clearly labeled compartments by date and time — typically morning, noon, evening, and bedtime. This system dramatically reduces confusion and medication errors.",
                },
                {
                  id: "faq4",
                  q: "Can you deliver medications to assisted living facilities or nursing homes in Columbus?",
                  a: "Yes. We serve long-term care facilities throughout Columbus and the surrounding metro area, including assisted living communities, nursing homes, group homes, and hospice programs.",
                },
              ].map((faq) => (
                <details key={faq.id} className="border rounded-xl mb-3 overflow-hidden" style={{ borderColor: "rgba(22,163,74,0.12)" }}>
                  <summary className="w-full text-left px-5 py-4 font-semibold text-sm cursor-pointer hover:bg-[var(--primary-dim)] transition-colors list-none flex items-center justify-between" style={{ color: "var(--text-1)", background: "var(--bg-base)" }}>
                    {faq.q}
                    <span className="text-lg ml-2" style={{ color: "var(--primary)" }}>+</span>
                  </summary>
                  <div className="px-5 pb-4 text-sm" style={{ color: "var(--text-2)", lineHeight: "1.7" }}>{faq.a}</div>
                </details>
              ))}
            </div>

            {/* FINAL CTA */}
            <div className="rounded-2xl p-10 text-center my-12" style={{ background: "linear-gradient(135deg, var(--primary) 0%, #0f4020 100%)" }}>
              <h2 className="font-display text-2xl text-white mb-3">Ready to make the switch?</h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">The right pharmacy does not just fill prescriptions — it helps ensure they work as intended. Transfer your care to a pharmacy built for long-term needs.</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: "📞", label: "Call Us", sub: "(614) 495-9097", href: "tel:6144959097" },
                  { icon: "✉️", label: "Email Us", sub: "info@expressrxdme.com", href: "mailto:info@expressrxdme.com" },
                  { icon: "🤝", label: "For Providers", sub: "Partner with our pharmacy", href: "#" },
                  { icon: "📠", label: "Fax a Prescription", sub: "(614) 448-3757", href: "tel:6144483757" },
                ].map((action, i) => (
                  <a key={i} href={action.href} className="block rounded-xl p-4 min-w-[160px] transition-colors hover:bg-white/10" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <div className="text-2xl mb-2">{action.icon}</div>
                    <div className="text-sm font-bold text-white">{action.label}</div>
                    <div className="text-xs text-white/60 mt-1">{action.sub}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* ARTICLE FOOTER */}
            <div className="border-t mt-12 pt-8" style={{ borderColor: "rgba(22,163,74,0.12)" }}>
              <BlogShareButtons />
              <div className="rounded-xl p-4 text-xs leading-relaxed" style={{ background: "#f2f6f3", color: "var(--text-3)" }}>
                <strong style={{ color: "var(--text-2)" }}>Disclaimer:</strong> This article is provided for educational and informational purposes only and does not constitute medical advice. Always consult your physician, pharmacist, or qualified healthcare provider before making changes to your medication regimen. Express Pharmacy &amp; DME is a licensed pharmacy operating in Columbus, Ohio.
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="relative">
            <div className="sticky top-24 flex flex-col gap-6">
              {/* In This Article */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: "rgba(22,163,74,0.12)", boxShadow: "0 4px 24px rgba(26,122,46,0.06)" }}>
                <div className="px-5 py-3 text-xs font-bold uppercase tracking-wider" style={{ background: "#0f2744", color: "rgba(255,255,255,0.7)" }}>In This Article</div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {[
                      { label: "Why Your Choice of Pharmacy Matters", href: "#why-it-matters" },
                      { label: "Key Factors to Consider", href: "#key-factors" },
                      { label: "What Sets LTC Pharmacy Apart", href: "#ltc-difference" },
                      { label: "Caregivers &amp; Providers", href: "#caregiver-provider" },
                      { label: "Red Flags to Watch For", href: "#red-flags" },
                      { label: "Making the Right Choice", href: "#making-the-choice" },
                      { label: "Frequently Asked Questions", href: "#faq" },
                    ].map((item, i) => (
                      <li key={i}>
                        <Link href={item.href} className="flex items-start gap-2 text-sm py-1 px-2 rounded-lg transition-colors hover:bg-[var(--primary-dim)]" style={{ color: "var(--text-2)" }}>
                          <span className="text-xs mt-1 flex-shrink-0" style={{ color: "#4cc966" }}>—</span>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Us */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: "rgba(22,163,74,0.12)", boxShadow: "0 4px 24px rgba(26,122,46,0.06)" }}>
                <div className="px-5 py-3 text-xs font-bold uppercase tracking-wider" style={{ background: "#0f2744", color: "rgba(255,255,255,0.7)" }}>Contact Us</div>
                <div className="p-5 space-y-4">
                  {[
                    { icon: "📞", label: "Phone", value: "(614) 495-9097", href: "tel:6144959097" },
                    { icon: "📠", label: "Fax (Rx &amp; Referrals)", value: "(614) 448-3757", href: "#" },
                    { icon: "✉️", label: "Email", value: "info@expressrxdme.com", href: "mailto:info@expressrxdme.com" },
                    { icon: "📍", label: "Location", value: "Columbus, Ohio (East Side)", href: "#" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-center pb-3 border-b last:border-b-0" style={{ borderColor: "rgba(22,163,74,0.12)" }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--primary-dim)" }}>{item.icon}</div>
                      <div>
                        <div className="text-[0.72rem] uppercase" style={{ color: "var(--text-3)" }}>{item.label}</div>
                        <div className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>
                          <a href={item.href} style={{ color: item.href !== "#" ? "var(--primary)" : "var(--text-1)" }}>{item.value}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: "rgba(22,163,74,0.12)", boxShadow: "0 4px 24px rgba(26,122,46,0.06)" }}>
                <div className="px-5 py-3 text-xs font-bold uppercase tracking-wider" style={{ background: "#0f2744", color: "rgba(255,255,255,0.7)" }}>Pharmacy Hours</div>
                <div className="p-5">
                  {[
                    { day: "Monday – Saturday", time: "9AM – 7PM" },
                    { day: "Sunday", time: "1PM – 7PM" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between py-2 border-b last:border-b-0 text-sm" style={{ borderColor: "rgba(22,163,74,0.12)", color: "var(--text-1)" }}>
                      <span style={{ color: "var(--text-2)" }}>{row.day}</span>
                      <span className="font-semibold">{row.time}</span>
                    </div>
                  ))}
                  <div className="mt-4 rounded-lg p-3 text-center text-xs font-bold" style={{ background: "#fef9ec", color: "#c8952a" }}>⏰ 24/7 Pharmacist Support Available</div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: "rgba(22,163,74,0.12)", boxShadow: "0 4px 24px rgba(26,122,46,0.06)" }}>
                <div className="px-5 py-3 text-xs font-bold uppercase tracking-wider" style={{ background: "#0f2744", color: "rgba(255,255,255,0.7)" }}>Our Services</div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {[
                      "Medication Management &amp; MTM",
                      "Adherence Packaging",
                      "Compounding Pharmacy",
                      "Specialty Medications",
                      "Durable Medical Equipment",
                      "Long-Term Care Facilities",
                      "Prescription Delivery",
                    ].map((item, i) => (
                      <li key={i}>
                        <Link href="#" className="flex items-start gap-2 text-sm py-1 px-2 rounded-lg transition-colors hover:bg-[var(--primary-dim)]" style={{ color: "var(--text-2)" }}>
                          <span className="text-xs mt-1 flex-shrink-0" style={{ color: "#4cc966" }}>—</span>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Topics */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: "rgba(22,163,74,0.12)", boxShadow: "0 4px 24px rgba(26,122,46,0.06)" }}>
                <div className="px-5 py-3 text-xs font-bold uppercase tracking-wider" style={{ background: "#0f2744", color: "rgba(255,255,255,0.7)" }}>Topics</div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Long-Term Care Pharmacy", "Medication Adherence", "Blister Packs", "Columbus Ohio",
                      "Compounding", "Chronic Disease", "Medication Delivery", "Caregiver Support",
                      "Synchronization", "MTM",
                    ].map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs border cursor-pointer transition-colors hover:bg-[var(--primary-dim)] hover:border-[var(--primary)] hover:text-[var(--primary)]" style={{ background: "#f2f6f3", borderColor: "rgba(22,163,74,0.12)", color: "var(--text-2)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* PAGE FOOTER */}
      <footer className="text-center py-6" style={{ background: "#0f2744", color: "rgba(255,255,255,0.6)" }}>
        <p className="text-sm">
          &amp;copy; 2025 <strong style={{ color: "white" }}>Express Pharmacy &amp; DME</strong> — DBA We Care Long-Term Care Pharmacy. Columbus, Ohio.
        </p>
        <p className="mt-2 text-sm">
          <a href="#" style={{ color: "#4cc966" }}>Privacy Policy</a> &amp;nbsp;&amp;middot;&amp;nbsp; <a href="#" style={{ color: "#4cc966" }}>HIPAA Notice</a> &amp;nbsp;&amp;middot;&amp;nbsp; <a href="#" style={{ color: "#4cc966" }}>Accessibility</a>
        </p>
      </footer>
    </div>
  );
}
