import Image from "next/image"
import Link from "next/link"

export function AuthShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/sofile-logo.svg"
              alt="Sofile"
              width={120}
              height={32}
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">{children}</main>
    </div>
  )
}
