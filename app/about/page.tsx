import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import Header from "@/components/header"
import PageHero from "@/components/page-hero"
import InsightsSection from "@/components/insights-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About | Bety.",
  description: "We craft strategies that turn vision into measurable growth and lasting impact.",
}

const approachSteps = [
  {
    icon: "understand",
    title: "Understand",
    description: "Deep market and organizational analysis that reveals true potential.",
  },
  {
    icon: "strategize",
    title: "Strategize",
    description: "Designing data-driven, bespoke solutions that align with your goals.",
  },
  {
    icon: "collaborate",
    title: "Collaborate",
    description: "Partnering closely with your team to ensure clarity, alignment, and adaptability.",
  },
  {
    icon: "deliver",
    title: "Deliver",
    description: "Driving measurable results that create sustainable growth and real-world success.",
  },
]

function ApproachIcon({ type }: { type: string }) {
  if (type === "understand") {
    return (
      <svg className="w-10 h-10 text-accent" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="8" width="12" height="4" rx="1" />
        <rect x="8" y="16" width="20" height="4" rx="1" />
        <rect x="8" y="24" width="16" height="4" rx="1" />
        <rect x="8" y="32" width="24" height="4" rx="1" />
      </svg>
    )
  }
  if (type === "strategize") {
    return (
      <svg className="w-10 h-10 text-accent" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 36L20 24L28 30L36 12" />
        <path d="M30 12H36V18" />
      </svg>
    )
  }
  if (type === "collaborate") {
    return (
      <svg className="w-10 h-10 text-accent" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="18" r="6" />
        <circle cx="30" cy="18" r="6" />
        <path d="M6 38c0-6 5-11 12-11" />
        <path d="M42 38c0-6-5-11-12-11" />
      </svg>
    )
  }
  return (
    <svg className="w-10 h-10 text-accent" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 24L22 30L34 18" />
      <circle cx="24" cy="24" r="16" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHero title="Who we are" image="/images/about-hero.jpg" />

      {/* Mission Statement */}
      <section className=" px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-relaxed text-balance">
            We craft strategies that turn vision into measurable growth and lasting impact.
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We are a global management consulting firm with a dual presence in the US and MENA
            regions, delivering bespoke, high-impact strategies that drive growth and innovation.
            Our expertise spans strategic planning, IPO readiness, business development, and go-to-market
            execution — empowering organizations to navigate complexity with confidence.
            At Bety Global, we don{"'"}t just advise — we partner with you to turn vision into measurable
            success.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">About Us</h2>
            <p className="text-sm text-muted-foreground">Advisory Beyond Boundaries</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-team-large.jpg"
                alt="Bety team collaborating"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our purpose is to help organizations realize their full potential by
                connecting strategic foresight with real-world execution.
                We exist to bridge global opportunities and local realities, empowering
                leaders to make confident, informed decisions that shape the future of
                their industries.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe that every idea holds the potential to create impact — when
                guided by clarity, data, and purpose.
                At Bety Global, we don{"'"}t just envision success; we build pathways that
                make it measurable, sustainable, and transformative.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our role goes beyond consulting — we become your strategic partners in
                navigating change, unlocking growth, and creating enduring value that
                stands the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center">
        <Image
          src="/images/about-video-bg.jpg"
          alt="Video background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <button
          type="button"
          className="relative z-10 w-20 h-20 flex items-center justify-center bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
          aria-label="Play video"
        >
          <Play className="w-8 h-8 ml-1" fill="currentColor" />
        </button>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Our Approach</h2>
              <p className="text-sm text-muted-foreground mt-2">A Process That Delivers</p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-6">
                At Bety Global, we believe effective strategy begins with
                understanding, grows through collaboration, and succeeds
                through measurable execution.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
              {approachSteps.map((step) => (
                <div key={step.title} className="flex flex-col gap-3">
                  <ApproachIcon type={step.icon} />
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Banner */}
      <section className="relative h-[50vh] min-h-[320px] flex items-end">
        <Image
          src="/images/about-team-banner.jpg"
          alt="Bety team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/80" />
        <div className="relative z-10 px-6 lg:px-12 pb-12 max-w-xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-accent-foreground mb-4 leading-relaxed">
            Behind every strategy is a team that cares.
          </h2>
          <p className="text-sm text-accent-foreground/80 mb-6 leading-relaxed">
            We{"'"}re thinkers, creators, and collaborators —
            united by a shared purpose to make every idea count.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-foreground hover:underline"
          >
            Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <InsightsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
