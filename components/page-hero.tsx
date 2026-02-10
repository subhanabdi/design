import Image from "next/image"

interface PageHeroProps {
  title: string
  image: string
}

export default function PageHero({ title, image }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[320px] flex items-end">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 px-6 lg:px-12 pb-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-background">{title}</h1>
      </div>
    </section>
  )
}
