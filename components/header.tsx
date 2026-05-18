"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signupHref } from "@/lib/signup-plans"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/sofile-logo.svg"
            alt="Sofile"
            width={120}
            height={32}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/video" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Video
          </Link>
          <Link href="/audio" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Audio
          </Link>
          <Link href="/motion" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Motion
          </Link>
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#insights" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Insights
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href={signupHref("free")}>Start Free</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-muted-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 p-4">
            <Link href="/video" className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              Video
            </Link>
            <Link href="/audio" className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              Audio
            </Link>
            <Link href="/motion" className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              Motion
            </Link>
            <Link href="#features" className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              Features
            </Link>
            <Link href="#insights" className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              Insights
            </Link>
            <Link href="#pricing" className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              Pricing
            </Link>
            <Link href="#" className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              Docs
            </Link>
            <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button className="w-full bg-primary text-primary-foreground" asChild>
                <Link href={signupHref("free")}>Start Free</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
