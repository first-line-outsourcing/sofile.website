"use client"

import { useSearchParams } from "next/navigation"
import { XCircle } from "lucide-react"

const REASON_LABELS: Record<string, string> = {
  "email-taken": "An account with this email already exists.",
  "invalid-token": "The sign-up link is invalid or has expired.",
  "expired": "The sign-up link has expired. Please request a new one.",
  "provider-error": "There was a problem with the authentication provider.",
}

function getReasonLabel(reason: string | null): string {
  if (!reason) return "Something went wrong during sign-up."
  return REASON_LABELS[reason] ?? reason;
}

export function SignupFailedCard() {
  const searchParams = useSearchParams()
  const reason = searchParams.get("reason")

  return (
    <div className="mx-auto mt-10 max-w-xl">
      <div className="sofile-gradient-border-card overflow-hidden rounded-2xl bg-white/[0.02] p-6 text-center backdrop-blur-xl md:p-8">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
          <XCircle className="h-6 w-6 text-muted-foreground/70" aria-hidden />
        </div>

        <h1 className="mt-5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Sign-up was not completed
        </h1>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          {getReasonLabel(reason)}
        </p>
      </div>
    </div>
  )
}
