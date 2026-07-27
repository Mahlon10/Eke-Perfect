'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from "next/image";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
                  <div className="flex-shrink-0">
                      <div className="flex items-center gap-2">
                          <Image
                              src="/eke.png"
                              alt="EKE Perfect Logo"
                              width={78}
                              height={78}
                              className="object-contain"
                              priority
                          />
                      </div>
                  </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary transition-colors">
              Why Us
            </a>           
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-muted"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a
              href="#home"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-us"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="tel:0540779377"
              className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Call Now
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
