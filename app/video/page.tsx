import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Download, Upload, Share2, Users, Building2, Tv } from "lucide-react"

export default function VideoPage() {
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
            For Video Editors
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Cloud-to-Timeline Speed{" "}
            <span className="text-primary">for Video Editors</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
            Search, preview, upload and download footage directly between your cloud storage and Adobe Premiere Pro. No browser tabs. No manual transfers. No "Media Offline".
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
              Start Free
              <ArrowRight className="h-4 w-4" />
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
              Your footage lives in the cloud.{" "}
              <span className="text-muted-foreground">Your workflow doesn't.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Browser-based access",
                description: "Constantly switching between Premiere and your cloud storage web console to find files.",
              },
              {
                title: "Manual downloads",
                description: "Downloading gigabytes of footage to local drives before you can even preview it.",
              },
              {
                title: "Missing media",
                description: "Sharing projects that break because collaborators can't access the same files.",
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
              From Cloud to Timeline{" "}
              <span className="text-primary">in Seconds</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Sofile integrates directly into Adobe Premiere Pro. Browse, search, and preview your cloud footage without leaving your editor.
            </p>
          </div>

          <ul className="mx-auto mt-10 max-w-xl space-y-3">
            {[
              "Search across all your cloud buckets from inside Premiere",
              "Visual thumbnails and waveforms instead of cryptic filenames",
              "Drag clips directly from cloud to your timeline",
              "Automatic proxy workflows for large files",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Upload/Download Speed */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              Optimized Transfers
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Optimized Transfers for{" "}
              <span className="text-primary">Real Production Work</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-card/80">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Download className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Smart Downloads</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Parallel downloads, automatic resume on interruption, and intelligent caching so you never download the same file twice.
              </p>
            </div>

            <div className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-card/80">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Upload className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Fast Uploads</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Upload finished exports directly to your cloud storage. Multi-part uploads for large files with progress tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Project */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              <Share2 className="h-3.5 w-3.5" />
              Share Project
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Share Projects.{" "}
              <span className="text-primary">Not Problems.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Export your Premiere project with linked cloud assets. Recipients get everything synced automatically—no more "Media Offline" errors.
            </p>
          </div>

          <ul className="mx-auto mt-10 max-w-xl space-y-3">
            {[
              "One-click project export with cloud asset links",
              "Recipients sync assets from the same cloud source",
              "Works across teams with shared bucket access",
              "Version tracking and conflict resolution built-in",
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
              Built for Video Professionals
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Freelancers",
                description: "Work with clients' cloud storage without downloading everything to your machine.",
              },
              {
                icon: Building2,
                title: "Small Studios",
                description: "Shared asset libraries that everyone can access from inside their editor.",
              },
              {
                icon: Tv,
                title: "Content Teams",
                description: "Streamlined workflows for teams producing high-volume video content.",
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
              Ready to speed up your workflow?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Join video editors who've eliminated browser tabs, manual downloads, and Media Offline errors from their daily work.
            </p>
            <div className="mt-6">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Start Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Free plan includes 1 cloud connection. No credit card required.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
