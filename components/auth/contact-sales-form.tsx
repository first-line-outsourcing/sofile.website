"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const interestOptions = [
  "Team deployment",
  "White-label panel",
  "Custom integration",
  "Storage provider partnership",
  "Other",
] as const

const selectClassName = cn(
  "border-input dark:bg-input/30 h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
)

export function ContactSalesPageHeader() {
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Talk to Sales
      </h1>
      <p className="mt-3 text-muted-foreground">
        For larger teams, vendors, storage providers, and custom deployments.
      </p>
    </div>
  )
}

export function ContactSalesForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground">Message sent</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Work email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" autoComplete="organization" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">
          Role / title{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input id="role" name="role" autoComplete="organization-title" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest">What are you interested in?</Label>
        <select
          id="interest"
          name="interest"
          className={selectClassName}
          defaultValue={interestOptions[0]}
          required
        >
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your team, workflow, or integration needs."
          required
        />
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        We&apos;ll help you evaluate Sofile for your workflow, storage provider, or custom
        deployment.
      </p>

      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Contact Sales
      </Button>
    </form>
  )
}
