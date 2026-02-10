import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    number: "01",
    title: "Market Entry & Expansion in EMENA",
    description: "",
  },
  {
    number: "02",
    title: "Investor Relations & Financial Strategy",
    description: "",
  },
  {
    number: "03",
    title: "Emerging Technologies Integration",
    description: "",
  },
  {
    number: "04",
    title: "Mergers and Acquisitions: Strategic guidance on M&A, including target identification, due diligence, valuation, and integration planning.",
    description: "",
  },
  {
    number: "05",
    title: "Corporate Communications, Brand Management",
    description: "",
  },
  {
    number: "06",
    title: "Corporate growth strategy to expand market share and capitalize on emerging opportunities",
    description: "",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 px-6 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              A comprehensive
            </h2>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              set of{" "}
              <span className="underline decoration-accent underline-offset-4">
                services
              </span>
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors mt-4 lg:mt-0"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.number} className="group">
              <span className="text-sm font-medium text-muted-foreground mb-3 block">
                {service.number}
              </span>
              <h3 className="text-base font-semibold text-foreground mb-4 leading-relaxed">
                {service.title}
              </h3>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent transition-colors"
              >
                Know more
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
