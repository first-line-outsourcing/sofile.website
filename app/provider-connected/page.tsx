import { Suspense } from "react"
import { AuthShell } from "@/components/auth/auth-shell"
import { ProviderConnectedCard } from "@/components/provider-connection/provider-connected-card"

export default function ProviderConnectedPage() {
  return (
    <AuthShell>
      <Suspense fallback={<div className="mx-auto mt-10 h-48 max-w-xl animate-pulse rounded-2xl bg-white/[0.02]" />}>
        <ProviderConnectedCard />
      </Suspense>
    </AuthShell>
  )
}

