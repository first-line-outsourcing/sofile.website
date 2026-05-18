import { Suspense } from "react"
import { AuthShell } from "@/components/auth/auth-shell"
import { SignupForm, SignupPageHeader } from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <AuthShell>
      <SignupPageHeader />
      <Suspense fallback={<div className="mt-10 h-96 animate-pulse rounded-2xl bg-white/[0.02]" />}>
        <SignupForm />
      </Suspense>
    </AuthShell>
  )
}
