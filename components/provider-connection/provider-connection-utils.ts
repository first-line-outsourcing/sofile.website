export type ProviderSlug =
  | "google-drive"
  | "dropbox"
  | "onedrive"
  | "amazon-s3"
  | "backblaze-b2"
  | "gcs"
  | "ibm-cos"

export function getProviderDisplayName(provider: string | null): string | null {
  if (!provider) return null
  switch (provider) {
    case "google-drive":
      return "Google Drive"
    case "dropbox":
      return "Dropbox"
    case "onedrive":
      return "OneDrive"
    case "amazon-s3":
      return "Amazon S3"
    case "backblaze-b2":
      return "Backblaze B2"
    case "gcs":
      return "Google Cloud Storage"
    case "ibm-cos":
      return "IBM COS"
    default:
      return null
  }
}

export function getProviderLogo(provider: string | null): { src: string; alt: string } | null {
  if (!provider) return null
  switch (provider) {
    case "google-drive":
      return { src: "/images/icons/icon_googledrive.svg", alt: "Google Drive" }
    case "dropbox":
      return { src: "/images/icons/icon_dropbox.svg", alt: "Dropbox" }
    case "onedrive":
      return { src: "/images/icons/icon_onedrive.svg", alt: "OneDrive" }
    case "amazon-s3":
      return { src: "/images/icons/icon_awss3.svg", alt: "Amazon S3" }
    case "backblaze-b2":
      return { src: "/images/icons/icon_backblaze.svg", alt: "Backblaze B2" }
    case "gcs":
      return { src: "/images/icons/icon_gsc.svg", alt: "Google Cloud Storage" }
    case "ibm-cos":
      return { src: "/images/icons/icon_ibmcos.svg", alt: "IBM COS" }
    default:
      return null
  }
}

