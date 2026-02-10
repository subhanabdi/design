"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Upload } from "lucide-react"
import Header from "@/components/header"
import PageHero from "@/components/page-hero"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

const whyWorkItems = [
  {
    title: "Global Exposure Across Regions",
    description: "Work with diverse clients and teams across the US, EMENA, and India, expanding your international experience.",
  },
  {
    title: "Impactful, Real-World Projects",
    description: "Contribute to strategic initiatives that influence business decisions and create measurable outcomes.",
  },
  {
    title: "Collaborative & Supportive Culture",
    description: "Be part of a team that values teamwork, open communication, and continuous support.",
  },
  {
    title: "Learning, Training & Mentorship",
    description: "Access structured learning programs, skill-building workshops, and guidance from experienced leaders.",
  },
]

const contactInfo = [
  { label: "General Enquiries", email: "info@bety.com" },
  { label: "Business Partnerships", email: "partner@bety.com" },
  { label: "Career Opportunities", email: "careers@bety.com" },
]

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
  })

  return (
    <main>
      <Header />
      <PageHero title="Careers at Bety" image="/images/career-hero.jpg" />

      {/* Intro */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 leading-relaxed">
            Shape the Future of Business. Grow With Us.
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              At Bety Global, we believe exceptional people drive exceptional results.
              We partner with leaders across the US, EMENA, and India to solve complex challenges — and
              we{"'"}re always looking for curious, ambitious minds to join our growing team.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Whether you{"'"}re passionate about strategy, operations, digital transformation, or market
              expansion, Bety Global offers an environment where you can learn, innovate, and lead.
            </p>
          </div>
        </div>
      </section>

      {/* Grow Your Career */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-muted">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
              Grow Your Career with Bety
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Your growth matters here. From hands-on learning to diverse project experiences, Bety gives
              you the platform to evolve, innovate, and take your career to the next level.
            </p>
            <Link
              href="/career"
              className="inline-block px-6 py-3 border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Explore Career Options at Bety
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/career-grow.jpg"
              alt="Career growth at Bety"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <div className="w-full h-1 bg-secondary" />
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Start Your</h2>
              <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-8">Journey with Bety</h2>

              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full py-3 border-b border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full py-3 border-b border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
                />
                <input
                  type="text"
                  placeholder="Position Applying For"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full py-3 border-b border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
                />

                <div className="flex items-center gap-4 mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-border text-sm text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                  >
                    upload resume
                    <Upload className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    className="px-8 py-3 bg-muted text-sm font-medium text-foreground border border-border hover:bg-foreground hover:text-background transition-colors"
                  >
                    Submit
                  </button>
                </div>
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
