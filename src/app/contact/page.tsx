"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Clock, Printer, Send, Check } from "lucide-react";
import { siteConfig } from "@/lib/data";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
interface TransferFormData {
  pharmacyName: string;
  rxNumber: string;
  medicationName: string;
  firstName: string;
  lastName: string;
  dob: string;
  phone: string;
}

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<"contact" | "transfer">("contact");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [transferSubmitted, setTransferSubmitted] = useState(false);

  const {
    register: registerContact,
    handleSubmit: handleContactSubmit,
    reset: resetContact,
    formState: { errors: contactErrors }
  } = useForm<ContactFormData>();

  const {
    register: registerTransfer,
    handleSubmit: handleTransferSubmit,
    reset: resetTransfer,
    formState: { errors: transferErrors }
  } = useForm<TransferFormData>();

  const onContactSubmit = (data: ContactFormData) => {
    console.log(data);
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      resetContact();
    }, 5000);
  };

  const onTransferSubmit = (data: TransferFormData) => {
    console.log(data);
    setTransferSubmitted(true);
    setTimeout(() => {
      setTransferSubmitted(false);
      resetTransfer();
    }, 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-10 md:pb-16 gradient-hero">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="relative z-10">
            <span className="section-label mb-3">Contact</span>
            <h1 className="display-xl mb-4" style={{ color: "var(--text-1)" }}>Get in Touch</h1>
            <p className="text-lg md:text-xl" style={{ color: "var(--text-2)" }}>
              Have a question or need to transfer a prescription? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-12 md:py-20" style={{ background: "var(--bg-base)" }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="rounded-2xl p-6" style={{ background: "var(--bg-surface)" }}>
                <h2 className="text-lg font-semibold mb-5" style={{ color: "var(--text-1)" }}>Contact Information</h2>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                    <div>
                      <p className="font-medium mb-1" style={{ color: "var(--text-1)" }}>Address</p>
                      <p style={{ color: "var(--text-2)" }}>{siteConfig.address}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                    <div>
                      <p className="font-medium mb-1" style={{ color: "var(--text-1)" }}>Phone</p>
                      <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="link-medical">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Printer className="w-5 h-5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                    <div>
                      <p className="font-medium mb-1" style={{ color: "var(--text-1)" }}>Fax</p>
                      <p style={{ color: "var(--text-2)" }}>{siteConfig.fax}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                    <div>
                      <p className="font-medium mb-1" style={{ color: "var(--text-1)" }}>Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="link-medical">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                    <div>
                      <p className="font-medium mb-1" style={{ color: "var(--text-1)" }}>Hours</p>
                      <p style={{ color: "var(--text-2)" }}>{siteConfig.hours.weekdays}</p>
                      <p style={{ color: "var(--text-2)" }}>{siteConfig.hours.sunday}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Forms column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl p-6 md:p-8 bg-white border" style={{ borderColor: "var(--border)" }}>
                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b" style={{ borderColor: "var(--border)" }}>
                  <button
                    onClick={() => setActiveForm("contact")}
                    className={`px-5 py-3 font-medium text-sm relative -mb-px transition-colors ${
                      activeForm === "contact" ? "text-[var(--primary-dark)]" : "text-[var(--text-2)]"
                    }`}
                  >
                    Contact Us
                    {activeForm === "contact" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ background: "var(--primary)" }}
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveForm("transfer")}
                    className={`px-5 py-3 font-medium text-sm relative -mb-px transition-colors ${
                      activeForm === "transfer" ? "text-[var(--primary-dark)]" : "text-[var(--text-2)]"
                    }`}
                  >
                    Transfer Prescription
                    {activeForm === "transfer" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ background: "var(--primary)" }}
                      />
                    )}
                  </button>
                </div>

                {/* Contact form */}
                {activeForm === "contact" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="contact">
                    {contactSubmitted ? (
                      <div className="text-center py-10">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--primary-dim)" }}>
                          <Check className="w-7 h-7" style={{ color: "var(--primary)" }} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--text-1)" }}>Message Sent!</h3>
                        <p style={{ color: "var(--text-2)" }}>
                          Thank you for contacting us. We&apos;ll get back to you soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleContactSubmit(onContactSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>First Name *</label>
                            <input {...registerContact("firstName", { required: true })} className="input-field" placeholder="John" />
                            {contactErrors.firstName && <p className="text-red-500 text-sm mt-1">Required</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Last Name *</label>
                            <input {...registerContact("lastName", { required: true })} className="input-field" placeholder="Doe" />
                            {contactErrors.lastName && <p className="text-red-500 text-sm mt-1">Required</p>}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Email *</label>
                            <input type="email" {...registerContact("email", { required: true })} className="input-field" placeholder="john@example.com" />
                            {contactErrors.email && <p className="text-red-500 text-sm mt-1">Required</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Phone *</label>
                            <input type="tel" {...registerContact("phone", { required: true })} className="input-field" placeholder="(614) 555-1234" />
                            {contactErrors.phone && <p className="text-red-500 text-sm mt-1">Required</p>}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Service</label>
                          <select {...registerContact("service")} className="input-field">
                            <option value="">Select a service</option>
                            <option value="compounding">Compounding</option>
                            <option value="dme">DME</option>
                            <option value="long-term-care">Long-Term Care</option>
                            <option value="specialty">Specialty</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Message *</label>
                          <textarea {...registerContact("message", { required: true })} rows={4} className="input-field resize-none" placeholder="How can we help you?" />
                          {contactErrors.message && <p className="text-red-500 text-sm mt-1">Required</p>}
                        </div>
                        <button type="submit" className="btn-primary w-full">
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}

                {/* Transfer form */}
                {activeForm === "transfer" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="transfer">
                    {transferSubmitted ? (
                      <div className="text-center py-10">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--primary-dim)" }}>
                          <Check className="w-7 h-7" style={{ color: "var(--primary)" }} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--text-1)" }}>Transfer Request Submitted!</h3>
                        <p style={{ color: "var(--text-2)" }}>
                          We&apos;ll contact you shortly to complete the transfer.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleTransferSubmit(onTransferSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Current Pharmacy Name *</label>
                            <input {...registerTransfer("pharmacyName", { required: true })} className="input-field" placeholder="Current pharmacy" />
                            {transferErrors.pharmacyName && <p className="text-red-500 text-sm mt-1">Required</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Prescription Number *</label>
                            <input {...registerTransfer("rxNumber", { required: true })} className="input-field" placeholder="RX #" />
                            {transferErrors.rxNumber && <p className="text-red-500 text-sm mt-1">Required</p>}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Medication Name *</label>
                          <input {...registerTransfer("medicationName", { required: true })} className="input-field" placeholder="Medication name" />
                          {transferErrors.medicationName && <p className="text-red-500 text-sm mt-1">Required</p>}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Patient First Name *</label>
                            <input {...registerTransfer("firstName", { required: true })} className="input-field" placeholder="Patient first name" />
                            {transferErrors.firstName && <p className="text-red-500 text-sm mt-1">Required</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Patient Last Name *</label>
                            <input {...registerTransfer("lastName", { required: true })} className="input-field" placeholder="Patient last name" />
                            {transferErrors.lastName && <p className="text-red-500 text-sm mt-1">Required</p>}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Date of Birth *</label>
                            <input type="date" {...registerTransfer("dob", { required: true })} className="input-field" />
                            {transferErrors.dob && <p className="text-red-500 text-sm mt-1">Required</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-1)" }}>Phone *</label>
                            <input type="tel" {...registerTransfer("phone", { required: true })} className="input-field" placeholder="(614) 555-1234" />
                            {transferErrors.phone && <p className="text-red-500 text-sm mt-1">Required</p>}
                          </div>
                        </div>
                        <button type="submit" className="btn-primary w-full">
                          <Send className="w-4 h-4 mr-2" />
                          Submit Transfer Request
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

