"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signupHref } from "@/lib/plans"
import { ArrowRight, Play, Check } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    "Visual search and preview in cloud",
    "Drag assets directly to timeline",
    'Share projects with zero "Media Offline"',
  ]

  return (
    <section
      className={`
        relative overflow-hidden pt-28 pb-16 md:pb-100
        transition-all ease-out
        ${loaded
          ? "opacity-100 translate-y-0 md:pt-50"
          : "opacity-0 translate-y-6 md:pt-0"}
      `}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative z-10 max-w-xl text-center lg:text-left">
          
          {/* Badge */}
          <div
            className={`
              mb-5 inline-flex items-center gap-2 rounded-full
              border border-border/50 bg-secondary/50 px-4 py-1.5
              text-sm text-muted-foreground backdrop-blur-sm
              transition-all duration-700
              ${loaded ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-2xl translate-y-4"}
            `}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now in Public Beta
          </div>

          {/* Heading */}
          <h1
            className={`
              text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl
              transition-all duration-1200 delay-100
              ${loaded ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-2xl translate-y-6"}
            `}
          >
            Your Cloud Storage{" "}
            <span className="text-primary">Native in Adobe</span>
          </h1>

          {/* Paragraph */}
          <p
            className={`
              mt-5 text-lg text-muted-foreground
              transition-all duration-1200 delay-200
              ${loaded ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-2xl translate-y-6"}
            `}
          >
            Browse, search, preview, and import cloud media 
            <br/>directly inside your Adobe creative apps — 
            <br/>without moving files or opening storage consoles.
          </p>

          {/* Feature list with stagger */}
          <ul className="mt-10 space-y-2.5">
            {features.map((item, i) => (
              <li
                key={i}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
                className={`
                  flex items-center gap-3
                  transition-all duration-700
                  ${loaded
                    ? "opacity-100 blur-0 translate-y-0"
                    : "opacity-0 blur-2xl translate-y-4"}
                `}
              >
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className={`
                transition-all duration-700 delay-[650ms]
                ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              asChild
            >
              <Link href={signupHref("free")} target="_blank" rel="noopener noreferrer">Install Free on Adobe Exchange</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className={`
                transition-all duration-700 delay-[750ms]
                ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              <Play className="h-4 w-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          <p
            className={`
              mt-3 text-[12px] text-muted-foreground
              transition-all duration-700 delay-[850ms]
              ${loaded ? "opacity-100" : "opacity-0"}
            `}
          >
            Free plan includes 1 cloud connection. No credit card required.
          </p>
        </div>
      </div>

      {/* Visual */}
      <div
        className="
          pointer-events-none absolute inset-y-0 right-[-15vw] top-[15vh]
          hidden lg:flex items-center
          transition-all duration-1000 delay-300"
      >
        <Image
          src="/images/landing-banner-bg02.png"
          alt="Sofile interface inside Adobe"
          width={1600}
          height={1000}
          className={`
            absolute right-5 w-[75vw] max-w-none drop-shadow-2xl duration-2000 transition-all
            ${loaded
              ? "opacity-100 blur-0 translate-x-0 translate-y-0"
              : "opacity-0 blur-2xl translate-x-10 -translate-y-150"}
          `}
          priority
        />
        <Image
          src="/images/landing-banner-bg03.png"
          alt="Sofile interface inside Adobe"
          width={1600}
          height={1000}
          className={`
            absolute right-40 w-[75vw] scale-70 max-w-none drop-shadow-2xl
            transition-all duration-2000 delay-[350ms]
            ${loaded
              ? "opacity-100 blur-0 translate-y-10"
              : "opacity-0 blur-2xl -translate-y-150"}
          `}
          priority
        />
      </div>
    </section>
  )
}
