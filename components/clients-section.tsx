"use client"

import Image from "next/image"

const clients = [
  { name: "Travel", logo: "/images/travel.png" },
  { name: "Octopus", logo: "/images/octopus.png" },
  { name: "Life Fitness", logo: "/images/lifefitness.png" },
  { name: "Stoli", logo: "/images/stoli.png" },
  { name: "TRUE", logo: "/images/true.png" },
  { name: "CYBEX", logo: "/images/cybex.png" },
  { name: "Nautilus", logo: "/images/nautilus.png" },
  { name: "PRECOR", logo: "/images/precor.png" },
]

export default function ClientsSection() {
  return (
    <section className="py-24 px-8 lg:px-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-4 gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-medium">
              Our clients
            </h2>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-14">

            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center"
              >
                <div className="relative w-32 h-12 opacity-70 hover:opacity-100 transition duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}