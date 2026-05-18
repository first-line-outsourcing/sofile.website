import { AuthShell } from "@/components/auth/auth-shell"
import { LoginForm, LoginPageHeader } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <AuthShell>
      <LoginPageHeader />
      <LoginForm />
    </AuthShell>
  )
}
