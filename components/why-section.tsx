"use client"

import Image from "next/image"
import React, { useState } from "react"

/* ---------- Card Data ---------- */
const textCards = [
  {
    title: "GLOBAL PERSPECTIVE, LOCAL INSIGHTS",
    desc:
      "Our dual presence in the US and MENA markets allows us to merge global best practices with regional intelligence.",
  },
  {
    title: "TAILORED STRATEGIES, REAL IMPACT",
    desc:
      "We design customized strategies that align with your business realities and deliver measurable results.",
  },
  {
    title: "TRUE PARTNERSHIP APPROACH",
    desc:
      "We work alongside leadership teams, ensuring alignment, transparency, and long-term value creation.",
  },
  {
    title: "PROVEN TRACK RECORD",
    desc:
      "A consistent history of delivering successful outcomes across sectors and complex engagements.",
  },
  {
    title: "TECHNOLOGY DRIVEN THINKING",
    desc:
      "We integrate emerging technologies into strategy to future-proof business performance.",
  },
  {
    title: "END TO END EXPERTISE",
    desc:
      "From strategy to execution, we support every phase of your growth journey.",
  },
]

/* ---------- Hover Text Card ---------- */
type HoverCardProps = {
  title: string
  desc: string
}

function HoverCard({ title, desc }: HoverCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`border border-neutral-400 rounded-2xl p-8 min-h-[200px] flex flex-col justify-end transition-all duration-300 ${
        hovered ? "bg-[#A8A6A6]" : "bg-transparent"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className={`text-sm text-neutral-600 mb-4 transition-all duration-300 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {desc}
      </p>

      <p
        className={`text-sm tracking-wide leading-relaxed font-medium transition-colors duration-300 ${
          hovered ? "text-white" : "text-black"
        }`}
      >
        {title}
      </p>
    </div>
  )
}

/* ---------- Section ---------- */
export default function WhyWeSection() {
  return (
    <section className="bg-[#efe9e2] px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-x-4 gap-y-14">

        {/* LEFT TITLE */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl lg:text-3xl font-medium">Why We?</h2>
        </div>

        {/* RIGHT CONTENT GRID */}
        <div
          className="lg:col-span-3 grid grid-cols-4 gap-x-4 gap-y-14"
          style={{ gridTemplateColumns: "repeat(4, 2fr)" }}
        >
          {/* Image Card 1 — Start of first row */}
          <div className="relative h-[220px] overflow-hidden col-start-1">
            <Image
              src="/images/location-office.jpg"
              alt="Strategy planning"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Cards */}
          {textCards.map((card, index) => (
            <HoverCard key={index} title={card.title} desc={card.desc} />
          ))}

          {/* Image Card 2 — End of first row */}
          <div className="relative h-[220px] overflow-hidden col-end-5">
            <Image
              src="/images/about-team.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
