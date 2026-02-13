"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/bety-logo.png"
            alt="Bety."
            width={80}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="p-2 text-foreground transition-colors hover:text-accent"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground transition-colors hover:text-accent"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-background ${
          mobileOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-foreground transition-colors hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
