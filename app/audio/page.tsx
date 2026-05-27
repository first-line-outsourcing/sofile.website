import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ADOBE_EXCHANGE_URL } from "@/lib/plans"
import { ArrowRight, Check, Download, Share2, Users, Mic, Headphones, AudioWaveform } from "lucide-react"

export default function AudioPage() {
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
            For Audio Professionals
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Your Audio Archive,{" "}
            <span className="text-primary">Finally Visible</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
            Preview waveforms, search audio files, and work directly with cloud-based sound libraries inside Adobe Audition.
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
              Audio files shouldn{"'"}t be{" "}
              <span className="text-muted-foreground">invisible.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Meaningless filenames",
                description: "Audio teams store thousands of sound files in cloud folders, but filenames don't tell the story.",
              },
              {
                title: "Blind downloads",
                description: "Finding the right clip often means blind downloads, endless previews, and wasted time.",
              },
              {
                title: "Not built for audio",
                description: "Cloud storage was never designed for audio workflows. You deserve better tools.",
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
              See Your Sound{" "}
              <span className="text-primary">Before You Download</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Sofile turns cloud audio archives into a visual workspace. Preview waveforms, quickly listen to files, and find the right sound before downloading. No guessing. No unnecessary transfers.
            </p>
          </div>

          <ul className="mx-auto mt-10 max-w-xl space-y-3">
            {[
              "Visual waveform previews for every audio file",
              "Quick listen without full downloads",
              "Search across all cloud buckets by name or metadata",
              "Browse your sound library inside Adobe Audition",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Speed & Access */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              Optimized Access
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Fast Access to{" "}
              <span className="text-primary">Large Audio Archives</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Sofile is optimized for real production work. Audio files are downloaded reliably with resumable transfers and background sync. Spend time editing, not managing files.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-card/80">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Download className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Resumable Transfers</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Downloads resume automatically after interruptions. Large audio libraries sync reliably without starting over.
              </p>
            </div>

            <div className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-card/80">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <AudioWaveform className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Background Sync</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Files sync in the background while you work. Your audio archive stays up to date without interrupting your session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share & Collaborate */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              <Share2 className="h-3.5 w-3.5" />
              Share Sessions
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Share Sessions{" "}
              <span className="text-primary">Without Missing Files</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Share Adobe Audition sessions with linked cloud audio. Sofile automatically keeps referenced files in sync so collaborators open projects without missing assets.
            </p>
          </div>

          <ul className="mx-auto mt-10 max-w-xl space-y-3">
            {[
              "Export sessions with cloud asset links intact",
              "Collaborators sync audio from the same cloud source",
              "No missing files or broken references",
              "Works across teams with shared bucket access",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/80">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who It's For */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
              Who It{"'"}s For
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built for Audio Professionals
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                icon: Mic,
                title: "Podcasters",
              },
              {
                icon: Headphones,
                title: "Sound Designers",
              },
              {
                icon: AudioWaveform,
                title: "Audio Editors",
              },
              {
                icon: Users,
                title: "Voice-over Teams",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-xl transition-all hover:border-primary/30 hover:bg-card/80"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
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
              Ready to make your audio archive visible?
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
