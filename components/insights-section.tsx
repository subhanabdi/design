"use client"

import Image from "next/image"
import Link from "next/link"
import { Bookmark } from "lucide-react"

const insights = [
  {
    image: "/images/insight-1.jpg",
    date: "05 Nov, 2025",
    title: "Digital Transformation Beyond Technology",
  },
  {
    image: "/images/insight-2.jpg",
    date: "01 Nov, 2025",
    title: "The Power of Strategic Partnerships",
  },
  {
    image: "/images/insight-3.jpg",
    date: "25 Oct, 2025",
    title: "The Evolving MENA Investment Landscape",
  },
]

export default function InsightsSection() {
  return (
    <section className="py-24 px-8 lg:px-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-4 gap-16">

          {/* LEFT TITLE COLUMN */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
              Our Latest <br /> Insights
            </h2>

            <Link
              href="#"
              className="text-sm font-medium underline underline-offset-4 hover:opacity-70 transition"
            >
              View all »
            </Link>
          </div>

          {/* MIDDLE LARGE CARD */}
          <div className="lg:col-span-2">
            <InsightCard insight={insights[0]} large />
          </div>

          {/* RIGHT STACKED CARDS */}
          <div className="lg:col-span-1 flex flex-col gap-16">
            <InsightCard insight={insights[1]} />
            <InsightCard insight={insights[2]} />
          </div>

        </div>
      </div>
    </section>
  )
}

function InsightCard({
  insight,
  large = false,
}: {
  insight: any
  large?: boolean
}) {
  return (
    <Link href="#" className="group block">
      <div
        className={`relative overflow-hidden mb-6 ${
          large ? "aspect-[4/5]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Bookmark */}
        <button
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
          onClick={(e) => e.preventDefault()}
        >
          <Bookmark size={16} />
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-2">
        {insight.date}
      </p>

      <h3 className="text-xl font-medium leading-snug group-hover:underline">
        {insight.title}
      </h3>
    </Link>
  )
}