import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"

export default function CheckoutCancelPage() {
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
        <XCircle className="mx-auto h-12 w-12 text-muted-foreground/60" />
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
          Checkout was not completed
        </h1>
        <p className="mt-3 text-muted-foreground">No plan changes were applied.</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            {/* TODO: update href to deep-link back into Sofile panel when available */}
            <Link href="/">Return to Sofile</Link>
          </Button>
          <Button
            variant="outline"
            className="border-white/15 bg-transparent text-foreground hover:bg-white/[0.04]"
            asChild
          >
            <Link href="/#pricing">See plans</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
