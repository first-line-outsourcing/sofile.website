import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
          <Link href="/">
            <Image
              src="/images/logo/sofile-logo.svg"
              alt="Sofile"
              width={120}
              height={32}
              priority
            />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-md px-6 py-24 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
          Payment complete
        </h1>
        <p className="mt-3 text-muted-foreground">
          Your subscription is being updated.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          You can return to Sofile. If your plan does not update immediately,
          refresh your subscription status in the panel.
        </p>
        <Button
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          {/* TODO: update href to deep-link back into Sofile panel when available */}
          <Link href="/">Return to Sofile</Link>
        </Button>
      </main>
    </div>
  )
}
