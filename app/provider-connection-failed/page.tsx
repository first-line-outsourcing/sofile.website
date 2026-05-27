import { AuthShell } from "@/components/auth/auth-shell"
import { ProviderConnectionFailedCard } from "@/components/provider-connection/provider-connection-failed-card"

export default function ProviderConnectionFailedPage() {
  return (
    <AuthShell>
      <ProviderConnectionFailedCard />
    </AuthShell>
  )
}

