"use client"

import Link from "next/link"
import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProviderConnectionFailedCard() {
  return (
    <div className="mx-auto mt-10 max-w-xl">
      <div className="sofile-gradient-border-card overflow-hidden rounded-2xl bg-white/[0.02] p-6 text-center backdrop-blur-xl md:p-8">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
          <XCircle className="h-6 w-6 text-muted-foreground/70" aria-hidden />
        </div>

        <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Connection was not completed
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          No provider was added.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="/onboarding">Try again</Link>
          </Button>
          <Button
            variant="outline"
            className="border-white/15 bg-transparent text-foreground hover:bg-white/[0.04]"
            asChild
          >
            <Link href="/">Return to Sofile</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

