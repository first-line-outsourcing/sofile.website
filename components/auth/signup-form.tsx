"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlanCard } from "@/components/auth/plan-card"
import { PlanSwitcher } from "@/components/auth/plan-switcher"
import { TrustBlock } from "@/components/auth/trust-block"
import { getPlanFromQuery, signupPlans } from "@/lib/signup-plans"

export function SignupPageHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Start using Sofile
      </h1>
      <p className="mt-3 text-muted-foreground">
        Create your account and connect your first cloud storage provider.
      </p>
    </div>
  )
}

export function SignupForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const planId = getPlanFromQuery(searchParams.get("plan"))
  const plan = signupPlans[planId]

  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const form = event.currentTarget
    const data = new FormData(form)
    const password = String(data.get("password") ?? "")
    const confirmPassword = String(data.get("confirmPassword") ?? "")

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    router.push(`/onboarding?plan=${planId}`)
  }

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-10">
      <div className="order-2 lg:order-1">
        <PlanCard plan={plan} className="lg:hidden" />

        <div className="mt-6 lg:mt-0">
          <PlanSwitcher activePlan={planId} />
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@studio.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" autoComplete="name" placeholder="Your name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">
              Company / studio name{" "}
              <span className="font-normal text-muted-foreground">(optional)</span>
            </Label>
            <Input id="company" name="company" autoComplete="organization" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}

          <p className="text-xs leading-relaxed text-muted-foreground">
            Your files stay in your cloud storage. Sofile connects through official
            provider APIs.
          </p>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {plan.ctaLabel}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </form>

        <div className="mt-6">
          <TrustBlock />
        </div>
      </div>

      <div className="order-1 hidden lg:order-2 lg:block">
        <PlanCard plan={plan} className="sticky top-24" />
      </div>
    </div>
  )
}
