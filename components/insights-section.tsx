"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Bookmark } from "lucide-react"
import { useState } from "react"

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

  const itemsPerPage = 3
  const maxIndex = insights.length - itemsPerPage

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <section className="py-24 px-8 lg:px-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h2 className="text-5xl font-light leading-tight mb-6">
              Our Latest <br /> Insights
            </h2>

            <Link
              href="#"
              className="text-sm underline underline-offset-4 hover:opacity-70"
            >
              View all »
            </Link>
          </div>

          {/* NAVIGATION */}
          <div className="flex gap-3">
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

        {/* CAROUSEL */}
        <div className="overflow-hidden">
          <div
            className="flex gap-12 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {insights.map((item, index) => (
              <div
                key={index}
                className="min-w-[calc(100%/3-32px)] flex-shrink-0"
              >
                <Link href="#" className="group block">

                  {/* IMAGE */}
                  <div className="relative aspect-[4/5] overflow-hidden mb-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* BOOKMARK */}
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
                    >
                      <Bookmark size={16} />
                    </button>
                  </div>

                  {/* CONTENT */}
                  <p className="text-sm text-gray-500 mb-2">
                    {item.date}
                  </p>

                  <h3 className="text-xl font-medium leading-snug group-hover:underline">
                    {item.title}
                  </h3>

                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}