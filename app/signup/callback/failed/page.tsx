import { Suspense } from "react"
import { AuthShell } from "@/components/auth/auth-shell"
import { SignupFailedCard } from "@/components/auth/signup-failed-card"

export default function SignupCallbackFailedPage() {
  return (
    <AuthShell>
      <Suspense fallback={<div className="mx-auto mt-10 h-48 max-w-xl animate-pulse rounded-2xl bg-white/[0.02]" />}>
        <SignupFailedCard />
      </Suspense>
    </AuthShell>
  )
}
