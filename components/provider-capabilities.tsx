import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Info, Minus } from "lucide-react"
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
    { src: "/images/icons/icon_googlecloud.svg", alt: "Google Cloud Storage" },
  ],
  dropbox: [{ src: "/images/icons/icon_dropbox.svg", alt: "Dropbox" }],
}

function isPositiveStatus(status: CapabilityStatus): boolean {
  return status !== "notAvailable"
}

function CapabilityCell({ status }: { status: CapabilityStatus }) {
  const label = capabilityStatusLabels[status]
  const positive = isPositiveStatus(status)

  return (
    <div className="flex flex-col items-center gap-1.5 px-2 py-3 text-center sm:px-3">
      {positive ? (
        <Check className="h-4 w-4 text-primary" aria-hidden />
      ) : (
        <Minus className="h-4 w-4 text-muted-foreground/40" aria-hidden />
      )}
      <span
        className={cn(
          "text-xs leading-snug",
          positive ? "text-foreground/90" : "text-muted-foreground"
        )}
      >
        {label}
      </span>
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
    <th className="min-w-[120px] border-b border-white/[0.08] px-2 py-4 text-center align-bottom sm:min-w-[140px]">
      {logos && logos.length > 0 && (
        <div className="mb-2 flex items-center justify-center gap-1.5">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={20}
              height={20}
              className="h-5 w-5 opacity-80"
            />
          ))}
        </div>
      )}
      <span className="block text-xs font-semibold text-foreground sm:text-sm">{title}</span>
      {subtext && (
        <span className="mt-1 block text-[10px] leading-snug text-muted-foreground sm:text-[11px]">
          {subtext}
        </span>
      )}
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
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <h3 className="text-sm font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      <ul className="mt-4 space-y-3">
        {values.map(({ column, status }) => (
          <li
            key={column}
            className="flex items-center justify-between gap-3 border-t border-white/[0.06] pt-3 first:border-t-0 first:pt-0"
          >
            <span className="text-xs text-muted-foreground">{column}</span>
            <div className="flex items-center gap-2">
              {isPositiveStatus(status) ? (
                <Check className="h-3.5 w-3.5 text-primary" aria-hidden />
              ) : (
                <Minus className="h-3.5 w-3.5 text-muted-foreground/40" aria-hidden />
              )}
              <span className="text-xs text-foreground/90">
                {capabilityStatusLabels[status]}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
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
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 min-w-[200px] border-b border-r border-white/[0.08] bg-background/95 px-4 py-4 backdrop-blur-sm">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
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
                    className="border-b border-white/[0.06] last:border-b-0"
                  >
                    <td className="sticky left-0 z-10 border-r border-white/[0.06] bg-background/95 px-4 py-3 backdrop-blur-sm">
                      <p className="text-sm font-medium text-foreground">{row.name}</p>
                      <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                        {row.description}
                      </p>
                    </td>
                    <td className="border-white/[0.04]">
                      <CapabilityCell status={row.s3} />
                    </td>
                    <td>
                      <CapabilityCell status={row.dropbox} />
                    </td>
                    <td>
                      <CapabilityCell status={row.googleDrive} />
                    </td>
                    <td>
                      <CapabilityCell status={row.oneDrive} />
                    </td>
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
