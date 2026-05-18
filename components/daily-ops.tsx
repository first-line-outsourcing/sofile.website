import {
  ImageIcon,
  FileText,
  Tag,
  ArrowUpDown,
  GitBranch,
  HardDrive,
} from "lucide-react"

const ops = [
  {
    icon: ImageIcon,
    title: "Thumbnails & Waveforms",
    value: "See inside files",
    description: "Preview video & audio instantly.",
  },
  {
    icon: FileText,
    title: "Bulk Rename Templates",
    value: "Fix messy names",
    description: "Clean filenames in seconds.",
  },
  {
    icon: Tag,
    title: "Sidecar Metadata",
    value: "Tag and describe",
    description: "Find anything later.",
  },
  {
    icon: ArrowUpDown,
    title: "Transfer Queue",
    value: "Reliable uploads",
    description: "Transfers that never fail.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    value: "Track changes",
    description: "Know what changed.",
  },
  {
    icon: HardDrive,
    title: "Smart Cache",
    value: "Offline access",
    description: "Work without internet.",
  },
]

export function DailyOps() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            Daily Toolkit
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Your daily media workflow
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Everything you do — faster, clearer, reliable.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ops.map((op, index) => (
            <article
              key={op.title}
              className="group fade-in-up-soft h-full rounded-2xl border border-white/[0.04] bg-gradient-to-b from-white/[0.04] to-transparent p-5 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/25"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm">
                    <op.icon className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {op.value}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {op.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
