"use client"

import Image from "next/image"

const clients = [
  { name: "Travel", logo: "/images/Logo-1.png" },
  { name: "Octopus", logo: "/images/Logo.png" },
  { name: "Life Fitness", logo: "/images/logo2.png" },
  { name: "Stoli", logo: "/images/logo3.png" },
  { name: "TRUE", logo: "/images/logo4.png" },
  { name: "CYBEX", logo: "/images/logo5.png" },
  { name: "Nautilus", logo: "/images/logo6.png" },
  { name: "PRECOR", logo: "/images/Logo1.png" },
]

export default function ClientsSection() {
  return (
    <section className="py-28 px-8 lg:px-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-4 gap-20 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-semibold tracking-tight">
              Our clients
            </h2>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">

            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-20"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center p-8">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 120px, 150px"
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