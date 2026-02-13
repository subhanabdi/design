import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import PageHero from "@/components/page-hero"
import ConversationCta from "@/components/conversation-cta"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Services | Bety.",
  description: "Corporate strategy advisory and business planning services.",
}

const serviceOfferings = [
  { title: "Market Expansion", image: "/images/service-market-expansion.jpg", slug: "market-expansion" },
  { title: "M&A Advisory", image: "/images/service-ma-advisory.jpg", slug: "ma-advisory" },
  { title: "Strategy", image: "/images/service-strategy.jpg", slug: "strategy" },
  { title: "Advisory", image: "/images/service-advisory.jpg", slug: "advisory" },
  { title: "Business Development", image: "/images/service-business-dev.jpg", slug: "business-development" },
  { title: "Market Intelligence", image: "/images/service-market-intel.jpg", slug: "market-intelligence" },
  { title: "Investor Relations", image: "/images/service-investor-relations.jpg", slug: "investor-relations" },
  { title: "Technology Integration", image: "/images/service-tech-integration.jpg", slug: "technology-integration" },
  { title: "Cyber Security & Compliance", image: "/images/service-cybersecurity.jpg", slug: "cybersecurity" },
  { title: "Risk & Resilience", image: "/images/service-risk.jpg", slug: "risk-resilience" },
  { title: "Corporate Communications", image: "/images/service-corp-comms.jpg", slug: "corporate-communications" },
  { title: "Marketing Strategy", image: "/images/service-marketing.jpg", slug: "marketing-strategy" },
  { title: "Optimization", image: "/images/service-optimization.jpg", slug: "optimization" },
]

const industries = [
  ["Public & Social Sector", "Financial Services & Capital Markets", "Technology, Media & Telecommunications (TMT)", "Energy, Utilities & Sustainability", "Healthcare & Life Sciences"],
  ["Consumer, Retail & E-Commerce", "Manufacturing & Industrial Systems", "Real Estate, Construction & Infrastructure", "Education, EdTech & Workforce Development", "Transportation, Aviation & Mobility"],
]

const engagementModels = [
  {
    icon: "project",
    title: "Project-Based Delivery",
    description: "Focused, time-bound engagements with clear deliverables for initiatives like market entry, due diligence, or GTM strategy.",
  },
  {
    icon: "retainer",
    title: "Retainer Partnership",
    description: "Ongoing strategic guidance with continuous access to senior consultants for performance tracking and market alignment.",
  },
  {
    icon: "advisory",
    title: "Advisory on Demand",
    description: "Expert sessions available whenever critical decisions arise\u2014fast, flexible, insight-driven.",
  },
  {
    icon: "turnkey",
    title: "Turnkey Strategy & Execution",
    description: "End-to-end ownership from strategy design to execution for expansions, transformations, and new ventures.",
  },
]

function EngagementIcon({ type }: { type: string }) {
  const iconClass = "w-10 h-10 text-accent"
  if (type === "project") {
    return (
      <svg className={iconClass} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <path d="M16 20h16M16 28h10" />
      </svg>
    )
  }
  if (type === "retainer") {
    return (
      <svg className={iconClass} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M24 8v16l8 8" />
        <circle cx="24" cy="24" r="16" />
      </svg>
    )
  }
  if (type === "advisory") {
    return (
      <svg className={iconClass} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="12" />
        <path d="M24 16v8l4 4" />
        <path d="M8 24H4M44 24h-4M24 8V4M24 44v-4" />
      </svg>
    )
  }
  return (
    <svg className={iconClass} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 36V20l12-12 12 12v16" />
      <rect x="18" y="28" width="12" height="8" />
    </svg>
  )
}

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <PageHero title="Corporate Strategy Advisory & Business Planning" image="/images/services-hero.jpg" />

      {/* Intro */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-relaxed">
            Guided by Experience.{"\n"}Driven by Vision.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our leaders don{"'"}t just oversee — they engage. They work
            closely with clients, providing guidance that is insightful,
            actionable, and aligned with long-term success.
            Through their collective vision, we continue to build a
            culture rooted in integrity, clarity, and collaboration —
            empowering teams and clients alike to thrive in dynamic
            markets.
          </p>
        </div>
      </section>

      {/* Service Offerings Grid */}
      <section className="py-20  px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">Our Services Offerings</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceOfferings.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs text-background/70">
                    {String(serviceOfferings.indexOf(service) + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-sm font-semibold text-background">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
   <section className="py-20  px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-2xl lg:text-3xl font-bold mb-12">
      Industries We Serve
    </h2>

    {industries.map((row, rowIndex) => (
      <div
        key={rowIndex}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8"
      >
        {row.map((industry) => (
          <div
            key={industry}
            className="flex items-start gap-4"
          >
            {/* RED LINE */}
            <div className="w-[2px] h-8 bg-red-600 mt-1" />

            <p className="text-lg lg:text-xl font-medium leading-relaxed text-gray-800">
              {industry}
            </p>
          </div>
        ))}
      </div>
    ))}

  </div>
</section>

      {/* Engagement Models */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-12">Our Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementModels.map((model) => (
              <div key={model.title} className="flex flex-col gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-secondary">
                  <EngagementIcon type={model.icon} />
                </div>
                <h3 className="text-base font-bold text-foreground">{model.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConversationCta />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
