import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ADOBE_EXCHANGE_URL } from "@/lib/plans"
import { ArrowRight, Check, Share2, Users, Building2, Palette, Megaphone } from "lucide-react"

export default function MotionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            For Motion Designers
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Master Your Motion Assets{" "}
            <span className="text-primary">in the Cloud</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
            Organize motion files, manage versions, and keep After Effects projects in sync across your cloud storage.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto" asChild>
              <Link href={ADOBE_EXCHANGE_URL} target="_blank" rel="noopener noreferrer">
                Start Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full gap-2 border-border bg-transparent text-foreground hover:bg-secondary sm:w-auto">
              Watch Demo
            </Button>
          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            Free plan includes 1 cloud connection. No credit card required.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Motion projects get messy{" "}
              <span className="text-muted-foreground">fast.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Version overload",
                description: "Motion design workflows generate dozens of versions, precomps, renders, and assets scattered across cloud folders.",
              },
              {
                title: "Duplicates and overwrites",
                description: "Files are duplicated, overwritten, or lost. There's no clear way to tell which version is current.",
              },
              {
                title: "Broken links",
                description: "Opening a project often means fixing broken links and guessing which version is the correct one to use.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/50 bg-card/30 p-5"
              >
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              The Solution
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              One Source of Truth{" "}
              <span className="text-primary">for Motion Design</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Sofile turns your cloud storage into a structured motion asset workspace. Browse assets visually, keep files organized, and work directly with cloud-based motion libraries inside After Effects.
            </p>
          </div>

          <ul className="mx-auto mt-10 max-w-xl space-y-3">
            {[
              "Browse motion assets visually across all cloud providers",
              "Structured workspace inside After Effects",
              "Keep files organized without manual folder management",
              "Work directly with cloud-based motion libraries",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Version Control */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              Version Control
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Stop Guessing Which{" "}
              <span className="text-primary">Version Is Right</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Sofile helps you keep track of motion assets and their versions. Understand what changed, which files are in use, and avoid accidental overwrites.
            </p>
          </div>

          <ul className="mx-auto mt-10 max-w-xl space-y-3">
            {[
              "Track asset versions across your cloud storage",
              "See which files are in use by active projects",
              "Avoid accidental overwrites with change awareness",
              "Less confusion, safer collaboration",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Share & Collaborate */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              <Share2 className="h-3.5 w-3.5" />
              Share & Collaborate
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Open Projects{" "}
              <span className="text-primary">Without Relinking</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Share After Effects projects with linked cloud assets. Sofile keeps referenced files available so collaborators can open projects without broken paths or missing media.
            </p>
          </div>

          <ul className="mx-auto mt-10 max-w-xl space-y-3">
            {[
              "Share After Effects projects with linked cloud assets",
              "Collaborators open projects without broken paths",
              "Referenced files stay available across the team",
              "No missing media, no relinking required",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              Who It's For
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built for Motion Professionals
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Motion Designers",
                description: "Manage complex project files and assets across cloud storage with visual clarity.",
              },
              {
                icon: Building2,
                title: "Animation Studios",
                description: "Keep team assets organized and projects shareable without broken links.",
              },
              {
                icon: Palette,
                title: "Brand & Marketing",
                description: "Access and reuse motion templates and brand assets from a single cloud workspace.",
              },
              {
                icon: Megaphone,
                title: "Creative Agencies",
                description: "Collaborate on motion projects across teams with consistent file access.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-card/80"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-xl md:p-12">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Bring order to your motion workflow.
            </h2>
            <div className="mt-6">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href={ADOBE_EXCHANGE_URL} target="_blank" rel="noopener noreferrer">
                  Start Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              1 cloud connection, no credit card required.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
