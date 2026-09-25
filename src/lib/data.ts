export const siteConfig = {
  name: "Express Pharmacy & DME",
  /** Canonical production origin. Used for metadataBase, canonicals, sitemap, OG + JSON-LD URLs. */
  url: "https://express-rx-pharmacy.vercel.app",
  tagline: "Beyond Prescriptions. Complete Care.",
  description:
    "Columbus, Ohio pharmacy offering custom compounding, durable medical equipment, long-term care and specialty services with 24/7 pharmacist support.",
  phone: "(614) 495-9097",
  fax: "(614) 448-3757",
  email: "info@expressrxdme.com",
  address: "Columbus, Ohio",
  hours: { weekdays: "Mon–Sat 9AM–7PM", sunday: "Sun 1PM–7PM" },
};

/** Parses "Mon–Sat 9AM–7PM" style config into schema.org openingHoursSpecification entries. */
export const openingHours = [
  { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "19:00" },
  { dayOfWeek: ["Sunday"], opens: "13:00", closes: "19:00" },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: [{ label: "Compounding", href: "/services/compounding" }, { label: "DME", href: "/services/dme" }, { label: "Long-Term Care", href: "/services/long-term-care" }, { label: "For Providers", href: "/services/for-providers" }] },
  { label: "Storefront", href: "/storefront" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const heroSection = {
  title: "Beyond Prescriptions. Complete Care.",
  subtitle: "Your trusted partner for personalized pharmacy services, durable medical equipment, and comprehensive healthcare solutions across Ohio.",
  ctaPrimary: "Our Services",
  ctaSecondary: "Contact Us",
  badges: [
    { icon: "store", text: "Retail + LTC + Specialty" },
    { icon: "clock", text: "24/7 Pharmacist Support" },
    { icon: "truck", text: "Statewide Delivery" },
    { icon: "flask", text: "Custom Compounding" },
  ],
};

export const services = [
  { id: "compounding", title: "Compounding", description: "Customized medications tailored to your unique needs.", icon: "flask", features: ["Custom flavoring", "Dosage form alternatives", "Allergen-free options", "Pediatric compounding"] },
  { id: "dme", title: "Durable Medical Equipment", description: "Quality DME products to support your recovery and daily living.", icon: "wheelchair", features: ["Mobility aids", "Respiratory equipment", "Home safety products", "Insurance billing"] },
  { id: "long-term-care", title: "Long-Term Care", description: "Comprehensive pharmacy services for assisted living facilities.", icon: "building", features: ["Medication management", "24/7 emergency service", "Staff training", "Compliance packaging"] },
  { id: "for-providers", title: "For Providers", description: "Partner with us to provide your patients exceptional pharmacy care.", icon: "stethoscope", features: ["Easy referrals", "Prior authorization support", "Patient education", "Dedicated account manager"] },
  { id: "specialty", title: "Specialty Pharmacy", description: "Access to hard-to-find medications and specialized therapies.", icon: "pill", features: ["Limited distribution drugs", "Copay assistance", "Therapy management", "Financial assistance"] },
];

export const stats = [
  { value: "5+", label: "Service Lines" },
  { value: "24/7", label: "Pharmacist Access" },
  { value: "Ohio", label: "Statewide Coverage" },
  { value: "MD+RPh", label: "Dual Leadership" },
  { value: "100+", label: "Conditions Supported" },
];

export const featureGrid = [
  { title: "Personalized Care", description: "Every patient is unique. We take the time to understand your specific needs.", icon: "heart" },
  { title: "Fast & Reliable", description: "Quick prescription processing and statewide delivery.", icon: "zap" },
  { title: "Insurance Accepted", description: "We work with most major insurance plans.", icon: "credit-card" },
  { title: "Expert Pharmacists", description: "Our team includes both medical doctors and pharmacists.", icon: "user-check" },
  { title: "Compounding Experts", description: "State-of-the-art compounding pharmacy creating customized medications.", icon: "flask-conical" },
  { title: "Local & Accessible", description: "Proudly serving Ohio communities with local pharmacists.", icon: "map-pin" },
];

export const audienceCards = [
  { id: "patients", title: "Patients & Families", description: "Personalized pharmacy care, custom compounding, and DME supplies delivered with compassion.", cta: "Find Care", href: "/services" },
  { id: "providers", title: "Physicians & Clinics", description: "Seamless referral process, prior auth support, and a dedicated provider liaison for your practice.", cta: "Partner With Us", href: "/services/for-providers" },
  { id: "facilities", title: "Senior & Long-Term Care", description: "Medication management, compliance packaging, and 24/7 emergency service for assisted living facilities.", cta: "Learn More", href: "/services/long-term-care" },
];

export const aboutSection = {
  title: "Your Health, Our Mission",
  content: `At Express Pharmacy & DME, we believe in going beyond simply filling prescriptions. Founded by Dr. Daniel Kwali Amoh, MD, RPh, our pharmacy combines medical expertise with personalized service to deliver comprehensive healthcare solutions.\n\nDr. Amoh's dual background as both a medical doctor and pharmacist ensures that our patients receive the highest level of clinical care and medication management. Together with Dr. Lee Bowman, DO, Clinical Director, our team is committed to transforming how pharmacy care is delivered in Ohio.`,
  founder: { name: "Dr. Daniel Kwali Amoh, MD, RPh", title: "Founder & Pharmacist-in-Charge" },
  director: { name: "Dr. Lee Bowman, DO", title: "Clinical Director" },
};

export const ctaSection = {
  title: "Ready to Experience Better Pharmacy Care?",
  subtitle: "Contact us today to learn how we can help you or your patients receive the personalized care you deserve.",
  cta: "Get in Touch",
  href: "/contact",
};

export const footerLinks = {
  services: [
    { label: "Compounding", href: "/services/compounding" },
    { label: "DME", href: "/services/dme" },
    { label: "Long-Term Care", href: "/services/long-term-care" },
    { label: "For Providers", href: "/services/for-providers" },
    { label: "Storefront", href: "/storefront" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "HIPAA Notice", href: "/hipaa" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

export const faqPatientQuestions = [
  { question: "What services does Express Pharmacy & DME offer?", answer: "We offer a comprehensive range of pharmacy services including custom compounding, durable medical equipment (DME), long-term care pharmacy services, and specialty pharmacy." },
  { question: "How do I transfer my prescriptions to Express Pharmacy?", answer: "Transferring your prescriptions is easy! Simply contact us with your current pharmacy information and prescription details." },
  { question: "Do you offer delivery services?", answer: "Yes! We provide statewide delivery across Ohio. Our delivery service is fast, reliable, and free for qualifying orders." },
  { question: "What is compounding and do I need it?", answer: "Compounding is the process of creating customized medications tailored to individual patient needs." },
  { question: "What insurance plans do you accept?", answer: "We work with most major insurance plans. Our team is happy to verify your coverage and help you understand your benefits." },
  { question: "How can I contact a pharmacist outside regular hours?", answer: "We offer 24/7 pharmacist support for urgent medication questions and emergencies." },
  { question: "What types of DME do you offer?", answer: "We provide a wide range of durable medical equipment including mobility aids, respiratory equipment, and home safety products." },
];

export const faqProviderQuestions = [
  { question: "How do I refer a patient to Express Pharmacy & DME?", answer: "Referring a patient is simple. You can call our dedicated provider line, fax the prescription, or use our online referral form." },
  { question: "What makes your compounding services unique?", answer: "Our pharmacy is led by both an MD and RPh, ensuring the highest level of clinical oversight for compounded medications." },
  { question: "Do you handle prior authorizations?", answer: "Yes, our team handles all prior authorization paperwork to streamline the process for both you and your patients." },
  { question: "What long-term care facilities do you serve?", answer: "We serve assisted living facilities, nursing homes, group homes, and other long-term care settings throughout Ohio." },
  { question: "How quickly can you process urgent prescriptions?", answer: "We prioritize urgent prescriptions and strive to process them within hours. Our 24/7 operations ensure critical medications are available." },
];

export const servicesPageContent = {
  hero: { title: "Comprehensive Pharmacy Services", subtitle: "From custom compounding to durable medical equipment, we provide personalized healthcare solutions." },
  compounding: { title: "Compounding Pharmacy", description: "Our state-of-the-art compounding center creates customized medications tailored to your unique requirements.", features: ["Custom dosage forms", "Allergen-free medications", "Pediatric compounding", "Veterinary compounding", "Hormone replacement therapy", "Pain management"] },
  dme: { title: "Durable Medical Equipment", description: "We provide high-quality DME products to support your recovery and daily living.", features: ["Mobility aids", "Respiratory equipment", "Home safety equipment", "Compression therapy", "Wound care supplies", "Diabetic supplies"] },
  longTermCare: { title: "Long-Term Care Pharmacy", description: "Comprehensive pharmacy services designed for assisted living facilities, nursing homes, and group homes.", features: ["Medication management", "Unit-dose packaging", "24/7 emergency service", "Consultant pharmacist", "Staff training", "Regulatory compliance"] },
  forProviders: { title: "For Healthcare Providers", description: "We partner with healthcare providers to deliver exceptional pharmacy care for their patients.", features: ["Easy online referrals", "Prior authorization assistance", "Dedicated provider liaison", "Patient education", "Competitive pricing", "Real-time tracking"] },
  specialty: { title: "Specialty Pharmacy", description: "Focused support for complex, high-cost therapies — benefits, copay assistance, and refill coordination handled by our clinical team.", features: ["Limited distribution drugs", "Copay assistance", "Therapy management", "Financial assistance", "Prior authorization support", "Statewide delivery"] },
};

export const serviceInsights: Record<string, { eyebrow: string; title: string; lead: string; stats: { value: string; label: string }[]; points: { title: string; text: string }[] }> = {
  compounding: {
    eyebrow: "The Facts",
    title: "Why Compounding Matters",
    lead: "An estimated 1\u20133% of all prescriptions written in the United States are compounded \u2014 medications that simply can't be mass-manufactured. When a patient needs a different strength, a dye-free formula, or a flavor a child will actually take, a custom compound is the only answer.",
    stats: [
      { value: "1\u20133%", label: "of U.S. prescriptions are compounded, per the Alliance for Pharmacy Compounding" },
      { value: "1\u20132 days", label: "standard turnaround for a custom order from a high-performance compounding pharmacy" },
      { value: "USP 800", label: "hazardous-drug handling standard our compounding lab follows" },
    ],
    points: [
      { title: "When compounding is the answer", text: "Allergies to dyes and fillers, discontinued drugs, custom dosages for children and pets, and hormone therapy are all situations where off-the-shelf medications fall short." },
      { title: "A prescription, not a substitute", text: "Compounding isn't a replacement for FDA-approved drugs \u2014 it's a physician-prescribed solution when no commercial product fits the patient's exact need." },
      { title: "Built on rigorous standards", text: "Our compounding center follows USP standards and is led by both an MD and an RPh, so every formula gets clinical oversight from start to finish." },
    ],
  },
  dme: {
    eyebrow: "The Facts",
    title: "How DME Coverage Works",
    lead: "Medicare Part B covers durable medical equipment at 80% of the approved amount after your yearly deductible. But coverage only applies to accredited suppliers \u2014 and the right supplier makes the difference between equipment that fits and equipment that collects dust.",
    stats: [
      { value: "80%", label: "of the Medicare-approved amount Part B pays for covered DME" },
      { value: "20%", label: "coinsurance you pay after meeting your yearly Part B deductible" },
      { value: "85%", label: "of Medicare DME suppliers are independent, small businesses like ours" },
    ],
    points: [
      { title: "It must be prescribed", text: "Medicare covers DME only when your doctor certifies it as medically necessary for use in your home \u2014 we coordinate directly with your provider." },
      { title: "Not all suppliers are equal", text: "Only accredited, Medicare-enrolled suppliers can bill for equipment. That's why choosing a trusted local supplier means smoother claims and better support." },
      { title: "We handle the details", text: "From verifying your coverage before you order to delivery, setup, and training, our team manages the equipment and the paperwork." },
    ],
  },
  "long-term-care": {
    eyebrow: "The Facts",
    title: "Care Built for Facility Life",
    lead: "More than 2 million Americans receive care in nursing homes and assisted living settings, where a typical resident may take up to 13 medications at once. Federal law requires a consultant pharmacist to review every resident's medication regimen monthly \u2014 and that's exactly the standard we live by.",
    stats: [
      { value: "13", label: "prescription medications a typical long-term care resident may take" },
      { value: "2M+", label: "Americans live in nursing homes and assisted living facilities" },
      { value: "30 days", label: "federal requirement: monthly medication regimen review by a consultant pharmacist" },
    ],
    points: [
      { title: "Monthly reviews that protect residents", text: "OBRA requires a consultant pharmacist to review each resident's medication regimen every month \u2014 catching interactions, duplications, and unnecessary drugs." },
      { title: "Polypharmacy needs precision", text: "With up to 13 medications per resident, unit-dose packaging and careful monitoring reduce the risk of errors and missed doses." },
      { title: "Inspection-ready compliance", text: "From secure medication storage to audit-ready documentation, we keep your facility aligned with federal and state regulations." },
    ],
  },
  "for-providers": {
    eyebrow: "The Facts",
    title: "Built to Unburden Your Practice",
    lead: "Physicians spend an estimated 14 hours a week on prior authorizations \u2014 time that belongs with patients. And the administrative waste around prior auth costs the U.S. healthcare system roughly $31 billion a year. We exist to take that load off your team.",
    stats: [
      { value: "14 hrs", label: "of physician time per week goes to prior-authorization paperwork" },
      { value: "$31B", label: "estimated annual cost of prior-auth administrative waste in the U.S." },
      { value: "Same-day", label: "response on every referral our team receives" },
    ],
    points: [
      { title: "Prior authorizations, handled end-to-end", text: "We manage the full prior-auth workflow \u2014 submissions, follow-ups, and appeals \u2014 so your staff can stop chasing paperwork." },
      { title: "Referrals without friction", text: "Send prescriptions by e-prescribe, fax, or our online referral form. A dedicated liaison keeps you updated with real-time status." },
      { title: "A clinical partner, not a vendor", text: "With both an MD and an RPh on our leadership team, you get a pharmacy partner that speaks your clinical language." },
    ],
  },
  specialty: {
    eyebrow: "The Facts",
    title: "What a Specialty Pharmacy Actually Does",
    lead: "Specialty medications treat complex, chronic conditions — cancer, autoimmune disease, multiple sclerosis, HIV, and more. They often cost thousands per month, need special handling, and come with prior authorizations and copay paperwork. A specialty pharmacy exists to carry that load for the patient and the prescriber.",
    stats: [
      { value: "24/7", label: "pharmacist access for urgent questions about a specialty therapy" },
      { value: "100%", label: "of claims checked for benefits and assistance before we bill you" },
      { value: "Statewide", label: "delivery across Ohio, including refills on a synchronized schedule" },
    ],
    points: [
      { title: "Copay assistance, pursued for you", text: "Manufacturer copay cards, foundation grants, and patient assistance programs offset what you pay out of pocket. We screen every qualifying therapy and help you enroll." },
      { title: "Benefits and prior auth, coordinated", text: "We verify coverage with the plan, submit what the plan requires, and work directly with your prescriber so approvals don't stall your therapy." },
      { title: "Monitoring that keeps therapy on track", text: "Refill synchronization, adherence check-ins, and a pharmacist on call day and night keep complex regimens from slipping through the cracks." },
    ],
  },
};

export const serviceWorkflow: Record<string, { lead: string; steps: { title: string; desc: string }[] }> = {
  compounding: {
    lead: "From a child who can't swallow a pill to a pet that needs a special dose, we compound medications that can't be stocked on any shelf.",
    steps: [
      { title: "Send us the prescription", desc: "Bring, fax, or e-prescribe the prescription your doctor wrote for a custom medication." },
      { title: "We compound it to spec", desc: "Our pharmacists prepare your exact formula \u2014 strength, form, and flavor \u2014 in our compounding lab." },
      { title: "Pick it up or we deliver", desc: "Same-day pickup for most formulas, or fast delivery right to your door." },
    ],
  },
  dme: {
    lead: "Walkers, wheelchairs, oxygen, and more \u2014 delivered, set up, and explained so you can use them with confidence.",
    steps: [
      { title: "Get your prescription", desc: "Your doctor's order tells us exactly which equipment your insurance can cover." },
      { title: "We verify and deliver", desc: "We check your coverage, order the right equipment, and bring it to your home." },
      { title: "We set it up and follow up", desc: "Your equipment arrives fitted and ready, with hands-on training on how to use it." },
    ],
  },
  "long-term-care": {
    lead: "Built for assisted living, nursing homes, and group homes \u2014 from daily medications to monthly clinical reviews, we keep residents safer and your staff covered.",
    steps: [
      { title: "We onboard your facility", desc: "Tell us about your residents, floor stock, and delivery schedule \u2014 we take it from there." },
      { title: "We manage the medications", desc: "Unit-dose packaging, monthly regimen reviews, and a pharmacist on call 24/7." },
      { title: "You stay inspection-ready", desc: "Audit-ready records and regulatory support keep your facility compliant." },
    ],
  },
  "for-providers": {
    lead: "A pharmacy partner that does the heavy lifting \u2014 referrals in seconds, prior authorizations handled, status updates in real time.",
    steps: [
      { title: "Send a referral", desc: "E-prescribe, fax, or use our online form \u2014 whatever fits your workflow." },
      { title: "We handle the rest", desc: "Prior authorizations, insurance, and coordination \u2014 our team manages it all." },
      { title: "Track it in real time", desc: "Live status from receipt to delivery, with a dedicated liaison on call." },
    ],
  },
  specialty: {
    lead: "From the first prior authorization to every synchronized refill, we keep complex therapies moving \u2014 and your costs as low as your plan allows.",
    steps: [
      { title: "Your prescriber sends the order", desc: "E-Rx or fax starts the process. We confirm the plan requirements before anything ships." },
      { title: "We clear the paperwork", desc: "Prior authorization, benefits verification, and copay assistance enrollment \u2014 handled with your plan and prescriber." },
      { title: "We keep you on therapy", desc: "Refills synchronized to one schedule, delivered statewide, with a pharmacist on call 24/7." },
    ],
  },
};

export const serviceBenefits: Record<string, string[]> = {
  compounding: [
    "Made exactly to your prescription \u2014 right strength, right form, right dose.",
    "No dyes, fillers, or preservatives that trigger your allergies.",
    "Flavored, easy-to-take medications your child will actually swallow.",
    "Formulas designed for your pet's species, size, and needs.",
    "Personalized bio-identical formulas matched to your lab results.",
    "Customized creams and formulas for relief that fits your condition.",
  ],
  dme: [
    "Walkers, wheelchairs, and scooters fitted to you \u2014 not off the shelf.",
    "CPAP, oxygen, and nebulizers set up and serviced by experts.",
    "Grab bars, lifts, and aids that keep your home safe.",
    "Stockings and devices that support circulation and healing.",
    "Everything your care team needs for proper healing at home.",
    "Testing supplies and management tools delivered on schedule.",
  ],
  "long-term-care": [
    "Every medication tracked and verified, so nothing is missed or duplicated.",
    "Pre-measured, labeled doses that make administration error-proof.",
    "A pharmacist on call day and night for urgent needs.",
    "Monthly expert reviews that keep residents safer and healthier.",
    "Hands-on training so your staff handles medications with confidence.",
    "Audit-ready records and secure storage, always inspection-ready.",
  ],
  "for-providers": [
    "Send a referral in seconds \u2014 e-prescribe, fax, or our online form.",
    "We chase the paperwork so you and your staff can see patients.",
    "One point of contact who knows your practice and your patients.",
    "Clear materials that help your patients follow their plan.",
    "Fair, transparent pricing for your practice and your patients.",
    "Live status on every order, from receipt to delivery.",
  ],
  specialty: [
    "Copay cards and assistance programs checked before you ever pay.",
    "Prior authorizations submitted and followed up until they're approved.",
    "One pharmacy team that knows your regimen, your plan, and your history.",
    "Refills synchronized so complex therapies never lapse.",
    "A pharmacist on call day and night for questions about your therapy.",
    "Delivery across Ohio \u2014 no mid-cycle pharmacy runs.",
  ],
};

export const storefront = {
  name: "Express Pharmacy & Medical Supply",
  url: "https://www.altroapp.com/expressrx",
  catalogUrl: "https://www.altroapp.com/expressrx/catalog",
  support: { email: "support@altroapp.com", phone: "+1 888-976-9826" },
  trust: [
    "503A & 503B licensed compounding pharmacies",
    "CLIA-certified lab testing",
    "Board-certified clinicians",
    "Available in all 50 states + DC",
  ],
  categories: [
    { id: "weight-loss-body-composition", title: "Weight Loss & Body Composition", tagline: "GLP-1 and metabolic treatments to support sustainable weight management.", icon: "scale", image: "/images/storefront/categories/weight-loss-body-composition.png", href: "https://www.altroapp.com/expressrx/c/weight-loss-body-composition" },
    { id: "peptide-therapy", title: "Peptide Therapy", tagline: "Targeted peptides for recovery, performance, and overall wellness.", icon: "flask", image: "/images/storefront/categories/peptide-therapy.png", href: "https://www.altroapp.com/expressrx/c/peptide-therapy" },
    { id: "longevity-immunity", title: "Longevity & Immunity", tagline: "NAD+, glutathione, and more to support cellular health and immunity.", icon: "shield", image: "/images/storefront/categories/longevity-immunity.png", href: "https://www.altroapp.com/expressrx/c/longevity-immunity" },
    { id: "performance-recovery", title: "Performance & Recovery", tagline: "Support muscle recovery, energy, and athletic performance.", icon: "dumbbell", image: "/images/storefront/categories/performance-recovery.jpg", href: "https://www.altroapp.com/expressrx/c/performance-recovery" },
    { id: "sexual-health", title: "Sexual Health", tagline: "Treatments for sexual wellness and hormonal balance.", icon: "heart", image: "/images/storefront/categories/sexual-health.png", href: "https://www.altroapp.com/expressrx/c/sexual-health" },
    { id: "men-s-hormonal-health", title: "Men's Hormonal Health", tagline: "Testosterone and hormone support tailored to men.", icon: "activity", image: "/images/storefront/categories/men-s-hormonal-health.jpg", href: "https://www.altroapp.com/expressrx/c/men-s-hormonal-health" },
    { id: "women-s-hormonal-health", title: "Women's Hormonal Health", tagline: "Bio-identical hormone care designed for women.", icon: "sparkles", image: "/images/storefront/categories/women-s-hormonal-health.jpg", href: "https://www.altroapp.com/expressrx/c/women-s-hormonal-health" },
    { id: "comprehensive-health-panels", title: "Comprehensive Health Panels", tagline: "CLIA-certified lab panels covering key biomarkers from home.", icon: "microscope", image: "/images/storefront/categories/comprehensive-health-panels.jpg", href: "https://www.altroapp.com/expressrx/c/comprehensive-health-panels" },
  ],
  treatments: [
    { name: "Tirzepatide with B12 (Injection)", category: "Weight Loss & Body Composition", form: "Injection", price: "$324", cadence: "/mo", image: "/images/storefront/treatments/tirzepatide-b12.png", href: "https://www.altroapp.com/expressrx/rx/05c4ec57-bea5-40cc-872c-903fa07706c8" },
    { name: "Semaglutide with B12 (Injection)", category: "Weight Loss & Body Composition", form: "Injection", price: "$217", cadence: "/mo", image: "/images/storefront/treatments/semaglutide-b12.png", href: "https://www.altroapp.com/expressrx/rx/c4317c07-7170-41dc-a497-4327647fe850" },
    { name: "Semaglutide (Sublingual)", category: "Weight Loss & Body Composition", form: "Sublingual", price: "$212", cadence: "/mo", image: "/images/storefront/treatments/semaglutide-sublingual.png", href: "https://www.altroapp.com/expressrx/rx/e8e6894d-6790-45e2-aec0-dc14edd2a504" },
    { name: "Tirzepatide (Sublingual)", category: "Weight Loss & Body Composition", form: "Sublingual", price: "$282", cadence: "/mo", image: "/images/storefront/treatments/tirzepatide-sublingual.png", href: "https://www.altroapp.com/expressrx/rx/2667cf79-a6b9-42b6-abcc-e277c743f07f" },
    { name: "Lipo-Mino (Injection)", category: "Weight Loss & Body Composition", form: "Injection", price: "$147", cadence: "/mo", image: "/images/storefront/treatments/lipo-mino.png", href: "https://www.altroapp.com/expressrx/rx/30cefc8d-e87b-4ca3-a42c-8c105c4688a2" },
    { name: "Sermorelin (Injection)", category: "Peptide Therapy", form: "Injection", price: "$184", cadence: "/mo", image: "/images/storefront/treatments/sermorelin.png", href: "https://www.altroapp.com/expressrx/rx/330c060e-1f67-47a7-be86-18e2b1ab7588" },
    { name: "GHK-Cu Topical Cream 0.5%", category: "Peptide Therapy", form: "Topical", price: "$166", cadence: "/mo", image: "/images/storefront/treatments/ghk-cu-topical.png", href: "https://www.altroapp.com/expressrx/rx/23d3aa14-e110-4296-b0af-36864a6f083a" },
    { name: "Glutathione (Injection)", category: "Peptide Therapy", form: "Injection", price: "$142", cadence: "/mo", image: "/images/storefront/treatments/glutathione.png", href: "https://www.altroapp.com/expressrx/rx/7d2ddf22-cae3-40c9-8dca-070990e3d31b" },
    { name: "PT-141 (Injection)", category: "Sexual Health", form: "Injection", price: "$245", cadence: "/mo", image: "/images/storefront/treatments/pt-141.png", href: "https://www.altroapp.com/expressrx/rx/344c16cb-7d37-493b-8b33-2bb68d0158f4" },
    { name: "NAD+ (Injection)", category: "Longevity & Immunity", form: "Injection", price: "$217", cadence: "/mo", image: "/images/storefront/treatments/nad-plus.png", href: "https://www.altroapp.com/expressrx/rx/06e0bdda-82a5-4dd3-8678-74e3f4808de1" },
    { name: "Low-Dose Naltrexone", category: "Longevity & Immunity", form: "Capsule", price: "$137", cadence: "/mo", image: "/images/storefront/treatments/low-dose-naltrexone.png", href: "https://www.altroapp.com/expressrx/rx/5bbbd42e-b02d-4a8d-bacb-237ad16ef4ca" },
    { name: "Men's Testosterone Therapy (Injection)", category: "Men's Hormonal Health", form: "Injection", price: "$127", cadence: "/mo", image: "/images/storefront/treatments/men-testosterone-injection.png", href: "https://www.altroapp.com/expressrx/rx/b5e2a0fc-2483-40bd-9d79-4963a35a81f2" },
    { name: "Vaginal Estradiol", category: "Women's Hormonal Health", form: "Cream", price: "$139", cadence: "/mo", image: "/images/storefront/treatments/vaginal-estradiol.png", href: "https://www.altroapp.com/expressrx/rx/5db502c7-f12d-4669-8f7a-0c2cf0e40298" },
    { name: "Men's Comprehensive Panel", category: "Comprehensive Health Panels", form: "Lab Panel", price: "$301", cadence: "one-time", image: "/images/storefront/treatments/men-comprehensive-panel.png", href: "https://www.altroapp.com/expressrx/labs/115761fc-a2d0-4f29-921c-6e1777699380" },
    { name: "Women's Comprehensive Panel", category: "Comprehensive Health Panels", form: "Lab Panel", price: "$293", cadence: "one-time", image: "/images/storefront/treatments/women-comprehensive-panel.png", href: "https://www.altroapp.com/expressrx/labs/4bf4ada0-a57b-469c-84f5-19e27ab4f6e1" },
  ],
};
