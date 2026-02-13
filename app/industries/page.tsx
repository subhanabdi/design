import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import PageHero from "@/components/page-hero"
import InsightsSection from "@/components/insights-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Industries | Bety.",
  description: "We partner with businesses across the US, EMENA, and India to solve complex challenges.",
}

const industries = [
  {
    title: "Public & Social Sector",
    description: "We support government bodies, NGOs, and public institutions with policy design, digital transformation, citizen-centric services, and performance improvement to create long-term social impact.",
  },
  {
    title: "Financial Services & Capital Markets",
    description: "We help banks, insurers, investment firms, and fintech navigate regulatory change, optimize operations, strengthen risk management, and unlock new growth across capital markets.",
  },
  {
    title: "Technology, Media & Telecommunications (TMT)",
    description: "We work with tech innovators, digital platforms, media companies, and telecom operators to accelerate product growth, enhance customer experience, and drive digital transformation.",
  },
  {
    title: "Energy, Utilities & Sustainability",
    description: "We guide energy providers, utility operators, and sustainability-focused organizations in transitioning to cleaner models, meeting ESG goals, and improving operational efficiency.",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "We support hospitals, clinical networks, biotech, and pharma companies with operational improvement, patient experience enhancement, digital adoption, and regulatory alignment.",
  },
  {
    title: "Consumer, Retail & E-Commerce",
    description: "We help consumer brands and retail businesses modernize operations, build strong digital ecosystems, optimize customer journeys, and scale through omni-channel strategies.",
  },
  {
    title: "Manufacturing & Industrial Systems",
    description: "We streamline production systems, improve supply chains, integrate automation, and enhance productivity to strengthen industrial competitiveness.",
  },
  {
    title: "Real Estate, Construction & Infrastructure",
    description: "We partner with developers, contractors, and infrastructure agencies to improve project feasibility, optimize delivery, manage risks, and support sustainable urban development.",
  },
  {
    title: "Education, EdTech & Workforce Development",
    description: "We assist educational institutions and EdTech companies in scaling digital learning, enhancing curriculum outcomes, and designing workforce development programs for future skills.",
  },
]

export default function IndustriesPage() {
  return (
    <main>
      <Header />
      <PageHero title="Industries" image="/images/industries-hero.jpg" />

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
        <div className="max-w-7xl mx-auto mt-12 border-t border-border" />
      </section>

      {/* Industries Grid */}
      <section className="py-10 lg:py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="border-t border-border p-8 flex flex-col gap-4"
              >
               
                <h3 className="text-base font-bold text-foreground">{industry.title}</h3>
                 <div className="w-full h-1 bc" />
                <Link
                  href="#"
                  className="text-xs font-medium text-foreground hover:text-accent transition-colors"
                >
                  {"Read more >"}
                </Link>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2">{industry.description}</p>
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
