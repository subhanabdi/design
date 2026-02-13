"use client"

import Image from "next/image"

const clients = [
  { name: "Travel", logo: "/images/clients/travel.png" },
  { name: "Octopus", logo: "/images/clients/octopus.png" },
  { name: "Life Fitness", logo: "/images/clients/lifefitness.png" },
  { name: "Stoli", logo: "/images/clients/stoli.png" },
  { name: "TRUE", logo: "/images/clients/true.png" },
  { name: "CYBEX", logo: "/images/clients/cybex.png" },
  { name: "Nautilus", logo: "/images/clients/nautilus.png" },
  { name: "PRECOR", logo: "/images/clients/precor.png" },
]

export default function ClientsSection() {
  return (
    <section className="py-24 px-8 lg:px-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl font-medium mb-12">
          Our clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center p-8"
            >
              <div className="relative w-32 h-12">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}