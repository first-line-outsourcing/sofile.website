import Image from "next/image"
import { Check } from "lucide-react"

const valueBullets = [
  "Runs inside Adobe applications",
  "Built for professional media workflows",
  "Works with cloud storage directly in your creative tools",
] as const

const adobeBadges = [
  {
    src: "/images/badges/adobe-designed-for-creative-cloud.png",
    alt: "Designed for Adobe Creative Cloud",
    width: 220,
    height: 44,
  },
  {
    src: "/images/badges/adobe-technology-partner.png",
    alt: "Adobe Technology Partner Community",
    width: 200,
    height: 52,
  },
] as const

const supportedApps = [
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Audition",
  "Adobe InCopy",
] as const

function SectionHeader() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="mb-3 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary/90">
        Adobe Creative Cloud
      </p>
      <h2
        id="adobe-creative-cloud-heading"
        className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
      >
        Built for Adobe creative workflows
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        Sofile runs inside Adobe apps, so your team can browse, search, preview,
        import, and share cloud assets without leaving the creative workflow.
      </p>
    </header>
  )
}

function TrustCard() {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-6 backdrop-blur-xl md:p-7">
      <h3 className="text-base font-semibold text-foreground md:text-lg">
        Designed for Adobe Creative Cloud workflows
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Built for editors, designers, and production teams working across video,
        audio, design, and publishing.
      </p>

      <div className="mt-5 space-y-2.5" role="list" aria-label="Adobe partnership badges">
        {adobeBadges.map((badge) => (
          <div
            key={badge.alt}
            role="listitem"
            className="rounded-lg border border-white/[0.06] bg-black/25 px-3.5 py-2.5"
          >
            <Image
              src={badge.src}
              alt={badge.alt}
              width={badge.width}
              height={badge.height}
              className="h-9 w-auto max-w-full object-contain object-left md:h-10"
            />
          </div>
        ))}
      </div>

      <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-5">
        {valueBullets.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
            <Check
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function SupportedAppsCard() {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-6 backdrop-blur-xl md:p-7">
      <h3 className="text-base font-semibold text-foreground md:text-lg">
        Supported Adobe apps
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Use Sofile across the Adobe tools your team already works in.
      </p>

      <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {supportedApps.map((app) => (
          <li key={app} className="flex items-center gap-2.5 text-sm text-foreground/90">
            <Check
              className="h-3.5 w-3.5 shrink-0 text-primary/80"
              aria-hidden
            />
            <span>{app}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-white/[0.06] pt-4 text-[11px] leading-relaxed text-muted-foreground">
        Feature availability may vary by host application.
      </p>
    </article>
  )
}

export function AdobeCreativeCloudSection() {
  return (
    <section
      id="adobe-creative-cloud"
      className="relative overflow-hidden py-14 md:py-20"
      aria-labelledby="adobe-creative-cloud-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.08),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader />

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <TrustCard />
          <SupportedAppsCard />
        </div>
      </div>
    </section>
  )
}
