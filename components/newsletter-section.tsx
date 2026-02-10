"use client"

import { useState } from "react"
import Link from "next/link"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  return (
    <section id="newsletter" className="py-20 lg:py-28 px-6 lg:px-12 bg-secondary">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          Join our newsletter
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          Get the latest business trends and expert perspectives — straight to your inbox.
        </p>

        <div className="flex gap-0 mb-4">
          <input
            type="email"
            placeholder="Your Email Please"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
          />
          <button
            type="button"
            className="px-8 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            JOIN
          </button>
        </div>

        <p className="text-xs text-muted-foreground">
          To see how we may use your information, take a look at our{" "}
          <Link href="#" className="underline hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
