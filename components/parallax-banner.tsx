import Image from "next/image"

export default function ParallaxBanner() {
  return (
    <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
      <Image
        src="/images/parallax-building.jpg"
        alt="Strategic insight global impact"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="absolute bottom-12 left-6 lg:left-12 z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
          Strategic Insight.
          <br />
          Global Impact.
        </h2>
      </div>
    </section>
  )
}
