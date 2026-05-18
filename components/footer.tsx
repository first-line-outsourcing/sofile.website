import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { signupHref } from "@/lib/signup-plans"
import { ArrowRight } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Press", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-transparent p-8 text-center backdrop-blur-xl md:p-12">
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            Ready to make your cloud visible?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start with 1 free cloud connection. No credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href={signupHref("free")}>
                Start Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border bg-transparent text-foreground hover:bg-secondary" asChild>
              <Link href="/contact-sales">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo/sofile-logo.svg"
                  alt="Sofile"
                  width={120}
                  height={32}
                />
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                The intelligent layer between your cloud storage and Adobe Creative Cloud.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-4 text-sm font-semibold text-foreground">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Sofile. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Twitter
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                GitHub
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
