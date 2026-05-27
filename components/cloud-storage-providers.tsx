import Image from "next/image"
import { Info } from "lucide-react"

type StorageProvider = {
  name: string
  logo: { src: string; alt: string }
}

/** Order matches reference: 4 top row, 3 centered bottom row */
const storageProviders: StorageProvider[] = [
  { name: "Dropbox", logo: { src: "/images/icons/icon_dropbox.svg", alt: "Dropbox" } },
  { name: "OneDrive", logo: { src: "/images/icons/icon_onedrive.svg", alt: "OneDrive" } },
  { name: "Google Drive", logo: { src: "/images/icons/icon_googledrive.svg", alt: "Google Drive" } },
  { name: "IBM COS", logo: { src: "/images/icons/icon_ibmcos.svg", alt: "IBM COS" } },
  {
    name: "Google Cloud Storage",
    logo: { src: "/images/icons/icon_gcs.svg", alt: "Google Cloud Storage" },
  },
  { name: "Amazon S3", logo: { src: "/images/icons/icon_awss3.svg", alt: "Amazon S3" } },
  {
    name: "Backblaze B2",
    logo: { src: "/images/icons/icon_backblaze.svg", alt: "Backblaze B2" },
  },
]

function ProviderTile({ provider }: { provider: StorageProvider }) {
  return (
    <div className="flex h-[72px] items-center justify-center gap-3 rounded-xl border border-white/[0.10] bg-transparent px-5 py-4 sm:h-[80px]">
      <Image
        src={provider.logo.src}
        alt={provider.logo.alt}
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 object-contain"
      />
      <span className="whitespace-nowrap text-base font-semibold text-foreground/95">
        {provider.name}
      </span>
    </div>
  )
}

export function CloudStorageProvidersSection() {
  return (
    <section
      id="cloud-storage-providers"
      className="relative overflow-hidden py-14 md:py-20"
      aria-labelledby="cloud-storage-providers-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(59,130,246,0.08),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="sofile-gradient-border-card sofile-storages-panel relative overflow-hidden px-6 py-10 md:px-10 md:py-12">
          {/* Corner glow accents */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
            aria-hidden
          />

          <header className="relative mx-auto max-w-2xl text-center">
            <p className="mb-3 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              Storages
            </p>
            <h2
              id="cloud-storage-providers-heading"
              className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Works with your cloud storage
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Sofile connects to leading cloud storage providers, so you can browse, manage, and share assets from the storage provider that fits your workflow.
            </p>
          </header>

          <div className="relative mx-auto mt-10 max-w-5xl">
            <ul className="flex flex-wrap justify-center gap-3">
              {storageProviders.map((provider) => (
                <li
                  key={provider.name}
                  className="w-full max-w-[280px] sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.5625rem)]"
                >
                  <ProviderTile provider={provider} />
                </li>
              ))}
            </ul>
          </div>

          <p className="relative mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
            <Info className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" aria-hidden />
            <span>Provider capabilities vary by API and storage model.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
