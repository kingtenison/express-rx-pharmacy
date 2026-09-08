export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
  author?: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "choose-long-term-care-pharmacy",
    title: "How to Choose the Right Long-Term Care Pharmacy in Columbus, Ohio",
    excerpt: "Managing a chronic condition — or supporting a loved one in long-term care — involves far more than picking up prescriptions. Learn how to choose a pharmacy that truly understands your needs.",
    category: "Patient Guide",
    readTime: "8 min read",
    date: "April 2026",
    featured: true,
    author: "ExpressRx Clinical Team",
    image: "/images/blog-pharmacy.jpg",
  },
  {
    slug: "what-is-compounded-medication",
    title: "What Is Compounded Medication? A Complete Guide for Patients",
    excerpt: "Compounded medications are custom-prepared by pharmacists to meet individual patient needs. Discover how compounding works, who benefits, and why it matters for your health.",
    category: "Medication Basics",
    readTime: "6 min read",
    date: "March 2026",
    author: "ExpressRx Clinical Team",
    image: "/images/blog-compounding.jpg",
  },
  {
    slug: "transfer-prescription-to-express-rx",
    title: "How to Transfer Your Prescription to ExpressRx in 3 Simple Steps",
    excerpt: "Switching pharmacies shouldn't be stressful. Follow these three easy steps to transfer your prescriptions to ExpressRx and start receiving personalized care today.",
    category: "Getting Started",
    readTime: "4 min read",
    date: "March 2026",
    author: "ExpressRx Team",
    image: "/images/blog-transfer.jpg",
  },
  {
    slug: "understanding-your-insurance-prescription-coverage",
    title: "Understanding Your Insurance Prescription Coverage in Ohio",
    excerpt: "Navigating insurance plans and prescription drug coverage can be confusing. Here's a clear breakdown of how to maximize your benefits and minimize out-of-pocket costs.",
    category: "Insurance & Billing",
    readTime: "7 min read",
    date: "February 2026",
    author: "ExpressRx Team",
    image: "/images/blog-insurance.jpg",
  },
  {
    slug: "durable-medical-equipment-guide",
    title: "Durable Medical Equipment (DME): What You Need to Know Before Ordering",
    excerpt: "From wheelchairs to CPAP machines, DME is essential for many patients. Learn what qualifies, how insurance covers it, and how ExpressRx simplifies the process.",
    category: "DME & Equipment",
    readTime: "6 min read",
    date: "February 2026",
    author: "ExpressRx Clinical Team",
    image: "/images/blog-dme.jpg",
  },
  {
    slug: "why-24-7-pharmacist-access-matters",
    title: "Why 24/7 Pharmacist Access Matters More Than You Think",
    excerpt: "Health concerns don't follow business hours. Discover why having round-the-clock pharmacist support can be lifesaving — and what to look for in a pharmacy.",
    category: "Patient Guide",
    readTime: "5 min read",
    date: "January 2026",
    author: "ExpressRx Clinical Team",
    image: "/images/blog-24-7.jpg",
  },
  {
    slug: "medication-adherence-tips-chronic-conditions",
    title: "10 Medication Adherence Tips for Managing Chronic Conditions",
    excerpt: "Missing doses or stopping medications early can seriously impact your health. These proven strategies will help you stay on track with your treatment plan.",
    category: "Health Tips",
    readTime: "6 min read",
    date: "January 2026",
    author: "ExpressRx Clinical Team",
    image: "/images/blog-adherence.jpg",
  },
  {
    slug: "compounding-for-pets",
    title: "Compounding for Pets: Custom Medications Your Furry Friends Need",
    excerpt: "Veterinary compounding allows pharmacists to create flavored, sized, and dosed medications specifically for animals. Learn how it helps pets get the care they deserve.",
    category: "Compounding",
    readTime: "5 min read",
    date: "December 2025",
    author: "ExpressRx Compounding Lab",
    image: "/images/blog-pets.jpg",
  },
  {
    slug: "signs-your-pharmacy-is-letting-you-down",
    title: "7 Signs Your Pharmacy Is Letting You Down",
    excerpt: "Long wait times, empty shelves, and impersonal service — these are red flags. Find out when it's time to switch to a pharmacy that puts you first.",
    category: "Patient Guide",
    readTime: "5 min read",
    date: "December 2025",
    author: "ExpressRx Team",
    image: "/images/blog-signs.jpg",
  },
  {
    slug: "how-express-rx-supports-nursing-facilities",
    title: "How ExpressRx Partners with Nursing Facilities for Better Patient Outcomes",
    excerpt: "Long-term care facilities need a pharmacy partner they can trust. See how ExpressRx's specialized services improve medication accuracy and resident satisfaction.",
    category: "For Providers",
    readTime: "7 min read",
    date: "November 2025",
    author: "ExpressRx Clinical Team",
    image: "/images/blog-nursing.jpg",
  },
];

export const blogContent: Record<string, { html: string }> = {
  "what-is-compounded-medication": {
    html: `
      <p class="lead">Compounded medications are custom-prepared by pharmacists to meet individual patient needs that commercial manufacturing cannot address. Whether it's a child who needs a liquid form of a tablet, an adult with an allergy to a common filler ingredient, or a pet that needs a flavored medication — compounding makes it possible.</p>

      <h2>What Is Drug Compounding?</h2>
      <p>Drug compounding is the practice of creating a customized medication for a patient. A licensed pharmacist combines, mixes, or alters ingredients to create a prescription tailored to the individual's specific needs. This process is regulated by state boards of pharmacy and follows strict quality standards.</p>
      <p>Compounding is not about mass production — it's about precision. Every compounded medication is made for a specific patient with a specific need.</p>

      <h2>Who Benefits from Compounded Medications?</h2>
      <ul>
        <li><strong>Pediatric patients</strong> — Children often need medications in liquid, chewable, or flavored forms that aren't commercially available.</li>
        <li><strong>Geriatric patients</strong> — Older adults may need lower doses or alternative delivery methods like transdermal creams.</li>
        <li><strong>Patients with allergies</strong> — If you're allergic to dyes, gluten, lactose, or other common fillers, compounding removes the offending ingredient.</li>
        <li><strong>Patients needing combination medications</strong> — Two or more medications can be combined into a single dose for convenience.</li>
        <li><strong>Veterinary patients</strong> — Pets need flavored, sized, and dosed medications that commercial drugs don't provide.</li>
      </ul>

      <h2>Common Types of Compounded Medications</h2>
      <p>Compounded medications come in many forms:</p>
      <ul>
        <li><strong>Topical creams and gels</strong> — Applied directly to the skin for localized treatment.</li>
        <li><strong>Oral suspensions</strong> — Liquid forms of medications for patients who can't swallow pills.</li>
        <li><strong>Transdermal preparations</strong> — Delivered through the skin for sustained, steady absorption.</li>
        <li><strong>Suppositories</strong> — For patients who cannot take oral medications.</li>
        <li><strong>Injectable preparations</strong> — Custom-dosed injectables for specific therapeutic needs.</li>
      </ul>

      <h2>Is Compounding Safe?</h2>
      <p>Yes — when performed by a licensed, accredited compounding pharmacy. At ExpressRx, our compounding lab follows USP &lt;795&gt; and &lt;797&gt; standards, uses pharmaceutical-grade ingredients, and undergoes regular quality testing. Every preparation is verified by a licensed pharmacist before dispensing.</p>

      <h2>How to Get a Compounded Medication</h2>
      <p>Ask your prescriber about compounded alternatives if you're struggling with commercial medications. Your doctor can write a prescription specifying the compounded formulation, and our pharmacists will work directly with them to ensure the preparation meets your exact needs.</p>

      <div class="cta-box">
        <h3>Need a Custom Medication?</h3>
        <p>Our compounding team is ready to help. Call us at <strong>(614) 495-9097</strong> or visit our pharmacy to discuss your needs.</p>
      </div>
    `,
  },

  "transfer-prescription-to-express-rx": {
    html: `
      <p class="lead">Switching to ExpressRx is simple. In three easy steps, you can transfer all your prescriptions and start receiving the personalized care you deserve.</p>

      <h2>Step 1: Contact Us</h2>
      <p>Call us at <strong>(614) 495-9097</strong>, visit in person, or use our online transfer form. Provide your current pharmacy information and the prescriptions you'd like transferred. That's it — we handle the rest.</p>
      <p>Our team will reach out to your current pharmacy to request the transfers. Most transfers are completed within 24 hours.</p>

      <h2>Step 2: We Handle the Paperwork</h2>
      <p>Once we receive your information, our pharmacists will:</p>
      <ul>
        <li>Contact your current pharmacy to verify and transfer prescriptions</li>
        <li>Reach out to your prescribers if any prescriptions need renewal</li>
        <li>Review your medications for interactions or optimizations</li>
        <li>Set up your profile with insurance and allergy information</li>
      </ul>

      <h2>Step 3: Pick Up Your Medications</h2>
      <p>When everything is ready, we'll notify you. Come in, meet our team, and pick up your prescriptions. We'll take the time to walk you through each medication, answer questions, and make sure you understand your treatment plan.</p>

      <h2>Why Patients Switch to ExpressRx</h2>
      <ul>
        <li><strong>Same-day transfers</strong> — Most prescriptions are ready within hours.</li>
        <li><strong>Insurance verification</strong> — We check your coverage before filling anything.</li>
        <li><strong>Medication reviews</strong> — Our pharmacists review everything for safety.</li>
        <li><strong>Personalized service</strong> — You're not a number; you're a neighbor.</li>
      </ul>

      <div class="cta-box">
        <h3>Ready to Switch?</h3>
        <p>Call <strong>(614) 495-9097</strong> or visit us at our Columbus location. We'll have your prescriptions ready today.</p>
      </div>
    `,
  },

  "understanding-your-insurance-prescription-coverage": {
    html: `
      <p class="lead">Insurance coverage for prescriptions can be confusing. Understanding the basics — formularies, tiers, copays, and prior authorizations — can save you hundreds of dollars each year.</p>

      <h2>What Is a Formulary?</h2>
      <p>A formulary is a list of medications that your insurance plan covers. Most formularies are organized into tiers, with lower tiers costing you less out of pocket. Generic medications typically fall into Tier 1, while brand-name and specialty drugs are in higher tiers.</p>

      <h2>Understanding Prescription Tiers</h2>
      <ul>
        <li><strong>Tier 1 (Generic)</strong> — Lowest copay. These are generic versions of brand-name drugs.</li>
        <li><strong>Tier 2 (Preferred Brand)</strong> — Moderate copay. Brand-name drugs your insurer has negotiated discounts on.</li>
        <li><strong>Tier 3 (Non-Preferred Brand)</strong> — Higher copay. Brand-name drugs without preferred pricing.</li>
        <li><strong>Tier 4 (Specialty)</strong> — Highest cost. Complex medications for chronic or rare conditions.</li>
      </ul>

      <h2>How to Maximize Your Benefits</h2>
      <p>Here are strategies to get the most from your prescription coverage:</p>
      <ul>
        <li><strong>Ask about generics</strong> — Generic medications are FDA-approved and equally effective at a fraction of the cost.</li>
        <li><strong>Use mail-order when possible</strong> — Many plans offer lower copays for 90-day supplies by mail.</li>
        <li><strong>Check for manufacturer coupons</strong> — Drug manufacturers often offer savings programs for brand-name medications.</li>
        <li><strong>Review your formulary annually</strong> — Coverage changes each year. What wasn't covered last year might be this year.</li>
        <li><strong>Work with your pharmacist</strong> — We can help identify lower-cost alternatives and find savings programs.</li>
      </ul>

      <h2>What Is Prior Authorization?</h2>
      <p>Prior authorization is when your insurance requires approval before covering certain medications. Your prescriber submits clinical information to the insurance company, who decides whether to approve the medication. This process can take 2-5 business days.</p>
      <p>At ExpressRx, we track prior authorizations proactively and contact your prescriber's office to expedite the process.</p>

      <div class="cta-box">
        <h3>Questions About Your Coverage?</h3>
        <p>Our team can help you understand your benefits and find ways to save. Call <strong>(614) 495-9097</strong> or visit us today.</p>
      </div>
    `,
  },

  "durable-medical-equipment-guide": {
    html: `
      <p class="lead">Durable Medical Equipment (DME) — from wheelchairs and walkers to CPAP machines and oxygen concentrators — is essential for many patients. Understanding how to access DME through your insurance can make a significant difference in your quality of life.</p>

      <h2>What Qualifies as DME?</h2>
      <p>DME includes medical devices and equipment that are:</p>
      <ul>
        <li>Durable — can withstand repeated use</li>
        <li>Used for a medical purpose</li>
        <li>Not useful to an injured person in the absence of illness or injury</li>
        <li>Expected to last at least 3 years</li>
      </ul>
      <p>Common examples include wheelchairs, hospital beds, oxygen equipment, CPAP machines, blood glucose monitors, and prosthetic devices.</p>

      <h2>Does Insurance Cover DME?</h2>
      <p>Most insurance plans, including Medicare Part B, cover DME when prescribed by your doctor. Coverage typically includes:</p>
      <ul>
        <li><strong>Medicare Part B</strong> — Covers 80% of approved DME costs after your deductible</li>
        <li><strong>Medicaid</strong> — Coverage varies by state; Ohio Medicaid covers most medically necessary DME</li>
        <li><strong>Private insurance</strong> — Coverage depends on your specific plan and deductible</li>
      </ul>

      <h2>How ExpressRx Simplifies DME</h2>
      <p>Getting DME doesn't have to be complicated. ExpressRx handles the entire process:</p>
      <ul>
        <li>We verify your insurance coverage before delivery</li>
        <li>We coordinate with your prescriber for the required documentation</li>
        <li>We deliver and set up equipment in your home</li>
        <li>We provide ongoing maintenance and support</li>
        <li>We handle reorders and replacements as needed</li>
      </ul>

      <h2>Common DME Categories</h2>
      <ul>
        <li><strong>Mobility</strong> — Wheelchairs, scooters, walkers, canes</li>
        <li><strong>Respiratory</strong> — Oxygen concentrators, CPAP machines, nebulizers</li>
        <li><strong>Bathroom safety</strong> — Grab bars, raised toilet seats, shower chairs</li>
        <li><strong>Bedroom</strong> — Hospital beds, bed rails, patient lifts</li>
        <li><strong>Diabetic supplies</strong> — Glucose meters, test strips, insulin pumps</li>
      </ul>

      <div class="cta-box">
        <h3>Need Durable Medical Equipment?</h3>
        <p>Our DME team will handle insurance verification, delivery, and setup. Call <strong>(614) 495-9097</strong> to get started.</p>
      </div>
    `,
  },

  "why-24-7-pharmacist-access-matters": {
    html: `
      <p class="lead">A medication question at 2 AM. An adverse reaction on a Sunday evening. A refill needed before a holiday weekend. Health concerns don't follow business hours — and neither should your pharmacy.</p>

      <h2>The Problem with Limited Pharmacy Hours</h2>
      <p>Most pharmacies operate on fixed schedules, leaving patients stranded when urgent questions arise. When you can't reach a pharmacist, you might:</p>
      <ul>
        <li>Take a medication incorrectly because you weren't sure about instructions</li>
        <li>Miss a dose because you couldn't get a refill in time</li>
        <li>Experience a side effect and have nowhere to turn for guidance</li>
        <li>End up in the emergency room for something a pharmacist could have addressed</li>
      </ul>

      <h2>What 24/7 Access Really Means</h2>
      <p>At ExpressRx, 24/7 pharmacist access means you can reach a licensed pharmacist by phone any time, day or night. This isn't an answering service — it's a real pharmacist who knows your medications and can provide clinical guidance.</p>

      <h2>Situations Where After-Hours Access Saves Lives</h2>
      <ul>
        <li><strong>Medication interactions</strong> — A patient takes two medications that shouldn't be combined. Quick pharmacist guidance prevents a hospital visit.</li>
        <li><strong>Adverse reactions</strong> — A child has a allergic reaction to a new medication. The pharmacist advises whether to go to the ER or manage at home.</li>
        <li><strong>Missed doses</strong> — A patient isn't sure whether to double up or skip. The pharmacist provides clear direction.</li>
        <li><strong>Urgent refills</strong> — A patient runs out of a critical medication on a Friday night. The pharmacist coordinates an emergency supply.</li>
      </ul>

      <h2>What to Look for in a Pharmacy</h2>
      <p>Not all pharmacies offer genuine 24/7 support. Ask these questions:</p>
      <ul>
        <li>Can I speak to a licensed pharmacist after hours, or just an on-call representative?</li>
        <li>Does the pharmacist have access to my medication history?</li>
        <li>Can they coordinate with my prescriber if needed?</li>
        <li>Is there an additional cost for after-hours access?</li>
      </ul>

      <div class="cta-box">
        <h3>Need a Pharmacist Now?</h3>
        <p>Call <strong>(614) 495-9097</strong> — we're here 24/7, 365 days a year. No appointment needed.</p>
      </div>
    `,
  },

  "medication-adherence-tips-chronic-conditions": {
    html: `
      <p class="lead">Medication non-adherence — missing doses, taking medications incorrectly, or stopping treatment early — is one of the biggest challenges in healthcare. These ten strategies will help you stay on track.</p>

      <h2>Why Adherence Matters</h2>
      <p>Research shows that 50% of patients with chronic conditions don't take medications as prescribed. This leads to:</p>
      <ul>
        <li>Worsening of the underlying condition</li>
        <li>Increased hospital admissions</li>
        <li>Higher healthcare costs</li>
        <li>Reduced quality of life</li>
      </ul>

      <h2>10 Proven Strategies</h2>

      <h3>1. Use a Pill Organizer</h3>
      <p>A weekly pill organizer with compartments for morning, afternoon, and evening doses makes it easy to see if you've taken your medication.</p>

      <h3>2. Set Daily Alarms</h3>
      <p>Use your phone's alarm or a medication reminder app to alert you at the same time each day.</p>

      <h3>3. Sync Medication Schedules</h3>
      <p>Ask your pharmacist about medication synchronization — aligning all your prescriptions to refill on the same day each month.</p>

      <h3>4. Keep a Medication List</h3>
      <p>Maintain an updated list of all medications, doses, and schedules. Share it with every healthcare provider you see.</p>

      <h3>5. Use Adherence Packaging</h3>
      <p>Blister packs, bubble packs, and pouch packaging organize your medications by date and time, making it impossible to miss a dose.</p>

      <h3>6. Talk to Your Pharmacist</h3>
      <p>If you're having trouble with a medication — side effects, cost, or complexity — your pharmacist can work with your prescriber to find alternatives.</p>

      <h3>7. Simplify Your Regimen</h3>
      <p>Ask about combination medications or once-daily formulations that reduce the number of pills you take each day.</p>

      <h3>8. Involve a Caregiver</h3>
      <p>If you have a family member or friend who helps with your care, involve them in your medication routine.</p>

      <h3>9. Refill Early</h3>
      <p>Don't wait until you're out. Request refills 3-5 days before you need them to avoid gaps in treatment.</p>

      <h3>10. Track Your Progress</h3>
      <p>Use a medication tracking app or a simple calendar to check off each dose. Seeing your streak grow is motivating.</p>

      <div class="cta-box">
        <h3>Struggling with Medication Adherence?</h3>
        <p>Our pharmacists can create a personalized adherence plan just for you. Call <strong>(614) 495-9097</strong> to get started.</p>
      </div>
    `,
  },

  "compounding-for-pets": {
    html: `
      <p class="lead">Pets deserve medications that taste good, fit their size, and are easy to administer. Veterinary compounding makes that possible by creating custom medications tailored to your furry family members.</p>

      <h2>Why Pets Need Compounded Medications</h2>
      <p>Most medications are manufactured for humans — in sizes, flavors, and forms that don't work for animals. A 60-pound dog and a 5-pound cat have very different needs. Compounding solves these problems:</p>
      <ul>
        <li><strong>Flavoring</strong> — Medications can be flavored with chicken, beef, fish, or other pet-friendly tastes</li>
        <li><strong>Dosage adjustment</strong> — Precise dosing for animals of all sizes, from large dogs to tiny cats</li>
        <li><strong>Alternative delivery</strong> — Transdermal gels, liquids, or chewable treats instead of pills</li>
        <li><strong>Combination medications</strong> — Multiple drugs combined into a single, easy-to-administer dose</li>
      </ul>

      <h2>Common Veterinary Compounding Applications</h2>
      <ul>
        <li><strong>Antibiotics</strong> — Flavored liquids for cats and dogs who refuse pills</li>
        <li><strong>Pain management</strong> — Custom-dosed transdermal gels for arthritis and post-surgical pain</li>
        <li><strong>Thyroid medications</strong> — Precise small doses for cats with hyperthyroidism</li>
        <li><strong>Hormone therapy</strong> — Custom preparations for endocrine disorders</li>
        <li><strong>Euthanasia solutions</strong> — Prepared with care for compassionate end-of-life care</li>
      </ul>

      <h2>How the Process Works</h2>
      <p>Your veterinarian writes a prescription specifying the compounded formulation. Our compounding pharmacists then prepare the medication using pharmaceutical-grade ingredients, following USP standards for safety and quality.</p>
      <p>We work closely with your vet to ensure the medication is accurate, effective, and easy for you to administer at home.</p>

      <div class="cta-box">
        <h3>Need Medication for Your Pet?</h3>
        <p>Ask your veterinarian about compounded options, or call us at <strong>(614) 495-9097</strong> to discuss your pet's needs with our compounding team.</p>
      </div>
    `,
  },

  "signs-your-pharmacy-is-letting-you-down": {
    html: `
      <p class="lead">Your pharmacy should be a partner in your health — not a source of frustration. If you're experiencing any of these seven signs, it may be time to make a change.</p>

      <h2>1. Long Wait Times Every Visit</h2>
      <p>If you're regularly waiting 30+ minutes for a simple prescription pickup, your pharmacy isn't respecting your time. Modern pharmacies have systems to minimize waits — if they're not using them, that's a red flag.</p>

      <h2>2. Nobody Knows Your Name</h2>
      <p>In a great pharmacy, the staff knows you. They know your medications, your allergies, your preferences. If every interaction feels like you're starting from scratch, you're not getting the personalized care you deserve.</p>

      <h2>3. Medication Errors or Mix-Ups</h2>
      <p>Wrong medication, wrong dose, wrong label — any error is unacceptable. While mistakes can happen, a pattern of errors indicates systemic problems with quality control.</p>

      <h2>4. No One Explains Your Medications</h2>
      <p>Your pharmacist should explain what each medication is for, how to take it, and what side effects to watch for. If you're leaving with more questions than answers, your pharmacy isn't doing its job.</p>

      <h2>5. Insurance Surprises</h2>
      <p>You shouldn't find out about unexpected costs at the register. A good pharmacy verifies insurance coverage upfront and communicates about costs before filling prescriptions.</p>

      <h2>6. Difficulty Getting Refills</h2>
      <p>Running out of medication because your pharmacy couldn't process a refill in time is a serious problem. Your pharmacy should proactively manage refills and notify you before you run out.</p>

      <h2>7. They Don't Return Calls</h2>
      <p>If you call with a question and no one calls back — or you get bounced between departments — your pharmacy isn't prioritizing your care.</p>

      <div class="cta-box">
      <h3>Experience the ExpressRx Difference</h3>
      <p>Switch to a pharmacy that puts you first. Call <strong>(614) 495-9097</strong> or visit us in Columbus to see what personalized pharmacy care feels like.</p>
      </div>
    `,
  },

  "how-express-rx-supports-nursing-facilities": {
    html: `
      <p class="lead">Long-term care facilities face unique medication management challenges. ExpressRx provides specialized pharmacy services designed to improve accuracy, compliance, and resident outcomes.</p>

      <h2>The Challenge of Facility Pharmacy</h2>
      <p>Nursing facilities manage medications for dozens — sometimes hundreds — of residents, each with complex regimens. The stakes are high: medication errors can result in hospitalizations, regulatory penalties, and harm to residents.</p>

      <h2>How ExpressRx Supports Facilities</h2>

      <h3>24/7 Pharmacy Access</h3>
      <p>Our pharmacists are available around the clock for emergency orders, medication questions, and clinical consultations. When a resident needs a medication urgently, we respond immediately.</p>

      <h3>Medication Therapy Management</h3>
      <p>Our pharmacists conduct regular medication reviews for each resident, identifying interactions, duplications, and opportunities to simplify regimens. This proactive approach prevents problems before they occur.</p>

      <h3>Automated Dispensing</h3>
      <p>We provide automated medication dispensing systems that reduce errors and improve accountability. Each dose is tracked, documented, and verified.</p>

      <h3>Regulatory Compliance</h3>
      <p>Stay compliant with state and federal regulations. We maintain complete documentation, provide regular audits, and ensure your facility meets all pharmacy-related requirements.</p>

      <h3>Custom Compounding</h3>
      <p>When commercial medications don't meet a resident's needs, our compounding lab creates customized preparations — from flavored liquids to transdermal gels.</p>

      <h3>Seamless Transitions</h3>
      <p>When residents are admitted or discharged, we coordinate medication reconciliation to ensure continuity of care and prevent errors during transitions.</p>

      <h2>Partner with ExpressRx</h2>
      <p>Our facility services team understands the unique demands of long-term care. We don't just deliver medications — we become an extension of your care team.</p>

      <div class="cta-box">
        <h3>Interested in a Pharmacy Partner?</h3>
        <p>Contact our facility services team at <strong>(614) 495-9097</strong> to learn how we can support your facility.</p>
      </div>
    `,
  },
};
