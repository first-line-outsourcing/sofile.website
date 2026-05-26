export type ProviderConnectionType = "oauth" | "credentials"

export type OnboardingProvider = {
  id: string
  name: string
  type: ProviderConnectionType
  /** Path to logo under /images/icons/ — optional */
  logo?: string
}

export const oauthProviders: OnboardingProvider[] = [
  { id: "dropbox", name: "Dropbox", type: "oauth", logo: "/images/icons/icon_dropbox.svg" },
  { id: "onedrive", name: "OneDrive", type: "oauth" },
  { id: "google-drive", name: "Google Drive", type: "oauth", logo: "/images/icons/icon_googlecloud.svg" },
]

export const credentialsProviders: OnboardingProvider[] = [
  { id: "amazon-s3", name: "Amazon S3", type: "credentials", logo: "/images/icons/icon_awss3.svg" },
  { id: "backblaze-b2", name: "Backblaze B2", type: "credentials", logo: "/images/icons/icon_backblaze.svg" },
  { id: "google-cloud-storage", name: "Google Cloud Storage", type: "credentials", logo: "/images/icons/icon_googlecloud.svg" },
  { id: "ibm-cos", name: "IBM COS", type: "credentials" },
]
