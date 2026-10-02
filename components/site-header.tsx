'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold tracking-tight">Café Central</span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Specialty Coffee
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="#visit" className={cn(buttonVariants(), 'h-9 rounded-full px-5')}>
            Find us
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-base text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
