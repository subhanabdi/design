"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Bookmark } from "lucide-react"
import { useState, useEffect } from "react"

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
  {
    image: "/images/insight-4.jpg",
    date: "18 Oct, 2025",
    title: "Technology as a Growth Catalyst",
  },
  {
    image: "/images/insight-1.jpg",
    date: "10 Oct, 2025",
    title: "Future of Global Investments",
  },
]

export default function InsightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const maxIndex = insights.length - 1

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section className="py-24 px-8 lg:px-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-4 gap-16">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-light leading-tight mb-6">
              Our Latest <br /> Insights
            </h2>

            <Link
              href="#"
              className="text-sm underline underline-offset-4 hover:opacity-70"
            >
              View all »
            </Link>

            {/* NAV BUTTONS */}
            <div className="flex gap-3 mt-10">
              <button
                onClick={handlePrev}
                className="p-3 border border-black/30 rounded-full hover:bg-black/10 transition"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 border border-black/30 rounded-full hover:bg-black/10 transition"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - CAROUSEL GRID */}
          <div className="lg:col-span-3 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {insights.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[25%] px-4"
                >
                  <InsightCard item={item} reverse={index % 2 !== 0} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function InsightCard({
  item,
  reverse,
}: {
  item: any
  reverse: boolean
}) {
  return (
    <Link href="#" className="group block">

      {/* IMAGE FIRST */}
      {!reverse && (
        <div className="relative aspect-[4/5] overflow-hidden mb-6">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
          >
            <Bookmark size={14} />
          </button>
        </div>
      )}

      <p className="text-xs text-gray-500 mb-2 tracking-wide">
        {item.date}
      </p>

      <h3 className="text-lg font-medium leading-snug mb-6 group-hover:underline">
        {item.title}
      </h3>

      {/* IMAGE LAST */}
      {reverse && (
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
          >
            <Bookmark size={14} />
          </button>
        </div>
      )}

    </Link>
  )
}
