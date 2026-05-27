export type ProviderColumnId =
  | "s3"
  | "gcs"
  | "dropbox"
  | "googleDrive"
  | "oneDrive"

export type CapabilityStatus =
  | "available"
  | "notAvailable"
  | "nativeIndex"
  | "providerApi"
  | "sofileGenerated"
  | "native"
  | "conditional"

export type ProviderCapabilityRow = {
  name: string
  description: string
  s3: CapabilityStatus
  gcs: CapabilityStatus
  dropbox: CapabilityStatus
  googleDrive: CapabilityStatus
  oneDrive: CapabilityStatus
}

export const providerColumns: {
  id: ProviderColumnId
  title: string
  subtext?: string
}[] = [
  {
    id: "s3",
    title: "S3-compatible",
    subtext: "AWS S3, Backblaze B2, IBM COS",
  },
  { id: "gcs", title: "GCS", subtext: "Google Cloud Storage" },
  { id: "dropbox", title: "Dropbox" },
  { id: "googleDrive", title: "Google Drive" },
  { id: "oneDrive", title: "OneDrive" },
]

export const providerCapabilities: ProviderCapabilityRow[] = [
  {
    name: "Instant Search",
    description: "Find content by filename, metadata and more",
    s3: "nativeIndex",
    gcs: "nativeIndex",
    dropbox: "providerApi",
    googleDrive: "providerApi",
    oneDrive: "providerApi",
  },
  {
    name: "Thumbnail Previews",
    description: "Quick visual previews of your media",
    s3: "sofileGenerated",
    gcs: "sofileGenerated",
    dropbox: "native",
    googleDrive: "native",
    oneDrive: "native",
  },
  {
    name: "Presentation Links",
    description:
      "Share curated media collections with clients and collaborators",
    s3: "available",
    gcs: "available",
    dropbox: "available",
    googleDrive: "available",
    oneDrive: "available",
  },
  {
    name: "Shared Projects",
    description: "Share project packages and linked assets",
    s3: "available",
    gcs: "available",
    dropbox: "available",
    googleDrive: "available",
    oneDrive: "available",
  },
  {
    name: "Storage Insights",
    description:
      "Analyze storage usage, waste, large files, and optimization opportunities",
    s3: "available",
    gcs: "available",
    dropbox: "notAvailable",
    googleDrive: "notAvailable",
    oneDrive: "notAvailable",
  },
  {
    name: "Sidecar Metadata (MAM-lite)",
    description: "Enrich, organize, and manage metadata",
    s3: "available",
    gcs: "available",
    dropbox: "notAvailable",
    googleDrive: "notAvailable",
    oneDrive: "notAvailable",
  },
  {
    name: "Bulk Rename & Normalize",
    description: "Rename and normalize files in bulk",
    s3: "available",
    gcs: "available",
    dropbox: "available",
    googleDrive: "available",
    oneDrive: "available",
  },
  {
    name: "Advanced Optimization",
    description:
      "Provider-aware recommendations for storage cost reduction",
    s3: "conditional",
    gcs: "conditional",
    dropbox: "notAvailable",
    googleDrive: "notAvailable",
    oneDrive: "notAvailable",
  },
]

export const capabilityStatusLabels: Record<CapabilityStatus, string> = {
  available: "Available",
  notAvailable: "Not available",
  nativeIndex: "Native Index",
  providerApi: "Provider API",
  sofileGenerated: "Sofile-generated",
  native: "Native",
  conditional: "Available where provider supports it",
}
