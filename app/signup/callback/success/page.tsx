import { Suspense } from "react"
import { AuthShell } from "@/components/auth/auth-shell"
import { SignupSuccessCard } from "@/components/auth/signup-success-card"

export default function SignupCallbackSuccessPage() {
  return (
    <AuthShell>
      <Suspense fallback={<div className="mx-auto mt-10 h-48 max-w-xl animate-pulse rounded-2xl bg-white/[0.02]" />}>
        <SignupSuccessCard />
      </Suspense>
    </AuthShell>
  )
}
