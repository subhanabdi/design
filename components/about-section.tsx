import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Bety Global and Bety Global MENA, we craft strategies that connect
              vision with impact. With roots in the US and MENA, we blend global
              insight with local expertise to help businesses grow, transform, and
              lead. From strategic planning to IPO readiness and market expansion,
              we don{"'"}t just advise — we partner with you to turn bold ideas into real
              results.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Know More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/about-team.jpg"
              alt="Bety Global team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
