"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getPlanFromQuery, signupPlans } from "@/lib/signup-plans"
import {
  onboardingProviders,
  type OnboardingProvider,
} from "@/lib/onboarding-providers"

export function OnboardingPageHeader() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Connect your first cloud provider
      </h1>
      <p className="mt-3 text-muted-foreground">
        Choose a provider to start using Sofile.
      </p>
    </div>
  )
}

export function OnboardingForm() {
  const searchParams = useSearchParams()
  const planId = getPlanFromQuery(searchParams.get("plan"))
  const [selected, setSelected] = useState<OnboardingProvider | null>(null)
  const [completed, setCompleted] = useState(false)

  function handleContinue(event: React.FormEvent) {
    event.preventDefault()
    if (!selected) return
    setCompleted(true)
  }

  if (completed) {
    return (
      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground">Almost there</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Provider connection for {selected} will be available in a future release.
          Your {signupPlans[planId].name} plan is ready when authentication ships.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleContinue} className="mx-auto mt-10 max-w-2xl">
      <ul className="grid gap-3 sm:grid-cols-2">
        {onboardingProviders.map((provider) => {
          const isSelected = selected === provider
          return (
            <li key={provider}>
              <button
                type="button"
                onClick={() => setSelected(provider)}
                className={cn(
                  "w-full rounded-xl border px-4 py-4 text-left text-sm font-medium transition-colors",
                  isSelected
                    ? "border-primary/50 bg-primary/10 text-foreground"
                    : "border-white/10 bg-white/[0.02] text-foreground/90 hover:border-white/20 hover:bg-white/[0.04]"
                )}
              >
                {provider}
              </button>
            </li>
          )
        })}
      </ul>

      <Button
        type="submit"
        disabled={!selected}
        className="mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
      >
        Continue
      </Button>
    </form>
  )
}
