"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProviderDisplayName, getProviderLogo } from "./provider-connection-utils"

export function ProviderConnectedCard() {
  const searchParams = useSearchParams()
  const provider = searchParams.get("provider")
  // source param is supported for analytics/debug but not shown in UI by design
  const providerName = getProviderDisplayName(provider)
  const logo = getProviderLogo(provider)

  return (
    <div className="mx-auto mt-10 max-w-xl">
      <div className="sofile-gradient-border-card overflow-hidden rounded-2xl bg-white/[0.02] p-6 text-center backdrop-blur-xl md:p-8">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-chart-2/30 bg-chart-2/10 shadow-[0_0_22px_rgba(34,211,238,0.18)]">
          <CheckCircle2 className="h-6 w-6 text-chart-2" aria-hidden />
        </div>

        {logo && (
          <div className="mt-5 flex justify-center">
            <div className="rounded-xl bg-white/[0.03] px-4 py-3">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={28}
                height={28}
                className="h-7 w-7 opacity-90"
              />
            </div>
          </div>
        )}

        <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {providerName ? `${providerName} connected` : "Provider connected"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Your storage provider has been added successfully.
        </p>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Return to the Sofile panel to browse, preview, and manage your cloud files.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {/* TODO: replace with deep link or panel return URL. */}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#">Return to Sofile</a>
          </Button>
          <Button
            variant="outline"
            className="border-white/15 bg-transparent text-foreground hover:bg-white/[0.04]"
            asChild
          >
            <Link href="/onboarding">Connect another provider</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

