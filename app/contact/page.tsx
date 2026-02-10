"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import PageHero from "@/components/page-hero"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

const locations = [
  {
    image: "/images/location-doha.jpg",
    company: "Bety Global MENA, LLC",
    address: ["Qatar Financial Center Tower 1", "Floor 9, West Bay, Doha, Qatar"],
    phone: "+974 3302 3347",
  },
  {
    image: "/images/location-bridge.jpg",
    company: "Bety Global Inc.",
    address: ["254 Chapman Rd, Ste 208 #16780", "Newark, Delaware, USA"],
    phone: "+1 708 791 7691",
  },
]

const contactInfo = [
  { label: "General Enquiries", email: "info@bety.com" },
  { label: "Business Partnerships", email: "partner@bety.com" },
  { label: "Career Opportunities", email: "careers@bety.com" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    company: "",
    message: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main>
      <Header />
      <PageHero title="Contact Us" image="/images/contact-hero.jpg" />

      {/* Intro */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            At Bety Global, we{"'"}re always within reach. Whether you{"'"}re looking for strategic consulting,
            regional expansion, or support across our service lines — our teams across the globe are ready
            to help you move forward.
          </p>
          <div className="mt-12 border-t border-border" />
        </div>
      </section>

      {/* Locations */}
      <section className="py-10 lg:py-16 px-6 lg:px-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-12">
            Our{"\n"}Locations
          </h2>
          <div className="flex flex-col gap-16">
            {locations.map((loc) => (
              <div key={loc.company} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={loc.image || "/placeholder.svg"}
                    alt={loc.company}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-foreground">{loc.company}</h3>
                  {loc.address.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="text-sm font-bold text-foreground hover:text-accent transition-colors mt-2"
                  >
                    {loc.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-12">Enquiry Form</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <input
                type="text"
                placeholder="Full name*"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className="w-full py-3 border-b border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
              />
              <input
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full py-3 border-b border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
              />
              <input
                type="tel"
                placeholder="Phone number*"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full py-3 border-b border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
              />
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="w-full py-3 border-b border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
              />
              <input
                type="text"
                placeholder="Company name"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="w-full py-3 border-b border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={5}
                className="w-full px-4 py-3 border border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground resize-none mt-4"
              />
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  className="px-12 py-3 bg-muted text-sm font-medium text-foreground border border-border hover:bg-foreground hover:text-background transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="border-l-2 border-border pl-4">
                  <h3 className="text-sm font-bold text-foreground mb-1">{info.label}</h3>
                  <a
                    href={`mailto:${info.email}`}
                    className="text-xs text-muted-foreground hover:text-accent transition-colors"
                  >
                    {info.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
