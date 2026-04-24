export const siteConfig = {
  name: "Express Pharmacy & DME",
  tagline: "Beyond Prescriptions. Complete Care.",
  phone: "(614) 495-9097",
  fax: "(614) 448-3757",
  email: "info@expressrxdme.com",
  address: "Columbus, Ohio",
  hours: { weekdays: "Mon–Sat 9AM–7PM", sunday: "Sun 1PM–7PM" },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: [{ label: "Compounding", href: "/services/compounding" }, { label: "DME", href: "/services/dme" }, { label: "Long-Term Care", href: "/services/long-term-care" }, { label: "For Providers", href: "/services/for-providers" }] },
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
  { id: "patients", title: "Patients & Families", description: "Quality pharmacy services and equipment to support your health journey.", cta: "Explore Services", href: "/services" },
  { id: "providers", title: "Healthcare Providers", description: "A trusted partner for your patients&apos; pharmacy needs.", cta: "Partner With Us", href: "/services/for-providers" },
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
};
