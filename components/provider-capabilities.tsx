import Image from "next/image"
import {
  BarChart3,
  Check,
  Info,
  Layers3,
  Link2,
  Minus,
  Search,
  Sparkles,
  Tags,
  Users,
  Image as ImageIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  capabilityStatusLabels,
  providerCapabilities,
  providerColumns,
  type CapabilityStatus,
  type ProviderColumnId,
} from "@/lib/provider-capabilities"

const providerLogos: Partial<Record<ProviderColumnId, { src: string; alt: string }[]>> = {
  s3: [
    { src: "/images/icons/icon_awss3.svg", alt: "AWS S3" },
    { src: "/images/icons/icon_backblaze.svg", alt: "Backblaze B2" },
    { src: "/images/icons/icon_ibmcos.svg", alt: "IBM COS" },
  ],
  gcs: [{ src: "/images/icons/icon_gcs.svg", alt: "Google Cloud Storage" }],
  dropbox: [{ src: "/images/icons/icon_dropbox.svg", alt: "Dropbox" }],
  googleDrive: [{ src: "/images/icons/icon_googledrive.svg", alt: "Google Drive" }],
  oneDrive: [{ src: "/images/icons/icon_onedrive.svg", alt: "OneDrive" }],
}

function isPositiveStatus(status: CapabilityStatus): boolean {
  return status !== "notAvailable"
}

function AvailabilityBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-start gap-3">
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-chart-2/40 bg-chart-2/10 text-chart-2 shadow-[0_0_16px_rgba(34,211,238,0.16)]">
        <Check className="h-3 w-3" aria-hidden />
      </span>
      <span className="text-sm leading-snug text-foreground/90">{label}</span>
    </div>
  )
}

function UnavailableBadge() {
  return (
    <div className="flex items-center justify-start gap-3 text-muted-foreground">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5">
        –
      </span>
      <span className="text-sm leading-snug">Not available</span>
    </div>
  )
}

function CapabilityCell({ status }: { status: CapabilityStatus }) {
  const label = capabilityStatusLabels[status]
  const positive = isPositiveStatus(status)

  return (
    <div className="px-4 py-3 text-left">
      {positive ? <AvailabilityBadge label={label} /> : <UnavailableBadge />}
    </div>
  )
}

function ProviderColumnHeader({
  title,
  subtext,
  columnId,
}: {
  title: string
  subtext?: string
  columnId: ProviderColumnId
}) {
  const logos = providerLogos[columnId]

  return (
    <th className="min-w-[130px] border-b border-r border-white/[0.10] px-2 py-4 text-center align-top sm:min-w-[150px]">
      <div className="flex flex-col items-center">
        <div className="flex h-7 items-center justify-center gap-1.5">
          {logos?.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={20}
              height={20}
              className="h-5 w-5 opacity-80"
            />
          )) ?? null}
        </div>
        <span className="mt-1 block text-sm font-semibold text-foreground">
          {title}
        </span>
        {subtext && (
          <span className="mt-1 block text-xs leading-snug text-muted-foreground">
            {subtext}
          </span>
        )}
      </div>
    </th>
  )
}

function CapabilityMobileCard({
  name,
  description,
  values,
}: {
  name: string
  description: string
  values: { column: string; status: CapabilityStatus }[]
}) {
  const Icon = capabilityIcons[name] ?? Sparkles
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-start gap-3">
        <span className="sofile-glass-check-circle mt-0.5">
          <Icon className="h-3.5 w-3.5 text-primary/90" aria-hidden />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-foreground">{name}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-3">
        {values.map(({ column, status }) => (
          <li
            key={column}
            className="flex items-center justify-between gap-3 border-t border-white/[0.06] pt-3 first:border-t-0 first:pt-0"
          >
            <span className="text-xs text-muted-foreground">{column}</span>
            <div className="shrink-0">
              {isPositiveStatus(status) ? (
                <AvailabilityBadge label={capabilityStatusLabels[status]} />
              ) : (
                <UnavailableBadge />
              )}
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}

const capabilityIcons: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  "Instant Search": Search,
  "Thumbnail Previews": ImageIcon,
  "Presentation Links": Link2,
  "Shared Projects": Users,
  "Storage Insights": BarChart3,
  "Sidecar Metadata (MAM-lite)": Tags,
  "Bulk Rename & Normalize": Layers3,
  "Advanced Optimization": Sparkles,
}

export function ProviderCapabilities() {
  return (
    <section id="provider-capabilities" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            Providers
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Storage Provider Capabilities
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground md:text-base">
            Sofile works with a variety of cloud storage providers. Capabilities vary
            depending on each provider&apos;s native APIs and storage model.
          </p>
        </div>

        {/* Desktop / tablet table */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-white/[0.14] bg-white/[0.03] shadow-[0_0_48px_rgba(59,130,246,0.10)] md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.03]">
                  <th className="sticky left-0 z-20 min-w-[220px] border-b border-r border-white/[0.10] bg-white/[0.03] px-4 py-4 backdrop-blur-sm">
                    <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Capability
                    </span>
                  </th>
                  {providerColumns.map((col) => (
                    <ProviderColumnHeader
                      key={col.id}
                      columnId={col.id}
                      title={col.title}
                      subtext={col.subtext}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {providerCapabilities.map((row) => (
                  <tr
                    key={row.name}
                    className="hover:bg-white/[0.015]"
                  >
                    <td className="sticky left-0 z-10 border-b border-r border-white/[0.06] bg-background/95 px-4 py-3 backdrop-blur-sm">
                      <div className="flex items-start gap-3">
                        <span className="sofile-glass-check-circle mt-0.5">
                          {(() => {
                            const Icon = capabilityIcons[row.name] ?? Sparkles
                            return <Icon className="h-4 w-4 text-primary/90" aria-hidden />
                          })()}
                        </span>
                        <div>
                          <p className="text-[15px] font-semibold leading-snug text-foreground">
                            {row.name}
                          </p>
                          <p className="mt-1 text-sm leading-snug text-muted-foreground">
                            {row.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    {providerColumns.map((col, colIndex) => (
                      <td
                        key={col.id}
                        className={cn(
                          "border-b border-white/[0.08]",
                          colIndex < providerColumns.length - 1 && "border-r border-white/[0.06]"
                        )}
                      >
                        <CapabilityCell status={row[col.id]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {providerCapabilities.map((row) => (
            <CapabilityMobileCard
              key={row.name}
              name={row.name}
              description={row.description}
              values={providerColumns.map((col) => ({
                column: col.title,
                status: row[col.id],
              }))}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
