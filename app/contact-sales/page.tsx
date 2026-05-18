import { AuthShell } from "@/components/auth/auth-shell"
import {
  ContactSalesForm,
  ContactSalesPageHeader,
} from "@/components/auth/contact-sales-form"

export default function ContactSalesPage() {
  return (
    <AuthShell>
      <ContactSalesPageHeader />
      <ContactSalesForm />
    </AuthShell>
  )
}
