"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Bookmark } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const insights = [
  {
    image: "/images/insight-1.jpg",
    date: "09 Nov, 2025",
    title: "Digital Transformation Beyond Technology",
  },
  {
    image: "/images/insight-2.jpg",
    date: "04 Nov, 2025",
    title: "The Power of Strategic Partnerships",
  },
  {
    image: "/images/insight-3.jpg",
    date: "29 Oct, 2025",
    title: "The Evolving MENA Investment Landscape",
  },
  {
    image: "/images/insight-4.jpg",
    date: "20 Oct, 2025",
    title: "Technology as a Growth Catalyst",
  },
]

export default function InsightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Determine items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (insights.length - itemsPerPage + 1))
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlay, itemsPerPage])

  const handlePrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev === 0 ? insights.length - itemsPerPage : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % (insights.length - itemsPerPage + 1))
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaX > 0) {
      handleNext()
    } else if (e.deltaX < 0) {
      handlePrevious()
    }
  }

  const handleTouchStart = useRef(0)
  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX
    const diff = handleTouchStart.current - endX

    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrevious()
    }
  }

  return (
    <section id="insights" className="py-20 lg:py-28 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-8">
          {/* Left Side - Title */}
          <div className="flex-shrink-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Our Latest
              <br />
              <span className="text-foreground">Insights</span>
            </h2>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors duration-300 group"
            >
              View all
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 lg:mt-0">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full border border-border hover:border-foreground hover:bg-foreground/5 transition-all duration-300 group"
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-border hover:border-foreground hover:bg-foreground/5 transition-all duration-300 group"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="overflow-hidden rounded-2xl"
          onWheel={handleWheel}
          onTouchStart={(e) => (handleTouchStart.current = e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {insights.map((insight, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full lg:w-1/3 md:w-1/2 px-0 first:pl-0"
                style={{ minWidth: `${100 / itemsPerPage}%` }}
              >
                <Link href="#" className="group block h-full pr-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                    <Image
                      src={insight.image || "/placeholder.svg"}
                      alt={insight.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                    {/* Bookmark Button */}
                    <button
                      className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                      aria-label="Save article"
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    >
                      <Bookmark className="w-5 h-5 text-foreground hover:fill-accent hover:text-accent transition-all duration-300" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                      {insight.date}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground leading-snug group-hover:text-accent transition-colors duration-300">
                      {insight.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {Array.from({ length: Math.max(0, insights.length - itemsPerPage + 1) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-foreground w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}
