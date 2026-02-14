import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/header"
import PageHero from "@/components/page-hero"
import ConversationCta from "@/components/conversation-cta"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const servicesData: Record<string, {
  title: string
  subtitle: string
  description: string
  helpItems: { title: string; description: string  ; image: string;  }[]
  result: { title: string; subtitle: string }
  longDescription: string
  faqs: { question: string; answer: string }[]
}> = {
  "market-expansion": {
    title: "Market Entry & Expansion - EMENA",
    subtitle: "Unlock new opportunities across Europe, the Middle East & North Africa with strategic, data-driven expansion support.",
    description:
      "At Bety Global, we guide businesses through every stage of entering and scaling across EMENA markets. Our team blends regional expertise, deep industry knowledge, and on-ground insights to ensure your expansion is seamless, compliant, and positioned for long-term success.",
    

    helpItems: [
  {
    title: "End-to-End Market Entry Support",
    description: "Complete guidance from exploration to launch.",
    image: "/images/t1.png",
  },
  {
    title: "Market Intelligence & Opportunity Assessment",
    description: "Clear insights on demand, trends, and market potential.",
    image: "/images/t1.png",
  },
  {
    title: "Sector & Competitive Landscape Analysis",
    description: "Identify top sectors and understand key competitors.",
    image: "/images/t1.png",
  },
  {
    title: "Partner & Stakeholder Engagement",
    description: "Build connections with trusted regional partners.",
    image: "/images/t1.png",
  },
  {
    title: "Go-To-Market Strategy Development",
    description: "Tailored entry, pricing, and channel strategies.",
    image: "/images/t1.png",
  },
  {
    title: "Regulatory & Compliance Navigation",
    description: "Smooth support through regional rules and licensing.",
    image: "/images/t1.png",
  },
],
  
    result: {
      title: "Market Launches",
      subtitle: "Took companies from zero to full EMENA presence.",
    },
    longDescription:
      "Expanding into EMENA requires a clear strategy, reliable insights, and precise execution. Our Market Entry & Expansion service provides structured, data-backed support to help businesses evaluate opportunities, navigate regulatory environments, and establish a competitive presence across Europe, the Middle East, and North Africa. With deep regional expertise and a systematic approach, we ensure your entry is efficient, compliant, and aligned with your long-term growth objectives.",
    faqs: [
      { question: "What does your Market Entry & Expansion service include?", answer: "Our service covers market research, competitive analysis, regulatory guidance, partner identification, go-to-market strategy development, and ongoing support through the expansion process." },
      { question: "How do you determine if a market is right for my business?", answer: "We conduct thorough market intelligence assessments including demand analysis, competitive landscape mapping, and regulatory environment evaluation to determine market viability." },
      { question: "Do you help connect us with local partners or distributors?", answer: "Yes, we leverage our extensive network across EMENA to identify and facilitate connections with trusted local partners, distributors, and stakeholders." },
      { question: "Can you develop a tailored Go-To-Market strategy for us?", answer: "Absolutely. We design customized GTM strategies that account for local market dynamics, cultural nuances, and your specific business objectives." },
      { question: "Do you assist with regulatory requirements and licensing?", answer: "Yes, our team provides comprehensive regulatory guidance to ensure compliance with local laws, licensing requirements, and industry-specific regulations." },
    ],
  },
}

const defaultService = {
  title: "Service Detail",
  subtitle: "Strategic consulting services tailored to your business needs.",
  description:
    "At Bety Global, we provide comprehensive consulting services designed to help businesses navigate complex challenges and achieve measurable results.",
helpItems: [
  { 
    title: "Strategic Assessment", 
    description: "Comprehensive evaluation of your current position and opportunities.",
    image: "/images/t1.png",
  },
  { 
    title: "Market Analysis", 
    description: "Deep insights into market dynamics, trends, and competitive landscape.",
    image: "/images/t2.png",
  },
  { 
    title: "Implementation Support", 
    description: "Hands-on guidance throughout the execution process.",
    image: "/images/t3.png",
  },
  { 
    title: "Performance Tracking", 
    description: "Measurable KPIs and ongoing monitoring for continuous improvement.",
    image: "/images/t4.png",
  },
  { 
    title: "Risk Management", 
    description: "Proactive identification and mitigation of potential challenges.",
    image: "/images/t5.png",
  },
  { 
    title: "Stakeholder Alignment", 
    description: "Building consensus and buy-in across your organization.",
    image: "/images/t6.png",
  },
],

  result: {
    title: "Proven Results",
    subtitle: "Delivering measurable impact for clients worldwide.",
  },
  longDescription:
    "Our team combines strategic expertise with practical execution capabilities to ensure your initiatives deliver lasting value. We work closely with your leadership team to understand your unique challenges and develop tailored solutions that drive growth.",
  faqs: [
    { question: "What is included in this service?", answer: "Our service includes strategic assessment, market analysis, implementation planning, and ongoing advisory support." },
    { question: "How long does a typical engagement last?", answer: "Engagement timelines vary based on scope, typically ranging from 3 to 12 months depending on complexity." },
    { question: "Do you offer ongoing advisory support?", answer: "Yes, we offer retainer-based advisory relationships for continuous strategic guidance." },
    { question: "How do you measure success?", answer: "We establish clear KPIs at the outset and provide regular progress reporting throughout the engagement." },
    { question: "Can you work with our existing teams?", answer: "Absolutely. We pride ourselves on collaborative partnerships that enhance your internal capabilities." },
  ],
}

function HelpIcon() {
  return (
    <svg className="w-8 h-8 text-muted-foreground" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="16" r="4" />
      <path d="M16 20h16l-2 8H18l-2-8z" />
      <path d="M20 28v4M28 28v4" />
      <circle cx="18" cy="36" r="2" />
      <circle cx="30" cy="36" r="2" />
    </svg>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData[slug] || defaultService
  return {
    title: `${service.title} | Bety.`,
    description: service.subtitle,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = servicesData[slug] || defaultService

  return (
    <main>
      <Header />
      <PageHero title={service.title} image="/images/service-detail-hero.jpg" />

      {/* Intro */}
      <section className="px-6 lg:px-12  fed">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6 leading-relaxed">
            {service.subtitle}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* How We Can Help */}
      
<section className="py-20 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-12">
      How we can help
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {service.helpItems.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
        >
          {/* Image */}
          <div className="w-12 h-12">
            <Image
              src={item.image}
              alt={item.title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold text-foreground">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Results That Matter */}
      <section className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-muted px-6 lg:px-12 py-16 flex flex-col justify-center">
            <p className="text-xs text-accent font-medium mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-accent inline-block" />
              Results That Matter
            </p>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">{service.result.title}</h3>
            <p className="text-sm text-muted-foreground">{service.result.subtitle}</p>
          </div>
          <div className="relative min-h-[300px]">
            <Image
              src="/images/service-results.jpg"
              alt="Results"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className=" px-6 lg:px-12  fed">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className=" px-6 lg:px-12  fed">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">FAQs</h2>
          <p className="text-sm text-muted-foreground mb-8">Get Clarity on Your Expansion Journey</p>
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-sm font-medium text-foreground py-5 hover:no-underline">
                  {`${index + 1}. ${faq.question}`}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ConversationCta />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
