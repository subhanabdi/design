"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Bookmark } from "lucide-react"
import { useState, useEffect, useRef } from "react"

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
]

export default function InsightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  // 🔥 Clone first 4 items for smooth loop
  const extendedInsights = [...insights, ...insights.slice(0, 4)]

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // 🔥 Reset without animation when end reached
  useEffect(() => {
    if (currentIndex === insights.length) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(0)
      }, 700)
    } else {
      setIsTransitioning(true)
    }
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? insights.length - 1 : prev - 1
    )
  }

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

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3 overflow-hidden">
            <div
              ref={sliderRef}
              className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {extendedInsights.map((item, index) => (
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
