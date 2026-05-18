import { Suspense } from "react"
import { AuthShell } from "@/components/auth/auth-shell"
import { OnboardingForm, OnboardingPageHeader } from "@/components/auth/onboarding-form"

export default function OnboardingPage() {
  return (
    <AuthShell>
      <OnboardingPageHeader />
      <Suspense fallback={<div className="mt-10 h-48 animate-pulse rounded-2xl bg-white/[0.02]" />}>
        <OnboardingForm />
      </Suspense>
    </AuthShell>
  )
}
