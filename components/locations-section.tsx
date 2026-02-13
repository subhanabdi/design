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
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef(0)

  // Responsive items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else {
        setItemsPerPage(2)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto play
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev >= locations.length - itemsPerPage ? 0 : prev + 1
        )
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlay, itemsPerPage])

  const maxIndex = locations.length - itemsPerPage

  const handlePrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX
    const diff = touchStartX.current - endX

    if (diff > 50) handleNext()
    if (diff < -50) handlePrevious()
  }

  return (
    <section className="py-24 px-8 lg:px-16 bg-[#d6cdc2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Title */}
          <div className="lg:w-1/4">
            <h2 className="text-5xl font-light tracking-tight leading-tight text-black">
              Our <br /> Locations
            </h2>
          </div>

          {/* Right Carousel */}
          <div className="lg:w-3/4 w-full relative">

            <div
              className="overflow-hidden"
              onTouchStart={(e) =>
                (touchStartX.current = e.touches[0].clientX)
              }
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    {/* Image Card */}
                    <div className="relative aspect-[4/3] overflow-hidden group cursor-pointer">

                      <Image
                        src={location.image}
                        alt={location.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

                      {/* Center Name */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-white text-3xl font-medium tracking-wide">
                          {location.name}
                        </h3>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={handlePrevious}
              className="absolute -left-14 top-1/2 -translate-y-1/2 p-3 border border-black/40 rounded-full hover:bg-black/10 transition"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-14 top-1/2 -translate-y-1/2 p-3 border border-black/40 rounded-full hover:bg-black/10 transition"
            >
              <ChevronRight size={22} />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}