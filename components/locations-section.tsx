"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const locations = [
  { image: "/images/location-lobby.jpg", alt: "Office lobby", name: "Dubai" },
  { image: "/images/location-angular.jpg", alt: "Modern architecture", name: "Abu Dhabi" },
  { image: "/images/location-425.jpg", alt: "425 Building entrance", name: "Riyadh" },
  { image: "/images/location-office.jpg", alt: "Executive office", name: "Doha" },
  { image: "/images/location-nyc.jpg", alt: "New York City skyline", name: "New York" },
  { image: "/images/location-doha.jpg", alt: "Doha Qatar waterfront", name: "London" },
]

export default function LocationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [itemsPerPage, setItemsPerPage] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Determine items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(1.5)
      } else {
        setItemsPerPage(2)
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
        setCurrentIndex((prev) => (prev + 1) % (locations.length - Math.floor(itemsPerPage) + 1))
      }, 6000)
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlay, itemsPerPage])

  const handlePrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, locations.length - Math.floor(itemsPerPage)) : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => Math.min(prev + 1, Math.max(0, locations.length - Math.floor(itemsPerPage))))
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

  const maxIndex = Math.max(0, locations.length - Math.floor(itemsPerPage))

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#d9cfc0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 gap-8">
          {/* Left Side - Title */}
          <div className="flex-shrink-0 lg:w-1/4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Our
              <br />
              Locations
            </h2>
          </div>

          {/* Right Side - Carousel */}
          <div className="flex-1 lg:w-3/4">
            {/* Carousel Container */}
            <div className="relative">
              <div
                ref={containerRef}
                className="overflow-hidden rounded-2xl"
                onTouchStart={(e) => (handleTouchStart.current = e.touches[0].clientX)}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                  }}
                >
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0"
                      style={{
                        width: itemsPerPage === 1.5 ? "calc(66.666% - 12px)" : `${100 / itemsPerPage}%`,
                      }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl group mx-0 md:mx-3 first:ml-0 last:mr-0">
                        <Image
                          src={location.image || "/placeholder.svg"}
                          alt={location.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

                        {/* Hover Indicator */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center">
                            <ChevronRight className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Location Label */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                          <p className="text-white font-semibold text-lg">{location.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 p-3 rounded-full border-2 border-foreground/30 hover:border-foreground hover:bg-foreground/10 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed group"
                aria-label="Previous location"
              >
                <ChevronLeft className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 p-3 rounded-full border-2 border-foreground/30 hover:border-foreground hover:bg-foreground/10 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed group"
                aria-label="Next location"
              >
                <ChevronRight className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="flex gap-2 justify-center mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlay(false)
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "bg-foreground w-8 h-2"
                      : "bg-foreground/30 w-2 h-2 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to location ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
