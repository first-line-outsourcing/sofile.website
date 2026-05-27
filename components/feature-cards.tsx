import { Zap, Eye, Share2 } from "lucide-react"

const features = [
  {
    icon: Zap,
    outcome: "Find any file in seconds",
    how: "Portable index searches across all your buckets locally. No servers, no waiting.",
    proof: "Search petabytes in milliseconds.",
  },
  {
    icon: Eye,
    outcome: "See inside your cloud",
    how: "Auto-generated thumbnails replace cryptic filenames.",
    proof: "Preview before you download.",
  },
  {
    icon: Share2,
    outcome: "Share without headaches",
    how: "Export projects with linked cloud assets. Recipients get everything synced.",
    proof: "Zero \"Media Offline\" errors.",
  },
]

export function FeatureCards() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            Core Features
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            The Core Trio
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.outcome}
              className="group fade-in-up-soft h-full rounded-2xl border border-white/[0.04] bg-gradient-to-b from-white/[0.04] to-transparent p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/25"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center p-3 rounded-xl bg-white/5 backdrop-blur-sm">
                    <feature.icon className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-foreground md:text-base">
                      {feature.outcome}
                    </h3>
                    <p className="text-xs text-muted-foreground md:text-sm md:leading-relaxed">
                      {feature.how}
                    </p>
                  </div>
                </div>

                <p className="text-xs font-medium text-primary/90">
                  {feature.proof}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
