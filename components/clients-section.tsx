"use client"

const clients = [
  "Harel",
  "Octopus",
  "Life Fitness",
  "Stoli",
  "TRUE",
  "CYBEX",
  "Nautilus",
  "PRECOR",
]

export default function ClientsSection() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
          Our clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center py-6 px-4"
            >
              <span className="text-lg font-bold text-muted-foreground tracking-wide">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
