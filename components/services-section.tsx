import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  { number: "01", title: "Market Entry & Expansion in EMENA" },
  { number: "02", title: "Investor Relations & Financial Strategy" },
  { number: "03", title: "Emerging Technologies Integration" },
  {
    number: "04",
    title:
      "Mergers and Acquisitions: Strategic guidance on M&A, including target identification, due diligence, valuation, and integration planning",
  },
  { number: "05", title: "Corporate Communications, Brand Management" },
  {
    number: "06",
    title:
      "Corporate growth strategy to expand market share and capitalize on emerging opportunities",
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-[#f5efe9] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">

        {/* LEFT INTRO */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
            A comprehensive
          </h2>
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
            set of <span className="text-red-500">services</span>
          </h2>

          <Link
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium hover:text-red-500 transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* SERVICES GRID */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {services.map((service) => (
            <div key={service.number} className="flex gap-5 group">

              {/* RED LINE */}
              <div className="w-[2px] bg-red-500 mt-1" />

              {/* CONTENT */}
              <div>
                <p className="text-sm mb-2">{service.number}</p>

                <h3 className="text-base font-semibold leading-relaxed mb-4">
                  {service.title}
                </h3>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-red-500 transition-colors"
                >
                  Know more
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
