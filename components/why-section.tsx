"use client"

import Image from "next/image"
import React from "react"

/* ---------- Reusable Text Card ---------- */
type TextCardProps = {
  children: React.ReactNode
}

function TextCard({ children }: TextCardProps) {
  return (
    <div className="border border-neutral-400 rounded-2xl p-8 flex items-end min-h-[180px]">
      <p className="text-sm tracking-wide leading-relaxed">
        {children}
      </p>
    </div>
  )
}

/* ---------- Main Section ---------- */
export default function WhyWeSection() {
  return (
    <section className="bg-[#efe9e2] px-6 lg:px-12 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl lg:text-3xl font-medium mb-14">
          Why We?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Top Row */}
          <TextCard>
            GLOBAL PERSPECTIVE,<br />LOCAL INSIGHTS
          </TextCard>

          <TextCard>
            TAILORED STRATEGIES,<br />REAL IMPACT
          </TextCard>

          <TextCard>
            TRUE PARTNERSHIP<br />APPROACH
          </TextCard>

          {/* Tall Image */}
          <div className="relative h-[260px] md:h-[280px] lg:h-full overflow-hidden rounded-2xl">
            <Image
              src="/images/about-team.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Row */}

          {/* Wide Image */}
          <div className="relative h-[200px] overflow-hidden rounded-2xl md:col-span-2 lg:col-span-1">
            <Image
              src="/images/location-office.jpg"
              alt="Strategy planning"
              fill
              className="object-cover"
            />
          </div>

          <TextCard>
            PROVEN TRACK<br />RECORD
          </TextCard>

          <TextCard>
            TECHNOLOGY DRIVEN<br />THINKING
          </TextCard>

          <TextCard>
            END TO END EXPERTISE
          </TextCard>

        </div>
      </div>
    </section>
  )
}
