import { Suspense } from "react"
import { AuthShell } from "@/components/auth/auth-shell"
import { ProviderSetupForm } from "@/components/auth/provider-setup-form"

export default function ProviderSetupPage({
  params,
}: {
  params: { provider: string }
}) {
  return (
    <AuthShell>
      <Suspense fallback={<div className="h-48 animate-pulse rounded-2xl bg-white/[0.02]" />}>
        <ProviderSetupForm providerId={params.provider} />
      </Suspense>
    </AuthShell>
  )
}
