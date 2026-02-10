import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import PageHero from "@/components/page-hero"
import InsightsSection from "@/components/insights-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Case Studies | Bety.",
  description: "Explore how we help clients grow, transform, and succeed in today's dynamic markets.",
}

const caseStudies = [
  {
    image: "/images/service-market-expansion.jpg",
    title: "Market Entry Strategy",
    region: "UAE (Tech Startup)",
    description: "We guided a SaaS startup with market insights and a tailored entry strategy, enabling a successful UAE launch and strong early performance.",
  },
  {
    image: "/images/service-ma-advisory.jpg",
    title: "Operational Efficiency",
    region: "USA (Manufacturing)",
    description: "We streamlined processes, reduced costs, and improved productivity for a manufacturing firm through targeted operational optimization.",
  },
  {
    image: "/images/service-strategy.jpg",
    title: "Digital Transformation",
    region: "India (Retail)",
    description: "We delivered a digital roadmap that boosted online sales, enhanced customer engagement, and modernized the retail brand's operations.",
  },
  {
    image: "/images/service-advisory.jpg",
    title: "M&A Advisory",
    region: "Saudi Arabia (FMCG)",
    description: "We supported a seamless acquisition with detailed valuation, due diligence, and integration planning for an FMCG client.",
  },
  {
    image: "/images/service-business-dev.jpg",
    title: "Supply Chain Optimization",
    region: "US Logistics",
    description: "We restructured a national logistics company's supply chain to cut bottlenecks, reduce delivery times, and improve overall reliability.",
  },
  {
    image: "/images/service-market-intel.jpg",
    title: "Customer Experience",
    region: "Dubai Luxury Retail",
    description: "We redesigned the customer journey for a luxury retailer, increasing client satisfaction and driving repeat visits.",
  },
  {
    image: "/images/service-corp-comms.jpg",
    title: "Brand Refresh",
    region: "Qatar F&B Chain",
    description: "We revitalized a popular F&B brand with a modern identity and marketing approach, strengthening its market presence.",
  },
  {
    image: "/images/service-tech-integration.jpg",
    title: "ESG Strategy Development",
    region: "MENA Energy Sector",
    description: "We created a comprehensive ESG roadmap that aligned sustainability goals with regulatory requirements and future growth.",
  },
  {
    image: "/images/service-investor-relations.jpg",
    title: "Go-to-Market Strategy",
    region: "India EdTech Startup",
    description: "We developed a targeted GTM strategy that accelerated user growth and sharpened the startup's competitive edge.",
  },
  {
    image: "/images/service-risk.jpg",
    title: "HR & Talent Transformation",
    region: "Saudi Corporate Group",
    description: "We overhauled talent systems and HR processes to boost employee performance and organizational efficiency.",
  },
  {
    image: "/images/insight-3.jpg",
    title: "Financial Restructuring",
    region: "UAE Construction Firm",
    description: "We supported a major construction firm through financial restructuring that stabilized cash flow and improved project viability.",
  },
  {
    image: "/images/service-marketing.jpg",
    title: "Market Expansion",
    region: "Qatar (Hospitality)",
    description: "We helped a hospitality group expand into new locations with localized strategies that strengthened brand presence and profitability.",
  },
]

export default function CaseStudiesPage() {
  return (
    <main>
      <Header />
      <PageHero title="Case Studies" image="/images/casestudies-hero.jpg" />

      {/* Intro */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-relaxed">
            Our Impact in Action
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            At Bety Global, we partner with businesses across the US,
            EMENA, and India to solve complex challenges and drive
            measurable results. Our case studies showcase real
            projects where strategy, innovation, and execution came
            together to create lasting impact. Explore how we help
            clients grow, transform, and succeed in today{"'"}s dynamic
            markets.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-10 lg:py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-12">Featured case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-bold text-foreground">{study.title}</h3>
                <p className="text-xs text-muted-foreground">{"- "}{study.region}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{study.description}</p>
                <Link
                  href="#"
                  className="text-xs font-medium text-foreground hover:text-accent transition-colors"
                >
                  {"Read more >"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsightsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
