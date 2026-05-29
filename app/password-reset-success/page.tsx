import { AuthShell } from "@/components/auth/auth-shell"
import { PasswordResetSuccessCard } from "@/components/auth/password-reset-success-card"

export default function PasswordResetSuccessPage() {
  return (
    <AuthShell>
      <PasswordResetSuccessCard />
    </AuthShell>
  )
}
