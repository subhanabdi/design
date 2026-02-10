"use client"

import Image from "next/image";
import { useState } from "react";

const cardItems = [
  {
    id: 1,
    title: "GLOBAL PERSPECTIVE, LOCAL MARKETS",
    type: "text",
    span: "col-span-1 row-span-1",
  },
  {
    id: 2,
    title: "TAILORED STRATEGIES, REAL IMPACT",
    type: "text",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "THE PARTNERSHIP APPROACH",
    type: "image",
    image: "/images/team-huddle.jpg",
    alt: "Team members putting their hands together showing unity and collaboration",
    span: "col-span-1 row-span-2",
  },
  {
    id: 4,
    title: "PROVEN TRACK RECORD",
    type: "image",
    image: "/images/hands-stacked.jpg",
    alt: "Hands stacked together representing teamwork",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "PROVEN TRACK RECORD",
    type: "text",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    title: "TECHNOLOGY DRIVEN THINKING",
    type: "text",
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    title: "END TO END EXPERTISE",
    type: "text",
    span: "col-span-1 row-span-1",
  },
];

export default function WhyWeSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-[#ece5dc] via-[#ece5dc] to-[#e8dfd4] px-4 py-12 lg:px-8 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Title with animated underline */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Why We<span className="text-accent">?</span>
          </h2>
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          {/* Row 1, Col 1 - Text Card */}
          <div
            className="group relative bg-[#ddd5ca] p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:bg-[#d5cebf] cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col justify-end h-full min-h-[200px]">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
                GLOBAL PERSPECTIVE, LOCAL MARKETS
              </p>
            </div>
          </div>

          {/* Row 1, Col 2 - Text Card */}
          <div
            className="group relative bg-[#ddd5ca] p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:bg-[#d5cebf] cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col justify-end h-full min-h-[200px]">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
                TAILORED STRATEGIES, REAL IMPACT
              </p>
            </div>
          </div>

          {/* Row 1, Col 3 - Image Card spanning 2 rows */}
          <div
            className="group relative row-span-2 overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Image
              src="/images/about-team.jpg"
              alt="Team members putting their hands together showing unity and collaboration"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <p className="text-xs font-bold uppercase tracking-wider text-white drop-shadow-lg">
                THE PARTNERSHIP APPROACH
              </p>
            </div>
          </div>

          {/* Row 2, Col 1 - Image Card */}
          <div
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Image
              src="/images/location-office.jpg"
              alt="Hands stacked together representing teamwork"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
          </div>

          {/* Row 2, Col 2 - Text Card */}
          <div
            className="group relative bg-[#ddd5ca] p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:bg-[#d5cebf] cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col justify-end h-full min-h-[200px]">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
                PROVEN TRACK RECORD
              </p>
            </div>
          </div>
        </div>

        {/* Bottom mini row - desktop only */}
        <div className="mt-5 hidden lg:grid lg:grid-cols-3 lg:gap-5">
          <div></div>
          <div
            className="group relative bg-[#ddd5ca] p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:bg-[#d5cebf] cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(6)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col justify-end h-full min-h-[200px]">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
                TECHNOLOGY DRIVEN THINKING
              </p>
            </div>
          </div>
          <div
            className="group relative bg-[#ddd5ca] p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:bg-[#d5cebf] cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard(7)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col justify-end h-full min-h-[200px]">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
                END TO END EXPERTISE
              </p>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          <div className="group flex min-h-[200px] flex-col justify-end bg-[#ddd5ca] p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-lg hover:bg-[#d5cebf]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            <p className="text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
              GLOBAL PERSPECTIVE, LOCAL MARKETS
            </p>
          </div>
          <div className="group flex min-h-[200px] flex-col justify-end bg-[#ddd5ca] p-6 rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg hover:bg-[#d5cebf]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <p className="text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
              TAILORED STRATEGIES, REAL IMPACT
            </p>
          </div>
          <div className="group relative min-h-[240px] overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg col-span-1 sm:col-span-2">
            <Image
              src="/images/about-team.jpg"
              alt="Team members putting their hands together showing unity and collaboration"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-white drop-shadow-lg">
                THE PARTNERSHIP APPROACH
              </p>
            </div>
          </div>
          <div className="group relative min-h-[200px] overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg">
            <Image
              src="/images/location-office.jpg"
              alt="Hands stacked together representing teamwork"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
          </div>
          <div className="group flex min-h-[200px] flex-col justify-end bg-[#ddd5ca] p-6 rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg hover:bg-[#d5cebf]">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
              PROVEN TRACK RECORD
            </p>
          </div>
          <div className="group flex min-h-[200px] flex-col justify-end bg-[#ddd5ca] p-6 rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg hover:bg-[#d5cebf]">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
              TECHNOLOGY DRIVEN THINKING
            </p>
          </div>
          <div className="group flex min-h-[200px] flex-col justify-end bg-[#ddd5ca] p-6 rounded-2xl shadow-md transition-all duration-500 hover:shadow-lg hover:bg-[#d5cebf]">
            <p className="text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed">
              END TO END EXPERTISE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
