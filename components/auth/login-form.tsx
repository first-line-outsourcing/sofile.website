"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signupHref } from "@/lib/plans"

export function LoginPageHeader() {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Log in to Sofile
      </h1>
      <p className="mt-3 text-muted-foreground">Access your Sofile account.</p>
    </div>
  )
}

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-10 max-w-md rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Sign-in will be available once authentication is connected.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
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
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Log in
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        New to Sofile?{" "}
        <Link href={signupHref("free")} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          Start Free
        </Link>
      </p>
    </form>
  )
}
